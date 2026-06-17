# True Light Baptist Church — Design Guidelines

> Established 1941 · Baton Rouge, LA
> _"Since 1941 — the same gospel, told plainly."_

These guidelines define the visual language for the True Light Baptist Church website. The goal is a design that feels **warm, rooted, and dignified** — a historic Black Baptist congregation with deep local roots, presented with editorial polish rather than generic "church template" styling.

## Source of Truth

| Layer | File | Role |
|---|---|---|
| **Production tokens** | `app/globals.css` (`@theme` block) | **Authoritative.** Tailwind v4 theme + component classes that actually ship. |
| Prototype tokens | `true-light-baptist-church/project/tokens.css` | Original design reference. Use for intent; defer to `globals.css` where they differ. |
| Fonts | `app/layout.tsx` | `next/font` loads Playfair Display + Montserrat as CSS variables. |

When the prototype and production disagree, **production wins** (e.g. container is `1280px`, eyebrow tracking is `0.22em`).

---

## 1. Brand Voice & Design Principles

1. **Plain gospel, told beautifully.** Clean editorial layouts, generous whitespace, confident serif headlines. Never cluttered or busy.
2. **Rooted & historic.** Lean on the 1941 heritage — warm cream backgrounds, deep maroon, an "EST · 1941" register throughout.
3. **Warm, not corporate.** Soft pill buttons, friendly radii, human photography over stock illustration. Replace all `Photo*` SVG placeholders with real photos.
4. **Dignified contrast.** Alternate light cream sections with deep maroon/charcoal "anchor" sections to create rhythm down the page.
5. **Sweat the details.** Eyebrow rules, balanced text wrapping, hover lifts, and motion easing are part of the brand — not afterthoughts.

---

## 2. Color

### Brand palette

| Token | Hex | Use |
|---|---|---|
| `--color-tlbc-red` | `#A02319` | **Primary brand.** Buttons, eyebrows, links, accents. |
| `--color-tlbc-red-700` | `#8C1D14` | Red hover / press. |
| `--color-tlbc-red-600` | `#B12B22` | Lighter red accent. |
| `--color-tlbc-maroon` | `#7A1A16` | Deep section backgrounds, footer. |
| `--color-tlbc-maroon-900` | `#5C120F` | Deepest maroon. |
| `--color-tlbc-blue` | `#4FA1C6` | Secondary accent, CTAs, dividers, eyebrows on dark. |
| `--color-tlbc-blue-600` | `#3F8FB3` | Blue hover. |
| `--color-tlbc-blue-200` | `#B6D8E6` | Blue tint (emphasis text on dark). |
| `--color-tlbc-cream` | `#F4F1EC` | **Page background**, cards, text on dark. |
| `--color-tlbc-cream-200` | `#E9E3D8` | Dividers, darker cream. |
| `--color-tlbc-charcoal` | `#1E1E1E` | **Body text**, navigation. |
| `--color-tlbc-charcoal-700` | `#3A3A3A` | Secondary text (`.prose`, `.lead`). |
| `--color-tlbc-charcoal-500` | `#6B6B6B` | Muted text, captions, placeholders. |

### Usage rules

- **Page background is always cream** (`#F4F1EC`), never pure white.
- **Pure white** (`#fff`) is reserved for cards/surfaces and `.section--white`.
- **Red is the action color** — primary buttons, links, eyebrow rules. Don't use blue for primary actions.
- **Maroon/charcoal sections** are the dramatic anchors; use cream text and blue eyebrows on them.
- Maintain WCAG AA contrast: charcoal on cream/white, cream on maroon/charcoal. Avoid blue text on cream for body copy (decorative only).

---

## 3. Typography

Two families only.

| Family | CSS var | Role |
|---|---|---|
| **Playfair Display** (serif) | `--font-display` | Display, all headings, scripture. Italic for emphasis in headlines. |
| **Montserrat** (sans) | `--font-body` | Body, UI, eyebrows, buttons, forms. |

### Type scale (production `.display`/`.h*` classes)

