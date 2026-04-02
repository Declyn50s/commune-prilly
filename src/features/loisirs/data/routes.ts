import type { RouteDefinition } from "@/features/site/data/navigation";

export const loisirsRoutes: RouteDefinition[] = [
  { slug: "culture", path: "/loisirs/culture", title: "Culture", description: "La vie culturelle et les propositions de proximité." },
  { slug: "agenda-culturel", path: "/loisirs/agenda-culturel", title: "Agenda culturel", description: "Les rendez-vous culturels à venir à Prilly." },
  { slug: "bibliotheque", path: "/loisirs/bibliotheque", title: "Bibliothèque", description: "Horaires, services et ressources de la bibliothèque." },
  { slug: "subventions", path: "/loisirs/subventions", title: "Subventions", description: "Les soutiens possibles aux projets culturels et associatifs." },
  { slug: "manifestations", path: "/loisirs/manifestations", title: "Manifestations", description: "Les événements et manifestations accueillis par la commune." },
  { slug: "sports-et-loisirs", path: "/loisirs/sports-et-loisirs", title: "Sports et loisirs", description: "La porte d'entrée pour les activités, piscines, équipements et sociétés locales." },
  { slug: "equipements-sportifs", path: "/loisirs/sports-et-loisirs/equipements-sportifs", title: "Équipements sportifs", description: "Les lieux, terrains et installations disponibles." },
  { slug: "activites-gratuites", path: "/loisirs/sports-et-loisirs/activites-gratuites", title: "Activités gratuites", description: "Des activités gratuites pour différents publics et différents moments de l'année." },
  { slug: "centre-de-loisirs", path: "/loisirs/sports-et-loisirs/centre-de-loisirs", title: "Centre de loisirs Carrefour-Sud", description: "Le lieu jeunesse dédié avec ses activités, ses horaires et ses contacts." },
  { slug: "évènements", path: "/loisirs/évènements", title: "Événements", description: "Les rendez-vous forts de la vie locale." },
  { slug: "fetons-prilly", path: "/loisirs/fetons-prilly", title: "Fêtons Prilly", description: "L'événement emblématique de la commune." },
  { slug: "marche-noel", path: "/loisirs/marche-noel", title: "Marché de Noël", description: "Le rendez-vous hivernal et ses animations." },
  { slug: "societes-locales", path: "/loisirs/sports-et-loisirs/societes-locales", title: "Sociétés locales", description: "Découvrir et rejoindre le tissu associatif local." },
];
