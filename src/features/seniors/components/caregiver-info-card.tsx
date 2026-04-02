import type { SeniorSupport } from "@/features/seniors/types";

export function CaregiverInfoCard({ item }: { item: SeniorSupport }) {
  return (
    <div className="rounded-[2rem] border border-prilly-yellow/30 bg-prilly-yellow/20 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal">{item.title}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/76">{item.description}</p>
      <div className="mt-4 grid gap-3">
        {item.highlights.map((entry) => (
          <div key={entry} className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-prilly-coal/74">
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
}
