import type { EnfanceTimelineItem } from "@/features/enfance-ecoles/types";

export function TimelineDates({ items }: { items: EnfanceTimelineItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:grid-cols-[56px_1fr]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-prilly-coal text-lg font-semibold text-white">
            {index + 1}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.title}</p>
            <h3 className="mt-2 text-xl font-semibold text-prilly-coal">{item.value}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
