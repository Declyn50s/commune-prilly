import { BadgeInfo, Building2, CalendarDays, CheckCircle2, Clock3, FileText, MapPin, Phone, ShieldCheck, Users } from "lucide-react";

export type PoolChoice = {
  title: string;
  type: string;
  availability: string;
  hours: string;
  highlight: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type PricingCard = {
  title: string;
  eyebrow: string;
  entries: Array<{ label: string; price: string }>;
  note: string;
};

export type PoolDocument = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const poolsHero = {
  eyebrow: "Service public pratique",
  title: "Piscines",
  description:
    "à Prilly, la population peut profiter d'une piscine extérieure en saison et d'un bassin couvert le reste de l'annee. La page aide a choisir rapidement le bon lieu, les bons horaires et le bon contact.",
  imageSrc: "/images/sports-loisirs/fontadel-interieur.jpg",
  imageAlt: "Piscine couverte de Fontadel",
  ctas: [
    { label: "Voir les horaires", href: "#choisir" },
    { label: "Consulter les abonnements", href: "#abonnements" },
  ],
};

export const seasonIndicator = {
  label: "Saison 2026 annoncee",
  description: "Ouverture Fleur-de-Lys le 9 mai 2026, fermeture le 13 septembre 2026.",
};

export const poolChoices: PoolChoice[] = [
  {
    title: "Piscine extérieure de la Fleur-de-Lys",
    type: "Piscine extérieure",
    availability: "Saison 2026: du samedi 9 mai au dimanche 13 septembre 2026",
    hours: "Tous les jours 09:30 - 19:00, puis 19:30 du 29.06 au 16.08",
    highlight: "Le bon choix pour l'été, les familles, les abonnements saison et la baignade en plein air.",
    href: "#fleur-de-lys",
    imageSrc: "/images/sports-loisirs/fleur-de-lys-pool.jpg",
    imageAlt: "Piscine exterieure de la Fleur-de-Lys",
  },
  {
    title: "Piscine couverte de Fontadel",
    type: "Bassin couvert",
    availability: "Ouverture publique le mercredi hors vacances scolaires et hors saison d'été",
    hours: "Mercredi 16:00 - 20:00",
    highlight: "Le bon choix pour nager en interieur, suivre des cours et maintenir une pratique réguliere hors ete.",
    href: "#fontadel",
    imageSrc: "/images/sports-loisirs/fontadel-entree.jpg",
    imageAlt: "Entree de la piscine de Fontadel",
  },
];

export const fleurDeLysInfo = {
  title: "Fleur-de-Lys",
  imageSrc: "/images/sports-loisirs/fleur-de-lys-pool.jpg",
  imageAlt: "Piscine exterieure de la Fleur-de-Lys",
  address: "Sentier de la Fleur-de-Lys 2, 1008 Prilly",
  phone: "+41 21 622 72 40",
  facts: [
    "Saison 2026: ouverture le samedi 9 mai 2026, fermeture le dimanche 13 septembre 2026.",
    "Horaires tous les jours de 09:30 a 19:00.",
    "Horaires prolonges a 19:30 du 29 juin au 16 aout 2026.",
    "Fermeture possible en cas de meteo defavorable.",
    "Parking payant a disposition.",
    "Achat des abonnements de saison en ligne des le 4 mai 2026.",
    "Restaurant Le Bouillon gère par Prilly Plage SA, pas par la commune.",
    "accèssibilite renforcée grace  à la chaise Panda Pool de la Fondation Cerebral.",
  ],
  links: [
    { label: "Acheter un abonnement", href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs/piscine-extérieure-de-la-fleur-de-lys" },
    { label: "Restaurant Le Bouillon", href: "https://www.prilly-plage.ch/" },
  ],
};

export const pricingCards: PricingCard[] = [
  {
    title: "AquaPass Regio saison estivale",
    eyebrow: "Saison d'été",
    entries: [
      { label: "Adulte", price: "CHF 130" },
      { label: "étudiant / apprenti / AVS / AI", price: "CHF 80" },
      { label: "Enfant", price: "CHF 60" },
    ],
    note: "La formule la plus simple pour la saison extérieure.",
  },
  {
    title: "AquaPass Regio annuel",
    eyebrow: "Annuel",
    entries: [
      { label: "Adulte", price: "CHF 250" },
      { label: "étudiant / apprenti / AVS / AI", price: "CHF 180" },
      { label: "Enfant", price: "CHF 125" },
    ],
    note: "Pour un usage régulier au fil de l'annee.",
  },
  {
    title: "AquaPass Regio+ annuel",
    eyebrow: "Annuel +",
    entries: [
      { label: "Adulte", price: "CHF 360" },
      { label: "étudiant / apprenti / AVS / AI", price: "CHF 275" },
      { label: "Enfant", price: "CHF 180" },
    ],
    note: "La formule elargie mise en avant dans les supports AquaPass Regio+.",
  },
  {
    title: "AquaPass Regio Famille saison estivale",
    eyebrow: "Famille",
    entries: [
      { label: "Adulte 1", price: "CHF 130" },
      { label: "Adulte 2", price: "CHF 90" },
      { label: "Adulte 3 et +", price: "CHF 90" },
      { label: "Enfant 1", price: "CHF 50" },
      { label: "Enfant 2", price: "CHF 30" },
      { label: "Enfant 3 et +", price: "CHF 10" },
      { label: "Enfant sans parent", price: "CHF 60" },
    ],
    note: "La carte la plus lisible pour les sorties de famille en saison.",
  },
];

export const pricingNotice = {
  title: "Abonnements en ligne et documents de vente",
  description:
    "Les abonnements saison sont annonces en ligne des le 4 mai 2026. Les conditions de vente, les CGV et les supports AquaPass sont resumes ici pour eviter de passer par plusieurs PDF avant de comprendre l'essentiel.",
  ctas: [
    { label: "Consulter la vente en ligne", href: "https://www.prilly.ch/vivre-a-prilly/sports-et-loisirs/equipements-sportifs/piscine-extérieure-de-la-fleur-de-lys" },
    { label: "Voir les documents utiles", href: "#documents" },
  ],
};

export const fontadelInfo = {
  title: "Fontadel",
  imageSrc: "/images/sports-loisirs/fontadel-interieur.jpg",
  imageAlt: "Interieur de la piscine couverte de Fontadel",
  address: "Chemin de Fontadel 2, 1008 Prilly",
  phone: "+41 21 557 99 32",
  email: "piscine@prilly.ch",
  facts: [
    "Bassin de 25 m de long sur 11 m de large.",
    "Profondeur: 2 m.",
    "4 lignes de nage.",
    "Plancher mobile sur la moitie du bassin.",
    "Ouverture au public: mercredi de 16:00 a 20:00.",
    "Fermee pendant les vacances scolaires.",
    "Fermee durant la saison d'ouverture de Fleur-de-Lys.",
    "Cours de natation enfants et adultes avec ou sans handicap les lundis et jeudis de 16:00 a 17:00 avec Les Pattes Palmes & Secours Urgence.",
    "Le bassin est aussi utilise par des clubs et associations.",
  ],
};

export const practicalRules = [
  {
    title: "Securite et enfants",
    description: "Les enfants doivent être surveilles selon leur age et leur autonomie. Le respect des consignes du personnel reste obligatoire.",
    icon: ShieldCheck,
  },
  {
    title: "Hygiene et accès",
    description: "L'accès suppose une tenue de bain adaptée et le respect des regles d'hygiene du bassin et des vestiaires.",
    icon: CheckCircle2,
  },
  {
    title: "Comportements interdits",
    description: "Les comportements dangereux, nuisants ou incompatibles avec la securite et la tranquillite du site ne sont pas admis.",
    icon: BadgeInfo,
  },
  {
    title: "Meteo et fermetures",
    description: "A Fleur-de-Lys, une fermeture anticipee ou ponctuelle reste possible en cas de meteo defavorable.",
    icon: CalendarDays,
  },
  {
    title: "Billets et abonnements",
    description: "Les modalites de vente, de validite et d'usage des abonnements sont encadrées par les CGV et les regles de caisse.",
    icon: FileText,
  },
  {
    title: "Responsabilite des usagers",
    description: "Chaque visiteur reste responsable de ses effets personnels et du respect du cadre d'usage communal.",
    icon: Users,
  },
];

export const poolDocuments: PoolDocument[] = [
  {
    title: "Reglement de la piscine",
    description: "Resume le cadre d'usage du bassin, la surveillance, l'hygiene et les comportements attendus.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Consulter le reglement",
  },
  {
    title: "Tarifs de saison",
    description: "Le support tarifaire qui detaille les differentes formules AquaPass et les usages associes.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Voir les tarifs",
  },
  {
    title: "AquaPass Regio+",
    description: "Le document de presentation de la formule etendue, utile si l'on hesite entre plusieurs abonnements.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Voir AquaPass Regio+",
  },
  {
    title: "CGV vente des abonnements",
    description: "Les conditions de vente en ligne, de validite et de responsabilite a connaitre avant l'achat.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Voir les CGV",
  },
  {
    title: "Liste des clubs et associations",
    description: "Le dossier source recense aussi les structures utilisatrices des bassins et des equipements lies.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Ouvrir la liste",
  },
  {
    title: "Reglement du beach-volley",
    description: "Un document connexe utile si l'on fréquente aussi les terrains du site de la Fleur-de-Lys.",
    href: "/docs/sports-loisirs/sports-loisirs-merged.pdf",
    cta: "Voir le reglement",
  },
];

export const contactCards = [
  {
    title: "Fleur-de-Lys",
    subtitle: "Piscine extérieure",
    email: "piscine@prilly.ch",
    phone: "+41 21 622 72 40",
    lines: ["Sentier de la Fleur-de-Lys 2", "1008 Prilly"],
    icon: MapPin,
  },
  {
    title: "Fontadel",
    subtitle: "Piscine couverte",
    email: "piscine@prilly.ch",
    phone: "+41 21 557 99 32",
    lines: ["Chemin de Fontadel 2", "1008 Prilly"],
    icon: Building2,
  },
  {
    title: "Service des domaines et batiments",
    subtitle: "Questions administratives",
    email: "domaines@prilly.ch",
    phone: "+41 21 622 73 55",
    lines: ["Route de Cossonay 40", "1008 Prilly"],
    icon: Phone,
  },
  {
    title: "Exploitation et gerance",
    subtitle: "Appui operationnel",
    email: "exploitation@prilly.ch",
    phone: "+41 21 622 75 80",
    lines: ["Route de Cossonay 40", "1008 Prilly"],
    icon: Clock3,
  },
];
