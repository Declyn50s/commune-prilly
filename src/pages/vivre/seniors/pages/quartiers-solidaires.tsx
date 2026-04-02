import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { NeighborhoodAssociationCard, SeniorsContactPanel, SeniorsNoticeCard } from "@/features/seniors/components";
import { quartiersSolidairesData, seniorsPageContacts } from "@/features/seniors/data";

export default function QuartiersSolidairesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Seniors", href: "/vivre/seniors" }, { label: "Quartiers solidaires" }]} />
      <PageHero
        eyebrow="Vie sociale"
        title="Quartiers solidaires"
        description="Des lieux, associations et activités qui favorisent la convivialité, les rencontres et les projets intergénérationnels."
        tone="warm"
        aside={
          <SeniorsNoticeCard
            title="Le principe"
            description="Les Quartiers solidaires valorisent ce qui rapproche les habitant·e·s: ateliers, repas, pétanque, moments partagés et projets de proximité."
          />
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Lieux et initiatives"
          title="Des espaces pour créer du lien et rompre l’isolement"
          description="L’objectif n’est pas seulement de présenter les structures, mais de montrer la vie sociale qu’elles rendent possible."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quartiersSolidairesData.map((item) => (
            <NeighborhoodAssociationCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <SeniorsNoticeCard
          title="Ce qu’on y trouve"
          description="Des ateliers, des repas, des rencontres conviviales, des activités simples et des occasions régulières de garder des habitudes positives dans le quartier."
        />
        <SeniorsNoticeCard
          title="Pourquoi c’est important"
          description="Ces initiatives aident à maintenir le lien social, à lutter contre l’isolement et à faire vivre une ville plus humaine et plus solidaire."
        />
      </section>

      <section className="space-y-8">
        <SeniorsContactPanel contacts={seniorsPageContacts} />
      </section>
    </section>
  );
}
