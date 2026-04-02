import { useEffect, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { Pagination } from "@/components/ui/Pagination";
import {
  ApplicationSteps,
  FilterChips,
  JobOfferCard,
  JobsContactPanel,
  RecruitmentHighlights,
  RelatedDocumentsSection,
} from "@/features/jobs/components";
import {
  applicationProcess,
  hrContact,
  jobCategories,
  jobOffers,
  recruitmentHighlights,
} from "@/features/jobs/data";

const ITEMS_PER_PAGE = 6;

function mapOfferTags(offer: (typeof jobOffers)[number]) {
  const tags = [];
  if (offer.category.includes("internship")) tags.push("Stage");
  if (offer.category.includes("full-time")) tags.push("Temps plein");
  if (offer.category.includes("part-time")) tags.push("Temps partiel");
  if (offer.category.includes("technical")) tags.push("Technique");
  if (offer.category.includes("projects")) tags.push("Administration / projets");
  return [...new Set(tags)];
}

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOffers = useMemo(() => {
    if (activeFilter === "all") return jobOffers;
    return jobOffers.filter((offer) => offer.category.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredOffers.length / ITEMS_PER_PAGE);
  const paginatedOffers = filteredOffers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ville", href: "/ville" },
          { label: "Offres d'emploi" },
        ]}
      />

      <PageHero
        eyebrow="Recrutement"
        title="Offres d'emploi"
        description="Decouvrez les postes actuellement ouverts au sein de la Ville de Prilly."
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Les offres sont presentees avec les informations cles: taux d'activite, service,
                delai, type de poste et mode de candidature.
              </p>
            </div>
            <a
              href="#postes"
              className="inline-flex rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white"
            >
              Voir les postes ouverts
            </a>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Pourquoi rejoindre la Ville de Prilly ?"
          title="Une page RH institutionnelle, mais vivante"
          description="Les elements ci-dessous traduisent l'esprit des annonces et rendent la page plus credible qu'une simple liste de PDF."
        />
        <RecruitmentHighlights items={recruitmentHighlights} />
      </section>

      <section id="postes" className="space-y-8">
        <SectionHeader
          eyebrow="Postes ouverts"
          title="Des opportunites lisibles en quelques secondes"
          description="Les cartes d'offres mettent en avant le poste, le taux, le service concerne et le delai de postulation sans obliger a ouvrir immediatement le PDF."
        />
        <FilterChips items={jobCategories} active={activeFilter} onChange={setActiveFilter} />
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {paginatedOffers.map((offer, index) => (
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
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <ApplicationSteps items={applicationProcess} />
        <JobsContactPanel email={hrContact.email} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Annonces completes"
          title="Telecharger les PDF si besoin"
          description="Les documents complets restent accessibles, mais la page donne deja l'essentiel sans imposer ce detour."
        />
        <RelatedDocumentsSection
          items={jobOffers.map((offer) => ({
            title: offer.title,
            description: `${offer.service} - delai ${offer.deadline}`,
            href: offer.pdfHref,
          }))}
        />
      </section>
    </section>
  );
}
