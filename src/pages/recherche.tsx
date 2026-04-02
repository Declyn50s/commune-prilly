import { Search } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { searchSite } from "@/features/search/data";

const suggestedQueries = [
  "démarches",
  "attestation",
  "mobilité",
  "biblioth\u00e8que",
  "finances",
  "seniors",
] as const;

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = useMemo(() => searchSite(query), [query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();

    if (trimmed) {
      setSearchParams({ q: trimmed });
      return;
    }

    setSearchParams({});
  };

  return (
    <section className="container space-y-8 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Recherche" }]} />

      <div className="overflow-hidden rounded-[2rem] bg-prilly-coal bg-mesh px-6 py-8 text-white shadow-float md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-yellow">Recherche</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Trouver rapidement la bonne page
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
          Recherchez une démarche, un service, une rubrique ou une information institutionnelle.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-4 text-prilly-coal">
              <Search className="h-5 w-5 text-prilly-red" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex. attestation de domicile, seniors, eau potable"
                aria-label="Rechercher sur le site"
                className="w-full border-0 bg-transparent p-0 text-base outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-prilly-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-prilly-red/90"
            >
              Rechercher
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {suggestedQueries.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 transition hover:bg-white/16"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </form>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-prilly-coal">Résultats</h2>
          {query.trim() ? (
            <p className="text-sm text-prilly-coal/68">{results.length} résultat{results.length > 1 ? "s" : ""}</p>
          ) : null}
        </div>

        {!query.trim() ? (
          <div className="surface p-6 text-sm leading-7 text-prilly-coal/72">
            Saisissez un mot-clé pour afficher immédiatement les pages correspondantes.
          </div>
        ) : null}

        {query.trim() && !results.length ? (
          <div className="surface p-6">
            <h3 className="text-lg font-semibold text-prilly-coal">Aucun résultat</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
              Aucun contenu ne correspond \u00e0 votre recherche. Essayez un terme plus simple ou consultez une rubrique principale.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/demarches" className="rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white">
                Voir les démarches
              </Link>
              <Link
                to="/contact/services-communaux"
                className="rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-prilly-coal"
              >
                Contacter un service
              </Link>
            </div>
          </div>
        ) : null}

        <div className="grid gap-4">
          {results.map((result) => (
            <Link
              key={result.href}
              to={result.href}
              className="surface block p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-float"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{result.section}</p>
              <h3 className="mt-2 text-xl font-semibold text-prilly-coal">{result.title}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{result.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
