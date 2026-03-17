# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build static export to /out directory
npm run lint     # Run ESLint
```

There is no test suite configured.

## Architecture

**Next.js 14 static portfolio site** deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

- `next.config.mjs` — configured for static export (`output: 'export'`), with `basePath` and `assetPrefix` set to `/v0-github-portfolio` for GitHub Pages. Next.js image optimization is disabled (`unoptimized: true`).
- `app/layout.tsx` — root layout wrapping all pages with `ThemeProvider` (next-themes, class-based dark mode).
- `app/page.tsx` — the entire portfolio lives here as a single `"use client"` component. Sections (Hero, Projects, Skills, Contact) are scroll-anchored via `id` attributes; navigation uses `scrollIntoView()` rather than routing.
- `components/ui/` — shadcn/ui components (Button, Card, Avatar, Badge, Sheet). Add new shadcn components with `npx shadcn-ui@latest add <component>`.
- `lib/utils.ts` — exports `cn()` (clsx + tailwind-merge) for conditional class merging.

## Styling

- Tailwind CSS with CSS variable–based theming (HSL values defined in `app/globals.css`).
- Dark mode toggled via the `.dark` class on `<html>` by next-themes.
- Component variants use `class-variance-authority` (CVA).
- `shadcn/ui` style is set to `"new-york"` in `components.json`.

## Content

All portfolio content (projects, skills, contact links) is hardcoded in `app/page.tsx`. There is no CMS or data-fetching layer.
