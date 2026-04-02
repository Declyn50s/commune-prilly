import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { IntegrationContactPanel, LanguageCourseCard, ResourceCard } from "@/features/integration/components";
import { frenchCourses, integrationContacts } from "@/features/integration/data";

const links = [
  {
    title: "Offre des cours de français",
    description: "Un point d’entrée utile pour consulter d’autres offres reconnues dans le canton.",
    href: "https://www.vd.ch",
  },
  {
    title: "Canton de Vaud",
    description: "Informations cantonales utiles sur la langue, l’intégration et les parcours d’accueil.",
    href: "https://www.vd.ch",
  },
];

export default function CoursFrancaisPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Intégration", href: "/vivre/integration" }, { label: "Cours de français" }]} />
      <PageHero
        eyebrow="Langue & apprentissage"
        title="Cours de français"
        description="Des solutions pour apprendre le français à Prilly et dans la région."
        tone="warm"
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Apprendre le français à Prilly Centre"
          title="L’entrée la plus simple pour commencer"
          description="Le cours communal gratuit et sans inscription est présenté comme la solution la plus immédiate pour démarrer."
        />
        <LanguageCourseCard item={frenchCourses[0]} featured />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Autres cours et structures"
          title="Des solutions complémentaires selon le niveau et la situation"
          description="Les autres structures de la région sont regroupées dans des cartes courtes et lisibles."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {frenchCourses.slice(1).map((item) => (
            <LanguageCourseCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Liens utiles" title="Aller plus loin" description="Quelques accès complémentaires pour comparer les offres ou approfondir les informations utiles." />
        <div className="grid gap-4 md:grid-cols-2">
          {links.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <IntegrationContactPanel contacts={integrationContacts} />
      </section>
    </section>
  );
}
