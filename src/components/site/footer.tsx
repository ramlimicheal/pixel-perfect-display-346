import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/logo";

const COLUMNS: Array<{
  title: string;
  links: Array<{ label: string; to?: string; href?: string }>;
}> = [
  {
    title: "Pages",
    links: [
      { label: "Homepage", to: "/" },
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Privacy Policy", to: "/privacy-policy" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Mentor Mode", to: "/features" },
      { label: "Playbooks", to: "/features" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "X (Twitter)", href: "https://x.com" },
      { label: "Linkedin", href: "https://www.linkedin.com" },
      { label: "Youtube", href: "https://www.youtube.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tools for futures, currency &amp; options involves substantial risk &amp; is
              not appropriate for everyone. Only risk capital should be used for trading.
              We do not guarantee future performance or success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>Copyright © 2026 TradeForge Inc. All rights reserved.</p>
          <p>Created by Adheeb</p>
        </div>
      </div>
    </footer>
  );
}
