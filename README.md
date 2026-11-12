# FluXenovia Software Development Services — Website

Marketing site for **FluXenovia Software Development Services** (formerly FluxFusion Devs).
React 18 + Vite + Tailwind CSS + React Router.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
```

## Where to edit
| What | File |
|---|---|
| Company name, email, phone, address, socials | `src/config/site.js` |
| Lead form destination (Formspree etc.) | `src/config/site.js` → `formEndpoint` |
| Google Analytics / Meta Pixel IDs | `src/config/site.js` → `analytics` |
| Services, products, solutions, FAQs, industries | `src/data/content.js` |
| Company timeline, mission & vision | `src/Pages/About.jsx` |
| SEO defaults + Google structured data | `index.html` |
| Sitemap / robots | `public/sitemap.xml`, `public/robots.txt` |

## Before going live
1. Replace every `TODO` in `src/config/site.js` and the JSON-LD block in `index.html`.
2. Set the real domain in `site.js`, `index.html`, `sitemap.xml`, `robots.txt`.
3. Add `public/og-image.png` (1200×630) for link previews on Facebook/LinkedIn.
4. Add GA4 / Meta Pixel IDs and a form endpoint.
5. Hosting: `public/_redirects` (Netlify) and `vercel.json` (Vercel) are included so page URLs work on refresh.
