import { Sparkles, ChevronRight } from "lucide-react";

function Line({ w }: { w: string }) {
  return (
    <div
      className="h-3 rounded-[4px] bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700"
      style={{ width: w }}
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-black/10 bg-white/80 px-2 py-1 text-[10px] font-semibold shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
      {children}
    </div>
  );
}
