import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  Building2,
  CalendarDays,
  FileCheck2,
  FileText,
  Mail,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

export type FinanceCta = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type TaxLevel = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DeclarationStep = {
  title: string;
  description: string;
};

export type ContactMini = {
  title: string;
  role: string;
  email?: string;
  phone?: string;
};

export type StayTariff = {
  category: string;
  price: string;
  description: string;
  tone: string;
  textTone?: "light" | "dark";
};

export type JourneyCard = {
  title: string;
  eyebrow: string;
  description: string;
  steps?: string[];
  highlight?: string;
  href?: string;
  label?: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  label: string;
  category: string;
};

export type YearDocument = {
  year: string;
  title: string;
  href: string;
  tag: string;
};

export type HelperProfile = {
  id: string;
  label: string;
  title: string;
  description: string;
  actions: string[];
  href: string;
};

export type FinanceContact = {
  title: string;
  email: string;
  phone: string;
  hours: string[];
  notes?: string[];
};

const officialBase = "https://www.prilly.ch";
const cantonTaxes = "https://www.vd.ch/etat-droit-finances/impots";
const financeArchive = `${officialBase}/prilly-officiel/finances-et-impots/comptes-et-budget?type=98`;

export const financePageMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Ville", href: "/ville" },
    { label: "Finances & impôts" },
  ],
  hero: {
    eyebrow: "Service financier communal",
    title: "Finances & impôts",
    description: "Comprendre vos impôts, taxes et démarches à Prilly",
    intro:
      "Informations sur les impôts, la taxe de séjour, les documents, les budgets et les comptes communaux.",
  },
  anchors: [
    { label: "Impots", href: "#impots" },
    { label: "Taxe de séjour", href: "#taxe-sejour" },
    { label: "Documents", href: "#documents" },
    { label: "Comptes et budget", href: "#comptes-budget" },
    { label: "Contact", href: "#contact" },
  ],
  sourceLinks: {
    cantonTaxes,
    financeArchive,
    vaudTax: cantonTaxes,
  },
};

export const financeHeroCtas: FinanceCta[] = [
  {
    title: "Déclarer mes impôts",
    description: "Accéder au parcours fiscal du canton et aux contacts utiles selon votre situation.",
    href: "#declaration",
    icon: Search,
  },
  {
    title: "Taxe de séjour",
    description: "Comprendre qui est concerne, quels tarifs appliquer et comment déclarer.",
    href: "#taxe-sejour",
    icon: Users,
  },
  {
    title: "Documents & formulaires",
    description: "Retrouver rapidement les formulaires officiels, le reglement et les documents de reference.",
    href: "#documents",
    icon: FileText,
  },
];

export const taxLevels: TaxLevel[] = [
  {
    title: "Fédéral",
    description: "L'impot fédéral direct s'applique a l'echelle suisse selon les regles de la Confederation.",
    icon: Building2,
  },
  {
    title: "Cantonal",
    description: "Le Canton de Vaud gère la declaration, la taxation et les principales Démarches fiscales.",
    icon: BadgeInfo,
  },
  {
    title: "Communal",
    description: "La commune applique son taux communal et gère certaines taxes et Démarches locales.",
    icon: FileText,
  },
];

export const declarationSteps: DeclarationStep[] = [
  {
    title: "Accéder à VaudTax",
    description:
      "Depuis mars 2026, la déclaration vaudoise passe par la prestation VaudTax du Canton plutot que par un simple logiciel a Télécharger.",
  },
  {
    title: "Remplir la declaration",
    description: "Rassembler les revenus, deductions et justificatifs avant de completer le dossier fiscal.",
  },
  {
    title: "Envoyer au Canton",
    description: "La déclaration est ensuite deposee aupres de l'autorite fiscale cantonale.",
  },
];

export const declarationContacts: ContactMini[] = [
  {
    title: "Personnes physiques",
    role: "Questions courantes sur la déclaration et les acomptes des particuliers.",
    phone: "+41 21 316 00 00",
  },
  {
    title: "Personnes morales",
    role: "Parcours fiscal des sociétés et obligations des entreprises.",
    phone: "+41 21 316 21 20",
  },
];

