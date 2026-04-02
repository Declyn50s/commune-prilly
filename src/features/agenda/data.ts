export const agendaCategories = [
  "Toutes",
  "Culture",
  "Vie locale",
  "Jeunesse",
  "Seniors",
  "Environnement",
  "Sport",
  "Administration",
  "Bibliotheque",
  "Quartier",
] as const;

export const agendaPeriods = [
  "Toutes les dates",
  "Aujourd'hui",
  "Cette semaine",
  "Ce mois",
  "A venir",
] as const;

export type AgendaCategory = (typeof agendaCategories)[number];
export type AgendaPeriod = (typeof agendaPeriods)[number];

export type AgendaEventItem = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<AgendaCategory, "Toutes">;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  address: string;
  summary: string;
  description: string;
};

export const agendaReferenceDate = "2026-04-01";

export const agendaEvents: AgendaEventItem[] = [
  {
    id: "evt-001",
    slug: "forum-accueil-nouveaux-habitants",
    title: "Forum d'accueil des nouveaux habitants",
    category: "Vie locale",
    date: "2026-04-02",
    startTime: "18:30",
    endTime: "20:30",
    location: "Salle de l'Union",
    address: "Route de Cossonay 40, 1008 Prilly",
    summary: "Une soirée d'information destinée aux nouveaux habitants de la commune.",
    description:
      "La Commune de Prilly organise une rencontre d'accueil permettant de presenter les services communaux, les informations utiles a l'installation et plusieurs relais de la vie locale.",
  },
  {
    id: "evt-002",
    slug: "atelier-compost-biodiversite",
    title: "Atelier compost et biodiversite",
    category: "Environnement",
    date: "2026-04-06",
    startTime: "12:15",
    endTime: "13:30",
    location: "Jardins familiaux de Prilly",
    address: "Chemin de Corminjoz, 1008 Prilly",
    summary: "Un atelier pratique consacre au compost et a la biodiversite en milieu urbain.",
    description:
      "Cet atelier propose des informations pratiques sur le compostage domestique, la gestion des déchets verts et les amenagements favorables a la biodiversite dans les jardins et espaces de proximite.",
  },
  {
    id: "evt-003",
    slug: "lecture-printemps-bibliotheque",
    title: "Lecture de printemps a la bibliotheque",
    category: "Bibliotheque",
    date: "2026-04-09",
    startTime: "17:00",
    endTime: "18:00",
    location: "Bibliotheque de Prilly",
    address: "Route de Cossonay 40, 1008 Prilly",
    summary: "Une lecture publique organisee a la bibliotheque communale.",
    description:
      "La bibliotheque communale propose une lecture de printemps ouverte au public. La seance est suivie d'un temps d'echange et d'information sur les activités a venir.",
  },
  {
    id: "evt-004",
    slug: "reunion-information-travaux-creuses",
    title: "Réunion d'information sur les travaux du chemin des Creuses",
    category: "Administration",
    date: "2026-04-14",
    startTime: "19:00",
    endTime: "20:15",
    location: "Salle du Conseil",
    address: "Route de Cossonay 40, 1008 Prilly",
    summary: "Une seance publique d'information sur le calendrier et l'organisation des travaux.",
    description:
      "La Commune presente l'avancement des travaux prevus sur le chemin des Creuses, les incidences sur la circulation ainsi que les dispositions mises en place pour les riveraines et riverains.",
  },
  {
    id: "evt-005",
    slug: "cinema-plein-air-parc-cure",
    title: "Cinema en plein air au Parc de la Cure",
    category: "Culture",
    date: "2026-04-18",
    startTime: "20:30",
    endTime: "22:30",
    location: "Parc de la Cure",
    address: "Parc de la Cure, 1008 Prilly",
    summary: "Une projection publique en extérieur organisee dans le cadre de la programmation printaniere.",
    description:
      "La Commune relaye cette projection en plein air organisee au Parc de la Cure. Le public est invite a prendre connaissance des conditions d'acces et de maintien de l'evenement en cas de mauvais temps.",
  },
  {
    id: "evt-006",
    slug: "apres-midi-mobilite-seniors",
    title: "Apres-midi mobilite et prevention pour les seniors",
    category: "Seniors",
    date: "2026-04-22",
    startTime: "14:00",
    endTime: "16:30",
    location: "Salle polyvalente de Prilly",
    address: "Route des Flumeaux 41, 1008 Prilly",
    summary: "Une rencontre d'information sur la mobilite, la prevention et les ressources utiles.",
    description:
      "Cette rencontre s'adresse aux seniors et a leurs proches. Elle rassemble des informations sur la mobilite du quotidien, la prevention des risques et les dispositifs d'accompagnement disponibles dans la region.",
  },
  {
    id: "evt-007",
    slug: "tournoi-printemps-multisports",
    title: "Tournoi de printemps multisports",
    category: "Sport",
    date: "2026-04-26",
    startTime: "09:30",
    endTime: "16:00",
    location: "Complexe de la Fleur-de-Lys",
    address: "Sentier de la Fleur-de-Lys 2, 1008 Prilly",
    summary: "Une journée d'activites sportives sur les installations communales.",
    description:
      "Le complexe sportif de la Fleur-de-Lys accueille une journée de pratique multisports ouverte aux participantes et participants inscrits selon les modalites annoncées par les organisateurs.",
  },
  {
    id: "evt-008",
    slug: "fete-de-quartier-uttins",
    title: "Fete de quartier des Uttins",
    category: "Quartier",
    date: "2026-05-02",
    startTime: "11:00",
    endTime: "18:00",
    location: "Place des Uttins",
    address: "Quartier des Uttins, 1008 Prilly",
    summary: "Une manifestation de quartier avec stands, animations et informations locales.",
    description:
      "La fete de quartier des Uttins rassemble habitantes, habitants, associations et partenaires locaux autour d'animations, de stands et d'informations sur la vie du quartier.",
  },
  {
    id: "evt-009",
    slug: "atelier-jeunesse-initiation-boxe",
    title: "Atelier jeunesse d'initiation a la boxe",
    category: "Jeunesse",
    date: "2026-05-06",
    startTime: "16:30",
    endTime: "18:00",
    location: "Carrefour-Sud",
    address: "Route de Renens 22, 1008 Prilly",
    summary: "Une initiation proposee aux jeunes dans le cadre des activités de Carrefour-Sud.",
    description:
      "Le service jeunesse relaie une seance d'initiation a la boxe destinée aux jeunes. Les modalites de participation et l'encadrement sont communiques sur place par l'equipe responsable.",
  },
  {
    id: "evt-010",
    slug: "concert-communal-printemps",
    title: "Concert communal de printemps",
    category: "Culture",
    date: "2026-05-15",
    startTime: "19:30",
    endTime: "21:00",
    location: "Grande salle de Prilly",
    address: "Route de Cossonay 40, 1008 Prilly",
    summary: "Un concert public organise avec la participation d'acteurs culturels locaux.",
    description:
      "Le concert communal de printemps reunit plusieurs formations locales dans une programmation ouverte au public. Les horaires et conditions d'accueil sont precises dans l'agenda communal.",
  },
  {
    id: "evt-011",
    slug: "matinee-information-inscriptions-scolaires",
    title: "Matinée d'information sur les inscriptions scolaires",
    category: "Administration",
    date: "2026-05-21",
    startTime: "09:00",
    endTime: "11:00",
    location: "Maison de l'enfance",
    address: "Avenue de Florissant 28, 1008 Prilly",
    summary: "Une matinée d'information pour les familles concernées par la rentrée scolaire.",
    description:
      "Cette seance permet de presenter les démarches d'inscription, les pieces a prevoir et les contacts utiles pour les familles nouvellement installées ou concernées par une premiere entrée dans le parcours scolaire.",
  },
  {
    id: "evt-012",
    slug: "journee-plantations-participatives",
    title: "Journée de plantations participatives",
    category: "Environnement",
    date: "2026-06-03",
    startTime: "14:00",
    endTime: "17:00",
    location: "Avenue de la Paisible",
    address: "Avenue de la Paisible, 1008 Prilly",
    summary: "Une action de terrain autour des plantations et de l'amenagement du domaine public.",
    description:
      "La Commune organise une demi-journée de plantations participatives en lien avec les amenagements en cours. Les participantes et participants sont invites a s'inscrire prealablement.",
  },
];

export function getAgendaEventBySlug(slug: string) {
  return agendaEvents.find((item) => item.slug === slug);
}

export function formatAgendaDate(date: string) {
  return new Intl.DateTimeFormat("fr-CH", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function formatAgendaCardDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);

  return {
    day: new Intl.DateTimeFormat("fr-CH", { day: "2-digit" }).format(parsed),
    month: new Intl.DateTimeFormat("fr-CH", { month: "short" }).format(parsed),
    year: new Intl.DateTimeFormat("fr-CH", { year: "numeric" }).format(parsed),
  };
}
