import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Clock3,
  FileText,
  MapPin,
  Phone,
  Trees,
  Users,
} from "lucide-react";

export type PriorityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CemeteryPlace = {
  title: string;
  location: string;
  description: string;
  notes: string[];
};

export type BurialType = {
  title: string;
  description: string;
  details: string[];
};

export type TariffGuide = {
  title: string;
  summary: string;
  details: string[];
};

export type CemeteryDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
  tag: string;
};

export type CemeteryContact = {
  title: string;
  role: string;
  address: string[];
  email: string;
  phone: string;
  secondary?: string;
};

export const cemeteryHero = {
  title: "Cimetieres",
  description:
    "Une page pensee pour guider rapidement les familles, clarifier les Démarches prioritaires et rendre les informations plus accèssibles dans un moment sensible.",
  ctas: [
    { label: "En cas de deces", href: "#en-cas-de-deces" },
    { label: "Voir les documents", href: "#documents" },
    { label: "Contacter le bon service", href: "#contacts" },
  ],
  keyFacts: [
    "La premiere démarche est de contacter une entreprise de pompes funebres.",
    "La gestion des inhumations est confiee a l'Office de la population.",
    "Le service des Travaux et Voirie accompagne l'entretien et l'amenagement des tombes.",
  ],
};

export const priorityItems: PriorityItem[] = [
  {
    title: "Contacter une entreprise de pompes funebres",
    description: "C'est la premiere démarche a entreprendre en cas de deces. Elle permet d'engager rapidement les suites utiles.",
    icon: Users,
  },
  {
    title: "Annoncer et organiser avec l'Office de la population",
    description: "Le service enregistre la déclaration de deces, informe la Justice de paix et fixe le jour et l'heure de la ceremonie et de l'inhumation.",
    icon: CalendarDays,
  },
  {
    title: "Choisir le lieu et le type de sepulture",
    description: "Le cimetiere communal propose plusieurs emplacements. La page aide a comprendre les grandes options avant de lire le detail reglementaire.",
    icon: MapPin,
  },
  {
    title: "Prevoir ensuite la tombe et son entretien",
    description: "Monuments, plantations, entretien et suivi sont a coordonner avec Travaux et Voirie.",
    icon: FileText,
  },
];

export const cemeteryPlaces: CemeteryPlace[] = [
  {
    title: "Cimetiere communal",
    location: "Avenue du Chateau, Prilly",
    description: "Le cimetiere communal concentre les emplacements utilises pour les inhumations et depots d'urnes pris en charge par la commune.",
    notes: ["Ouvert au public toute l'annee", "Lieu principal pour les tombes  à la ligne, tombes cineraires, tombes d'enfants, columbarium et jardin du souvenir"],
  },
  {
    title: "Cimetiere israelite de l'avenue du Chateau",
    location: "Avenue du Chateau, Prilly",
    description: "L'un des deux cimetieres israelites presents sur le territoire communal.",
    notes: ["Ouvert au public toute l'annee", "A distinguer du cimetiere israelite du Bois-de-Cery"],
  },
  {
    title: "Cimetiere israelite du Bois-de-Cery",
    location: "Bois-de-Cery, Prilly",
    description: "Le second cimetiere israelite situe sur le territoire de Prilly.",
    notes: ["Ouvert au public toute l'annee", "accès a verifier selon le lieu exact de ceremonie ou de recueillement"],
  },
];

export const burialTypes: BurialType[] = [
  {
    title: "Tombes  à la ligne",
    description: "Sepultures traditionnelles du cimetiere communal.",
    details: ["Type de sepulture mentionne dans l'equipement officiel du cimetiere", "Soumis au reglement communal et aux dimensions maximales pour les monuments"],
  },
  {
    title: "Tombes cineraire",
    description: "Emplacements dedies aux cendres des defunts.",
    details: ["A distinguer du columbarium et du jardin du souvenir", "Le choix se fait avec l'Office de la population selon la situation et le souhait de la famille"],
  },
  {
    title: "Tombes d'enfants",
    description: "Une catégorie specifique existe dans le cimetiere communal.",
    details: ["Le detail pratique et reglementaire reste dans la documentation officielle", "L'Office de la population oriente les familles selon la situation"],
  },
  {
    title: "Columbarium",
    description: "Structure prevue pour accueillir les urnes funeraires.",
    details: ["Option distincte des tombes cineraires", "Les modalites precises restent regies par le reglement et la fiche tarifaire"],
  },
  {
    title: "Jardin du souvenir",
    description: "Espace dedie au depots des cendres, sans tombe individuelle a entretenir.",
    details: ["Solution plus simple lorsqu'aucun amenagement individuel n'est souhaite", "Les conditions pratiques restent a verifier dans les documents officiels"],
  },
];

