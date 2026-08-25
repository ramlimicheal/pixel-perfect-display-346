import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface TrustpilotBadgeProps {
  text?: string;
  className?: string;
}

export function TrustpilotBadge({
  text = "Rated 4.7/5 From 750+ Reviews",
  className,
}: TrustpilotBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card px-4 py-2 shadow-soft",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1.5">
        <Star className="size-4 fill-trustpilot text-trustpilot" aria-hidden />
        <span className="text-sm font-semibold text-foreground">Trustpilot</span>
      </span>
      <span className="h-4 w-px bg-border" aria-hidden />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}
