import { useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { ApplicationSteps, JobsContactPanel, RelatedDocumentsSection } from "@/features/jobs/components";
import { applicationProcess, hrContact, jobOffers } from "@/features/jobs/data";

export default function JobOfferDetailPage() {
  const { offerSlug = "" } = useParams();
  const offer = jobOffers.find((item) => item.slug === offerSlug) ?? jobOffers[0];

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ville", href: "/ville" },
          { label: "Offres d'emploi", href: "/ville/offres-emploi" },
          { label: offer.title },
        ]}
      />

      <PageHero
        eyebrow={offer.service}
        title={offer.title}
        description={offer.summary}
        tone="light"
        aside={
          <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Informations clés</p>
            <div className="mt-4 space-y-3 text-sm text-prilly-coal/76">
              <p>Taux d'activité: {offer.activity}</p>
              <p>Type de poste: {offer.contract}</p>
              <p>Entrée en fonction: {offer.entry}</p>
              <p>Délai de postulation: {offer.deadline}</p>
            </div>
            <a href={offer.applyHref} className="mt-5 inline-flex rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white">
              Postuler
            </a>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="Le poste en bref" title="Ce qu'il faut retenir" description="La fiche détail permet de comprendre rapidement le rôle, les missions principales et le profil recherché." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-semibold text-prilly-coal">Missions principales</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-prilly-coal/76">
              {offer.missions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-semibold text-prilly-coal">Profil recherché</h2>
            <p className="mt-5 text-sm leading-6 text-prilly-coal/76">{offer.profile}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <ApplicationSteps items={applicationProcess} />
        <JobsContactPanel email={hrContact.email} />
      </section>

      <RelatedDocumentsSection
        items={[
          {
            title: offer.title,
            description: "PDF original de l'annonce complète",
            href: offer.pdfHref,
          },
        ]}
      />
    </section>
  );
}
