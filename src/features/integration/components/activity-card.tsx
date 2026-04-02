import type { TimelineActivity } from "@/features/integration/types";

export function IntegrationActivityCard({ item }: { item: TimelineActivity }) {
  return (
    <div className="surface p-5">
      <span className="inline-flex rounded-full bg-prilly-soft px-3 py-1 text-xs font-semibold text-prilly-coal/70">
        {item.year}
      </span>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
    </div>
  );
}
