import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  DocumentCard,
  ParticipationCallout,
  ProjectHighlightCard,
  StrategyCard,
  VQContactPanel,
} from "@/features/vie-quartier/components";
import {
  cohesionStrategy,
  quartierContact,
  quartierDocumentsPreview,
  quartierParticipationBullets,
  quartierProjects,
} from "@/features/vie-quartier/data";

export default function VieQuartierHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Vie de quartier" },
        ]}
      />

      <PageHero
        eyebrow="Participation citoyenne"
        title="Vie de quartier"
        description="Cohésion sociale, participation citoyenne, activités locales et projets de quartier à Prilly."
        tone="warm"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Cette rubrique rend visible une ville qui écoute, documente, expérimente et agit
                avec ses habitant·e·s pour renforcer les liens de proximité et améliorer
                concrètement le cadre de vie.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/vivre/vie-quartier/mon-quartier-ma-voix" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">
                Découvrir les démarches
              </Link>
              <a href="#participer" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Participer au projet
              </a>
              <Link to="/vivre/vie-quartier/activites-de-quartier" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Voir les activités du quartier
              </Link>
              <a href="#documents" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Consulter les documents
              </a>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Cohésion sociale à Prilly"
          title="Une politique communale qui place le lien social au cœur de la ville"
          description="Depuis 2024, le service Jeunesse est devenu le Service jeunesse, sports et cohésion sociale pour mieux répondre à l’évolution de la ville et aux besoins de la population."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cohesionStrategy.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <StrategyCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Démarches en cours"
          title="Trois portes d’entrée pour comprendre les projets de quartier"
          description="Chaque projet est présenté de manière claire avec son objectif, sa logique de participation et son lien vers une page dédiée."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quartierProjects.map((item) => (
            <ProjectHighlightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="participer" className="space-y-8">
        <ParticipationCallout items={quartierParticipationBullets} />
      </section>

      <section id="documents" className="space-y-8">
        <SectionHeader
          eyebrow="Documents et restitutions"
          title="Comprendre les démarches à travers des supports contextualisés"
          description="Les documents clés sont présentés ici avec leur utilité, leur contexte et un accès direct à la consultation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quartierDocumentsPreview.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Un contact direct pour participer ou poser une question"
          description="La participation se construit aussi avec un point de contact humain, clair et facilement accèssible."
        />
        <VQContactPanel contact={quartierContact} />
      </section>
    </section>
  );
}
