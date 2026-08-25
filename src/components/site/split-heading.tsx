import type { ReactNode } from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

/**
 * Two-column section header used across the home page: a small muted label on
 * the left and a large heading on the right.
 */
export function SplitHeading({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("grid gap-4 lg:grid-cols-[1fr_2.2fr] lg:gap-12", className)}>
      <p className="max-w-[220px] text-lg font-medium leading-snug text-muted-foreground">
        {label}
      </p>
      <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
        {children}
      </h2>
    </Reveal>
  );
}
