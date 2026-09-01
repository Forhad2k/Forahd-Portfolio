# Forhad Hossain — Portfolio

A premium, interactive developer portfolio built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, **Redux Toolkit**, **Framer Motion**, and **EmailJS**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a custom dark/light design-token system
- Redux Toolkit — theme (dark/light, persisted) + project filter + command palette state
- Framer Motion — scroll reveals, hero sequence, magnetic buttons, page chrome
- EmailJS (`@emailjs/browser`) — contact form sends straight from the browser, no backend
- lucide-react icons, next/font (Space Grotesk / Inter / JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Setting up the contact form (EmailJS)

The contact form is fully wired up in `src/components/contact/Contact.tsx` and
`src/lib/emailjs.ts` — you only need to plug in your own EmailJS credentials:

1. Create a free account at https://dashboard.emailjs.com
2. **Email Services** → add a service (Gmail, Outlook, etc.) → copy the **Service ID**
3. **Email Templates** → create a template using these variable names:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   → copy the **Template ID**
4. **Account → General** → copy your **Public Key**
5. Copy `.env.local.example` to `.env.local` and fill in the three values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart `npm run dev` after adding the file. Until it's configured, submitting the
form will show the "Email isn't set up yet" error state instead of crashing.

## Content you'll want to personalize

- `src/data/site.ts` — name, email, GitHub/LinkedIn URLs, tagline
- `src/data/projects.ts` — real project write-ups for **MediStore**, **Squad Mart**,
  and **Nova Boulders** are already filled in. The **Shopify Storefront** entry is a
  placeholder — swap it for a real client project (or delete it).
- `src/data/experience.ts` — your role at Softvence; add earlier roles if useful
- `src/data/skills.ts` / `src/data/services.ts` — tweak freely

## Notable features

- Dark/light theme (Redux-driven, persisted to `localStorage`, respects system
  preference on first visit)
- Custom cursor + mouse-follow spotlight (desktop only, auto-disabled on touch)
- Command palette — `⌘K` / `Ctrl+K`
- Scroll-progress bar, scroll-reveal animations, `prefers-reduced-motion` respected
- Project filtering (All / Next.js / Full-Stack / Squarespace / Shopify / E-commerce)
- Case-study modal per project (Overview / Problem / Solution / Challenges / Result)
- Copy-email interaction, availability pulse indicator
- SEO: metadata, Open Graph, Twitter card, JSON-LD (`Person` + `WebSite`),
  `robots.txt` and `sitemap.xml` generated automatically

## Deploying

Works out of the box on Vercel:

```bash
npm run build
```

Push to GitHub and import the repo at https://vercel.com/new, or run `vercel` from
the CLI. Remember to add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in
your Vercel project settings — `.env.local` is not committed to git.

## Not yet built (natural next steps)

- Three.js/R3F 3D hero object — the hero currently ships a lighter, equally
  distinctive "live terminal" signature element instead, both for performance and to
  avoid the generic floating-3D-orb look
- Lenis-style inertial smooth scroll (native `scroll-behavior: smooth` is used instead)
- Route-level page transitions (this is a single-page portfolio, so there are no
  route changes to transition between)
- Konami-code easter egg
hello