| Class | Size | Weight | Notes |
|---|---|---|---|
| `.h1` | 56px → 44px (≤1024) → 40px (≤640) | 700 | Playfair, `letter-spacing: -0.02em`, `line-height: 1.04` |
| `.h2` | 44px → 32px (≤640) | 700 | `-0.018em`, `line-height: 1.08` |
| `.h3` | 26px | 700 | `-0.005em`, `line-height: 1.2` |
| `.display` | fluid (set per use) | 800 | Hero headlines, `-0.025em`, `line-height: 0.98` |
| `.lead` | 19px | 400 | Opening paragraph, charcoal-700, `max-width: 60ch` |
| `.prose` | 16px | 400 | Body copy, charcoal-700, `line-height: 1.65` |
| body default | 17px | 400 | Montserrat, `line-height: 1.6` |
| `.caption` | 13px | 400 | charcoal-500 |

### Headline style

- Use **italic Playfair** to emphasize a key word, often in blue on dark backgrounds:
  `Since <em>1941.</em> The same gospel, told plainly.`
- Always apply `text-wrap: balance` to headings, `text-wrap: pretty` to body.

### Eyebrows (`.eyebrow`)

Signature label treatment above section headings:
- 12px, `font-weight: 600`, **`letter-spacing: 0.22em`**, uppercase, red.
- Renders a **24×2px red rule** before the text via `::before`.
- Variants: `.eyebrow--blue`, `.eyebrow--cream` (on dark), `.eyebrow--plain` (no rule).

### Scripture (`.tlbc-scripture`)

Italic Playfair at h2 size, `line-height: 1.35`; the reference (`.ref`) is uppercase Montserrat, tracked, red (blue on dark).

---

## 4. Layout & Spacing

### Container

```css
.tl-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
/* ≤640px: padding 0 20px */
```

### Sections

Sections create vertical rhythm by alternating backgrounds.

| Class | Background | Padding |
|---|---|---|
| `.section` | — | `120px 0` (→ `80px` ≤640) |
| `.section--tight` | — | `88px 0` (→ `60px` ≤640) |
| `.section--cream` | `#F4F1EC` | page tone |
| `.section--white` | `#fff` | surface tone |
| `.section--maroon` | `#7A1A16`, cream text | dark anchor |
| `.section--blue` | `#4FA1C6`, cream text | accent anchor |
| `.section--charcoal` | `#18130F`, cream text | deepest anchor |

**Rhythm rule:** don't stack two identical backgrounds. Cream → white → cream, broken periodically by a maroon/charcoal anchor section.

