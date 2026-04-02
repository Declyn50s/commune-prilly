import { CalendarDays, CheckCircle2, Trees } from "lucide-react";
import type { DocumentItem, HeroConfig, LeisureRoute } from "@/features/mobilite/data/types";

export const walkingHero: HeroConfig = {
  eyebrow: "Mobilite douce",
  title: "Piétons et loisirs",
  description: "Balades, parcours et découvertes à pied dans Prilly et l'Ouest lausannois.",
  imageSrc: "/images/mobilite/trait-dunion-malley.jpg",
  imageAlt: "Passage du Trait d'union a Malley",
  ctas: [
    { label: "Voir les parcours", href: "#parcours" },
    { label: "accès rapides", href: "#ressources" },
  ],
};

export const walkingIntro = [
  {
    title: "Marcher à l'echelle locale",
    description: "Pour les trajets du quotidien, Prilly se parcourt aussi à pied entre quartiers, services et gares.",
    icon: Trees,
  },
  {
    title: "Des loisirs sans voiture",
    description: "La rubrique rassemble les parcours ludiques et sportifs pour faire de la marche une expérience de découverte.",
    icon: CalendarDays,
  },
  {
    title: "Une offre familiale",
    description: "Certains parcours sont accèssibles en poussette ou adaptes à une sortie en famille sur une courte duree.",
    icon: CheckCircle2,
  },
];

export const walkingLeisureRoutes: LeisureRoute[] = [
  {
    title: "Balades dans l'Ouest lausannois",
    description: "Des idées de promenade pour relier Prilly aux communes voisines et marcher à l'echelle du territoire.",
    level: "Tous niveaux",
    highlights: ["Boucles de proximite", "Sorties de quartier", "Approche découverte"],
  },
  {
    title: "Course a Travers Prilly",
    description: "Une entrée sportive et locale pour Découvrir Prilly autrement, entre évènement et parcours de territoire.",
    level: "évènement",
    highlights: ["Dimension locale", "Ancrage de quartier", "Usage sportif et convivial"],
  },
  {
    title: "Chasse aux Tresors à Prilly",
    description: "Un parcours familial d'environ une heure, au départ de Castelmont, avec 10 postes et une phrase mystere a reconstituer.",
    duration: "Environ 1 heure",
    level: "Familial",
    highlights: ["Départ à Castelmont", "accèssible en poussette", "10 postes d'observation"],
    href: "/docs/mobilite/pietons-loisirs/fascicule_Chasse_aux_tresors_17_SITE.pdf",
  },
  {
    title: "Urban Trail à Prilly",
    description: "Cinq parcours avec plusieurs niveaux de difficulte pour Découvrir la commune par la course et la marche active.",
    level: "5 parcours",
    highlights: ["Plusieurs difficultes", "Traces et plans a consulter", "Approche loisir et sportive"],
    href: "/docs/mobilite/pietons-loisirs/TRX-21_traces_urban_trail_full_V2.pdf",
  },
];

export const walkingDocuments: DocumentItem[] = [
  {
    title: "Fascicule Chasse aux Tresors",
    description: "Le parcours familial complet avec les 10 postes, les consignes et la phrase mystere.",
    href: "/docs/mobilite/pietons-loisirs/fascicule_Chasse_aux_tresors_17_SITE.pdf",
    label: "Ouvrir le fascicule",
    category: "Famille",
  },
  {
    title: "Urban Trail - traces completes",
    description: "Document principal pour visualiser l'ensemble des parcours Urban Trail à Prilly.",
    href: "/docs/mobilite/pietons-loisirs/TRX-21_traces_urban_trail_full_V2.pdf",
    label: "Voir les parcours",
    category: "Sport",
  },
  {
    title: "Urban Trail - parcours 5",
    description: "Apercu utile d'un parcours spécifique pour donner une entrée concrète dans l'offre Urban Trail.",
    href: "/docs/mobilite/pietons-loisirs/Parcours_5.pdf",
    label: "Ouvrir le plan",
    category: "Plan",
  },
];
