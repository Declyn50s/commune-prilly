import { useEffect, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Pagination } from "@/components/ui/Pagination";
import {
  FeaturedNewsCard,
  NewsCard,
  NewsFilters,
  NewsHero,
  NewsSidebar,
} from "@/features/actualites/components";
import {
  newsArchiveMonths,
  newsArchiveYears,
  newsArticles,
  newsCategories,
  type NewsCategory,
} from "@/features/actualites/data";

const ITEMS_PER_PAGE = 6;

function matchesArchiveMonth(date: string, archiveMonth: string) {
  if (archiveMonth === "Tous les mois") {
    return true;
  }

  const formatted = new Intl.DateTimeFormat("fr-CH", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));

  return formatted.toLowerCase() === archiveMonth.toLowerCase();
}

export default function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<NewsCategory>("Toutes");
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [archiveYear, setArchiveYear] = useState("Toutes");
  const [archiveMonth, setArchiveMonth] = useState("Tous les mois");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return newsArticles
      .filter((article) => (category === "Toutes" ? true : article.category === category))
      .filter((article) => (archiveYear === "Toutes" ? true : article.date.startsWith(archiveYear)))
      .filter((article) => matchesArchiveMonth(article.date, archiveMonth))
      .filter((article) => {
        if (!normalizedQuery) {
          return true;
        }

        const haystack = `${article.title} ${article.summary} ${article.category}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) =>
        sortOrder === "recent" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date),
      );
  }, [archiveMonth, archiveYear, category, query, sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, category, sortOrder, archiveYear, archiveMonth]);

  const featuredArticle = filteredArticles.find((article) => article.featured) ?? filteredArticles[0];
  const otherArticles = filteredArticles.filter((article) => article.id !== featuredArticle?.id);
  const totalPages = Math.ceil(otherArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = otherArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="container space-y-8 py-8 md:space-y-10 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Actualites" }]} />
      <NewsHero />

      <NewsFilters
        query={query}
        category={category}
        sortOrder={sortOrder}
        archiveYear={archiveYear}
        archiveMonth={archiveMonth}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onSortOrderChange={setSortOrder}
        onArchiveYearChange={setArchiveYear}
        onArchiveMonthChange={setArchiveMonth}
        categories={newsCategories}
        archiveYears={newsArchiveYears}
        archiveMonths={newsArchiveMonths}
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <div className="space-y-8">
          {featuredArticle ? <FeaturedNewsCard article={featuredArticle} /> : null}

          <section className="space-y-5">
            <div className="flex items-center justify-between gap-4 border-b border-black/8 pb-3">
              <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal">Dernières publications</h2>
              <p className="text-sm text-prilly-coal/64">{filteredArticles.length} publication(s)</p>
            </div>

            {paginatedArticles.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {paginatedArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-black/8 bg-white p-6 text-sm leading-6 text-prilly-coal/72">
                Aucune actualite ne correspond aux criteres selectionnes.
              </div>
            )}

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </section>
        </div>

        <NewsSidebar categories={newsCategories} archiveYears={newsArchiveYears} />
      </div>
    </section>
  );
}
