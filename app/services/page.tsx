import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { PromiseCard } from "@/components/PromiseCard";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { img, promises } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial cleaning crafted around plant-based formulas — recurring maintenance, deep cleans, move-in/out, oven and window detailing, and discreet after-hours commercial care.",
};

const serviceRows = [
  {
    n: "01",
    t: "Recurring Maintenance",
    d: "Weekly, bi-weekly, or monthly visits that keep a home consistently fresh. Lauren learns your preferences — which products you love, which surfaces to baby — and brings the same trusted approach every time.",
  },
  {
    n: "02",
    t: "Deep Clean",
    d: "A reset for the entire home — baseboards, vents, grout, light fixtures, every drawer pulled. Recommended once or twice a year, or as a starting point before recurring service begins.",
  },
  {
    n: "03",
    t: "Move In / Move Out",
    d: "A complete top-to-bottom clean for an empty home — inside cabinets, appliances, closets, and ovens — so the next chapter begins on a fresh page. Coordinates with realtors and movers on request.",
  },
  {
    n: "04",
    t: "Post-Construction",
    d: "Drywall dust, paint splatter, and tile haze removed without harsh solvents. Lauren coordinates directly with contractors and designers so spaces are ready for the reveal — not the second clean.",
  },
  {
    n: "05",
    t: "Oven Deep Clean",
    d: "A 90-minute specialty service for the oven — racks, glass, hood, and burner caps — using only food-safe cleaners. Ideal as a stand-alone visit or paired with a recurring schedule.",
  },
  {
    n: "06",
    t: "Refrigerator Detail",
    d: "Every shelf, drawer, and gasket addressed with food-safe solutions — interior wiped, exterior polished, coils dusted. Often booked alongside a deep clean or seasonal refresh.",
  },
  {
    n: "07",
    t: "Window Service",
    d: "Interior and accessible exterior windows hand-cleaned with vinegar-based solutions — frames wiped, sills detailed, screens dusted. Especially loved alongside seasonal deep cleans.",
  },
];

const tiers = [
  {
    name: "Essential",
    desc: "A graceful monthly visit to keep the essentials in rhythm — perfect for low-traffic homes and pieds-à-terre.",
    price: "$220",
    featured: false,
    includes: [
      "Monthly recurring visit",
      "Kitchen, baths, common rooms",
      "Plant-based product kit",
      "Lauren, start to finish",
    ],
  },
  {
    name: "Signature",
    tag: "SIGNATURE · MOST CHOSEN",
    desc: "A bi-weekly visit calibrated for active homes — the rhythm most clients find brings the greatest sense of calm.",
    price: "$340",
    featured: true,
    includes: [
      "Bi-weekly recurring visits",
      "Whole-home, room by room",
      "Linen change & light tidying",
      "One specialty service per quarter",
      "Priority scheduling",
    ],
  },
  {
    name: "Estate",
    desc: "Weekly attention plus seasonal deep cleans — for larger homes, multiple residences, or households that simply want a higher cadence of care.",
    price: "$540",
    featured: false,
    includes: [
      "Weekly recurring visits",
      "Seasonal deep clean (4× / year)",
      "Lauren as your single point of contact",
      "Concierge text channel",
      "Vendor coordination",
    ],
  },
];

const commercialTypes = [
  { icon: "Store" as const, t: "Boutiques & Showrooms", b: "Glass, mirrors, fabric, and fine finishes treated with formulas that won't dull patinas or stain leather." },
  { icon: "Camera" as const, t: "Creative Studios", b: "Photo studios, design houses, and ateliers where surfaces matter and harsh fumes would interrupt the work." },
  { icon: "Building2" as const, t: "Boutique Offices", b: "Small firms and private offices that want their people to walk into a place that feels considered every morning." },
  { icon: "KeyRound" as const, t: "Property Managers", b: "Turnover cleans, common areas, and short-term rental resets — coordinated through a single point of contact." },
];

const faqs = [
  {
    q: "Are your products really safe for kids and pets?",
    a: "Yes. Every product in the standard kit is plant-derived, fragrance-free or essential-oil scented, and EPA Safer-Choice certified. Lauren is glad to share the SDS for any specific formula on request.",
  },
  { q: "Do I need to be home during the cleaning?" },
  { q: "What's the difference between a deep clean and a recurring visit?" },
  { q: "How do you handle keys, alarms, and access?" },
  { q: "Can I customize what's included on each visit?" },
  { q: "What's your cancellation or rescheduling policy?" },
];

