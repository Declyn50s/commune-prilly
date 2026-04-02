import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { SectionHeader } from "@/components/common/section-header";
import {
  IntegrationContactPanel,
  LanguageCourseCard,
  NewsletterSignupBlock,
  PolicyPrincipleCard,
  QuickAccessCard,
  ResourceCard,
} from "@/features/integration/components";
import {
  frenchCourses,
  integrationContacts,
  integrationQuickAccess,
  policyPrinciples,
  welcomeResources,
} from "@/features/integration/data";

const pageSections: PageSideNavSection[] = [
  { id: "ressources", label: "Bienvenue et ressources" },
  { id: "acces", label: "Acces rapides" },
  { id: "politique", label: "Politique d'integration" },
  { id: "francais", label: "Cours de francais" },
  { id: "cisip", label: "Participation et CISIP" },
  { id: "diversite", label: "Nationalites et religions" },
  { id: "newsletter", label: "Lettre d'information" },
  { id: "contact", label: "Contact" },
];

export default function IntegrationHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Integration" },
        ]}
      />

      <PageHero
        eyebrow="Accueil et vivre-ensemble"
        title="Integration"
        description="Ressources, cours, activites interculturelles et informations utiles pour vivre, participer et trouver sa place a Prilly."
        tone="warm"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Cette rubrique sert de point d'accueil, d'orientation et de participation pour mieux
                comprendre les ressources disponibles, apprendre le francais et decouvrir la diversite
                prillerane.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#francais" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">
                Trouver un cours de francais
              </a>
              <a href="#ressources" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Decouvrir les ressources utiles
              </a>
              <a href="#cisip" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Voir les activites de la CISIP
              </a>
              <a href="#politique" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Comprendre la politique d'integration
              </a>
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <div className="space-y-12">
          <section id="ressources" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="S'installer et s'orienter"
              title="Bienvenue en plusieurs langues"
              description="Une premiere porte d'entree simple pour trouver des informations utiles a l'installation dans le canton et a la vie a Prilly."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {welcomeResources.map((item) => (
                <ResourceCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="acces" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Acces rapides"
              title="Les ressources les plus utiles, regroupees en un coup d'oeil"
              description="Acces directs aux informations les plus consultees."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {integrationQuickAccess.map((item) => (
                <QuickAccessCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="politique" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="La politique d'integration a Prilly"
              title="Politique d'integration"
              description="La charte communale est ici reformulee en principes lisibles et utiles a la lecture."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {policyPrinciples.map((item) => (
                <PolicyPrincipleCard key={item.title} item={item} />
              ))}
            </div>
            <span className="inline-flex rounded-full border border-black/8 bg-prilly-soft px-5 py-3 text-sm font-semibold text-prilly-coal/72">
              Document prochainement disponible
            </span>
          </section>

          <section id="francais" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Apprendre le francais"
              title="Une offre visible et immediatement utile"
              description="Le cours communal au Prilly Centre est mis en avant comme l'entree la plus directe, avec des alternatives regionales clairement presentees."
            />
            <div className="grid gap-4">
              <LanguageCourseCard item={frenchCourses[0]} featured />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {frenchCourses.slice(1).map((item) => (
                  <LanguageCourseCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section id="cisip" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Participer a la vie locale"
              title="L'integration se vit aussi a travers les activites, les rencontres et la participation"
              description="La CISIP et les activites interculturelles sont presentees comme des leviers concrets de dialogue, de rencontre et de citoyennete."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <QuickAccessCard item={integrationQuickAccess[2]} />
              <QuickAccessCard item={integrationQuickAccess[3]} />
            </div>
          </section>

          <section id="diversite" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Nationalites, religions et lieux de culte"
              title="Une diversite prillerane presentee de maniere pedagogique"
              description="Cette rubrique propose une approche respectueuse et claire de la diversite culturelle et religieuse presente a Prilly."
            />
            <QuickAccessCard item={integrationQuickAccess[4]} />
          </section>

          <section id="newsletter" className="space-y-8 scroll-mt-32">
            <NewsletterSignupBlock />
          </section>

          <section id="contact" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Contact"
              title="Un point d'entree visible et accessible"
              description="Le Service culture et integration reste facilement joignable pour les questions, les activites et les ressources utiles."
            />
            <IntegrationContactPanel contacts={integrationContacts} />
          </section>
        </div>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
