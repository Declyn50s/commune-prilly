import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { SectionHeader } from "@/components/common/section-header";
import {
  ActivityHighlightCard,
  AudienceCard,
  ContactPanel,
  PracticalInfoGrid,
  QuickaccèssCard,
  SportsPageHero,
} from "@/features/sports-loisirs/components";
import {
  audienceGroups,
  highlightedActivities,
  infoBadges,
  sportsContacts,
  sportsHubHero,
  sportsQuickaccèss,
} from "@/features/sports-loisirs/data";

const pageSections: PageSideNavSection[] = [
  { id: "acces", label: "Acces rapides" },
  { id: "publics", label: "Pour tous les ages" },
  { id: "activites", label: "Activites" },
  { id: "infos", label: "Repere utile" },
  { id: "contact", label: "Contact" },
];

export default function SportsLeisureHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Loisirs", href: "/loisirs" },
          { label: "Sports et loisirs" },
        ]}
      />
      <SportsPageHero {...sportsHubHero} />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="acces" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="En un coup d'oeil"
              title="Entrer tout de suite par la bonne porte"
              description="La rubrique est reorganisee pour separer clairement les lieux, les piscines, les activités gratuites, la jeunesse et les societes locales."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sportsQuickaccèss.map((item) => (
                <QuickaccèssCard key={item.href} item={item} />
              ))}
            </div>
          </section>

          <section id="publics" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Pour tous les ages"
              title="Une offre pensee pour les usages reels"
              description="A Prilly, la pratique sportive et de loisirs ne se limite pas aux clubs. La commune propose aussi des formats gratuits, familiaux, jeunesse et seniors."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {audienceGroups.map((item) => (
                <AudienceCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="activites" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Activites a là une"
              title="Les rendez-vous qui donnent envie d'y aller"
              description="Ces formats montrent la diversite de l'offre prillerane: du sport en extérieur, du mouvement en famille, des propositions seniors et des activités jeunesse."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {highlightedActivities.map((item) => (
                <ActivityHighlightCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="infos" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Repere utile"
              title="Ce que la nouvelle rubrique rend plus simple"
              description="Les pages se concentrent sur ce qui aide vraiment a agir: ou aller, comment participer, quand venir et quel contact utiliser."
            />
            <PracticalInfoGrid items={infoBadges.map((item) => ({ ...item }))} />
          </section>

          <section id="contact" className="scroll-mt-32">
            <ContactPanel {...sportsContacts.common} />
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
