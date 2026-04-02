import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import { ContactPanel, MobilityPageHero, RelatedPagesSection, ServiceLinkCard } from "@/features/mobilite/components";
import { mobilityContacts, publicTransportAxes, publicTransportDocs, publicTransportHero, publicTransportServices, relatedPageGroups } from "@/features/mobilite/data";

export default function PublicTransportPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Mobilite", href: "/services/mobilite" }, { label: "Transports publics" }]} />
      <MobilityPageHero hero={publicTransportHero} />

      <section id="services" className="space-y-8">
        <SectionHeader eyebrow="Choisir le bon reseau" title="CFF, TL, Mobilis et LEB en lecture directe" description="La page distingue clairement le train, les bus, l'abonnement integre et la ligne LEB pour simplifier le choix du bon service." />
        <div className="grid gap-4 md:grid-cols-3">
          {publicTransportServices.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Axes forts" title="Un reseau plus lisible et mieux connecte" description="Cette section clarifie l'interet institutionnel du reseau: accèssibilite, frequence, complementarite et role de Prilly-Malley." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {publicTransportAxes.map((item) => (
            <div key={item.title} className="surface p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red"><item.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Liens utiles" title="Horaires, plans et infos trafic" description="Les ressources utiles sont regroupees en un seul endroit pour preparer un trajet ou verifier un reseau." />
        <div className="grid gap-4 md:grid-cols-3">
          {publicTransportDocs.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ContactPanel contact={mobilityContacts.common} />
      <RelatedPagesSection items={relatedPageGroups.publicTransport} />
    </section>
  );
}
