import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeInfo,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";

export type SportsQuickaccèssItem = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export type AudienceItem = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export type HighlightActivity = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  audience: string;
};

export type FacilityItem = {
  title: string;
  description: string;
  details: string[];
  imageSrc: string;
  imageAlt: string;
  href?: string;
  external?: boolean;
  category: string;
};

export type DocumentItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type PoolRate = {
  title: string;
  price: string;
  note: string;
  details: string[];
};

export type FreeActivity = {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  imageSrc: string;
  imageAlt: string;
  href?: string;
  cta?: string;
  tags: string[];
};

export type YouthCenterActivity = {
  title: string;
  description: string;
  when: string;
};

export type LocalClub = {
  id: string;
  name: string;
  category: "musique-chorales" | "sports" | "societes-associations";
  blurb: string;
  contact?: string;
  email?: string;
  phone?: string;
  website?: string;
  keywords: string[];
};

export const sportsHubHero = {
  eyebrow: "Bouger à Prilly",
  title: "Sports et loisirs",
  description:
    "Bouger, se detendre, pratiquer en club, profiter des equipements communaux ou participer a des activités gratuites : retrouvez ici les offres sportives et de loisirs de Prilly.",
  imageSrc: "/images/sports-loisirs/sports-hub.jpg",
  imageAlt: "Illustration sports et loisirs",
  ctas: [
    { label: "Découvrir les activités", href: "/loisirs/sports-et-loisirs/activites-gratuites" },
    { label: "Voir les equipements", href: "/loisirs/sports-et-loisirs/equipements-sportifs" },
    { label: "Consulter les piscines", href: "/loisirs/sports-et-loisirs/piscines" },
  ],
};

export const sportsQuickaccèss: SportsQuickaccèssItem[] = [
  {
    title: "Equipements sportifs",
    description: "Terrains, salles, installations extérieures et lieux a connaitre pour pratiquer à Prilly.",
    href: "/loisirs/sports-et-loisirs/equipements-sportifs",
    imageSrc: "/images/sports-loisirs/complexe-fleur-de-lys.jpg",
    imageAlt: "Complexe sportif de la Fleur-de-Lys",
    label: "Lieux",
  },
  {
    title: "Piscines",
    description: "Choisir entre Fleur-de-Lys et Fontadel, verifier les horaires et comprendre les abonnements.",
    href: "/loisirs/sports-et-loisirs/piscines",
    imageSrc: "/images/sports-loisirs/fontadel-interieur.jpg",
    imageAlt: "Piscine couverte de Fontadel",
    label: "Baignade",
  },
  {
    title: "Activites gratuites",
    description: "Urban Training, Gym poussette, Urban Fit Senior et d'autres rendez-vous ouverts a tous.",
    href: "/loisirs/sports-et-loisirs/activites-gratuites",
    imageSrc: "/images/sports-loisirs/urban-training.jpg",
    imageAlt: "Visuel Urban Training",
    label: "Gratuit",
  },
  {
    title: "Centre de loisirs Carrefour-Sud",
    description: "Un lieu ressource pour les 12-18 ans avec activites, boxe, danse et temps collectifs.",
    href: "/loisirs/sports-et-loisirs/centre-de-loisirs",
    imageSrc: "/images/sports-loisirs/dimanches-actifs-2.jpg",
    imageAlt: "Jeunes dans une salle de loisirs",
    label: "Jeunesse",
  },
  {
    title: "Sociétés locales",
    description: "Trouver rapidement un club, une chorale ou une association sportive et locale.",
    href: "/loisirs/sports-et-loisirs/societes-locales",
    imageSrc: "/images/sports-loisirs/sports-divers.jpg",
    imageAlt: "Illustration de sports varies",
    label: "Annuaire",
  },
  {
    title: "Espaces publics et places de jeux",
    description: "Reperez les terrains multisports, les aires ludiques et les espaces extérieurs du quotidien.",
    href: "/loisirs/sports-et-loisirs/equipements-sportifs#espaces-publics",
    imageSrc: "/images/sports-loisirs/passiaux.jpg",
    imageAlt: "Place de jeux à Prilly",
    label: "Familles",
  },
];

