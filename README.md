# Leonardo Chimal — Portfolio

Personal portfolio website for Leonardo Chimal, engineering student at Black Hawk College and CS developer. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.2 (App Router, Webpack) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript |
| Icons | react-icons v5 |
| Runtime | Bun |

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout
  page.tsx            # Home page (all sections)
  globals.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    LightboxImage.tsx  # Fullscreen image lightbox (client component)
  projects/
    drone/            # Autonomous AI Drone Platform case study
    meta-quest/       # Meta Quest SlideLock Attachment case study
    cutting-edge/     # Cutting Edge Appointments case study
    url-shortener/    # Enterprise URL Shortening Platform case study
public/
  resume.pdf
  profile.webp
  projects/
    drone/            # CAD render images
    meta-quest/       # Photos and CAD renders
    cutting-edge/     # App screenshots
```

## Commands

```bash
bun run dev       # Start dev server (localhost:3000)
bun run build     # Production build
bun run start     # Start production server
bun run lint      # ESLint
bun run typecheck # TypeScript check
```
