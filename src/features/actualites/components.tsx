import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import type { NewsArticle, NewsCategory } from "@/features/actualites/data";
import { formatNewsDate } from "@/features/actualites/data";

type NewsFiltersProps = {
  query: string;
  category: NewsCategory;
  sortOrder: "recent" | "oldest";
  archiveYear: string;
  archiveMonth: string;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: NewsCategory) => void;
  onSortOrderChange: (value: "recent" | "oldest") => void;
  onArchiveYearChange: (value: string) => void;
  onArchiveMonthChange: (value: string) => void;
  categories: readonly NewsCategory[];
  archiveYears: readonly string[];
  archiveMonths: readonly string[];
};

function NewsMeta({ category, date }: { category: string; date: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-prilly-coal/64">
      <span className="font-medium text-prilly-coal">{category}</span>
      <span aria-hidden="true" className="text-prilly-coal/36">
        ·
      </span>
      <time dateTime={date}>{formatNewsDate(date)}</time>
    </div>
  );
}

export function NewsHero() {
  return (
    <header className="space-y-3 border-b border-black/8 pb-6">
      <h1 className="text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">Actualites</h1>
      <p className="max-w-3xl text-base leading-7 text-prilly-coal/72">
        Retrouvez les informations, communications et avis publies par la Commune de Prilly.
      </p>
    </header>
  );
}

export function NewsFilters({
  query,
  category,
  sortOrder,
  archiveYear,
  archiveMonth,
  onQueryChange,
  onCategoryChange,
  onSortOrderChange,
  onArchiveYearChange,
  onArchiveMonthChange,
  categories,
  archiveYears,
  archiveMonths,
}: NewsFiltersProps) {
  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_repeat(4,minmax(0,0.7fr))]">
        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Recherche</span>
          <div className="flex items-center gap-3 rounded-[1rem] border border-black/10 bg-[#fbfaf7] px-4 py-3">
            <Search className="h-4 w-4 text-prilly-coal/55" />
            <Input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Rechercher une actualite"
              className="h-auto rounded-none border-0 bg-transparent px-0 py-0 shadow-none"
            />
          </div>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Categorie</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value as NewsCategory)}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Tri</span>
          <select
            value={sortOrder}
            onChange={(event) => onSortOrderChange(event.target.value as "recent" | "oldest")}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            <option value="recent">Plus recentes</option>
            <option value="oldest">Plus anciennes</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Annee</span>
          <select
            value={archiveYear}
            onChange={(event) => onArchiveYearChange(event.target.value)}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            <option value="Toutes">Toutes</option>
            {archiveYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Mois</span>
          <select
            value={archiveMonth}
            onChange={(event) => onArchiveMonthChange(event.target.value)}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            {archiveMonths.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}

export function FeaturedNewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="rounded-[1.7rem] border border-black/8 bg-white p-6 md:p-8">
      <p className="text-sm font-medium text-prilly-coal/64">Information principale</p>
      <div className="mt-4 space-y-4">
        <NewsMeta category={article.category} date={article.date} />
        <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal md:text-3xl">{article.title}</h2>
        <p className="max-w-3xl text-base leading-7 text-prilly-coal/74">{article.summary}</p>
        <Link
          to={`/actualites/${article.slug}`}
          className="focus-ring inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/24 hover:text-prilly-red"
        >
          Lire l'actualite
        </Link>
      </div>
    </article>
  );
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-black/8 bg-white p-5">
      <NewsMeta category={article.category} date={article.date} />
      <h3 className="mt-3 text-xl font-semibold leading-tight text-prilly-coal">{article.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{article.summary}</p>
      <Link
        to={`/actualites/${article.slug}`}
        className="focus-ring mt-auto inline-flex pt-5 text-sm font-semibold text-prilly-red"
      >
        Lire l'actualite
      </Link>
    </article>
  );
}

export function NewsSidebar({
  categories,
  archiveYears,
}: {
  categories: readonly NewsCategory[];
  archiveYears: readonly string[];
}) {
  return (
    <aside className="space-y-5">
      <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
        <h2 className="text-lg font-semibold text-prilly-coal">Avis officiels</h2>
        <div className="mt-4 space-y-3 text-sm leading-6 text-prilly-coal/72">
          <p>Les communications administratives et avis pratiques sont publies dans cette rubrique.</p>
          <p>Les informations urgentes ou temporaires peuvent faire l'objet d'une publication distincte sur la page d'accueil.</p>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
        <h2 className="text-lg font-semibold text-prilly-coal">Categories</h2>
        <ul className="mt-4 space-y-2 text-sm text-prilly-coal/72">
          {categories.filter((item) => item !== "Toutes").map((item) => (
            <li key={item} className="rounded-[0.9rem] border border-black/6 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
        <h2 className="text-lg font-semibold text-prilly-coal">Archives</h2>
        <ul className="mt-4 space-y-2 text-sm text-prilly-coal/72">
          {archiveYears.map((item) => (
            <li key={item} className="rounded-[0.9rem] border border-black/6 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
