import type { RouteDefinition } from "@/features/site/data/navigation";
import { livingThemes } from "@/data/mock";

export const vivreRoutes: RouteDefinition[] = [
  {
    slug: "sinstaller",
    path: "/vivre/sinstaller",
    title: "S’installer à Prilly",
    description: "Le parcours d’installation, les documents et les premières démarches.",
  },
  {
    slug: "bienvenue",
    path: "/vivre/bienvenue",
    title: "Bienvenue",
    description: "Les repères utiles pour prendre rapidement vos marques à Prilly.",
  },
  {
    slug: "logement",
    path: "/vivre/logement",
    title: "Logement",
    description: "Aides, accompagnement, sous-location et contacts utiles liés au logement.",
  },
  {
    slug: "enfance-ecoles",
    path: "/vivre/enfance-ecoles",
    title: "Enfance & écoles",
    description: "Les informations pratiques pour la scolarité et les familles.",
  },
  {
    slug: "jeunesse",
    path: "/vivre/jeunesse",
    title: "Jeunesse",
    description: "Activités, accompagnement et vie locale pour les jeunes.",
  },
  {
    slug: "seniors",
    path: "/vivre/seniors",
    title: "Seniors",
    description: "Services, mobilité et solutions de proximité pour rester autonome.",
  },
  {
    slug: "integration",
    path: "/vivre/integration",
    title: "Intégration",
    description: "Ressources d’intégration, accompagnement et accès aux services.",
  },
  {
    slug: "vie-quartier",
    path: "/vivre/vie-quartier",
    title: "Vie de quartier",
    description: "La proximité, les événements et les dynamiques locales de Prilly.",
  },
  {
    slug: "annuaire",
    path: "/vivre/annuaire",
    title: "Annuaire communal",
    description: "Trouver rapidement le bon service, le bon contact ou le bon interlocuteur.",
  },
];

export const vivreHighlights = livingThemes.map((item) => item.title);
