import type {
  IntegrationDocument,
  ResourceItem,
  StatItem,
  TimelineActivity,
  WorshipPlace,
} from "@/features/integration/types";

export const bienvenueAdressesUtiles: ResourceItem[] = [
  {
    title: "Centre social protestant, permanence Info-Conseil Migration",
    description: "Information, conseil et orientation sur les questions liées à la migration et à l’installation.",
    address: "Lausanne",
    phone: "021 560 60 60",
    website: "www.csp.ch",
    href: "https://www.csp.ch",
  },
  {
    title: "Appartenances Vaud",
    description: "Soutien, écoute et accompagnement interculturel pour différents publics.",
    address: "Lausanne",
    phone: "021 341 12 50",
    website: "www.appartenances.ch",
    href: "https://www.appartenances.ch",
  },
  {
    title: "Association des familles du Quart Monde",
    description: "Association engagée auprès des familles avec des besoins de soutien et de solidarité.",
    address: "Lausanne",
    phone: "021 647 83 99",
    website: "www.quart-monde.ch",
    href: "https://www.quart-monde.ch",
  },
  {
    title: "Association des femmes solidaires sans frontières",
    description: "Espace de solidarité, d’écoute et de soutien pour les femmes et les familles.",
    address: "Région lausannoise",
    phone: "021 000 00 00",
    website: "www.afssf.ch",
    href: "https://www.afssf.ch",
  },
  {
    title: "Association PAIRES",
    description: "Accompagnement par et pour des personnes ayant un parcours migratoire, dans une logique de proximité et de confiance.",
    address: "Lausanne",
    phone: "021 000 00 01",
    website: "www.paires.ch",
    href: "https://www.paires.ch",
  },
  {
    title: "EVAM / Primo info asile",
    description: "Ressources et information utiles pour les personnes relevant du domaine de l’asile.",
    website: "www.evam.ch",
    href: "https://www.evam.ch",
  },
];

export const cisipDocuments: IntegrationDocument[] = [
  {
    title: "Charte de la politique d’intégration",
    description: "Le texte de référence qui formalise les principes d’intégration portés par la commune.",
    context: "Document cadre",
    href: "/docs/integration/charte-politique-integration.txt",
    meta: "Charte",
  },
  {
    title: "Règlement de la CISIP",
    description: "Le document qui précise le fonctionnement, le rôle et la composition de la commission.",
    context: "Base réglementaire",
    href: "/docs/integration/reglement-cisip.txt",
    meta: "Règlement",
  },
];

export const cisipActivities: TimelineActivity[] = [
  {
    year: "2021–2025",
    title: "Rapport de législature",
    description: "Une vue d’ensemble des activités, de la gouvernance et des priorités portées par la commission sur la durée.",
  },
  {
    year: "2025",
    title: "Rapport d’activités 2025",
    description: "Temps forts récents, consolidation des actions et poursuite des dynamiques interculturelles.",
  },
  {
    year: "2024",
    title: "Rapport d’activités 2024",
    description: "Balade des religions et des pains du monde, journées thématiques et actions citoyennes.",
  },
  {
    year: "2023",
    title: "Rapport d’activités 2023",
    description: "Festival des Menus Métissés, exposition Migration : Voix de Femmes et autres rendez-vous interculturels.",
  },
  {
    year: "2022",
    title: "Rapport d’activités 2022",
    description: "Conférences, rencontres et premiers temps forts récents de la commission.",
  },
];

