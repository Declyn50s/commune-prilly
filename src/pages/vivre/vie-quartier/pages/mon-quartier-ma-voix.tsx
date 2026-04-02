import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  DocumentCard,
  MethodCard,
  ParticipationCallout,
  ResultInsightCard,
  TimelineSection,
  VQContactPanel,
  VQNoticeCard,
} from "@/features/vie-quartier/components";
import {
  mqmvDocuments,
  mqmvFocusNord,
  mqmvInsights,
  mqmvLaunchFacts,
  mqmvMethods,
  mqmvTimeline,
  quartierContact,
} from "@/features/vie-quartier/data";

export default function MonQuartierMaVoixPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Vie de quartier", href: "/vivre/vie-quartier" },
          { label: "Mon quartier, ma voix" },
        ]}
      />

      <PageHero
        eyebrow="Démarche participative"
        title="Mon quartier, ma voix"
        description="Une démarche participative pour renforcer la cohésion sociale et améliorer la qualité de vie à Prilly."
        tone="warm"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Une démarche lancée par la Commune de Prilly, avec le soutien de la Fondation
                Leenaards, en collaboration avec l’UNIL et en partenariat avec la DGCS de l’État
                de Vaud.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-prilly-yellow/30 bg-prilly-yellow/22 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal">Le projet en bref</p>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/76">
                L’objectif est de renforcer la cohésion sociale, de mieux comprendre les besoins
                locaux et de faire émerger des actions concrètes à partir des contributions du
                terrain.
              </p>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Les 4 phases de la démarche"
          title="Une méthode structurée pour passer de l’écoute à l’action"
          description="La timeline rend visible le passage du cadrage initial à l’émergence d’initiatives citoyennes dès 2026."
        />
        <TimelineSection items={mqmvTimeline} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Lancement et ancrage territorial"
          title="Un lancement festif, puis une première focale sur le quartier nord"
          description="Le projet a été lancé officiellement le 1er juin 2024 et sa première phase s’est concentrée sur le quartier nord, avec une vocation à s’étendre ensuite."
        />
        <TimelineSection items={mqmvLaunchFacts} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Le diagnostic participatif"
          title="Une méthode multiple pour écouter le quartier sous différents angles"
          description="Balades, entretiens, questionnaires et ateliers se complètent pour produire un portrait partagé du quartier."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mqmvMethods.map((item) => (
            <MethodCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Ce que disent les habitant·e·s"
          title="Les principaux enseignements du diagnostic"
          description="Les retours montrent un bien-être globalement positif mais aussi des besoins très concrets autour du lien social, des espaces, des parcours et de la communication."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mqmvInsights.map((item) => (
            <ResultInsightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Focus quartier nord"
          title="Des enjeux territoriaux très concrets"
          description="La matière recueillie fait ressortir des questions de mobilité, d’accèssibilité, de commerces de proximité, de stationnement et de qualité des espaces publics."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mqmvFocusNord.map((item) => (
            <ResultInsightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="documents" className="space-y-8">
        <SectionHeader
          eyebrow="Documents disponibles"
          title="Consulter les rapports, analyses et restitutions"
          description="Chaque document est présenté avec un titre lisible et un contexte clair pour faciliter la consultation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mqmvDocuments.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <ParticipationCallout
          items={[
            "Chaque voix compte, qu’il s’agisse d’un habitant, d’un commerçant, d’une association ou d’une institution.",
            "Partager son expérience du quartier permet d’éclairer des besoins que les diagnostics techniques ne voient pas toujours.",
            "La participation nourrit des projets concrets et une meilleure qualité de vie à l’échelle locale.",
            "Le projet cherche à faire émerger une action collective crédible, utile et ancrée dans le quotidien.",
          ]}
        />
      </section>

      <section className="space-y-8">
        <VQNoticeCard
          title="Contact projet"
          description="Pour participer, poser une question ou suivre l’avancement de la démarche, le contact projet reste visible et direct."
        />
        <VQContactPanel contact={quartierContact} />
      </section>
    </section>
  );
}
