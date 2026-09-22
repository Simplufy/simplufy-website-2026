# Simplufy website 2026

Next.js App Router static marketing site for [simplufy.com](https://simplufy.com).

## Stack

- Next.js 16 (App Router) with `output: "export"`
- Tailwind CSS 4 + shadcn/ui
- Inter Tight + IBM Plex Mono
- Brand: cream `#f3efe8`, red `#fc0000`

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (static) or None |
| Build command | `npm ci && npm run build` |
| Build output directory | `out` |
| Node version | 20+ recommended |

`images.unoptimized: true` is required for static export.

Wrangler: `pages_build_output_dir = "out"` in `wrangler.toml`.

Optional direct deploy after local build:

```bash
npm run build
npx wrangler pages deploy out --project-name simplufy-website-2026
```

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # emits out/
npx serve out
```

## Sitemap

- Production: https://simplufy.com/sitemap.xml
- Source: `public/sitemap.xml` (+ `public/robots.txt`)

## Content notes

- Real proof metrics only (e.g. Detail Depot from content data)
- Hero uses CSS animation loops (Search, Speed-to-lead, CRM pipeline, Paid media) — no industry van photos
