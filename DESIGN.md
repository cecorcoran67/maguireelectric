---
name: Maguire Electric Design System
brand: Maguire Electric Inc.
direction: Industrial craft — deep charcoal/navy, warm electric amber, metal atmosphere
---

# Maguire Electric — Design System

Single source of truth for visual tokens. Map every UI value to these tokens; do not invent one-offs.

## Brand

- **Name:** Maguire Electric (hero-level signal on the home first viewport)
- **Motto:** The quality is remembered long after the price is forgotten
- **Tone:** Capable, local, trustworthy — craft over flash

## Color

| Token | Value | Use |
|-------|-------|-----|
| `--color-ink` | `#0b1016` | Primary text on light, deepest surface |
| `--color-navy` | `#121a24` | Hero / dark section backgrounds |
| `--color-slate` | `#1a2533` | Elevated dark panels, footer |
| `--color-steel` | `#5c6d80` | Muted text on dark, borders |
| `--color-mist` | `#b8c4d1` | Secondary text on dark |
| `--color-paper` | `#e6ebf0` | Light page background (cool, not cream) |
| `--color-fog` | `#f3f6f8` | Alternating light sections |
| `--color-amber` | `#e09a12` | Primary accent / CTAs |
| `--color-amber-hot` | `#f0b429` | Accent hover |
| `--color-ember` | `#c47d0a` | Accent pressed |
| `--color-white` | `#ffffff` | Text on dark, form surfaces |

**Pairings (WCAG AA):** ink on paper/fog; white on navy/slate; ink on amber; white on amber (large text / buttons only when contrast holds).

## Typography

| Token | Family | Use |
|-------|--------|-----|
| `--font-display` | `"Oswald", sans-serif` | Brand wordmark, section headlines |
| `--font-body` | `"Manrope", sans-serif` | Body, nav, forms, UI |

| Token | Size | Notes |
|-------|------|-------|
| `--text-brand` | `clamp(3rem, 10vw, 6.5rem)` | Home hero brand |
| `--text-h1` | `clamp(2.25rem, 5vw, 3.5rem)` | Page titles |
| `--text-h2` | `clamp(1.75rem, 3.5vw, 2.5rem)` | Section titles |
| `--text-h3` | `1.25rem` | Subheads |
| `--text-body` | `1.0625rem` | Default copy |
| `--text-sm` | `0.875rem` | Meta, captions |
| `--leading-tight` | `1.05` | Display |
| `--leading-body` | `1.65` | Prose |
| `--tracking-display` | `0.04em` | Oswald headlines |
| `--tracking-brand` | `0.06em` | Brand wordmark |

## Spacing

| Token | Value |
|-------|-------|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.5rem` |
| `--space-6` | `2rem` |
| `--space-7` | `3rem` |
| `--space-8` | `4rem` |
| `--space-9` | `6rem` |
| `--space-section` | `clamp(4rem, 10vw, 7rem)` |
| `--gutter` | `clamp(1.25rem, 4vw, 2.5rem)` |
| `--max-width` | `72rem` |
| `--max-prose` | `38rem` |

## Layout rules

1. **One composition** on the home first viewport — brand, one headline, one support line, CTA group, full-bleed hero image.
2. **Brand first** — Maguire Electric must remain the dominant signal if the nav were removed.
3. **Full-bleed hero** — edge-to-edge image plane; no inset media cards in the hero.
4. **No hero overlays** — no floating badges, chips, or stickers on hero media.
5. **One job per section** — one headline, one short support sentence.
6. **Cards** — default off; allowed only for interactive containers (contact form).
7. **Atmosphere** — navy gradient + subtle grain/metal sheen; not flat single-color fields.

## Motion

| Token | Value | Use |
|-------|-------|-----|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrances |
| `--duration-fast` | `180ms` | Hover |
| `--duration-med` | `500ms` | Reveals |
| `--duration-hero` | `900ms` | Hero rise |

Ship three intentional motions: hero fade/rise, section reveal on scroll, CTA hover lift.

## Radii & borders

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | `2px` | Tight industrial |
| `--radius-md` | `4px` | Buttons, inputs |
| `--radius-lg` | `8px` | Form panel only |
| `--border-subtle` | `1px solid color-mix(in srgb, var(--color-steel) 40%, transparent)` | Dividers |

## Components

### Header
- Sticky; translucent navy over content; wordmark left; nav + call button right.
- Call button uses amber fill.

### Buttons
- **Primary:** amber fill, ink text, `--radius-md`
- **Secondary:** ghost on dark (mist border) or ink outline on light
- Hover: amber → amber-hot; slight translateY(-1px)

### Form
- Only card-like surface on the site: fog panel, `--radius-lg`, subtle border
- Labels above fields; amber focus ring

## Imagery

Hero and atmospheric photos should show real electrical work, panels, or finished residential/commercial context — not abstract gradients as the main visual idea.
