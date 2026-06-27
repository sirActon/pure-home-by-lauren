import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { PromiseCard } from "@/components/PromiseCard";
import { img, promises } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pure Home is Lauren's small, considered cleaning practice — 100% non-toxic, plant-based products, sourced from small-batch makers she knows by name. Cleaning the way it should always have been done.",
};

const products = [
  { src: img("generated-1782574381618.png"), name: "Branch Basics", desc: "One concentrate, refilled into glass for kitchen, bath, and laundry. Fragrance-free and human-safe by design." },
  { src: img("generated-1782574382016.png"), name: "Method · Plant-Based", desc: "Selectively chosen scents from their bio-based line. Clean ingredient panels with surfactants we can name." },
  { src: img("generated-1782574383499.png"), name: "Mrs. Meyer's Plant Line", desc: "For the everyday classics — dish, hand, and surface. Only the plant-based, dye-free variants." },
  { src: img("generated-1782574386827.png"), name: "Lauren's Citrus Batch", desc: "The house blend — citrus rind, white vinegar, and a whisper of essential oil. Steeped six weeks before bottling." },
];

const press = [
  { n: "KINFOLK", q: "A study in restraint — the rare home service that feels like a craft." },
  { n: "DOMINO", q: "The cleaning service we'd actually invite to stay for tea." },
  { n: "REMODELISTA", q: "Lauren has done for cleaning what slow food did for restaurants." },
  { n: "LOCAL EAST MAG", q: "Quietly the most coveted standing appointment in the neighborhood." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="bg-surface-primary pt-28">
        <div className="container-px grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[1.2fr,1fr] lg:gap-20 lg:py-20">
          <div className="flex flex-col gap-8">
            <Eyebrow>OUR STORY</Eyebrow>
            <h1 className="font-heading text-5xl leading-[1.05] text-fg-primary sm:text-6xl">
              Cleaning, but the way it should have always been done.
            </h1>
            <p className="text-[17px] leading-relaxed text-fg-secondary">
              Pure Home is a small, considered cleaning practice serving discerning
              homeowners and commercial spaces. Lauren uses only 100% non-toxic,
              plant-based products — sourced from small-batch makers she knows by
              name — because what you breathe at home matters as much as what you
              eat.
            </p>
            <span className="text-[11px] font-medium tracking-eyebrow text-accent-deep">
              — LAUREN, FOUNDER
            </span>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-md bg-surface-tertiary lg:h-[640px]">
            <Image src={img("generated-1782574296306.png")} alt="Lauren, founder of Pure Home" fill priority sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-surface-primary">
        <div className="container-px flex flex-col items-center py-20 text-center lg:py-28">
          <Eyebrow>HOW IT BEGAN</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
            A practice born at my own kitchen counter.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-12 text-left lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6 text-base leading-relaxed text-fg-secondary">
              <p>
                For years I cleaned my home the way I&apos;d been taught — with the
                bright bottles under every American sink. Then my youngest started
                coughing every Sunday evening, the day I always cleaned. I noticed
                the haze that hung in the kitchen long after I&apos;d put the
                bottles away.
              </p>
              <p>
                My marble counters were dulling. The grout was yellowing where the
                bleach had pooled. I was paying a premium to make my home feel less
                like home.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-fg-secondary">
              <p>
                Pure Home began as a series of test batches in mason jars — citrus
                rinds, white vinegar, castile soap, a few drops of essential oil. I
                started cleaning friends&apos; homes on weekends, then their
                parents&apos; homes, then a small boutique downtown. The waitlist
                arrived before I ever printed a card.
              </p>
              <p>
                Today, every product I use is plant-based, biodegradable, and
                sourced from a small-batch supplier I can call by their first name.
                I&apos;ve kept it intentionally small and deliberately slow —
                uninterested in growing past the point of personal care.
              </p>
            </div>
          </div>

          <blockquote className="mt-14 max-w-3xl border-y border-border-strong px-8 py-10">
            <p className="font-heading text-2xl leading-relaxed text-fg-primary sm:text-3xl">
              &ldquo;I&apos;d rather clean ten homes beautifully than a hundred
              adequately. That&apos;s the whole business.&rdquo;
            </p>
            <cite className="mt-5 block text-[11px] font-medium not-italic tracking-eyebrow text-accent-deep">
              — LAUREN, FOUNDER
            </cite>
          </blockquote>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface-secondary">
        <div className="container-px flex flex-col items-center py-20 lg:py-28">
          <Eyebrow>WHAT GUIDES THE WORK</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-center font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
            Six promises that quietly guide every visit.
          </h2>
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p) => (
              <PromiseCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      {/* MEET LAUREN (replaces the team section — Lauren is a solo operator) */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1fr,1.1fr] lg:gap-20 lg:py-28">
          <div className="relative h-[420px] overflow-hidden rounded-md bg-surface-tertiary lg:h-[560px]">
            <Image src={img("generated-1782574333307.png")} alt="Lauren at work" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-7">
            <Eyebrow>MEET LAUREN</Eyebrow>
            <h2 className="font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
              One person. Hundreds of homes. One standard.
            </h2>
            <p className="text-base leading-relaxed text-fg-secondary">
              Pure Home is just me — by design. I build every schedule, blend the
              citrus solution by hand, and still clean each home myself. When you
              book Pure Home, the person who answers your note is the same person
              who walks your home, learns its quirks, and is at your door on
              cleaning day.
            </p>
            <p className="text-base leading-relaxed text-fg-secondary">
              Staying small is the whole point. It&apos;s how I can remember which
              drawer the silver lives in, which surfaces need babying, and exactly
              which products your family is sensitive to — visit after visit.
            </p>
            <div className="flex flex-col gap-3 border-t border-border-subtle pt-6">
              <span className="text-[11px] font-medium tracking-eyebrow text-accent-deep">LAUREN HAYES</span>
              <span className="text-[15px] text-fg-secondary">
                Founder, sole cleaner, and chief sourcing officer of one — six years
                in, still doing the work herself.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-surface-tertiary">
        <div className="container-px flex flex-col items-center py-20 lg:py-28">
          <Eyebrow>WHAT&apos;S IN THE KIT</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-center font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
            Small batch, plant-based, and never anonymous.
          </h2>
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.name} className="flex flex-col gap-5 rounded-md bg-surface-card p-6">
                <div className="relative h-[240px] w-full overflow-hidden rounded-sm bg-surface-tertiary">
                  <Image src={p.src} alt={p.name} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <h3 className="font-heading text-xl text-fg-primary">{p.name}</h3>
                <p className="text-[13px] leading-relaxed text-fg-secondary">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-surface-primary">
        <div className="container-px flex flex-col items-center py-20 lg:py-28">
          <Eyebrow>QUIETLY NOTICED</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-center font-heading text-3xl leading-snug text-fg-primary sm:text-4xl">
            Quietly noticed, by the people we&apos;d want to be noticed by.
          </h2>
          <div className="mt-12 grid w-full grid-cols-1 gap-px overflow-hidden rounded-lg border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
            {press.map((p) => (
              <div key={p.n} className="flex flex-col items-center gap-4 bg-surface-primary px-8 py-10 text-center">
                <span className="font-heading text-lg tracking-[0.15em] text-fg-primary">{p.n}</span>
                <p className="text-[13px] leading-relaxed text-fg-secondary">&ldquo;{p.q}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-accent-soft">
        <div className="container-px flex flex-col items-center py-20 text-center lg:py-28">
          <p className="max-w-4xl font-heading text-3xl leading-snug text-fg-on-pink sm:text-5xl sm:leading-[1.25]">
            &ldquo;I want you to walk into your kitchen on Monday morning and not
            smell anything at all — and find the light hitting your countertop the
            way it did the day you moved in.&rdquo;
          </p>
          <span className="mt-8 text-[11px] font-medium tracking-eyebrow text-accent-deep">
            — LAUREN, FOUNDER
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <div className="flex flex-col gap-7">
            <Eyebrow>BEGIN HERE</Eyebrow>
            <h2 className="font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
              Begin with a quiet conversation.
            </h2>
            <p className="text-base leading-relaxed text-fg-secondary">
              Lauren takes on a small number of new residential and commercial
              clients each season. Tell her a little about your home and she&apos;ll
              arrange a no-pressure visit to discuss what care could look like.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Request a cleaning <ArrowRight size={16} /></Button>
              <Button href="/services" variant="secondary">Explore services</Button>
            </div>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-md bg-surface-tertiary lg:h-[480px]">
            <Image src={img("generated-1782574453332.png")} alt="A freshly cleaned, light-filled room" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
