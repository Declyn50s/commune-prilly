export type LibraryHourSlot = {
  start: string;
  end: string;
  label: string;
};

export type LibraryDayHours = {
  day: string;
  dayIndex: number;
  slots: LibraryHourSlot[];
};

export type LibraryFeatureCard = {
  title: string;
  description: string;
  points: string[];
  icon: "borrow" | "read" | "work" | "discover" | "participate" | "support";
};

export type LibraryCollectionSection = {
  id: string;
  label: string;
  title: string;
  description: string;
  groups: Array<{
    title: string;
    items: string[];
  }>;
};

export type LibraryUsefulService = {
  title: string;
  description: string;
  points: string[];
  tone?: "default" | "soft";
};

export type LibraryActivity = {
  title: string;
  description: string;
  audience: string;
};

export const libraryHero = {
  title: "Bibliotheque communale",
  description:
    "Un lieu ouvert a toutes et tous pour lire, apprendre, Découvrir, travailler et partager.",
  badges: ["Inscription gratuite", "Ouverte a tout le monde", "WIFI & espaces de travail"],
  logoSrc: "/images/bibliotheque/logo-bibliotheque-prilly.png",
  logoAlt: "Logo de la Bibliotheque de la Ville de Prilly",
  ctas: [
    { label: "Voir les horaires", href: "#infos-pratiques" },
    { label: "Accéder au site de la bibliotheque", href: "https://biblio.prilly.ch/" },
    { label: "Nous contacter", href: "#contact" },
  ],
};

export const libraryHours: LibraryDayHours[] = [
  { day: "Mardi", dayIndex: 2, slots: [{ start: "15:00", end: "19:00", label: "15h00 - 19h00" }] },
  {
    day: "Mercredi",
    dayIndex: 3,
    slots: [
      { start: "09:30", end: "12:00", label: "09h30 - 12h00" },
      { start: "14:00", end: "18:30", label: "14h00 - 18h30" },
    ],
  },
  { day: "Jeudi", dayIndex: 4, slots: [{ start: "15:00", end: "19:00", label: "15h00 - 19h00" }] },
  { day: "Vendredi", dayIndex: 5, slots: [{ start: "15:00", end: "18:30", label: "15h00 - 18h30" }] },
  { day: "Samedi", dayIndex: 6, slots: [{ start: "09:30", end: "12:00", label: "09h30 - 12h00" }] },
];

export const libraryPracticalCards = [
  {
    title: "Adresse",
    value: "Route de Cossonay 42, 1008 Prilly",
    detail: "Dans le batiment historique de Castelmont, au centre-ville.",
    kind: "address" as const,
  },
  {
    title: "Telephone",
    value: "+41 21 622 72 16 / 17",
    detail: "Pour les questions pratiques, le pret, les animations ou les services.",
    kind: "phone" as const,
  },
  {
    title: "E-mail",
    value: "bibliotheque@prilly.ch",
    detail: "Le bon point d'entrée pour une demande, une information ou une prise de contact.",
    kind: "email" as const,
  },
  {
    title: "Inscription",
    value: "Gratuite",
    detail: "La bibliotheque est ouverte a tout le monde, habitants comme visiteurs.",
    kind: "free" as const,
  },
];

export const libraryFeatures: LibraryFeatureCard[] = [
  {
    title: "Emprunter",
    description: "Une offre large et tres concrete pour repartir avec quelque chose d'utile ou d'inspirant.",
    points: ["Pret de documents", "Livres numeriques", "Liseuses et consoles"],
    icon: "borrow",
  },
  {
    title: "Lire sur place",
    description: "Un lieu calme et accueillant pour prendre le temps, feuilleter ou simplement faire une pause.",
    points: ["Coin cafe / the", "Presse du jour", "Revues et journaux hebdomadaires"],
    icon: "read",
  },
  {
    title: "Travailler",
    description: "Des espaces simples, pratiques et utiles pour etudier, teletravailler ou faire une recherche.",
    points: ["WIFI", "Espaces de travail", "2 ordinateurs + 1 tablette"],
    icon: "work",
  },
  {
    title: "Découvrir",
    description: "La bibliotheque fait circuler les idées et les curiosites bien au-dela des rayons classiques.",
    points: ["Expositions thematiques", "PressReader", "Collections multilingues"],
    icon: "discover",
  },
  {
    title: "Participer",
    description: "Un lieu vivant avec des propositions tout au long de l'année pour differents publics.",
    points: ["Contes et bricolages", "Ne pour lire", "Tricot et ateliers"],
    icon: "participate",
  },
  {
    title: "Se faire accompagner",
    description: "La bibliotheque rend le lieu plus proche, plus inclusif et plus facile d'accès.",
    points: ["Portage a domicile", "Visites de classes", "Accompagnement numerique"],
    icon: "support",
  },
];

