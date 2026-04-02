import type { NeighborhoodInitiative } from "@/features/seniors/types";

export function NeighborhoodAssociationCard({ item }: { item: NeighborhoodInitiative }) {
  return (
    <div className="surface p-5">
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.activities.map((entry) => (
          <span key={entry} className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs text-prilly-coal/70">
            {entry}
          </span>
        ))}
      </div>
    </div>
  );
}
