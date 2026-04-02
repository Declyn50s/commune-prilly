import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  DocumentCard,
  LeisureRouteCard,
  RelatedPagesSection,
  ServiceLinkCard,
  MobilityPageHero,
} from "@/features/mobilite/components";
import {
  mobilityContacts,
  relatedPageGroups,
  walkingDocuments,
  walkingHero,
  walkingIntro,
  walkingLeisureRoutes,
} from "@/features/mobilite/data";

const pageSections: PageSideNavSection[] = [
  { id: "apercu", label: "Apercu" },
  { id: "parcours", label: "Parcours" },
  { id: "ressources", label: "Ressources" },
  { id: "contact", label: "Contact" },
  { id: "pages-utiles", label: "Pages utiles" },
];

export default function WalkingLeisurePage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mobilite", href: "/services/mobilite" },
          { label: "Pietons et loisirs" },
        ]}
      />
      <MobilityPageHero hero={walkingHero} />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="apercu" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Marcher à Prilly"
              title="Une mobilite simple, locale et tres lisible"
              description="La marche fait partie des deplacements courts du quotidien mais aussi des usages loisirs qui donnent envie de decouvrir Prilly à un autre rythme."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {walkingIntro.map((item) => (
                <ServiceLinkCard
                  key={item.title}
                  item={{
                    title: item.title,
                    description: item.description,
                    href: "#",
                    label: "Repere",
                    eyebrow: "Usage",
                  }}
                />
              ))}
            </div>
          </section>

          <section id="parcours" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Balades et parcours"
              title="Des cartes de parcours, pas juste des annexes PDF"
              description="Les parcours sont contextualises pour aider a choisir selon le temps disponible, le niveau et le type de sortie."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {walkingLeisureRoutes.map((item) => (
                <LeisureRouteCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="ressources" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Acces rapides"
              title="Retrouver les documents utiles sans devoir les chercher"
              description="Les ressources principales sont regroupees dans des cartes claires avec leur utilite et un acces direct."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {walkingDocuments.map((item) => (
                <DocumentCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <ContactPanel contact={mobilityContacts.common} />
          </section>

          <section id="pages-utiles" className="scroll-mt-32">
            <RelatedPagesSection items={relatedPageGroups.walking} />
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
