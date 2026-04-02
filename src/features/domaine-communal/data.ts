import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeInfo,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Trees,
  Users,
} from "lucide-react";

export type TopicCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type DomainDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
  tag: string;
};

export type ContactInfo = {
  title: string;
  role: string;
  address: string[];
  email: string;
  phone: string;
};

export const domainHero = {
  title: "Domaine communal",
  description:
    "Autorisations de travaux, occupation temporaire du domaine public, procedes de reclame et obligations liees aux vegetaux : retrouvez ici les regles, formulaires et Démarches utiles.",
  ctas: [
    { label: "Faire une demande", href: "#travaux" },
    { label: "Voir les regles de reclame", href: "#reclame" },
    { label: "Consulter les obligations pour les vegetaux", href: "#vegetaux" },
  ],
  notes: [
    "Avant toute occupation ou intervention, demandez l'autorisation appropriee.",
    "Les formulaires et contacts sont regroupes par sujet pour aller droit au bon service.",
    "Les parties reglementaires sont resumees, les documents officiels restent accèssibles en telechargement.",
  ],
};

export const domaineCommunalSections: TopicCard[] = [
  {
    title: "Travaux et occupation du domaine public",
    description: "Permis, occupation temporaire, fouilles, depot, echafaudages, taxes et responsabilites de chantier.",
    href: "#travaux",
    icon: Building2,
  },
  {
    title: "Procedes de reclame",
    description: "Banderoles, reclame temporaire ou fixe, concept d'affichage et formulaires utiles.",
    href: "#reclame",
    icon: FileText,
  },
  {
    title: "Entretien des vegetaux",
    description: "Taille des haies, gabarits routiers, nidification, vegetaux proteges et déchets vegetaux.",
    href: "#vegetaux",
    icon: Trees,
  },
];

export const domainPublicPriority = [
  "Tout ouvrage, fouille, installation, depot ou travail sur, sous ou au-dessus de la voie publique requiert une autorisation prealable.",
  "La meme logique s'applique aux parcelles privées appartenant  à la commune.",
  "La demande doit être transmise au minimum 10 jours ouvrables avant le début de l'intervention.",
  "Aucun usage du domaine public n'est autorise avant la delivrance de l'autorisation.",
];

export const domainPreparationSteps = [
  "Formulaire duement complete",
  "Plan de situation obligatoire",
  "Description des travaux ou de l'occupation",
  "Periode d'occupation et localisation precise",
  "Surface d'occupation effective et type d'usage",
  "Coordonnées de l'intervenant, du maitre d'ouvrage, du mandataire et de l'entreprise",
  "Contact de chantier joignable 24h/24",
];

export const domainResponsibilities = [
  "Signalisation conforme et respect des prescriptions police / chantier.",
  "Responsabilite complete de l'entreprise durant l'intervention.",
  "Remise en etat obligatoire et protection des arbres situes a proximite.",
  "Refection provisoire immediate au niveau definitif puis refection definitive dans le délai prescrit.",
  "Consultation prealable des gestionnaires de reseaux et coordination si necessaire avec POLOuest, tl, LEB, SIL, Swisscom ou autres acteurs concernes.",
];

export const domainFees = [
  { title: "Emolument administratif", amount: "CHF 50", note: "Par demande" },
  { title: "Permis d'echafaudage", amount: "CHF 1.50 / m2 / jour", note: "Minimum CHF 15 / jour" },
  { title: "Depots, bennes, installations de chantier", amount: "CHF 1.50 / m2 / jour", note: "Minimum CHF 15 / jour" },
  { title: "Fouilles, sondages, travaux", amount: "CHF 1.50 / m2 / jour", note: "Minimum CHF 200" },
  { title: "Places de stationnement utilisées", amount: "CHF 25 / jour / place", note: "Taxe supplementaire" },
  { title: "Circulation alternee", amount: "CHF 100 / jour", note: "Taxe supplementaire" },
];

