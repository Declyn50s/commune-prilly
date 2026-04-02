import type { EnfanceLinkCard } from "@/features/enfance-ecoles/types";
import { ServiceCard } from "@/features/enfance-ecoles/components/service-card";

export function FamilyHubCards({
  items,
  compact = false,
}: {
  items: EnfanceLinkCard[];
  compact?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ServiceCard key={item.slug} item={item} compact={compact} />
      ))}
    </div>
  );
}
