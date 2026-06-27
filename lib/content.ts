// Shared content used across multiple pages. Page-specific copy lives in the
// page files themselves. Image paths point at /public/images.

import type { BeforeAfter } from "@/components/BeforeAfterSlider";

export const img = (file: string) => `/images/${file}`;

// Six promises — shown on Services and About.
export const promises = [
  {
    icon: "Leaf",
    title: "Plant-based, always",
    body: "Every product is plant-derived and biodegradable — chosen because it's safe for the people, pets, and surfaces you love.",
  },
  {
    icon: "ShieldCheck",
    title: "Bonded & insured",
    body: "$2M in liability coverage and full bonding, so welcoming Lauren into your home is never a leap of faith.",
  },
  {
    icon: "Sparkles",
    title: "Meticulous by default",
    body: "Baseboards, vents, grout, and the backs of faucets — the details most services skip are the ones Lauren leans into.",
  },
  {
    icon: "HeartHandshake",
    title: "The same hands, every visit",
    body: "You'll never wonder who's at the door. Lauren cleans every home herself — the same careful approach, every single time.",
  },
  {
    icon: "Wind",
    title: "A fresh-air finish",
    body: "No bleach, no ammonia, no synthetic fragrance. Just light, clean air and a home that smells like nothing at all.",
  },
  {
    icon: "Recycle",
    title: "Low-waste service",
    body: "Reusable microfiber, refillable glass bottles, and products tracked back to a supplier we can name.",
  },
] as const;

// Testimonials — solo-operator voice (no "team").
export const testimonials = [
  {
    quote:
      "My son is allergic to nearly every conventional cleaner. Lauren is the only service we've kept past two months. The house feels lighter the day she leaves.",
    name: "Maya Albright",
    role: "German Village, biweekly · 2 yrs",
  },
  {
    quote:
      "We asked Lauren to handle our boutique after-hours. Three months in, our hardwoods look better than the day they were installed.",
    name: "Devon Park",
    role: "Co-owner, Studio Hayes · commercial",
  },
  {
    quote:
      "Discreet, on time, and somehow remembers which drawer the silver lives in. The oven slider on the site? That was actually our oven.",
    name: "Claudia & Theo Reyes",
    role: "Upper Arlington, weekly · 3 yrs",
  },
] as const;

// Home before/after trio. No true "before" frames exist yet, so each reuses the
// after image under a grimy filter — swap `beforeSrc` in once Lauren shoots real
// before/after pairs.
export const homeBeforeAfter: BeforeAfter[] = [
  {
    afterSrc: img("generated-1782574435362.png"),
    title: "Oven, 90-minute detail",
    meta: "DRAG TO REVEAL",
    alt: "Oven deep clean",
  },
  {
    afterSrc: img("generated-1782574428993.png"),
    title: "Walk-in glass shower",
    meta: "DRAG TO REVEAL",
    alt: "Glass shower clean",
  },
  {
    afterSrc: img("generated-1782574430509.png"),
    title: "Polished oak hardwood",
    meta: "DRAG TO REVEAL",
    alt: "Hardwood floor clean",
  },
];

export const galleryBeforeAfter: BeforeAfter[] = [
  { afterSrc: img("generated-1782574435362.png"), title: "Oven, 90-minute detail", meta: "BEXLEY", alt: "Oven" },
  { afterSrc: img("generated-1782574428993.png"), title: "Walk-in glass shower", meta: "CLINTONVILLE", alt: "Shower glass" },
  { afterSrc: img("generated-1782574430509.png"), title: "Polished oak hardwood", meta: "UPPER ARLINGTON", alt: "Hardwood" },
  { afterSrc: img("generated-1782574437147.png"), title: "Quartz vanity, polished", meta: "GRANDVIEW", alt: "Vanity" },
];
