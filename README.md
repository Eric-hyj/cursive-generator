# Inkspell - Cursive Text Generator

**[www.cursivegenerator.live](https://www.cursivegenerator.live)** — Free online cursive text generator. Type, preview, and copy cursive fonts instantly.

Transform plain text into elegant cursive styles using Unicode conversion. No download, no sign-up, works directly in your browser.

## Tools

| Page | URL |
|------|-----|
| Home | [/](https://www.cursivegenerator.live/) |
| Cursive Text Generator | [/cursive-text-generator](https://www.cursivegenerator.live/cursive-text-generator) |
| Cursive Font Generator | [/cursive-font-generator](https://www.cursivegenerator.live/cursive-font-generator) |
| Cursive Signature Generator | [/cursive-signature-generator](https://www.cursivegenerator.live/cursive-signature-generator) |
| Cursive Name Generator | [/cursive-name-generator](https://www.cursivegenerator.live/cursive-name-generator) |
| Copy & Paste | [/cursive-text-generator-copy-and-paste](https://www.cursivegenerator.live/cursive-text-generator-copy-and-paste) |
| Cursive Alphabet A-Z | [/cursive-alphabet-generator](https://www.cursivegenerator.live/cursive-alphabet-generator) |

## Cursive Styles

4 built-in Unicode cursive styles:

- **Classic Script** — Traditional flowing cursive with elegant curves
- **Formal Hand** — Refined penmanship for signatures and invitations
- **Airy Cursive** — Light, modern cursive with a delicate feel
- **Studio Line** — Clean, contemporary style for creative projects

## Tech Stack

- **Framework:** Next.js 15 (App Router, SSG with `generateStaticParams`)
- **Styling:** CSS custom properties (Slate × Indigo design system)
- **Analytics:** Google Analytics 4 (gtag.js)
- **SEO:** JSON-LD structured data (FAQPage + BreadcrumbList), sitemap, robots.txt, canonical URLs
- **Deployment:** Vercel (auto-deploy from GitHub)
- **DNS:** Cloudflare

## Architecture

```
content/pages.ts       → Central content config for all pages
components/            → UI components (generator-panel, result-cards, alphabet-grid, ad-slot)
lib/generator.ts       → Unicode cursive conversion engine
lib/structured-data.ts → JSON-LD schema generation
lib/gtag.ts            → GA4 event tracking
app/[...slug]/page.tsx → Catch-all route for keyword pages
```

One keyword per page, content-driven architecture. All pages share the same generator engine but have unique titles, descriptions, H1s, FAQs, and internal links.

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

```bash
npm run build
npm start
# → Production build with SSG
```
