"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { clsx } from "@/lib/cx";

export function Nav({ variant = "light" }: { variant?: "light" | "transparent" }) {
  const [open, setOpen] = useState(false);

  const transparent = variant === "transparent";

  return (
    <header
      className={clsx(
        "absolute inset-x-0 top-0 z-50",
        transparent ? "bg-transparent" : "sticky border-b border-fg-primary/10 bg-surface-primary/85 backdrop-blur"
      )}
    >
      <nav className="container-px flex h-20 items-center justify-between md:h-22">
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.fullName}>
          <span
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full font-heading text-lg",
              "bg-accent-deep text-fg-inverse"
            )}
          >
            P
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={clsx(
                "font-heading text-lg",
                transparent ? "text-fg-inverse" : "text-fg-primary"
              )}
            >
              {site.name}
            </span>
            <span
              className={clsx(
                "mt-0.5 text-[8px] font-medium tracking-eyebrow",
                transparent ? "text-fg-inverse/70" : "text-fg-secondary"
              )}
            >
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "text-sm transition-opacity hover:opacity-70",
                transparent ? "text-fg-inverse" : "text-fg-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={clsx(
              "inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-[13px] font-medium tracking-[0.02em] transition-colors",
              transparent
                ? "bg-fg-inverse text-fg-primary hover:bg-fg-inverse/90"
                : "bg-fg-primary text-fg-inverse hover:bg-fg-primary/90"
            )}
          >
            Request a cleaning
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={clsx(
            "md:hidden",
            transparent ? "text-fg-inverse" : "text-fg-primary"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-fg-primary/10 bg-surface-primary md:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between py-3 text-fg-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <ArrowUpRight size={16} className="text-accent-deep" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-pill bg-accent-deep px-7 py-3.5 text-sm font-medium text-fg-inverse"
              onClick={() => setOpen(false)}
            >
              Request a cleaning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
