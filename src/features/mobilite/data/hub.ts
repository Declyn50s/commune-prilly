import {
  BadgeInfo,
  Building2,
  CalendarDays,
  CheckCircle2,
  Recycle,
  TramFront,
  Trees,
  Users,
} from "lucide-react";
import type { HeroConfig, MobilityMode, PageLink } from "@/features/mobilite/data/types";

export const mobilityRoutes = {
  hub: "/services/mobilite",
  walking: "/services/mobilite/pietons-et-loisirs",
  bikes: "/services/mobilite/velos",
  publicTransport: "/services/mobilite/transports-publics",
  cffDayPass: "/services/mobilite/cartes-journalieres-cff",
  parking: "/services/mobilite/stationnement",
  ridesharing: "/services/mobilite/covoiturage-et-transports-de-personnes",
};

export const mobilityHubHero: HeroConfig = {
  eyebrow: "Se deplacer à Prilly",
  title: "Mobilite",
  description:
    "Marcher, pedaler, prendre le train, stationner ou partager un trajet : retrouvez ici toutes les informations utiles pour se deplacer à Prilly.",
  imageSrc: "/images/mobilite/prilly-malley.jpg",
  imageAlt: "Quais de la gare de Prilly-Malley",
  ctas: [
    { label: "Voir les transports publics", href: mobilityRoutes.publicTransport },
    { label: "Découvrir la mobilite douce", href: mobilityRoutes.walking },
    { label: "Gerer mon stationnement", href: mobilityRoutes.parking },
  ],
};

export const mobilityQuickaccèss: PageLink[] = [
  {
    title: "Pietons et loisirs",
    description: "Balades, chasse aux tresors, Urban Trail et parcours de proximite a pied.",
    href: mobilityRoutes.walking,
    eyebrow: "Mobilite douce",
  },
  {
    title: "Velos",
    description: "Subventions, services partages, ressources cyclistes et loisirs a velo.",
    href: mobilityRoutes.bikes,
    eyebrow: "Mobilite douce",
  },
  {
    title: "Transports publics",
    description: "CFF, TL, Mobilis, LEB et liaisons regionales depuis Prilly.",
    href: mobilityRoutes.publicTransport,
    eyebrow: "Quotidien",
  },
  {
    title: "Cartes journalieres CFF",
    description: "Comprendre le prix, l'achat, la disponibilite et les remboursements.",
    href: mobilityRoutes.cffDayPass,
    eyebrow: "Service pratique",
  },
  {
    title: "Stationnement",
    description: "Places, autorisations, paiement mobile, zones et demarches.",
    href: mobilityRoutes.parking,
    eyebrow: "Voiture",
  },
  {
    title: "Covoiturage et transports de personnes",
    description: "Alternatives partagees, solidaires ou benevoles pour se deplacer autrement.",
    href: mobilityRoutes.ridesharing,
    eyebrow: "Alternatives",
  },
];

export const mobilityModes: MobilityMode[] = [
  {
    title: "A pied",
    description: "Pour les deplacements courts, les liaisons de quartier et les parcours loisirs.",
    points: ["Cheminements de proximite", "Parcours familiaux", "Loisirs accèssibles sans voiture"],
    href: mobilityRoutes.walking,
    icon: Trees,
  },
  {
    title: "A velo",
    description: "Pour gagner du temps sur les trajets locaux et profiter des services partages.",
    points: ["Subventions communales", "PubliBike et carvelo2go", "Cartes et ressources cyclistes"],
    href: mobilityRoutes.bikes,
    icon: Recycle,
  },
  {
    title: "En transports publics",
    description: "Pour combiner gare, bus, LEB et reseau regional depuis Prilly.",
    points: ["Gare de Prilly-Malley", "TL et Mobilis", "LEB et connexions vers Lausanne"],
    href: mobilityRoutes.publicTransport,
    icon: TramFront,
  },
  {
    title: "En voiture / stationnement",
    description: "Pour les besoins qui demandent un vehicule et une lecture claire des regles locales.",
    points: ["Location de places", "Autorisations de stationnement", "Paiement mobile"],
    href: mobilityRoutes.parking,
    icon: Building2,
  },
  {
    title: "Mobilite partagée / solidaire",
    description: "Pour mutualiser un trajet ou accéder a des transports d'accompagnement.",
    points: ["Covoiturage", "Transport medical ou social", "Benevolat et accompagnement"],
    href: mobilityRoutes.ridesharing,
    icon: Users,
  },
];

export const malleyHighlight = {
  title: "Nouveau passage nord-sud a Malley",
  description:
    "Le passage inferieur des Coulisses et le Trait d'union renforcent la continuite pietonne et cyclable entre le nord et le sud du secteur de Malley.",
  body:
    "Ce nouvel amenagement est mis en avant comme un repere local fort: il facilite les liaisons quotidiennes, soutient la mobilite douce et donne un visage contemporain aux deplacements de proximite.",
  imageSrc: "/images/mobilite/trait-dunion-malley.jpg",
  imageAlt: "Le Trait d'union a Malley",
  cta: { label: "Explorer la mobilite douce", href: mobilityRoutes.walking },
};

export const transportModeIntro = [
  { title: "A pied", description: "Pour les liaisons courtes, les ecoles, les commerces et les loisirs de proximite.", icon: Trees },
  { title: "A velo", description: "Pour les trajets locaux rapides et la combinaison avec les transports publics.", icon: Recycle },
  { title: "En transports publics", description: "Pour traverser la commune et rejoindre facilement le reseau regional.", icon: TramFront },
  { title: "En voiture / stationnement", description: "Pour les besoins specifiques qui demandent des regles claires et des services pratiques.", icon: Building2 },
  { title: "En mobilite partagee", description: "Pour partager un trajet, accéder à un service ou se faire accompagner.", icon: Users },
  { title: "Pour agir tout de suite", description: "Chaque bloc de la rubrique est pense pour donner un CTA clair, sans vous faire ouvrir dix pages.", icon: BadgeInfo },
];

export const mobilityFactCards = [
  { title: "Quotidien", value: "Gare + bus + LEB", description: "Une rubrique organisée par usage reel pour choisir vite le bon mode.", icon: CheckCircle2 },
  { title: "Mobilite douce", value: "Marche et velo", description: "Balades, loisirs, services partages et parcours de proximite.", icon: Trees },
  { title: "Services pratiques", value: "CFF et stationnement", description: "Des pages claires pour acheter, demander ou comprendre une regle.", icon: CalendarDays },
  { title: "Alternatives", value: "Partage et solidarite", description: "Covoiturage, accompagnement et solutions quand la voiture n'est pas la seule option.", icon: Users },
];
