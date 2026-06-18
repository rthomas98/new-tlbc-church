# True Light Baptist Church

Next.js 16 site and CMS for True Light Baptist Church in Baton Rouge.

## Local Development

Install dependencies:

```bash
npm install
npx playwright install chromium
```

Copy the environment template and fill in local values:

```bash
cp .env.example .env.local
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3941](http://localhost:3941).

## Database

The CMS uses Postgres through Drizzle ORM.

```bash
npm run db:migrate
npm run db:seed
```

For shared or production databases, set `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` before seeding and rotate the seeded password after first login.

## Admin

Admin routes live under `/admin` and require Auth.js credentials login. Public routes live under `app/(site)`.

Content managed in the CMS includes services, ministries, ministry pages, events, testimonials, sermons/watch links, leaders, beliefs, giving content, announcements, and site settings.

## Production Notes

Required services/env values:

- `DATABASE_URL` for Postgres/Neon
- `AUTH_SECRET` for Auth.js
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` for contact/prayer email
- `BLOB_READ_WRITE_TOKEN` for production media uploads on Vercel
- `NEXT_PUBLIC_MAPBOX_TOKEN` for the public map

Useful validation commands:

```bash
npm run lint
npm test
npm run verify
```

`npm test` builds the production app and runs the Playwright smoke suite against
`next start` on port 3942. `npm run verify` is the full local release gate:
lint, production build, E2E smoke tests, and a moderate-or-higher dependency
audit.
