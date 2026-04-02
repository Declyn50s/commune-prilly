import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";

export type MunicipalitySummaryItem = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type MunicipalityMember = {
  name: string;
  role: string;
  photo: string;
  alt: string;
  badge: string;
  dicasteres: string[];
  deputy: string;
  status?: {
    label: string;
    tone: "warning" | "neutral";
    detail: string;
  };
  note?: string;
};

export type MunicipalityCompetenceGroup = {
  title: string;
  owner: string;
  description: string;
  topics: string[];
};

export type MunicipalityDecision = {
  title: string;
  dateLabel: string;
  status: "published" | "pending";
  summary: string;
  details: string[];
  href?: string;
  label?: string;
};

export type MunicipalityFigure = {
  label: string;
  value: string;
  detail: string;
  tone: "red" | "coal" | "green" | "yellow";
};

export type DocumentCategory = {
  eyebrow: string;
  title: string;
  description: string;
  coverage: string[];
  href: string;
  label: string;
  featured?: Array<{ title: string; href: string; tag: string }>;
};

export type ParkingInfoItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MunicipalityContact = {
  title: string;
  role: string;
  email?: string;
  phone: string;
  addressLines?: string[];
  notes?: string[];
};

const officialBase = "https://www.prilly.ch";
const municipalityBase = `${officialBase}/prilly-officiel/municipalite`;
const financeBase = `${officialBase}/prilly-officiel/finances-et-impots/comptes-et-budget`;

export const municipalityPageMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Ville", href: "/ville" },
    { label: "Municipalite" },
  ],
  hero: {
    eyebrow: "Executif communal",
    title: "Municipalite",
    description:
      "La Municipalite constitue l'executif de la Ville de Prilly. Elle pilote les services, prend les décisions courantes et porte les grands arbitrages de la commune.",
    intro:
      "Cette page est pensee comme le point d'entrée de l'executif communal: composition, dicasteres, décisions recentes, finances, stationnement et documents de reference.",
  },
  anchors: [
    { label: "Voir la composition", href: "#composition" },
    { label: "Consulter les dernières décisions", href: "#decisions" },
    { label: "Finances et pilotage", href: "#finances" },
    { label: "Stationnement", href: "#stationnement" },
    { label: "Contacts", href: "#contacts" },
  ],
  sourceLinks: {
    composition: `${municipalityBase}/composition-et-dicasteres`,
    decisions: `${municipalityBase}/extraits-des-decisions-municipales`,
    reports: `${municipalityBase}/rapports-de-gestion`,
    legislature: `${municipalityBase}/programme-de-legislature`,
    finance: financeBase,
    sourcePdf: "/docs/ville/municipalite/municipalite-classeur-source.pdf",
  },
};

export const municipalitySummary: MunicipalitySummaryItem[] = [
  {
    title: "Executif communal",
    value: "5 membres",
    description: "La Municipalite forme l'organe executif de la Ville et fonctionne de maniere collegiale.",
    icon: Users,
  },
  {
    title: "Syndic",
    value: "Alain Gillieron",
    description: "Il preside la Municipalite et assure aujourd'hui une partie de la continuite institutionnelle.",
    icon: Building2,
  },
  {
    title: "Vice-syndic",
    value: "Luigi Sartorelli",
    description: "Vice-syndic du 16 decembre 2024 au 30 juin 2026.",
    icon: CheckCircle2,
  },
  {
    title: "Secretaire municipale",
    value: "Sandrine Bohlen",
    description: "Point d'appui administratif de l'executif communal et de ses séances.",
    icon: FileText,
  },
  {
    title: "Secretaire municipale adjointe",
    value: "Claire Regamey",
    description: "Assure la continuite du secretariat municipal et l'appui a l'organisation.",
    icon: BadgeInfo,
  },
];

