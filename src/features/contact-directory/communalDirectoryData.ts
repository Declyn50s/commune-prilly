import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeInfo,
  Building2,
  FileText,
  MapPinned,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

export type DirectoryCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type DirectoryService = {
  id: string;
  name: string;
  category: string;
  address: string;
  email?: string;
  phone?: string;
  hours: string[];
  href: string;
  description: string;
  keywords: string[];
  anchorLetter: string;
  shortcut?: boolean;
  note?: string;
  relatedService?: string;
};

export type EmergencyContact = {
  id: string;
  name: string;
  phone?: string;
  urgency?: string;
  href?: string;
  description: string;
};

export const directoryCategories: DirectoryCategory[] = [
  { id: "all", label: "Tous", icon: BadgeInfo },
  { id: "administration", label: "Administration", icon: ShieldCheck },
  { id: "population", label: "Population", icon: Users },
  { id: "social", label: "Social", icon: AlertTriangle },
  { id: "finances", label: "Finances", icon: FileText },
  { id: "culture", label: "Culture", icon: BadgeInfo },
  { id: "enfance-jeunesse", label: "Enfance & jeunesse", icon: Users },
  { id: "technique", label: "Technique", icon: Building2 },
  { id: "urbanisme", label: "Urbanisme", icon: MapPinned },
  { id: "informatique", label: "Informatique", icon: Search },
];

