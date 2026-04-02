import type { EnfanceFact } from "@/features/enfance-ecoles/types";

export function SchoolInfoCard({ item }: { item: EnfanceFact }) {
  return (
    <div className="rounded-[1.5rem] border border-black/8 bg-white px-4 py-4 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.label}</p>
      <p className="mt-2 text-sm font-medium leading-6 text-prilly-coal">{item.value}</p>
    </div>
  );
}
