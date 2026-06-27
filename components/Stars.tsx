import { Star } from "lucide-react";

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-accent-deep text-accent-deep" />
      ))}
    </div>
  );
}

export function Avatar({ name }: { name: string }) {
  const initials = name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-tertiary text-sm font-medium text-accent-deep">
      {initials}
    </span>
  );
}
