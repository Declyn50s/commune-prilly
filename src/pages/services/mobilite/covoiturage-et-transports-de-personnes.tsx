import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import { ContactPanel, MobilityPageHero, RelatedPagesSection, ServiceLinkCard } from "@/features/mobilite/components";
import { mobilityContacts, peopleTransportServices, relatedPageGroups, ridesharingHero, ridesharingResources } from "@/features/mobilite/data";

export default function RidesharingPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Mobilite", href: "/services/mobilite" }, { label: "Covoiturage et transports de personnes" }]} />
      <MobilityPageHero hero={ridesharingHero} />

      <section id="covoiturage" className="space-y-8">
        <SectionHeader eyebrow="Covoiturage" title="Partager un trajet plutot que rouler seul" description="Le covoiturage est presente comme une alternative economique, pratique et plus sobre pour certains deplacements." />
        <div className="grid gap-4 md:grid-cols-2">
          {ridesharingResources.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="transports-personnes" className="space-y-8">
        <SectionHeader eyebrow="Transports de personnes" title="Des solutions d'accompagnement, de soin ou de benevolat" description="Cette section rassemble les grandes situations d'usage pour guider plus clairement les habitantes et habitants." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {peopleTransportServices.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ContactPanel contact={mobilityContacts.common} />
      <RelatedPagesSection items={relatedPageGroups.ridesharing} />
    </section>
  );
}
