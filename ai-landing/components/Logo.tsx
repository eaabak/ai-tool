import { Sparkles } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Sparkles className="h-5 w-5" />
      <span className="font-semibold tracking-[-0.02em]">Airo</span>
    </div>
  );
}