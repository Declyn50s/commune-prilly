import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, DownloadCard, WasteNoticeCard } from "@/features/dechets/components";
import { ownerRules, wasteContainerColors, wasteContainerRules, wasteDocuments } from "@/features/dechets/data";

export default function WasteContainersPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Conteneurs déchets" }]} />

      <PageHero eyebrow="Équipement et règles" title="Conteneurs déchets" description="Couleurs officielles, règles de dépôt et obligations pour les propriétaires." tone="warm" />

      <section className="space-y-8">
        <SectionHeader eyebrow="Les 4 conteneurs officiels" title="Un code couleur simple à retenir" description="Les couleurs communales structurent le tri à domicile et rendent les points de dépôt plus lisibles." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {wasteContainerColors.map((item) => (
            <div key={item.title} className="surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.title}</p>
              <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{item.subtitle}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Règles importantes" title="Ce qu'il faut respecter au quotidien" description="Les règles ci-dessous évitent les refus de collecte et les nuisances de voisinage." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wasteContainerRules.map((item) => <WasteNoticeCard key={item.title} title={item.title} description={item.description} />)}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <SectionHeader eyebrow="Pour les propriétaires" title="Les obligations pratiques" description="Les immeubles doivent proposer un dispositif lisible, accèssible et conforme au système communal." />
          <div className="grid gap-4 md:grid-cols-3">
            {ownerRules.map((item) => <WasteNoticeCard key={item.title} title={item.title} description={item.description} />)}
          </div>
        </div>
        <div className="space-y-5">
          <AlertNotice title="Où acheter un conteneur ?" tone="yellow">
            La commune peut orienter vers les fournisseurs compatibles avec le système de levage communal, notamment Transvoirie SA pour les équipements conformes.
          </AlertNotice>
          <DownloadCard item={wasteDocuments[3]} />
        </div>
      </section>
    </section>
  );
}
