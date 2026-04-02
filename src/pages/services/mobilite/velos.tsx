import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import { ContactPanel, MobilityPageHero, RelatedPagesSection, ServiceLinkCard } from "@/features/mobilite/components";
import { bikeCommitments, bikeHero, bikeLeisureLinks, bikeResources, bikeSharedServices, mobilityContacts, relatedPageGroups } from "@/features/mobilite/data";

export default function BikesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Mobilite", href: "/services/mobilite" }, { label: "Velos" }]} />
      <MobilityPageHero hero={bikeHero} />

      <section className="space-y-8">
        <SectionHeader eyebrow="Prilly et la mobilite douce" title="Le velo comme usage quotidien et pas seulement comme loisir" description="La page met en avant l'engagement communal: zones apaisées, promotion de la marche et du velo, subventions et services utiles." />
        <div className="grid gap-4 md:grid-cols-3">
          {bikeCommitments.map((item) => (
            <div key={item} className="surface p-5 text-sm leading-6 text-prilly-coal/78">{item}</div>
          ))}
        </div>
      </section>

      <section id="partagee" className="space-y-8">
        <SectionHeader eyebrow="Mobilite partagee" title="Deux services a reperer tout de suite" description="Les solutions partagées rendent le velo plus accèssible pour le quotidien, les courses et les usages ponctuels." />
        <div className="grid gap-4 md:grid-cols-2">
          {bikeSharedServices.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="ressources" className="space-y-8">
        <SectionHeader eyebrow="Ressources cyclistes" title="Cartes, guides, associations et outils a velo" description="Une grille unique pour retrouver les ressources les plus utiles sans disperser l'information." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bikeResources.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Loisirs a velo" title="Sorties, location et culture velo" description="Des liens utiles pour aller au-dela du trajet utilitaire et profiter aussi du velo comme activite." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {bikeLeisureLinks.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ContactPanel contact={mobilityContacts.common} />
      <RelatedPagesSection items={relatedPageGroups.bikes} />
    </section>
  );
}

