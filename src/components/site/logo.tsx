import { Link } from "@tanstack/react-router";

import logoFull from "@/assets/tradeforge/logo-full.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="TradeForge home" className="inline-flex items-center">
      <img
        src={logoFull}
        alt="TradeForge"
        width={287}
        height={43}
        className={cn("h-7 w-auto", className)}
      />
    </Link>
  );
}
