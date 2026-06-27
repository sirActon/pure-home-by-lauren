"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { clsx } from "@/lib/cx";

export type BeforeAfter = {
  afterSrc: string;
  /** Optional distinct "before" image. If omitted, the after image is reused with a grimy filter. */
  beforeSrc?: string;
  /** CSS filter applied to the "before" layer when no distinct beforeSrc is supplied. */
  beforeFilter?: string;
  title: string;
  meta?: string;
  alt?: string;
};

const DEFAULT_BEFORE_FILTER =
  "saturate(0.55) brightness(0.82) contrast(0.92) sepia(0.22)";

export function BeforeAfterSlider({
  afterSrc,
  beforeSrc,
  beforeFilter = DEFAULT_BEFORE_FILTER,
  title,
  meta,
  alt,
  className,
  imageHeight = "h-[320px]",
}: BeforeAfter & { className?: string; imageHeight?: string }) {
  const [pos, setPos] = useState(50); // percent revealed of the "after"
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const usesSameImage = !beforeSrc;

  return (
    <figure className={clsx("flex w-full flex-col gap-4", className)}>
      <div
        ref={wrapRef}
        className={clsx(
          "relative w-full select-none overflow-hidden rounded-lg bg-surface-tertiary",
          imageHeight
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        role="slider"
        aria-label={`Before and after: ${title}. Drag to reveal.`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
      >
        {/* BEFORE layer (full) */}
        <Image
          src={beforeSrc ?? afterSrc}
          alt={alt ? `${alt} — before` : `${title} — before`}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover"
          style={usesSameImage ? { filter: beforeFilter } : undefined}
        />
        <span className="absolute left-4 top-4 z-20 rounded-pill bg-fg-primary/80 px-3 py-1.5 text-[10px] font-medium tracking-eyebrow text-fg-inverse">
          BEFORE
        </span>

        {/* AFTER layer (clipped from the left to `pos`) */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={afterSrc}
            alt={alt ? `${alt} — after` : `${title} — after`}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
          <span className="absolute right-4 top-4 rounded-pill bg-accent-deep px-3 py-1.5 text-[10px] font-medium tracking-eyebrow text-fg-inverse">
            AFTER
          </span>
        </div>

        {/* Divider + handle */}
        <div
          className="absolute inset-y-0 z-30 w-1 -translate-x-1/2 bg-surface-card"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent-deep bg-surface-card text-accent-deep shadow-md">
            <MoveHorizontal size={16} />
          </span>
        </div>
      </div>

      <figcaption className="flex items-center justify-between">
        <span className="font-heading text-lg text-fg-primary">{title}</span>
        <span className="text-[10px] font-medium tracking-eyebrow text-fg-tertiary">
          {meta ?? "DRAG TO REVEAL"}
        </span>
      </figcaption>
    </figure>
  );
}
