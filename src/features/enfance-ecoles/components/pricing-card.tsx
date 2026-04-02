import type { EnfancePricing } from "@/features/enfance-ecoles/types";

export function PricingCard({ item }: { item: EnfancePricing }) {
  return (
    <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.title}</p>
      <p className="mt-4 text-3xl font-semibold text-prilly-coal">{item.value}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.detail}</p>
    </div>
  );
}
