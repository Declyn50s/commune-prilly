import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice } from "@/features/dechets/components";
import {
  IndustrialContactPanel,
  IndustrialDocumentCard,
  IndustrialNoticeCard,
  KeyFigureCard,
  QualityMetricCard,
} from "@/features/services-industriels/components";
import {
  waterContact,
  waterDocuments,
  waterKeyFigures,
  waterMeaningForResidents,
  waterOriginData,
  waterQualityMetrics,
} from "@/features/services-industriels/data";

export default function WaterPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Services industriels", href: "/services/services-industriels" }, { label: "Eau potable" }]} />

      <PageHero eyebrow="Distribution et qualité" title="Eau potable" description="Une eau de très bonne qualité, contrôlée et distribuée à Prilly." tone="light" />

      <section className="space-y-8">
        <SectionHeader eyebrow="En bref" title="Des chiffres clés faciles à lire" description="Les résultats 2025 sont résumés en quelques repères simples, avant d'entrer dans les détails techniques." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {waterKeyFigures.map((item) => (
            <KeyFigureCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-5">
          <SectionHeader eyebrow="D'où vient l'eau de Prilly ?" title="Origine et traitement" description="La provenance de l'eau est expliquée avec des mots simples pour mieux comprendre le service rendu au quotidien." />
          <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
            <p className="text-sm leading-6 text-prilly-coal/74">{waterOriginData.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {waterOriginData.reservoirs.map((item) => (
                <span key={item} className="rounded-full border border-black/8 bg-prilly-soft px-3 py-2 text-sm text-prilly-coal/74">{item}</span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/74">{waterOriginData.treatment}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {waterOriginData.shares.map((item) => (
            <KeyFigureCard key={item.label} label={item.label} value={item.value} note="Part indicative des ressources approvisionnant Prilly" />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Qualité de l'eau" title="Des résultats techniques rendus compréhensibles" description="Microbiologie, physico-chimie et micropolluants sont présentés de façon pédagogique, sans noyer l'information." />
        <div className="space-y-5">
          <QualityMetricCard title="Microbiologie" intro={waterQualityMetrics.microbiology.intro} items={waterQualityMetrics.microbiology.items} imageSrc={waterQualityMetrics.microbiology.imageSrc} />
          <QualityMetricCard title="Physico-chimie" intro={waterQualityMetrics.chemistry.intro} items={waterQualityMetrics.chemistry.items} imageSrc={waterQualityMetrics.chemistry.imageSrc} />
          <AlertNotice title="Micropolluants" tone="green">
            <div className="space-y-3">
              <p>{waterQualityMetrics.micropollutants.intro}</p>
              <ul className="space-y-2">
                {waterQualityMetrics.micropollutants.points.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AlertNotice>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Pour les habitants" title="Ce que cela signifie concrètement" description="Les données techniques sont traduites en informations utiles pour le quotidien." />
        <div className="grid gap-4 md:grid-cols-3">
          {waterMeaningForResidents.map((item) => (
            <IndustrialNoticeCard key={item} title="Repère utile" description={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Documents à consulter" title="Les bons fichiers, avec contexte" description="Chaque document est présenté avec son utilité pour faciliter la consultation." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {waterDocuments.map((item) => (
            <IndustrialDocumentCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <IndustrialContactPanel {...waterContact} />
    </section>
  );
}
