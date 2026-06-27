import type { Metadata } from "next";
import { Mail, Phone, MapPin, Plus, Quote } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { RequestForm } from "@/components/RequestForm";
import { Avatar } from "@/components/Stars";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a cleaning or just say hello. Lauren reads every message herself and replies personally — usually the same business day. Serving Columbus, Dublin, New Albany, Bexley and more.",
};

const hours = [
  ["Monday – Friday", "7:30 am – 6:00 pm"],
  ["Saturday", "By appointment"],
  ["Sunday", "Closed"],
];

const faqs = [
  {
    q: "What products do you actually use?",
    a: "A short list of plant-based brands (Branch Basics, Method, Mrs. Meyer's plant-based line) plus a citrus-and-vinegar solution Lauren mixes in glass on-site. Every product is EWG-verified or independently tested. She'll send the full list if you want it.",
  },
  { q: "Do you bring everything, or do I supply the products?" },
  { q: "How quickly can you start?" },
  { q: "Do you work with allergies and sensitivities?" },
  { q: "What does a typical first deep-clean cost?" },
  { q: "Are you bonded and insured?" },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="bg-surface-primary pt-28">
        <div className="container-px flex flex-col items-center py-16 text-center">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h1 className="mt-7 max-w-4xl font-heading text-5xl leading-[1.05] text-fg-primary sm:text-6xl lg:text-7xl">
            A real reply, from a real person — usually the same day.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-fg-secondary">
            Tell us about your home or space and Lauren will personally write back
            with a quote and the next available visit. No booking software, no
            upsells — just a thoughtful note from the person who&apos;ll actually be
            at your door.
          </p>
        </div>
      </section>

      {/* MAIN: info + form */}
      <section className="bg-surface-primary">
        <div className="container-px grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[420px,1fr] lg:gap-10">
          {/* Info column */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-7 rounded-lg bg-surface-inverse p-10">
              <h2 className="font-heading text-3xl leading-tight text-fg-inverse">
                Reach Lauren directly.
              </h2>
              <p className="text-sm leading-relaxed text-fg-inverse/80">
                Lauren reads every message herself, usually between visits. If your
                home is in the Columbus area, you&apos;ll get a reply the same
                business day.
              </p>
              <div className="flex flex-col gap-5 pt-2">
                <ContactMethod icon={<Mail size={16} />} label="EMAIL" value={site.email} href={`mailto:${site.email}`} />
                <ContactMethod icon={<Phone size={16} />} label="CALL OR TEXT" value={site.phone} href={site.phoneHref} />
                <ContactMethod icon={<MapPin size={16} />} label="SERVING" value="Columbus, Dublin, New Albany & Bexley" />
              </div>
              <div className="flex flex-col gap-3.5 border-t border-white/15 pt-6">
                <span className="text-[10px] font-medium tracking-eyebrow text-fg-inverse/55">HOURS</span>
                {hours.map(([d, t]) => (
                  <div key={d} className="flex justify-between text-sm">
                    <span className="text-fg-inverse/85">{d}</span>
                    <span className="text-fg-inverse">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-lg bg-surface-secondary p-8">
              <Quote size={28} className="text-accent-deep" />
              <p className="font-heading text-lg leading-relaxed text-fg-primary">
                &ldquo;Lauren replied within the hour, walked our place the next
                morning, and our home has never felt this fresh — without a single
                chemical smell.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar name="Elena Park" />
                <div>
                  <p className="text-[13px] font-medium text-fg-primary">Elena Park</p>
                  <p className="text-[11px] text-fg-secondary">Clintonville · new client this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <RequestForm variant="full" />
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-surface-secondary">
        <div className="container-px grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7">
            <Eyebrow>WHERE WE WORK</Eyebrow>
            <h2 className="font-heading text-4xl leading-tight text-fg-primary sm:text-5xl">
              Currently caring for homes across central Ohio.
            </h2>
            <p className="text-[15px] leading-relaxed text-fg-secondary">
              We work across Columbus proper, the inner-ring suburbs, and select
              communities across central Ohio. Outside these areas? Send a note
              anyway — Lauren occasionally takes on travel days for the right
              project.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-[11px] font-medium tracking-eyebrow text-accent-deep">REGULAR ROUTES</span>
              <div className="flex flex-wrap gap-2.5">
                {site.serviceAreaCities.map((c) => (
                  <span key={c} className="rounded-pill border border-border-subtle bg-surface-card px-4 py-2 text-[13px] text-fg-primary">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stylized service-area card (no live map in v1) */}
          <div className="relative h-[420px] overflow-hidden rounded-lg border border-border-subtle bg-gradient-to-br from-surface-secondary to-surface-tertiary">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 680 420" fill="none" preserveAspectRatio="xMidYMid slice">
              <path d="M120 120 L420 90 L560 200 L470 330 L180 360 L90 240 Z" fill="#FFFFFF99" stroke="#A37162" strokeWidth="1.5" />
              <path d="M300 70 L520 130 L500 300 L320 320 L260 180 Z" fill="#FFFFFFB3" stroke="#A37162" strokeWidth="1.5" />
              {[
                [200, 200], [320, 160], [410, 240], [280, 280], [470, 190], [350, 320], [240, 140],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="9" fill="#A37162" stroke="#FFFFFF" strokeWidth="3" />
              ))}
            </svg>
            <span className="absolute left-1/2 top-8 -translate-x-1/2 rounded-pill border border-border-subtle bg-surface-card px-4 py-1.5 text-[11px] font-medium text-fg-primary">
              Columbus
            </span>
            <div className="absolute bottom-6 right-6 flex flex-col gap-1 rounded-md bg-surface-inverse px-5 py-4">
              <span className="font-heading text-3xl text-fg-inverse">7</span>
              <span className="text-[9px] font-medium tracking-eyebrow text-accent-primary">NEIGHBORHOODS</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-primary">
        <div className="container-px py-24">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>BEFORE YOU REACH OUT</Eyebrow>
              <h2 className="mt-5 font-heading text-4xl leading-[1.05] text-fg-primary sm:text-5xl">
                A few things people ask before booking.
              </h2>
            </div>
          </div>
          <div className="mt-12 border-t border-border-subtle">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border-subtle py-7">
                <summary className="flex cursor-pointer items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-xl text-fg-primary sm:text-2xl">{f.q}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle text-accent-deep transition-transform group-open:rotate-45">
                    <Plus size={18} />
                  </span>
                </summary>
                {f.a && <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-fg-secondary">{f.a}</p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-surface-inverse">
        <div className="container-px flex flex-col items-center py-24 text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-accent-primary" />
            <span className="eyebrow text-accent-primary">OR JUST PICK UP THE PHONE</span>
          </div>
          <h2 className="mt-7 font-heading text-4xl leading-[1.05] text-fg-inverse sm:text-6xl">
            Prefer to talk it through?
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-fg-inverse/80">
            Lauren is happy to walk through your space on a quick call. Most clients
            book that way.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-pill bg-accent-primary px-8 py-4 text-[15px] font-medium text-fg-on-pink transition-colors hover:bg-[#bd8779]">
              <Phone size={16} /> Call {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 rounded-pill border border-fg-inverse/80 px-8 py-4 text-[15px] font-medium text-fg-inverse transition-colors hover:bg-fg-inverse hover:text-fg-primary">
              <Mail size={16} /> {site.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactMethod({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-primary">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-medium tracking-eyebrow text-fg-inverse/55">{label}</span>
        <span className="text-[15px] font-medium text-fg-inverse">{value}</span>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="transition-opacity hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}
