import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, X } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export interface Plan {
  name: string;
  price: number;
  tagline: string;
  badge?: string;
  featured?: boolean;
  features: Array<{ label: string; included: boolean }>;
}

export const PLANS: Plan[] = [
  {
    name: "Essential",
    price: 24,
    tagline: "Best for beginner traders",
    features: [
      { label: "Can add up to 1 account", included: true },
      { label: "1GB of secure data storage", included: true },
      { label: "Create up to 3 Playbooks", included: true },
      { label: "5 Mentor Invites", included: true },
      { label: "Unlimited Backtesting", included: true },
      { label: "Trade Replay", included: false },
    ],
  },
  {
    name: "Pro",
    price: 33,
    tagline: "Best for advanced traders",
    badge: "SAVE $189",
    featured: true,
    features: [
      { label: "Connect UNLIMITED accounts", included: true },
      { label: "5GB of secure data storage", included: true },
      { label: "Unlimited Playbooks", included: true },
      { label: "Unlimited Mentor Invites", included: true },
      { label: "Unlimited Backtesting", included: true },
      { label: "Sessions Trade Replay", included: true },
    ],
  },
];

export function PricingCards({ showCompareLink = false }: { showCompareLink?: boolean }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-6 sm:grid-cols-2">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100}>
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-8 shadow-soft",
                plan.featured
                  ? "border-primary/25 bg-card"
                  : "border-border/60 bg-tint",
              )}
            >
              <div className="flex items-start justify-between">
                <h3
                  className={cn(
                    "text-2xl font-bold tracking-tight",
                    plan.featured ? "text-primary" : "text-foreground",
                  )}
                >
                  {plan.name}
                </h3>
                {plan.badge ? (
                  <span className="rounded-md bg-chip px-2.5 py-1 text-xs font-bold tracking-wide text-primary-hover">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-5">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  ${plan.price}
                </span>
                <span className="ml-1.5 text-lg text-muted-foreground">/Month</span>
              </p>
              <p className="mt-2 text-[15px] text-muted-foreground">{plan.tagline}</p>
              <Link
                to="/pricing"
                className={cn(
                  "mt-7 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-[15px] font-semibold transition-colors",
                  plan.featured
                    ? "bg-primary text-primary-foreground shadow-button hover:bg-primary-hover"
                    : "border border-border/70 bg-card text-foreground shadow-soft hover:bg-accent",
                )}
              >
                Get Started
              </Link>
              <div className="my-7 h-px bg-border/70" />
              <p
                className={cn(
                  "text-sm font-medium",
                  plan.featured ? "text-primary" : "text-foreground",
                )}
              >
                Includes:
              </p>
              <ul className="mt-4 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    {f.included ? (
                      <Check className="size-4 shrink-0 text-foreground" aria-hidden />
                    ) : (
                      <X className="size-4 shrink-0 text-muted-foreground/60" aria-hidden />
                    )}
                    <span
                      className={cn(
                        "text-[15px]",
                        f.included ? "text-foreground" : "text-muted-foreground/70",
                      )}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      {showCompareLink ? (
        <Reveal className="mt-10 text-center" delay={150}>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground shadow-button transition-colors hover:bg-primary-hover"
          >
            Compare All Features
            <ChevronRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}
