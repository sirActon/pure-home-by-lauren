import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBand } from "@/components/CtaBand";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { img, galleryBeforeAfter } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real client work, shot the day Lauren finished the clean — marble kitchens, glass showers, hardwood floors, and commercial resets across central Ohio. No stock, no filters.",
};

const items: GalleryItem[] = [
  { src: img("generated-1782574428301.png"), title: "Marble kitchen island", location: "GERMAN VILLAGE", category: "Kitchens" },
  { src: img("generated-1782574428993.png"), title: "Walk-in glass shower", location: "CLINTONVILLE", category: "Glass" },
  { src: img("generated-1782574430509.png"), title: "Polished oak hardwood", location: "UPPER ARLINGTON", category: "Floors" },
  { src: img("generated-1782574432179.png"), title: "Soaking tub re-set", location: "VICTORIAN VILLAGE", category: "Bathrooms" },
  { src: img("generated-1782574431352.png"), title: "Sun-flooded living room", location: "SHORT NORTH", category: "Floors" },
  { src: img("generated-1782574435362.png"), title: "Oven, 90-min detail", location: "BEXLEY", category: "Ovens" },
  { src: img("generated-1782574435742.png"), title: "Whole-floor commercial reset", location: "OLDE TOWNE EAST", category: "Commercial" },
  { src: img("generated-1782574437147.png"), title: "Quartz vanity, polished", location: "GRANDVIEW HEIGHTS", category: "Bathrooms" },
  { src: img("generated-1782574437085.png"), title: "Brass fixtures, no streaks", location: "DUBLIN", category: "Bathrooms" },
  { src: img("generated-1782574437742.png"), title: "Pendant glass", location: "NEW ALBANY", category: "Glass" },
  { src: img("generated-1782574441086.png"), title: "Open-plan reception", location: "DOWNTOWN — OFFICE", category: "Commercial" },
  { src: img("generated-1782574440263.png"), title: "Range hood detail", location: "WORTHINGTON", category: "Kitchens" },
  { src: img("generated-1782574441422.png"), title: "Bedroom turn-down", location: "POWELL", category: "Floors" },
];

const stats = [
  ["220+", "HOMES CLEANED"],
  ["3,400+", "ROOMS DETAILED"],
  ["4.97", "AVG. CLIENT RATING"],
  ["6 yrs", "IN BUSINESS, SOLO-RUN"],
];

export default function GalleryPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="bg-surface-primary pt-28">
        <div className="container-px py-12">
          <div className="flex items-center gap-6">
            <Eyebrow>THE GALLERY</Eyebrow>
            <span className="h-px flex-1 bg-border-subtle" />
            <span className="text-[10px] font-medium tracking-eyebrow text-fg-tertiary">
              218 ROOMS · UPDATED JUNE 2026
            </span>
          </div>
          <h1 className="mt-9 font-heading text-6xl leading-[1.02] tracking-tight text-fg-primary sm:text-7xl lg:text-[108px]">
            The proof,
            <br /> room by room.
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row">
            <p className="max-w-xl text-[17px] leading-relaxed text-fg-secondary">
              Every photograph below is real client work, shot the day Lauren
              finished the clean — no stock, no stylists, no filters. The same two
              hands, the same plant-based products, every time.
            </p>
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-medium tracking-eyebrow text-fg-tertiary">
                WHAT YOU&apos;RE LOOKING AT
              </span>
              <span className="font-heading text-xl leading-snug text-fg-primary">
                Marble. Glass. Hardwood.
                <br /> Untouched by harsh chemistry.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-2 gap-y-10 border-y border-border-subtle py-12 lg:grid-cols-4">
          {stats.map(([num, label], i) => (
            <div key={label} className={"flex flex-col gap-2 " + (i > 0 ? "lg:border-l lg:border-border-subtle lg:pl-10" : "")}>
              <span className="flex items-end gap-2 font-heading text-5xl tracking-tight text-fg-primary lg:text-6xl">
                {num}
                {label.startsWith("AVG") && <Star size={22} className="mb-2 fill-accent-deep text-accent-deep" />}
              </span>
              <span className="text-[11px] font-medium tracking-eyebrow text-fg-tertiary">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MASONRY GRID + FILTER */}
      <section className="bg-surface-primary">
        <div className="container-px py-16 lg:py-20">
          <GalleryGrid items={items} />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-surface-secondary">
        <div className="container-px py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>DRAG TO SEE THE WORK</Eyebrow>
              <h2 className="mt-5 font-heading text-5xl leading-[1.05] tracking-tight text-fg-primary sm:text-6xl">
                Drag to see the work.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-fg-secondary">
              Four real client jobs, untouched between frames. Plant-based products
              only — no bleach, no ammonia, no fume.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
            {galleryBeforeAfter.map((ba) => (
              <BeforeAfterSlider key={ba.title} {...ba} imageHeight="h-[300px]" />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SPREAD */}
      <section className="bg-surface-primary">
        <div className="container-px py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>FEATURED PROJECT</Eyebrow>
              <h2 className="mt-5 font-heading text-5xl leading-[1.02] tracking-tight text-fg-primary sm:text-7xl">
                Twelve rooms,
                <br /> one weekend,
                <br /> zero residue.
              </h2>
            </div>
            <div className="flex flex-col gap-3.5 lg:pt-3">
              <span className="text-[10px] font-medium tracking-eyebrow text-fg-tertiary">A 1908 EDWARDIAN</span>
              <span className="font-heading text-lg leading-snug text-fg-primary">
                German Village · 4,200 sq ft
                <br /> 12 rooms · 3 baths · 1 conservatory
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr,1fr]">
            <div className="relative h-[360px] overflow-hidden rounded-lg bg-surface-tertiary lg:h-[600px]">
              <Image src={img("generated-1782574440579.png")} alt="Featured Edwardian home" fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              {["generated-1782574443178.png", "generated-1782574443765.png", "generated-1782574442860.png"].map((f) => (
                <div key={f} className="relative h-[180px] overflow-hidden rounded-md bg-surface-tertiary lg:h-[184px]">
                  <Image src={img(f)} alt="Featured project detail" fill sizes="(max-width:1024px) 50vw, 30vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr,1.3fr] lg:gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-medium tracking-eyebrow text-fg-tertiary">THE BRIEF</span>
              <h3 className="font-heading text-2xl leading-snug text-fg-primary">
                &ldquo;Two boys, a newborn, and a dog with opinions.&rdquo;
              </h3>
            </div>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-fg-secondary">
              <p>
                The Tilden family wanted a top-to-bottom reset before their second
                child came home from the hospital. The catch: nothing with a
                fragrance, no aerosols, and a soft enough touch for the original
                1908 plaster mouldings and reclaimed white-oak floors.
              </p>
              <p>
                Two days. Plant-based citrus, white vinegar, and steam. Every
                surface photographed in natural light before the family walked back
                in on Sunday evening.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        image={img("generated-1782574004660.png")}
        eyebrow="REQUEST A CLEANING"
        title="Want to see your home in the next gallery?"
        sub="Tell us a little about your space. Lauren personally walks every new home before quoting — usually within 24 hours, always with no obligation."
      />

      <Footer />
    </>
  );
}
