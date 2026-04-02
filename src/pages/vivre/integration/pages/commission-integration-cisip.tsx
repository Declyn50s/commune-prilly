import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  IntegrationContactPanel,
  IntegrationDocumentCard,
  IntegrationNoticeCard,
  IntegrationTimelineSection,
} from "@/features/integration/components";
import { cisipActivities, cisipDocuments, cisipReports, integrationContacts } from "@/features/integration/data";

export default function CommissionIntegrationCisipPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Intégration", href: "/vivre/integration" }, { label: "Commission d’intégration CISIP" }]} />
      <PageHero
        eyebrow="Gouvernance & participation"
        title="Commission d’intégration CISIP"
        description="Une commission communale pour favoriser l’intégration, le dialogue et la participation à Prilly."
        tone="warm"
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <IntegrationNoticeCard
          title="À quoi sert la CISIP ?"
          description="Elle améliore l’information réciproque entre communautés, permet aux immigré·e·s de s’exprimer vis-à-vis de l’autorité communale, facilite l’accès à la société locale et soutient ponctuellement des initiatives d’intégration."
        />
        <IntegrationNoticeCard
          title="Comment fonctionne la commission ?"
          description="La CISIP est liée à la politique communale d’intégration, avec un rôle consultatif auprès de la Municipalité. Elle réunit des représentants politiques et institutionnels et peut s’adjoindre ponctuellement des représentants associatifs."
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Charte et règlement"
          title="Deux documents pour comprendre le cadre d’action"
          description="La charte et le règlement sont présentés avec leur utilité pour éviter une simple liste de PDF."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {cisipDocuments.map((item) => (
            <IntegrationDocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Activités de la CISIP"
          title="Des rapports et des temps forts replacés dans une histoire vivante"
          description="Les rapports et activités sont organisés dans une frise qui rend visibles les évolutions et les rendez-vous marquants."
        />
        <IntegrationTimelineSection items={cisipActivities} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Rapports"
          title="Consulter les documents par année"
          description="Les rapports d’activités et le rapport de législature sont regroupés avec un contexte clair."
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
