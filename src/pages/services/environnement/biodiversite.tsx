import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  BiodiversityHighlight,
  ContactPanel,
  DocumentCard,
  EnvironmentPageHero,
  NoticeCard,
  ParentSectionLinks,
} from "@/features/environnement/components";
import {
  biodiversityHighlights,
  biodiversityPage,
  environmentContacts,
  environmentParentLinks,
} from "@/features/environnement/data";

export default function BiodiversityPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Biodiversite" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/biodiversite" />

      <EnvironmentPageHero
        eyebrow="Nature en ville"
        title={biodiversityPage.hero.title}
        description={biodiversityPage.hero.description}
        imageSrc={biodiversityPage.hero.imageSrc}
        imageAlt={biodiversityPage.hero.imageAlt}
        ctas={biodiversityPage.hero.ctas}
      />

      <section id="nature-en-ville" className="space-y-8">
        <SectionHeader
          eyebrow="Nature en Ville à Prilly"
          title="Un outil de gestion, de suivi et de sensibilisation"
          description="Le plan directeur Nature en Ville donne une base solide pour proteger, valoriser et faire connaitre les espaces verts de la commune."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {biodiversityHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <NoticeCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
        <BiodiversityHighlight title="Pourquoi cette approche compte" points={biodiversityPage.introPoints} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Ce que fait la commune"
          title="Protection, valorisation et sensibilisation"
          description="Les actions communales lient entretien, amenagement, connaissance du vivant et pedagogie de proximite."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <BiodiversityHighlight title="Actions communales" points={biodiversityPage.communalActions} />
          <BiodiversityHighlight title="Aides et actions pour la biodiversite" points={biodiversityPage.aids} />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Focus"
          title="Ruches urbaines et faune du bati"
          description="La biodiversite prillerane se lit aussi dans les toitures, les facades et les dispositifs de soutien au vivant."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <BiodiversityHighlight title="Ruches urbaines" points={biodiversityPage.beeHighlights} />
          <BiodiversityHighlight title="Faune ailée du bati" points={biodiversityPage.wingedFauna} />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Projets futurs"
          title="Des pistes déjà identifiees"
          description="Le travail a venir s'inscrit dans la continuite du plan directeur et du Plan climat."
        />
        <BiodiversityHighlight title="Poursuivre l'effort" points={biodiversityPage.projects} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents a Télécharger"
          title="Les bases de reference de la politique biodiversite"
          description="Le document directeur et son plan graphique donnent le cadre de lecture et de suivi de la nature en ville à Prilly."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {biodiversityPage.documents.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <DocumentCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactPanel contact={environmentContacts.biodiversity} />
    </section>
  );
}
