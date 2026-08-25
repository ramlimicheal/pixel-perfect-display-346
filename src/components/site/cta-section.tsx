import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import heroChart from "@/assets/tradeforge/hero-chart.webp";
import { Reveal } from "@/components/site/reveal";
import { TrustpilotBadge } from "@/components/site/trustpilot-badge";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border/60 card-tint-periwinkle">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <TrustpilotBadge text="Rated 4.7/5 by 750+ users" />
              <h2 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Ready to become a profitable trader?
              </h2>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                The one tool that lets you do everything you need to improve your
                trading strategy.
              </p>
              <Link
                to="/pricing"
                className="mt-8 inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
              >
                Start Your Journey
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="relative">
              <img
                src={heroChart}
                alt="TradeForge charting workspace with candlestick chart and watchlist"
                loading="lazy"
                className="w-full rounded-xl border border-border/60 shadow-lift"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
