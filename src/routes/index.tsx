import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  ChartPie,
  Check,
  ChevronRight,
  FileUp,
  Infinity as InfinityIcon,
  ListChecks,
  NotebookPen,
  Play,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";

import avatarAmelia from "@/assets/tradeforge/avatar-amelia.jpg";
import avatarArron from "@/assets/tradeforge/avatar-arron.jpg";
import avatarCharlie from "@/assets/tradeforge/avatar-charlie.jpg";
import calendarView from "@/assets/tradeforge/calendar-view.png";
import calendar from "@/assets/tradeforge/calendar.png";
import chatUi from "@/assets/tradeforge/chat-ui.webp";
import featuresHero from "@/assets/tradeforge/features-hero.png";
import heroChart from "@/assets/tradeforge/hero-chart.webp";
import mentorVideo from "@/assets/tradeforge/mentor-video.png";
import notebook from "@/assets/tradeforge/notebook.png";
import playbooks from "@/assets/tradeforge/playbooks.png";
import replayChart from "@/assets/tradeforge/replay-chart.png";
import reportsDetail from "@/assets/tradeforge/reports-detail.png";
import tradeDetail from "@/assets/tradeforge/trade-detail.png";
import { CtaSection } from "@/components/site/cta-section";
import { Faq } from "@/components/site/faq";
import { PricingCards } from "@/components/site/pricing-cards";
import { Reveal } from "@/components/site/reveal";
import { SplitHeading } from "@/components/site/split-heading";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { TrustpilotBadge } from "@/components/site/trustpilot-badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TradeForge — The Edge Behind Profitable Traders" },
      {
        name: "description",
        content:
          "TradeForge reveals key metrics and behaviors that lead to profit through automated journaling and analytics. The trading journal trusted by 50k+ active traders.",
      },
      { property: "og:title", content: "TradeForge — The Edge Behind Profitable Traders" },
      {
        property: "og:description",
        content:
          "TradeForge reveals key metrics and behaviors that lead to profit through automated journaling and analytics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "20.2B+", label: "Trades Journaled" },
  { value: "205k+", label: "Backtested Sessions" },
  { value: "1M+", label: "Trades Shared" },
  { value: "50k+", label: "Active Traders" },
];

const JOURNALING_CARDS = [
  {
    icon: FileUp,
    title: "Automated Journaling",
    description:
      "Methods like broker sync, file upload, or manual trades are automated.",
    image: calendar,
    imageAlt: "TradeForge journal calendar with imported trades",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited Accounts",
    description:
      "Track your progress of multiple trading accounts, effortlessly in one place.",
    image: calendarView,
    imageAlt: "Multiple trading accounts tracked in one view",
  },
  {
    icon: ChartPie,
    title: "Automated Statistics",
    description:
      "No more manual calculations. We’ll show your trading stats easily.",
    image: reportsDetail,
    imageAlt: "Automated trading statistics dashboard",
  },
];

const UNDERSTAND_CARDS = [
  {
    title: "Break down your strategy",
    description:
      "See detailed reports on setups, entries, exits, and execution quality.",
    image: featuresHero,
    imageAlt: "Strategy breakdown report in TradeForge",
  },
  {
    title: "Understand trading behaviours",
    description:
      "Identify patterns in mistakes and successes over time and improve strategy.",
    image: tradeDetail,
    imageAlt: "Trading behaviour analysis by trade duration",
  },
  {
    title: "Know what’s actually working",
    description:
      "Summaries of strengths, weaknesses, and improvement areas.",
    image: replayChart,
    imageAlt: "Performance summary of strengths and weaknesses",
  },
];

const REPLAY_POINTS = [
  {
    title: "Replay trades tick by tick",
    description: "See entries, exits, and decision points exactly as they happened.",
  },
  {
    title: "Backtest with real market data",
    description: "Test strategies across historical sessions and market conditions.",
  },
  {
    title: "Spot execution flaws faster",
    description: "Tag mistakes, review habits, and refine your process with clarity.",
  },
];

const COMMUNITY_CARDS = [
  {
    icon: Users,
    title: "Mentor Mode",
    description:
      "Easily share your trades to get feedback from your trading mentor or friend.",
    image: mentorVideo,
    imageAlt: "Mentor Mode trade sharing in TradeForge",
  },
  {
    icon: NotebookPen,
    title: "Forge University",
    description:
      "A learning hub tailored to help traders discover exactly how they need to level up.",
    image: chatUi,
    imageAlt: "Forge University trader community chat",
  },
];

const USE_CASES = [
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
    image: featuresHero,
    imageAlt: "TradeForge analytics dashboard with key trading metrics",
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
    imageAlt: "TradeForge journal with calendar view and profitability charts",
  },
];

const QUOTES = [
  {
    quote:
      "After just one week of reviewing trades here, I spotted patterns I had missed for months. That awareness alone changed how I approach my setups.",
    name: "charlie.speaks",
    followers: "187K followers",
    avatar: avatarCharlie,
  },
  {
    quote:
      "TradeForge is less about flashy dashboards and more about honest self-assessment. If you want to understand your trading decisions, see patterns you keep repeating, and actually improve over time, this is a strong option",
    name: "amelia.trades",
    followers: "681K followers",
    avatar: avatarAmelia,
  },
  {
    quote:
      "TradeForge is more than just a basic trading journal — it’s a performance-driven trading analytics platform.",
    name: "Tradingwitharron",
    followers: "24.9k followers",
    avatar: avatarArron,
  },
];

