import { useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  CategoryFilterBar,
  ClubDirectoryCard,
  DirectorySearchBar,
  DocumentCard,
  SportsPageHero,
} from "@/features/sports-loisirs/components";
import {
  localClubCategories,
  localClubs,
  sportsDocumentLinks,
} from "@/features/sports-loisirs/data";

export default function LocalClubsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredClubs = localClubs.filter((club) => {
    const categoryMatches = activeCategory === "all" || club.category === activeCategory;
    const queryMatches =
      normalizedQuery.length === 0 ||
      club.name.toLowerCase().includes(normalizedQuery) ||
      club.blurb.toLowerCase().includes(normalizedQuery) ||
      club.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery));

    return categoryMatches && queryMatches;
  });

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Loisirs", href: "/loisirs" },
          { label: "Sports et loisirs", href: "/loisirs/sports-et-loisirs" },
          { label: "Sociétés locales" },
        ]}
      />

      <SportsPageHero
        eyebrow="Clubs et associations"
        title="Sociétés locales"
        description="Clubs, associations sportives, formations musicales et structures locales a retrouver dans une interface plus exploitable qu'une simple liste brute."
        imageSrc="/images/sports-loisirs/sports-divers.jpg"
        imageAlt="Illustration de sports varies"
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Annuaire des societes"
          title="Rechercher un club ou une association"
          description="La base reste evolutive, mais elle est déjà plus utile: recherche, filtres par type et cartes lisibles avec les liens utiles quand ils existent."
        />
        <div className="space-y-4 rounded-[2rem] border border-black/6 bg-white p-5 shadow-soft md:p-6">
          <DirectorySearchBar value={query} onChange={setQuery} />
          <CategoryFilterBar categories={localClubCategories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredClubs.map((club) => (
            <ClubDirectoryCard key={club.id} club={club} />
          ))}
        </div>
        {!filteredClubs.length ? (
          <div className="rounded-[1.5rem] border border-dashed border-black/12 bg-white px-5 py-8 text-sm text-prilly-coal/68 shadow-soft">
            Aucun résultat avec ce filtre. Essayez un autre mot-cle ou revenez a "Toutes".
          </div>
        ) : null}
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents utiles"
          title="Base officielle et dossier source"
          description="Le PDF fusionne et la page officielle restent disponibles pour completer les informations ou aller plus loin."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {sportsDocumentLinks.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
