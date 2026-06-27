import { Icon, type IconName } from "@/components/Icon";
import { clsx } from "@/lib/cx";

export function PromiseCard({
  icon,
  title,
  body,
  tone = "light",
}: {
  icon: IconName;
  title: string;
  body: string;
  tone?: "light" | "inverse";
}) {
  const inverse = tone === "inverse";
  return (
    <div
      className={clsx(
        "flex flex-col gap-5 rounded-lg border p-8",
        inverse
          ? "border-white/10 bg-transparent"
          : "border-border-subtle bg-surface-card"
      )}
    >
      <span
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded-full",
          inverse ? "bg-white/10 text-accent-soft" : "bg-surface-secondary text-accent-deep"
        )}
      >
        <Icon name={icon} size={22} />
      </span>
      <h3
        className={clsx(
          "font-heading text-[22px] leading-tight",
          inverse ? "text-fg-inverse" : "text-fg-primary"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "text-sm leading-relaxed",
          inverse ? "text-fg-inverse/70" : "text-fg-secondary"
        )}
      >
        {body}
      </p>
    </div>
  );
}
