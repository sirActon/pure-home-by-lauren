import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { RequestForm } from "@/components/RequestForm";
import { Stars, Avatar } from "@/components/Stars";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";
import {
  img,
  homeBeforeAfter,
  testimonials,
} from "@/lib/content";

const trust = [
  "100% plant-based products",
  "Safe for kids & pets",
  "Bonded & insured",
  "Rated 4.97 across 220+ homes",
  "The same careful hands, every visit",
];

const steps = [
  {
    num: "01 — WALK-THROUGH",
    title: "Lauren learns your home, room by room.",
    body: "Before the first clean, Lauren visits in person. She notes the surfaces that matter — Carrara marble, hardwoods, that one finicky range hood — and builds a plan that respects every material.",
    image: img("generated-1782574005678.png"),
  },
  {
    num: "02 — THE CLEAN",
    title: "Botanical formulas, meticulous hands.",
    body: "Lauren arrives each visit with plant-based sprays, microfiber, and a checklist tuned to your home. No bleach, no synthetic fragrance, no rush — just the same careful standard, every time.",
    image: img("generated-1782574007757.png"),
  },
  {
    num: "03 — THE HAND-OFF",
    title: "A final walk, and a fresh-air finish.",
    body: "She ends with a quick walk-through so you can see every detail, and leaves a card noting anything to watch before the next visit. Recurring service is built in if you'd like it.",
    image: img("generated-1782574008905.png"),
  },
];

const naturalPoints = [
  {
    title: "EWG-verified or third-party-tested formulas only.",
    sub: "If it can't show up in the Environmental Working Group's database, it doesn't show up in your cabinet.",
  },
  {
    title: "Safe to use around children, pets, and pregnant clients.",
    sub: "No harsh chemicals lingering on toys, food prep surfaces, or the water bowl.",
  },
  {
    title: "Reusable microfiber, refillable bottles, low-waste service.",
    sub: "Every product is tracked back to a supplier, and refilled in glass.",
  },
];

const galleryImages = [
  img("generated-1782574012932.png"),
  img("generated-1782574013440.png"),
  img("generated-1782574015016.png"),
  img("generated-1782574015699.png"),
  img("generated-1782574015895.png"),
  img("generated-1782574014853.png"),
  img("generated-1782574016970.png"),
];