function SectionCard({
  title,
  description,
  image,
  imageAlt,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="card-tint-periwinkle flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 p-7 shadow-soft sm:p-9">
        <h3 className="text-[22px] font-semibold leading-snug tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-1 items-end">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-xl border border-white/70 bg-card/70 shadow-soft"
          />
        </div>
      </article>
    </Reveal>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="hero-wash mx-auto max-w-[1248px] rounded-[28px] px-6 pb-16 pt-16 sm:px-12 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <TrustpilotBadge />
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                The Edge Behind <span className="text-primary">Profitable Traders</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                TradeForge reveals key metrics and behaviors that lead to profit
                through automated journaling and analytics.
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
                src={heroChart}
                alt="TradeForge charting workspace with candlestick chart and trade watchlist"
                className="w-full rounded-xl"
              />
            </div>
            <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
              {["Notebook", "Reporting", "Journal", "Backtesting", "Replay", "Playbook", "Analytics"].map(
                (chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-border/70 bg-card px-4 py-1.5 text-sm font-medium text-slate shadow-soft"
                  >
                    {chip}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[15px] text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Automated journaling */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SplitHeading label="Powerful & Automated Trade Journaling">
          Focus on trading, we help you improve with automated journaling.
        </SplitHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {JOURNALING_CARDS.map((card, i) => (
            <SectionCard key={card.title} {...card} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Understand how you trade */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SplitHeading label="Trade analytics">
          Understand how you actually trade.
        </SplitHeading>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground lg:ml-[calc(100%/3.2)]">
            Analyze performance across 50+ reports to uncover patterns and
            inefficiencies.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {UNDERSTAND_CARDS.map((card, i) => (
            <SectionCard key={card.title} {...card} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Playbooks */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/50 card-tint-lavender shadow-soft">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                Know which strategies actually work.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Create structured playbooks. Track rules and performance to identify
                winning strategies.
              </p>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <ListChecks className="size-4 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Define your trading rules</p>
                    <p className="mt-1 text-muted-foreground">
                      Create clear entry, exit, and risk rules for every strategy you
                      trade.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <TrendingUp className="size-4 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Measure Strategy Performance</p>
                    <p className="mt-1 text-muted-foreground">
                      See how each playbook performs across win rate, expectancy and
                      net results.
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={playbooks}
                alt="TradeForge playbook with trading rules and strategy performance"
                loading="lazy"
                className="w-full rounded-xl border border-white/70 shadow-lift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Replay & backtesting */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={notebook}
              alt="TradeForge notebook and trade replay workspace"
              loading="lazy"
              className="w-full rounded-2xl border border-border/60 shadow-lift"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                Improve by reviewing every decision.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Replay trades, test strategies, and learn from mistakes before risking
                capital.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-6">
              {REPLAY_POINTS.map((point, i) => (
                <Reveal key={point.title} delay={i * 100} as="li">
                  <div className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-chip">
                      <RefreshCw className="size-4 text-primary-hover" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{point.title}</p>
                      <p className="mt-1 text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SplitHeading label="Community">
          Join a vibrant community of traders
        </SplitHeading>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground lg:ml-[calc(100%/3.2)]">
            Thousands of traders are using TradeForge to learn, collab, and improve.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COMMUNITY_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className="card-tint-peach flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 p-7 shadow-soft sm:p-9">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary">
                  <card.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <div className="mt-8 flex flex-1 items-end">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className="mx-auto w-full max-w-lg rounded-xl border border-white/70 bg-card/70 shadow-soft"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Simple Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Here&apos;s what you invest in your trading success
            </p>
          </Reveal>
        </div>
        <div className="mt-14">
          <PricingCards showCompareLink />
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-tint-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SplitHeading label="Every use case">
            Everything you need to trade smarter
          </SplitHeading>
          <Reveal delay={100}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground lg:ml-[calc(100%/3.2)]">
              One workspace to log trades, spot patterns and stay disciplined, so
              that you can focus on getting better, not organizing data
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {USE_CASES.map((useCase, i) => (
              <Reveal key={useCase.title} delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-soft sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {useCase.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {useCase.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {useCase.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5">
                        <Check className="size-4 shrink-0 text-primary" aria-hidden />
                        <span className="text-[15px] text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <img
                    src={useCase.image}
                    alt={useCase.imageAlt}
                    loading="lazy"
                    className="mt-8 w-full rounded-xl border border-border/60 shadow-soft"
                  />
                  <Link
                    to="/features"
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-[15px] font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    See all features
                    <ChevronRight className="size-4" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Quotes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SplitHeading label="Testimonials">
          What our users have to say about TradeForge
        </SplitHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {QUOTES.map((quote, i) => (
            <Reveal key={quote.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-soft">
                <blockquote className="flex-1 leading-relaxed text-foreground">
                  “{quote.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <img
                    src={quote.avatar}
                    alt=""
                    className="size-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{quote.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Instagram · {quote.followers}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Faq />
      <CtaSection />
    </>
  );
}
