# Pure Home by Lauren *(working title — name TBD)*: Project Brief

> **Naming note (open decision):** The business name is still being chosen. It should signal *all-natural / organic cleaning* and likely include the owner's first name, **Lauren**. Working candidates: **Laurel & Lauren**, **Pure Home by Lauren**, **Sage & Lauren**, **The Natural Home by Lauren**, **Verde Home by Lauren**. This brief uses *Pure Home by Lauren* as a placeholder; swap once finalized.

## One-liner
A premium marketing site for Lauren's all-natural residential and commercial cleaning business, designed to turn upscale homeowners and commercial clients into cleaning requests.

## Purpose & Direction  (for the product team)
Lauren runs an upscale cleaning business with a clear differentiator: she uses all-natural / organic, non-toxic cleaning products. Her customers care about a spotless, beautiful home *and* about what gets sprayed on the surfaces their families, pets, and staff touch every day. The site's job is to make both of those promises feel obvious and trustworthy at a glance, then make it effortless to reach out.

This is a lead-generation site, not a storefront or booking engine. Success is measured by qualified contact requests landing in Lauren's inbox. The business itself makes money through cleaning jobs and (often) recurring service relationships; the site is the top of that funnel. The visual proof — beautiful homes, dramatic before/after results — does the persuading, and a single clear call to action ("request a cleaning") does the converting.

Near-term, this is meant to be stood up quickly as a polished single landing experience. It can grow later into a fuller multi-page site (more service detail, more galleries, testimonials), but the first release should nail the core narrative and the contact path.

## Target User
- **Buyer / commissioner:** Lauren (business owner). She wants a site that looks high-end and represents her brand and her natural-products philosophy.
- **Day-to-day user:** Lauren (and possibly an assistant) — receives and responds to incoming cleaning requests. She is not a technical user; anything she manages must be simple.
- **End customers (site visitors):** Two segments — (1) **upscale homeowners** who want a beautiful, professionally cleaned home using safe, non-toxic products; (2) **commercial clients** (offices, boutiques, property managers) wanting eco-friendly commercial cleaning. The homeowner is the primary audience the landing page is written for.

## What the System Does
**Hero & Brand Story**
- A strong hero featuring imagery of beautiful, upscale homes being cleaned, immediately communicating premium quality and the all-natural promise.
- Clear primary call to action to request a cleaning, present in the hero and repeated down the page.

**"What You Get" Walkthrough (primary landing narrative)**
- A guided, top-to-bottom walkthrough of what it's like to work with Lauren — the experience, the process, and the outcome.
- Explicit **benefits and promises** stated clearly (e.g. all-natural / non-toxic products, safe for kids and pets, meticulous detail, dependable and discreet service). Final benefit and promise wording to be supplied by Lauren — placeholder copy is fine for mockup.

**Before / After Proof**
- Interactive **before/after image sliders** for the areas people care most about — ovens, floors, and similar (e.g. kitchens, bathrooms, glass/showers, appliances). Each slider lets the visitor drag to reveal the transformation.
- This is a core, must-have feature and a primary trust driver.

**Imagery Gallery**
- Multiple images of beautiful, upscale homes (and cleaned spaces) used throughout the page and/or in a dedicated gallery. Image-forward by design.

**All-Natural Products Section**
- A section explaining the natural / organic products and why they matter (non-toxic, safe for families/pets, environmentally conscious). This is the differentiator and should be visible, not buried.

**Services Overview**
- Clear coverage of both **residential** and **commercial** cleaning, so a visitor self-identifies quickly.

**Social Proof** *(small connective inference — recommended, optional for v1)*
- A space for testimonials / reviews to reinforce trust. Include the slot in the layout even if content comes later.

**Contact / "Request a Cleaning" Form**
- A form for visitors to request a cleaning. Suggested fields: name, email, phone, service type (residential / commercial), property location or service area, approximate size or rooms, preferred timing, and a free-text message.
- On submit: a confirmation state for the visitor, and a notification/lead delivered to Lauren (see Tech Stack — delivery mechanism is an open decision).

