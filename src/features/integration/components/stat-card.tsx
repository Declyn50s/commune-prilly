import type { StatItem } from "@/features/integration/types";

export function StatCard({ item }: { item: StatItem }) {
  return (
    <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.label}</p>
      <p className="mt-3 text-3xl font-semibold text-prilly-coal">{item.value}</p>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.detail}</p>
    </div>
  );
}
