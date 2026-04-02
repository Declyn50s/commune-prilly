import type { SolidarityService } from "@/features/seniors/types";

export function SolidarityServiceCard({ item }: { item: SolidarityService }) {
  return (
    <div className="surface p-5">
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
      <div className="mt-4 space-y-3">
        {item.help.map((entry) => (
          <div key={entry} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/74">
            {entry}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm font-medium text-prilly-red">{item.contact}</p>
    </div>
  );
}
