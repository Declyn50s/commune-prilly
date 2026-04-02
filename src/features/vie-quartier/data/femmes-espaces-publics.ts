import type { DocumentItem, MethodItem, ResultInsight, TimelineItem } from "@/features/vie-quartier/types";

export const publicSpaceGenderTimeline: TimelineItem[] = [
  {
    title: "Enquête préalable",
    period: "2021–2023",
    description: "Travail préparatoire avec recherche théorique, observations de terrain, entretiens internes et soirées d’échange avec des habitantes.",
  },
  {
    title: "Marches exploratoires",
    period: "2024",
    description: "Balades et ateliers menés avec différents publics féminins pour mieux comprendre les usages et les ressentis dans l’espace public.",
  },
];

export const publicSpaceGenderMethods: MethodItem[] = [
  {
    title: "Parcours adaptés aux publics",
    description: "Les itinéraires et formats ont été pensés différemment pour les mamans, les jeunes, les aînées et les participantes de la marche ouverte.",
  },
  {
    title: "Cadre inclusif et bienveillant",
    description: "La parole est recueillie dans un cadre attentif aux ressentis, aux expériences vécues et à la diversité des points de vue.",
  },
  {
    title: "Balades puis ateliers",
    description: "Les marches sont complétées par des temps d’échange pour reformuler, clarifier et approfondir les constats.",
  },
];

export const publicSpaceGenderResults: ResultInsight[] = [
  {
    title: "Pourquoi cette démarche ?",
    summary: "L’usage des espaces publics n’est pas vécu de la même manière selon le genre.",
    bullets: [
      "La démarche trouve son origine dans un postulat politique.",
      "Elle vise à introduire une perspective de genre dans l’aménagement des espaces publics.",
      "L’objectif est de favoriser un accès plus inclusif et plus équitable à la ville.",
    ],
    tone: "yellow",
  },
  {
    title: "Restitution publique",
    summary: "Les résultats ont été restitués publiquement en novembre 2024.",
    bullets: [
      "Les participantes et la population ont pu découvrir les constats issus des marches.",
      "La démarche permet une meilleure compréhension des usages, ressentis et besoins liés aux espaces publics.",
      "La matière recueillie peut nourrir les réflexions d’aménagement et d’activation des lieux.",
    ],
    tone: "green",
  },
];

export const publicSpaceGenderDocuments: DocumentItem[] = [
  {
    title: "Restitution publique 2024",
    description: "Support de restitution et de partage des principaux enseignements de la démarche.",
    context: "Résultats",
    href: "/docs/vie-quartier/ANNEXE_VIII_Restitution_de_la_recolte_citoyenne_Forum_participatif_MQMV_sept._2025_FINAL.pdf",
    meta: "PDF",
  },
];
