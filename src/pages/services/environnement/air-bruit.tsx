import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  BiodiversityHighlight,
  ContactPanel,
  DocumentCard,
  EnvironmentPageHero,
  ParentSectionLinks,
} from "@/features/environnement/components";
import { airNoisePage, environmentContacts, environmentParentLinks } from "@/features/environnement/data";

export default function AirNoisePage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Air & bruit" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/air-bruit" />

      <EnvironmentPageHero
        eyebrow="Cadre de vie"
        title={airNoisePage.hero.title}
        description={airNoisePage.hero.description}
        imageSrc={airNoisePage.hero.imageSrc}
        imageAlt={airNoisePage.hero.imageAlt}
        ctas={airNoisePage.hero.ctas}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Air"
          title="Qualité de l'air et santé publique"
          description="Le sujet air est à lire avec les enjeux de mobilité, d'aménagement urbain et de climat."
        />
        <BiodiversityHighlight title="Repères utiles" points={airNoisePage.air} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Bruit"
          title="Bruit routier et cadre de vie"
          description="La lecture la plus utile consiste à comprendre les nuisances, les leviers d'aménagement et les ressources vers lesquelles se tourner."
        />
        <BiodiversityHighlight title="Ce que cela change au quotidien" points={airNoisePage.noise} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Rayonnement non ionisant"
          title="Électrosmog et ressources de référence"
          description="La page ne remplace pas les ressources techniques, mais elle aide à trouver les bons repères et le bon document."
        />
        <BiodiversityHighlight title="Questions fréquentes" points={airNoisePage.radiation} />
      </section>

      <section id="ressources" className="space-y-8">
        <SectionHeader
          eyebrow="Liens et ressources"
          title="Deux points d'entrée utiles"
          description="Une brochure de compréhension et un accès à la cartographie nationale pour aller plus loin si besoin."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {airNoisePage.resources.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ContactPanel contact={environmentContacts.airNoise} />
    </section>
  );
}