### Spacing scale (8pt base)

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 56 · 72 · 96 · 128` (px). Prefer these steps for margins, padding, and gaps.

### Section headers (`.section-head`)

- Default: stacked column, `max-width: 720px`, `gap: 18px`.
- `.section-head--center` for centered intros.
- `.section-head--row` for heading-left / action-right (collapses to column ≤1024px).
- `.divider-3` = 56×3px blue rule used as a subtle separator.

---

## 5. Components

### Buttons (`.btn`)

Pill-shaped (`border-radius: 999px`), Montserrat 600, 14px, with a hover lift (`translateY(-1px)`).

| Variant | Style |
|---|---|
| `.btn--red` | Primary. Red fill, white text, soft red shadow → darkens on hover. |
| `.btn--white` | White fill, charcoal text → cream on hover. |
| `.btn--cream` | Cream fill, charcoal text → white on hover. |
| `.btn--ghost-light` | Transparent w/ cream inset border — use on dark sections. |
| `.btn--ghost-dark` | Transparent w/ charcoal inset border → fills charcoal on hover. |
| `.btn--play` | 64px circular white play button, red icon (sermon/video). |

Sizes: `.btn--lg` (17×32), default (14×26), `.btn--sm` (10×18). Icons inside buttons use `.ic` (18px).

### Forms

- `.form-field` → stacked `gap: 8px`.
- `.form-label-text` → 11px uppercase tracked **red** label.
- `.form-input` → white, 10px radius, subtle border; focus shows red border + `0 0 0 4px rgba(160,35,25,0.12)` ring.

### Cards & surfaces

- White background, radius `--radius-lg: 14px` (default card) or `--radius-xl: 22px` (large/hero panel).
- Shadows from the scale: `--shadow-sm` resting, `--shadow-md`/`--shadow-lg` on hover or for elevated panels.

### Breadcrumbs (`.crumb`)

12px uppercase, tracked `0.18em`, cream-at-62%-opacity on dark hero headers.

### Icons

[Lucide](https://lucide.dev/) only. In production, render Lucide React components (the prototype's `<i data-lucide>` + `window.lucide.createIcons()` becomes a standard React import / `useEffect`). Base icon class `.ic`.

---

## 6. Radii, Shadows, Motion

**Radii:** `xs 4 · sm 6 · md 10 · lg 14 · xl 22 · pill 999 · circle 50%`. Buttons are always pills; cards lean to `lg`/`xl`.

**Shadows** (from prototype `tokens.css`):
- `--shadow-sm` resting cards · `--shadow-md` raised · `--shadow-lg` hero/modal · `--shadow-on-red` for red CTAs.

**Motion:**
- Easing: `--ease-out: cubic-bezier(0.22, 0.61, 0.36, 1)` (default), `--ease-in-out` for reversible.
- Duration: `fast 140ms` (transforms), `base 220ms` (color/shadow), `slow 420ms`.
- Named animations: `--animate-marquee` (38s), `--animate-ticker` (40s), `--animate-livepulse` (live badge), `--animate-pulsedot`.
- Respect `prefers-reduced-motion` — disable marquees/pulses for users who opt out.

---

## 7. Responsive

Mobile-first intent; key breakpoints:

| Breakpoint | Changes |
|---|---|
| ≤1100px | Hero bar padding tightens. |
| ≤1024px | `.h1` → 44px; `.section-head--row` stacks. |
| ≤860px | Hero stats bar reflows (stats `flex: 1 1 44%`, CTA full-width). |
| ≤640px | Section padding 80/60px; container padding 20px; `.h1` 40px, `.h2` 32px; hero bar stacks fully. |
| ≤480px | Hero stat cells go full-width. |

Use `clamp()` for fluid hero display sizes. `html, body { overflow-x: clip; }` guards against marquee/decorative overflow (note: `clip`, not `hidden`, to preserve sticky positioning).

---

## 8. Architecture Conventions

- **Each page is an imported component** — no inline page content in routes/layouts (e.g. `app/(site)/about/page.tsx` renders `<PageAbout />` from `components/pages/`).
- Page components live in `components/pages/`; shared sections in `components/home/`, `components/layout/`, etc.
- **Reuse the design-system classes** (`.eyebrow`, `.btn`, `.section`, `.display`, `.h1`…) rather than re-deriving styles. They map 1:1 from the prototypes to preserve the design.
- Pull dynamic content (beliefs, leaders, sermons, events) from the CMS via `lib/db/queries`, not hardcoded copy.
- Replace every `Photo*` SVG placeholder with real `<img>` content.

---

## 9. Logos & Imagery

Logo variants in `true-light-baptist-church/project/assets/` (and `public/`):

| Asset | Use |
|---|---|
| `logo-red-on-cream.png` | Header on cream background. |
| `logo-white-transparent.png` | Footer, Members card, dark sections. |
| `logo-icon.svg` | Standalone icon mark. |

**Imagery:** warm, real congregation photography. Favor candid, human moments over staged stock. Treat photos editorially — full-bleed in heroes, rounded (`lg`/`xl`) in cards.

---

## Quick Reference

```
Background:  cream #F4F1EC  (never plain white pages)
Action:      red #A02319    (→ hover #8C1D14)
Accent:      blue #4FA1C6
Anchor:      maroon #7A1A16 / charcoal #18130F  (cream text)
Text:        charcoal #1E1E1E / #3A3A3A / #6B6B6B
Display:     Playfair Display 700–800, italic for emphasis
Body/UI:     Montserrat 400–600, 17px / 1.6
Eyebrow:     12px · 600 · 0.22em · uppercase · red · 24×2px rule
Buttons:     pill · Montserrat 600 · hover lift -1px
Container:   1280px · 32px gutter (20px mobile)
Section:     120px vertical (80px mobile) · alternate cream/white/maroon
Easing:      cubic-bezier(0.22, 0.61, 0.36, 1) · 220ms
```
