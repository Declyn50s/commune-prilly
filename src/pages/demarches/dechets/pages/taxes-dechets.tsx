import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, DownloadCard, TaxInfoCard, WasteContactPanel } from "@/features/dechets/components";
import { taxReliefs, taxSystems, wasteContacts, wasteDocuments } from "@/features/dechets/data";

export default function WasteTaxesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Taxes déchets" }]} />

      <PageHero eyebrow="Financement du service" title="Taxes déchets" description="Comprendre la taxe au sac, la taxe forfaitaire et les aides possibles." tone="light" />

      <section className="space-y-8">
        <SectionHeader eyebrow="Les 2 systèmes de taxation" title="Une lecture simple d'un sujet souvent perçu comme complexe" description="La page distingue clairement la taxe au sac et la taxe forfaitaire pour éviter les confusions." />
        <div className="grid gap-4 md:grid-cols-2">
          <TaxInfoCard title={taxSystems[0].title} description={taxSystems[0].description} details={taxSystems[0].details} tone="yellow" />
          <TaxInfoCard title={taxSystems[1].title} description={taxSystems[1].description} details={taxSystems[1].details} tone="white" />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <AlertNotice title="Taxe forfaitaire habitant" tone="green">
            La taxe est due dès 18 ans, y compris pour un domicile secondaire. En cas d'arrivée ou de départ en cours d'année, le calcul se fait au prorata temporis. Le montant de référence au 1er janvier 2024 est de CHF 66.
          </AlertNotice>
          <AlertNotice title="Informations en plusieurs langues" tone="yellow">
            Le courrier relatif à l'octroi de sacs à la naissance est disponible en plusieurs langues pour faciliter l'accès à l'information.
          </AlertNotice>
        </div>
        <DownloadCard item={wasteDocuments[4]} />
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Allégements et exonérations" title="Les situations particulières bien visibles" description="Les aides et remboursements sont séparés par profil pour que chacun repère rapidement ce qui peut le concerner." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {taxReliefs.map((item) => (
            <TaxInfoCard key={item.title} title={item.title} description={item.description} details={[item.note]} tone={item.tone === "coal" ? "coal" : item.tone === "yellow" ? "yellow" : item.tone === "green" ? "green" : "white"} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <DownloadCard item={wasteDocuments[5]} />
        <DownloadCard item={{ title: "Courrier traduit pour l'octroi des sacs à la naissance", description: "Version multilingue utile pour les familles concernées par cette aide communale.", href: "/docs/dechets/Traductions_courrier.pdf", label: "Télécharger les traductions" }} />
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Contact" title="Besoin d'un éclaircissement sur votre situation ?" description="Le service taxe déchets et le Service Energie et Environnement sont regroupés ici." />
        <WasteContactPanel contacts={wasteContacts} />
      </section>
    </section>
  );
}
