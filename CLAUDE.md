# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Claude Design handoff bundle** for the True Light Baptist Church website (Baton Rouge, LA · Est. 1941). The `true-light-baptist-church/project/` directory contains HTML/JSX/CSS prototype files that must be implemented pixel-perfectly in a production framework. The prototypes are **not** the production codebase — they are design references to translate into real code.

## Prototype Architecture

The prototypes use React 18 + Babel Standalone loaded via CDN (no build step). Understanding the file split is essential before making any changes:

| File | Role |
|---|---|
| `tokens.css` | Design tokens — **source of truth** for all colors, type scale, spacing, radii, shadows, motion |
| `styles.css` | Global styles and component CSS; imports `tokens.css` |
| `placeholders.jsx` | SVG illustration components (`PhotoCongregation`, `PhotoPastor`, etc.) — replace with real photos in production |
| `chrome-hero.jsx` | `Header`, `Hero`, `Marquee`, `Pastor`, `Services` — shared across all pages |
| `content.jsx` | `Sermon`, `Ministries`, `Events` — homepage content sections |
| `engage.jsx` | `PrayerGive`, `Testimonials`, `Footer` — shared across all pages |
| `subpage.jsx` | All sub-page hero variants, full page components (`PageAbout`…`PageMembers`), and the `window.SUBPAGES` registry |

Each `.html` file loads all shared `.jsx` files in order, then renders `<Header>` + `<main>` + `<Footer>` via `ReactDOM.createRoot`.

## Pages

Eight pages exist as prototypes: `Homepage`, `About`, `Ministries`, `Watch`, `Events`, `Connect`, `Give`, `Members`.

- The homepage (`Homepage.html`) composes sections inline (Hero, Marquee, Pastor, Services, Sermon, Ministries, Events, PrayerGive, Testimonials, Footer).
- Sub-pages (`About.html` etc.) use `window.SUBPAGES['about']` to look up the page component from `subpage.jsx`.

## Design System

**Colors** (from `tokens.css`):
- `--tlbc-red: #A02319` — primary brand, buttons, eyebrows
- `--tlbc-maroon: #7A1A16` — deep backgrounds, footer
- `--tlbc-blue: #4FA1C6` — secondary accent, CTA
- `--tlbc-cream: #F4F1EC` — page background, cards
- `--tlbc-charcoal: #1E1E1E` — body text

**Typography**:
- Display/headings: **Playfair Display** (serif, italic weight used for emphasis in headlines)
- Body/UI: **Montserrat** (sans-serif)
- Eyebrows: 12px, `letter-spacing: 0.22em`, uppercase, red, with a `::before` red line rule

**Icons**: [Lucide](https://lucide.dev/) — rendered as `<i data-lucide="icon-name" className="ic">` and initialized with `window.lucide.createIcons()` in a `useEffect`.

**Layout**: `.tl-container` = max-width 1280px, centered, 32px padding. Sections alternate `section--cream` / `section--white` / `section--maroon`.

## Implementation Guidelines

- **Each page must be an imported component** — do not inline page content in routes/layouts.
- Replace all `Photo*` SVG placeholders with real `<img>` tags pointing to actual photos from `assets/` or a CMS.
- When implementing a section, read both `styles.css` and `tokens.css` — the CSS class names in the prototypes map directly to production class names to preserve.
- The `About.html` page was open at handoff and is the **primary design to implement first**; follow its imports to understand what's shared.
- Lucide icon initialization (`window.lucide.createIcons()`) becomes a standard `useEffect` in the production component tree — call it once after the app mounts.

## Assets

Logo variants live in `project/assets/`:
- `logo-red-on-cream.png` — used in the header
- `logo-white-transparent.png` — used in the footer and Members card
- `logo-icon.svg` — standalone icon mark

Sample photos in `project/uploads/` — three `.jpg` files available for use as real content.

## Church Details (for content)

- **Address**: 3836 North Street (homepage footer) / 4928 Government Street (subpages — use whichever the client confirms)
- **Sunday Worship**: 10:00 a.m. · Bible Study: 9:00 a.m. · Wednesday Prayer: 6:30 p.m.
- **Senior Pastor**: Pastor M. Williams / Pastor James Whitaker (prototype uses both; confirm with client)
- **Phone**: (225) 555-0149 · **Email**: hello@truelightbr.org
- **Online giving**: Stripe-powered, text "GIVE" to 84321
