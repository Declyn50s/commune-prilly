import { BadgeInfo, Building2, CalendarDays, CheckCircle2, Clock3, FileText, MapPin, Users } from "lucide-react";

export type RoomCard = {
  id: string;
  title: string;
  label: string;
  location: string;
  capacity: string;
  price: string;
  use: string;
  summary: string;
  availability?: string;
  audience: string;
  imageSrc?: string;
  imageAlt?: string;
  detailHref: string;
  reserveHref: string;
  reserveExternal?: boolean;
};

export type BookingStep = {
  title: string;
  description: string;
  icon: typeof Building2;
};

export type PracticalNotice = {
  title: string;
  description: string;
  icon: typeof Building2;
};

export type RoomDetail = {
  id: string;
  title: string;
  location: string;
  capacity: string;
  price: string;
  use: string;
  audience: string;
  details: string[];
  reserveHref: string;
  reserveLabel: string;
  reserveExternal?: boolean;
};

export type DownloadDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
  tag: string;
};

export const rentalHero = {
  title: "Location de salles",
  description:
    "Choisir une salle, comprendre les conditions essentielles et lancer une réservation en quelques minutes.",
  ctas: [
    { label: "Voir les salles", href: "#salles" },
    { label: "Comment reserver", href: "#comment-reserver" },
    { label: "Télécharger la demande", href: "/docs/location-salles/demande-location-ville-de-prilly.pdf" },
  ],
  notes: [
    "Un contact unique pour toutes les locations: Exploitation et Gerance.",
    "Le refuge communal se reserve en ligne, les autres salles via formulaire de demande.",
    "Les reglements complets restent accèssibles en telechargement, mais la page en resume l'essentiel.",
  ],
};

export const roomCards: RoomCard[] = [
  {
    id: "refuge-communal",
    title: "Refuge communal de Prilly",
    label: "évènement privé",
    location: "Route de Neuchatel, lisiere de la forêt de Montolivet",
    capacity: "50 personnes max.",
    price: "CHF 250",
    use: "Anniversaire, repas, rencontre privée ou associative",
    summary: "Le lieu le plus simple pour un usage privé, avec reservation en ligne et accès PMR.",
    audience: "Habitants, sociétés de Prilly et organismes extérieurs",
    detailHref: "#refuge-communal",
    reserveHref: "https://www.prilly.ch/vivre-a-prilly/espaces-publics-et-infrastructures/location-de-salles/refuge-communal-de-prilly",
    reserveExternal: true,
  },
  {
    id: "plan-sepey",
    title: "Propriété de Plan-Sepey",
    label: "séjour / week-end",
    location: "Routes des Renards 53, 1882 Gryon",
    capacity: "49 personnes max.",
    price: "CHF 500 jusqu'à 25 pers.",
    use: "Week-end, groupe, séjour associatif ou familial",
    summary: "Deux batiments, dortoir et réfectoire, disponibles du samedi au dimanche selon les disponibilités.",
    availability: "Uniquement hors colonies et camps scolaires",
    audience: "Habitants, sociétés de Prilly et organismes extérieurs",
    imageSrc: "/images/location-salles/plan-sepey-1.jpg",
    imageAlt: "Propriété de Plan-Sepey",
    detailHref: "#plan-sepey",
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
  },
  {
    id: "grande-salle",
    title: "Grande Salle",
    label: "Manifestation associative",
    location: "Route des Flumeaux 2, 1008 Prilly",
    capacity: "200 pers. + galerie 50 + scene 50",
    price: "Dès CHF 200",
    use: "Spectacle, assemblee, conference, évènement associatif",
    summary: "Le lieu le plus adapte aux manifestations de taille importante, avec scene, projection, audio et cuisine en sous-sol.",
    audience: "Sociétés et associations prilleranes ou non",
    detailHref: "#grande-salle",
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
  },
  {
    id: "castelmont",
    title: "Castelmont",
    label: "Réunion / conference",
    location: "Route de Cossonay 42, 1008 Prilly",
    capacity: "20 personnes par salle",
    price: "CHF 100 / demi-journee",
    use: "Reunion, conseil, petite conference, association",
    summary: "Un cadre patrimonial pour des formats plus intimistes, avec ecran, flipchart et beamer.",
    audience: "Societes, clubs et associations uniquement",
    detailHref: "#castelmont",
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
  },
  {
    id: "fleur-de-lys",
    title: "Salle de conferences, piscine de la Fleur-de-Lys",
    label: "Demi-journée / journée",
    location: "Batiment administratif de la piscine extérieure de la Fleur-de-Lys",
    capacity: "40 personnes",
    price: "CHF 200 / demi-journée",
    use: "Conference, comite, séance, club",
    summary: "Une salle simple à louer hors saison estivale, pratique pour des réunions  et presentiel de groupe.",
    availability: "Disponible de septembre a mai",
    audience: "Societes, clubs et associations prilleranes ou non",
    detailHref: "#fleur-de-lys",
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
  },
];