export const communalDirectoryData: DirectoryService[] = [
  {
    id: "administration-generale-greffe",
    name: "Administration generale (Greffe)",
    category: "administration",
    address: "Route de Cossonay 40",
    email: "greffe@prilly.ch",
    phone: "+41 21 622 72 11",
    hours: [
      "Lundi : 08h00-11h45 / 13h30-18h15",
      "Mardi a jeudi : 08h00-11h45 / 12h30-16h30",
      "Vendredi : 08h00-11h45",
    ],
    href: "/ville/municipalite#contacts",
    description: "Greffe municipal, administration generale, suivi institutionnel et orientation vers le bon service.",
    keywords: ["greffe", "administration", "municipalite", "conseil", "demarches", "documents"],
    anchorLetter: "A",
    shortcut: true,
  },
  {
    id: "archives-communales",
    name: "Archives communales",
    category: "administration",
    address: "Route de Cossonay 40",
    email: "archives@prilly.ch",
    phone: "+41 21 622 72 08",
    hours: ["Consultation sur rendez-vous"],
    href: "/ville/archives-communales",
    description: "Consultation des archives communales et du patrimoine documentaire.",
    keywords: ["archives", "documents", "histoire", "patrimoine", "consultation"],
    anchorLetter: "A",
  },
  {
    id: "aide-sociale-communale",
    name: "Aide sociale communale",
    category: "social",
    address: "Route de Cossonay 40",
    email: "aide.sociale@prilly.ch",
    phone: "+41 21 622 75 10",
    hours: [
      "Lundi et jeudi : 08h00-11h45 / 13h30-16h30",
      "Ou sur rendez-vous",
    ],
    href: "/contact",
    description: "Accompagnement social communal et soutien de proximite.",
    keywords: ["social", "aide sociale", "accompagnement", "soutien", "social"],
    anchorLetter: "A",
    shortcut: true,
  },
  {
    id: "bibliotheque-communale",
    name: "Bibliotheque communale",
    category: "culture",
    address: "Route de Cossonay 42",
    email: "bibliotheque@prilly.ch",
    phone: "+41 21 622 72 15 / 16 / 17",
    hours: [
      "Mardi : 15h00-19h00",
      "Mercredi : 09h30-12h00 / 14h00-16h30",
      "Jeudi : 15h00-19h00",
      "Vendredi : 15h00-18h30",
      "Samedi : 09h00-12h00",
    ],
    href: "/loisirs/bibliotheque",
    description: "Horaires, services de pret et ressources de la bibliotheque communale.",
    keywords: ["bibliotheque", "livres", "lecture", "culture", "mediatheque"],
    anchorLetter: "B",
  },
  {
    id: "bourse-communale",
    name: "Bourse communale",
    category: "finances",
    address: "Route de Cossonay 40",
    email: "bourse@prilly.ch",
    phone: "+41 21 622 72 21",
    hours: [
      "Lundi a jeudi : 08h00-11h45",
      "Apres-midi sur rendez-vous",
      "Vendredi : 08h00-11h45",
    ],
    href: "/ville/finances-impots#contact",
    description: "Finances communales, paiements, taxes et renseignements financiers.",
    keywords: ["bourse", "finances", "factures", "taxes", "paiement"],
    anchorLetter: "B",
    shortcut: true,
  },
  {
    id: "culture",
    name: "Culture",
    category: "culture",
    address: "Route de Cossonay 40",
    email: "sci@prilly.ch",
    phone: "+41 21 622 74 40",
    hours: ["Contacter le service pour les horaires et demandes specifiques"],
    href: "/loisirs/culture",
    description: "Politique culturelle, coordination, subventions et animations communales.",
    keywords: ["culture", "sci", "subventions", "agenda", "animations"],
    anchorLetter: "C",
  },
  {
    id: "domaines-et-batiments",
    name: "Domaines et Batiments",
    category: "technique",
    address: "Route de Cossonay 40",
    email: "domaines@prilly.ch",
    phone: "+41 21 622 73 55",
    hours: [
      "Lundi a jeudi : 08h00-11h45",
      "Apres-midi sur rendez-vous",
      "Vendredi : 08h00-11h45",
    ],
    href: "/services/domaine-communal",
    description: "Batiments communaux, patrimoine, domaines, piscines et equipements lies aux sites exploites.",
    keywords: ["domaines", "batiments", "patrimoine", "piscines", "salles"],
    anchorLetter: "D",
  },
  {
    id: "energie-et-environnement",
    name: "Energie et environnement",
    category: "technique",
    address: "Route de Cossonay 40",
    email: "energie@prilly.ch",
    phone: "+41 21 622 73 51",
    hours: [
      "Lundi a jeudi : 08h00-11h45",
      "Apres-midi sur rendez-vous",
      "Vendredi : 08h00-11h45",
    ],
    href: "/services/environnement",
    description: "Energie, environnement, durabilite et suivi des questions techniques liees au territoire.",
    keywords: ["energie", "environnement", "durable", "air", "bruit", "biodiversite"],
    anchorLetter: "E",
  },
  {
    id: "enfance",
    name: "Enfance",
    category: "enfance-jeunesse",
    address: "Route de Cossonay 40",
    email: "enfance@prilly.ch",
    phone: "+41 21 622 73 02",
    hours: [
      "Lundi : 08h00-11h45",
      "Mardi et jeudi : 13h30-16h30",
    ],
    href: "/vivre/enfance-ecoles",
    description: "Accueil, structures d'enfance et renseignements pour les familles.",
    keywords: ["enfance", "famille", "apems", "uape", "accueil"],
    anchorLetter: "E",
  },
  {
    id: "exploitation-et-gerance",
    name: "Exploitation et Gerance",
    category: "technique",
    address: "Route de Cossonay 40",
    email: "exploitation@prilly.ch",
    phone: "+41 21 622 75 80",
    hours: [
      "Lundi a jeudi : 08h00-11h45",
      "Apres-midi sur rendez-vous",
      "Vendredi : 08h00-11h45",
    ],
    href: "/vivre#jardins-familiaux",
    description: "Gestion des jardins, exploitation de sites et renseignements sur les espaces communaux.",
    keywords: ["exploitation", "gerance", "jardins", "espaces publics", "batiments"],
    anchorLetter: "E",
  },
  {
    id: "informatique-communale",
    name: "Informatique communale",
    category: "informatique",
    address: "Route de Cossonay 40",
    email: "informatique@prilly.ch",
    phone: "+41 21 622 72 11",
    hours: ["Service interne, prise de contact via les coordonnées administratives"],
    href: "/services/police-des-constructions",
    description: "Support numerique communal et systemes informatiques.",
    keywords: ["informatique", "numerique", "systemes", "it", "administration"],
    anchorLetter: "I",
  },
  {
    id: "infrastructure-et-espaces-publics",
    name: "Infrastructure et Espaces publics",
    category: "technique",
    address: "Route de Cossonay 40",
    email: "travaux@prilly.ch",
    phone: "+41 21 622 72 31",
    hours: [
      "Lundi a jeudi : 08h00-11h45",
      "Apres-midi sur rendez-vous",
      "Vendredi : 08h00-11h45",
    ],
    href: "/services/travaux-domaine-public",
    description: "Voirie, travaux, infrastructures et questions liees aux espaces publics.",
    keywords: ["infrastructure", "travaux", "voirie", "espaces publics", "technique"],
    anchorLetter: "I",
  },
  {
    id: "integration",
    name: "Integration",
    category: "culture",
    address: "Route de Cossonay 40",
    email: "sci@prilly.ch",
    phone: "+41 21 622 74 40",
    hours: ["Contacter le service pour les horaires et demandes specifiques"],
    href: "/vivre/integration",
    description: "Accompagnement, cohesion sociale et integration locale.",
    keywords: ["integration", "cohesion sociale", "sci", "culture", "cisip"],
    anchorLetter: "I",
  },
  {
    id: "jeunesse",
    name: "Jeunesse",
    category: "enfance-jeunesse",
    address: "Route de Cossonay 40",
    email: "jeunesse@prilly.ch",
    phone: "+41 21 622 73 38",
    hours: ["Contacter le service pour les horaires et activités en cours"],
    href: "/loisirs/sports-et-loisirs/centre-de-loisirs",
    description: "Activites jeunesse, centre de loisirs et actions de proximite.",
    keywords: ["jeunesse", "ados", "centre loisirs", "vacances", "activites"],
    anchorLetter: "J",
    shortcut: true,
  },
  {
    id: "office-de-la-population",
    name: "Office de la population",
    category: "population",
    address: "Route de Cossonay 40",
    email: "population@prilly.ch",
    phone: "+41 21 622 73 21",
    hours: [
      "Lundi : 08h00-11h45 / 13h30-18h15",
      "Mardi a jeudi : 08h00-11h45 / 12h30-16h30",
      "Vendredi : 08h00-11h45",
    ],
    href: "/demarches/office-population",
    description: "Arrivees, Départs, attestations et dossiers lies  à la population.",
    keywords: ["population", "habitants", "attestation", "domicile", "arrivee", "depart"],
    anchorLetter: "O",
    shortcut: true,
  },
  {
    id: "piscines",
    name: "Piscines",
    category: "technique",
    address: "Route de Cossonay 40",
    hours: ["Renvoi vers Domaines et Batiments"],
    href: "/services/domaine-communal",
    description: "Point d'entrée de renvoi vers le service competent.",
    keywords: ["piscines", "bassins", "renvoi", "domaines", "batiments"],
    anchorLetter: "P",
    relatedService: "domaines-et-batiments",
    note: "Ce contact renvoie vers Domaines et Batiments, qui gère les piscines communales.",
  },
  {
    id: "ressources-humaines",
    name: "Ressources humaines",
    category: "administration",
    address: "Route de Cossonay 40",
    email: "rh@prilly.ch",
    phone: "+41 21 622 75 31",
    hours: ["Contacter le service pour les horaires et demandes de recrutement"],
    href: "/ville/ressources-humaines",
    description: "Recrutement, administration du personnel et informations RH.",
    keywords: ["rh", "emploi", "recrutement", "ressources humaines", "personnel"],
    anchorLetter: "R",
  },
  {
    id: "urbanisme-et-constructions",
    name: "Urbanisme et Constructions",
    category: "urbanisme",
    address: "Route de Cossonay 40",
    email: "urbanisme@prilly.ch",
    phone: "+41 21 622 72 70",
    hours: [
      "Lundi a jeudi : 08h00-11h45",
      "Apres-midi sur rendez-vous",
      "Vendredi : 08h00-11h45",
    ],
    href: "/ville/municipalite#composition",
    description: "Urbanisme, constructions, amenagement du territoire et dossiers techniques lies au bati.",
    keywords: ["urbanisme", "constructions", "territoire", "bati", "permis"],
    anchorLetter: "U",
    shortcut: true,
  },
];

export const directorySearchSuggestions = [
  "population",
  "greffe",
  "urbanisme",
  "aide sociale",
  "enfance",
  "bibliotheque",
];

export const directoryShortcutLabels = [
  "Office de la population",
  "Administration generale (Greffe)",
  "Aide sociale communale",
  "Urbanisme et Constructions",
  "Bourse communale",
  "Jeunesse",
];

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "police-ouest",
    name: "Police de l'Ouest",
    phone: "+41 21 622 80 00",
    urgency: "117",
    href: "https://www.polouest.ch/",
    description: "Police de proximite, interventions et renseignements administratifs.",
  },
  {
    id: "sdis",
    name: "Service du feu SDIS",
    urgency: "118",
    href: "https://sdis-malley.ch/accueil/",
    description: "Defense incendie et secours pour Prilly et les communes voisines.",
  },
];

export const directoryAlphabet = Array.from(
  new Set(
    communalDirectoryData
      .map((service) => service.anchorLetter)
      .sort((a, b) => a.localeCompare(b, "fr")),
  ),
);
