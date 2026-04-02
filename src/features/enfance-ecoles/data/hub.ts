import {
  BadgeInfo,
  CalendarDays,
  FileCheck,
  Home,
  MapPinned,
  Search,
  ShieldCheck,
  Trees,
  Users,
} from "lucide-react";
import type { EnfanceAgeGroup, EnfanceContact, EnfanceLinkCard } from "@/features/enfance-ecoles/types";

export const enfanceRootPath = "/vivre/enfance-ecoles";

export const enfanceHubPrimaryLinks: EnfanceLinkCard[] = [
  {
    slug: "accueil-prescolaire",
    title: "Accueil préscolaire",
    description: "Centres de vie enfantine, jardin d’enfants et accueil familial.",
    href: `${enfanceRootPath}/accueil-prescolaire`,
    accent: "green",
  },
  {
    slug: "accueil-parascolaire",
    title: "Accueil parascolaire",
    description: "Solutions autour de l’école selon le niveau scolaire.",
    href: `${enfanceRootPath}/accueil-parascolaire`,
    accent: "red",
  },
  {
    slug: "ecoles",
    title: "Écoles & scolarité",
    description: "Établissements, repères scolaires et services liés à l’école.",
    href: `${enfanceRootPath}/ecoles`,
    accent: "coal",
  },
  {
    slug: "menus",
    title: "Repas & menus",
    description: "Menus par structure, politique alimentaire et consultation rapide.",
    href: `${enfanceRootPath}/menus`,
    accent: "yellow",
  },
  {
    slug: "devoirs-surveilles",
    title: "Devoirs surveillés",
    description: "Organisation, tarifs, calendrier et inscription.",
    href: `${enfanceRootPath}/devoirs-surveilles`,
    accent: "green",
  },
  {
    slug: "vacances-activites",
    title: "Vacances & activités",
    description: "Colonies, passeport vacances, centre de loisirs et temps forts.",
    href: `${enfanceRootPath}/vacances-activites`,
    accent: "red",
  },
];

export const enfanceHubSecondaryLinks: EnfanceLinkCard[] = [
  {
    slug: "via-escola",
    title: "Via Escola",
    description: "Ateliers et soutien pour les enfants allophones et leurs parents.",
    href: `${enfanceRootPath}/via-escola`,
    accent: "yellow",
  },
  {
    slug: "accueil-familial",
    title: "Accueil familial de jour",
    description: "Une solution flexible en milieu familial.",
    href: `${enfanceRootPath}/accueil-familial`,
    accent: "green",
  },
  {
    slug: "la-fringale",
    title: "La Fringale",
    description: "Repas et accueil de midi pour les élèves de 3P à 6P.",
    href: `${enfanceRootPath}/la-fringale`,
    accent: "yellow",
  },
  {
    slug: "refectoire-scolaire",
    title: "Réfectoire scolaire",
    description: "Repas de midi pour les élèves de 7P à 11S.",
    href: `${enfanceRootPath}/refectoire-scolaire`,
    accent: "coal",
  },
  {
    slug: "centre-loisirs",
    title: "Centre de loisirs",
    description: "Carrefour-Sud, activités régulières et projets jeunes.",
    href: `${enfanceRootPath}/centre-loisirs`,
    accent: "red",
  },
  {
    slug: "conseillere-ecole-famille",
    title: "Conseillère école-famille",
    description: "Soutien, écoute et accompagnement en toute confidentialité.",
    href: `${enfanceRootPath}/conseillere-ecole-famille`,
    accent: "green",
  },
];

export const enfanceAgeGroups: EnfanceAgeGroup[] = [
  {
    id: "0-4",
    label: "0–4 ans",
    summary: "Petite enfance, accueil collectif, accueil familial et jardin d’enfants.",
    serviceSlugs: ["accueil-prescolaire", "centres-vie-enfantine", "jardin-enfants-amadou", "accueil-familial"],
  },
  {
    id: "1p-2p",
    label: "1P–2P",
    summary: "Entrée dans la scolarité, accueil parascolaire et repères école-famille.",
    serviceSlugs: ["ecoles", "accueil-parascolaire", "via-escola", "conseillere-ecole-famille"],
  },
  {
    id: "3p-6p",
    label: "3P–6P",
    summary: "Repas, accueil de midi, devoirs surveillés et organisation du quotidien scolaire.",
    serviceSlugs: ["la-fringale", "devoirs-surveilles", "menus", "accueil-parascolaire"],
  },
  {
    id: "7p-8p",
    label: "7P–8P",
    summary: "Accueil de midi, activités, études accompagnées et réfectoire.",
    serviceSlugs: ["accueil-7p-8p", "refectoire-scolaire", "menus"],
  },
  {
    id: "9s-11s",
    label: "9S–11S",
    summary: "Réfectoire scolaire, autonomie et informations de scolarité secondaire.",
    serviceSlugs: ["refectoire-scolaire", "ecoles", "centre-loisirs"],
  },
  {
    id: "12-18",
    label: "12–18 ans",
    summary: "Centre de loisirs, projets jeunes, activités et vacances.",
    serviceSlugs: ["centre-loisirs", "vacances-activites", "passeport-vacances", "colonies-vacances"],
  },
];

export const enfancePrimaryContact: EnfanceContact = {
  title: "Service de l’enfance",
  role: "Point d’entrée principal pour les familles",
  phone: "021 622 74 10",
  email: "enfance@prilly.ch",
  address: "Route de Cossonay 40, 1008 Prilly",
  hours: ["Lu–Je 08:00–12:00 / 13:30–17:00", "Ve 08:00–12:00"],
  note: "Le service vous oriente vers la bonne structure selon l’âge de l’enfant et votre besoin.",
};

export const enfanceHubHighlights = [
  { title: "Petite enfance", icon: Home, text: "Avant l’école, comparez rapidement accueil collectif, jardin d’enfants et accueil familial." },
  { title: "Scolarité", icon: ShieldCheck, text: "Repérez l’offre adaptée selon la classe de votre enfant." },
  { title: "Repas & midi", icon: MapPinned, text: "Retrouvez menus, réfectoires et solutions de pause de midi." },
  { title: "Devoirs", icon: FileCheck, text: "Horaires, tarifs et inscription aux dispositifs d’accompagnement." },
  { title: "Vacances", icon: Trees, text: "Colonies, passeport vacances et activités de loisirs." },
  { title: "Accompagnement", icon: BadgeInfo, text: "Via Escola, conseillère école-famille et relais pour les parents." },
];

export const enfanceHubUtilityLinks = [
  { title: "Via Escola", icon: Users, href: `${enfanceRootPath}/via-escola` },
  { title: "Menus", icon: CalendarDays, href: `${enfanceRootPath}/menus` },
  { title: "Écoles", icon: Search, href: `${enfanceRootPath}/ecoles` },
];
