import { cn } from "@/lib/utils";
import type { ImgHTMLAttributes } from "react";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

const dimensions = {
  sm: { width: 40, height: 40 },
  md: { width: 56, height: 56 },
  lg: { width: 80, height: 80 },
};

export function Avatar({ size = "md", className, ...props }: AvatarProps) {
  return <img className={cn("rounded-full border border-[var(--border)] object-cover", sizes[size], className)} {...dimensions[size]} {...props} />;
}
