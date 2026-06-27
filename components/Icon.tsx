import {
  Leaf,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Wind,
  Recycle,
  Check,
  Star,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Plus,
  Store,
  Camera,
  Building2,
  KeyRound,
  Mail,
  Phone,
  MapPin,
  Quote,
  type LucideProps,
} from "lucide-react";

const map = {
  Leaf,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Wind,
  Recycle,
  Check,
  Star,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Plus,
  Store,
  Camera,
  Building2,
  KeyRound,
  Mail,
  Phone,
  MapPin,
  Quote,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
