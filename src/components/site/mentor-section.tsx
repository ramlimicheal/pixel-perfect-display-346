import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import mentorMode from "@/assets/tradeforge/mentor-video.png";
import { Reveal } from "@/components/site/reveal";

export function MentorSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-border/50 bg-tint-2 shadow-soft">
        <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <Reveal>
            <img
              src={mentorMode}
              alt="TradeForge Mentor Mode analytics dashboard"
              loading="lazy"
              className="w-full rounded-xl border border-border/60 shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Built for Educators &amp; Mentors
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Monitor your students and help them become profitable traders. Get
              real-time insights into each of your student&apos;s performance in
              detail.
            </p>
            <Link
              to="/features"
              className="mt-8 inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
            >
              View All Features
              <ChevronRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
