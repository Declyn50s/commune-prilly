import type { InstallationSpecialCase } from "@/types/content";
import { InfoBadge } from "@/components/installation/info-badge";

export function SpecialCaseCard({ item }: { item: InstallationSpecialCase }) {
  return (
    <article className="rounded-[1.75rem] border border-prilly-yellow/20 bg-white p-5 shadow-soft">
      <InfoBadge label={item.badge} tone="yellow" />
      <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
      <p className="mt-4 rounded-2xl bg-prilly-soft p-4 text-sm leading-6 text-prilly-coal/75">{item.guidance}</p>
    </article>
  );
}