export const bookingSteps: BookingStep[] = [
  {
    title: "Choisir la salle",
    description: "Reperez rapidement l'usage, la capacite, le prix et le type de public accepte avant de lancer votre demande.",
    icon: Building2,
  },
  {
    title: "Vérifier les conditions",
    description: "Consultez les informations pratiques par salle: disponibilite, catégorie d'usagers, horaires et points d'attention.",
    icon: BadgeInfo,
  },
  {
    title: "Envoyer la demande",
    description: "Le refuge communal se reserve en ligne. Les autres espaces passent par le formulaire de demande de location.",
    icon: FileText,
  },
  {
    title: "Confirmer avec la commune",
    description: "La reservation devient effective apres validation. Les modalites d'intendance, de remise des cles et de restitution suivent ensuite.",
    icon: CheckCircle2,
  },
];

export const practicalNotices: PracticalNotice[] = [
  {
    title: "La demande ne vaut pas confirmation",
    description: "Une reservation n'est considerée comme acquise qu'apres validation par le service communal.",
    icon: CalendarDays,
  },
  {
    title: "Respecter capacite, usage et catégorie",
    description: "Chaque salle à ses propres limites de capacite et de type d'utilisation autorisée. Certaines ne se louent pas a titre privé.",
    icon: Users,
  },
  {
    title: "Rendre les lieux propres",
    description: "Le nettoyage et la remise en etat font partie des obligations essentielles. Le refuge communal ne propose pas de prestation de nettoyage.",
    icon: CheckCircle2,
  },
  {
    title: "Consulter l'intendance si besoin",
    description: "Cles, materiel disponible et conditions specifiques sont precises dans les documents d'intendance et de location.",
    icon: Clock3,
  },
];

