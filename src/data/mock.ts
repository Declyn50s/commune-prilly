import {
  ArrowRight,
  BadgeInfo,
  CalendarDays,
  FileCheck,
  Home,
  MapPinned,
  Recycle,
  Search,
  ShieldCheck,
  TramFront,
  Trees,
  Users,
} from "lucide-react";
import type {
  Contact,
  EventItem,
  FaqItem,
  NewsItem,
  Procedure,
  QuickLink,
  ServiceCategory,
  Spotlight,
} from "@/types/content";

export const quickLinks: QuickLink[] = [
  {
    title: "Annoncer mon déménagement",
    description: "Arrivée, départ ou changement d'adresse en quelques étapes.",
    href: "/demarches/annonce-demenagement",
    icon: Home,
    theme: "red",
  },
  {
    title: "Demander une attestation",
    description: "Domicile, résidence ou documents courants rapidement.",
    href: "/demarches/attestations",
    icon: FileCheck,
    theme: "yellow",
  },
  {
    title: "Gérer mes déchets",
    description: "Collecte, déchèterie, points de dépôt et cartes d'accès.",
    href: "/demarches/dechets",
    icon: Recycle,
    theme: "green",
  },
  {
    title: "Trouver un service",
    description: "Annuaire, horaires et contacts des services communaux.",
    href: "/contact/services-communaux",
    icon: Users,
    theme: "coal",
  },
];

export const searchSuggestions = [
  "déménagement",
  "attestation de domicile",
  "carte de déchèterie",
  "déchets",
  "horaires communaux",
  "agenda",
];

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    title: "Ouverture exceptionnelle du guichet population samedi matin",
    category: "Administration",
    date: "03 avril 2026",
    excerpt: "Le guichet population sera exceptionnellement ouvert samedi matin pour les démarches liées aux arrivées et départs.",
    href: "/actualites/ouverture-exceptionnelle-guichet-population",
  },
  {
    id: "n2",
    title: "Réaménagement végétalisé de l'avenue de la Paisible",
    category: "Environnement",
    date: "29 mars 2026",
    excerpt: "Des plantations et aménagements de surface seront réalisés afin d'améliorer l'ombrage et la perméabilité des sols.",
    href: "/actualites/reamenagement-vegetalise-avenue-paisible",
  },
  {
    id: "n3",
    title: "Programme culturel de printemps à Prilly",
    category: "Culture",
    date: "10 mars 2026",
    excerpt: "La programmation culturelle du printemps réunit concerts, rencontres, lectures et activités de proximité.",
    href: "/actualites/programme-culturel-printemps-prilly",
  },
];

export const spotlights: Spotlight[] = [
  {
    title: "Ouverture exceptionnelle du guichet population samedi matin",
    description: "Pour les démarches liées aux arrivées et départs avant la rentrée du printemps.",
    href: "/contact/services-communaux",
  },
  {
    title: "Inscriptions ouvertes pour la fête de quartier des Uttins",
    description: "Réservez votre stand ou proposez une animation conviviale.",
    href: "/loisirs/fetons-prilly",
  },
  {
    title: "Collecte spéciale des déchets encombrants le 8 avril",
    description: "Consultez les consignes et les objets acceptés avant votre dépôt.",
    href: "/demarches/dechets/calendrier-de-collecte",
  },
];

