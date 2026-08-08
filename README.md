# CHAMS Offshore — Prototype

Early prototype of the corporate website for **CHAMS Offshore Engineering Pte. Ltd.**

> **Status: superseded.** The production site lives in
> [chams-offshore-website](https://github.com/madhusudanpatnaik/chams-offshore-website)
> (Next.js 16). This repository is kept for reference.

## What's here

- Background-video hero section
- Interactive construction site map (Leaflet)
- Client portal shell
- HSE safety standards pages

## Stack

React 19 · Vite 6 · Tailwind CSS 4 · Leaflet · Motion · Express · `@google/genai`

## Running locally

**Prerequisites:** Node.js 18+

```bash
npm install
cp .env.example .env    # then fill in the values
npm run dev             # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # serve the build
npm run lint      # typecheck (tsc --noEmit)
```

## Configuration

Copy `.env.example` to `.env` and populate it. Secrets are read from the
environment — do not commit `.env`.