export const domainDocuments: DomainDocument[] = [
  {
    title: "Formulaire d'utilisation temporaire du domaine public ou domaine communal privé",
    description: "Le bon formulaire pour toute occupation, fouille, depot, installation ou usage temporaire.",
    href: "/docs/domaine-communal/formulaire-occupation-domaine-public.pdf",
    label: "Ouvrir le formulaire",
    tag: "Demande",
  },
  {
    title: "Conditions generales",
    description: "Les annexes utiles pour comprendre les responsabilites, obligations et remises en etat.",
    href: "/docs/domaine-communal/conditions-generales-usage-domaine-public.pdf",
    label: "Consulter les conditions",
    tag: "Conditions",
  },
  {
    title: "Tarif en matiere d'usage du domaine public",
    description: "Le document complet pour retrouver l'ensemble des taxes et emoluments au-dela de la synthese.",
    href: "/docs/domaine-communal/tarif-usage-domaine-public.pdf",
    label: "Voir le tarif complet",
    tag: "Tarifs",
  },
];

export const domainContact: ContactInfo = {
  title: "Travaux & Voirie",
  role: "Autorisations de travaux, occupation du domaine public, gabarits routiers et obligations liees aux vegetaux.",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "travaux@prilly.ch",
  phone: "+41 21 622 72 31",
};

export const reclameIntro = [
  "Tout procede de reclame sur domaine public ou privé requiert une autorisation prealable de la Municipalite.",
  "Les demandes sont traitées par Urbanisme & Constructions.",
];

export const banderolesInfo = {
  title: "Banderoles",
  summary:
    "Les banderoles a travers les rues, enseignes flottantes et oriflammes sont interdites sur domaine privé et/ou public, sauf aux emplacements autorises par la commune.",
  points: [
    "3 emplacements autorises uniquement",
    "Surface maximale: 5 m2",
    "Pose autorisée au maximum 14 jours avant la manifestation",
    "Retrait au plus tard 48 heures apres",
  ],
  locations: ["Prilly Centre - rond-point", "Route du Chasseur", "Arret du LEB / Prilly-Chasseur"],
};

export const reclameTemporaryInfo = {
  title: "Procede de reclame temporaire",
  summary: "Concerne notamment les panneaux de chantier, appartements a vendre ou signalisation d'un projet lie au fonds.",
  points: [
    "Formulaire specifique",
    "Plan de situation",
    "Dimensions",
    "Photomontage ou croquis",
    "Distances utiles au bord de chaussee et aux signaux",
  ],
};

export const reclameFixedInfo = {
  title: "Procede de reclame fixe",
  summary: "Concerne les enseignes, vitrines, lettres detachees, panneaux appliques, caissons, kakemonos et autres installations fixes.",
  points: [
    "Autorisation obligatoire",
    "Formulaire specifique",
    "Signature du requerant et du proprietaire ou de la gerance",
    "Plan de situation, dessin cote et photomontage ou croquis",
  ],
};

export const reclameRules = [
  "Le but du reglement est de proteger l'esthetique, les sites, la tranquillite et la securite des pietons comme des vehicules.",
  "Certains contenus sont interdits et certains formats sont limites.",
  "Les grands formats ne sont en principe pas autorises selon les directives d'affichage.",
  "L'affichage hors emplacements prevus par le concept general est interdit en principe.",
];

export const reclameConceptZones = [
  "Pole d'affichage",
  "Densite moyenne",
  "Affichage restreint",
  "Zone exempte d'affichage",
];