export default function ServicesPage() {
  return (
    <>
      <Nav variant="transparent" />

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-surface-tertiary">
        <Image src={img("generated-1782574170902.png")} alt="A meticulously cleaned kitchen" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-fg-primary/55" />
        <div className="container-px relative z-10 pb-16 pt-32">
          <div className="max-w-4xl">
            <Eyebrow tone="inverse">OUR SERVICES</Eyebrow>
            <h1 className="mt-7 font-heading text-5xl leading-[1.05] text-fg-inverse sm:text-6xl lg:text-7xl">
              A meticulous, all-natural clean — tailored to every room you love.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-inverse/90">
              Residential and commercial cleaning crafted around plant-based
              formulas, quietly attentive care, and the meticulous attention of a
              household manager.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Request a cleaning <ArrowRight size={16} /></Button>
              <Button href="#pricing" variant="secondary-inverse">See care plans</Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-fg-inverse/70">
              {["PLANT-BASED FORMULAS", "TRAINED & BONDED", "SERVING HOMES & STUDIOS"].map((l, i) => (
                <span key={l} className="flex items-center gap-6">
                  <span className="eyebrow">{l}</span>
                  {i < 2 && <span className="hidden h-3 w-px bg-white/40 sm:inline-block" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-surface-primary">
        <div className="container-px py-20 lg:py-28">
          <Eyebrow>WHO WE CLEAN FOR</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
            Two practices. One careful standard.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">
            Whether it&apos;s a family home or a flagship boutique, Lauren shows up
            with the same plant-based kit, the same considered routines, and the
            same quiet attention to detail.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <OverviewCard image={img("generated-1782574197415.png")} eyebrow="RESIDENTIAL" cardClass="bg-surface-secondary" title="For the homes you live in." body="Weekly maintenance, deep cleans, and move-in / move-out resets — calibrated for families, pets, and the surfaces you most want to protect." />
            <OverviewCard image={img("generated-1782574203043.png")} eyebrow="COMMERCIAL" cardClass="bg-surface-inverse" inverse title="For the spaces you trust your name to." body="After-hours, discreet care for boutiques, studios, and small offices — chemicals safe for fabric, leather, and the people who walk in every morning." />
          </div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="bg-surface-secondary">
        <div className="container-px py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>THE FULL CATALOG</Eyebrow>
              <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-fg-primary sm:text-5xl">
                Every service, considered.
              </h2>
              <div className="relative mt-8 h-[260px] w-full overflow-hidden rounded-md bg-surface-tertiary">
                <Image src={img("generated-1782574217400.png")} alt="Cleaning detail" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-secondary">
                A complete catalog of in-home services. Mix recurring care with
                deeper resets — every visit uses the same plant-based kit and
                Lauren&apos;s own meticulous hands.
              </p>
            </div>

            <div className="border-t border-border-subtle">
              {serviceRows.map((r) => (
                <div key={r.n} className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 border-b border-border-subtle py-7 sm:grid-cols-[48px,200px,1fr,auto]">
                  <span className="text-[11px] font-medium tracking-eyebrow text-accent-deep">{r.n}</span>
                  <h3 className="font-heading text-2xl leading-tight text-fg-primary sm:max-w-[200px]">{r.t}</h3>
                  <p className="col-span-2 text-[15px] leading-relaxed text-fg-secondary sm:col-span-1">{r.d}</p>
                  <a href="/contact" className="col-span-2 flex items-center gap-1.5 text-sm font-medium text-accent-deep sm:col-span-1 sm:justify-end">
                    Inquire <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-surface-primary scroll-mt-24">
        <div className="container-px py-20 lg:py-28">
          <Eyebrow>CARE PLANS</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
            A tier for every household — billed monthly, never surprising.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">
            Three care plans built around how often you&apos;d like a visit. Every
            plan uses the same plant-based kit and Lauren&apos;s own hands — only
            the rhythm changes.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  "flex flex-col gap-7 rounded-lg p-10 " +
                  (t.featured ? "bg-surface-inverse" : "border border-border-subtle bg-surface-card")
                }
              >
                {t.tag ? (
                  <span className="flex items-center gap-2 text-[11px] font-medium tracking-eyebrow text-accent-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
                    {t.tag}
                  </span>
                ) : (
                  <span className="text-[11px] font-medium tracking-eyebrow text-accent-deep">{t.name.toUpperCase()}</span>
                )}
                <h3 className={"font-heading text-3xl " + (t.featured ? "text-fg-inverse" : "text-fg-primary")}>{t.name}</h3>
                <p className={"text-sm leading-relaxed " + (t.featured ? "text-fg-inverse/80" : "text-fg-secondary")}>{t.desc}</p>
                <div className="flex items-end gap-2">
                  <span className={"text-sm " + (t.featured ? "text-fg-inverse/60" : "text-fg-tertiary")}>From</span>
                  <span className={"font-heading text-5xl leading-none " + (t.featured ? "text-fg-inverse" : "text-fg-primary")}>{t.price}</span>
                  <span className={"text-sm " + (t.featured ? "text-fg-inverse/60" : "text-fg-tertiary")}>/ visit</span>
                </div>
                <div className={"h-px w-full " + (t.featured ? "bg-white/15" : "bg-border-subtle")} />
                <ul className="flex flex-col gap-3">
                  {t.includes.map((inc) => (
                    <li key={inc} className={"text-sm " + (t.featured ? "text-fg-inverse/85" : "text-fg-secondary")}>· {inc}</li>
                  ))}
                </ul>
                <Button href="/contact" variant={t.featured ? "soft" : "secondary"} className="mt-auto w-full">
                  Request {t.name}
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-fg-tertiary">
            Pricing is a starting point — every home is walked, measured, and
            quoted in person. We never charge for the consultation.
          </p>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="bg-surface-inverse">
        <div className="container-px py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative h-[420px] overflow-hidden rounded-md bg-surface-tertiary lg:h-[520px]">
              <Image src={img("generated-1782574367428.png")} alt="After-hours commercial cleaning" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <span className="absolute left-5 top-5 rounded-pill bg-surface-primary px-4 py-2.5 text-[10px] font-medium tracking-eyebrow text-fg-primary">
                AFTER-HOURS · DISCREET
              </span>
            </div>
            <div className="flex flex-col gap-7">
              <Eyebrow tone="inverse">COMMERCIAL</Eyebrow>
              <h2 className="font-heading text-4xl leading-tight text-fg-inverse sm:text-5xl">
                For the spaces that quietly carry your brand.
              </h2>
              <p className="text-base leading-relaxed text-fg-inverse/80">
                Lauren arrives after closing, leaves before the lights come on, and
                never uses anything that lingers in the air. Whether it&apos;s a
                flagship boutique, a small creative studio, or a building of leased
                apartments, the commercial program is built on discretion and the
                same plant-based standards used at home.
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2">
                {[
                  ["6pm–6am", "Service windows"],
                  ["$2M", "Liability coverage"],
                  ["100%", "Plant-based kit"],
                ].map(([num, label]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-heading text-3xl text-accent-soft">{num}</span>
                    <span className="text-[13px] text-fg-inverse/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commercialTypes.map((c) => (
              <div key={c.t} className="flex flex-col gap-4 rounded-md border border-white/10 p-8">
                <span className="text-accent-soft"><Icon name={c.icon} size={22} /></span>
                <h3 className="font-heading text-xl leading-tight text-fg-inverse">{c.t}</h3>
                <p className="text-sm leading-relaxed text-fg-inverse/70">{c.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-heading text-2xl text-fg-inverse">Need a tailored commercial program?</p>
            <Button href="/contact" variant="soft">Start a conversation <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="bg-surface-secondary">
        <div className="container-px py-20 lg:py-28">
          <Eyebrow>EVERY VISIT</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
            Six promises in every visit.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">
            Regardless of the plan or the property, every Pure Home visit arrives
            with the same standards. These are non-negotiable.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p) => (
              <PromiseCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-1 gap-12 py-20 lg:grid-cols-[1fr,1.3fr] lg:gap-20 lg:py-28">
          <div>
            <Eyebrow>BEFORE YOU REACH OUT</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-fg-primary">
              Answers to the questions we hear most.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
              Have something else on your mind? Lauren personally answers every
              inquiry — usually within a day.
            </p>
            <a href={`mailto:hello@purehomebylauren.com`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-deep">
              <Icon name="Mail" size={16} /> hello@purehomebylauren.com
            </a>
          </div>
          <div className="border-t border-border-subtle">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border-subtle py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-xl text-fg-primary">{f.q}</span>
                  <Plus size={18} className="shrink-0 text-accent-deep transition-transform group-open:rotate-45" />
                </summary>
                {f.a && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fg-secondary">{f.a}</p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        image={img("generated-1782574487298.png")}
        title="Let's begin with a quiet walk-through of your space."
        sub="Tell us about your home or studio. Lauren reads every inquiry and replies personally, usually within a day."
      />

      <Footer />
    </>
  );
}

function OverviewCard({
  image,
  eyebrow,
  title,
  body,
  cardClass,
  inverse = false,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  cardClass: string;
  inverse?: boolean;
}) {
  return (
    <div className={"flex flex-col overflow-hidden rounded-lg " + cardClass}>
      <div className="relative h-[280px] w-full bg-surface-tertiary">
        <Image src={image} alt={title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 p-9">
        <span className={"text-[11px] font-medium tracking-eyebrow " + (inverse ? "text-accent-soft" : "text-accent-deep")}>{eyebrow}</span>
        <h3 className={"font-heading text-2xl leading-snug " + (inverse ? "text-fg-inverse" : "text-fg-primary")}>{title}</h3>
        <p className={"text-[15px] leading-relaxed " + (inverse ? "text-fg-inverse/75" : "text-fg-secondary")}>{body}</p>
      </div>
    </div>
  );
}
