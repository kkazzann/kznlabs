import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Bleed({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative", className)} {...props} />;
}
