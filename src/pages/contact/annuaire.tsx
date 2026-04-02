import { useEffect, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { Pagination } from "@/components/ui/Pagination";
import {
  communalDirectoryData,
  directoryAlphabet,
  directoryCategories,
  directoryShortcutLabels,
  directorySearchSuggestions,
  emergencyContacts,
} from "@/features/contact-directory/communalDirectoryData";
import {
  DirectoryAlphabetNav,
  DirectoryAlphabetSidebar,
  DirectoryEmergencyPanel,
  DirectoryEmptyState,
  DirectoryFilters,
  DirectoryHero,
  DirectorySearch,
  DirectorySection,
} from "@/features/contact-directory/components";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const ITEMS_PER_PAGE = 12;

export default function CommunalDirectoryPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const shortcutServices = useMemo(
    () =>
      directoryShortcutLabels
        .map((label) => communalDirectoryData.find((service) => service.name === label))
        .filter((service): service is NonNullable<typeof service> => Boolean(service)),
    [],
  );

  const filteredServices = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return [...communalDirectoryData]
      .filter((service) => {
        const matchesCategory = activeCategory === "all" || service.category === activeCategory;
        const haystack = normalize(
          [
            service.name,
            service.email ?? "",
            service.phone ?? "",
            service.category,
            service.description,
            service.address,
            ...service.hours,
            ...service.keywords,
          ].join(" "),
        );
        const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);

        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }, [activeCategory, query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const groupedServices = useMemo(() => {
    return paginatedServices.reduce<Record<string, typeof paginatedServices>>((accumulator, service) => {
      const letter = service.anchorLetter;
      accumulator[letter] ??= [];
      accumulator[letter].push(service);
      return accumulator;
    }, {});
  }, [paginatedServices]);

  const availableLetters = Object.keys(groupedServices).sort((a, b) => a.localeCompare(b, "fr"));

  const resolveRelatedServiceName = (id?: string) =>
    id ? communalDirectoryData.find((item) => item.id === id)?.name : undefined;

  const handleShortcut = (service: (typeof communalDirectoryData)[number]) => {
    setQuery(service.name);
    setActiveCategory("all");
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document.getElementById("directory-search-block")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <section className="container space-y-10 py-8 md:space-y-12 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Annuaire communal" },
        ]}
      />

      <DirectoryHero shortcuts={shortcutServices} onShortcut={handleShortcut} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div className="space-y-10 md:space-y-12">
          <div id="recherche" className="scroll-mt-32">
            <div id="directory-search-block" className="sticky top-20 z-20 space-y-4">
              <DirectorySearch value={query} onChange={setQuery} onClear={() => setQuery("")} />
              <div className="rounded-[1.75rem] border border-black/8 bg-white p-4 shadow-soft md:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  {directorySearchSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setQuery(suggestion)}
                      className="rounded-full border border-black/8 bg-prilly-soft/60 px-3 py-1.5 text-sm text-prilly-coal transition hover:border-[#0c5f87]/20 hover:text-[#0c5f87]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section id="filtres" className="space-y-6 scroll-mt-32">
            <SectionHeader
              eyebrow="Filtres"
              title="Affiner l'annuaire en quelques secondes"
              description="La recherche et les categories se combinent pour isoler rapidement un service, un contact ou un type de demande."
            />
            <DirectoryFilters categories={directoryCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
          </section>

          <section id="alphabet" className="space-y-6 scroll-mt-32 lg:hidden">
            <SectionHeader
              eyebrow="Navigation alphabetique"
              title="Un repere secondaire pour parcourir l'annuaire"
              description="La recherche reste le point d'entrée principal. L'alphabet sert surtout a accelerer le scroll quand on connait deja le nom du service."
            />
            <DirectoryAlphabetNav letters={directoryAlphabet} availableLetters={availableLetters} />
          </section>

          <section id="resultats" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Resultats"
              title="Les services communaux, tries et lisibles"
              description="Chaque carte affiche le strict utile: coordonnees, horaires, actions rapides et acces a la page correspondante."
              action={
                <span className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal shadow-soft">
                  {filteredServices.length} resultat(s)
                </span>
              }
            />

            {filteredServices.length ? (
              <div className="space-y-10">
                {availableLetters.map((letter, index) => (
                  <Reveal key={letter} delay={index * 0.02}>
                    <DirectorySection
                      letter={letter}
                      services={groupedServices[letter]}
                      searchQuery={query}
                      resolveRelatedServiceName={resolveRelatedServiceName}
                    />
                  </Reveal>
                ))}

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            ) : (
              <DirectoryEmptyState
                reset={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
              />
            )}
          </section>

          <section id="urgences" className="scroll-mt-32">
            <DirectoryEmergencyPanel items={emergencyContacts} />
          </section>
        </div>

        <DirectoryAlphabetSidebar letters={directoryAlphabet} availableLetters={availableLetters} />
      </div>
    </section>
  );
}
