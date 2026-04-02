import { Building2, Clock3, ShieldCheck, TramFront } from "lucide-react";
import type { HeroConfig, ServiceLink } from "@/features/mobilite/data/types";
import { mobilityRoutes } from "@/features/mobilite/data/hub";

export const publicTransportHero: HeroConfig = {
  eyebrow: "Mobilite collective",
  title: "Transports publics",
  description: "Train, bus, LEB et connexions regionales depuis Prilly.",
  imageSrc: "/images/mobilite/prilly-malley.jpg",
  imageAlt: "Gare de Prilly-Malley",
  ctas: [
    { label: "Voir les services", href: "#services" },
    { label: "Cartes journalieres CFF", href: mobilityRoutes.cffDayPass },
  ],
};

export const publicTransportServices: ServiceLink[] = [
  {
    title: "CFF et gare de Prilly-Malley",
    description: "La gare de Prilly-Malley donne  à la commune une desserte regionale forte et un accès direct aux horaires et tarifs CFF.",
    href: "https://www.cff.ch/fr",
    label: "Ouvrir CFF",
    eyebrow: "Train",
  },
  {
    title: "TL et Mobilis",
    description: "Les bus desservent les quartiers de Prilly et la gare toute l'annee. Mobilis permet d'utiliser plusieurs reseaux avec un titre integre.",
    href: "https://www.t-l.ch/",
    label: "Voir TL",
    eyebrow: "Bus et reseau integre",
  },
  {
    title: "LEB",
    description: "La ligne LEB traverse Prilly et dispose de plusieurs arrets sur le territoire communal.",
    href: "https://leb.ch/",
    label: "Voir le LEB",
    eyebrow: "Ligne regionale",
  },
];

export const publicTransportDocs: ServiceLink[] = [
  { title: "Horaires CFF", description: "Verifier les correspondances, horaires en temps reel et tarifs.", href: "https://www.cff.ch/fr/horaire.html", label: "Voir les horaires", eyebrow: "Pratique" },
  { title: "TL et info trafic", description: "Consulter le reseau TL, les plans et les perturbations en cours.", href: "https://www.t-l.ch/", label: "Ouvrir TL", eyebrow: "Pratique" },
  { title: "LEB - billets et horaires", description: "Accéder aux informations officielles du LEB et aux liens utiles exploites avec les tl.", href: "https://leb.ch/voyages/billets-et-abonnements/billets/", label: "Voir le LEB", eyebrow: "Pratique" },
];

export const publicTransportAxes = [
  {
    title: "Mieux connecter Prilly",
    description: "La desserte combine gare, bus et LEB pour relier Lausanne, Renens, Pully, Bussigny et les communes voisines.",
    icon: TramFront,
  },
  {
    title: "accèssibilite renforcee",
    description: "Les interfaces de transport recentes visent une meilleure lisibilite et des usages plus fluides pour des profils tres divers.",
    icon: ShieldCheck,
  },
  {
    title: "Frequences et complementarites",
    description: "L'interet de la rubrique est de montrer les complementarites entre train, bus, LEB, Mobilis et solutions de dernier kilometre.",
    icon: Clock3,
  },
  {
    title: "Noeud Prilly-Malley",
    description: "La gare joue un role structurant dans la mobilite locale et regionale, aussi bien pour le quotidien que pour les loisirs.",
    icon: Building2,
  },
];
