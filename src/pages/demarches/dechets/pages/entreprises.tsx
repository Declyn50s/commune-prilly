import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, TaxInfoCard, WasteContactPanel } from "@/features/dechets/components";
import { enterpriseWasteRules, wasteContacts } from "@/features/dechets/data";

export default function WasteBusinessesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Déchets des entreprises" }]} />

      <PageHero eyebrow="Activités professionnelles" title="Déchets des entreprises" description="Règles de collecte, accès aux infrastructures et taxe forfaitaire pour les activités professionnelles à Prilly." tone="light" />

      <section className="space-y-8">
        <SectionHeader eyebrow="Règles essentielles" title="Savoir rapidement quelle règle s'applique" description="La page sépare clairement les petites entreprises, les autres activités, la taxe et l'usage des infrastructures." />
        <div className="grid gap-4 md:grid-cols-2">
          <TaxInfoCard title={enterpriseWasteRules[0].title} description={enterpriseWasteRules[0].description} details={["Déchets comparables à un ménage", "Utilisation des sacs taxés", "Porte-à-porte possible selon le cas"]} tone="white" />
          <TaxInfoCard title={enterpriseWasteRules[1].title} description={enterpriseWasteRules[1].description} details={["Prestataire ou filière spécialisée", "Elimination autonome", "Attestation annuelle si nécessaire"]} tone="coal" />
          <TaxInfoCard title={enterpriseWasteRules[2].title} description={enterpriseWasteRules[2].description} details={["Montant de référence: CHF 100", "Prorata temporis possible", "Exemptions selon les cas"]} tone="yellow" />
          <TaxInfoCard title={enterpriseWasteRules[3].title} description={enterpriseWasteRules[3].description} details={["Pas d'accès aux filières ménages", "Passage par des filières agréées", "Centre intercommunal ou prestataire adapté"]} tone="green" />
        </div>
      </section>

      <AlertNotice title="Point de vigilance" tone="red">
        La déchèterie des ménages n'est pas destinée aux entreprises. Si votre activité produit des déchets professionnels, le service vous orientera vers la bonne filière agréée.
      </AlertNotice>

      <section className="space-y-8">
        <SectionHeader eyebrow="Contacts utiles" title="Un accompagnement pour clarifier votre cas" description="Le Service Energie et Environnement peut vous aider à déterminer si votre activité relève d'un fonctionnement comparable à un ménage." />
        <WasteContactPanel contacts={wasteContacts} />
      </section>
    </section>
  );
}