export const agendaItems: EventItem[] = [
  {
    id: "e1",
    title: "Forum d'accueil des nouveaux habitants",
    category: "Vivre",
    dateLabel: "02 avril 2026 Â· 18:30",
    location: "Salle de l'Union",
    description: "Une soirée conviviale pour découvrir les services communaux, les écoles et la vie de quartier.",
    href: "/agenda/forum-accueil-nouveaux-habitants",
  },
  {
    id: "e2",
    title: "Atelier compost & biodiversité urbaine",
    category: "Services",
    dateLabel: "06 avril 2026 Â· 12:15",
    location: "Jardins familiaux de Prilly",
    description: "Conseils pratiques pour réduire les déchets verts et favoriser la nature en ville.",
    href: "/agenda/atelier-compost-biodiversite",
  },
  {
    id: "e3",
    title: "Cinéma plein air au Parc de la Cure",
    category: "Loisirs",
    dateLabel: "11 avril 2026 Â· 20:30",
    location: "Parc de la Cure",
    description: "Projection familiale, restauration légère et ambiance de quartier.",
    href: "/agenda/cinema-plein-air-parc-cure",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "espaces-publics",
    title: "Espaces publics & équipements",
    description: "Espaces publics, jardins, bà¢timents communaux et location de salles.",
    href: "/services/espaces-publics",
    items: ["Espaces publics", "Jardins", "Cimetières", "Bà¢timents communaux", "Location de salles"],
  },
  {
    id: "mobilite",
    title: "Mobilité au quotidien",
    description: "Déplacements lisibles, sà»rs et pratiques pour tous les publics.",
    href: "/services/mobilite",
    items: ["Transports publics", "Vélos", "Voitures", "Piétons", "Stationnement"],
  },
  {
    id: "energie",
    title: "Énergie & réseaux",
    description: "Eau potable, gaz, chauffage à  distance et information technique utile.",
    href: "/services/services-industriels",
    items: ["Eau potable", "Gaz", "Chauffage à  distance", "Assainissement"],
  },
  {
    id: "environnement",
    title: "Environnement",
    description: "Biodiversité, qualité de l'air, bruit et durabilité locale.",
    href: "/services/environnement",
    items: ["Biodiversité", "Air & bruit", "Environnement", "Domaine communal"],
  },
];

