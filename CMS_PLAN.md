# True Light Church — CMS / Backend Plan

Turn the static Next.js 16 site into a content-managed app. Church staff log in and
edit content without touching code. Public site keeps its exact current design.

## Stack (decided)

| Layer | Choice |
|---|---|
| Database | **Neon Postgres** (Vercel Marketplace) |
| ORM / migrations | **Drizzle ORM** + `drizzle-kit` |
| Driver | `@neondatabase/serverless` → `drizzle-orm/neon-http` |
| Auth | **Auth.js v5** (NextAuth) — Credentials (email + password), **JWT sessions**, bcrypt hashes |
| Media | **Vercel Blob** (photo uploads) |
| Admin UI | Custom, built in this app at `/admin` (App Router + Server Actions) |

Why a custom admin (not Payload/Sanity): full ownership, no per-seat fees, everything
in this repo, and Drizzle gives a typed data layer that matches the existing
`lib/ministries.ts` style.

## Content model (Drizzle tables)

One source of truth per content type — this also removes today's duplication
(events + service times are currently defined in 2+ files).

- `users` — id, email (unique), password_hash, name, role (`admin` | `editor`), created_at
- `events` — day, month, date, category, title, description, location, time, photo_url, featured, published, sort
- `ministries` — mirrors existing `Ministry` type (slug, name, sub, tagline, hero, ages, schedule, location, leader, leaderRole, description[], expectations[], scripture) → JSONB for nested arrays
- `sermons` / `live_services` — title, speaker, date, video_url, thumbnail, description, published
- `testimonials` — quote, author, role, photo_url, published
- `leaders` — name, role, bio, photo_url, sort
- `beliefs` — title, body, sort
- `service_times` — label, day, time, sort  (Sunday Worship, Bible Study, Wed Prayer…)
- `giving_funds` — name, description, sort
- `giving_ways` — title, body, sort
- `site_settings` — singleton: address, phone, email, livestream_url, social links, marquee text

Nested arrays (e.g. ministry `description[]`, `expectations[]`) stored as JSONB columns.

## Build phases

### Phase 0 — Provision & wire (no app changes yet)
- Provision Neon via Vercel Marketplace → `DATABASE_URL` in env
- Install: `drizzle-orm @neondatabase/serverless`, `-D drizzle-kit`, `next-auth@beta @auth/drizzle-adapter bcryptjs @vercel/blob`
- `drizzle.config.ts`, `lib/db/index.ts` (neon-http client), `lib/db/schema.ts`

### Phase 1 — Schema + seed
- Write all tables in `schema.ts`
- `drizzle-kit generate` + `migrate`
- **Seed script** loads current hardcoded content from components → DB (zero content loss, site looks identical)

### Phase 2 — Read path (public site unchanged visually)
- Convert content components to Server Components that query Drizzle
- Pass data as props into existing presentational JSX (no style/markup changes)
- Delete the now-duplicated inline arrays

### Phase 3 — Auth
- `auth.ts` (Auth.js Credentials + JWT), `bcryptjs` verify
- `/admin/login` page + middleware protecting `/admin/*`
- Seed one admin user

### Phase 4 — Admin UI (`/admin`)
- Dashboard shell + nav per content type
- CRUD list + form pages (create/edit/delete, publish toggle, sort)
- Photo upload → Vercel Blob, store returned URL

### Phase 5 — Polish
- Zod validation on forms, optimistic UI, image `next/image` optimization
- Optional: draft/preview, audit fields, second editor role

## Notes / decisions still open
- Draft-vs-direct-publish workflow: start with **direct publish**, add review later if needed
- Keep `ChurchPhoto` keyed photos working during transition (map keys → DB photo_url)
