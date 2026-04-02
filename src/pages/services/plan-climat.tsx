import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { ParentSectionLinks } from "@/features/environnement/components";
import { environmentParentLinks } from "@/features/environnement/data";
import {
  ActionHighlightCard,
  ClimateContactPanel,
  ClimateDocumentCard,
  ClimateGoalCard,
  ClimateKeyFigureCard,
  ClimateThemeCard,
  ParticipationSection,
  TrajectorySection,
} from "@/features/plan-climat/components";
import {
  climateActionHighlights,
  climateContact,
  climateDocuments,
  climateHero,
  climateKeyFigures,
  climateParticipation,
  climateTargets2030,
  climateThemes,
  climateTrajectory,
  climateWhyAct,
} from "@/features/plan-climat/data";

export default function ClimatePlanPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Plan climat" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/plan-climat" />

      <PageHero
        eyebrow="Vision et action publique"
        title={climateHero.title}
        description={climateHero.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-soft">
              <img
                src={climateHero.bannerSrc}
                alt="Banniere Plan climat Prilly"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">{climateHero.body}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={climateHero.ctas[0].href}
                className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {climateHero.ctas[0].label}
              </a>
              <a
                href={climateHero.ctas[1].href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal"
              >
                {climateHero.ctas[1].label}
              </a>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Pourquoi passer a l'action ?"
          title="Une lecture simple de l'enjeu climatique"
          description="La page explique pourquoi la commune agit, en reliant climat, sante, qualite de vie, biodiversite et resilience."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {climateWhyAct.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <ActionHighlightCard text={`${item.title} - ${item.description}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="La strategie de Prilly en un coup d'oeil"
          title="Deux volets, une gouvernance"
          description="Le Plan climat porte la vision de la Municipalite et s'appuie sur le bilan carbone, le diagnostic de vulnerabilite et les outils sectoriels existants."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <ClimateThemeCard title="Reduction des emissions de GES" items={climateThemes.reduction} />
          <ClimateThemeCard title="Adaptation aux changements climatiques" items={climateThemes.adaptation} />
        </div>
        <ClimateThemeCard
          title={climateThemes.governance}
          items={["Organisation", "Financement", "Coordination transversale"]}
          tone="dark"
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Trajectoire climatique"
          title="Des cibles 2030 et 2050 clairement assumées"
          description="Le plan climat de premiere generation est concu comme une strategie iterative, mise a jour par legislature."
        />
        <TrajectorySection {...climateTrajectory} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Les chiffres cles"
          title="Le contexte climatique en quelques repères"
          description="Les données cles sont regroupees pour donner un apercu rapide de la situation climatique et de l'ampleur du plan."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {climateKeyFigures.map((item) => (
            <ClimateKeyFigureCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section id="objectifs" className="space-y-8">
        <SectionHeader
          eyebrow="Objectifs 2030"
          title="Des cibles concrètes et visibles"
          description="Les objectifs sont organises en tuiles pour permettre une lecture rapide selon les grands domaines d'action."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {climateTargets2030.map((item, index) => (
            <Reveal key={item.title + item.target} delay={index * 0.03}>
              <ClimateGoalCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Participation citoyenne"
          title="Une strategie enrichie par les habitants"
          description="La participation n'est pas un appendice: elle a veritablement renforce le plan d'actions communal."
        />
        <ParticipationSection {...climateParticipation} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Actions phares"
          title="Des actions concrètes, pas un plan abstrait"
          description="Quelques exemples issus du depliant et du rapport illustrent la traduction operationnelle du plan."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {climateActionHighlights.map((item) => (
            <ActionHighlightCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents a consulter"
          title="Les supports cles du Plan climat"
          description="Le document directeur, le depliant et le rapport citoyen sont presentes avec contexte et utilite."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {climateDocuments.map((item) => (
            <ClimateDocumentCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <ClimateContactPanel {...climateContact} />
    </section>
  );
}