export const libraryCollections: LibraryCollectionSection[] = [
  {
    id: "emprunter",
    label: "A emprunter",
    title: "Documents a emprunter",
    description: "Des supports varies pour les usages du quotidien, la detente, l'apprentissage et la decouverte.",
    groups: [
      {
        title: "Supports",
        items: [
          "Livres",
          "Revues",
          "DVD",
          "Livres audio",
          "Jeux video",
          "Consoles",
          "Liseuses",
          "Livres numeriques",
        ],
      },
      {
        title: "Formats pedagogiques et jeunesse",
        items: ["Kamishibai", "Castelet", "Cartes de langage des signes pour bebe"],
      },
    ],
  },
  {
    id: "inclusives",
    label: "Inclusives",
    title: "Collections inclusives",
    description: "Des collections pensees pour faciliter l'accès  à la lecture et accompagner de nouveaux parcours de vie.",
    groups: [
      {
        title: "Pour mieux entrer dans la lecture",
        items: ["Collection Facile a Lire pour adultes", "Collection renouvelée chaque annee"],
      },
      {
        title: "Pour mieux s'installer",
        items: ["Collection Vivre en Suisse", "Ressources pour les personnes nouvellement arrivées"],
      },
    ],
  },
  {
    id: "langues",
    label: "Langues",
    title: "Des langues pour tous les publics",
    description: "Une bibliotheque qui facilite la lecture dans plusieurs langues, pour les adultes comme pour les enfants.",
    groups: [
      {
        title: "Pour adultes",
        items: ["Allemand", "Anglais", "Espagnol", "Italien", "Portugais"],
      },
      {
        title: "Pour enfants",
        items: [
          "Albanais",
          "Allemand",
          "Anglais",
          "Arabe",
          "Bosniaque",
          "Bulgare",
          "Espagnol",
          "Italien",
          "Portugais",
          "Serbe",
          "Tamoul",
          "Turc",
        ],
      },
    ],
  },
  {
    id: "numeriques",
    label: "Numeriques",
    title: "Ressources numeriques",
    description: "Une extension pratique de la bibliotheque pour lire, consulter et explorer autrement.",
    groups: [
      {
        title: "A distance ou sur place",
        items: ["Livres numeriques", "PressReader", "Journaux et revues numeriques dans plusieurs langues"],
      },
    ],
  },
];

export const libraryUsefulServices: LibraryUsefulService[] = [
  {
    title: "Portage a domicile",
    description: "Un service concret pour les personnes a mobilite reduite habitant Prilly.",
    points: ["Livres et autres documents apportes a domicile", "Pense pour garder le lien avec la lecture", "Coordination par l'equipe de la bibliotheque"],
  },
  {
    title: "Visites de classes",
    description: "Un appui pour les etablissements scolaires et la decouverte des ressources de la bibliotheque.",
    points: ["Accueil des classes", "Presentation du lieu et des collections", "Activites adaptées aux publics scolaires"],
  },
  {
    title: "Grainotheque participative",
    description: "Un service vivant, local et collaboratif qui relie lecture, saisons et partage.",
    points: ["Echange de graines", "Dimension participative", "Ancrage local et durable"],
    tone: "soft",
  },
  {
    title: "Outils numeriques sur place",
    description: "Des outils pratiques pour consulter, imprimer, scanner ou faire une recherche.",
    points: ["2 ordinateurs + 1 tablette", "Imprimante / scanner", "Reserve aux adultes et aux enfants de plus de 12 ans"],
  },
];

export const libraryActivities: LibraryActivity[] = [
  {
    title: "Contes",
    description: "Des moments de recit et d'imaginaire pour les plus jeunes et les familles.",
    audience: "Jeunesse & familles",
  },
  {
    title: "Dessin",
    description: "Des ateliers pour observer, creer et s'exprimer autrement autour du livre et de l'image.",
    audience: "Enfants & ados",
  },
  {
    title: "Bricolages",
    description: "Des activités manuelles pour prolonger la lecture par le geste et l'invention.",
    audience: "Familles",
  },
  {
    title: "Ne pour lire",
    description: "Des rendez-vous de sensibilisation  à la lecture des le plus jeune age.",
    audience: "Petite enfance",
  },
  {
    title: "Tricot",
    description: "Des temps conviviaux et intergenerationnels autour du faire ensemble.",
    audience: "Adultes",
  },
  {
    title: "Communication",
    description: "Des propositions pour echanger, apprendre et mieux circuler entre les publics.",
    audience: "Tous publics",
  },
  {
    title: "Decouverte des outils numeriques",
    description: "Des temps d'accompagnement pour prendre en main des ressources ou des usages numeriques.",
    audience: "Adultes & seniors",
  },
  {
    title: "Expositions thematiques",
    description: "Des selections et mises en scene pour inspirer de nouvelles lectures toute l'annee.",
    audience: "Tous publics",
  },
];

export const libraryQuickLinks = [
  { label: "Site internet de la Bibliotheque de Prilly", href: "https://biblio.prilly.ch/" },
  { label: "Facebook", href: "https://www.facebook.com/biblio.prilly" },
  { label: "Instagram", href: "https://www.instagram.com/biblioprilly/" },
];

export const libraryContact = {
  title: "Bibliotheque de la Ville de Prilly",
  address: ["Route de Cossonay 42", "1008 Prilly"],
  email: "bibliotheque@prilly.ch",
  phone: "+41 21 622 72 16 / 17",
  website: "https://biblio.prilly.ch/",
  directionsHref: "https://maps.google.com/?q=Route+de+Cossonay+42,+1008+Prilly",
};
