import type { LucideIcon } from "lucide-react";
import { CalendarDays, CheckCircle2, Clock3, MapPin, Sparkles, Building2, Users } from "lucide-react";

export type FetonsPrillySummaryItem = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type FetonsPrillyHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const fetonsPrillyMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Loisirs", href: "/loisirs" },
    { label: "Fetons Prilly" },
  ],
  hero: {
    eyebrow: "Evenement communal",
    title: "Fetons Prilly",
    description:
      "Le grand rendez-vous populaire du début d'été à Prilly, pense comme une fête communale conviviale, familiale et tres ancrée dans la vie locale.",
    intro:
      "L'edition 2026 aura lieu les 19 et 20 juin. Cette page donne déjà les repères essentiels pour réserver les dates, comprendre l'esprit de la manifestation et préparer une participation avec stand.",
    status: "Edition 2026 en preparation",
  },
};

export const fetonsPrillySummary: FetonsPrillySummaryItem[] = [
  {
    title: "Dates",
    value: "19-20 juin 2026",
    description: "Deux jours de fête communale juste avant les vacances scolaires d'été.",
    icon: CalendarDays,
  },
  {
    title: "Lieu",
    value: "Centre de Prilly",
    description: "Le centre de Prilly accueille les animations et les stands.",
    icon: MapPin,
  },
  {
    title: "Accès",
    value: "Ouvert à toutes et tous",
    description: "La manifestation s'adresse aux familles, aux habitant-e-s, aux écoles et aux sociétés locales.",
    icon: CheckCircle2,
  },
  {
    title: "Participation",
    value: "Stands sur candidature",
    description: "Les exposant-e-s et partenaires potentiels peuvent déjà annoncer leur interet à la commune.",
    icon: Building2,
  },
];

export const fetonsPrillyHighlights: FetonsPrillyHighlight[] = [
  {
    title: "Participation locale",
    description:
      "La manifestation met en avant les ecoles, les sociétés locales, les associations et la vie de quartier dans une ambiance simple et rassembleuse.",
    icon: Users,
  },
  {
    title: "Programme",
    description:
      "Cortège, animations, restauration et espaces conviviaux donnent du rythme à la fête sans perdre son ancrage communal.",
    icon: Sparkles,
  },
  {
    title: "Acc?s",
    description:
      "L'évènement est pensé pour circuler librement, se retrouver facilement et profiter du centre-ville en début d'été.",
    icon: CheckCircle2,
  },
  {
    title: "Des stands pour faire vivre la fête",
    description:
      "Les espaces de restauration, de présentation et d'animation renforcent la diversite de la manifestation et la visibilite des acteurs locaux.",
    icon: Building2,
  },
  {
    title: "Une dynamique qui se preparé en amont",
    description:
      "Avant la publication du programme détaillé, les informations pratiques permettent déjà d'anticiper sa venue ou sa participation.",
    icon: Clock3,
  },
];

export const fetonsPrillyFutureInfo = {
  title: "Le programme détaillé arrivera plus tard",
  description:
    "Les horaires précis, les animations et les informations logistiques seront publiés à l'approche de l'évènement. En attendant, les dates, l'esprit de la manifestation et le contact pour les stands sont déjà disponibles.",
};

export const fetonsPrillyStandApplication = {
  title: "Candidater pour tenir un stand en 2026",
  description:
    "Les demandes de stand peuvent être adressees au greffe, qui centralise les prises de contact liees a l'organisation de la manifestation.",
  points: [
    "Présenter en quelques lignes votre structure, votre activité et le type de stand souhaite.",
    "Préciser si votre presence concerne de la restauration, une animation, une presentation associative ou une autre proposition.",
    "Anticiper la demande pour faciliter l'organisation generale et la répartition des espaces.",
    "Utiliser l'adresse de contact officielle afin que la commune puisse revenir vers vous avec les suites utiles.",
  ],
};

export const fetonsPrillyContact = {
  email: "greffe@prilly.ch",
};

export const fetonsPrillyClosing = {
  title: "?dition 2026",
  description:
    "La prochaine édition se construit avec les services communaux, les écoles, les associations et les habitant-e-s. La page évoluera au fil des prochains mois pour complèter le programme, les animations et les informations pratiques.",
};