export const stayProfiles = [
  {
    title: "Touristes",
    description: "Hotes de passage, touristes ou personnes hebergées chez de la famille ou des amis.",
    points: ["Hotes de passage", "Touristes", "Visites famille / amis"],
  },
  {
    title: "Résidents en séjour",
    description: "Habitants en séjour, domicile secondaire ou étudiants gardant leur domicile principal hors de la commune de séjour.",
    points: ["Domicile secondaire", "étudiants etrangers", "étudiants suisses hors domicile principal"],
  },
];

export const stayTariffs: StayTariff[] = [
  { category: "Cat. 1", price: "CHF 7.00 / nuit", description: "Hotels 5 etoiles sup., hotels 5 etoiles et assimiles.", tone: "from-[#0c5f87] to-[#1176a8]" },
  { category: "Cat. 2", price: "CHF 6.50 / nuit", description: "Hotels 4 etoiles sup., relais chateaux et assimiles.", tone: "from-[#1777a6] to-[#2391c7]" },
  { category: "Cat. 3", price: "CHF 6.00 / nuit", description: "Hotels 4 etoiles et assimiles.", tone: "from-[#2b88bb] to-[#47a3d5]" },
  { category: "Cat. 4", price: "CHF 5.50 / nuit", description: "Hotels 3 etoiles sup., hotels 3 etoiles, hotels 2 etoiles et assimiles.", tone: "from-[#4aa8cf] to-[#68bbde]" },
  { category: "Cat. 5", price: "CHF 5.00 / nuit", description: "Hotels 1 etoile, sans etoile, auberges de jeunesse, B&B, chambres d'hotes, campings et assimiles.", tone: "from-[#82c7e5] to-[#9dd4ec]", textTone: "dark" },
  { category: "Cat. 6", price: "CHF 3.00 / nuit", description: "Appartements, villas, studios, chambres, appart'hotels et assimiles.", tone: "from-[#acd9ef] to-[#c7e7f6]", textTone: "dark" },
  { category: "Cat. 7", price: "CHF 37 / mois", description: "séjour d'un mois sans interruption en appartements, villas, studios, chambres, instituts ou pensionnats assimiles.", tone: "from-prilly-yellow/85 to-prilly-yellow/55", textTone: "dark" },
];

export const stayJourneys: JourneyCard[] = [
  {
    title: "Hoteliers / loueurs",
    eyebrow: "Parcours de base",
    description: "Le parcours classique pour les hébergeurs declares à Prilly.",
    steps: ["S'annoncer au registre communal des loueurs", "Percevoir la taxe de séjour", "Déclarer chaque mois les personnes hébergees"],
    href: "/docs/ville/finances-impots/registre-communal-loueurs.pdf",
    label: "S'annoncer comme loueur",
  },
  {
    title: "Airbnb",
    eyebrow: "Cas simplifie",
    description: "La taxe de séjour est percue automatiquement par la plateforme depuis 2023.",
    highlight: "La collecte automatique n'exonere pas des autres obligations administratives si l'hébergement doit être annonce.",
  },
  {
    title: "Declaration mensuelle",
    eyebrow: "Echéance",
    description: "La déclaration des personnes hebergées doit être remise au plus tard le 10 du mois suivant.",
    steps: ["Recenser les séjours du mois", "Completer l'annonce des personnes", "Transmettre dans le délai mensuel"],
    href: "/docs/ville/finances-impots/annonce-personnes-taxe-sejour.pdf",
    label: "Ouvrir la déclaration mensuelle",
  },
];

export const stayExemptions = [
  "Résidents imposés à Prilly",
  "Patients",
  "Bénéficiaires de l'aide sociale",
  "Étudiants",
  "Militaires",
  "Enfants de moins de 12 ans",
];

