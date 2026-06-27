// Centralized brand + business config.
// Swap these once the business name and contact details are finalized —
// every page reads from here so a rebrand is a one-file change.

export const site = {
  name: "Pure Home",
  fullName: "Pure Home by Lauren",
  tagline: "BY LAUREN",
  url: "https://purehomebylauren.com",
  description:
    "All-natural, meticulous home and commercial cleaning for people who care about the air they breathe at home. Plant-based, non-toxic, and safe for kids and pets.",
  email: "hello@purehomebylauren.com",
  phone: "(614) 555-0142",
  phoneHref: "tel:+16145550142",
  serviceArea: "Serving the greater Columbus area",
  serviceAreaCities: [
    "German Village",
    "Short North",
    "Clintonville",
    "Bexley",
    "Upper Arlington",
    "Dublin",
    "New Albany",
    "Worthington",
  ],
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustPoints = [
  "100% plant-based products",
  "Safe for kids & pets",
  "Bonded & insured",
  "Rated 4.97 across 220+ homes",
  "Same trained team, every visit",
] as const;
