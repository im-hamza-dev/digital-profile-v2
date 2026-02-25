# ScrumStack Solutions – Next.js

Next.js 16 App Router site for ScrumStack Solutions, migrated from React + Tailwind with animations and design from the Design Company Website inspiration.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **TypeScript**
- **motion** (animations)
- **tw-animate-css**, **lucide-react**, **clsx**, **tailwind-merge**

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment

Optional:

- `NEXT_PUBLIC_SITE_URL` – Base URL for metadata (e.g. `https://ScrumStack Solutions.com`). Defaults to `https://ScrumStack Solutions.com` if unset.

## Structure

- `src/app/` – Routes (page.tsx, layout.tsx), globals.css
- `src/components/sections/` – Hero, Projects, About, Services, Stats, Process, Testimonials, Contact
- `src/components/layout/` – Navigation, Footer
- `src/components/ui/` – Button and shared UI
- `src/lib/` – utils, projects data, motion variants
- `src/hooks/` – useIsMobile

## Routes

- `/` – Home (all sections)
- `/about` – About
- `/work` – Work listing
- `/work/[slug]` – Project detail (dynamic)
- `/contact` – Contact

Design and animations follow the inspiration code; layout and components are mobile responsive (Tailwind breakpoints sm/md/lg).