export const audienceGroups: AudienceItem[] = [
  {
    title: "Enfants",
    description: "Des parcours ludiques, des activités accompagnées et des lieux adaptes pour bouger en confiance.",
    points: ["Piscines et places de jeux", "Centres et salles", "Activites accompagnées le dimanche"],
    icon: Sparkles,
  },
  {
    title: "Jeunes",
    description: "Des formats plus autonomes, du sport en salle, de la boxe et un centre de loisirs qui fait le lien.",
    points: ["Carrefour-Sud pour les 12-18 ans", "Sports gratuits en salle", "Cours de boxe et sorties"],
    icon: Users,
  },
  {
    title: "Adultes",
    description: "Des pratiques libres, des clubs et des equipements tres varies pour s'entrainer régulierement.",
    points: ["Urban Training", "Piscines et beach-volley", "Clubs sportifs et associations"],
    icon: Building2,
  },
  {
    title: "Seniors",
    description: "Des rendez-vous adaptes  à la mobilite et au maintien de la forme, dans une ambiance conviviale.",
    points: ["Urban Fit Senior des 60 ans", "Activites en douceur", "Offres communales et associatives"],
    icon: CheckCircle2,
  },
  {
    title: "Familles",
    description: "Des activités a partager ensemble avec des formats gratuits et des sites faciles a rejoindre.",
    points: ["Gym poussette", "On s'bouge meme le dimanche", "Equipements de proximite"],
    icon: Home,
  },
];

export const highlightedActivities: HighlightActivity[] = [
  {
    title: "Urban Training",
    description: "Des séances gratuites qui transforment la ville en parcours d'entrainement, sans jamais imposer de course.",
    href: "/loisirs/sports-et-loisirs/activites-gratuites#urban-training",
    imageSrc: "/images/sports-loisirs/urban-training.jpg",
    imageAlt: "Visuel Urban Training",
    label: "extérieur",
    audience: "Tout public",
  },
  {
    title: "Urban Fit Senior",
    description: "Tonicite, mobilite et equilibre dans un format adapte des 60 ans, accompagne par une coach.",
    href: "/loisirs/sports-et-loisirs/activites-gratuites#urban-fit-senior",
    imageSrc: "/images/sports-loisirs/urban-fit-senior.jpg",
    imageAlt: "Participants Urban Fit Senior",
    label: "60 ans et +",
    audience: "Seniors",
  },
  {
    title: "Gym poussette",
    description: "Un rendez-vous familial et gratuit le dimanche matin pour bouger avec bebe sans mettre la logistique entre parentheses.",
    href: "/loisirs/sports-et-loisirs/activites-gratuites#gym-poussette",
    imageSrc: "/images/sports-loisirs/gym-poussette.jpg",
    imageAlt: "Activite sportive avec poussettes",
    label: "Familles",
    audience: "Parents et petits",
  },
  {
    title: "On s'bouge meme le dimanche",
    description: "Grimper, courir, jouer et Découvrir les salles du College de l'Union un dimanche sur deux.",
    href: "/loisirs/sports-et-loisirs/activites-gratuites#dimanche",
    imageSrc: "/images/sports-loisirs/dimanches-actifs-1.jpg",
    imageAlt: "Activite sportive extérieure en groupe",
    label: "Dimanche",
    audience: "4 a 15 ans",
  },
  {
    title: "Coup d'pouce",
    description: "Une offre jeunesse solidaire qui montre aussi que la rubrique parle d'entraide et de vie locale, pas seulement de performance.",
    href: "/loisirs/sports-et-loisirs/activites-gratuites#coup-de-pouce",
    imageSrc: "/images/sports-loisirs/coup-de-pouce.png",
    imageAlt: "Affiche Coup d'pouce",
    label: "Jeunesse",
    audience: "14 a 20 ans",
  },
  {
    title: "Boxe et activités jeunes",
    description: "Des pratiques gratuites au Carrefour-Sud pour se depenser, progresser et retrouver un cadre collectif.",
    href: "/loisirs/sports-et-loisirs/centre-de-loisirs#activites",
    imageSrc: "/images/sports-loisirs/dimanches-actifs-3.jpg",
    imageAlt: "Jeunes en activité sportive en salle",
    label: "Carrefour-Sud",
    audience: "Jeunes",
  },
];

