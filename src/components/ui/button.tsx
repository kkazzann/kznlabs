import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg px-4 py-2 text-sm font-semibold font-sans transition-all duration-200",
        "border border-[var(--border)] shadow-[var(--shadow)]",
        variant === "primary" && "bg-[var(--panel)] text-[var(--foreground)] hover:bg-white/70",
        variant === "outline" && "bg-transparent text-[var(--foreground)] hover:bg-black/5",
        className,
      )}
      {...props}
    />
  );
}