export const reclameDocuments: DomainDocument[] = [
  {
    title: "Reglement sur les procedes de reclame",
    description: "Le texte de base pour comprendre le champ d'application et les limitations generales.",
    href: "/docs/domaine-communal/reglement-procedes-de-reclame.pdf",
    label: "Consulter le reglement",
    tag: "Reglement",
  },
  {
    title: "Directives du concept general d'affichage",
    description: "Le document qui organise et harmonise l'affichage sur le territoire communal.",
    href: "/docs/domaine-communal/reglement-concept-affichage.pdf",
    label: "Voir les directives",
    tag: "Concept",
  },
  {
    title: "Plan du concept general d'affichage",
    description: "Le plan general des zones d'affichage et de restriction sur le territoire communal.",
    href: "/docs/domaine-communal/plan-concept-affichage.pdf",
    label: "Ouvrir le plan",
    tag: "Plan",
  },
  {
    title: "Formulaire procede de reclame fixe",
    description: "Le formulaire pour les enseignes, vitrines, lettres detachees, caissons et autres installations fixes.",
    href: "/docs/domaine-communal/formulaire-procede-reclame-fixe.pdf",
    label: "Ouvrir le formulaire fixe",
    tag: "Formulaire",
  },
  {
    title: "Formulaire procede de reclame temporaire",
    description: "Le formulaire pour les panneaux de chantier, affichages provisoires et signalisation temporaire.",
    href: "/docs/domaine-communal/formulaire-procede-reclame-temporaire.pdf",
    label: "Ouvrir le formulaire temporaire",
    tag: "Formulaire",
  },
  {
    title: "Formulaire banderole",
    description: "Le formulaire specifique pour demander une banderole sur l'un des trois emplacements autorises.",
    href: "/docs/domaine-communal/formulaire-banderole.pdf",
    label: "Ouvrir le formulaire banderole",
    tag: "Banderoles",
  },
  {
    title: "Plan des emplacements banderoles",
    description: "Le plan officiel des trois emplacements communaux autorises.",
    href: "/docs/domaine-communal/emplacements-banderoles.pdf",
    label: "Voir le plan des emplacements",
    tag: "Plan",
  },
];

export const reclameContact: ContactInfo = {
  title: "Urbanisme & Constructions",
  role: "Autorisations pour procedes de reclame, banderoles, installations temporaires et fixes.",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "urbanisme@prilly.ch",
  phone: "+41 21 622 72 70",
};

export const vegetalIntro = [
  "Les proprietaires doivent tailler les vegetaux qui empietent sur le domaine public.",
  "Les situations se distinguent selon qu'il s'agit de haies, d'arbres, de vegetaux proteges ou de cas particuliers lies  à la biodiversite.",
];

export const hedgeRules = [
  "Les branches doivent être maintenues  à la limite de propriété.",
  "Hauteur maximale de 60 cm lorsque la visibilite doit être garantie.",
  "Hauteur maximale de 2 m dans les autres cas.",
];

export const treeRules = [
  "Branches maintenues a 2.50 m au-dessus des trottoirs.",
  "Branches maintenues a 5.00 m au-dessus des routes.",
  "Degagement lateral de 1.00 m depuis le bord de la chaussee.",
];

export const nestingRules = [
  "De mars a aout, les arbres et arbustes peuvent abriter des oiseaux.",
  "La recommandation forte est de rabattre en automne ou en hiver.",
  "Du 15 mars au 31 juillet, je ne touche pas a ma haie.",
];

export const protectedPlantRules = [
  "Une petite taille sans autorisation n'est possible que si la coupe reste legere.",
  "Toute intervention plus importante necessite une autorisation prealable.",
  "Les operations sensibles doivent être confiees à un·e specialiste des soins aux arbres.",
];

export const vegetalWasteRules = [
  "Collecte Nord: jeudi.",
  "Collecte Sud: vendredi.",
  "Limite de 1 m3 par parcelle et par semaine.",
  "Au-dela, l'evacuation doit être prise en charge par l'entreprise mandatee.",
  "Il est encourage de conserver une partie des branches, brindilles ou feuilles pour la biodiversite.",
];

export const vegetalSpecialCases = [
  "Plantations voisines d'un autre fonds: rester attentif aux limites de propriété.",
  "Plantes invasives: agir rapidement et utiliser les bons canaux d'information.",
  "Chenilles processionnaires du pin: risque sanitaire lie aux poils urticants.",
  "Destruction des nids des apparition et jusqu'au 15 fevrier.",
];

