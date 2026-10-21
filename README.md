# Dev Darji — Personal Portfolio

Personal portfolio of **Dev Darji**, Full Stack / MERN Developer based in Surat, Gujarat, India.

Built from the codebase of [D&D Web Studio](https://github.com/Dev-Darji/Dev_Portfolio) (same design system, 3D canvas, and interactive demos), reworked from an agency site into a personal portfolio.

## Sections

1. **Hero** — name, role, highlights, CTAs (Hire Me / View Work / GitHub)
2. **Work** — live projects (Vitta, Elicit, Elegant Design Studio, Shiv Car Rentals) with screenshots, my role, and the Vitta ledger simulator
3. **Experience** — Superworks HRMS (Full Stack / MERN Developer, 1+ year)
4. **Skills** — filterable tech stack showing where each technology was used
5. **AI Labs** — RAG and AI agent simulations
6. **About** — profile and working principles
7. **Contact** — inquiry form that opens a pre-filled email

## Tech Stack

Next.js (App Router, React 19, TypeScript) · Tailwind CSS v4 · Framer Motion · Three.js / React Three Fiber · Lucide React

## Getting Started

```bash
npm install
npm run dev     # http://localhost:8000
npm run build   # production build
```

## Updating Content

All content lives in `src/data/`:

- `site.ts` — name, contact, GitHub, **LinkedIn** (empty = hidden), domain (`canonicalUrl`), intro, principles, SEO
- `projects.ts` — projects, live URLs, screenshots (`public/projects/`)
- `experience.ts` — work experience
- `technologies.ts` — tech stack and where it was used

## Deployment

```bash
npx vercel
```

After deploying, set `canonicalUrl` in `src/data/site.ts` to the live domain.
