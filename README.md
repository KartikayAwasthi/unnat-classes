# Unnat Classes

The official website for **Unnat Classes** — a GS (General Studies) competitive-exam coaching centre based in Faridabad, Haryana, run by Tanuja Singh. Built with Next.js and content-driven throughout: courses, current affairs, study resources, exam listings, a photo/video gallery and Instagram reels are all editable without touching code, via a companion admin panel.

**Live:** [unnatclasses.in](https://www.unnatclasses.in)

## Features

- **Course & exam listings** — GS batch details, competitive exam info under `/courses` and `/exams`
- **Current affairs feed** — daily current-affairs posts rendered from Markdown (`marked`), sanitized with `sanitize-html`
- **Resource library** — downloadable/viewable study material, with in-browser PDF rendering via `pdfjs-dist`
- **Gallery & Reels** — photo gallery and embedded Instagram reels under `/gallery` and `/reels`
- **Teacher profile** — `/teacher` page introducing Tanuja Singh (mirrors [teacher.unnatclasses.in](https://github.com/KartikayAwasthi/teacher.unnatclasses.in))
- **SEO-first** — generated `sitemap.ts`, `robots.ts`, OpenGraph image, `llms.txt` for AI/answer-engine discoverability, and JSON-LD structured data (`StructuredData.tsx`)
- **Contact form** — lead capture via `ContactForm.tsx` / `EmailButton.tsx`

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + TypeScript
- Tailwind CSS 4
- Framer Motion
- `marked` + `sanitize-html` for rendering current-affairs/resource content safely
- `pdfjs-dist` for in-browser PDF preview

## Project structure

```
src/
  app/
    contact/, courses/, exams/, gallery/, reels/, resources/, teacher/   # route segments
    sitemap.ts, robots.ts, opengraph-image.tsx
  components/
    exams/, gallery/, home/, reels/, resources/                          # section-specific UI
    ContactForm.tsx, Navbar.tsx, Footer.tsx, StructuredData.tsx
  lib/
    api.ts            Data-fetching (talks to the admin panel's backend)
    data.ts             Site-wide constants: name, tagline, mission, contact, geo, socials
    gallery.ts, reels.ts  Gallery/reels content helpers
    markdown.ts           Safe Markdown to HTML rendering (marked + sanitize-html)
```

Content (current affairs, exams, notes, posts, videos, Instagram reels) is managed through [admin-panel-UnnatClasses](https://github.com/KartikayAwasthi/admin-panel-UnnatClasses), a separate React admin dashboard that talks to the same backend.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Related projects

- [admin-panel-UnnatClasses](https://github.com/KartikayAwasthi/admin-panel-UnnatClasses) — the CMS/admin dashboard used to manage this site's content
- [teacher.unnatclasses.in](https://github.com/KartikayAwasthi/teacher.unnatclasses.in) — standalone teacher profile microsite
