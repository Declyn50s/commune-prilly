export type PublicSpaceAction = {
  title: string;
  description: string;
  href: string;
};

export type PublicSpaceDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
  tag: string;
};

export type PublicSpaceContact = {
  title: string;
  role: string;
  address: string[];
  email: string;
  phone: string;
};

export const publicSpacesHero = {
  title: "Espaces publics",
  description: "La Ville de Prilly met a disposition des espaces de detente, de loisirs et de nature accèssibles a toutes et tous.",
  ctas: [
    { label: "Voir les espaces", href: "#espaces-loisirs" },
    { label: "Louer un jardin", href: "#jardins-familiaux" },
    { label: "Découvrir la nature", href: "#nature-patrimoine" },
  ],
  notes: [
    "Une page simple pour distinguer les usages de loisirs, les jardins familiaux et le patrimoine naturel communal.",
    "Les informations pratiques sont resumees ici, avec les documents officiels disponibles au bon moment.",
  ],
};

export const publicSpaceCards: PublicSpaceAction[] = [
  {
    title: "Equipements sportifs",
    description: "Terrains, salles, piscines, fitness outdoor et lieux de pratique pour tous les ages.",
    href: "/loisirs/sports-et-loisirs/equipements-sportifs",
  },
  {
    title: "Places de jeux",
    description: "Des espaces publics de proximite pour jouer, respirer et profiter des amenagements extérieurs en famille.",
    href: "/loisirs/sports-et-loisirs/equipements-sportifs",
  },
];

export const publicGardenKeyFacts = [
  "125 jardins familiaux situes au lieu-dit Sous-Cery.",
  "Parcelles de 110 a 165 m2.",
  "Location reservée aux habitantes et habitants de Prilly.",
  "CHF 2.50 / m2 / an, eau d'arrosage incluse.",
];

export const publicGardenHowTo = [
  "La demande se fait par mail ou par courrier.",
  "Adresse de contact: exploitation@prilly.ch.",
  "Le service Exploitation et Gerance renseigne sur les disponibilités et la procedure.",
];

export const publicGardenConditions = [
  "Domiciliation obligatoire à Prilly depuis au moins 2 ans.",
  "Sous-location interdite.",
  "Entretien obligatoire de la parcelle et de ses abords.",
  "Vente des produits cultives interdite.",
  "Garantie financiere de CHF 500 demandee.",
];

export const publicForestFacts = [
  "7 hectares de forets communales.",
  "Essences majoritairement feuillues: hetre, erable, chene et autres essences locales.",
  "Des espaces de detente accèssibles a tous, en meme temps qu'un refuge pour la faune.",
  "Un patrimoine naturel qui participe au cadre de vie et  à la biodiversite locale.",
];

export const publicForestBehavior = [
  "Rester sur les chemins.",
  "Ne pas laisser de déchets.",
  "Respecter la faune et les milieux naturels.",
  "Eviter le bruit et les comportements perturbateurs.",
];

export const publicVineFacts = [
  "Vigne communale de 2'032 m2.",
  "Vendanges en octobre.",
  "Participation des eleves  à la recolte selon l'usage local.",
  "Une production communale qui valorise le territoire et la transmission.",
];

export const publicVineHighlights = [
  "Vin blanc: La Grand-Vigne",
  "Vin rouge: Dame de feu",
];

export const publicNatureDocuments: PublicSpaceDocument[] = [
  {
    title: "Reglement des jardins familiaux de Sous-Cery",
    description: "Le document de reference pour les conditions d'attribution, les obligations d'entretien et les regles de location.",
    href: "/docs/domaine-communal/reglement-jardins-familiaux.pdf",
    label: "Télécharger le reglement",
    tag: "Jardins",
  },
  {
    title: "Les forets, une richesse a preserver",
    description: "Une presentation du patrimoine forestier communal et des enjeux de gestion durable.",
    href: "/docs/domaine-communal/forets-richesse-a-preserver.pdf",
    label: "Voir le depliant",
    tag: "Forets",
  },
  {
    title: "Petit guide du savoir-vivre en foret",
    description: "Les bons reflexes a connaitre pour profiter des bois sans les degrader.",
    href: "/docs/domaine-communal/bienvenue-dans-les-bois.pdf",
    label: "Ouvrir le guide",
    tag: "Bonnes pratiques",
  },
  {
    title: "En foret, le respect s'impose",
    description: "Le rappel rapide des regles de comportement en foret.",
    href: "/docs/domaine-communal/en-foret-le-respect-s-impose.pdf",
    label: "Voir les regles en foret",
    tag: "Foret",
  },
];

export const publicSpacesContact: PublicSpaceContact = {
  title: "Exploitation et Gerance",
  role: "Jardins familiaux, forêt communale, vigne communale et renseignements sur les espaces publics exploites par la Ville.",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "exploitation@prilly.ch",
  phone: "+41 21 622 75 80",
};