export const procedures: Procedure[] = [
  {
    slug: "arrivee-a-prilly",
    title: "Arrivée à  Prilly",
    summary: "Annoncez votre arrivée et préparez vos principaux services communaux sans perdre de temps.",
    audience: "Toute personne qui s'installe à  Prilly, seule ou en famille.",
    documents: ["Pièce d'identité valide", "Bail à  loyer ou attestation du logeur", "Permis de séjour si applicable"],
    steps: [
      "Préparez vos documents avant de commencer la demande.",
      "Choisissez le canal qui vous convient: en ligne, par courrier ou au guichet.",
      "Annoncez chaque membre du foyer et vérifiez les coordonnées.",
      "Conservez la confirmation pour vos autres démarches utiles.",
    ],
    practicalInfo: ["Délai conseillé: dans les 14 jours suivant l'arrivée.", "Guichet population: lundi au vendredi, avec ouverture tardive le jeudi.", "Certaines situations particulières peuvent nécessiter un rendez-vous."],
    ctaLabel: "Commencer la démarche",
    ctaHref: "#demarrer",
    contactId: "population",
    related: ["attestations-documents", "annonce-demenagement"],
    faqIds: ["faq-arrivee-1", "faq-arrivee-2"],
    tags: ["population", "déménagement", "nouvel habitant"],
    featured: true,
  },
  {
    slug: "attestations-documents",
    title: "Attestations & documents",
    summary: "Obtenez rapidement les justificatifs les plus demandés avec un parcours clair et rassurant.",
    audience: "Habitants, propriétaires, employeurs ou organismes ayant besoin d'un document officiel.",
    documents: ["Coordonnées complètes", "Motif de la demande", "Justificatif complémentaire selon le document demandé"],
    steps: ["Choisissez le type de document souhaité.", "Vérifiez si la demande peut être faite en ligne.", "Confirmez vos informations et le mode d'envoi.", "Réglez l'émolument éventuel et suivez l'avancement."],
    practicalInfo: ["Certaines attestations sont délivrées immédiatement.", "Les demandes urgentes peuvent être signalées au service.", "Un retrait sur place est possible pour certains documents."],
    ctaLabel: "Choisir un document",
    ctaHref: "#documents",
    contactId: "population",
    related: ["arrivee-a-prilly", "habitants"],
    faqIds: ["faq-docs-1"],
    tags: ["attestation", "domicile", "documents"],
    featured: true,
  },
  {
    slug: "annonce-demenagement",
    title: "Annonce de déménagement",
    summary: "Déclarez un changement d'adresse avec un langage simple et les bons raccourcis selon votre situation.",
    audience: "Habitants qui arrivent, partent ou changent d'adresse dans la commune.",
    documents: ["Nouvelle adresse complète", "Date effective du déménagement", "Pièce d'identité"],
    steps: ["Sélectionnez votre situation.", "Indiquez la date du changement.", "Ajoutez les personnes concernées.", "Validez l'annonce et notez les suites éventuelles."],
    practicalInfo: ["Le formulaire guide selon qu'il s'agit d'une arrivée, d'un départ ou d'un transfert interne.", "Le service de la population renseigne les situations particulières."],
    ctaLabel: "Déclarer mon changement d'adresse",
    ctaHref: "#déclarer",
    contactId: "population",
    related: ["arrivee-a-prilly", "depart-de-prilly"],
    faqIds: ["faq-demenagement-1"],
    tags: ["adresse", "déménagement", "population"],
    featured: true,
  },
  {
    slug: "depart-de-prilly",
    title: "Départ de Prilly",
    summary: "Prévenez la commune de votre départ et évitez les oublis administratifs.",
    audience: "Toute personne quittant la commune de Prilly.",
    documents: ["Nouvelle commune de destination", "Date de départ", "Pièce d'identité"],
    steps: ["Préparez la date exacte du départ.", "Annoncez la nouvelle commune.", "Confirmez les personnes concernées.", "Conservez votre confirmation de radiation."],
    practicalInfo: ["Le départ doit être annoncé sans délai.", "Pensez à  mettre à  jour vos autres organismes."],
    ctaLabel: "Annoncer mon départ",
    ctaHref: "#depart",
    contactId: "population",
    related: ["annonce-demenagement"],
    faqIds: [],
    tags: ["départ", "population"],
  },
  {
    slug: "carte-decheterie",
    title: "Carte de déchèterie",
    summary: "Demandez, renouvelez ou signalez un problème de carte de déchèterie en un seul endroit.",
    audience: "Habitants et ménages utilisant les déchèteries communales.",
    documents: ["Justificatif de domicile", "Coordonnées du ménage", "Ancienne carte si renouvellement"],
    steps: ["Choisissez votre besoin: première demande, renouvellement ou perte.", "Complétez les informations du foyer.", "Ajoutez un justificatif si nécessaire.", "Recevez la confirmation et les modalités de retrait."],
    practicalInfo: ["Une seule demande suffit par ménage.", "Le retrait peut être envoyé ou prévu à  l'accueil selon le cas."],
    ctaLabel: "Demander ma carte",
    ctaHref: "#carte",
    contactId: "voirie",
    related: ["dechets", "points-collecte"],
    faqIds: ["faq-decheterie-1"],
    tags: ["déchets", "déchèterie", "carte"],
    featured: true,
  },
  {
    slug: "dechets",
    title: "Déchets",
    summary: "Retrouvez en un coup d'Å“il les règles, jours de collecte et solutions de tri à  Prilly.",
    audience: "Tous les habitants, régies et commerces concernés par la collecte communale.",
    documents: ["Aucun document nécessaire pour consulter les informations"],
    steps: ["Identifiez le type de déchet.", "Consultez le mode de collecte correspondant.", "Vérifiez les consignes et horaires.", "Accédez si besoin à  la déchèterie ou au point de dépôt."],
    practicalInfo: ["Une recherche par matière facilite la bonne consigne.", "Les déchets spéciaux suivent des filières dédiées."],
    ctaLabel: "Consulter les consignes",
    ctaHref: "#tri",
    contactId: "voirie",
    related: ["calendrier-collecte", "carte-decheterie"],
    faqIds: [],
    tags: ["tri", "collecte", "environnement"],
    featured: true,
  },
  {
    slug: "calendrier-collecte",
    title: "Calendrier de collecte",
    summary: "Consultez les passages et les consignes de sortie pour chaque flux de déchets.",
    audience: "Habitants et immeubles concernés par la collecte.",
    documents: ["Adresse ou secteur concerné"],
    steps: ["Entrez votre secteur.", "Consultez les dates de passage.", "Téléchargez le calendrier si besoin.", "Ajoutez un rappel personnel."],
    practicalInfo: ["Les jours fériés peuvent modifier les tournées.", "Les bacs doivent être sortis la veille au soir."],
    ctaLabel: "Voir le calendrier",
    ctaHref: "#calendrier",
    contactId: "voirie",
    related: ["dechets"],
    faqIds: [],
    tags: ["collecte", "déchets"],
  },
  {
    slug: "office-population",
    title: "Office de la population",
    summary: "Un point d'entrée clair pour les questions d'identité, de domicile et de résidence.",
    audience: "Habitants et futurs habitants.",
    documents: ["Selon la prestation choisie"],
    steps: ["Repérez votre besoin.", "Vérifiez les documents utiles.", "Prenez contact ou venez au guichet.", "Suivez les éventuelles suites."],
    practicalInfo: ["L'accueil est pensé pour les demandes fréquentes et les cas particuliers."],
    ctaLabel: "Contacter le service",
    ctaHref: "/contact",
    contactId: "population",
    related: ["attestations-documents", "habitants"],
    faqIds: [],
    tags: ["population", "guichet"],
  },
  {
    slug: "habitants",
    title: "Habitants",
    summary: "Le point de repère transversal pour les besoins administratifs courants des habitants.",
    audience: "Tous les habitants de la commune.",
    documents: ["Selon la prestation"],
    steps: ["Choisissez votre situation.", "Repérez la démarche liée.", "Suivez les étapes dédiées."],
    practicalInfo: ["Cette page oriente vers les démarches les plus fréquentes."],
    ctaLabel: "Explorer les démarches habitants",
    ctaHref: "/demarches",
    contactId: "population",
    related: ["attestations-documents", "annonce-demenagement"],
    faqIds: [],
    tags: ["habitants", "administratif"],
  },
  {
    slug: "points-collecte",
    title: "Points de collecte",
    summary: "Trouvez le bon point de dépôt selon le type de matière et votre quartier.",
    audience: "Habitants cherchant un point de collecte proche.",
    documents: ["Aucun"],
    steps: ["Choisissez la matière.", "Repérez le point le plus proche.", "Vérifiez les consignes de dépôt."],
    practicalInfo: ["Certains points sont réservés à  des flux spécifiques."],
    ctaLabel: "Trouver un point de collecte",
    ctaHref: "#points",
    contactId: "voirie",
    related: ["dechets", "carte-decheterie"],
    faqIds: [],
    tags: ["collecte", "tri"],
  },
];

