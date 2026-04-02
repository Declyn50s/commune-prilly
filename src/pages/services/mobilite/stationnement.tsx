import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  DocumentCard,
  MobilityPageHero,
  ParkingEligibilityCard,
  ParkingRateCard,
  ProcedureSteps,
  RelatedPagesSection,
  ServiceLinkCard,
} from "@/features/mobilite/components";
import {
  mobilityContacts,
  parkingDocuments,
  parkingEligibility,
  parkingHero,
  parkingHighlights,
  parkingIntroCards,
  parkingLocations,
  parkingMobileApps,
  parkingPendularRules,
  parkingSteps,
  parkingTariffs,
  parkingZonesDoc,
  relatedPageGroups,
} from "@/features/mobilite/data";

const pageSections: PageSideNavSection[] = [
  { id: "tarifs", label: "Tarifs" },
  { id: "autorisations", label: "Autorisations" },
  { id: "eligibilite", label: "Eligibilite" },
  { id: "demarche", label: "Demarche" },
  { id: "pendulaires", label: "Pendulaires" },
  { id: "zones", label: "Zones macarons" },
  { id: "paiement-mobile", label: "Paiement mobile" },
  { id: "documents", label: "Documents utiles" },
  { id: "contact", label: "Contact" },
  { id: "liens", label: "Pages liees" },
];

export default function ParkingPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mobilite", href: "/services/mobilite" },
          { label: "Stationnement" },
        ]}
      />
      <MobilityPageHero hero={parkingHero} />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="tarifs" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Location de places"
              title="Des tarifs lisibles selon le type de place"
              description="Les sites sont regroupes par type de stationnement pour rendre la grille plus claire et plus utile."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {parkingLocations.map((item) => (
                <ParkingRateCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="autorisations" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Autorisations de stationnement"
              title="Comprendre les autorisations sans se perdre dans le jargon"
              description="La page rappelle les regles essentielles avant de passer a la demande ou au paiement."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {parkingIntroCards.map((item) => (
                <div key={item.title} className="surface p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {parkingTariffs.map((item) => (
                <ParkingEligibilityCard key={item.title} item={item} />
              ))}
            </div>
            <div className="grid gap-3">
              {parkingHighlights.map((item) => (
                <div key={item} className="surface p-4 text-sm leading-6 text-prilly-coal/78">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="eligibilite" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Qui peut obtenir une autorisation ?"
              title="Des cartes distinctes selon les profils"
              description="Les cas sont separes pour mieux orienter la bonne demarche et le bon cadre tarifaire."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {parkingEligibility.map((item) => (
                <ParkingEligibilityCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="demarche" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Comment faire la demande ?"
              title="Un parcours clair via ParkingPay"
              description="La procedure est decomposee en etapes simples pour reduire la friction et les erreurs de saisie."
            />
            <ProcedureSteps steps={parkingSteps} />
          </section>

          <section id="pendulaires" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Demande pendulaire"
              title="Un cadre specifique pour les employeurs"
              description="Cette section met en avant les regles particulieres a la demande pendulaire, souvent difficiles a reperer dans les documents bruts."
            />
            <div className="surface p-6">
              <div className="grid gap-3">
                {parkingPendularRules.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="zones" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Zones macarons"
              title="Lire le plan avant de faire la demande"
              description="Le plan de zones aide a distinguer les secteurs concernes par les autorisations et ceux qui ne le sont pas."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <DocumentCard item={parkingZonesDoc} />
              <div className="surface p-6">
                <h3 className="text-xl font-semibold text-prilly-coal">Zone macaron ou pas zone macaron ?</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/72">
                  Le plan detaille permet de verifier rapidement si le stationnement est conditionne a une
                  autorisation P, ou si le secteur releve d'un autre regime. C'est le bon point de depart
                  avant toute demande.
                </p>
              </div>
            </div>
          </section>

          <section id="paiement-mobile" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Paiement mobile"
              title="Trois applications a connaitre"
              description="Une lecture simple pour reperer les applications les plus utiles selon le type de stationnement."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {parkingMobileApps.map((item) => (
                <ServiceLinkCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="documents" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Documents utiles"
              title="Les bons PDF, au bon endroit et avec contexte"
              description="Reglement, prescriptions, tarifs, formulaires et plan de zones sont integres comme des ressources contextualisees."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {parkingDocuments.map((item) => (
                <DocumentCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <ContactPanel contact={mobilityContacts.parking} />
          </section>

          <section id="liens" className="scroll-mt-32">
            <RelatedPagesSection items={relatedPageGroups.parking} />
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
