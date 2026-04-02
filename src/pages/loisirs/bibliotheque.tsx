import { useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import {
  LibraryActivitiesGrid,
  LibraryCollectionsTabs,
  LibraryContactCard,
  LibraryFeaturesGrid,
  LibraryHero,
  LibraryHoursCard,
  LibraryPracticalGrid,
  LibraryQuickLinks,
  LibrarySectionIntro,
  LibraryUsefulServicesGrid,
} from "@/features/bibliotheque/components";
import {
  libraryActivities,
  libraryCollections,
  libraryContact,
  libraryFeatures,
  libraryHero,
  libraryHours,
  libraryPracticalCards,
  libraryQuickLinks,
  libraryUsefulServices,
} from "@/features/bibliotheque/data";

export default function LibraryPage() {
  const [activeCollection, setActiveCollection] = useState(libraryCollections[0]?.id ?? "emprunter");

  return (
    <section className="container space-y-12 py-8 md:space-y-16 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Loisirs", href: "/loisirs" }, { label: "Bibliotheque communale" }]} />

      <LibraryHero
        title={libraryHero.title}
        description={libraryHero.description}
        badges={libraryHero.badges}
        logoSrc={libraryHero.logoSrc}
        logoAlt={libraryHero.logoAlt}
        ctas={libraryHero.ctas}
      />

      <section id="infos-pratiques" className="space-y-8 scroll-mt-28">
        <LibrarySectionIntro
          eyebrow="Infos pratiques essentielles"
          title="Tout ce qu'il faut savoir avant de venir"
          description="Les informations les plus demandées remontent tout de suite : adresse, contact, inscription gratuite et horaires lisibles en un coup d'oeil."
        />
        <LibraryPracticalGrid cards={libraryPracticalCards} />
        <LibraryHoursCard hours={libraryHours} />
      </section>

      <section className="space-y-8">
        <LibrarySectionIntro
          eyebrow="Usages"
          title="Ce que vous trouverez sur place"
          description="La bibliotheque n'est pas seulement un lieu de pret. C'est aussi un espace de travail, de decouverte, d'accompagnement et de vie culturelle."
        />
        <LibraryFeaturesGrid items={libraryFeatures} />
      </section>

      <section className="space-y-8">
        <LibrarySectionIntro
          eyebrow="Collections & ressources"
          title="Des collections pour tous les publics"
          description="Les contenus sont organises par grands usages pour aider a comprendre rapidement ce que l'on peut emprunter, consulter ou explorer."
        />
        <LibraryCollectionsTabs
          sections={libraryCollections}
          activeId={activeCollection}
          onChange={setActiveCollection}
        />
      </section>

      <section className="space-y-8">
        <LibrarySectionIntro
          eyebrow="Services utiles"
          title="Des services  à la population bien identifies"
          description="Les services les plus utiles sont séparés du reste pour être retrouves sans effort : portage, visites de classes, grainotheque et outils numeriques."
        />
        <LibraryUsefulServicesGrid items={libraryUsefulServices} />
      </section>

      <section className="space-y-8">
        <LibrarySectionIntro
          eyebrow="Vie de la bibliotheque"
          title="Une bibliotheque qui vit toute l'annee"
          description="Cette section est pensee pour donner envie des maintenant, tout en restant facile a enrichir plus tard avec de vraies actualités et un programme detaille."
        />
        <LibraryActivitiesGrid items={libraryActivities} />
        <div className="rounded-[1.75rem] border border-black/8 bg-gradient-to-br from-[#fff7ef] via-white to-[#f4eef8] p-6 shadow-soft md:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Suivre les animations et les actualités</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-prilly-coal/74">
            La page est prete a accueillir un futur flux d'animations, mais donne déjà une lecture chaleureuse et tangible de la vie du lieu.
          </p>
          <a href="https://biblio.prilly.ch/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
            Voir le programme / suivre les actualités
          </a>
        </div>
      </section>

      <section className="space-y-8">
        <LibrarySectionIntro
          eyebrow="accès directs & reseaux"
          title="Retrouver la bibliotheque en ligne"
          description="Les accès principaux sont presentes comme de vrais raccourcis utiles, pas comme des liens perdus en bas de page."
        />
        <LibraryQuickLinks items={libraryQuickLinks} />
      </section>

      <LibraryContactCard
        title={libraryContact.title}
        address={libraryContact.address}
        email={libraryContact.email}
        phone={libraryContact.phone}
        website={libraryContact.website}
        directionsHref={libraryContact.directionsHref}
      />
    </section>
  );
}
