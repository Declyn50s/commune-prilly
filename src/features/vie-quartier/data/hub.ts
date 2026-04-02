import type { ProjectHighlight, StrategyItem, DocumentItem, VQContact } from "@/features/vie-quartier/types";

const root = "/vivre/vie-quartier";

export const cohesionStrategy: StrategyItem[] = [
  {
    title: "Renforcer le lien social",
    description: "Créer davantage d’occasions de rencontre, de coopération et de solidarité à l’échelle du quartier.",
    tone: "red",
  },
  {
    title: "Encourager diversité et inclusion",
    description: "Mieux prendre en compte les expériences, les usages et les besoins de publics différents.",
    tone: "green",
  },
  {
    title: "Soutenir les familles et les jeunes",
    description: "Développer des actions concrètes de proximité pour favoriser le quotidien, l’écoute et la participation.",
    tone: "yellow",
  },
  {
    title: "Promouvoir une ville à échelle humaine",
    description: "Faire évoluer Prilly avec des projets ancrés dans les usages, les lieux et les réalités vécues.",
    tone: "coal",
  },
];

export const quartierProjects: ProjectHighlight[] = [
  {
    title: "Mon quartier, ma voix",
    summary: "Une grande démarche participative pour mieux comprendre les besoins du quartier et faire émerger des actions concrètes.",
    goal: "Construire un diagnostic partagé puis un plan d’action avec les habitant·e·s, les partenaires et la commune.",
    href: `${root}/mon-quartier-ma-voix`,
    tone: "red",
  },
  {
    title: "Femmes et espaces publics",
    summary: "Une démarche dédiée aux usages des espaces publics par les femmes à Prilly.",
    goal: "Mieux intégrer une perspective de genre dans l’aménagement et l’expérience urbaine.",
    href: `${root}/femmes-et-espaces-publics`,
    tone: "green",
  },
  {
    title: "Activités de quartier",
    summary: "Des rendez-vous concrets pour créer du lien social, lutter contre l’isolement et faire vivre la proximité.",
    goal: "Rendre la vie locale plus visible, plus conviviale et plus accèssible à toutes et tous.",
    href: `${root}/activites-de-quartier`,
    tone: "yellow",
  },
];

export const quartierDocumentsPreview: DocumentItem[] = [
  {
    title: "Présentation de la démarche MQMV",
    description: "Le cadre global, les objectifs et le sens de la démarche Mon quartier, ma voix.",
    context: "Document de cadrage",
    href: "/docs/vie-quartier/ANNEXE_IX_Presentation_demarche_MQMV.pdf",
    meta: "PDF",
  },
  {
    title: "Rapport Jane’s Walk",
    description: "Une lecture sensible du quartier nord à travers une promenade participative.",
    context: "Balade d’observation",
    href: "/docs/vie-quartier/ANNEXE_I_2025.06.25_Rapport_d_activite-Jane_s_Walk_Final.pdf",
    meta: "PDF",
  },
  {
    title: "Analyse consolidée du questionnaire",
    description: "Les principaux enseignements issus du questionnaire adressé à la population adulte.",
    context: "Diagnostic habitant·e·s",
    href: "/docs/vie-quartier/ANNEXE_IV_Analyse_consolidee_questionnaire_MQMV_20250826.pdf",
    meta: "PDF",
  },
  {
    title: "Analyse 12–25 ans",
    description: "Une lecture dédiée aux attentes et perceptions des jeunes du quartier.",
    context: "Jeunes",
    href: "/docs/vie-quartier/ANNEXE_V_Analyse_questionnaire_MQMV_12-25_20250915.pdf",
    meta: "PDF",
  },
];

export const quartierContact: VQContact = {
  name: "Aude Mary",
  role: "Cheffe de projet cohésion sociale",
  email: "monquartier-mavoix@prilly.ch",
  phone: "078 261 29 76",
  whatsapp: "078 261 29 76",
};

export const quartierParticipationBullets = [
  "Les habitant·e·s peuvent partager leurs expériences, leurs idées et leurs envies pour leur quartier.",
  "Les associations, commerçants, institutions et partenaires locaux sont invités à contribuer.",
  "Chaque voix compte pour faire émerger des projets plus justes, plus utiles et plus ancrés dans le réel.",
  "L’objectif est de construire une ville plus solidaire, inclusive et dynamique à partir du terrain.",
];
