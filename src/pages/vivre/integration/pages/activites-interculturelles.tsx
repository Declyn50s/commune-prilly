import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  IntegrationActivityCard,
  IntegrationContactPanel,
  IntegrationDocumentCard,
  IntegrationNoticeCard,
} from "@/features/integration/components";
import { cisipReports, interculturalActivities, integrationContacts } from "@/features/integration/data";

export default function ActivitesInterculturellesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Intégration", href: "/vivre/integration" }, { label: "Activités interculturelles" }]} />
      <PageHero
        eyebrow="Rencontres & culture"
        title="Activités interculturelles"
        description="Des rendez-vous pour découvrir, échanger et créer du lien à Prilly."
        tone="warm"
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Temps forts"
          title="Des activités qui rendent la diversité visible et partagée"
          description="Les principaux temps forts sont présentés comme des occasions concrètes de rencontre, de dialogue et de participation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {interculturalActivities.map((item) => (
            <IntegrationActivityCard key={`${item.year}-${item.title}`} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <IntegrationNoticeCard
          title="Une intégration qui se vit"
          description="Ces activités valorisent la diversité culturelle, favorisent la rencontre, encouragent la participation citoyenne et rendent visibles les parcours et les cultures présentes à Prilly."
        />
        <IntegrationNoticeCard
          title="Archives et rapports"
          description="Les rapports d’activités aident à suivre l’évolution des projets et à replacer chaque temps fort dans une continuité d’action."
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Archives / rapports"
          title="Consulter les rapports par année"
          description="Les rapports de la CISIP sont présentés comme des portes d’entrée pour relire les activités menées."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cisipReports.map((item) => (
            <IntegrationDocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <IntegrationContactPanel contacts={integrationContacts} />
      </section>
    </section>
  );
}
