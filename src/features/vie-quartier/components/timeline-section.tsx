import type { TimelineItem } from "@/features/vie-quartier/types";

export function TimelineSection({ items }: { items: TimelineItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={item.title} className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:grid-cols-[64px_1fr]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-prilly-red text-lg font-semibold text-white">
            {index + 1}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
              <span className="rounded-full bg-prilly-soft px-3 py-1 text-xs font-semibold text-prilly-coal/70">
                {item.period}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
