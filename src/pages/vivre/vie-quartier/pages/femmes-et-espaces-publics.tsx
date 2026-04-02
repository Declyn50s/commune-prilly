import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  DocumentCard,
  MethodCard,
  ResultInsightCard,
  TimelineSection,
  VQNoticeCard,
} from "@/features/vie-quartier/components";
import {
  publicSpaceGenderDocuments,
  publicSpaceGenderMethods,
  publicSpaceGenderResults,
  publicSpaceGenderTimeline,
} from "@/features/vie-quartier/data";

export default function FemmesEspacesPublicsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Vie de quartier", href: "/vivre/vie-quartier" },
          { label: "Femmes et espaces publics" },
        ]}
      />

      <PageHero
        eyebrow="Démarche participative"
        title="Femmes et espaces publics"
        description="Une démarche participative pour mieux comprendre l’usage des espaces publics à Prilly et favoriser un aménagement plus inclusif."
        tone="warm"
        aside={
          <VQNoticeCard
            title="Pourquoi cette démarche ?"
            description="Elle part du constat que l’usage des espaces publics peut être vécu différemment selon le genre et qu’une perspective de genre peut enrichir l’aménagement urbain."
          />
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Historique de la démarche"
          title="Deux temps complémentaires pour faire émerger les constats"
          description="Une première phase d’enquête préalable a préparé le terrain, puis des marches exploratoires ont été menées en 2024 avec différents publics."
        />
        <TimelineSection items={publicSpaceGenderTimeline} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comment les marches ont été menées"
          title="Une méthode pensée pour recueillir des expériences situées"
          description="Les parcours, le cadre d’échange et les ateliers complémentaires ont été adaptés pour favoriser une expression libre, précise et inclusive."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {publicSpaceGenderMethods.map((item) => (
            <MethodCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Résultats"
          title="Des enseignements pour mieux comprendre les usages et ressentis"
          description="La restitution publique de novembre 2024 a permis de partager les principaux constats avec les participantes et la population."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {publicSpaceGenderResults.map((item) => (
            <ResultInsightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents et restitution"
          title="Consulter les supports liés à la démarche"
          description="Lorsque des documents sont disponibles, ils sont présentés ici avec leur contexte de production."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {publicSpaceGenderDocuments.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