export const contacts: Contact[] = [
  {
    id: "population",
    title: "Office de la population",
    phone: "021 622 72 11",
    email: "population@prilly.ch",
    address: "Route de Cossonay 40, 1008 Prilly",
    hours: ["Lundi à  mercredi: 08:00-11:45 / 13:30-16:30", "Jeudi: 08:00-11:45 / 13:30-18:00", "Vendredi: 08:00-14:00"],
  },
  {
    id: "voirie",
    title: "Voirie & déchets",
    phone: "021 622 73 40",
    email: "voirie@prilly.ch",
    address: "Centre technique communal, 1008 Prilly",
    hours: ["Lundi à  vendredi: 07:30-12:00 / 13:30-16:30"],
  },
  {
    id: "accueil",
    title: "Accueil communal",
    phone: "021 622 72 00",
    email: "info@prilly.ch",
    address: "Hôtel de Ville, Route de Cossonay 40, 1008 Prilly",
    hours: ["Lundi à  mercredi: 08:00-11:45 / 13:30-16:30", "Jeudi: 08:00-11:45 / 13:30-18:00", "Vendredi: 08:00-14:00"],
  },
  {
    id: "urgences",
    title: "Urgences communales",
    phone: "117 / 118 / 144",
    email: "urgence@prilly.ch",
    address: "Selon le service concerné",
    hours: ["Disponibilité 24h/24 selon l'urgence"],
    emergency: true,
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-arrivee-1",
    question: "Puis-je annoncer mon arrivée avant la date effective du déménagement ?",
    answer: "Oui, vous pouvez préparer votre dossier à  l'avance. La validation se fait toutefois selon la date réelle de votre installation.",
  },
  {
    id: "faq-arrivee-2",
    question: "Dois-je me présenter en personne pour toute la famille ?",
    answer: "Dans les situations simples, un dossier complet suffit souvent. Certains cas particuliers peuvent nécessiter la présence d'un membre du foyer.",
  },
  {
    id: "faq-docs-1",
    question: "Quel délai pour recevoir une attestation de domicile ?",
    answer: "Les demandes simples peuvent être traitées rapidement. Les délais exacts dépendent du mode de demande et du volume en cours.",
  },
  {
    id: "faq-demenagement-1",
    question: "Je déménage dans la commune, quelle démarche choisir ?",
    answer: "Le parcours â€œAnnonce de déménagementâ€ vous guide vers le bon scénario selon qu'il s'agit d'un changement interne, d'une arrivée ou d'un départ.",
  },
  {
    id: "faq-decheterie-1",
    question: "Que faire si ma carte de déchèterie est perdue ?",
    answer: "Le formulaire vous permet de signaler la perte et de demander un remplacement, avec indication des éventuels frais.",
  },
];

