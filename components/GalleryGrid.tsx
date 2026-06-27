"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { clsx } from "@/lib/cx";

export type GalleryItem = {
  src: string;
  title: string;
  location: string;
  category: "Kitchens" | "Bathrooms" | "Floors" | "Glass" | "Ovens" | "Commercial";
};

const CATEGORIES = [
  "All",
  "Kitchens",
  "Bathrooms",
  "Floors",
  "Glass",
  "Ovens",
  "Commercial",
] as const;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length };
    for (const it of items) c[it.category] = (c[it.category] ?? 0) + 1;
    return c;
  }, [items]);

  const shown = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          const count = counts[cat] ?? 0;
          if (cat !== "All" && count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                "inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-[13px] font-medium transition-colors",
                isActive
                  ? "bg-fg-primary text-fg-inverse"
                  : "border border-border-strong bg-surface-card text-fg-primary hover:border-fg-primary"
              )}
            >
              {cat}
              {cat === "All" && (
                <span className="text-[11px] text-accent-primary">{count}</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-10 [column-fill:_balance] gap-5 sm:columns-2 lg:columns-3">
        {shown.map((it) => (
          <figure key={it.src} className="mb-5 break-inside-avoid">
            <div className="relative w-full overflow-hidden rounded-md bg-surface-tertiary">
              <Image
                src={it.src}
                alt={it.title}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-3">
              <span className="font-heading text-base text-fg-primary">{it.title}</span>
              <span className="shrink-0 text-[10px] font-medium tracking-eyebrow text-fg-tertiary">
                {it.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
