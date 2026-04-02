import { SectionHeader } from "@/components/common/section-header";
import type { EnfanceLinkCard } from "@/features/enfance-ecoles/types";
import { FamilyHubCards } from "@/features/enfance-ecoles/components/family-hub-cards";

export function QuickLinksSection({
  eyebrow,
  title,
  description,
  items,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: EnfanceLinkCard[];
  compact?: boolean;
}) {
  return (
    <section className="space-y-8">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <FamilyHubCards items={items} compact={compact} />
    </section>
  );
}
