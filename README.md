# ZARNEGAR — زرنگار

A Persian, RTL-first site for a hand-made gold and gemstone jewellery atelier.
Nine pieces across three categories, a gallery, a brand story, and a single
inquiry path. No commerce: nothing here has a price, a cart or a checkout, and
a visitor who wants a piece writes to the atelier.

The brand is fictional and every photograph is a generated placeholder. This is
a demonstration build, derived from the PARNIAN template.

## Stack

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4. Three
runtime dependencies — `next`, `react`, `react-dom` — and nothing else.

Static export (`output: 'export'`). There is no Node runtime in production, so
there are no API routes, no Server Actions, no Middleware and no ISR anywhere.

## Commands

```bash
npm run dev            # local development, port 3210
npm run build          # production build at the site root
npm run build:pages    # production build under the deploy base path
npm run preview:pages  # serve the exported output at /zarnegar/ on port 4321
npm run typecheck
npm run lint
npm run test:smoke     # Playwright, against the served static export
npm run media          # regenerate the placeholder imagery
npm run og             # regenerate the share card
```

On Git Bash, `export MSYS_NO_PATHCONV=1` before a build or a script run.
Without it a leading-slash argument is rewritten into a Windows path and the
base path arrives as `C:/Program Files/Git/zarnegar`.

## Layout

```
src/content/    every string and image reference on the site
src/types/      the content model — the contract between content and UI
src/app/        routes, tokens.css, globals.css, components.css
src/components/ presentation only; no business content lives here
scripts/        build, static server, placeholder media, share card
docs/           MASTER-HANDOFF.md is the constitution the code comments cite
```

Colour, size, duration and easing exist in exactly one place:
`src/app/tokens.css`. Nothing else in the app hardcodes any of them.

## Content

Nine pieces in `src/content/products.ts`, eight images in `gallery.ts`, and the
copy deck in `sections.ts`. A piece needs a name, a category, a one-line
description and a primary image; everything else is optional and degrades.
Setting `status: "draft"` removes a piece from the site at the next build.

`views` holds the extra angles shown on a detail page. The primary `image` is
what every listing, card and share card reads, and it is required.

## Deployment

GitHub Actions builds and publishes to GitHub Pages on a push to `main`. The
workflow reads the base path from `actions/configure-pages` and needs no edits.

The site is excluded from search indexing on purpose — `robots.ts` disallows
everything and the root metadata sets `index: false`. It is a demonstration,
and a fictional brand ranking in search would help nobody.
