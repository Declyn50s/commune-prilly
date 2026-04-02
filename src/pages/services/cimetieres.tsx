import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  AccessInfoCard,
  CemeteryCard,
  CemeteryDocumentCard,
  CemeteryHero,
  BurialTypeCard,
  ContactSplitCard,
  FaqSection,
  InfoListBlock,
  PriorityActionCard,
  RelatedDeathAction,
  TariffGuideCard,
} from "@/features/cimetieres/components";
import {
  burialTypes,
  cemeteryaccèss,
  cemeteryContacts,
  cemeteryDocuments,
  cemeteryFaq,
  cemeteryHero,
  cemeteryPlaces,
  inhumationOrganisation,
  priorityItems,
  tariffGuides,
  tombArrangement,
  tombMaintenance,
} from "@/features/cimetieres/data";

export default function CemeteryPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Cimetieres" }]} />

      <CemeteryHero
        eyebrow="Accompagnement et informations utiles"
        title={cemeteryHero.title}
        description={cemeteryHero.description}
        ctas={cemeteryHero.ctas}
        keyFacts={cemeteryHero.keyFacts}
      />

      <section id="en-cas-de-deces" className="space-y-8">
        <SectionHeader
          eyebrow="En cas de deces"
          title="Les priorites a traiter d'abord"
          description="La page est organisée pour aider rapidement les proches: premiere demarche, bon interlocuteur, choix de sepulture et suite pratique."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {priorityItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <PriorityActionCard item={item} />
            </Reveal>
          ))}
        </div>
        <RelatedDeathAction />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Presentation des cimetieres"
          title="Trois lieux a bien distinguer"
          description="Le territoire communal compte un cimetiere communal et deux cimetieres israelites. Cette lecture simple evite les confusions au moment de l'organisation."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {cemeteryPlaces.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <CemeteryCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Types de sepultures"
          title="Comprendre rapidement les grandes options"
          description="Le detail reglementaire reste accèssible, mais cette section permet de reperer les principaux types de sepultures avant de choisir avec le service communal."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {burialTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <BurialTypeCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Tarifs simplifies"
          title="Comment lire la fiche officielle sans se perdre"
          description="Faute de noyer la page dans un tableau administratif, la lecture a été simplifiee par etapes. La fiche officielle reste accèssible en reference."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {tariffGuides.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <TariffGuideCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Amenagement des tombes"
          title="Monuments et plantations"
          description="Les informations utiles ont été sorties du reglement pour rendre l'organisation plus lisible et eviter les allers-retours dans le PDF."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoListBlock title="Amenager une tombe" items={tombArrangement} />
          <InfoListBlock title="Entretien" items={tombMaintenance} />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Organisation des inhumations"
          title="Ce que prend en charge l'Office de la population"
          description="Cette section reformule les missions du service pour aider les familles a savoir tout de suite à qui s'adresser."
        />
        <InfoListBlock title="Gestion des inhumations" items={inhumationOrganisation} />
      </section>

      <section id="documents" className="space-y-8">
        <SectionHeader
          eyebrow="Documents"
          title="Les textes officiels restent disponibles"
          description="Le reglement et la fiche tarifaire restent accèssibles a tout moment, mais la page vous aide a savoir a quoi ils servent avant de les ouvrir."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {cemeteryDocuments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <CemeteryDocumentCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="accès"
          title="repères simples pour se rendre sur place"
          description="Le but est d'indiquer d'abord le bon site et le bon service de reference, plutot que de multiplier des informations secondaires."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {cemeteryaccèss.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <AccessInfoCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacts" className="space-y-8">
        <SectionHeader
          eyebrow="Contacts séparés"
          title="Le bon interlocuteur selon le besoin"
          description="La page distingue volontairement l'organisation de l'inhumation et la gestion de la tombe pour eviter les erreurs d'aiguillage."
        />
        <div className="grid gap-6">
          {cemeteryContacts.map((item) => (
            <ContactSplitCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Les questions les plus fréquentes"
          description="Une FAQ courte permet de retrouver vite les reponses importantes sans relire l'ensemble de la page."
        />
        <FaqSection items={cemeteryFaq} />
      </section>
    </section>
  );
}
