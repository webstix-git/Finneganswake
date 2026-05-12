# Finnegan's Wake — Next.js 14 Starter

A working Next.js (App Router) port of the HTML mockup. Same design tokens, same copy, same logo. Use this as the starting point and refine inside V0 or hand-edit.

## Quick start

```sh
cd 03-nextjs
npm install
npm run dev
# open http://localhost:3000
```

## What's inside

```
app/
  layout.tsx           # Loads fonts, wraps in <html>/<body>
  globals.css          # Full stylesheet (port of styles.css)
  page.tsx             # / — Home
  menu/page.tsx        # /menu
  events/page.tsx      # /events
  gallery/page.tsx     # /gallery
  testimonials/page.tsx# /testimonials
  about/page.tsx       # /about
  contact/page.tsx     # /contact
  api/contact/route.ts # POST stub — wire to Resend/Nodemailer
components/
  Nav.tsx              # Fixed centered-logo nav, scroll-collapses
  Footer.tsx           # Shared footer
  Reveal.tsx           # IntersectionObserver for .reveal animations
  ContactForm.tsx      # Client form on /contact
  MenuItem.tsx         # Small helper for menu rows
public/
  logo.png             # The Finnegan's Wake circular badge
```

## Brand tokens

All colours, type and spacing live as CSS variables in `app/globals.css` at `:root`. If you migrate to Tailwind, mirror these into `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `--green` | `#0E3D2B` | Primary forest green |
| `--green-deep` | `#082019` | Background depth |
| `--gold` | `#C9A24A` | Antique gold accent |
| `--gold-soft` | `#D9B86A` | Italic emphasis on dark |
| `--cream` | `#F4ECD8` | Parchment body bg |
| `--ink` | `#14110D` | Type / button bg |
| `--stone` | `#7A6F5E` | Muted body copy |

Fonts: **Cormorant Garamond** (display), **Manrope** (sans), **JetBrains Mono** (small mono). Loaded via `next/font/google` in `app/layout.tsx`.

## Logo

The Finnegan's Wake circular badge sits centered in the top nav at **200px height**. On scroll past 60px the nav collapses and the logo shrinks to 80px. Image is served from `/logo.png` (`public/logo.png`).

## Contact form

The form on `/contact` POSTs to `/api/contact`. The current handler just logs and returns `{ ok: true }`. To send real email:

1. `npm install resend`
2. Set env vars: `RESEND_API_KEY=...`, `CONTACT_TO=finneganssgf@gmail.com`
3. Replace the body of `app/api/contact/route.ts` with a `resend.emails.send(...)` call.

## Business constraint

Per the brief, **don't promote alcohol heavily** — insurance reason. The Menu page treats food as the headliner; beer/whiskey are short and priced `market`. The 21+ note appears on the menu and in the footer. Keep it that way.

## Images

Hero, dishes, gallery, and story use Unsplash placeholders. Swap them out for real photos from the Google Drive folder (see the brief). Place real photos in `public/gallery/` and update the `PHOTOS` array in `app/gallery/page.tsx`.

## Going further

If you want to take this into V0 to refine sections, drop in the prompt from `../02-v0-prompt/V0-PROMPT.md`. The prompt is fully self-contained.
