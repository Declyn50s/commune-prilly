import type { InstallationPracticalInfo } from "@/types/content";
import { InfoBadge } from "@/components/installation/info-badge";

export function PracticalInfoCard({ item }: { item: InstallationPracticalInfo }) {
  return (
    <div className="rounded-[1.5rem] border border-black/8 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-prilly-coal">{item.label}</p>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.value}</p>
        </div>
        {item.tone ? <InfoBadge label={item.tone === "red" ? "Attention" : "Info utile"} tone={item.tone} /> : null}
      </div>
    </div>
  );
}
