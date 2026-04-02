import type { EnfanceStep } from "@/features/enfance-ecoles/types";

export function StepsList({ items }: { items: EnfanceStep[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:grid-cols-[56px_1fr]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-prilly-red text-lg font-semibold text-white">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            {item.hint ? <p className="mt-3 text-sm font-medium text-prilly-red">{item.hint}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
