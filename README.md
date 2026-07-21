# Maguire Electric website

Modern multi-page marketing site for [maguireelectric.com](https://maguireelectric.com) — SvelteKit, Tailwind CSS, and the tokens in [`DESIGN.md`](./DESIGN.md).

## Pages

- `/` — Home (brand hero, services teaser, trust strip, CTAs)
- `/services` — Full service list
- `/about` — Experience & motto
- `/contact` — Phone / email / address + quote form

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment

Copy `.env.example` to `.env` for the contact form:

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | For live email | [Resend](https://resend.com) API key |
| `CONTACT_TO` | No | Defaults to `mike@maguireelectric.com` |
| `CONTACT_FROM` | No | Verified Resend from-address (defaults to Resend onboarding sender) |

Without `RESEND_API_KEY`, submissions still succeed in development and are logged to the server console so you can build and preview the UI.

## Build & deploy

```bash
npm run build
npm run preview
```

Uses `@sveltejs/adapter-auto` so marketing pages can prerender while `/contact` stays dynamic for the form action. Deploy to **Vercel**, **Netlify**, or **Cloudflare** and set the env vars above.

### Domain cutover (from Yahoo hosting)

1. Deploy this project to your host and confirm it loads on the host URL.
2. In Resend, verify your sending domain (or use the onboarding sender for tests).
3. Point `maguireelectric.com` DNS (A/CNAME or nameservers) from Yahoo to the new host.
4. After DNS propagates, test phone links and a live quote submission.

## Design

All colors, type, spacing, and motion rules live in [`DESIGN.md`](./DESIGN.md). Map UI to those tokens — do not invent one-off values.
