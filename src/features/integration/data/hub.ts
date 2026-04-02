import type {
  FrenchCourse,
  IntegrationContact,
  IntegrationQuickAccess,
  PolicyPrinciple,
  ResourceItem,
} from "@/features/integration/types";

const root = "/vivre/integration";

export const integrationQuickAccess: IntegrationQuickAccess[] = [
  {
    title: "Bienvenue et adresses utiles",
    description: "Des reperes clairs pour s'installer, s'orienter et trouver des relais dans la region.",
    href: `${root}/bienvenue-et-adresses-utiles`,
    tone: "green",
  },
  {
    title: "Cours de francais",
    description: "Trouver une solution adaptee pour apprendre le francais a Prilly et dans la region.",
    href: `${root}/cours-de-francais`,
    tone: "red",
  },
  {
    title: "Commission d'integration CISIP",
    description: "Comprendre son role, ses missions et ses activites concretes.",
    href: `${root}/commission-integration-cisip`,
    tone: "yellow",
  },
  {
    title: "Activites interculturelles",
    description: "Decouvrir les temps forts, les rencontres et les evenements qui font vivre le dialogue interculturel.",
    href: `${root}/activites-interculturelles`,
    tone: "coal",
  },
  {
    title: "Nationalites et religions",
    description: "Explorer la diversite culturelle et religieuse prillerane de maniere lisible et respectueuse.",
    href: `${root}/nationalites-et-religions`,
    tone: "green",
  },
  {
    title: "Lettre d'information",
    description: "Recevoir les nouvelles du service culture et integration cinq fois par annee.",
    href: "#newsletter",
    tone: "red",
  },
];

export const welcomeResources: ResourceItem[] = [
  {
    title: "Brochure Bienvenue",
    description: "Une ressource cantonale utile pour comprendre les premiers reperes de l'installation en plusieurs langues.",
    href: "/docs/integration/brochure-bienvenue.txt",
  },
  {
    title: "vaud-bienvenue.ch",
    description: "Le portail de bienvenue du canton pour acceder rapidement a des informations utiles.",
    href: "https://www.vaud-bienvenue.ch",
  },
];

export const policyPrinciples: PolicyPrinciple[] = [
  {
    title: "Respect mutuel et reciprocite",
    description: "La politique communale d'integration repose sur le respect et le dialogue entre toutes les personnes qui vivent a Prilly.",
    tone: "red",
  },
  {
    title: "Egalite des chances",
    description: "L'objectif est de favoriser un acces plus juste aux ressources economiques, sociales, culturelles et politiques.",
    tone: "green",
  },
  {
    title: "Integration sans renoncer a son identite",
    description: "L'integration est pensee comme une participation active a la vie locale sans effacer les histoires, langues ou cultures de chacune et chacun.",
    tone: "yellow",
  },
  {
    title: "Apprentissage de la langue et familiarisation locale",
    description: "L'acces a la langue et la comprehension de la societe locale sont des leviers essentiels pour trouver sa place a Prilly.",
    tone: "coal",
  },
];

export const frenchCourses: FrenchCourse[] = [
  {
    title: "Cours communal au Prilly Centre",
    description: "L'entree la plus simple et la plus immediate pour commencer a apprendre le francais a Prilly.",
    audience: "Debutant·e·s, gratuit, sans inscription",
    details: [
      "Du lundi au jeudi, 9h00 a 10h30",
      "Restaurant Coop, Prilly Centre, route de Cossonay 28, rez superieur",
      "16 fevrier au 5 mars 2026",
      "4 mai au 21 mai 2026",
      "28 septembre au 15 octobre 2026",
      "Informations disponibles en plusieurs langues",
    ],
    href: "/docs/integration/flyer-cours-francais-prilly-centre-2026.txt",
    tone: "red",
  },
  {
    title: "Francais en Jeu",
    description: "Cours de francais pour adultes avec une offre adaptee a plusieurs profils.",
    audience: "Adultes",
    details: ["Cours structures", "Inscription selon sessions", "Reseau regional"],
    href: "https://www.francaisenjeu.ch",
    tone: "green",
  },
  {
    title: "Lire et Ecrire Lausanne et Region",
    description: "Des solutions pour renforcer les competences de base en francais ecrit.",
    audience: "Adultes",
    details: ["Lecture et ecriture", "Accompagnement progressif", "Region lausannoise"],
    href: "https://www.lire-et-ecrire.ch",
    tone: "yellow",
  },
  {
    title: "Association Franc Parler",
    description: "Des espaces d'apprentissage du francais et de pratique de la langue dans un cadre accueillant.",
    audience: "Public interculturel",
    details: ["Cours et echanges", "Cadre convivial", "Approche progressive"],
    href: "https://www.francparler.ch",
    tone: "coal",
  },
  {
    title: "Globlivres",
    description: "Bibliotheque interculturelle et ressource complementaire pour l'apprentissage des langues et la decouverte culturelle.",
    audience: "Tous publics",
    details: ["Ressources multilingues", "Mediation culturelle", "Acces simple"],
    href: "https://www.globlivres.ch",
    tone: "green",
  },
];

export const integrationContacts: IntegrationContact[] = [
  {
    title: "Service culture et integration",
    role: "Point d'entree principal",
    address: "Route de Cossonay 40, 1008 Prilly",
    email: "sci@prilly.ch",
    phone: "+41 21 622 74 40",
    note: "Le service oriente vers les cours, les ressources, les activites et les documents utiles.",
  },
];
