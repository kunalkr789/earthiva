# Earthiva Next.js Website

An earthy, nature-inspired Earthiva landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## What changed

- Consolidated the project to a single app entry under `app/`
- Removed duplicate app/data/component paths that were drifting apart
- Reworked the UI toward a warmer, more tactile earthy visual system
- Updated the product experience with filters, richer copy, and front/back pouch previews
- Switched the live site to use the real assets in `public/products`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Key files

- `app/page.tsx` for the main route entry
- `app/globals.css` for theme tokens and shared surface/button styles
- `src/components/*` for the UI sections
- `src/constants/products.ts` for product content and Amazon links

## Update Amazon links

Edit `src/constants/products.ts` and replace each `amazonUrl` with the final product listing URL.
