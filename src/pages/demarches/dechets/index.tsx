import { ArrowRight, CalendarDays, Clock3, MapPinned, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  AlertNotice,
  CollectionSummaryCard,
  DownloadCard,
  WasteContactPanel,
  WastePathCard,
  WasteQuickaccèssCard,
} from "@/features/dechets/components";
import {
  wasteCollectionSummary,
  wasteContacts,
  wasteDocuments,
  wastePageShortcuts,
  wastePaths,
  wasteQuickaccèss,
} from "@/features/dechets/data";

export default function DechetsHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets" }]} />

      <PageHero
        eyebrow="Service du quotidien"
        title="Déchets"
        description="Collectes, tri, déchèteries, taxes et informations utiles pour gérer vos déchets à Prilly. La commune met à disposition plusieurs solutions pour trier, recycler et éliminer les déchets du quotidien."
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/40 bg-prilly-yellow/18 p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal">Accès immédiat</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/76">
                Les questions les plus fréquentes sont regroupées ici pour trouver rapidement le bon jour, le bon lieu de dépôt et la bonne règle.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/demarches/dechets/calendrier-de-collecte" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">Voir le calendrier 2026</Link>
              <Link to="/demarches/dechets/tri-des-dechets" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">Où jeter mon déchet ?</Link>
              <Link to="/demarches/dechets/decheteries-et-points-de-collecte" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">Trouver une déchèterie</Link>
              <Link to="/demarches/dechets/taxes-dechets" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">Comprendre les taxes</Link>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="Accès rapides" title="Commencer par la bonne porte d'entrée" description="Les besoins les plus fréquents sont formulés de façon directe pour réduire le temps de recherche." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wasteQuickaccèss.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <WasteQuickaccèssCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Les 4 grands parcours" title="Où va chaque déchet ?" description="Le tri est présenté selon la logique la plus simple pour l'habitant: à domicile, en magasin, à la déchèterie ou dans un point de collecte." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {wastePaths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <WastePathCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Calendrier 2026"
          title="En un coup d'oeil"
          description="L'essentiel est résumé ici, avec un accès direct au détail complet par secteur."
          action={
            <Link to="/demarches/dechets/calendrier-de-collecte" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
              Ouvrir le calendrier détaillé
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wasteCollectionSummary.map((item) => (
            <CollectionSummaryCard key={item.title} item={item} />
          ))}
          <div className="rounded-[1.75rem] border border-prilly-coal bg-prilly-coal p-5 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Temps forts</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
              <li className="flex gap-3"><Clock3 className="mt-1 h-4 w-4 shrink-0 text-prilly-yellow" />Déchèteries mobiles: Nord, Centre et Sud</li>
              <li className="flex gap-3"><CalendarDays className="mt-1 h-4 w-4 shrink-0 text-prilly-yellow" />Vide-grenier: samedi 3 octobre 2026</li>
              <li className="flex gap-3"><MapPinned className="mt-1 h-4 w-4 shrink-0 text-prilly-yellow" />Vérifiez les jours fériés avant chaque sortie</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <AlertNotice title="Infoline déchets" tone="green">
          Téléphone, e-mail, horaires et liens pratiques sont regroupés ici pour éviter les allers-retours entre plusieurs pages.
        </AlertNotice>
        <div className="rounded-[1.75rem] border border-black/6 bg-gradient-to-br from-prilly-green/8 via-white to-prilly-yellow/12 p-5 shadow-soft">
          <div className="flex items-start gap-3">
            <Search className="mt-1 h-5 w-5 text-prilly-red" />
            <div>
              <h3 className="text-lg font-semibold text-prilly-coal">Besoin d'un repère rapide ?</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
                Vous pouvez passer directement par le guide de tri, les points de collecte ou le calendrier selon votre besoin du moment.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {wastePageShortcuts.map((item) => (
                  <Link key={item.href} to={item.href} className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="space-y-8">
        <WasteContactPanel contacts={wasteContacts} />
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Documents utiles" title="Les bons PDF, au bon endroit" description="Chaque document est présenté avec son utilité pour éviter une simple liste de téléchargements." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wasteDocuments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <DownloadCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
}
