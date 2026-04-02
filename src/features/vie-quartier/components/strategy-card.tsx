import { cn } from "@/lib/utils";
import type { StrategyItem } from "@/features/vie-quartier/types";

export function StrategyCard({ item }: { item: StrategyItem }) {
  const toneClass = {
    red: "bg-prilly-red/6 border-prilly-red/15",
    yellow: "bg-prilly-yellow/22 border-prilly-yellow/30",
    green: "bg-prilly-green/8 border-prilly-green/18",
    coal: "bg-prilly-soft border-black/8",
  }[item.tone];

  return (
    <div className={cn("rounded-[1.75rem] border p-5 shadow-soft", toneClass)}>
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/75">{item.description}</p>
    </div>
  );
}