export const homeServices = [
  {
    title: "Horaires communaux",
    description: "Préparez votre passage au guichet avec les horaires actualisés des principaux services.",
    href: "/contact/services-communaux",
    icon: CalendarDays,
  },
  {
    title: "Transports & mobilité",
    description: "Bus, métro, itinéraires piétons et solutions vélo à  l'échelle de la commune.",
    href: "/services/mobilite",
    icon: TramFront,
  },
  {
    title: "Quartiers & proximité",
    description: "Repères utiles, vie associative et services du quotidien près de chez vous.",
    href: "/vivre/vie-quartier",
    icon: MapPinned,
  },
  {
    title: "Transition durable",
    description: "Projets verts, biodiversité, énergie et gestes concrets pour la qualité de vie.",
    href: "/services/environnement",
    icon: Trees,
  },
];

export const livingThemes = [
  {
    title: "S'installer à  Prilly",
    description: "Un parcours d'arrivée rassurant pour comprendre rapidement ses premiers repères.",
    icon: Home,
  },
  {
    title: "Enfance & écoles",
    description: "Informations lisibles pour les familles, la scolarité et l'accueil parascolaire.",
    icon: ShieldCheck,
  },
  {
    title: "Seniors & proximité",
    description: "Services utiles, mobilité et vie locale pensée pour rester autonome.",
    icon: Users,
  },
  {
    title: "Vie de quartier",
    description: "Rencontres, activités et dynamiques locales pour créer du lien.",
    icon: MapPinned,
  },
];

export const cityHighlights = [
  "Conseil communal",
  "Municipalité",
  "Finances & impôts",
  "Votations & élections",
  "Histoire & Prilly 360°",
  "Offres d'emploi",
];

export const leisureHighlights = [
  "Agenda culturel",
  "Bibliothèque",
  "Équipements sportifs",
  "Fêtons Prilly",
  "Marché de Noël",
  "Associations & sociétés locales",
];

export const searchCategories = [
  { label: "Démarches", icon: Search },
  { label: "Services", icon: BadgeInfo },
  { label: "Agenda", icon: CalendarDays },
  { label: "Contacts", icon: ArrowRight },
];

export const cityThemes = [
  {
    title: "Gouvernance",
    description: "Conseil communal, municipalité et organisation administrative clairement expliqués.",
  },
  {
    title: "Finances publiques",
    description: "Budget, taxes et impôts présentés avec pédagogie et sens du service public.",
  },
  {
    title: "Vie démocratique",
    description: "Votations, élections et résultats accèssibles dans un cadre sobre et fiable.",
  },
];

export const contactShortcuts = [
  "Trouver un service communal",
  "Voir les horaires d'accueil",
  "Consulter les urgences",
  "Préparer un déplacement à  l'Hôtel de Ville",
];

export const procedureIntents = [
  {
    title: "Je m'installe à  Prilly",
    description: "Déclarer une arrivée, préparer ses documents et repérer les contacts utiles.",
    href: "/demarches/arrivee",
    accent: "red" as const,
  },
  {
    title: "Je quitte Prilly",
    description: "Annoncer un départ ou un changement d'adresse avec le bon parcours.",
    href: "/demarches/depart",
    accent: "coal" as const,
  },
  {
    title: "Je demande une attestation",
    description: "Commander rapidement un document administratif courant.",
    href: "/demarches/attestations",
    accent: "yellow" as const,
  },
  {
    title: "Je gère mes déchets",
    description: "Collecte, déchèterie, carte d'accès et points de dépôt.",
    href: "/demarches/dechets",
    accent: "green" as const,
  },
  {
    title: "Je cherche un document",
    description: "Attestations, justificatifs et prestations de l'Office de la population.",
    href: "/demarches/office-population",
    accent: "yellow" as const,
  },
  {
    title: "Je contacte le bon service",
    description: "Population, voirie ou accueil communal selon votre besoin.",
    href: "/contact/services-communaux",
    accent: "coal" as const,
  },
];

export const mobileShortcuts = [
  {
    title: "Recherche",
    description: "Trouver vite une démarche ou un horaire",
    href: "/demarches",
  },
  {
    title: "Démarches utiles",
    description: "Arrivée, départ, attestation, déchets",
    href: "/demarches",
  },
  {
    title: "Urgences",
    description: "Accéder aux numéros prioritaires",
    href: "/contact",
  },
];
