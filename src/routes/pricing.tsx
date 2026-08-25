import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";

import { CtaSection } from "@/components/site/cta-section";
import { Faq } from "@/components/site/faq";
import { PLANS, PricingCards } from "@/components/site/pricing-cards";
import { Reveal } from "@/components/site/reveal";
import { TrustpilotBadge } from "@/components/site/trustpilot-badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TradeForge Trading Journal" },
      {
        name: "description",
        content:
          "Simple pricing plans for your trading success. Start with Essential at $24/month or go Pro at $33/month with unlimited accounts, playbooks, and trade replay.",
      },
      { property: "og:title", content: "Pricing — TradeForge Trading Journal" },
      {
        property: "og:description",
        content:
          "Simple pricing plans for your trading success. Essential from $24/month, Pro from $33/month.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

type CellValue = string | boolean;

const COMPARISON_ROWS: Array<{ feature: string; essential: CellValue; pro: CellValue }> = [
  { feature: "Accounts", essential: "1", pro: "Unlimited" },
  { feature: "Data Storage", essential: "1GB", pro: "5GB" },
  { feature: "Trade Imports", essential: "1", pro: "Unlimited" },
  { feature: "Commissions & Fees", essential: true, pro: true },
  { feature: "Breakeven Settings", essential: true, pro: true },
  { feature: "Advanced Analytics", essential: true, pro: true },
  { feature: "Automatic Price Chart", essential: true, pro: true },
  { feature: "Tags & Categories", essential: true, pro: true },
  { feature: "Replay your Trades", essential: false, pro: true },
  { feature: "Custom Replay Speed", essential: false, pro: true },
  { feature: "Time of Sales Data", essential: false, pro: true },
  { feature: "Level II Data", essential: false, pro: true },
  { feature: "Mentor Invites", essential: true, pro: true },
];

function Cell({ value, featured }: { value: CellValue; featured?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={cn("text-[15px] font-medium", featured ? "text-primary" : "text-foreground")}>
        {value}
      </span>
    );
  }
  return value ? (
    <Check className="mx-auto size-5 text-foreground" aria-label="Included" />
  ) : (
    <X className="mx-auto size-5 text-muted-foreground/50" aria-label="Not included" />
  );
}

function PricingPage() {
  return (
    <>
      {/* Header + plans */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="hero-wash mx-auto max-w-[1248px] rounded-[28px] px-6 py-16 sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <TrustpilotBadge />
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Simple Pricing Plans
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-muted-foreground">
                Here&apos;s what you invest in your trading success
              </p>
            </Reveal>
          </div>
          <div className="mt-14">
            <PricingCards />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compare all features
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-soft">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border/60">
                  <th scope="col" className="p-5 text-sm font-semibold text-muted-foreground">
                    Features
                  </th>
                  {PLANS.map((plan) => (
                    <th key={plan.name} scope="col" className="p-5 text-center">
                      <span
                        className={cn(
                          "block text-lg font-bold",
                          plan.featured ? "text-primary" : "text-foreground",
                        )}
                      >
                        {plan.name}
                      </span>
                      <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                        Start at ${plan.price}/ month
                      </span>
                      <Link
                        to="/pricing"
                        className={cn(
                          "mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold transition-colors",
                          plan.featured
                            ? "bg-primary text-primary-foreground shadow-button hover:bg-primary-hover"
                            : "border border-border/70 bg-card text-foreground hover:bg-accent",
                        )}
                      >
                        Get Started
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-border/50 last:border-0",
                      i % 2 === 1 && "bg-tint-2",
                    )}
                  >
                    <td className="p-5 text-[15px] text-foreground">{row.feature}</td>
                    <td className="p-5 text-center">
                      <Cell value={row.essential} />
                    </td>
                    <td className="p-5 text-center">
                      <Cell value={row.pro} featured />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <Faq />
      <CtaSection />
    </>
  );
}
