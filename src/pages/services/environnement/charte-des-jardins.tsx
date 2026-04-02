import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  BiodiversityHighlight,
  ContactPanel,
  DocumentCard,
  EnvironmentPageHero,
  GardenCharterSteps,
  NoticeCard,
  ParentSectionLinks,
  SolarIncentiveCard,
} from "@/features/environnement/components";
import {
  environmentContacts,
  environmentParentLinks,
  gardenCharterPage,
  gardenNoticeCards,
} from "@/features/environnement/data";

export default function GardenCharterPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Charte des jardins" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/charte-des-jardins" />

      <EnvironmentPageHero
        eyebrow="Jardins privés et biodiversite"
        title={gardenCharterPage.hero.title}
        description={gardenCharterPage.hero.description}
        imageSrc={gardenCharterPage.hero.imageSrc}
        imageAlt={gardenCharterPage.hero.imageAlt}
        ctas={gardenCharterPage.hero.ctas}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Pourquoi s'engager"
          title="Une charte simple, visible et utile"
          description="La Charte des Jardins transforme une documentation classique en un parcours clair pour agir a l'echelle de son jardin."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {gardenNoticeCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <NoticeCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
        <BiodiversityHighlight title="Ce que propose la commune" points={gardenCharterPage.why} />
      </section>

      <section id="bonnes-pratiques" className="space-y-8">
        <SectionHeader
          eyebrow="10 bonnes pratiques"
          title="Des gestes concrets pour un jardin plus vivant"
          description="Les bonnes pratiques peuvent être appliquees progressivement, en fonction du lieu, des usages et du rythme de chacun."
        />
        <BiodiversityHighlight title="A mettre en place chez soi" points={gardenCharterPage.goodPractices} />
      </section>

      <section id="comment-adherer" className="space-y-8">
        <SectionHeader
          eyebrow="Comment adherer"
          title="Un parcours clair en quelques etapes"
          description="La démarche est volontaire: elle s'appuie sur la lecture de la charte, l'adhesion et la mise en place progressive des engagements."
        />
        <GardenCharterSteps steps={gardenCharterPage.steps} />
      </section>

      <section id="subvention" className="space-y-8">
        <SectionHeader
          eyebrow="Subvention communale"
          title="Un coup de pouce avant de lancer le projet"
          description="L'aide communale est conditionnée à une demande en amont. Le projet ne doit pas avoir commence."
        />
        <SolarIncentiveCard amount={gardenCharterPage.subvention.amount} title="Subvention pour la venue d'un ou d'une specialiste" points={gardenCharterPage.subvention.details} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents a Télécharger"
          title="Les supports pour adherer et demander l'aide"
          description="Chaque document est relie a son usage pour eviter une longue liste sans contexte."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gardenCharterPage.documents.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <DocumentCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactPanel contact={environmentContacts.gardens} />
    </section>
  );
}
