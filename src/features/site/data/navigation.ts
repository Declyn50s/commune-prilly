import type { NavSection } from "@/types/content";

export type RouteDefinition = {
  slug: string;
  path: string;
  title: string;
  description: string;
  legacyKey?: string;
};

export const navSections: NavSection[] = [
  {
    label: "Vivre",
    href: "/vivre",
    description: "Vie quotidienne, familles, seniors et population.",
    groups: [
      {
        title: "S’installer à Prilly",
        links: [
          { label: "Bienvenue", href: "/vivre/sinstaller", description: "Premières informations utiles." },
          { label: "Logement", href: "/vivre/logement", description: "Aides et informations logement." },
          { label: "Arrivée", href: "/demarches/arrivee", description: "Annonce d’arrivée à la commune." },
        ],
      },
      {
        title: "Famille et éducation",
        links: [
          { label: "Enfance", href: "/vivre/enfance-ecoles/accueil-prescolaire", description: "Accueil préscolaire." },
          { label: "Écoles", href: "/vivre/enfance-ecoles/ecoles", description: "Écoles et scolarité." },
          { label: "Jeunesse", href: "/vivre/enfance-ecoles/centre-loisirs", description: "Centre de loisirs et activités." },
        ],
      },
      {
        title: "Population",
        links: [
          { label: "Seniors", href: "/vivre/seniors", description: "Prestations et accompagnement." },
          { label: "Intégration", href: "/vivre/integration", description: "Cours, ressources et activités." },
          { label: "Vie de quartier", href: "/vivre/vie-quartier", description: "Quartiers et participation locale." },
        ],
      },
      {
        title: "Annuaire",
        links: [
          { label: "Services communaux", href: "/contact/services-communaux", description: "Services et horaires." },
          { label: "Contacts utiles", href: "/contact/annuaire", description: "Annuaire communal." },
        ],
      },
    ],
  },
  {
    label: "Démarches",
    href: "/demarches",
    description: "Démarches administratives, documents et prestations.",
    groups: [
      {
        title: "Arrivée et départ",
        links: [
          { label: "Arrivée à Prilly", href: "/demarches/arrivee" },
          { label: "Départ de Prilly", href: "/demarches/depart" },
          { label: "Annonce de déménagement", href: "/demarches/annonce-demenagement" },
        ],
      },
      {
        title: "Documents officiels",
        links: [
          { label: "Attestations", href: "/demarches/attestations" },
          { label: "Certificats", href: "/demarches/attestations" },
          { label: "Légalisation de signature", href: "/demarches/office-population" },
        ],
      },
      {
        title: "Vie quotidienne",
        links: [
          { label: "Carte de déchèterie", href: "/demarches/carte-decheterie" },
          { label: "Chiens", href: "/demarches/chiens" },
          { label: "Inhumations", href: "/demarches/inhumations" },
        ],
      },
      {
        title: "Déchets",
        links: [
          { label: "Calendrier de collecte", href: "/demarches/dechets/calendrier-de-collecte" },
          { label: "Déchèteries", href: "/demarches/dechets/decheteries-et-points-de-collecte" },
          { label: "Points de collecte", href: "/demarches/dechets/decheteries-et-points-de-collecte" },
        ],
      },
      {
        title: "Taxes et prestations",
        links: [
          { label: "Taxes communales", href: "/ville/taxes" },
          { label: "Cartes CFF", href: "/demarches/cartes-cff" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    description: "Espaces publics, infrastructures, mobilité et réseaux.",
    groups: [
      {
        title: "Espaces publics",
        links: [
          { label: "Parcs et jardins", href: "/services/espaces-publics" },
          { label: "Forêt", href: "/services/environnement/foret" },
          { label: "Domaines communaux", href: "/services/domaine-communal" },
        ],
      },
      {
        title: "Infrastructures",
        links: [
          { label: "Bâtiments communaux", href: "/services/batiments-communaux" },
          { label: "Locations de salles", href: "/services/location-salles" },
          { label: "Travaux du domaine public", href: "/services/travaux-domaine-public" },
        ],
      },
      {
        title: "Mobilité",
        links: [
          { label: "Transports publics", href: "/services/mobilite/transports-publics" },
          { label: "Stationnement", href: "/services/mobilite/stationnement" },
          { label: "Mobilité douce", href: "/services/mobilite/pietons-et-loisirs" },
        ],
      },
      {
        title: "Énergie",
        links: [
          { label: "Eau", href: "/services/services-industriels/eau-potable" },
          { label: "Gaz", href: "/services/services-industriels/gaz" },
          { label: "Chauffage", href: "/services/services-industriels/chauffage-distance" },
        ],
      },
    ],
  },
  {
    label: "Loisirs",
    href: "/loisirs",
    description: "Sport, culture, associations et événements.",
    groups: [
      {
        title: "Activités",
        links: [
          { label: "Sport", href: "/loisirs/sports-et-loisirs" },
          { label: "Culture", href: "/loisirs/culture" },
          { label: "Associations", href: "/loisirs/sports-et-loisirs/societes-locales" },
        ],
      },
      {
        title: "Lieux",
        links: [
          { label: "Parcs", href: "/services/espaces-publics" },
          { label: "Salles", href: "/services/location-salles" },
          { label: "Installations sportives", href: "/loisirs/sports-et-loisirs/equipements-sportifs" },
        ],
      },
      {
        title: "Agenda",
        links: [
          { label: "Événements", href: "/agenda" },
          { label: "Manifestations", href: "/loisirs/manifestations" },
          { label: "Fêtons Prilly", href: "/loisirs/fetons-prilly" },
        ],
      },
    ],
  },
  {
    label: "Ville",
    href: "/ville",
    description: "Autorités, administration et publications communales.",
    groups: [
      {
        title: "Autorités",
        links: [
          { label: "Municipalité", href: "/ville/municipalite" },
          { label: "Conseil communal", href: "/ville/conseil-communal" },
          { label: "Votations et élections", href: "/ville/votations-elections" },
        ],
      },
      {
        title: "Administration",
        links: [
          { label: "Services", href: "/contact/services-communaux" },
          { label: "Organigramme", href: "/ville/administration" },
          { label: "Offres d’emploi", href: "/ville/offres-emploi" },
        ],
      },
      {
        title: "Informations",
        links: [
          { label: "Actualités", href: "/actualites" },
          { label: "Histoire & Prilly 360°", href: "/ville/archives-communales" },
          { label: "Publications", href: "/ville/journal-communal" },
        ],
      },
      {
        title: "Finances",
        links: [
          { label: "Finances et impôts", href: "/ville/finances-impots" },
          { label: "Émoluments", href: "/ville/emoluments-et-subventions" },
          { label: "Budget", href: "/ville/budget" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Coordonnées, accueil, horaires et urgences.",
    groups: [
      {
        title: "Contact",
        links: [
          { label: "Coordonnées", href: "/contact" },
          { label: "Guichet", href: "/contact/services-communaux" },
          { label: "Horaires", href: "/contact/horaires" },
          { label: "Urgences", href: "/contact/urgences" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Annuaire communal", href: "/contact/annuaire" },
          { label: "Services communaux", href: "/contact/services-communaux" },
          { label: "Sécurité et prévention", href: "/contact/securite-prevention" },
        ],
      },
    ],
  },
];

export const mobileShortcuts = [
  {
    title: "Recherche",
    description: "Trouver une démarche ou un service.",
    href: "/recherche",
  },
  {
    title: "Démarches",
    description: "Accéder aux démarches fréquentes.",
    href: "/demarches",
  },
  {
    title: "Horaires",
    description: "Voir les horaires des services.",
    href: "/contact/horaires",
  },
  {
    title: "Urgences",
    description: "Accéder aux numéros utiles.",
    href: "/contact/urgences",
  },
] as const;

export const searchSuggestions = [
  "déménagement",
  "attestation de domicile",
  "carte de déchèterie",
  "déchets",
  "horaires communaux",
  "agenda",
];
