# personal-site

Diya Sharma — minimalist editorial portfolio. Next.js 16 (App Router) · React 19 · Tailwind 4 · Framer Motion.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (static)
```

## Routes

| Path | What's there |
|---|---|
| `/` | Hero word-reveal + numbered index of sections / external links |
| `/about` | Long-form bio + facts sidebar |
| `/projects` | TrainSmartAI, UMB ML, Spotify Wrapper case studies |

External links (résumé, LinkedIn, GitHub, photography site) live in the footer and on the home `Index`.

## Where to edit

| Change | File |
|---|---|
| Name, tagline, social links | `src/lib/site.ts` |
| Project list | `src/lib/projects.ts` |
| About copy | `src/app/about/page.tsx` |
| Home headline | `src/components/HeroReveal.tsx` |
| Color palette / fonts | `src/app/globals.css` + `src/app/layout.tsx` |

Drop your résumé PDF at `public/resume.pdf` (referenced by `site.links.resume`).

## Deploy to Vercel

```bash
# from this folder
npx vercel           # first push, follow prompts
npx vercel --prod    # promote to production
```

Or push to a GitHub repo and import it at vercel.com/new — no config needed.
