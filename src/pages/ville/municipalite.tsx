import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import {
  CompetenceCard,
  ContactPanel,
  DecisionExcerptCard,
  DocumentCategoryCard,
  HelpfulInfoSection,
  KeyFigureCard,
  MunicipalMemberCard,
  MunicipalitySummaryCard,
  ParkingInfoCard,
} from "@/features/municipalite/components";
import {
  municipalityBudgetHighlights,
  municipalityCompetenceGroups,
  municipalityContacts,
  municipalityDecisionMeta,
  municipalityDecisions,
  municipalityFinancialDocuments,
  municipalityHelpfulSections,
  municipalityMembers,
  municipalityPageMeta,
  municipalityParkingDocuments,
  municipalityParkingIntro,
  municipalityParkingPoints,
  municipalityPublicationDocuments,
  municipalitySummary,
} from "@/features/municipalite/data";
import { ArrowRight, ChevronRight } from "lucide-react";

const pageSections: PageSideNavSection[] = [
  { id: "apercu", label: "Aperçu" },
  { id: "composition", label: "Composition" },
  { id: "competences", label: "Compétences" },
  { id: "decisions", label: "Décisions" },
  { id: "finances", label: "Finances" },
  { id: "stationnement", label: "Stationnement" },
  { id: "contacts", label: "Contacts" },
];

export default function MunicipalitePage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={municipalityPageMeta.breadcrumb} />

      <PageHero
        eyebrow={municipalityPageMeta.hero.eyebrow}
        title={municipalityPageMeta.hero.title}
        description={municipalityPageMeta.hero.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#composition" className="inline-flex">
                <Button className="w-full justify-center">
                  Voir la composition
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#decisions" className="inline-flex">
                <Button variant="secondary" className="w-full justify-center">
                  Consulter les dernières décisions
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Composition officielle", href: municipalityPageMeta.sourceLinks.composition },
                { label: "Decisions municipales", href: municipalityPageMeta.sourceLinks.decisions },
                { label: "Classeur source", href: municipalityPageMeta.sourceLinks.sourcePdf },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/15 hover:text-prilly-red"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="apercu" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="La Municipalite en bref"
              title="Les repères institutionnels utiles avant d’entrer dans le détail"
              description="Cette première lecture permet de comprendre rapidement le rôle de l’exécutif communal, sa présidence, sa vice-syndicature et l’organisation de son secrétariat."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {municipalitySummary.map((item) => (
                <MunicipalitySummaryCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <SectionHeader
              eyebrow="Comprendre l'executif"
              title="Une page de gouvernance pensée pour orienter"
              description="Composition, compétences, décisions, finances et stationnement sont traités comme des usages distincts pour rendre la lecture plus simple sur mobile comme sur desktop."
            />
            <HelpfulInfoSection items={municipalityHelpfulSections} />
          </section>

          <section id="composition" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Composition et dicastères"
              title="Les cinq membres de la Municipalité"
              description="Les portraits et les dicastères sont présentés de façon lisible pour identifier rapidement les personnes en charge, les suppléances et les situations particulières."
            />
            <div className="-mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2 lg:overflow-visible">
              {municipalityMembers.map((member, index) => (
                <div key={member.name} className="min-w-[17.5rem] flex-1 snap-start lg:min-w-0">
                  <MunicipalMemberCard member={member} delay={index * 0.04} />
                </div>
              ))}
            </div>
          </section>

          <section id="competences" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Qui gere quoi ?"
              title="Trouver rapidement la bonne compétence"
              description="Si vous cherchez un sujet avant une personne, cette grille permet de repérer directement le ou la municipal-e compétent-e selon le domaine concerné."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {municipalityCompetenceGroups.map((item) => (
                <CompetenceCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="decisions" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow={municipalityDecisionMeta.eyebrow}
              title={municipalityDecisionMeta.title}
              description={municipalityDecisionMeta.description}
              action={
                <a href={municipalityDecisionMeta.archiveHref} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button variant="secondary" className="w-full justify-center">
                    Ouvrir l'archive officielle
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              }
            />

            <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-coal to-[#555555] p-6 text-white shadow-soft md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">
                {municipalityDecisionMeta.archiveLabel}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/82">
                {municipalityDecisionMeta.archiveNote}
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {municipalityDecisions.map((item, index) => (
                <DecisionExcerptCard key={item.title} item={item} delay={index * 0.04} />
              ))}
            </div>
          </section>

          <section id="finances" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Finances et pilotage"
              title="Des chiffres cles visibles d'abord, puis les documents utiles"
              description="La page met les grands ordres de grandeur 2026 en avant avant de renvoyer vers les comptes, budgets, états financiers et tableaux de bord."
            />

            <div className="space-y-6">
              <div className="flex flex-col gap-3 rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between md:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Budget 2026</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-prilly-coal">Chiffres cles de pilotage</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-prilly-coal/72">
                    Les données ci-dessous synthétisent les repères les plus utiles du budget 2026: résultat, capacité d'autofinancement, investissements, endettement et évolution du territoire communal.
                  </p>
                </div>
                <a href={municipalityPageMeta.sourceLinks.finance} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button variant="ghost" className="w-full justify-center">
                    Voir les finances officielles
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {municipalityBudgetHighlights.map((item) => (
                  <KeyFigureCard key={item.label} item={item} />
                ))}
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {municipalityFinancialDocuments.map((item) => (
                <DocumentCategoryCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="stationnement" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Autorisations de stationnement"
              title="Une section pratique, clairement separée de la gouvernance"
              description="Le stationnement reste rattaché aux finances et aux autorisations communales, mais son traitement est isolé pour ne pas brouiller la lecture institutionnelle."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {municipalityParkingIntro.map((item) => (
                <ParkingInfoCard key={item.title} item={item} />
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-yellow/18 via-white to-prilly-coal/4 p-6 shadow-soft md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/62">A retenir</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">
                  Les règles essentielles avant de faire la demande
                </h3>
                <div className="mt-6 grid gap-3">
                  {municipalityParkingPoints.map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-black/6 bg-white/90 px-4 py-4 text-sm leading-6 text-prilly-coal/76">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <DocumentCategoryCard item={municipalityParkingDocuments} />
            </div>
          </section>

          <section className="space-y-8">
            <SectionHeader
              eyebrow="Rapports et vision"
              title="Rapports de gestion et programme de legislature"
              description="Deux familles documentaires distinctes: l'une rend compte de l'action municipale, l'autre expose la trajectoire politique et stratégique du mandat."
            />
            <div className="grid gap-5 xl:grid-cols-2">
              {municipalityPublicationDocuments.map((item) => (
                <DocumentCategoryCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="contacts" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Contacts"
              title="Les bons points d'entrée selon le besoin"
              description="Le greffe municipal et le service des finances sont distingués pour orienter plus vite les habitantes et habitants vers le bon interlocuteur."
            />
            <div className="grid gap-5">
              {municipalityContacts.map((contact) => (
                <ContactPanel key={contact.title} contact={contact} />
              ))}
            </div>
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
