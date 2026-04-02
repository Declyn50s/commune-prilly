import type { RouteDefinition } from "@/features/site/data/navigation";

export const contactRoutes: RouteDefinition[] = [
  {
    slug: "annuaire",
    path: "/contact/annuaire",
    title: "Annuaire communal",
    description: "Trouver rapidement le bon service, ses coordonnées et ses horaires.",
  },
  {
    slug: "general",
    path: "/contact/general",
    title: "Contact général",
    description: "Le point d'entrée principal pour joindre la commune.",
  },
  {
    slug: "services-communaux",
    path: "/contact/services-communaux",
    title: "Services communaux",
    description: "Trouver le bon service selon votre besoin.",
  },
  {
    slug: "horaires",
    path: "/contact/horaires",
    title: "Horaires",
    description: "Les horaires d'accueil des services et guichets.",
  },
  {
    slug: "urgences",
    path: "/contact/urgences",
    title: "Urgences",
    description: "Les numéros prioritaires et les contacts en urgence.",
  },
  {
    slug: "securite-prevention",
    path: "/contact/securite-prevention",
    title: "Sécurité et prévention",
    description: "Les numéros utiles, la prévention chaleur et les repères essentiels de sécurité.",
  },
  {
    slug: "plan-ville",
    path: "/contact/plan-ville",
    title: "Plan de la ville",
    description: "Repères d'accès, localisation et mobilité vers les services.",
  },
];