export const cisipReports: IntegrationDocument[] = [
  {
    title: "Rapport de législature 2021–2025",
    description: "Document de référence pour relire la période et ses actions marquantes.",
    context: "Législature",
    href: "/docs/integration/rapport-legislature-2021-2025.txt",
    meta: "Rapport",
  },
  {
    title: "Rapport d’activités 2025",
    description: "Les temps forts et actions de la CISIP en 2025.",
    context: "Année 2025",
    href: "/docs/integration/rapport-cisip-2025.txt",
    meta: "Rapport",
  },
  {
    title: "Rapport d’activités 2024",
    description: "Les événements, rencontres et actions menés en 2024.",
    context: "Année 2024",
    href: "/docs/integration/rapport-cisip-2024.txt",
    meta: "Rapport",
  },
  {
    title: "Rapport d’activités 2023",
    description: "Temps forts et projets interculturels de l’année 2023.",
    context: "Année 2023",
    href: "/docs/integration/rapport-cisip-2023.txt",
    meta: "Rapport",
  },
  {
    title: "Rapport d’activités 2022",
    description: "Les bases et activités repérées pour l’année 2022.",
    context: "Année 2022",
    href: "/docs/integration/rapport-cisip-2022.txt",
    meta: "Rapport",
  },
];

export const interculturalActivities: TimelineActivity[] = [
  {
    year: "2025",
    title: "Ensemble pour Prilly",
    description: "Une dynamique qui valorise les rencontres, le dialogue et la participation citoyenne.",
  },
  {
    year: "2024",
    title: "Balade des religions et des pains du monde",
    description: "Un format qui fait dialoguer découverte culturelle, spiritualité et convivialité.",
  },
  {
    year: "2024",
    title: "Cinquantenaire de la Révolution des Œillets",
    description: "Un temps fort de mémoire, de transmission et de reconnaissance culturelle.",
  },
  {
    year: "2023",
    title: "Migration : Voix de Femmes",
    description: "Une exposition et une programmation qui rendent visibles des parcours et des récits de vie.",
  },
  {
    year: "2023",
    title: "Festival des Menus Métissés",
    description: "La diversité culturelle se vit aussi à travers la cuisine, les rencontres et la convivialité.",
  },
];

export const religionsStats: StatItem[] = [
  {
    label: "Population totale",
    value: "env. 13’198",
    detail: "Population communale estimée en 2025.",
  },
  {
    label: "Habitant·es d’origine étrangère",
    value: "env. 6’052",
    detail: "Une part importante de la population contribue à la diversité prillérane.",
  },
  {
    label: "Nationalités représentées",
    value: "env. 120",
    detail: "La commune accueille une grande diversité de parcours, de langues et de cultures.",
  },
  {
    label: "Principales nationalités",
    value: "Portugal, Italie, France, Espagne, Kosovo",
    detail: "Exemples parmi les nationalités les plus représentées.",
  },
];

export const worshipPlaces: WorshipPlace[] = [
  {
    title: "Paroisse protestante de St-Etienne",
    description: "Une présence protestante historique et active dans la commune.",
    address: "Prilly",
  },
  {
    title: "Paroisse catholique du Bon Pasteur",
    description: "Une communauté catholique ancrée dans la vie locale.",
    address: "Prilly",
  },
  {
    title: "Complexe culturel des Musulmans de Lausanne",
    description: "Un lieu de référence proche de Prilly pour une partie de la population musulmane.",
    address: "Région lausannoise",
  },
  {
    title: "Temple hindou Ganesh Mandir",
    description: "Un lieu de culte qui témoigne de la diversité religieuse de la région.",
    address: "Région lausannoise",
  },
];

export const religionLinks: ResourceItem[] = [
  {
    title: "Calendrier des religions",
    description: "Un repère utile pour mieux comprendre les grandes fêtes et périodes religieuses.",
    href: "https://www.vd.ch",
  },
  {
    title: "Principales fêtes civiles et religieuses",
    description: "Une synthèse utile pour les institutions, associations et habitant·e·s.",
    href: "https://www.vd.ch",
  },
  {
    title: "OFS religions",
    description: "Statistiques fédérales sur les appartenances religieuses.",
    href: "https://www.bfs.admin.ch",
  },
  {
    title: "OFS population de nationalité étrangère",
    description: "Données utiles pour situer la diversité dans son contexte plus large.",
    href: "https://www.bfs.admin.ch",
  },
];
