import { ArrowRight, Download, Sparkles } from "lucide-react";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArchiveYearAccordion,
  ContactPanel,
  ContributionInfoCard,
  EditorialStatCard,
  FeaturedIssueCard,
  PublicationTimeline,
  AdPricingCard,
} from "@/features/prillheraut/components";
import {
  prillherautAdRates,
  prillherautArchiveByYear,
  prillherautArchivePage,
  prillherautContact,
  prillherautContributionRules,
  prillherautFeaturedIssues,
  prillherautPageMeta,
  prillherautPracticalNotes,
  prillherautRubrics,
  prillherautSchedule2026,
  prillherautStats,
} from "@/features/prillheraut/data";

const recentArchiveYears = prillherautArchiveByYear.filter((item) => item.recent);
const olderArchiveYears = prillherautArchiveByYear.filter((item) => !item.recent);

export default function JournalCommunalPage() {
  const latestIssue = prillherautFeaturedIssues[0];

  return (
    <RubricLayout
      breadcrumb={prillherautPageMeta.breadcrumb}
      eyebrow={prillherautPageMeta.hero.eyebrow}
      title={prillherautPageMeta.hero.title}
      description={prillherautPageMeta.hero.description}
      tone="warm"
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-black/8 bg-white/92 p-5 shadow-soft">
            <p className="text-sm leading-6 text-prilly-coal/76">{prillherautPageMeta.hero.intro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={latestIssue.href} target="_blank" rel="noreferrer" className="inline-flex">
              <Button className="w-full justify-center">Lire le dernier numero</Button>
            </a>
            <a href="#archives" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Consulter les archives
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section id="une" className="space-y-8">
        <SectionHeader
          eyebrow=" à là une"
          title="Le dernier numero est immediatement accèssible"
          description="La page met d'abord en avant l'edition 2026 pour que le journal communal soit lu comme un media vivant avant d'etre consulte comme une archive."
        />
        <FeaturedIssueCard issue={latestIssue} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Le journal en bref"
          title="Une vitrine editoriale pour la vie communale"
          description="Le Prill'heraut relie actualités, agenda, culture, jeunesse, bibliotheque et informations civiques dans un format de proximite."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {prillherautStats.map((item) => (
            <EditorialStatCard key={item.title} item={item} />
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface p-5 md:p-6">
            <div className="flex items-center gap-3 text-prilly-red">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">Clin d'oeil editorial</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">Pourquoi ce nom ?</h3>
            <p className="mt-3 text-sm leading-7 text-prilly-coal/74">
              Le mot heraut renvoie  à la figure du messager public charge d'annoncer des informations importantes. Le journal communal reprend cette idée dans une version locale, accèssible et contemporaine.
            </p>
          </div>
          <div className="surface p-5 md:p-6">
            <div className="flex items-center gap-3 text-prilly-red">
              <Download className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">Repere utile</span>
            </div>
            <div className="mt-4 space-y-3">
              {prillherautPracticalNotes.map((note) => (
                <div key={note} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/78">
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Parutions 2026"
          title="Le calendrier editorial de l'annee"
          description="Les délais de remise et dates de parution sont visibles en un coup d'oeil pour que la contribution au journal reste simple et previsible."
        />
        <PublicationTimeline items={prillherautSchedule2026} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Vous souhaitez publiér ?"
          title="Contribuer au Prill'heraut sans devoir decoder les consignes"
          description="La contribution est presentée comme un service editorial clair: une adresse de redaction, des formats acceptes et un ton accueillant."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {prillherautContributionRules.map((item) => (
            <ContributionInfoCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Annonces commerciales"
          title="Des formats lisibles pour les entreprises de Prilly"
          description="Les tarifs publicitaires sont volontairement séparés de l'editorial pour rester clairs et directement exploitables."
          action={<Badge className="bg-prilly-yellow/20 text-prilly-coal">Reserve aux entreprises de Prilly</Badge>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {prillherautAdRates.map((item) => (
            <AdPricingCard key={item.format} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Exemples de rubriques"
          title="Ce qu'on trouve vraiment dans le journal communal"
          description="Les numeros 2025 et 2026 montrent un journal de proximite qui informe sur la vie locale, explique les enjeux publics et accompagne le quotidien."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {prillherautRubrics.map((item) => (
            <article key={item.title} className="surface h-full p-5">
              <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {prillherautFeaturedIssues.slice(1).map((issue) => (
            <FeaturedIssueCard key={issue.id} issue={issue} compact />
          ))}
        </div>
      </section>

      <section id="archives" className="space-y-8">
        <SectionHeader
          eyebrow="Archives du Prill'heraut"
          title="Retrouver une edition recente ou remonter jusqu'en 2005"
          description="Les dernières années apparaissent d'abord, puis les archives plus anciennes sont rangées dans une seconde zone pour eviter une longue liste sans structure."
          action={
            <a href={prillherautArchivePage} target="_blank" rel="noreferrer" className="inline-flex">
              <Button variant="ghost" className="border border-black/8 bg-white">
                Archives officielles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          }
        />

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Dernières annees</h3>
          <div className="grid gap-4">
            {recentArchiveYears.map((item) => (
              <ArchiveYearAccordion key={item.year} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Archives plus anciennes</h3>
          <div className="grid gap-4">
            {olderArchiveYears.map((item) => (
              <ArchiveYearAccordion key={item.year} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <ContactPanel email={prillherautContact.email} note={prillherautContact.note} />
      </section>
    </RubricLayout>
  );
}
