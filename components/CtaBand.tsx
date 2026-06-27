import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { EyebrowDot } from "@/components/Eyebrow";

export function CtaBand({
  image,
  eyebrow = "REQUEST A CLEANING",
  title,
  sub,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[480px]">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-fg-primary/70" />
        <div className="container-px relative z-10 flex min-h-[480px] flex-col justify-center py-24">
          <EyebrowDot tone="accent">{eyebrow}</EyebrowDot>
          <h2 className="mt-7 max-w-3xl font-heading text-4xl leading-[1.05] text-fg-inverse sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-inverse/85">
            {sub}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary">
              Request a cleaning <ArrowRight size={16} />
            </Button>
            <Button href="/gallery" variant="secondary-inverse">
              See the work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