export const sportsFacilities: FacilityItem[] = [
  {
    title: "Complexe sportif de la Fleur-de-Lys",
    description: "Le grand site sportif communal avec football, multisport, jeux et fitness extérieur.",
    details: ["3 terrains de football", "2 synthetiques et 1 terrain herbe", "1 terrain d'entrainement ouvert au public"],
    imageSrc: "/images/sports-loisirs/complexe-fleur-de-lys.jpg",
    imageAlt: "Complexe sportif de la Fleur-de-Lys",
    href: "#fleur-de-lys",
    category: "Equipement communal",
  },
  {
    title: "Terrain de beach-volley",
    description: "Deux terrains hors sol, tres demandes en saison, avec reservation et regles d'usage specifiques.",
    details: ["Priorite pendant la saison de la piscine", "Reservation obligatoire", "Cadre adapte aux ecoles et associations"],
    imageSrc: "/images/sports-loisirs/beach-volley.jpg",
    imageAlt: "Terrain de beach-volley",
    href: "#beach-volley",
    category: "extérieur",
  },
  {
    title: "Terrains de petanque",
    description: "Un equipement simple et accèssible au coeur de la vie locale, utilise par la societe Le Lys et les habitants.",
    details: ["Pratique de proximite", "Cadre intergenerationnel", "accèssible en loisir ou en club"],
    imageSrc: "/images/sports-loisirs/petanque.jpg",
    imageAlt: "Terrains de petanque",
    href: "#petanque",
    category: "extérieur",
  },
  {
    title: "Tennis Club de Prilly",
    description: "Des courts et une vie de club bien identifies dans le paysage sportif communal.",
    details: ["Pratique en club", "Cours et competition", "Lien direct vers le club"],
    imageSrc: "/images/sports-loisirs/passiaux.jpg",
    imageAlt: "Terrain sportif à Prilly",
    href: "https://www.tcprilly.ch/",
    external: true,
    category: "Club",
  },
  {
    title: "Vaudoise Arena",
    description: "Un equipement regional majeur accèssible depuis Prilly pour la glace, les évènements et diverses pratiques.",
    details: ["Patinoire et activités glace", "Equipement regional", "Connexion pratique depuis Prilly"],
    imageSrc: "/images/sports-loisirs/vaudoise-arena.jpg",
    imageAlt: "Facade de la Vaudoise Arena",
    href: "https://vaudoisearena.ch/",
    external: true,
    category: "Regional",
  },
  {
    title: "Badminton Lausanne Association",
    description: "Une pratique en salle avec un ancrage associatif et des séances régulieres dans l'ouest lausannois.",
    details: ["Pratique encadree", "Club accèssible", "Renseignement via le club"],
    imageSrc: "/images/sports-loisirs/dimanches-actifs-4.jpg",
    imageAlt: "Salle de sport en interieur",
    href: "https://www.badminton-lausanne.ch/",
    external: true,
    category: "Club",
  },
  {
    title: "Piscine extérieure",
    description: "La piscine de la Fleur-de-Lys reste l'un des grands rendez-vous sportifs et familiaux de l'été prilleran.",
    details: ["Bassins et plongeoirs", "Restaurant sur site", "Abonnements en ligne"],
    imageSrc: "/images/sports-loisirs/fleur-de-lys-pool.jpg",
    imageAlt: "Piscine exterieure de la Fleur-de-Lys",
    href: "/loisirs/sports-et-loisirs/piscines",
    category: "Baignade",
  },
  {
    title: "Piscine couverte",
    description: "Le bassin de Fontadel apporte une offre plus technique, utile pour le public, les cours et les associations.",
    details: ["Bassin 25 m x 11 m", "Plancher mobile sur la moitie", "Ouverture publique le mercredi"],
    imageSrc: "/images/sports-loisirs/fontadel-entree.jpg",
    imageAlt: "Entree de la piscine de Fontadel",
    href: "/loisirs/sports-et-loisirs/piscines",
    category: "Baignade",
  },
  {
    title: "Salles omnisports et salles de gym",
    description: "Des lieux du quotidien pour les clubs, les ecoles et plusieurs offres gratuites destinées aux jeunes.",
    details: ["College de l'Union", "Pratique encadrée ou libre", "Sports en salle le dimanche"],
    imageSrc: "/images/sports-loisirs/dimanches-actifs-3.jpg",
    imageAlt: "Salles de sport",
    category: "Interieur",
  },
  {
    title: "Terrains multisports et places de jeux",
    description: "Des espaces publics ou l'on peut jouer, se retrouver et pratiquer sans passer par un club.",
    details: ["Usage libre", "Pratique de proximite", "Lieux familiaux"],
    imageSrc: "/images/sports-loisirs/passiaux.jpg",
    imageAlt: "Place de jeux",
    category: "Espace public",
  },
  {
    title: "Fitness outdoor",
    description: "Des engins en libre accès pour travailler la tonicite a l'air libre autour de la Fleur-de-Lys.",
    details: ["Libre accès", "Complement  à la course et  à la marche", "Usage individuel ou accompagne"],
    imageSrc: "/images/sports-loisirs/dimanches-actifs-1.jpg",
    imageAlt: "Activite extérieure",
    category: "extérieur",
  },
];