export const municipalityMembers: MunicipalityMember[] = [
  {
    name: "Alain Gillieron",
    role: "Syndic",
    photo: "/images/ville/municipalite/alain-gillieron.jpg",
    alt: "Portrait d'Alain Gillieron",
    badge: "Syndic",
    dicasteres: [
      "Administration generale (Greffe municipal, archives)",
      "Ressources humaines",
      "Informatique",
      "Urbanisme et constructions",
      "Relations extérieures",
      "Naturalisations",
      "Bibliotheque",
      "Culture et integration",
    ],
    deputy: "Suppleant : Luigi Sartorelli",
    note:
      "Assure également une partie de la continuite institutionnelle pendant la suspension d'Ihsan Kurt.",
  },
  {
    name: "Luigi Sartorelli",
    role: "Municipal",
    photo: "/images/ville/municipalite/luigi-sartorelli.png",
    alt: "Portrait de Luigi Sartorelli",
    badge: "Vice-syndic",
    dicasteres: [
      "Enfance",
      "Securite publique",
      "Office de la population",
      "Jeunesse",
      "Sports",
      "Affaires sociales",
    ],
    deputy: "Suppleante : Rebecca Joly",
  },
  {
    name: "Rebecca Joly",
    role: "Municipale",
    photo: "/images/ville/municipalite/rebecca-joly.jpg",
    alt: "Portrait de Rebecca Joly",
    badge: "Mobilite et ecoles",
    dicasteres: [
      "Travaux publics",
      "Mobilite",
      "Parcs et promenades",
      "Ecoles",
      "Paroisses",
    ],
    deputy: "Suppleant : Alain Gillieron",
  },
  {
    name: "Ihsan Kurt",
    role: "Municipal",
    photo: "/images/ville/municipalite/ihsan-kurt.jpg",
    alt: "Portrait d'Ihsan Kurt",
    badge: "Statut institutionnel",
    dicasteres: [],
    deputy: "Continuite des dossiers assurée par la Municipalite",
    status: {
      label: "Suspendu",
      tone: "warning",
      detail: "Suspendu par décision du Conseil d'Etat jusqu'au 30 juin 2026.",
    },
    note:
      "La continuite des services est assurée par Alain Gillieron et Luigi Sartorelli, avec l'appui de Rebecca Joly et Maurizio Mattia.",
  },
  {
    name: "Maurizio Mattia",
    role: "Municipal",
    photo: "/images/ville/municipalite/maurizio-mattia.png",
    alt: "Portrait de Maurizio Mattia",
    badge: "Finances et patrimoine",
    dicasteres: [
      "Domaines, forets et piscines",
      "Batiments et patrimoine",
      "Energie et Environnement",
      "Dechets",
      "Sociétés immobilieres communales",
      "Finances",
    ],
    deputy: "Suppleant·e·s : Rebecca Joly, Luigi Sartorelli et Alain Gillieron",
  },
];

export const municipalityCompetenceGroups: MunicipalityCompetenceGroup[] = [
  {
    title: "Gouvernance, urbanisme, culture",
    owner: "Alain Gillieron",
    description: "Le bon point d'entrée pour les sujets institutionnels et les grands arbitrages urbains.",
    topics: ["Greffe municipal", "Archives", "Urbanisme", "Naturalisations", "Culture", "Integration", "Bibliotheque"],
  },
  {
    title: "Enfance, population et securite",
    owner: "Luigi Sartorelli",
    description: "Regroupe les politiques publiques tournées vers les familles, la jeunesse et la securite publique.",
    topics: ["Enfance", "Office de la population", "Jeunesse", "Sports", "Affaires sociales", "Securite publique"],
  },
  {
    title: "Travaux, ecoles et mobilite",
    owner: "Rebecca Joly",
    description: "A privilegier pour les sujets de voirie, d'ecoles, de parcs et de deplacements.",
    topics: ["Travaux publics", "Mobilite", "Parcs et promenades", "Ecoles", "Paroisses"],
  },
  {
    title: "Finances, patrimoine et environnement",
    owner: "Maurizio Mattia",
    description: "Couvre le pilotage financier, les domaines communaux, les batiments et l'environnement.",
    topics: ["Finances", "Batiments et patrimoine", "Forets", "Piscines", "Dechets", "Energie et Environnement"],
  },
];