export const stayDownloads: DownloadItem[] = [
  {
    title: "Reglement taxe de séjour",
    description: "Base legale intercommunale (RITS) pour la perception de la taxe de séjour.",
    href: "/docs/ville/finances-impots/reglement-intercommunal-taxe-sejour.pdf",
    label: "Télécharger le reglement",
    category: "Reglement",
  },
  {
    title: "Annonce des personnes",
    description: "Formulaire de déclaration des personnes hebergées des le 1er juillet 2024.",
    href: "/docs/ville/finances-impots/annonce-personnes-taxe-sejour.pdf",
    label: "Télécharger l'annonce",
    category: "Taxe de séjour",
  },
  {
    title: "Demande d'exonération",
    description: "Formulaire pour les cas d'exonération prevus par la reglementation.",
    href: "/docs/ville/finances-impots/demande-exoneration-taxe-sejour.pdf",
    label: "Télécharger le formulaire",
    category: "Exonération",
  },
  {
    title: "Registre communal des loueurs",
    description: "Formulaire d'annonce pour les hoteliers, logeurs et hébergements declares.",
    href: "/docs/ville/finances-impots/registre-communal-loueurs.pdf",
    label: "Télécharger le registre",
    category: "Loueurs",
  },
];

export const taxDownloads: DownloadItem[] = [
  {
    title: "Questionnaire ACI",
    description: "Formulaire utile pour certaines situations fiscales transmises a l'autorite cantonale.",
    href: "/docs/ville/finances-impots/questionnaire-aci.pdf",
    label: "Ouvrir le questionnaire",
    category: "Impots",
  },
  {
    title: "Information frontaliers",
    description: "Document d'information generale pour l'imposition des travailleurs frontaliers.",
    href: "/docs/ville/finances-impots/information-frontaliers.pdf",
    label: "Lire l'information",
    category: "Frontaliers",
  },
  {
    title: "Directives frontaliers 2025",
    description: "Directives concernant l'imposition des travailleurs frontaliers pour l'année 2025.",
    href: "/docs/ville/finances-impots/directives-frontaliers-2025.pdf",
    label: "Voir les directives",
    category: "Frontaliers",
  },
  {
    title: "Tableau employeur 2025",
    description: "Fichier employeur pour les travailleurs frontaliers - edition 2025.",
    href: "/docs/ville/finances-impots/frontaliers-employeur-2025.xlsx",
    label: "Télécharger le fichier",
    category: "Employeurs",
  },
  {
    title: "Tableau employeur 2024",
    description: "Fichier employeur pour les travailleurs frontaliers - edition 2024.",
    href: "/docs/ville/finances-impots/frontaliers-employeur-2024.xlsx",
    label: "Télécharger le fichier",
    category: "Employeurs",
  },
];

export const accountDocuments: YearDocument[] = [
  {
    year: "2024",
    title: "Etat financier 2024",
    href: "https://www.prilly.ch/fileadmin/documents/user_upload/03_brs_fichiers/Comptes_Communaux/Ville_de_Prilly_-_etats_financiers_2024.pdf",
    tag: "Compte",
  },
  {
    year: "2023",
    title: "Comptes communaux 2023",
    href: financeArchive,
    tag: "Compte",
  },
  {
    year: "2023",
    title: "Tableau de bord financier 2023",
    href: "https://www.prilly.ch/fileadmin/documents/user_upload/03_brs_fichiers/Comptes_Communaux/Ville_de_Prilly_-_communique_de_presse_et_tableau_de_bord_financier.pdf",
    tag: "Tableau de bord",
  },
  {
    year: "2023",
    title: "Analyse financiere UCV - novembre 2023",
    href: "/docs/ville/finances-impots/analyse-financiere-ucv-2023.pdf",
    tag: "Analyse",
  },
];

export const budgetDocuments: YearDocument[] = [
  {
    year: "2026",
    title: "Budget communal 2026",
    href: "https://www.prilly.ch/fileadmin/documents/user_upload/01._Budget_2026_brochure_imprimee.pdf",
    tag: "Budget actuel",
  },
  {
    year: "2026",
    title: "Budget communal 2026 amende",
    href: "https://www.prilly.ch/fileadmin/documents/user_upload/Ville_de_Prilly_-_B2026_-_amende_publié.pdf",
    tag: "Amende",
  },
  {
    year: "2025",
    title: "Budget communal 2025",
    href: financeArchive,
    tag: "Budget",
  },
  {
    year: "2024",
    title: "Budget communal 2024 amende",
    href: financeArchive,
    tag: "Archive",
  },
];

