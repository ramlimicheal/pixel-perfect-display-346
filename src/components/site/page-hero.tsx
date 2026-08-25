import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/site/reveal";
import { TrustpilotBadge } from "@/components/site/trustpilot-badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  align?: "center" | "left";
}

export function PageHero({ title, subtitle, image, imageAlt, align = "center" }: PageHeroProps) {
  const centered = align === "center";
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="hero-wash mx-auto max-w-[1248px] rounded-[28px] px-6 pb-16 pt-16 sm:px-12 sm:pt-24">
        <div
          className={cn(
            "mx-auto max-w-3xl",
            centered ? "text-center" : "text-left lg:mx-0",
          )}
        >
          <Reveal>
            <TrustpilotBadge />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {subtitle}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              to="/pricing"
              className="mt-9 inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
            >
              Start Your Journey
              <ChevronRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={300} className="mt-14">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/70 bg-card/60 p-2 shadow-lift backdrop-blur">
            <img
              src={image}
              alt={imageAlt}
              className="w-full rounded-xl"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