export const municipalityDecisionMeta = {
  eyebrow: "Transparence publique",
  title: "Extraits des décisions municipales",
  description:
    "Les extraits sont publiés par date de séance. La logique de consultation ci-dessous met les séances les plus récentes en avant et renvoie vers l'archive officielle couvrant janvier 2025 à mars 2026.",
  archiveLabel: "Archive officielle janvier 2025 à mars 2026",
  archiveHref: `${municipalityBase}/extraits-des-decisions-municipales`,
  archiveNote:
    "La séance du 16 mars 2026 est signalée sur le site officiel comme étant en attente de validation.",
};

export const municipalityDecisions: MunicipalityDecision[] = [
  {
    title: "Séance du 23 mars 2026",
    dateLabel: "23 mars 2026",
    status: "published",
    summary: "Dernier extrait publié dans l'archive municipale, accèssible depuis la page officielle des décisions.",
    details: ["Extrait publié", "Consultation par séance", "Archive officielle Prilly"],
    href: `${municipalityBase}/extraits-des-decisions-municipales`,
    label: "Voir l'extrait",
  },
  {
    title: "Séance du 16 mars 2026",
    dateLabel: "16 mars 2026",
    status: "pending",
    summary: "Mentionnée sur le site officiel comme étant en attente de validation.",
    details: ["Validation en cours", "Publication à venir", "Signalement officiel de la commune"],
  },
  {
    title: "Séance du 9 mars 2026",
    dateLabel: "9 mars 2026",
    status: "published",
    summary: "Extrait disponible dans la série officielle 2026.",
    details: ["Publication par date", "accès via archive officielle", "Format institutionnel standard"],
    href: `${municipalityBase}/extraits-des-decisions-municipales`,
    label: "Consulter l'archive",
  },
  {
    title: "Séance du 2 mars 2026",
    dateLabel: "2 mars 2026",
    status: "published",
    summary: "Séance documentée dans la liste publique des extraits municipaux.",
    details: ["Date de séance", "Extrait public", "Structure officielle par objets traites"],
    href: `${municipalityBase}/extraits-des-decisions-municipales`,
    label: "Consulter l'archive",
  },
  {
    title: "Séance du 13 janvier 2025",
    dateLabel: "13 janvier 2025",
    status: "published",
    summary: "Point de départ de la série actuellement visible sur la page officielle des extraits.",
    details: ["Exemple de structure type", "Présidence et membres présents", "Objets classés par domaine"],
    href: `${municipalityBase}/extraits-des-decisions-municipales`,
    label: "Voir la série 2025",
  },
];

export const municipalityBudgetHighlights: MunicipalityFigure[] = [
  {
    label: "Résultat budgete",
    value: "CHF -1.301 mio",
    detail: "Perte budgetée pour 2026 selon le dossier budgetaire transmis.",
    tone: "red",
  },
  {
    label: "Marge d'autofinancement",
    value: "CHF 5.993 mio",
    detail: "Confirmée également par l'actualité officielle du 16 decembre 2025.",
    tone: "green",
  },
  {
    label: "Investissements budgetes",
    value: "CHF 21.205 mio",
    detail: "Montant mis en avant par la Municipalité pour accompagner les projets a venir.",
    tone: "yellow",
  },
  {
    label: "Endettement brut budgete",
    value: "Env. CHF 70 mio",
    detail: "Repere de pilotage à lire avec les investissements et la croissance du territoire.",
    tone: "coal",
  },
  {
    label: "Population attendue fin 2026",
    value: "14'240",
    detail: "Projection démographique mentionnée dans le budget 2026.",
    tone: "green",
  },
  {
    label: "Effectif budgete",
    value: "218.28 ETP",
    detail: "Le budget 2026 anticipe une progression de l'effectif et des réorganisations de services.",
    tone: "coal",
  },
];