export default function HomePage() {
  return (
    <>
      <Nav variant="transparent" />

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-surface-tertiary">
        <Image
          src={img("generated-1782574004660.png")}
          alt="A bright, freshly cleaned upscale living room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fg-primary/10 via-fg-primary/20 to-fg-primary/70" />
        <div className="container-px relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent-primary" />
              <span className="eyebrow text-fg-inverse">
                NATURAL · METICULOUS · SAFE FOR THE WHOLE HOUSE
              </span>
            </div>
            <h1 className="mt-8 font-heading text-5xl leading-[1.05] text-fg-inverse sm:text-6xl lg:text-7xl">
              A spotless home, without the chemical aftertaste.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-inverse/90">
              Lauren deep-cleans upscale homes and offices using plant-based,
              non-toxic formulas — so what&apos;s left behind is just light, fresh
              air and the place you actually want to come home to.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                Request a cleaning <ArrowRight size={16} />
              </Button>
              <Button href="/gallery" variant="secondary-inverse">
                See the work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-surface-inverse">
        <div className="container-px flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7">
          {trust.map((t, i) => (
            <div key={t} className="flex items-center gap-3">
              <Check size={16} className="text-accent-primary" />
              <span className="text-[13px] text-fg-inverse">{t}</span>
              {i < trust.length - 1 && (
                <span className="ml-5 hidden h-4 w-px bg-white/15 lg:inline-block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-surface-primary">
        <div className="container-px py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>WHAT IT&apos;S LIKE</Eyebrow>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
                A three-step rhythm Lauren follows at every single home.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-fg-secondary">
              You&apos;ll notice the difference before she leaves: surfaces feel
              cleaner, the air smells lighter, and nothing left behind has a
              warning label. Here&apos;s how she gets there.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col gap-6">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-surface-tertiary">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 px-1">
                  <span className="text-[11px] font-medium tracking-eyebrow text-accent-deep">
                    {s.num}
                  </span>
                  <h3 className="font-heading text-2xl leading-snug text-fg-primary">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-secondary">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-surface-secondary">
        <div className="container-px py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>DRAG THE LINE — SEE THE WORK</Eyebrow>
              <h2 className="mt-6 font-heading text-4xl leading-[1.05] text-fg-primary sm:text-6xl">
                The proof is in the surfaces.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-fg-secondary">
              Ovens, glass showers, hardwood floors — the places people scroll
              past in other galleries are the places Lauren leans in hardest.
              Drag the divider to see what 90 minutes with natural products
              actually does.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {homeBeforeAfter.map((ba) => (
              <BeforeAfterSlider key={ba.title} {...ba} />
            ))}
          </div>
        </div>
      </section>

      {/* ALL-NATURAL PRODUCTS */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="relative h-[420px] overflow-hidden rounded-lg bg-surface-tertiary lg:h-[640px]">
            <Image
              src={img("generated-1782574007750.png")}
              alt="All-natural cleaning products with citrus and herbs"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-pill bg-white/90 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-accent-deep" />
              <span className="text-[10px] font-medium tracking-eyebrow text-fg-primary">
                PLANT-DERIVED · BIODEGRADABLE
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-9">
            <div>
              <Eyebrow>OUR DIFFERENCE</Eyebrow>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
                Nothing in the bottle you wouldn&apos;t want on dinner.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-fg-secondary">
              Lauren cleans with citrus oils, white vinegar, baking soda, plant
              surfactants, and essential oils — sourced in small batches from
              suppliers she can name. No bleach. No ammonia. No
              &ldquo;fragrance.&rdquo; The kind of products you&apos;d be
              comfortable with sitting on the kitchen counter with a baby
              crawling underfoot.
            </p>
            <div className="flex flex-col gap-5">
              {naturalPoints.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                    <Check size={14} />
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-fg-primary">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-fg-secondary">
                      {p.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-surface-inverse">
        <div className="container-px py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="inverse">WHO WE CLEAN FOR</Eyebrow>
            <h2 className="max-w-2xl font-heading text-4xl leading-[1.05] text-fg-inverse sm:text-6xl">
              Two kinds of clean. One standard.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ServiceCard
              image={img("generated-1782574755242.png")}
              tag="RESIDENTIAL"
              tagClass="bg-surface-secondary"
              cardClass="bg-surface-primary"
              title="Beautiful homes, lovingly cared for."
              copy="Weekly, biweekly, and one-time deep cleans for single-family homes, townhouses, and estates — from the everyday rhythm to the post-renovation reset."
              points={[
                "Recurring weekly or biweekly service",
                "Move-in, move-out & post-renovation",
                "Window, oven & refrigerator deep cleans",
              ]}
            />
            <ServiceCard
              image={img("generated-1782574011522.png")}
              tag="COMMERCIAL"
              tagClass="bg-surface-card"
              cardClass="bg-surface-secondary"
              title="Boutiques, offices, studios — kept showroom-fresh."
              copy="After-hours, eco-conscious cleaning for the workspaces where your people and clients should be able to breathe deeply. Discreet, scheduled, and tracked."
              points={[
                "Daily, nightly, or scheduled programs",
                "Showrooms, boutiques & creative studios",
                "Property managers & boutique offices",
              ]}
            />
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-surface-primary">
        <div className="container-px py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>AT WORK</Eyebrow>
              <h2 className="mt-6 font-heading text-4xl leading-[1.05] text-fg-primary sm:text-6xl">
                Inside the homes Lauren cares for.
              </h2>
            </div>
            <div className="flex max-w-sm flex-col gap-5 lg:items-end">
              <p className="text-[15px] leading-relaxed text-fg-secondary lg:text-right">
                A small look at the homes and spaces cared for this season —
                kitchens, bathrooms, glass, and floors that get the same
                attention twice a week.
              </p>
              <Button href="/gallery" variant="secondary" className="self-start lg:self-end">
                Browse the full gallery <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            <GalleryTile src={galleryImages[0]} className="col-span-2 row-span-2 h-[280px] md:h-[564px]" />
            <GalleryTile src={galleryImages[1]} className="h-[280px]" />
            <GalleryTile src={galleryImages[2]} className="h-[280px]" />
            <GalleryTile src={galleryImages[3]} className="h-[280px]" />
            <GalleryTile src={galleryImages[4]} className="h-[280px]" />
            <GalleryTile src={galleryImages[5]} className="h-[280px]" />
            <GalleryTile src={galleryImages[6]} className="h-[280px]" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface-secondary">
        <div className="container-px py-24 lg:py-32">
          <div className="flex flex-col items-center gap-5 text-center">
            <Eyebrow>WHAT CLIENTS SAY</Eyebrow>
            <h2 className="font-heading text-3xl leading-tight text-fg-primary sm:text-5xl">
              Trusted in 220+ central Ohio homes.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-6 rounded-lg bg-surface-card p-10"
              >
                <Stars />
                <p className="font-heading text-[22px] leading-relaxed text-fg-primary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3.5">
                  <Avatar name={t.name} />
                  <div>
                    <p className="text-sm font-medium text-fg-primary">{t.name}</p>
                    <p className="text-xs text-fg-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-1 gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="flex flex-col gap-8">
            <Eyebrow>REQUEST A CLEANING</Eyebrow>
            <h2 className="font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
              Tell us about your home — we&apos;ll write back the same day.
            </h2>
            <p className="text-[15px] leading-relaxed text-fg-secondary">
              Share a few details and Lauren will get back to you personally with
              a quote and the next available visit. No high-pressure follow-ups,
              no auto-renewals — just a real reply.
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                "Personal reply within 1 business day",
                "Free in-home walk-through before booking",
                "Your details stay between you and Lauren",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <Icon name="Check" size={16} className="text-accent-deep" />
                  <span className="text-sm text-fg-primary">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <RequestForm variant="compact" />
        </div>
      </section>

      <Footer />
    </>
  );
}

function ServiceCard({
  image,
  tag,
  tagClass,
  cardClass,
  title,
  copy,
  points,
}: {
  image: string;
  tag: string;
  tagClass: string;
  cardClass: string;
  title: string;
  copy: string;
  points: string[];
}) {
  return (
    <div className={`flex flex-col gap-8 rounded-lg p-8 sm:p-12 ${cardClass}`}>
      <div className="relative h-[260px] w-full overflow-hidden rounded-md bg-surface-tertiary">
        <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-5">
        <span className={`w-fit rounded-pill px-3 py-1.5 text-[10px] font-medium tracking-eyebrow text-accent-deep ${tagClass}`}>
          {tag}
        </span>
        <h3 className="font-heading text-3xl leading-tight text-fg-primary">{title}</h3>
        <p className="text-[15px] leading-relaxed text-fg-secondary">{copy}</p>
        <div className="flex flex-col gap-3 pt-2">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-2.5">
              <Check size={14} className="text-accent-deep" />
              <span className="text-sm text-fg-primary">{p}</span>
            </div>
          ))}
        </div>
        <Button href="/contact" variant="secondary" className="mt-2 self-start">
          Request {tag.toLowerCase()} <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

function GalleryTile({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-surface-tertiary ${className ?? ""}`}>
      <Image src={src} alt="Recently cleaned home" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
    </div>
  );
}
