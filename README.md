# Pure Home by Lauren — marketing site

A premium, image-forward marketing site for Lauren's all-natural residential &
commercial cleaning business. Lead-generation only: the conversion action is a
"Request a cleaning" contact form that reaches Lauren's inbox.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. All pages are
statically prerendered; the only server code is the contact form handler.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route       | What it is |
|-------------|------------|
| `/`         | Home — hero, process walkthrough, before/after sliders, natural products, services overview, gallery, testimonials, request form |
| `/services` | Service catalog, care-plan pricing, commercial program, promises, FAQ |
| `/gallery`  | Filterable masonry of real work, before/after sliders, featured project |
| `/about`    | Lauren's story, values, "Meet Lauren", the product kit, press |
| `/contact`  | Full request form, contact details, service area, FAQ |

## Things Lauren / the team will want to change

Everything below is intentionally centralized so updates are painless.

### 1. Business name, contact details, service area — `lib/site.ts`
The name is still a placeholder (**"Pure Home by Lauren"**). Change `site.name`,
`site.email`, `site.phone`, etc. in one file and it updates everywhere (nav,
footer, contact page, metadata).

### 2. Contact form delivery — `app/api/contact/route.ts`
The form is fully functional. Delivery is wired for [Resend](https://resend.com):

- Set env vars (e.g. in `.env.local` or your Vercel project):
  - `RESEND_API_KEY` — your Resend API key
  - `LEAD_RECIPIENT` — where leads go (defaults to `site.email`)
  - `LEAD_FROM` — a verified sending address, e.g. `Pure Home <hello@purehomebylauren.com>`
- **Without** a key, leads are logged to the server console and the form still
  succeeds — so it works in development out of the box. Add the key to go live.

### 3. Before/after sliders — `lib/content.ts` (`homeBeforeAfter`, `galleryBeforeAfter`)
We don't have true "before" photos yet, so each slider reuses the "after" image
under a grimy CSS filter as a stand-in. When Lauren shoots real before/after
pairs, add a `beforeSrc` to each entry and the filter is dropped automatically.

### 4. Gallery, testimonials, promises — `lib/content.ts`
Image paths, captions, categories, and quotes all live here. Swap images by
dropping files in `public/images/` and updating the path.

### 5. Brand tokens — `tailwind.config.ts`
Colors (warm rose/clay palette), fonts (Playfair Display + Inter), and radii are
defined as Tailwind theme tokens.

## Notes
- Photography in `public/images/` is AI-generated placeholder imagery from the
  design exploration. Replace with Lauren's real client photos before launch.
- Testimonials, press mentions, stats (e.g. "220+ homes", "4.97 rating"), and
  pricing are placeholder copy — confirm or replace with real numbers.
- Lauren is a **solo operator**; all copy is written in that voice (no "team").