export const vegetalContacts = [
  "Domaine public, gabarits routiers, evacuation vegetaux: Travaux & Voirie.",
  "Vegetaux proteges: Urbanisme & Constructions.",
  "Aire forestiere: DGE-Foret / Groupement forestier.",
  "Biodiversite: Charte des Jardins et liens utiles de la rubrique Environnement.",
];

export const communalAssets = {
  spaces: [
    {
      title: "Espaces publics",
      description: "Des espaces de detente et de loisirs accèssibles a tous, avec equipements sportifs et places de jeux.",
      href: "/loisirs/sports-et-loisirs/equipements-sportifs",
    },
    {
      title: "Jardins familiaux de Sous-Cery",
      description: "125 jardins de 110 a 165 m2 a louer, reserves aux habitants domicilies régulierement sur Prilly.",
      href: "#jardins-familiaux",
    },
  ],
  gardens: [
    "Capacite: 125 jardins situes au lieu-dit Sous-Cery.",
    "Dimensions: de 110 a 165 m2.",
    "Exploitation reservée aux habitants domicilies régulierement sur Prilly.",
    "Prix de location annuel, eau d'arrosage comprise: CHF 2.50 le m2.",
    "Inscription par courrier ou par mail a exploitation@prilly.ch.",
  ],
  forest: [
    "Les forets communales de Montolivet, du ruisseau de Broye, de Sous-Cery et le cordon boise de Sous-Cery couvrent 7 hectares.",
    "Elles sont composees a 96 % d'essences feuillues: hetre, erable, tilleul, chene et frene, avec quelques melezes.",
    "La gestion durable est certifiee par l'Association Romande pour la Certification des Forets.",
    "Trois labels existent en Suisse: FSC, PEFC et Bois garantie.",
    "La vente de bois de feu n'est pas proposee.",
  ],
  vines: [
    "Une vigne communale de 2'032 m2 est exploitée au chemin de la Grand-Vigne.",
    "Les vendanges ont lieu en general en octobre avec la participation d'eleves de l'Etablissement secondaire de Prilly.",
    "Un vin blanc La Grand-Vigne et un vin rouge Dame de feu sont vinifies par Bernard Gorjat, vigneron-encaveur a Aran-sur-Villette.",
    "La vente du vin communal est gerée par le service Exploitation et Gerance.",
  ],
  forestDocs: [
    {
      title: "Depliant - Les forets, une richesse a preserver",
      description: "Une presentation synthetique du patrimoine forestier communal et des enjeux de preservation.",
      href: "/docs/domaine-communal/forets-richesse-a-preserver.pdf",
      label: "Consulter le depliant",
      tag: "Forets",
    },
    {
      title: "Petit guide du savoir-vivre en foret",
      description: "Le guide pratique pour bien se comporter dans les bois communaux.",
      href: "/docs/domaine-communal/bienvenue-dans-les-bois.pdf",
      label: "Ouvrir le guide",
      tag: "Foret",
    },
    {
      title: "Flyer - En foret, le respect s'impose",
      description: "Le rappel rapide des bons comportements en foret.",
      href: "/docs/domaine-communal/en-foret-le-respect-s-impose.pdf",
      label: "Voir le flyer",
      tag: "Respect",
    },
    {
      title: "Reglement des jardins familiaux de Sous-Cery",
      description: "Le document utile avant toute demande de parcelle en location.",
      href: "/docs/domaine-communal/reglement-jardins-familiaux.pdf",
      label: "Consulter le reglement",
      tag: "Jardins",
    },
  ] satisfies DomainDocument[],
  exploitationContact: {
    title: "Exploitation et Gerance",
    role: "Jardins familiaux, forêt communale, vigne communale et renseignements sur le patrimoine exploite.",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "exploitation@prilly.ch",
    phone: "+41 21 622 75 80",
  } satisfies ContactInfo,
};