export const fleurDeLysFocus = {
  title: "Complexe sportif de la Fleur-de-Lys",
  description:
    "Le site concentre une grande partie de l'offre sportive extérieure de la commune. Il sert aux clubs, aux ecoles et  à la pratique libre, tout en restant lisible pour un usage quotidien.",
  stats: [
    { label: "Terrains", value: "3 terrains de football" },
    { label: "Composition", value: "1 herbe, 2 synthetiques" },
    { label: "accès libre", value: "1 terrain d'entrainement ouvert au public" },
    { label: "Autour", value: "Multisport, jeux et fitness outdoor" },
  ],
};

export const beachVolleyFocus = {
  title: "Terrain de beach-volley",
  description:
    "Le terrain est pense comme un equipement de saison, a utiliser avec anticipation. La commune priorise un usage bien organise pendant l'ouverture de la piscine.",
  rules: [
    "Deux terrains hors sol sont disponibles sur le site.",
    "L'utilisation est prioritaire pendant la saison de la piscine extérieure.",
    "La reservation se fait a l'avance et reste fortement recommandée pour eviter les deceptions.",
    "Les ecoles et les associations peuvent l'utiliser selon les conditions prevues par le reglement.",
  ],
  document: {
    title: "Reglement et dossier complet beach-volley",
    description: "Le dossier fusionne fourni reprend le cadre d'usage, les conditions de reservation et les restrictions a respecter sur place.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Consulter le dossier",
  },
};

export const petanqueFocus = {
  title: "Terrains de petanque",
  description:
    "Les pistes de petanque participent à une lecture plus detendue des loisirs à Prilly: un usage simple, convivial et intergenerationnel, au plus pres de la vie de quartier.",
};

export const poolHero = {
  eyebrow: "Baignade et pratique",
  title: "Piscines",
  description: "Piscine extérieure, bassin couvert, abonnements et informations pratiques pour choisir rapidement la bonne piscine à Prilly.",
  imageSrc: "/images/sports-loisirs/fleur-de-lys-pool.jpg",
  imageAlt: "Piscine exterieure de la Fleur-de-Lys",
};

export const poolChoiceCards = [
  {
    title: "Fleur-de-Lys",
    description: "La piscine estivale communale, tres familiale, avec horaires allonges en pleine saison et abonnements en ligne.",
    href: "#fleur-de-lys-pool",
    icon: CheckCircle2,
  },
  {
    title: "Fontadel",
    description: "Le bassin couvert pour la pratique plus technique, les cours et l'ouverture publique du mercredi.",
    href: "#fontadel",
    icon: Building2,
  },
];

