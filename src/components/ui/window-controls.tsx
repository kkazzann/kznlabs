import { cn } from "@/lib/utils";

export function WindowControls() {
  return (
    <div className="flex items-center gap-3">
      <div className={cn("h-5 w-5 rounded-full border border-red-600 bg-red-500")} />
      <div className={cn("h-5 w-5 rounded-full border border-amber-600 bg-amber-400")} />
      <div className={cn("h-5 w-5 rounded-full border border-green-600 bg-green-500")} />
    </div>
  );
}
