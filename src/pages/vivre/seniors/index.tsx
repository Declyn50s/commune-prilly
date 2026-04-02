import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  CaregiverInfoCard,
  CMSSelectorCard,
  HelpfulLinksSection,
  NeighborhoodAssociationCard,
  SeniorsContactPanel,
  SeniorsNoticeCard,
  SupportCard,
} from "@/features/seniors/components";
import {
  caregiverSupportData,
  cmsData,
  proSenectuteData,
  quartiersSolidairesData,
  seniorCommitments,
  seniorContacts,
  seniorQuickaccèss,
  usefulSeniorLinks,
} from "@/features/seniors/data";

export default function SeniorsHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Seniors" },
        ]}
      />

      <PageHero
        eyebrow="Accompagnement & lien social"
        title="Seniors"
        description="Activités, accompagnement, soins à domicile et liens utiles pour les aîné·e·s à Prilly."
        tone="warm"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Cette rubrique aide à trouver rapidement le bon appui, à comprendre vers qui se
                tourner et à repérer les ressources de proximité disponibles à Prilly.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#besoins" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">
                Trouver une aide
              </a>
              <a href="#cms" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Contacter le bon CMS
              </a>
            </div>
          </div>
        }
      />

      <section id="besoins" className="space-y-8">
        <SectionHeader
          eyebrow="Accès rapides par besoin"
          title="Commencer par la bonne porte d’entrée"
          description="Les besoins les plus fréquents sont formulés simplement pour aider les seniors et leurs proches à gagner du temps."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seniorQuickaccèss.map((item) => (
            <SupportCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Seniors à Prilly"
          title="Une attention particulière portée au bien-être et au lien social"
          description="La Ville soutient les initiatives locales, l’intégration, les activités et les solutions qui favorisent un quotidien plus serein."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {seniorCommitments.map((item) => (
            <SeniorsNoticeCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Être accompagné"
          title="Des partenaires pour soutenir l’autonomie et le quotidien"
          description="Conseil social, accompagnement administratif, maintien à domicile et activités de proximité sont rendus visibles dans une même zone."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <SupportCard support={proSenectuteData} />
          <SupportCard
            support={{
              ...proSenectuteData,
              title: "Activités 60+ et partenariat local",
              description:
                "Depuis février 2024, un partenariat avec la Ville et l’Association de quartier de Prilly-Nord dynamise les activités des 60+ jusqu’à fin 2025.",
              highlights: ["Association de quartier de Prilly-Nord", "Local de Chantegrive", "Temps conviviaux et activités"],
              href: "/vivre/seniors/quartiers-solidaires",
              tone: "yellow",
            }}
          />
        </div>
      </section>

      <section id="cms" className="space-y-8">
        <SectionHeader
          eyebrow="Quel CMS contacter ?"
          title="Le bon CMS dépend du lieu d’habitation"
          description="Cette section aide à identifier rapidement le centre médico-social compétent selon l’adresse."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cmsData.map((item) => (
            <CMSSelectorCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <CaregiverInfoCard item={caregiverSupportData} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Quartiers solidaires"
          title="Des lieux et associations qui entretiennent la vie sociale"
          description="Les initiatives de quartier renforcent la convivialité, les rencontres et les projets intergénérationnels."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quartiersSolidairesData.map((item) => (
            <NeighborhoodAssociationCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Services complémentaires"
          title="Des solutions solidaires pour les besoins du quotidien"
          description="Hotline, entraide et coups de main ponctuels sont rassemblés ici pour être plus visibles."
        />
        <HelpfulLinksSection items={usefulSeniorLinks} />
      </section>

      <section id="contacts" className="space-y-8">
        <SectionHeader
          eyebrow="Contacts et liens utiles"
          title="Les bons relais, clairement regroupés"
          description="AVASAD, CMS, Pro Senectute, ARASPE et autres accès directs sont présentés ensemble pour limiter les recherches."
        />
        <SeniorsContactPanel contacts={seniorContacts} />
      </section>
    </section>
  );
}
