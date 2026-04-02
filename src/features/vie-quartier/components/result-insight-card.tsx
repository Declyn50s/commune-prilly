import { cn } from "@/lib/utils";
import type { ResultInsight } from "@/features/vie-quartier/types";

export function ResultInsightCard({ item }: { item: ResultInsight }) {
  const toneClass = {
    red: "border-prilly-red/15",
    yellow: "border-prilly-yellow/30",
    green: "border-prilly-green/20",
    coal: "border-black/8",
  }[item.tone ?? "coal"];

  return (
    <div className={cn("rounded-[1.75rem] border bg-white p-5 shadow-soft", toneClass)}>
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.summary}</p>
      <div className="mt-4 space-y-3">
        {item.bullets.map((entry) => (
          <div key={entry} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/74">
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
}
