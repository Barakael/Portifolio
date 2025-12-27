# Developer Portfolio (GitHub Dark Inspired)

A sleek, GitHub-inspired dark theme portfolio built with React, TypeScript, and Vite. Includes a profile section, social links, and GitHub-style project cards with badges, tags, and filters.

## Tech Stack
- React 18 + TypeScript
- Vite
- React Icons
- CSS modules (plain CSS files)

## Getting Started
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run preview` – preview the production build

## Structure
- [src/main.tsx](src/main.tsx) – entry point
- [src/App.tsx](src/App.tsx) – layout wrapper
- [src/components/Profile.tsx](src/components/Profile.tsx) – profile section
- [src/components/Projects.tsx](src/components/Projects.tsx) – projects list and filters
- [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx) – GitHub-style cards
- [src/data/projects.ts](src/data/projects.ts) – sample project data
- [src/index.css](src/index.css) / [src/App.css](src/App.css) – global styles

## Customize
- Update profile details and social URLs in [src/components/Profile.tsx](src/components/Profile.tsx).
- Add or edit projects in [src/data/projects.ts](src/data/projects.ts).
- Swap the avatar `src` with your image URL.
- Adjust colors/animations in the CSS files.

## Deployment
Build and deploy the `dist` folder to your static host of choice (Netlify, Vercel, GitHub Pages, etc.).

## License
MIT