export const roomDetails: RoomDetail[] = [
  {
    id: "refuge-communal",
    title: "Refuge communal de Prilly",
    location: "Route de Neuchatel, sortie de Prilly en direction de Romanel",
    capacity: "50 personnes maximum",
    price: "CHF 250",
    use: "évènements privés et associatifs",
    audience: "Habitants et sociétés de Prilly, ainsi que personnes et organismes extérieurs",
    details: [
      "Gestion de la location exclusivement en ligne.",
      "Accès et wc pour personnes a mobilite reduite.",
      "Fermeture fixee a 02h00, avec prolongation exceptionnelle jusqu'a 03h00 sur demande ecrite.",
      "Délai minimum d'une semaine entre la demande et la date de location, location possible 11 mois a l'avance jour pour jour.",
      "Remise des cles a 09h30 le jour meme, retour a 09h00 le lendemain.",
      "Accès voiture interdit sauf personnes handicapees et transport de materiel. Parking public en face de l'Auberge de la Fleur-de-Lys.",
    ],
    reserveHref: "https://www.prilly.ch/vivre-a-prilly/espaces-publics-et-infrastructures/location-de-salles/refuge-communal-de-prilly",
    reserveLabel: "Accéder  à la reservation du refuge",
    reserveExternal: true,
  },
  {
    id: "plan-sepey",
    title: "Propriété de Plan-Sepey",
    location: "Routes des Renards 53, 1882 Gryon",
    capacity: "49 personnes maximum",
    price: "CHF 500 jusqu'a 25 personnes, puis CHF 20 par personne supplementaire",
    use: "Week-end, groupe, séjour associatif ou familial",
    audience: "Habitants, sociétés de Prilly et organismes extérieurs, uniquement du samedi au dimanche et selon disponibilite",
    details: [
      "Deux batiments sont mis a disposition: l'Ecureuil (dortoir) et la Renardiere (refectoire).",
      "Une caution de CHF 250 est demandée pour toute réservation, payable d'avance.",
      "Taxe de séjour en sus: adultes CHF 3.80, enfants CHF 1.90 (6 a 15 ans).",
      "Le tarif s'entend sans personnel d'exploitation; chauffage et electricite sont compris.",
      "Les sacs poubelles taxes doivent être apportes par le locataire.",
      "Il faut se munir de draps, taies d'oreiller, housses de duvet ou sacs de couchage.",
    ],
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
    reserveLabel: "Télécharger la demande de location",
  },
  {
    id: "grande-salle",
    title: "Grande Salle",
    location: "Route des Flumeaux 2, 1008 Prilly",
    capacity: "Salle de spectacle 200 pers., galerie 50, scene 50, sous-sol 100, salle de réunion 20",
    price: "Salle de spectacle CHF 800, sous-sol CHF 400, cuisine CHF 200",
    use: "Manifestation associative, spectacle, assemblee, conference",
    audience: "Sociétés et associations prilleranes ou non prilleranes",
    details: [
      "La salle de spectacle dispose d'une scene, d'un ecran de projection, d'un beamer et d'un systeme audio.",
      "Le sous-sol propose une salle polyvalente ainsi qu'une cuisine agencée avec vaisselle a disposition.",
      "L'etage comprend une salle de réunion de 20 personnes.",
    ],
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
    reserveLabel: "Télécharger la demande de location",
  },
  {
    id: "castelmont",
    title: "Castelmont",
    location: "Route de Cossonay 42, 1008 Prilly",
    capacity: "20 personnes maximum par salle",
    price: "CHF 100 / demi-journee",
    use: "Reunion, conference, conseil, association",
    audience: "Societes, clubs et associations prilleranes ou non (pas de location privée)",
    details: [
      "Au 1er étage: salles n°1 & 2 couplees, salle n°3, chacune avec ecran, flipchart et beamer.",
      "Un office complete l'ensemble avec machine a cafe et vaisselle a disposition.",
      "Au 2e étage: salle du Conseil communal, equipee d'un ecran et d'un beamer.",
      "La salle du Conseil sert aussi  à la celebration des mariages selon un calendrier defini avec l'Office de l'etat civil de Lausanne.",
    ],
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
    reserveLabel: "Télécharger la demande de location",
  },
  {
    id: "fleur-de-lys",
    title: "Salle de conferences, piscine de la Fleur-de-Lys",
    location: "Batiment administratif de la piscine extérieure de la Fleur-de-Lys",
    capacity: "40 personnes",
    price: "CHF 200 / demi-journee, CHF 400 / journee",
    use: "Conference, comite, réunion de club ou d'association",
    audience: "Societes, clubs et associations prilleranes ou non prilleranes",
    details: [
      "Disponible de septembre a mai.",
      "Salle de conferences situee dans le batiment administratif de la piscine extérieure.",
    ],
    reserveHref: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
    reserveLabel: "Télécharger la demande de location",
  },
];

export const rentalDocuments: DownloadDocument[] = [
  {
    title: "Règlement de location",
    description: "Le texte complet à consulter pour les conditions générales, les responsabilités et le cadre de location.",
    href: "/docs/location-salles/reglement-location.pdf",
    label: "Télécharger le règlement",
    tag: "Règlement",
  },
  {
    title: "Demande de location - Ville de Prilly",
    description: "Le formulaire à utiliser pour la Grande Salle, Castelmont, Plan-Sepey et la salle de conférences de la Fleur-de-Lys.",
    href: "/docs/location-salles/demande-location-ville-de-prilly.pdf",
    label: "Ouvrir le formulaire",
    tag: "Réservation",
  },
  {
    title: "Références de l'intendance",
    description: "Les informations pratiques utiles pour la remise des clés, l'exploitation et les interlocuteurs.",
    href: "/docs/location-salles/references-intendance.pdf",
    label: "Voir l'intendance",
    tag: "Intendance",
  },
  {
    title: "Conditions de location du refuge communal",
    description: "Le document spécifique au refuge communal, à consulter avant toute reservation en ligne.",
    href: "/docs/location-salles/conditions-location-refuge-communal.pdf",
    label: "Consulter les conditions",
    tag: "Refuge communal",
  },
  {
    title: "Matériel a disposition - Refuge communal",
    description: "Le detail du materiel mis a disposition sur place pour preparer votre évènement.",
    href: "/docs/location-salles/materiel-refuge-communal.pdf",
    label: "Voir le matériel",
    tag: "Matériel",
  },
];

export const rentalContact = {
  title: "Exploitation et Gerance",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "exploitation@prilly.ch",
  phone: "+41 21 622 75 80",
  officeHours: [
    "Lundi au jeudi: 8h00-11h45, après-midi sur rendez-vous uniquement",
    "Vendredi: 8h00-11h45",
  ],
};
