# Sbandy Web Services

A professional web services company website with sections for services, portfolio, testimonials, and contact.

## Run & Operate
- `npm run dev` — Start dev server on port 5000
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Stack
- React 18 + Vite 6
- CSS Modules
- Lucide React (icons)
- Node.js 20

## Where things live
- `src/App.jsx` — Root component, assembles all sections
- `src/components/` — Individual page section components + CSS modules
- `src/index.css` — Global styles and CSS variables
- `index.html` — HTML entry point

## Architecture decisions
- CSS Modules for scoped styling (no global class conflicts)
- No backend — pure static marketing site
- Google Fonts (Poppins) loaded via CDN in index.html
- Background images sourced from Unsplash CDN

## Product
- Hero section with services list and CTA buttons
- Stats bar (150+ websites, 98% satisfaction, etc.)
- Services grid (6 cards)
- About section with image and checklist
- Portfolio grid (6 projects)
- Testimonials (3 client reviews)
- Contact form with company info panel
- Footer with links and social icons

## User preferences
- Business name: Sbandy Web Services

## Gotchas
- Vite server must bind to `0.0.0.0` for Replit preview to work
- `allowedHosts: true` required in vite.config.js
