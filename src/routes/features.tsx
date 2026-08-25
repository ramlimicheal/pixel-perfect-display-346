import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  ChevronRight,
  CirclePlay,
  ClipboardList,
  Gauge,
  HeartPulse,
  LineChart,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";

import calendarView from "@/assets/tradeforge/calendar-view.png";
import featuresHero from "@/assets/tradeforge/features-hero.png";
import notebook from "@/assets/tradeforge/notebook.png";
import replayChart from "@/assets/tradeforge/replay-chart.png";
import reportsDetail from "@/assets/tradeforge/reports-detail.png";
import { CtaSection } from "@/components/site/cta-section";
import { Faq } from "@/components/site/faq";
import { MentorSection } from "@/components/site/mentor-section";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — TradeForge Trading Journal & Analytics" },
      {
        name: "description",
        content:
          "Explore TradeForge features: automated journaling, 50+ performance reports, playbooks, trade replay, backtesting, and mentor mode — everything you need to become a better trader.",
      },
      { property: "og:title", content: "Features — TradeForge Trading Journal & Analytics" },
      {
        property: "og:description",
        content:
          "Automated journaling, 50+ performance reports, playbooks, trade replay, backtesting, and mentor mode.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

const FEATURES = [
  {
    eyebrow: "For data-driven traders",
    title: "Track the metrics that matter",
    description:
      "TradeForge's advanced trade tracking is built to help you stay on top of the metrics that matter at your trading to make it profitable.",
    points: [
      "Real-time analysis",
      "Track entries & exits",
      "Risk management",
      "Running P/L",
      "Identify setups & mistakes",
      "Trade rating & scale",
    ],
    image: reportsDetail,
    imageAlt: "TradeForge performance metrics and trade tracking dashboard",
  },
  {
    eyebrow: "For active traders",
    title: "Focus on powerful journaling.",
    description:
      "Stay on top of your trading performance with your journal. Store your data, stay on top of goals, track important KPI’s, and more",
    points: [
      "Analytics Dashboard",
      "Advanced Filtering",
      "Calendar View",
      "Winning Percentage",
      "Notes & Comments",
      "Profitability Charts",
    ],
    image: calendarView,
    imageAlt: "TradeForge journal calendar view with profitability charts",
  },
  {
    eyebrow: "For disciplined traders",
    title: "Build structured trading plans that scale",
    description:
      "Your notebook is yours to customize and to keep everything in one place and avoid repeating the same mistakes again that cost you a lot.",
    points: [
      "Build trading plans",
      "Recap losses",
      "Sync with trading stats",
      "Create custom templates",
      "Save and share with others",
    ],
    image: notebook,
    imageAlt: "TradeForge notebook for structured trading plans",
  },
  {
    eyebrow: "Know everything",
    title: "Reporting built for your trading style",
    description:
      "Your reports hold all the answers to help you discover your strengths & weaknesses. Different reports for all kinds of traders.",
    points: [
      "Best or worst trading days",
      "Identify top set-ups",
      "Track your bad habits",
      "Understand drawdowns",
      "Discover your strengths & weaknesses",
    ],
    image: featuresHero,
    imageAlt: "TradeForge reporting dashboard for trading strengths and weaknesses",
  },
  {
    eyebrow: "Catch mistakes",
    title: "Replay trades as if you're at moment.",
    description:
      "Identify flaws in your execution and improve by replaying your trades in TradeForge and learn from your mistakes so it doesn't happen again",
    points: [
      "Replay tick by tick",
      "Recap trading strategies",
      "Time and sales",
      "Level 2",
      "On-chart plotting",
    ],
    image: replayChart,
    imageAlt: "TradeForge trade replay chart with entries and exits",
  },
];

const OUTCOMES = [
  {
    icon: ShieldCheck,
    title: "Improve Your Risk Management",
    description: "Use the R-Multiple stat to stop losing money from poor risk management.",
  },
  {
    icon: Gauge,
    title: "Stop Trading With Hesitation",
    description:
      "Become a confident trader through the power of journaling. No more hesitation.",
  },
  {
    icon: HeartPulse,
    title: "Recover After A Trading Loss",
    description:
      "Losses are normal. Use TradeForge to help you recover and comeback stronger.",
  },
  {
    icon: CalendarDays,
    title: "Find Your Best & Worst Trading Days",
    description: "Focus on improving what causes you to lose money on your bad days.",
  },
  {
    icon: Target,
    title: "Understand Your Best Trade Setup",
    description:
      "Use your best trade setup consistently to build a profitable trading system.",
  },
  {
    icon: Rocket,
    title: "Scale Up Your Trading Fast",
    description: "A journal to focus on strengths and areas for improvement.",
  },
];

function FeaturesPage() {
  return (
    <>
      <PageHero
        title="Essential Features for a Better Trading Journey"
        subtitle="No more navigating multiple spreadsheets, platforms, or papers. Everything you need to become a powerful trader is here."
        image={featuresHero}
        imageAlt="TradeForge analytics dashboard overview"
        align="left"
      />

      {/* Alternating feature rows */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="space-y-20 sm:space-y-28">
          {FEATURES.map((feature, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={cn(!reversed && "lg:order-2")}>
                  <div
                    className={cn(
                      "rounded-3xl border border-border/50 p-4 shadow-soft",
                      i % 3 === 0
                        ? "card-tint-lavender"
                        : i % 3 === 1
                          ? "card-tint-peach"
                          : "card-tint-periwinkle",
                    )}
                  >
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      loading="lazy"
                      className="w-full rounded-2xl border border-white/70 bg-card/70"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className={cn(!reversed && "lg:order-1")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {feature.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5">
                        <Check className="size-4 shrink-0 text-primary" aria-hidden />
                        <span className="text-[15px] text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/pricing"
                    className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    Learn More
                    <ChevronRight className="size-4" aria-hidden />
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <MentorSection />

      {/* Outcomes */}
      <section className="bg-tint-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How TradeForge Helps You
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Answering all your frequently asked questions here
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((outcome, i) => (
              <Reveal key={outcome.title} delay={(i % 3) * 100}>
                <article className="h-full rounded-2xl border border-border/60 bg-card p-7 shadow-soft">
                  <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary">
                    <outcome.icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {outcome.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">
                    {outcome.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <CtaSection />
    </>
  );
}
