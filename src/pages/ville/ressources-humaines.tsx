import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  ApplicationSteps,
  JobOfferCard,
} from "@/features/jobs/components";
import {
  applicationProcess,
  jobOffers,
} from "@/features/jobs/data";
import {
  EmployerContactPanel,
  EmployerHero,
  EmployerInfoBlock,
  EmployerSectionCard,
  EmployerStatCard,
  EmployerValueCard,
} from "@/features/travailler-prilly/components";
import {
  apprenticeshipSection,
  collaboratorCommitments,
  developmentSection,
  employerContact,
  employerHero,
  employerMission,
  employerStats,
  employerValues,
  recruitmentSection,
  workConditions,
} from "@/features/travailler-prilly/data";

function mapOfferTags(offer: (typeof jobOffers)[number]) {
  const tags = [];
  if (offer.category.includes("internship")) tags.push("Stage");
  if (offer.category.includes("full-time")) tags.push("Temps plein");
  if (offer.category.includes("part-time")) tags.push("Temps partiel");
  if (offer.category.includes("technical")) tags.push("Technique");
  if (offer.category.includes("projects")) tags.push("Administration / projets");
  return [...new Set(tags)];
}

export default function HumanResourcesPage() {
  const highlightedOffers = jobOffers.slice(0, 3);

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ville", href: "/ville" },
          { label: "Travailler  à la Ville de Prilly" },
        ]}
      />

      <EmployerHero
        eyebrow="Ressources humaines"
        title={employerHero.title}
        description={employerHero.description}
        ctas={employerHero.ctas}
        highlight={employerHero.highlight}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Chiffres cles"
          title="La Ville de Prilly comme employeur"
          description="Quelques repères concrets pour comprendre rapidement l'ampleur de la Ville de Prilly comme employeur."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {employerStats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.03}>
              <EmployerStatCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Mission"
          title="Mission du service des ressources humaines"
          description="Le service des Ressources humaines accompagne le personnel communal et soutient les services de l'administration."
        />
        <EmployerInfoBlock title="Ce que porte la fonction RH à Prilly" items={employerMission} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Valeurs"
          title="Principes et engagements"
          description="La page traduit la charte et les engagements RH en repères simples, lisibles et crédibles pour les futures candidatures."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {employerValues.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <EmployerValueCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Recrutement"
          title="Offres d'emploi et recrutement"
          description="La Ville cherche a rendre ses postes plus lisibles, plus accèssibles et plus coherents avec ses valeurs de transparence et d'equite."
        />
        <EmployerSectionCard
          eyebrow="Recrutement"
          title={recruitmentSection.title}
          description={recruitmentSection.intro}
          items={recruitmentSection.points}
          cta={{ label: "Voir toutes les offres", href: "/ville/offres-emploi" }}
        />
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {highlightedOffers.map((offer, index) => (
            <Reveal key={offer.slug} delay={index * 0.04}>
              <JobOfferCard
                slug={offer.slug}
                title={offer.title}
                service={offer.service}
                activity={offer.activity}
                contract={offer.contract}
                entry={offer.entry}
                deadline={offer.deadline}
                summary={offer.summary}
                pdfHref={offer.pdfHref}
                applyHref={offer.applyHref}
                tags={mapOfferTags(offer)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Apprentissage"
          title="Apprentissage"
          description="Places d'apprentissage et informations utiles."
        />
        <EmployerSectionCard
          eyebrow="Apprentissage"
          title={apprenticeshipSection.title}
          description={apprenticeshipSection.intro}
          items={apprenticeshipSection.trades}
          cta={{ label: "Consulter les opportunites", href: "/ville/offres-emploi" }}
        />
        <EmployerInfoBlock title="Ce qui fait la difference" items={[apprenticeshipSection.note]} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Developpement / formation"
          title="Formation et d?veloppement"
          description="Formation continue, VAE, ?volution et mobilit? interne."
        />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <EmployerInfoBlock title={developmentSection.title} items={developmentSection.points} />
          <ApplicationSteps items={applicationProcess} />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Conditions de travail"
          title="Conditions de travail"
          description="La promesse employeur repose aussi sur le quotidien des equipes, le cadre de management et l'attention  à la sante au travail."
        />
        <EmployerInfoBlock title="Conditions et environnement de travail" items={workConditions} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Engagements"
          title="Responsabilit?s et engagements"
          description="Attentes et responsabilit?s partag?es au sein de l'administration."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {collaboratorCommitments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <EmployerValueCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      <EmployerContactPanel
        title={employerContact.title}
        address={employerContact.address}
        email={employerContact.email}
        recruitmentEmail={employerContact.recruitmentEmail}
        phone={employerContact.phone}
        generalPhone={employerContact.generalPhone}
        charterHref={employerContact.charterHref}
      />
    </section>
  );
}
