import { enfancePrescolairePages } from "@/features/enfance-ecoles/data/prescolaire";
import { enfanceScolairePages } from "@/features/enfance-ecoles/data/scolaire";
import { enfanceVacancesPages } from "@/features/enfance-ecoles/data/vacances";
import type { EnfancePageData } from "@/features/enfance-ecoles/types";
export {
  enfanceAgeGroups,
  enfanceHubHighlights,
  enfanceHubPrimaryLinks,
  enfanceHubSecondaryLinks,
  enfanceHubUtilityLinks,
  enfancePrimaryContact,
  enfanceRootPath,
} from "@/features/enfance-ecoles/data/hub";

export const enfancePages = [
  ...enfancePrescolairePages,
  ...enfanceScolairePages,
  ...enfanceVacancesPages,
];

export const enfancePageMap = new Map(enfancePages.map((page) => [page.slug, page]));

export function getEnfancePage(slug: string) {
  return enfancePageMap.get(slug);
}

export function getEnfanceRelatedPages(slugs: string[]) {
  return slugs
    .map((slug) => enfancePageMap.get(slug))
    .filter((page): page is EnfancePageData => Boolean(page));
}
