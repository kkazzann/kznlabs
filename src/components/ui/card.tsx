import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-white/95 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.08)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
