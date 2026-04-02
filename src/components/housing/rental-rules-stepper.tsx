import type { HousingRentalStep } from "@/types/content";

export function RentalRulesStepper({ items }: { items: HousingRentalStep[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={item.title} className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:grid-cols-[auto_1fr]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-coal text-sm font-semibold text-white">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
            <p className="mt-3 rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/75">{item.action}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
