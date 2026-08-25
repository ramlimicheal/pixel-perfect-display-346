import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is TradeForge?",
    answer:
      "TradeForge is an automated trading journal and analytics platform. It imports your trades, calculates your performance statistics, and surfaces the patterns and behaviors that separate profitable traders from the rest — so you can improve with every session.",
  },
  {
    question: "Can I connect my broker automatically?",
    answer:
      "Yes. TradeForge supports broker sync for hands-free journaling, and you can also import trades from a CSV file or add them manually. Connected accounts stay in sync automatically, across unlimited accounts on the Pro plan.",
  },
  {
    question: "Do I need to journal manually?",
    answer:
      "No. Journaling is automated — broker sync, file upload, and manual entries all flow into one journal. Notes, tags, and screenshots are optional layers you add when you want deeper context, not a requirement.",
  },
  {
    question: "How will TradeForge help me as a trader",
    answer:
      "By showing you how you actually trade. With 50+ reports on setups, entries, exits, and execution quality, you can identify your strengths, catch repeated mistakes, build playbooks around what works, and validate changes with backtesting and trade replay before risking capital.",
  },
  {
    question: "How long does it take to gain access to TradeForge?",
    answer:
      "Access is instant. Create your account, connect a broker or upload a trade file, and your journal and analytics are ready within minutes.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your trading data is stored securely with encryption in transit and at rest, and every plan includes dedicated secure storage. Your data is never sold or shared with third parties.",
  },
];

export function Faq({ items = FAQ_ITEMS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal>
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Frequently-asked questions
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Answering all your frequently asked questions here
        </p>
      </Reveal>

      <Reveal className="mt-12" delay={100}>
        <ul className="divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium text-foreground">
                    {item.question}
                  </span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 text-foreground transition-transform duration-300",
                      open && "rotate-45",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
