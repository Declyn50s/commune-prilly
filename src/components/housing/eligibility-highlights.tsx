import type { HousingEligibilityRule } from "@/types/content";
import { InfoBadge } from "@/components/installation/info-badge";

export function EligibilityHighlights({ items }: { items: HousingEligibilityRule[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-[1.5rem] border border-black/8 bg-white p-5 shadow-soft">
          <InfoBadge label={item.tone === "red" ? "Essentiel" : item.tone === "yellow" ? "Vérifier" : "Condition"} tone={item.tone ?? "coal"} />
          <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
