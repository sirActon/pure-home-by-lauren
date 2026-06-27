"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { clsx } from "@/lib/cx";

type ServiceType = "residential" | "commercial";
type Frequency = "one-time" | "monthly" | "biweekly" | "weekly" | "unsure";

const inputClass =
  "h-[52px] w-full rounded-md border border-border-subtle bg-surface-card px-4 text-sm text-fg-primary placeholder:text-fg-tertiary focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep";
const labelClass =
  "text-[11px] font-medium uppercase tracking-[0.16em] text-fg-secondary";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

export function RequestForm({
  variant = "full",
}: {
  /** "full" = contact page (all fields), "compact" = home page panel */
  variant?: "full" | "compact";
}) {
  const [type, setType] = useState<ServiceType>("residential");
  const [freq, setFreq] = useState<Frequency>("biweekly");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const isFull = variant === "full";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, serviceType: type, frequency: freq };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-border-subtle bg-surface-card px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
          <Check size={26} />
        </span>
        <h3 className="font-heading text-2xl text-fg-primary">
          Your request is on its way.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-fg-secondary">
          Thank you — Lauren reads every message personally and will write back,
          usually the same day. Keep an eye on your inbox.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 rounded-lg border border-border-subtle bg-surface-card p-8 sm:p-12"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-secondary text-accent-deep">
          <Mail size={18} />
        </span>
        <div>
          <h3 className="font-heading text-xl text-fg-primary">
            {isFull ? "Request a cleaning." : "Reach Lauren directly"}
          </h3>
          {isFull && (
            <p className="text-sm text-fg-secondary">
              Takes about a minute. Asterisks mean we need it to give you a real
              answer.
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name *">
          <input name="name" required placeholder="Lauren Bennett" className={inputClass} />
        </Field>
        <Field label="Email *">
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputClass}
          />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" placeholder="(614) 555-0142" className={inputClass} />
        </Field>
        <Field label="Neighborhood / city">
          <input name="location" placeholder="German Village" className={inputClass} />
        </Field>
      </div>

      {/* Service type */}
      <div className="flex flex-col gap-2.5">
        <span className={labelClass}>What kind of space? *</span>
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { v: "residential", t: "Residential", s: "Home, condo, or estate" },
              { v: "commercial", t: "Commercial", s: "Office, boutique, studio" },
            ] as const
          ).map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => setType(o.v)}
              className={clsx(
                "flex flex-col items-center gap-1.5 rounded-md border px-4 py-5 text-center transition-colors",
                type === o.v
                  ? "border-accent-deep bg-surface-secondary"
                  : "border-border-subtle bg-surface-card hover:border-border-strong"
              )}
            >
              <span
                className={clsx(
                  "h-3.5 w-3.5 rounded-full border",
                  type === o.v
                    ? "border-accent-deep bg-accent-deep"
                    : "border-border-strong"
                )}
              />
              <span className="text-sm font-medium text-fg-primary">{o.t}</span>
              {isFull && <span className="text-[11px] text-fg-secondary">{o.s}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Frequency (full only) */}
      {isFull && (
        <div className="flex flex-col gap-2.5">
          <span className={labelClass}>How often?</span>
          <div className="flex flex-wrap gap-2.5">
            {(
              [
                { v: "one-time", t: "One-time" },
                { v: "monthly", t: "Monthly" },
                { v: "biweekly", t: "Biweekly" },
                { v: "weekly", t: "Weekly" },
                { v: "unsure", t: "Not sure yet" },
              ] as const
            ).map((o) => (
              <button
                key={o.v}
                type="button"
                onClick={() => setFreq(o.v)}
                className={clsx(
                  "rounded-pill border px-5 py-2.5 text-[13px] font-medium transition-colors",
                  freq === o.v
                    ? "border-accent-deep bg-accent-deep text-fg-inverse"
                    : "border-border-subtle bg-surface-card text-fg-primary hover:border-border-strong"
                )}
              >
                {o.t}
              </button>
            ))}
          </div>
        </div>
      )}

      <Field label="When would you like to start?">
        <input
          name="timing"
          placeholder="Within the next 2 weeks"
          className={inputClass}
        />
      </Field>

      <Field label="Tell us a little about the space">
        <textarea
          name="message"
          rows={4}
          placeholder="3-bedroom Victorian, hardwood throughout, two cats. Looking for biweekly with a deep clean first."
          className="w-full rounded-md border border-border-subtle bg-surface-card p-4 text-sm leading-relaxed text-fg-primary placeholder:text-fg-tertiary focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
        />
      </Field>

      {isFull && (
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="newsletter"
            className="mt-1 h-5 w-5 shrink-0 accent-[#A37162]"
          />
          <span className="text-[13px] leading-relaxed text-fg-secondary">
            Send me Lauren&apos;s quarterly note — natural-cleaning tips, no
            marketing. Unsubscribe in one click.
          </span>
        </label>
      )}

      {status === "error" && (
        <p className="text-sm text-accent-deep">
          Something went wrong sending your request. Please email{" "}
          <a href="mailto:hello@purehomebylauren.com" className="underline">
            hello@purehomebylauren.com
          </a>{" "}
          and we&apos;ll take it from there.
        </p>
      )}

      <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2.5 rounded-pill bg-accent-deep px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-fg-inverse transition-colors hover:bg-[#8f6155] disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send the request <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="text-xs text-fg-tertiary">
          Lauren replies personally, usually within a few hours.
        </p>
      </div>
    </form>
  );
}
