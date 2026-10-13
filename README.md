# Maguire Electric website

Modern multi-page marketing site for [maguireelectric.com](https://maguireelectric.com) — SvelteKit, Tailwind CSS, and the tokens in [`DESIGN.md`](./DESIGN.md).

## Pages

- `/` — Home (brand hero, services teaser, trust strip, CTAs)
- `/services` — Full service list
- `/about` — Experience & motto
- `/contact` — Phone / email / address

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy

```bash
npm run build
npm run preview
```

Uses `@sveltejs/adapter-static`; every page is prerendered. Pushes to `main` deploy to GitHub Pages at https://cecorcoran67.github.io/maguireelectric/ via `.github/workflows/pages.yml`.

### Domain cutover (from Yahoo hosting)

1. Deploy this project to your host and confirm it loads on the host URL.
2. Point `maguireelectric.com` DNS (A/CNAME or nameservers) from Yahoo to the new host.
3. After DNS propagates, test phone and email links.

## Design

All colors, type, spacing, and motion rules live in [`DESIGN.md`](./DESIGN.md). Map UI to those tokens — do not invent one-off values.
