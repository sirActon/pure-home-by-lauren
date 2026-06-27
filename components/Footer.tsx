import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-surface-inverse text-fg-inverse">
      <div className="container-px py-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-20">
          <div className="max-w-sm">
            <p className="font-heading text-4xl">{site.name}</p>
            <p className="mt-1 text-[11px] font-medium tracking-eyebrow text-accent-primary">
              {site.tagline}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-fg-inverse/70">
              All-natural, meticulous home and commercial cleaning — for people
              who care about the air they breathe at home.
            </p>
          </div>

          <div className="flex flex-wrap gap-16 sm:gap-20">
            <div className="flex flex-col gap-3.5">
              <p className="text-[11px] font-medium tracking-eyebrow text-accent-primary">
                NAVIGATE
              </p>
              <Link href="/" className="text-sm text-fg-inverse/80 hover:text-fg-inverse">
                Home
              </Link>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-fg-inverse/80 hover:text-fg-inverse"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3.5">
              <p className="text-[11px] font-medium tracking-eyebrow text-accent-primary">
                VISIT
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-fg-inverse/80 hover:text-fg-inverse"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="text-sm text-fg-inverse/80 hover:text-fg-inverse"
              >
                {site.phone}
              </a>
              <p className="text-sm text-fg-inverse/80">{site.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-inverse/50">
            © 2026 {site.fullName}. Made with care, in small batches.
          </p>
          <div className="flex items-center gap-4 text-fg-inverse/60">
            <a href="#" aria-label="Instagram" className="hover:text-fg-inverse">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-fg-inverse">
              <Facebook size={18} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-fg-inverse">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
