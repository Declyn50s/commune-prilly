import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  MobilityPageHero,
  ParkingRateCard,
  ProcedureSteps,
  RelatedPagesSection,
  ServiceLinkCard,
} from "@/features/mobilite/components";
import { cffDayPassFacts, cffDayPassHero, cffDayPassLinks, cffDayPassPricing, cffDayPassRefunds, cffDayPassSteps, mobilityContacts, relatedPageGroups } from "@/features/mobilite/data";

export default function CffDayPassPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Mobilite", href: "/services/mobilite" }, { label: "Cartes journalieres CFF" }]} />
      <MobilityPageHero hero={cffDayPassHero} />

      <section className="space-y-8">
        <SectionHeader eyebrow="Infos cles" title="Comprendre le service en quelques secondes" description="Cette page se concentre sur les informations transactionnelles: validite, mode de vente, fenetre d'achat et carte nominative." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cffDayPassFacts.map((item) => (
            <div key={item.title} className="surface p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red"><item.icon className="h-5 w-5" /></div>
              <p className="mt-4 text-sm font-medium text-prilly-coal/65">{item.title}</p>
              <p className="mt-2 text-2xl font-semibold text-prilly-coal">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prix" className="space-y-8">
        <SectionHeader eyebrow="Prix" title="Deux niveaux de prix selon l'anticipation" description="Le tarif depend du moment de l'achat et de la possession d'un demi-tarif." />
        <div className="grid gap-4 md:grid-cols-2">
          {cffDayPassPricing.map((item) => (
            <ParkingRateCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Etapes d'achat" title="Un parcours d'achat tres court" description="L'objectif est de rendre l'achat lisible et actionnable tout de suite." />
        <ProcedureSteps steps={cffDayPassSteps} />
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Remboursement" title="Deux cas a distinguer" description="La page separe le remboursement standard des cas exceptionnels pour eviter les malentendus." />
        <div className="grid gap-4 md:grid-cols-2">
          {cffDayPassRefunds.map((item) => (
            <div key={item.title} className="surface p-5">
              <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              <div className="mt-4 space-y-2">
                {item.notes.map((note) => (
                  <div key={note} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/78">{note}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Liens utiles" title="Verifier la disponibilite et preparer son trajet" description="Les liens essentiels sont regroupes ici pour pouvoir agir sans chercher ailleurs." />
        <div className="grid gap-4 md:grid-cols-3">
          {cffDayPassLinks.map((item) => (
            <ServiceLinkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ContactPanel contact={mobilityContacts.cff} />
      <RelatedPagesSection items={relatedPageGroups.cffDayPass} />
    </section>
  );
}

