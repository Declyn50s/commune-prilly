import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  ActivityPosterCard,
  ContactPanel,
  DownloadCard,
  NoticeCard,
  PricingCard,
  RelatedPagesSection,
  SchoolInfoCard,
  ServiceCard,
  StepsList,
  StickyMobileAction,
  TimelineDates,
} from "@/features/enfance-ecoles/components";
import { getEnfancePage, getEnfanceRelatedPages } from "@/features/enfance-ecoles/data";

const toneMap = {
  soft: "warm" as const,
  school: "light" as const,
  youth: "warm" as const,
  practical: "light" as const,
};

export default function EnfanceEcolesDetailPage() {
  const { pageSlug = "" } = useParams();
  const page = getEnfancePage(pageSlug);

  if (!page) {
    return (
      <section className="container py-10">
        <div className="surface p-6">
          <h1 className="text-3xl font-semibold text-prilly-coal">Page non trouvée</h1>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">
            Cette entrée de la rubrique Enfance & écoles n’est pas encore disponible.
          </p>
          <Link to="/vivre/enfance-ecoles" className="mt-4 inline-flex text-sm font-semibold text-prilly-red">
            Retourner au hub
          </Link>
        </div>
      </section>
    );
  }

  const relatedPages = getEnfanceRelatedPages(page.relatedSlugs ?? []);

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Enfance & écoles", href: "/vivre/enfance-ecoles" },
          { label: page.title },
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        tone={toneMap[page.tone]}
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
                En bref
              </p>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/75">{page.intro}</p>
            </div>
            {page.heroCtas?.length ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {page.heroCtas.map((cta, index) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                      index === 0
                        ? "bg-prilly-red text-white"
                        : "border border-black/8 bg-white text-prilly-coal"
                    }`}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        }
      />

      {page.quickFacts?.length ? (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.quickFacts.map((item) => (
            <SchoolInfoCard key={item.label} item={item} />
          ))}
        </section>
      ) : null}

      {page.notices?.length ? (
        <section className="grid gap-4 md:grid-cols-2">
          {page.notices.map((item) => (
            <NoticeCard key={item.title} item={item} />
          ))}
        </section>
      ) : null}

      {page.childLinks?.length ? (
        <section id="structures" className="space-y-8">
          <SectionHeader
            eyebrow="Accès dédiés"
            title="Choisir la bonne entrée"
            description="Chaque page ou document est replacé dans son bon contexte pour éviter les erreurs de parcours."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.childLinks.map((item) => (
              <ServiceCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      ) : null}

      {page.serviceCards?.length ? (
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Structures"
            title="Repérer rapidement l’offre disponible"
            description="Les structures, lieux ou services liés sont présentés sous forme de cartes pour une lecture plus immédiate."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.serviceCards.map((item) => (
              <ServiceCard key={item.title} service={item} />
            ))}
          </div>
        </section>
      ) : null}

      {page.steps?.length ? (
        <section id="demarches" className="space-y-8">
          <SectionHeader
            eyebrow="Étapes"
            title="Comprendre la démarche sans friction"
            description="Les étapes sont formulées simplement pour aider les familles à savoir quoi faire, dans quel ordre."
          />
          <StepsList items={page.steps} />
        </section>
      ) : null}

      {page.sections?.length ? (
        <section className="grid gap-4 lg:grid-cols-2">
          {page.sections.map((section) => (
            <div key={section.title} className="surface p-5">
              <h2 className="text-2xl font-semibold text-prilly-coal">{section.title}</h2>
              {section.description ? (
                <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{section.description}</p>
              ) : null}
              <ul className="mt-4 space-y-3 text-sm leading-6 text-prilly-coal/74">
                {section.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-prilly-soft px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : null}

      {page.timeline?.length ? (
        <section id="dates" className="space-y-8">
          <SectionHeader
            eyebrow="Dates clés"
            title="Les repères à ne pas manquer"
            description="Les échéances et périodes importantes sont regroupées dans un format très rapide à scanner."
          />
          <TimelineDates items={page.timeline} />
        </section>
      ) : null}

      {page.pricing?.length ? (
        <section id="tarifs" className="space-y-8">
          <SectionHeader
            eyebrow="Tarifs"
            title="Comprendre le coût du service"
            description="Les éléments tarifaires sont placés dans des cartes simples et lisibles, sans tableau complexe."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.pricing.map((item) => (
              <PricingCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : null}

      {page.downloads?.length ? (
        <section id="documents" className="space-y-8">
          <SectionHeader
            eyebrow="Téléchargements utiles"
            title="Les bons documents, au bon endroit"
            description="Formulaires, règlements, calendriers et affiches sont intégrés ici avec leur utilité explicite."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.downloads.map((item) => (
              <DownloadCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : null}

      {page.posters?.length ? (
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Affiches & visuels"
            title="Un support plus vivant quand c’est utile"
            description="Les affiches et visuels sont utilisés avec mesure pour rendre la page plus incarnée, sans surcharger l’interface."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.posters.map((item) => (
              <ActivityPosterCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : null}

      {page.contacts?.length ? (
        <section id="contacts" className="space-y-8">
          <SectionHeader
            eyebrow="Contacts"
            title="Contacter le bon interlocuteur rapidement"
            description="Les points de contact utiles sont regroupés au même endroit pour éviter les recherches dispersées."
          />
          <ContactPanel contacts={page.contacts} />
        </section>
      ) : null}

      <RelatedPagesSection items={relatedPages} />

      {page.heroCtas?.[0] ? <StickyMobileAction label={page.heroCtas[0].label} href={page.heroCtas[0].href} /> : null}
    </section>
  );
}
