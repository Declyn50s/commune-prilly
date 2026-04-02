import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export type EventSummaryItem = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type ProgramItem = {
  time?: string;
  title: string;
  description?: string;
};

export type ProgramDay = {
  label: string;
  date: string;
  hours: string;
  items: ProgramItem[];
};

export type HighlightItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DocumentItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const christmasMarketMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Loisirs", href: "/loisirs" },
    { label: "Marché de Nöel" },
  ],
  hero: {
    eyebrow: "évènement communal",
    title: "Marché de Nöel",
    description:
      "Un rendez-vous hivernal local, solidaire et familial, pense autour de l'artisanat, des animations, de la musique et de la rencontre au coeur de Prilly.",
    intro:
      "L'edition 2025 s'est tenue les 5 et 6 decembre sur la Place du Marche, devant Prilly Centre. Cette page rassemble l'essentiel du programme, l'esprit de l'évènement et les documents utiles, tout en donnant déjà envie de revenir en 2026.",
    status: "Edition 2025 terminee",
  },
};

export const christmasMarketSummary: EventSummaryItem[] = [
  {
    title: "Dates",
    value: "5-6 decembre 2025",
    description: "Deux jours d'animations et de marche artisanal pour lancer l'Avent à Prilly.",
    icon: CalendarDays,
  },
  {
    title: "Lieu",
    value: "Place du Marche, Prilly Centre",
    description: "Devant le centre commercial Prilly Centre, route de Cossonay 28.",
    icon: MapPin,
  },
  {
    title: "Animations",
    value: "Gratuites et sans inscription",
    description: "Ateliers, petit train, concerts et visites sont accèssibles librement au public.",
    icon: CheckCircle2,
  },
  {
    title: "Esprit",
    value: "Local et solidaire",
    description: "Artisanat d'ici et d'ailleurs, projets solidaires, rencontres et restauration conviviale.",
    icon: Users,
  },
];

export const christmasMarketHighlights: HighlightItem[] = [
  {
    title: "Artisanat d'ici et d'ailleurs",
    description: "Le marche met a l'honneur des creations locales et des savoir-faire artisanaux dans une ambiance accèssible et chaleureuse.",
    icon: Sparkles,
  },
  {
    title: "Musique et temps forts",
    description: "Choeurs d'ecoles, concert de jazz New Orleans, chant a capella et visite de Saint Nicolas rythment les deux journees.",
    icon: BadgeInfo,
  },
  {
    title: "Restauration en continu",
    description: "Raclette, marrons, gourmandises et vin chaud prolongent l'esprit de rencontre tout au long du week-end.",
    icon: Clock3,
  },
];

export const christmasMarketProgram: ProgramDay[] = [
  {
    label: "Vendredi 5 decembre",
    date: "5 decembre 2025",
    hours: "16h a 21h",
    items: [
      { time: "16h-21h", title: "Marche d'artisanat d'ici et d'ailleurs" },
      { time: "16h-20h", title: "Petit train de Noel" },
      { title: "Distribution de barbe a papa" },
      { title: "Creation de boules de Noel des 4 ans" },
      { time: "17h-18h", title: "Chantée du Choeur des ecoles de Prilly" },
      { time: "18h30-20h30", title: "Concert de Jazz New Orleans", description: "Par l'association prillerane Bigos'Muzyk." },
    ],
  },
  {
    label: "Samedi 6 decembre",
    date: "6 decembre 2025",
    hours: "10h a 18h",
    items: [
      { time: "10h-18h", title: "Marche d'artisanat" },
      { title: "Petit train de Noel" },
      { title: "Collecte de jouets pour Solidarite Jouets", description: "Au kiosque de la Coop." },
      { time: "10h-18h", title: "Portraits minute", description: "Par l'artiste prillerane Helia Aluai." },
      { time: "10h-13h30", title: "Creation de boules de Noel des 4 ans" },
      { time: "13h30-14h", title: "Demonstration et initiation au Kempo" },
      { time: "14h-18h", title: "Visite de Saint Nicolas et son ane", description: "Distribution de gourmandises." },
      { time: "14h30-18h", title: "Creation de bougies des 6 ans" },
      { time: "17h-17h45", title: "Chantée a capella", description: "Par le Choeur Dynam'hits de Prilly." },
    ],
  },
];

export const christmasMarketSolidarity = {
  title: "Le marche cote solidaire",
  description:
    "L'edition 2025 a mis en avant des projets solidaires et une collecte de jouets pour Solidarite Jouets, en lien avec les ecoles de Prilly.",
  points: [
    "Collecte de jouets au kiosque de la Coop pendant le marche.",
    "Jouets remis a neuf puis redistribues gratuitement a des enfants issus de familles defavorisées.",
    "Dimension locale et concrete de la solidarite, visible au coeur de l'évènement.",
    "Animations, restauration et artisanat pensés comme des moments de rencontre ouverts a toutes et tous.",
  ],
};

export const christmasMarketFoodAndActivities = [
  "Raclette",
  "Marrons",
  "Vin chaud",
  "Gourmandises",
  "Petit train de Noel",
  "Saint Nicolas et son ane",
  "Concerts et chantees",
  "Ateliers creatifs pour enfants",
];

export const christmasMarketContest = {
  title: "Concours des plus belles boules de Noel",
  description:
    "Les creations realisées pendant le marche decorent le sapin de l'évènement. Trois familles peuvent remporter des entrées pour Aquaparc.",
  reward: "3 entrées famille a Aquaparc",
};

export const christmasMarketDocuments: DocumentItem[] = [
  {
    title: "Communique de presse",
    description: "Le document qui pose le cadre de l'edition 2025: ambiance locale, solidaire, gratuite et familiale.",
    href: "/docs/marche-noel/CP_MdN2025_20.11.pdf",
    cta: "Consulter le communique",
  },
  {
    title: "Flyer-programme",
    description: "Le programme detaille jour par jour, avec horaires, animations, concerts, ateliers et informations pratiques.",
    href: "/docs/marche-noel/251106-PRILLY-NOEL-A5.pdf",
    cta: "Télécharger le flyer",
  },
];

export const christmasMarketContact = {
  service: "Service culture et integration",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "sci@prilly.ch",
  phone: "+41 21 622 74 40",
};

export const christmasMarketClosing = {
  title: "Merci et rendez-vous en 2026",
  description:
    "La Ville de Prilly remercie toutes les personnes, associations, artistes, artisan·e·s, familles et partenaires qui ont fait vivre l'edition 2025. Le rendez-vous est déjà donne pour retrouver cet esprit de fête en 2026.",
};
