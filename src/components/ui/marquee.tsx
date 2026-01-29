"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  className,
  children,
  pauseOnHover = false,
  reverse = false,
  speed = "normal",
  ...props
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed];

  return (
    <div className={cn("group relative flex gap-4 overflow-hidden", className)} {...props}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          speedClass,
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          speedClass,
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
