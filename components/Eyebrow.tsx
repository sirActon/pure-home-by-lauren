import { clsx } from "@/lib/cx";

type Tone = "default" | "inverse" | "accent";

const toneMap: Record<Tone, { line: string; text: string }> = {
  default: { line: "bg-accent-deep", text: "text-fg-secondary" },
  inverse: { line: "bg-accent-primary", text: "text-fg-inverse" },
  accent: { line: "bg-accent-primary", text: "text-accent-primary" },
};

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const t = toneMap[tone];
  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <span className={clsx("h-px w-12", t.line)} aria-hidden />
      <span className={clsx("eyebrow", t.text)}>{children}</span>
    </div>
  );
}

// A compact dot + label variant, used on dark CTA panels.
export function EyebrowDot({
  children,
  tone = "accent",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const t = toneMap[tone];
  return (
    <div className={clsx("flex items-center gap-2.5", className)}>
      <span className={clsx("h-1.5 w-1.5 rounded-full", t.line)} aria-hidden />
      <span className={clsx("eyebrow", t.text)}>{children}</span>
    </div>
  );
}