export const municipalityFinancialDocuments: DocumentCategory[] = [
  {
    eyebrow: "Comptes",
    title: "Comptes communaux et etats financiers",
    description:
      "Pour suivre l'exécution budgetaire et l'evolution de la sante financiere communale, avec une lecture plus simple des dernières references.",
    coverage: ["2014 à 2024", "Commentaires 2017", "Commentaires 2018", "Etat financier 2024"],
    href: financeBase,
    label: "Voir l'archive des comptes",
    featured: [
      { title: "Comptes 2023", href: "https://www.prilly.ch/fileadmin/documents/user_upload/03_brs_fichiers/Comptes_Communaux/VilleDePrillyComptes2023.pdf", tag: "2023" },
      { title: "Etat financier 2024", href: "https://www.prilly.ch/fileadmin/documents/user_upload/03_brs_fichiers/Comptes_Communaux/Ville_de_Prilly_-_etats_financiers_2024.pdf", tag: "2024" },
      { title: "Tableau de bord financier 2024", href: "https://www.prilly.ch/fileadmin/documents/user_upload/03_brs_fichiers/Comptes_Communaux/Ville_de_Prilly_-_communique_de_presse_et_tableau_de_bord_financier.pdf", tag: "Pilotage" },
    ],
  },
  {
    eyebrow: "Budget",
    title: "Budgets communaux et versions amendees",
    description:
      "Les budgets 2020 à 2026 sont regroupes au meme endroit. Les versions amendées 2024, 2025 et 2026 restent accèssibles pour suivre les arbitrages.",
    coverage: ["2020 à 2026", "Amende 2024", "Amende 2025", "Amende 2026"],
    href: financeBase,
    label: "Voir l'archive des budgets",
    featured: [
      { title: "Budget 2026", href: "https://www.prilly.ch/fileadmin/documents/user_upload/01._Budget_2026_brochure_imprimee.pdf", tag: "2026" },
      { title: "Budget 2026 amende", href: "https://www.prilly.ch/fileadmin/documents/user_upload/Ville_de_Prilly_-_B2026_-_amende_publié.pdf", tag: "Amende" },
      { title: "Budget 2025", href: "https://www.prilly.ch/fileadmin/documents/user_upload/03_brs_fichiers/Comptes_Communaux/VilleDePrillyBudget2025.pdf", tag: "2025" },
    ],
  },
];

export const municipalityParkingIntro: ParkingInfoItem[] = [
  {
    title: "Anciennement macarons",
    description: "Les autorisations permettent de prolonger le stationnement en zone bleue du quartier, sans place reservee.",
    icon: BadgeInfo,
  },
  {
    title: "Par secteur",
    description: "Les autorisations sont delivrées selon le secteur d'habitation ou de travail, avec possibilites temporaires selon les cas.",
    icon: Building2,
  },
  {
    title: "Contrôle numerique",
    description: "Le contrôle s'effectue par numéro d'immatriculation via ParkingPay.",
    icon: ShieldCheck,
  },
  {
    title: "Cadre strict",
    description: "Valables uniquement dans les zones signalées 'sauf autorisation P' et sans dérogation aux restrictions provisoires.",
    icon: ShieldCheck,
  },
];

export const municipalityParkingPoints = [
  "Elles ne donnent pas droit à une place fixe.",
  "Des autorisations existent pour les habitants, les entreprises, certains pendulaires et les besoins temporaires.",
  "Les restrictions temporaires liees aux travaux, manifestations ou mesures ponctuelles restent applicables.",
  "Les demandes et la gestion courante passent par les documents officiels et l'outil ParkingPay.",
];

export const municipalityParkingDocuments: DocumentCategory = {
  eyebrow: "Stationnement",
  title: "Documents utiles pour les autorisations",
  description:
    "Reglement, prescriptions, tarifs, plan de zones et formulaires de demande sont regroupés pour éviter une recherche dispersée.",
  coverage: ["Reglement", "Prescriptions", "Tarifs", "Zones macarons", "Demande standard", "Demande pendulaire"],
  href: "/services/mobilite/stationnement",
  label: "Voir la page stationnement complete",
  featured: [
    { title: "Reglement", href: "/docs/mobilite/stationnement/BRS-Macarons_Reglement_2008.pdf", tag: "Reglement" },
    { title: "Prescriptions municipales", href: "/docs/mobilite/stationnement/Ville_de_Prilly_Macarons_de_stationnement_Prescriptions_municipales_Edition_2023_V3.pdf", tag: "Prescriptions" },
    { title: "Tarifs", href: "/docs/mobilite/stationnement/BRS-Macarons_Tarifs.pdf", tag: "Tarifs" },
    { title: "Zones macarons", href: "/docs/mobilite/stationnement/Zone_et_panneaux_2023_V3.pdf", tag: "Plan" },
    { title: "Demande d'autorisation", href: "/docs/mobilite/stationnement/Demande_d_autorisation_-_Macaron.pdf", tag: "Formulaire" },
    { title: "Autorisation pendulaire", href: "/docs/mobilite/stationnement/Demande_autorisation_pendulaire.pdf", tag: "Formulaire" },
  ],
};

