import { cn } from "@/lib/utils";
import type { EnfanceNotice } from "@/features/enfance-ecoles/types";

export function NoticeCard({ item }: { item: EnfanceNotice }) {
  const toneClass = {
    red: "border-prilly-red/20 bg-prilly-red/5",
    yellow: "border-prilly-yellow/30 bg-prilly-yellow/25",
    green: "border-prilly-green/20 bg-prilly-green/10",
    coal: "border-black/8 bg-prilly-soft",
  }[item.tone];

  return (
    <div className={cn("rounded-[1.75rem] border p-5", toneClass)}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal">{item.title}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/75">{item.description}</p>
    </div>
  );
}
