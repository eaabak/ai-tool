import { cn } from "@/lib/utils";

export default function Badge({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300", className)}>
      {children}
    </span>
  );
}