export const municipalityPublicationDocuments: DocumentCategory[] = [
  {
    eyebrow: "Rapports de gestion",
    title: "Rapports de gestion",
    description:
      "Les rapports 2010 à 2024 permettent de suivre la conduite municipale, l'activite des services et les priorites de gestion dans la duree.",
    coverage: ["2010 a 2024"],
    href: `${municipalityBase}/rapports-de-gestion`,
    label: "Voir tous les rapports",
    featured: [
      { title: "Rapport de gestion 2024", href: "https://www.prilly.ch/fileadmin/documents/user_upload/04_cco_fichiers/Preavis_Rapports/2025/RG/Rapport_de_gestion_2024.pdf", tag: "2024" },
    ],
  },
  {
    eyebrow: "Programme de legislature",
    title: "Programmes de legislature",
    description:
      "Deux programmes pour comprendre la vision municipale, les priorites annoncées et la trajectoire politique du mandat.",
    coverage: ["2016 - 2021", "2021 - 2026"],
    href: `${municipalityBase}/programme-de-legislature`,
    label: "Voir les programmes",
    featured: [
      { title: "Programme de legislature 2021 - 2026", href: "https://www.prilly.ch/fileadmin/documents/user_upload/Programme_de_legislature_2021-2026.pdf", tag: "Mandat actuel" },
    ],
  },
];

export const municipalityContacts: MunicipalityContact[] = [
  {
    title: "Greffe municipal",
    role: "Point d'entrée pour la Municipalite, les décisions, les rapports et les documents institutionnels.",
    email: "greffe@prilly.ch",
    phone: "+41 21 622 72 11",
    addressLines: ["Route de Cossonay 40", "Case postale 96", "1008 Prilly"],
    notes: ["Administration generale et Office de la population : lundi 8h00-11h45 / 13h30-18h15, mardi a jeudi 8h00-11h45 / 13h30-16h30, vendredi 8h00-11h45."],
  },
  {
    title: "Finances et stationnement",
    role: "Pour les budgets, comptes, autorisations de stationnement et les demandes liees aux secteurs P.",
    email: "finances@prilly.ch",
    phone: "+41 21 622 72 21",
    notes: [
      "Autres adresses utiles : separquer@prilly.ch, entreprises@prilly.ch, frontaliers@prilly.ch, taxe.séjour@prilly.ch.",
      "Domaines & Batiments, Energie & Environnement, Finances, Urbanisme et Infrastructure & Espace public : lundi au jeudi 8h00-11h45, apres-midi sur rendez-vous, vendredi 8h00-11h45.",
    ],
  },
];

export const municipalityHelpfulSections = [
  {
    title: "Une Municipalite collegiale",
    description:
      "Chaque membre dirige un dicastere, mais les décisions sont prises collectivement, sous la presidence du syndic ou de la syndique.",
    icon: Users,
  },
  {
    title: "Des décisions publiées par séance",
    description:
      "Les extraits sont rendus visibles date par date, ce qui rend la transparence plus concrete et plus facile a suivre.",
    icon: FileText,
  },
  {
    title: "Un pilotage lisible",
    description:
      "Comptes, budgets, rapports de gestion et programmes de legislature sont regroupes comme un ensemble coherent, pas comme un depot de PDF.",
    icon: CalendarDays,
  },
  {
    title: "Un point d'entrée service public",
    description:
      "Contacts, finances et stationnement restent accèssibles sans brouiller la lecture institutionnelle de la page.",
    icon: BadgeInfo,
  },
];