export const outdoorPoolInfo = {
  title: "Piscine extérieure de la Fleur-de-Lys",
  imageSrc: "/images/sports-loisirs/fleur-de-lys-pool.jpg",
  imageAlt: "Piscine exterieure de la Fleur-de-Lys",
  address: "Sentier de la Fleur-de-Lys 2, 1008 Prilly",
  facts: [
    "Saison 2026 annoncee: ouverture le samedi 9 mai 2026 et fermeture le dimanche 13 septembre 2026.",
    "Horaires: 09:30 a 19:00, puis 19:30 du 29.06.2026 au 16.08.2026.",
    "La piscine peut fermer plus tot en cas de meteo defavorable.",
    "Parking payant a proximite et accès pouvant être regule en cas de forte affluence.",
    "Achat des abonnements en ligne annonce des le 4 mai 2026.",
    "Le restaurant Le Bouillon est gère par Prilly Plage SA.",
    "Une chaise Panda Pool soutient l'accèssibilite  à la mise a l'eau.",
  ],
  links: [
    { label: "Page officielle Fleur-de-Lys", href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs/piscine-extérieure-de-la-fleur-de-lys" },
    { label: "Restaurant Le Bouillon", href: "https://www.prilly-plage.ch/" },
  ],
};

export const poolRates: PoolRate[] = [
  {
    title: "AquaPass Regio saison estivale",
    price: "Multi-sites",
    note: "Ideal pour la saison de la Fleur-de-Lys et les autres piscines partenaires de l'ouest lausannois.",
    details: ["accès pense pour la periode d'été", "Lecture simple par foyer ou usage individuel", "Achat en ligne annonce avant l'ouverture"],
  },
  {
    title: "AquaPass Regio annuel",
    price: "Annuel",
    note: "Une formule lisible pour garder un accès etendu au fil de l'année selon les bassins partenaires.",
    details: ["Pense pour les usages réguliers", "Interessant pour alterner bassins couverts et extérieurs", "Base utile pour les nageurs fréquents"],
  },
  {
    title: "AquaPass Regio+ annuel",
    price: "Annuel +",
    note: "L'offre etendue met aussi en avant l'accès  à la Vaudoise Arena dans le reseau de la commune.",
    details: ["Version premium du pass", "Donne plus de souplesse regionale", "Mise en avant officielle par la commune"],
  },
  {
    title: "AquaPass famille",
    price: "Famille",
    note: "Concu pour simplifier les passages en tribu et rendre les sorties estivales plus lisibles.",
    details: ["Lecture budgetaire plus claire", "Bon fit pour les visites fréquentes", "A verifier dans les tarifs mis a jour avant la saison"],
  },
];

export const indoorPoolInfo = {
  title: "Piscine couverte de Fontadel",
  imageSrc: "/images/sports-loisirs/fontadel-interieur.jpg",
  imageAlt: "Interieur de la piscine de Fontadel",
  facts: [
    "Bassin de 25 m x 11 m avec une profondeur de 2 m.",
    "Un plancher mobile equipe environ la moitie du bassin pour adapter les usages.",
    "La piscine est ouverte au public le mercredi.",
    "Elle ferme pendant les vacances scolaires et pendant la saison d'été de Fleur-de-Lys.",
    "Des cours de natation avec ou sans handicap y sont proposes.",
    "Le site accueille aussi des clubs et des associations utilisatrices.",
  ],
  links: [
    { label: "Page officielle Fontadel", href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs/piscine-couverte-de-fontadel" },
  ],
};

export const poolDocuments: DocumentItem[] = [
  {
    title: "Reglement de la piscine",
    description: "Les points a connaitre avant de venir: surveillance des enfants, tenue adaptee, interdictions et responsabilites sur le site.",
    href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs/piscine-extérieure-de-la-fleur-de-lys",
    cta: "Voir la page officielle",
  },
  {
    title: "CGV vente des abonnements",
    description: "Le cadre de vente en ligne et les conditions de validite des abonnements de baignade.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Ouvrir le dossier complet",
  },
  {
    title: "Tarifs et AquaPass",
    description: "Les differentes formules AquaPass sont resumees dans la rubrique et detaillées dans les supports officiels.",
    href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs/piscine-extérieure-de-la-fleur-de-lys",
    cta: "Consulter les informations",
  },
  {
    title: "AquaPass Regio+",
    description: "La formule elargie valorisée par la commune pour articuler piscine et reseau regional.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Voir le document source",
  },
];

export const poolRuleSummary = [
  "Les enfants doivent être accompagnes et surveilles selon les regles du bassin et leur autonomie reelle.",
  "La tenue de bain doit rester adaptée  à la baignade et a l'hygiene du site.",
  "Les comportements mettant en danger les autres usagers ne sont pas admis.",
  "Les billets et abonnements doivent pouvoir être presentes et restent personnels selon les CGV.",
  "Les effets personnels restent sous la responsabilite des usagers.",
];

export const freeActivities: FreeActivity[] = [
  {
    title: "Urban Training",
    subtitle: "Bouger dehors sans pression",
    description:
      "La ville devient une salle de sport geante: marche, renforcement et exercices sur mobilier urbain, sans course a pied et avec un format adapte a tous.",
    details: [
      "Gratuit.",
      "Rendez-vous devant l'administration communale.",
      "Maximum 15 participants.",
      "Inscription obligatoire sur urban-training.ch.",
      "Source officielle actuelle: mercredis a 18:45, 60 minutes.",
    ],
    imageSrc: "/images/sports-loisirs/urban-training.jpg",
    imageAlt: "Visuel Urban Training",
    href: "https://www.urban-training.ch/",
    cta: "S'inscrire",
    tags: ["Tout public", "extérieur", "Inscription"],
  },
  {
    title: "Aqua Training",
    subtitle: "Le pendant aquatique d'Urban Training",
    description: "Un rendez-vous en bassin  à la Fleur-de-Lys pour travailler cardio et mobilite dans l'eau en petit format.",
    details: [
      "Lundi a 18:00.",
      "Duree: 45 minutes.",
      "Lieu: piscine de la Fleur-de-Lys.",
      "Inscription obligatoire sur urban-training.ch.",
    ],
    imageSrc: "/images/sports-loisirs/aqua-training.jpg",
    imageAlt: "Séance d'aqua training",
    href: "https://www.urban-training.ch/",
    cta: "Voir les inscriptions",
    tags: ["Piscine", "Cardio", "Inscription"],
  },
  {
    title: "Urban Fit Senior",
    subtitle: "Des 60 ans, dans une ambiance rassurante",
    description: "Une séance gratuite avec coach pour travailler tonicite, mobilite, souplesse et equilibre sans chercher la performance.",
    details: [
      "Des 60 ans.",
      "Chaque lundi hors vacances scolaires et jours feries.",
      "Inscription par mail a jeunesse@prilly.ch.",
      "Le point de rendez-vous officiel actuel est annonce place du College, derriere l'arret TL Prilly-Centre.",
    ],
    imageSrc: "/images/sports-loisirs/urban-fit-senior.jpg",
    imageAlt: "Participants Urban Fit Senior",
    tags: ["Seniors", "Equilibre", "Gratuit"],
  },
  {
    title: "Gym poussette",
    subtitle: "Bouger avec bebe",
    description: "Un format familial et gratuit qui favorise  à la fois la remise en forme et les rencontres entre jeunes parents.",
    details: [
      "Dimanche de 10:30 a 11:30.",
      "Activite ludique avec poussettes et enfants.",
      "Inscription obligatoire au 079 630 75 53.",
      "Places limitees.",
    ],
    imageSrc: "/images/sports-loisirs/gym-poussette.jpg",
    imageAlt: "Gym avec poussettes",
    tags: ["Familles", "Dimanche", "Gratuit"],
  },
  {
    title: "On s'bouge meme le dimanche",
    subtitle: "Des dimanches tres physiques au College de l'Union",
    description: "Le mur de grimpe et les salles de gym s'ouvrent un dimanche sur deux pour donner envie de jouer, grimper et se depenser en famille.",
    details: [
      "Pour les enfants de 4 a 15 ans et leurs familles.",
      "Horaires: 14:00 a 17:00.",
      "Lieu: mur de grimpe et salles de gym du College de l'Union.",
      "Les enfants de moins de 8 ans doivent être accompagnes.",
    ],
    imageSrc: "/images/sports-loisirs/dimanches-actifs-1.jpg",
    imageAlt: "Activite sportive le dimanche",
    tags: ["Jeunesse", "Familles", "Gratuit"],
  },
  {
    title: "Sports gratuits pour les jeunes",
    subtitle: "Boxe, salle et energie collective",
    description: "La commune propose aussi des formats gratuits pour adolescents et jeunes avec des séances simples a rejoindre.",
    details: [
      "Cours de boxe a Carrefour-Sud.",
      "Sports en salle et activités ponctuelles.",
      "La logique: offrir un cadre régulier, accèssible et motive.",
    ],
    imageSrc: "/images/sports-loisirs/dimanches-actifs-3.jpg",
    imageAlt: "Jeunes dans une salle de sport",
    tags: ["Jeunes", "Carrefour-Sud", "Gratuit"],
  },
  {
    title: "Coup d'pouce",
    subtitle: "Une aide jeunesse qui complete la rubrique",
    description: "Des jeunes de 14 a 20 ans proposent des services du quotidien et participent eux aussi  à la dynamique locale et intergenerationnelle de Prilly.",
    details: [
      "Public mobilise: 14 a 20 ans.",
      "Aide aux courses, promenade, jardinage, petits services.",
      "Reservation: 021 622 73 36 / 37.",
    ],
    imageSrc: "/images/sports-loisirs/coup-de-pouce.png",
    imageAlt: "Affiche Coup d'pouce",
    tags: ["Jeunesse", "Solidaire", "Vie locale"],
  },
];

export const youthCenterInfo = {
  title: "Centre de loisirs Carrefour-Sud",
  description:
    "Le Carrefour-Sud est un vrai lieu de vie pour les 12-18 ans: on y vient pour se poser, bouger, monter un projet, enregistrer, manger ensemble ou pratiquer une activite.",
  features: [
    "Espace reserve aux 12-18 ans.",
    "Coin salon, billard, baby-foot, ping-pong et PlayStation.",
    "Salles de danse et studio d'enregistrement.",
    "Possibilite de travailler, manger, monter des projets et rencontrer l'equipe jeunesse.",
  ],
  imageSrc: "/images/sports-loisirs/dimanches-actifs-2.jpg",
  imageAlt: "Espace jeunesse Carrefour-Sud",
};

export const youthCenterSchedule = [
  { day: "Mercredi", hours: "13:30 - 18:00" },
  { day: "Jeudi", hours: "15:30 - 18:00" },
  { day: "Vendredi", hours: "15:30 - 22:00" },
  { day: "Dimanche un sur deux", hours: "Selon programmation et activites" },
];

export const youthCenterActivities: YouthCenterActivity[] = [
  {
    title: "Soupers du vendredi",
    description: "Un temps central de la vie du lieu, propice  à la rencontre, a l'autonomie et aux discussions.",
    when: "Vendredi soir",
  },
  {
    title: "Cours de boxe",
    description: "Une activité gratuite tres identifiee dans la programmation jeunesse du Carrefour-Sud.",
    when: "Selon programme jeunesse",
  },
  {
    title: "Cours de danse",
    description: "Des séances pour pratiquer, se perfectionner ou simplement Découvrir dans une ambiance accèssible.",
    when: "Selon programme jeunesse",
  },
  {
    title: "Sorties et activités ponctuelles",
    description: "Vacances, temps forts et propositions culturelles ou sportives selon la saison.",
    when: "Toute l'annee",
  },
];

export const youthCenterNews = {
  description:
    "Le lieu ajuste sa programmation pendant les vacances et relaie l'essentiel sur ses reseaux. Pour suivre le rythme reel du centre, Instagram reste le meilleur reflexe.",
  instagram: "https://www.instagram.com/prilly_jeunesse/",
};

export const localClubCategories = [
  { id: "all", label: "Toutes" },
  { id: "musique-chorales", label: "Musique / chorales" },
  { id: "sports", label: "Sports" },
  { id: "societes-associations", label: "Sociétés et associations" },
] as const;

export const localClubs: LocalClub[] = [
  {
    id: "dynamhits",
    name: "Dynam'hits",
    category: "musique-chorales",
    blurb: "Choeur mixte prilleran tres visible dans les temps forts communaux et culturels.",
    contact: "Equipe du choeur",
    email: "info@dynamhits.ch",
    website: "https://www.dynamhits.ch/",
    keywords: ["chorale", "concert", "chant", "culture"],
  },
  {
    id: "union-instrumentale",
    name: "Union instrumentale de Prilly",
    category: "musique-chorales",
    blurb: "La fanfare de Prilly, bien ancrée dans la vie locale et les manifestations communales.",
    website: "https://www.fanfaredeprilly.ch/",
    keywords: ["fanfare", "musique", "orchestre", "culture"],
  },
  {
    id: "bedzules",
    name: "Les Bedzules",
    category: "musique-chorales",
    blurb: "Guggenmusik citée dans l'offre culturelle locale de Prilly.",
    website: "https://www.lesbedzules.ch/",
    keywords: ["guggenmusik", "musique", "carnaval"],
  },
  {
    id: "fsg-prilly",
    name: "FSG Prilly",
    category: "sports",
    blurb: "La Federation suisse de gymnastique section Prilly, l'une des grandes portes d'entrée du sport associatif.",
    website: "https://www.fsgprilly.ch/",
    keywords: ["gymnastique", "gym", "jeunes", "sport"],
  },
  {
    id: "fc-prilly-sports",
    name: "FC Prilly-Sports",
    category: "sports",
    blurb: "Club historique de football prilleran, tres connecte au complexe de la Fleur-de-Lys.",
    email: "secretariat@fcprillysports.ch",
    website: "https://www.fcprillysports.ch/",
    keywords: ["football", "club", "fleur-de-lys"],
  },
  {
    id: "tennis-club-prilly",
    name: "Tennis Club de Prilly",
    category: "sports",
    blurb: "Le club de tennis communal, pour la pratique réguliere, les cours et la vie de club.",
    website: "https://www.tcprilly.ch/",
    keywords: ["tennis", "raquette", "club"],
  },
  {
    id: "petanque-le-lys",
    name: "Petanque Le Lys",
    category: "sports",
    blurb: "Une societe locale tournée vers une pratique conviviale, intergenerationnelle et de proximite.",
    website: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/societes-locales",
    keywords: ["petanque", "boules", "convivial"],
  },
  {
    id: "association-familiale",
    name: "Association familiale Prilly",
    category: "societes-associations",
    blurb: "Un acteur local tres utile pour les familles, relie aussi par la commune.",
    website: "https://www.association-familiale.ch/",
    keywords: ["famille", "parents", "enfants", "association"],
  },
  {
    id: "scouts-covatannaz",
    name: "Scouts de Prilly - Groupe Covatannaz",
    category: "societes-associations",
    blurb: "Le mouvement scout local pour les enfants et les jeunes, ancre dans l'ouest lausannois.",
    website: "https://covatannaz.ch/",
    keywords: ["scouts", "jeunes", "plein air", "groupe"],
  },
  {
    id: "samaritains",
    name: "Samaritains de Prilly",
    category: "societes-associations",
    blurb: "Une association utile  à la vie locale, a l'entraide et  à la securite de proximite.",
    website: "https://www.samaritains.ch/",
    keywords: ["samaritains", "secours", "association"],
  },
];

export const sportsContacts = {
  common: {
    title: "Service jeunesse-sport-cohesion sociale",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "jeunesse@prilly.ch",
    phone: "+41 21 622 73 38",
  },
  pools: {
    title: "Domaines et Batiments",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "piscine@prilly.ch",
    phone: "+41 21 622 72 40",
  },
  youth: {
    title: "Carrefour-Sud",
    address: ["Route de Renens 22", "1008 Prilly"],
    email: "carrefour-sud@prilly.ch",
    phone: "+41 21 622 73 39",
    secondaryPhone: "+41 79 260 84 25",
  },
};

export const sportsDocumentLinks: DocumentItem[] = [
  {
    title: "Dossier complet sports, piscines et sociétés locales",
    description: "Le PDF fusionne fourni rassemble les documents pratiques, les reglements et la base utile pour enrichir la rubrique.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Ouvrir le dossier",
  },
  {
    title: "Page officielle des equipements sportifs",
    description: "La base communale officielle pour les installations, les liens clubs et les informations de reservation.",
    href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs?type=98",
    cta: "Voir la page officielle",
  },
];

export const infoBadges = [
  { title: "Pratique libre", description: "Pour venir bouger sans forcement passer par un club.", icon: ArrowRight },
  { title: "Encadrement communal", description: "Pour les activités gratuites, familiales, seniors et jeunesse.", icon: BadgeInfo },
  { title: "Sites bien identifies", description: "Fleur-de-Lys, Fontadel, College de l'Union, Carrefour-Sud.", icon: MapPin },
  { title: "Infos pratiques lisibles", description: "Tarifs, horaires, regles et contacts ressortent tout de suite.", icon: ShieldCheck },
  { title: "Offres aquatiques", description: "Piscines, Aqua Training et abonnements AquaPass.", icon: Trees },
  { title: "Vie associative", description: "Un annuaire de clubs et sociétés locales plus exploitable.", icon: Users },
] as const;
