import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, CollectionPointCard, WasteNoticeCard } from "@/features/dechets/components";
import { collectionPoints, decheterieFixedSite, decheterieMobileSites, decheterieRules, wasteMapImages } from "@/features/dechets/data";

export default function WasteCollectionSitesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Déchèteries et points de collecte" }]} />

      <PageHero
        eyebrow="Lieux de dépôt"
        title="Déchèteries et points de collecte"
        description="Déchèterie fixe, déchèteries mobiles et points de collecte à Prilly."
        tone="light"
        aside={
          <div className="rounded-[1.75rem] border border-prilly-green/25 bg-prilly-green/10 p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Recyclons Futé</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
              Avant de vous rendre à Malley, consultez l'outil pour choisir une heure plus fluide et éviter les files d'attente.
            </p>
            <a href={decheterieFixedSite.ctaHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white">
              {decheterieFixedSite.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        }
      />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Déchèterie fixe de Malley</p>
          <h2 className="mt-3 text-2xl font-semibold text-prilly-coal">{decheterieFixedSite.title}</h2>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{decheterieFixedSite.address}</p>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{decheterieFixedSite.description}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-prilly-coal">Horaires</p>
              <ul className="mt-2 space-y-1 text-sm text-prilly-coal/72">{decheterieFixedSite.hours.map((hour) => <li key={hour}>{hour}</li>)}</ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-prilly-coal">À retenir</p>
              <ul className="mt-2 space-y-1 text-sm text-prilly-coal/72">{decheterieFixedSite.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white p-3 shadow-soft">
          <img src={wasteMapImages.mobileMap} alt="Carte des déchèteries et points de collecte à Prilly" className="h-full w-full rounded-[1.5rem] object-cover" />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Déchèteries mobiles" title="Nord, Centre et Sud" description="Les sites mobiles accueillent les personnes venant à pied ou en mobilité douce, avec des règles simples mais strictes." />
        <div className="grid gap-4 md:grid-cols-3">
          {decheterieMobileSites.map((site) => (
            <div key={site.title} className="surface p-5">
              <h3 className="text-lg font-semibold text-prilly-coal">{site.title}</h3>
              <p className="mt-2 text-sm text-prilly-coal/72">{site.address}</p>
              <ul className="mt-4 space-y-1 text-sm leading-6 text-prilly-coal/70">{site.hours.map((hour) => <li key={hour}>{hour}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {decheterieRules.map((item) => <WasteNoticeCard key={item.title} title={item.title} description={item.description} />)}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Points de collecte" title="Les points de proximité pour vêtements et alu/fer-blanc" description="La carte et la liste ci-dessous aident à repérer rapidement le point le plus proche." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collectionPoints.map((item) => <CollectionPointCard key={item.title} item={item} />)}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <AlertNotice title="Déménagement et encombrants" tone="yellow">
          En cas de déménagement, utilisez la déchèterie de Malley. Les déchèteries mobiles ne sont pas faites pour vider des caves ou des appartements.
        </AlertNotice>
        <AlertNotice title="Carte d'accès" tone="green">
          Une carte d'accès gratuite est délivrée par ménage. Pour l'obtenir ou la remplacer, renseignez-vous auprès de l'Office de la population.
        </AlertNotice>
      </section>
    </section>
  );
}