## Key Flows
1. **Homeowner → request:** Lands on hero → reads the "what you get" walkthrough → drags through before/after sliders (oven, floor, etc.) → browses home imagery → submits the request form → sees a confirmation → Lauren receives the lead.
2. **Commercial prospect → request:** Lands on hero → jumps to services → identifies as commercial → submits the form flagged as commercial → confirmation → Lauren notified.
3. **Trust-building browse:** Visitor scrolls the gallery and natural-products section first, builds confidence, then converts via the form.
4. **Lead handling (off-site):** Lauren reads the request in her inbox and follows up directly (no in-app scheduling in v1).

## Suggested Information Architecture
Primarily a single landing page with anchored sections; standalone routes optional if the design agent prefers to split content. **The design agent may restructure this freely.**

- `/` — Home / landing (the centerpiece): hero → what-you-get walkthrough → before/after sliders → natural-products → services → gallery → testimonials → contact form.
- `/services` *(optional)* — fuller residential + commercial detail.
- `/gallery` or `/before-after` *(optional)* — expanded image set and slider collection.
- `/about` *(optional)* — Lauren's story and the natural-products philosophy.
- `/contact` *(optional)* — standalone request form, if not kept inline on home.

## Tech Stack & Integrations
No stack was specified by the user — **open decision.** Sensible default for a fast, polished marketing site: a modern framework (e.g. Next.js + Tailwind) with image optimization/CDN for the heavy imagery and before/after assets.

- **Form delivery / lead notification:** required mechanism, none specified — **open decision** (assumed an email/notification service such as Resend, or a hosted form service like Formspree). The form must reliably reach Lauren's inbox.
- **Image hosting:** before/after pairs and home photography need optimized delivery — assume a CDN/image pipeline.
- **No CRM, payments, or scheduling integration** in v1 unless Lauren requests it.

## Configuration & Customization
- **Lead recipient:** the email/destination that contact requests are sent to (Lauren's inbox).
- **Before/after pairs:** easy to add/swap image pairs and labels (oven, floor, etc.) as Lauren builds a portfolio.
- **Gallery images:** simple to update over time.
- **Copy:** benefits, promises, and product descriptions editable; final wording supplied by Lauren.
- **Branding:** logo, business name (once chosen), and palette tokens centralized so the name swap and any future rebrand are painless.

## Out of Scope / Guardrails
- **No online booking, scheduling, or payment** in v1 — the conversion action is a contact request, not a booked/paid job.
- **No client login or customer portal.**
- **Not a SaaS product** — this is a done-for-you marketing site for one business.
- Keep claims about products **truthful** — describe them as natural / non-toxic / safe per what Lauren can actually stand behind; avoid unverifiable health or certification claims unless Lauren provides them.

## Design Direction
Upscale and premium, image-forward, in a **soft-pink-and-gray palette using complementary colors** (the one explicit aesthetic direction from the client). Must showcase abundant home imagery and interactive before/after sliders. Beyond that palette and the image/slider emphasis, the design agent has full creative freedom over layout, typography, and components.

---

DESIGN AGENT STANDING RULES
(These apply to every project. Read before spawning any agents.)

CANVAS STRUCTURE
1. Organize the canvas as a route grid, not free-placed pages.
2. Rows = top-level routes (one row per side-nav destination, e.g. /dashboard, /clients, /invoices).
3. Columns = sequential pages within that route's flow, ordered by drill-down depth
   (e.g. row "Clients" → col 1: /clients, col 2: /clients/[id], col 3: /clients/new).
4. Vertical position = section; horizontal position = depth. The grid should read like a matrix.

FRAME SIZING
5. Fixed cell size: 1440×900 desktop frames with consistent gutters.
6. Content longer than the frame extends off the bottom and is masked/clipped — do not resize frames to fit content.

LABELING
7. No row or column labels. Page names carry the route prefix (e.g. "clients/[id]"), which communicates the route group.

BUILD ORDER
8. Always build the home page first, before any other page or any agent fan-out.
9. The home page establishes the design system: global shell (side nav, top bar, content area proportions), spacing/grid system, typography scale, color tokens, and reusable components (nav item, card, button, etc.).
10. Only after the home page is approved: fan out agents, each owning one row (route), all building against the established shell and component library.

RESPONSIVENESS
11. Desktop-first, built mobile-friendly: use sensible breakpoints and responsive-safe layout decisions.
12. Do not create separate mobile/tablet frames unless explicitly requested.
