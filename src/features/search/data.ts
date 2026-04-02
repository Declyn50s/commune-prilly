import { demarchesRoutes } from "@/features/demarches/data/routes";
import { loisirsRoutes } from "@/features/loisirs/data/routes";
import { servicesRoutes } from "@/features/services/data/routes";
import { villeRoutes } from "@/features/ville/data/routes";
import { vivreRoutes } from "@/features/vivre/data/routes";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  section: string;
  keywords: string[];
};

const routeGroups = [
  { section: "Démarches", routes: demarchesRoutes },
  { section: "Vivre", routes: vivreRoutes },
  { section: "Services", routes: servicesRoutes },
  { section: "Loisirs", routes: loisirsRoutes },
  { section: "Ville", routes: villeRoutes },
] as const;

export const searchEntries: SearchEntry[] = routeGroups.flatMap(({ section, routes }) =>
  routes.map((route) => ({
    title: route.title,
    description: route.description,
    href: route.path,
    section,
    keywords: [section, route.title, route.description, route.slug, route.legacyKey].filter(Boolean) as string[],
  })),
);

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function searchSite(query: string) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return searchEntries
    .map((entry) => {
      const haystack = normalizeSearchText(
        [entry.title, entry.description, entry.section, ...entry.keywords].join(" "),
      );

      const matchesAllTerms = terms.every((term) => haystack.includes(term));
      if (!matchesAllTerms) {
        return null;
      }

      const startsWithTitle = normalizeSearchText(entry.title).startsWith(normalizedQuery);
      const startsWithSection = normalizeSearchText(entry.section).startsWith(normalizedQuery);
      const score =
        (startsWithTitle ? 4 : 0) +
        (startsWithSection ? 2 : 0) +
        terms.reduce((count, term) => count + (haystack.includes(term) ? 1 : 0), 0);

      return { entry, score };
    })
    .filter((item): item is { entry: SearchEntry; score: number } => item !== null)
    .sort((left, right) => right.score - left.score || left.entry.title.localeCompare(right.entry.title, "fr"))
    .map(({ entry }) => entry);
}
