import { Download } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, CollectionSummaryCard, DownloadCard, WasteNoticeCard } from "@/features/dechets/components";
import { wasteCollectionSummary, wasteDocuments, wasteMapImages, wasteSpecialCollections } from "@/features/dechets/data";

export default function WasteCalendarPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Calendrier de collecte" }]} />

      <PageHero
        eyebrow="Ramassage 2026"
        title="Calendrier de collecte"
        description="Tous les jours et secteurs de ramassage des déchets à Prilly en 2026."
        tone="warm"
        aside={
          <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Téléchargement rapide</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
              Gardez le calendrier complet à portée de main pour vérifier les jours spéciaux et les décalages liés aux jours fériés.
            </p>
            <a href="/docs/dechets/Info-dechets_2026_complet.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white">
              <Download className="h-4 w-4" />
              Télécharger le PDF
            </a>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="Résumé par type de déchet" title="Les jours à retenir" description="Le calendrier est résumé ci-dessous pour repérer tout de suite le bon jour de sortie." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wasteCollectionSummary.map((item) => <CollectionSummaryCard key={item.title} item={item} />)}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <SectionHeader eyebrow="Votre secteur" title="Nord ou sud ?" description="La route de Cossonay sert de repère simple pour identifier votre secteur." />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-prilly-green/25 bg-prilly-green/10 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-prilly-coal">Secteur nord</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">Route de Cossonay, numéros pairs.</p>
            </div>
            <div className="rounded-[1.75rem] border border-prilly-red/18 bg-prilly-red/8 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-prilly-coal">Secteur sud</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">Route de Cossonay, numéros impairs.</p>
            </div>
          </div>
          <AlertNotice title="Bon réflexe" tone="yellow">
            Si vous avez un doute, vérifiez le PDF secteurs Sud et Nord avant de sortir vos conteneurs.
          </AlertNotice>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white p-3 shadow-soft">
          <img src={wasteMapImages.collectionMap} alt="Carte des secteurs de collecte et des points déchets à Prilly" className="h-full w-full rounded-[1.5rem] object-cover" />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Collectes spéciales" title="Les dates et exceptions à ne pas manquer" description="Les passages particuliers et événements utiles sont regroupés pour éviter les oublis." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {wasteSpecialCollections.map((item) => <WasteNoticeCard key={item.title} title={item.title} description={item.description} />)}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <DownloadCard item={wasteDocuments[0]} />
        <DownloadCard item={wasteDocuments[1]} />
      </section>
    </section>
  );
}
