# Frank Valere Yussa — Portfolio Site

Next.js 14 personal site for Frank Valere Yussa (economist, corporate lawyer,
investment banker). Redesigned with:

- A hero image slider on the homepage using real photos (`public/images/`)
- A per-page accent color that smoothly animates on navigation (see
  `lib/theme.ts` and `components/AccentProvider.tsx`) — the dark navy shell
  stays constant, only the accent shifts
- Scroll-reveal animations, hover states, and an animated stat counter via
  Framer Motion
- Icon set switched from emoji/text to `lucide-react`

## Local development

```bash
npm ci   # uses the committed package-lock.json
npm run dev
```

`legacy-peer-deps` is required (`react-day-picker`/similar minor peer range
mismatches on React 18 vs newer packages aren't an issue here, but some
transitive deps still lag). It's baked into the Dockerfile via
`ENV npm_config_legacy_peer_deps=true`, and the committed `package-lock.json`
was generated with that same setting — if you ever add dependencies, set
`export npm_config_legacy_peer_deps=true` in your shell first, then run
`npm install`, then commit the updated lockfile.

**Important:** `package-lock.json` is committed on purpose. The Dockerfile
uses `npm ci`, which requires it to be present and in sync with
`package.json`.

## Editing the per-page accent colors

Open `lib/theme.ts` — each route maps to an `accent` (solid) and
`accentSoft` (translucent, used for washes/backgrounds) color. Add a new
page by adding its path to the `THEMES` object.

## Deploying on Coolify

1. Push this repo to GitHub (as its own top-level repo — don't nest it
   inside another project's folder).
2. In Coolify, create a new Application from this repo, build pack:
   **Dockerfile**.
3. No environment variables are required — the contact form
   (`/api/contact`) currently just logs submissions server-side; wire it up
   to an email service or database if you want real notifications.
4. Set the exposed port to `3000` (already set via `EXPOSE 3000`).

## Images

Your three uploaded photos live in `public/images/`:
- `frank-hero-moscow.jpg` — homepage hero slider, Skills/Contact page headers
- `frank-office-blue-suit.jpg` — homepage "Forged in Complexity" section,
  Books page header
- `frank-handshake-bench.jpg` — Clients page header, homepage expertise
  column

All other images are hotlinked from `frankyussa.com`'s existing WordPress
media library (already whitelisted in `next.config.js`). If that site is
ever taken down, those images will break — consider migrating them into
`public/images/` too at some point.
