import { ChevronRight } from "lucide-react";
import type { ComponentType } from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export interface JournalFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tint: "lavender" | "peach" | "periwinkle";
  wide?: boolean;
}

const TINT_CLASSES: Record<JournalFeature["tint"], string> = {
  lavender: "card-tint-lavender",
  peach: "card-tint-peach",
  periwinkle: "card-tint-periwinkle",
};

export function JournalFeatureCard({ feature, delay = 0 }: { feature: JournalFeature; delay?: number }) {
  const Icon = feature.icon;
  return (
    <Reveal delay={delay} className={cn(feature.wide && "sm:col-span-2")}>
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 p-7 shadow-soft sm:p-9",
          TINT_CLASSES[feature.tint],
        )}
      >
        <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary">
          <Icon className="size-5 text-primary-foreground" />
        </div>
        <h3 className="mt-5 text-[22px] font-semibold leading-snug tracking-tight text-foreground">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-foreground">
          Learn more
          <ChevronRight className="size-4" aria-hidden />
        </span>
        <div className="mt-8 flex flex-1 items-end">
          <img
            src={feature.image}
            alt={feature.imageAlt}
            loading="lazy"
            className={cn(
              "mx-auto w-full rounded-xl border border-white/70 bg-card/70 shadow-soft",
              feature.wide ? "max-w-3xl" : "max-w-md",
            )}
          />
        </div>
      </article>
    </Reveal>
  );
}
