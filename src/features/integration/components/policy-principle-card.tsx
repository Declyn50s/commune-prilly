import type { PolicyPrinciple } from "@/features/integration/types";
import { cn } from "@/lib/utils";

export function PolicyPrincipleCard({ item }: { item: PolicyPrinciple }) {
  const toneClass = {
    red: "border-prilly-red/15",
    yellow: "border-prilly-yellow/30",
    green: "border-prilly-green/18",
    coal: "border-black/8",
  }[item.tone];

  return (
    <div className={cn("rounded-[1.75rem] border bg-white p-5 shadow-soft", toneClass)}>
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
    </div>
  );
}
