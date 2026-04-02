import type { EnfancePageData } from "@/features/enfance-ecoles/types";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/features/enfance-ecoles/components/service-card";

export function RelatedPagesSection({ items }: { items: EnfancePageData[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Pages liées"
        title="Aller plus loin sans se perdre"
        description="Les services complémentaires sont regroupés ici pour éviter les allers-retours."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <ServiceCard
            key={item.slug}
            item={{
              slug: item.slug,
              title: item.title,
              description: item.description,
              href: item.path,
              accent: index % 3 === 0 ? "green" : index % 3 === 1 ? "yellow" : "coal",
            }}
          />
        ))}
      </div>
    </section>
  );
}