export const archiveYears = {
  accounts: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  budgets: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
};

export const helperProfiles: HelperProfile[] = [
  {
    id: "touriste",
    label: "Touriste",
    title: "Je suis hébergé à Prilly pour un séjour court",
    description: "Verifier si la taxe de séjour s'applique Dès la premiere nuit et comment beneficier de la carte transports.",
    actions: ["Lire les profils concernes", "Comprendre les tarifs", "Demander la Lausanne Transport Card"],
    href: "#taxe-sejour",
  },
  {
    id: "loueur",
    label: "Loueur",
    title: "Je loue ou j'héberge des personnes",
    description: "S'annoncer, percevoir la taxe, déclarer mensuellement et Télécharger les bons formulaires.",
    actions: ["S'annoncer comme loueur", "Déclarer les séjours", "Consulter le reglement"],
    href: "#demarches-sejour",
  },
  {
    id: "resident",
    label: "Résident",
    title: "Je cherche ma démarche fiscale ou un document",
    description: "Comprendre les niveaux d'impot, accéder au service du canton et retrouver les documents utiles.",
    actions: ["Accéder à VaudTax", "Voir les comptes et budgets", "Contacter le service des finances"],
    href: "#impots",
  },
];

export const financeContact: FinanceContact = {
  title: "Service des Finances",
  email: "finances@prilly.ch",
  phone: "+41 21 622 72 21",
  hours: [
    "Lundi-jeudi : 08h00-11h45 / 13h30-16h30",
    "Vendredi : 08h00-11h45",
  ],
  notes: [
    "Adresses utiles selon les cas : taxe.séjour@prilly.ch, frontaliers@prilly.ch, entreprises@prilly.ch, separquer@prilly.ch.",
  ],
};

export const taxSummaryCards = [
  {
    title: "Domicilie à Prilly",
    description: "Les résidents inscrits au registre ne sont pas dans le meme regime que les personnes en séjour.",
    icon: Users,
  },
  {
    title: "Dès la premiere nuit",
    description: "La taxe de séjour s'applique immediatement aux personnes concernées par le regime de séjour.",
    icon: CalendarDays,
  },
  {
    title: "Lausanne Transport Card",
    description: "La taxe ouvre aussi l'accès à un avantage de mobilite et a des réductions culturelles.",
    icon: Mail,
  },
  {
    title: "Séjour long",
    description: "Au-dela de 90 jours, il faut verifier l'obligation d'annonce au contrôle des habitants.",
    icon: ShieldCheck,
  },
];

export const quickLinks = [
  {
    title: "Accéder à VaudTax",
    description: "Prestation officielle du Canton de Vaud pour les declarations d'impot.",
    href: cantonTaxes,
    label: "Ouvrir le site du canton",
  },
  {
    title: "Archive comptes & budgets",
    description: "Tous les comptes communaux et budgets accèssibles depuis la page officielle de Prilly.",
    href: financeArchive,
    label: "Ouvrir l'archive",
  },
  {
    title: "Page stationnement",
    description: "Autorisations P, tarifs et ParkingPay restent disponibles sur la page stationnement dediee.",
    href: "/services/mobilite/stationnement",
    label: "Voir le stationnement",
  },
];

export const stayCardHighlight = {
  title: "Lausanne Transport Card",
  description: "La taxe de séjour ouvre l'accès  à la gratuite des transports et a plusieurs réductions culturelles dans l'agglomeration lausannoise.",
  href: "https://www.lausanne-tourisme.ch/fr/Z10434/lausanne-transport-card",
  label: "Faire la demande",
};

export const moreThan90DaysWarning =
  "Au-dela de 90 jours, l'obligation d'annonce au contrôle des habitants doit être vérifiée sans attendre.";
