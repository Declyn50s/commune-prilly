import type { HeroConfig, ServiceLink } from "@/features/mobilite/data/types";

export const ridesharingHero: HeroConfig = {
  eyebrow: "Solutions partagees",
  title: "Covoiturage et transports de personnes",
  description: "Des solutions partagees, solidaires ou benevoles pour se deplacer autrement.",
  ctas: [
    { label: "Voir le covoiturage", href: "#covoiturage" },
    { label: "Voir les transports de personnes", href: "#transports-personnes" },
  ],
};

export const ridesharingResources: ServiceLink[] = [
  { title: "2em.ch", description: "Plateforme suisse de partage de trajets et de vehicules entre particuliers.", href: "https://www.2em.ch/?Itemid=122&lang=fr", label: "Ouvrir 2em.ch", eyebrow: "Covoiturage" },
  { title: "e-covoiturage.ch", description: "Plateforme gratuite pour organiser des trajets en commun en Suisse et en Europe.", href: "https://www.e-covoiturage.ch", label: "Ouvrir e-covoiturage.ch", eyebrow: "Covoiturage" },
];

export const peopleTransportServices: ServiceLink[] = [
  { title: "Transport medical", description: "Pour medecin, hopital, physiotherapie et autres rendez-vous de soins.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/transports-de-personnes", label: "Voir la page officielle", eyebrow: "Service benevole" },
  { title: "Transport social", description: "Pour des besoins du quotidien comme les courses, le coiffeur ou certains rendez-vous utiles.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/transports-de-personnes", label: "Voir la page officielle", eyebrow: "Service benevole" },
  { title: "Service de benevolat", description: "Faire appel à un service d'accompagnement et de transport selon sa situation.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/transports-de-personnes", label: "Voir les renseignements", eyebrow: "Accompagnement" },
  { title: "Devenir chauffeur benevole", description: "Une entrée claire pour les personnes souhaitant aider localement par la conduite et l'accompagnement.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/transports-de-personnes", label: "Voir les renseignements", eyebrow: "Engagement" },
];
