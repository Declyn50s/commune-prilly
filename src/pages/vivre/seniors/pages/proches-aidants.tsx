import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { CaregiverInfoCard, HelpfulLinksSection, SeniorsContactPanel, SeniorsNoticeCard } from "@/features/seniors/components";
import { caregiverSupportData, seniorUsefulPageLinks, seniorsPageContacts } from "@/features/seniors/data";

export default function ProchesAidantsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Seniors", href: "/vivre/seniors" }, { label: "Proches aidants" }]} />
      <PageHero
        eyebrow="Soutien aux proches"
        title="Proches aidants"
        description="Une page rassurante pour trouver de l’écoute, des conseils, une orientation et des ressources concrètes quand on aide un proche."
        tone="warm"
        aside={<CaregiverInfoCard item={caregiverSupportData} />}
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <SeniorsNoticeCard
          title="Prestations gratuites"
          description="L’accompagnement proposé par les CMS est gratuit et ouvert à toutes les personnes proches aidantes du canton."
        />
        <SeniorsNoticeCard
          title="Carte d’urgence et orientation"
          description="Les CMS peuvent accompagner avec des conseils, des moments d’échange, une carte d’urgence et une orientation adaptée selon la situation."
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Ressources utiles"
          title="Accéder rapidement aux bons relais"
          description="Le numéro dédié et les liens AVASAD sont mis en avant pour éviter de chercher l’information au mauvais endroit."
        />
        <HelpfulLinksSection items={seniorUsefulPageLinks} />
      </section>

      <section className="space-y-8">
        <SeniorsContactPanel
          contacts={[
            {
              title: "Ligne proches aidants / AVASAD",
              role: "Information et orientation",
              phone: "0848 822 822",
              note: "Point d’entrée utile pour bénéficier d’un appui gratuit et être orienté selon vos besoins.",
            },
            ...seniorsPageContacts,
          ]}
        />
      </section>
    </section>
  );
}
