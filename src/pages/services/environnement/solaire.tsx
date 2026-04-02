import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  BiodiversityHighlight,
  ContactPanel,
  EnvironmentPageHero,
  ParentSectionLinks,
  SolarIncentiveCard,
} from "@/features/environnement/components";
import { environmentContacts, environmentParentLinks, solarPage } from "@/features/environnement/data";

export default function SolarPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Solaire" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/solaire" />

      <EnvironmentPageHero
        eyebrow="Photovoltaique"
        title={solarPage.hero.title}
        description={solarPage.hero.description}
        imageSrc={solarPage.hero.imageSrc}
        imageAlt={solarPage.hero.imageAlt}
        ctas={solarPage.hero.ctas}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Pourquoi passer au photovoltaïque à Prilly"
          title="Un projet plus simple, plus concret, plus partage"
          description="La page met en avant les gains pour les proprietaires, les locataires et le territoire communal."
        />
        <BiodiversityHighlight title="Pourquoi agir maintenant" points={solarPage.reasons} />
      </section>

      <section id="offre-si-ren" className="space-y-8">
        <SectionHeader
          eyebrow="Offre avec SI-REN"
          title="Le tiers investisseur comme levier de simplification"
          description="Le proprietaire met la toiture a disposition, tandis que SI-REN peut porter l'investissement et l'exploitation selon le montage retenu."
        />
        <BiodiversityHighlight title="Comment fonctionne l'offre" points={solarPage.offer} />
      </section>

      <section id="incitations" className="space-y-8">
        <SectionHeader
          eyebrow="Incitations financieres"
          title="Une aide visible des le premier coup d'oeil"
          description="La subvention 2026 doit ressortir tout de suite, avec les benefices pratiques du dispositif."
        />
        <SolarIncentiveCard amount={solarPage.incentive.amount} title={solarPage.incentive.title} points={solarPage.incentive.points} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Séance d'information publique"
          title="Un rendez-vous pour comprendre le dispositif"
          description="La séance permet d'expliquer l'offre, les conditions et les benefices avant de lancer un projet."
        />
        <BiodiversityHighlight title="Mardi 17 mars 2026 a 19h" points={solarPage.event} />
      </section>

      <ContactPanel contact={environmentContacts.solar} />
    </section>
  );
}