export const tariffGuides: TariffGuide[] = [
  {
    title: "Choisir d'abord le type de sepulture",
    summary: "La fiche officielle regroupe les tarifs et durées par catégorie de tombe. Le bon point de Départ est donc le type d'emplacement retenu.",
    details: ["Tombes  à la ligne", "Tombes cineraires", "Tombes d'enfants", "Columbarium", "Jardin du souvenir"],
  },
  {
    title: "Verifier ensuite la durée et les emoluments",
    summary: "Les montants ne se lisent pas seuls: ils sont lies  à la catégorie choisie et aux conditions prevues par la fiche officielle.",
    details: ["La durée d'occupation fait partie des informations a verifier", "Le PDF officiel reste la reference pour le detail complet", "L'Office de la population peut aider a identifier la bonne catégorie"],
  },
  {
    title: "Garder une lecture simple",
    summary: "Plutot qu'un tableau brut, la page renvoie vers la fiche officielle avec le contexte utile pour savoir ou regarder.",
    details: ["Commencer par le besoin de la famille", "Verifier ensuite la catégorie correspondante", "Conserver le PDF officiel comme base administrative"],
  },
];

export const tombArrangement = [
  "La pose de monuments ne peut avoir lieu que 10 mois au minimum apres l'inhumation.",
  "Les pierres tombales ne doivent pas depasser les dimensions maximales prevues par le reglement du cimetiere.",
  "Pour les projets de monument, de plantation ou d'amenagement, le bon interlocuteur est Travaux et Voirie.",
];

export const tombMaintenance = [
  "Le service des Travaux de la commune de Prilly propose un contrat d'entretien de tombe.",
  "Ce contrat peut être mis en place en tout temps.",
  "Il offre plusieurs choix de plantations et de prestations selon les besoins de la famille.",
  "Toute tombe abandonnée pendant une année et non remise en etat apres demande de la Municipalite sera recouverte de gravier.",
];

export const inhumationOrganisation = [
  "La gestion des inhumations est confiee a l'Office de la population.",
  "Le service enregistre les declarations de deces et informe la Justice de paix.",
  "Il fixe le jour et l'heure des ceremonies et des inhumations au cimetiere.",
  "Il assure l'administration du cimetiere en collaboration avec le service des Travaux.",
];

export const cemeteryDocuments: CemeteryDocument[] = [
  {
    title: "Reglement sur les Inhumations et les Cimetieres",
    description: "Le document officiel qui regle les types de sepultures, les monuments, l'entretien et les conditions generales d'utilisation du cimetiere.",
    href: "/docs/cimetieres/ReglementCimetiereComplet.pdf",
    label: "Consulter le reglement",
    tag: "Reglement",
  },
  {
    title: "Tarifs et informations cimetiere",
    description: "La fiche officielle a utiliser pour verifier les durées et les emoluments associes aux differents types de tombes.",
    href: "/docs/cimetieres/OPO_Tarifs_info_cimetiere.pdf",
    label: "Voir la fiche tarifaire",
    tag: "Tarifs",
  },
];

export const cemeteryaccèss = [
  {
    title: "Cimetiere communal et cimetiere israelite de l'avenue du Chateau",
    description: "Pour les deplacements lies aux ceremonies ou au recueillement, verifier d'abord le lieu exact retenu avec l'Office de la population ou les pompes funebres.",
    icon: MapPin,
  },
  {
    title: "Cimetiere israelite du Bois-de-Cery",
    description: "Ce second site israelite se situe au Bois-de-Cery. L'accès pratique peut être confirme au moment de l'organisation.",
    icon: Trees,
  },
  {
    title: "Ouverture",
    description: "Les cimetieres de Prilly sont ouverts au public toute l'annee.",
    icon: Clock3,
  },
];

export const cemeteryContacts: CemeteryContact[] = [
  {
    title: "Office de la population",
    role: "Declarations de deces, administration du cimetiere, date et heure des ceremonies et inhumations",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "population@prilly.ch",
    phone: "+41 21 622 73 21",
    secondary: "+41 21 622 73 25",
  },
  {
    title: "Travaux et Voirie",
    role: "Entretien des tombes, contrats d'entretien, plantations, monuments et suivi pratique du cimetiere",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "travaux@prilly.ch",
    phone: "+41 21 622 72 31",
    secondary: "+41 21 622 72 85",
  },
];

export const cemeteryFaq = [
  {
    question: "Quelle est la premiere démarche en cas de deces ?",
    answer:
      "La premiere démarche a entreprendre est de contacter une entreprise de pompes funebres. Cette prise de contact permet ensuite de coordonner les suites avec l'Office de la population.",
  },
  {
    question: "Qui fixe le jour et l'heure de la ceremonie ou de l'inhumation ?",
    answer:
      "C'est l'Office de la population qui fixe le jour et l'heure des ceremonies et des inhumations au cimetiere.",
  },
  {
    question: "Quand peut-on poser un monument sur une tombe ?",
    answer:
      "La pose d'un monument ne peut avoir lieu qu'au minimum 10 mois apres l'inhumation. Les dimensions maximales prevues par le reglement doivent aussi être respectees.",
  },
  {
    question: "Que se passe-t-il si une tombe n'est plus entretenue ?",
    answer:
      "Toute tombe abandonnée pendant une année et qui n'est pas remise en etat apres demande de la Municipalite sera recouverte de gravier.",
  },
  {
    question: "Peut-on demander  à la commune de s'occuper de l'entretien ?",
    answer:
      "Oui. Le service des Travaux propose un contrat d'entretien de tombe, realisable en tout temps, avec plusieurs choix de plantations et de prestations.",
  },
  {
    question: "Les cimetieres sont-ils accèssibles toute l'année ?",
    answer: "Oui. Les cimetieres de Prilly sont ouverts au public toute l'annee.",
  },
];
