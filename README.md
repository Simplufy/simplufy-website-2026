# Simplify.com Website 2026

Astro static marketing site for Simplify.com, designed for Cloudflare Pages.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 or newer recommended

## Current structure

- `/` homepage
- `/services/` generated service pages:
  - Web Development
  - CRM Solutions
  - Paid Advertising
  - SEO / AEO / GEO
  - AI Implementation & Agent Orchestration
- `/industries/` generated industry pages:
  - Contractors
  - Med Spas
  - Local Service Businesses
  - B2B Services
  - Education
- `/resources/` blog/resource hub and draft article templates
- `/case-studies/` portfolio/case-study hub and placeholder templates
- `/contact/` HighLevel-ready contact page

## SEO included

- Unique page titles and meta descriptions
- Canonical tags
- Open Graph and Twitter metadata
- Sitemap generation via `@astrojs/sitemap`
- LocalBusiness/ProfessionalService schema on homepage
- FAQPage schema on homepage
- Service schema on generated service pages
- Article schema on generated resource pages

## GoHighLevel integration

Forms are currently placeholders using the reusable component:

`src/components/ContactForm.astro`

When ready, replace the placeholder markup with the GoHighLevel form or booking embed HTML. The component is already used across homepage, contact page, service pages, industry pages, resources, and case studies.

## Content to add later

- Logo file and final brand assets
- Client logos
- Testimonials
- Real case-study metrics
- Google Business Profile URL
- Phone/email
- Real GoHighLevel form/embed scripts
