import Link from "next/link";
import { clsx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "secondary-inverse" | "soft";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill text-sm font-medium tracking-[0.02em] transition-colors duration-200 px-7 py-3.5";

const variants: Record<Variant, string> = {
  primary: "bg-accent-deep text-fg-inverse hover:bg-[#8f6155]",
  secondary:
    "border border-fg-primary text-fg-primary hover:bg-fg-primary hover:text-fg-inverse",
  "secondary-inverse":
    "border border-fg-inverse/80 text-fg-inverse hover:bg-fg-inverse hover:text-fg-primary",
  soft: "bg-accent-primary text-fg-on-pink hover:bg-[#bd8779]",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonTag({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
