# VARSAL HEALTHCARE — Next.js Website

A modern marketing site and product showcase for VARSAL HEALTHCARE built with Next.js (App Router), React, and Tailwind CSS.

## Key Features

- Clean, component-driven layout using the Next.js `app/` directory
- Reusable UI primitives in `src/components/ui`
- Tailwind CSS utility-first styling with animations
- Accessible components using Radix UI primitives
- Forms powered by `react-hook-form` and `zod` validation
- Image optimization with `sharp`

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Radix UI
- React Hook Form, Zod
- TanStack Query
- Sonner for toasts

## Quick Start

Prerequisites: Node.js 18+ and npm or pnpm

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Start the production server (after build):

```
npm run start
```

Run the linter:

```
npm run lint
```

These scripts are defined in `package.json`:

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `next lint`

## Project Structure (important parts)

- `app/` — Next.js App Router pages and layouts
- `src/components/` — Shared React components and UI primitives
- `src/constants/` — Static data used across the site
- `src/lib/` — Utility functions
- `public/` — Static assets

## Components & Patterns

- UI primitives live in `src/components/ui` (button, input, card, dialog, etc.) for consistent design
- Page-level sections are in `src/components/sections` grouped by feature area

## Contributing

1. Fork the repo and create a branch for your change
2. Install dependencies and run the dev server
3. Open a PR with a clear description of your change

## Notes for Maintainers

- This project uses the Next.js App Router (`app/`) and server components where appropriate.
- Keep Tailwind config in `tailwind.config.js` up-to-date when adding new utilities.

## License

Specify a license for this project (e.g., MIT) — currently TBD.

## Contact

For questions, open an issue or contact the project owner.
# vercel-health
