import type { EnfancePageData } from "@/features/enfance-ecoles/types";

const root = "/vivre/enfance-ecoles";

export const enfancePrescolairePages: EnfancePageData[] = [
  {
    slug: "via-escola",
    path: `${root}/via-escola`,
    title: "Via Escola",
    eyebrow: "Soutien à l’entrée à l’école",
    description:
      "Un dispositif d’accueil pour les enfants allophones qui entrent à l’école à Prilly, avec un appui concret pour les parents.",
    intro:
      "Via Escola aide les familles à vivre l’entrée à l’école plus sereinement grâce à des ateliers en français pour les enfants et à un cours de français pour les parents en parallèle.",
    tone: "soft",
    heroCtas: [
      { label: "Télécharger un formulaire", href: "#documents" },
      { label: "Voir les dates clés", href: "#dates" },
    ],
    quickFacts: [
      { label: "Public", value: "Enfants allophones qui entrent à l’école à Prilly" },
      { label: "Période 2026", value: "Du 4 mars au 17 juin 2026" },
      { label: "Horaires", value: "Les mercredis de 14h à 15h30" },
      { label: "Lieu", value: "Collège Centre, Prilly" },
    ],
    notices: [
      {
        title: "Inscription requise jusqu’au 13 février 2026",
        description:
          "Les places sont limitées. Les formulaires sont disponibles en français, anglais, portugais, espagnol et italien.",
        tone: "yellow",
      },
    ],
    sections: [
      {
        title: "Pour qui ?",
        description: "Le dispositif s’adresse aux familles qui découvrent l’école à Prilly.",
        items: [
          "Enfants qui ne parlent pas ou peu le français avant leur entrée à l’école.",
          "Parents qui souhaitent mieux comprendre le cadre scolaire local.",
          "Familles qui ont besoin d’un premier repère rassurant avant la rentrée.",
        ],
      },
      {
        title: "Comment ça marche ?",
        description: "Le format est simple et pensé pour lever les premiers freins.",
        items: [
          "Ateliers ludiques de français pour les enfants.",
          "Cours de français pour les parents en parallèle quand cela est utile.",
          "Une formule gratuite, avec inscription préalable obligatoire.",
        ],
      },
    ],
    timeline: [
      {
        title: "Date limite d’inscription",
        value: "13 février 2026",
        detail: "Le dossier doit être transmis avant cette date pour être pris en compte.",
      },
      {
        title: "Début des ateliers",
        value: "4 mars 2026",
        detail: "Les ateliers ont lieu chaque mercredi après-midi.",
      },
      {
        title: "Exceptions",
        value: "8 et 15 avril, 13 mai",
        detail: "Pas d’atelier pendant ces dates.",
      },
      {
        title: "Dernière séance",
        value: "17 juin 2026",
        detail: "Clôture du dispositif 2026.",
      },
    ],
    downloads: [
      {
        title: "Formulaire en français",
        description: "Version de base pour l’inscription au dispositif Via Escola.",
        href: "/docs/enfance-ecoles/via-escola-formulaire-fr.txt",
        meta: "FR",
      },
      {
        title: "Formulaire en anglais",
        description: "Useful for families who prefer to complete the registration in English.",
        href: "/docs/enfance-ecoles/via-escola-formulaire-en.txt",
        meta: "EN",
      },
      {
        title: "Formulaire en portugais",
        description: "Version portugaise mise à disposition des familles.",
        href: "/docs/enfance-ecoles/via-escola-formulaire-pt.txt",
        meta: "PT",
      },
      {
        title: "Formulaire en espagnol",
        description: "Version espagnole du dossier d’inscription.",
        href: "/docs/enfance-ecoles/via-escola-formulaire-es.txt",
        meta: "ES",
      },
      {
        title: "Formulaire en italien",
        description: "Version italienne pour les parents qui en ont besoin.",
        href: "/docs/enfance-ecoles/via-escola-formulaire-it.txt",
        meta: "IT",
      },
      {
        title: "Flyer Via Escola 2026",
        description: "Présentation synthétique du programme 2026 et de son fonctionnement.",
        href: "/docs/enfance-ecoles/via-escola-flyer-2026.txt",
        meta: "Flyer",
      },
    ],
    contacts: [
      {
        title: "Référente Via Escola",
        role: "Renseignements et inscriptions",
        phone: "021 622 73 20",
        email: "via.escola@prilly.ch",
        address: "Service de l’enfance, Route de Cossonay 40, 1008 Prilly",
        hours: ["Lu–Ve 08:30–11:30", "Rendez-vous sur demande"],
      },
    ],
    relatedSlugs: ["ecoles", "conseillere-ecole-famille"],
  },
  {
    slug: "accueil-prescolaire",
    path: `${root}/accueil-prescolaire`,
    title: "Accueil préscolaire",
    eyebrow: "Petite enfance",
    description:
      "Trois portes d’entrée claires pour choisir une solution avant l’école selon l’âge, le rythme souhaité et le mode d’accueil recherché.",
    intro:
      "Cette page vous aide à comparer rapidement l’accueil collectif, le jardin d’enfants et l’accueil familial de jour sans devoir parcourir plusieurs contenus administratifs.",
    tone: "soft",
    heroCtas: [
      { label: "Voir les structures", href: "#structures" },
      { label: "Contacter le service", href: "#contacts" },
    ],
    childLinks: [
      {
        slug: "centres-vie-enfantine",
        title: "Centres de vie enfantine",
        description: "Accueil collectif dès 3 mois jusqu’à l’entrée à l’école.",
        href: `${root}/centres-vie-enfantine`,
        accent: "green",
      },
      {
        slug: "jardin-enfants-amadou",
        title: "Jardin d’enfants Amadou",
        description: "Accueil souple dès 2 ans et demi avec horaires très lisibles.",
        href: `${root}/jardin-enfants-amadou`,
        accent: "yellow",
      },
      {
        slug: "accueil-familial",
        title: "Accueil familial de jour",
        description: "Un accueil en milieu familial de 14 semaines à 12 ans.",
        href: `${root}/accueil-familial`,
        accent: "red",
      },
    ],
    sections: [
      {
        title: "Comment choisir ?",
        items: [
          "Privilégiez les centres de vie enfantine si vous cherchez un accueil collectif régulier.",
          "Le jardin d’enfants Amadou convient bien aux enfants dès 2 ans et demi avec une approche plus légère.",
          "L’accueil familial de jour offre un cadre plus flexible, en milieu familial.",
        ],
      },
    ],
    contacts: [
      {
        title: "Service de l’enfance",
        role: "Orientation petite enfance",
        phone: "021 622 74 10",
        email: "enfance@prilly.ch",
        address: "Route de Cossonay 40, 1008 Prilly",
        hours: ["Lu–Je 08:00–12:00 / 13:30–17:00", "Ve 08:00–12:00"],
      },
    ],
    relatedSlugs: ["centres-vie-enfantine", "jardin-enfants-amadou", "accueil-familial"],
  },
  {
    slug: "centres-vie-enfantine",
    path: `${root}/centres-vie-enfantine`,
    title: "Centres de vie enfantine",
    eyebrow: "Accueil collectif",
    description:
      "Une présentation lisible des trois structures collectives de Prilly pour les enfants de 3 mois jusqu’à l’entrée à l’école.",
    intro:
      "Les centres de vie enfantine permettent un accueil régulier dans un cadre structuré, avec une organisation pensée pour les familles et un accès clair aux inscriptions.",
    tone: "soft",
    heroCtas: [
      { label: "Préparer une demande", href: "#inscription" },
      { label: "Voir les structures", href: "#structures" },
    ],
    quickFacts: [
      { label: "Âge", value: "3 mois à l’entrée à l’école" },
      { label: "Structures", value: "Les Acacias, Le Tilleul, Les Sorbiers" },
      { label: "Pilotage", value: "Fondation des Acacias en lien avec AJENOL" },
    ],
    serviceCards: [
      {
        title: "Les Acacias",
        description: "Structure d’accueil collectif avec équipe éducative et repas sur place.",
        meta: ["Accueil préscolaire", "Journée continue", "Lien avec AJENOL"],
      },
      {
        title: "Le Tilleul",
        description: "Une structure pensée pour le rythme de la petite enfance et la relation avec les familles.",
        meta: ["Accueil collectif", "Organisation souple", "Communication parents"],
      },
      {
        title: "Les Sorbiers",
        description: "Une troisième structure qui complète l’offre d’accueil préscolaire à Prilly.",
        meta: ["Petite enfance", "Cadre éducatif", "Solution locale"],
      },
    ],
    sections: [
      {
        title: "Fonctionnement",
        items: [
          "L’accueil est collectif et encadré par des équipes éducatives qualifiées.",
          "Les demandes passent par les dispositifs et critères du réseau AJENOL.",
          "Les places sont attribuées selon les disponibilités, les critères réseau et la situation familiale.",
        ],
      },
      {
        title: "Inscription",
        items: [
          "Préparez les informations sur votre enfant, vos besoins d’accueil et votre disponibilité.",
          "Déposez votre demande via le réseau AJENOL ou avec l’aide de l’administration.",
          "Consultez aussi la page Menus pour les repas servis dans les structures.",
        ],
      },
    ],
    downloads: [
      {
        title: "Accéder au réseau AJENOL",
        description: "Portail d’inscription et informations réseau pour les demandes d’accueil.",
        href: "https://www.ajenol.ch",
        meta: "Portail",
      },
      {
        title: "Menus des structures",
        description: "Consulter les menus selon la structure fréquentée.",
        href: `${root}/menus`,
        meta: "Interne",
      },
    ],
    contacts: [
      {
        title: "Fondation des Acacias",
        role: "Direction et administration",
        phone: "021 624 62 20",
        email: "administration@fondation-acacias.ch",
        address: "Prilly",
        hours: ["Lu–Je 08:30–11:30 / 14:00–16:30"],
      },
      {
        title: "Service de l’enfance",
        role: "Information complémentaire",
        phone: "021 622 74 10",
        email: "enfance@prilly.ch",
      },
    ],
    relatedSlugs: ["menus", "accueil-prescolaire"],
  },
  {
    slug: "jardin-enfants-amadou",
    path: `${root}/jardin-enfants-amadou`,
    title: "Jardin d’enfants Amadou",
    eyebrow: "Accueil souple",
    description:
      "Une solution rassurante pour les enfants de 2 ans et demi à 5 ans, avec des horaires bien visibles et une organisation simple à comprendre.",
    intro:
      "Le jardin d’enfants Amadou propose un accueil avant l’école dans un cadre léger et convivial, fermé pendant les vacances scolaires.",
    tone: "soft",
    quickFacts: [
      { label: "Âge", value: "2 ans et demi à 5 ans" },
      { label: "Fermeture", value: "Vacances scolaires" },
      { label: "Priorité", value: "Familles de Prilly et Jouxtens-Mézery" },
    ],
    sections: [
      {
        title: "Horaires",
        items: [
          "Accueil le matin selon les groupes et les jours attribués.",
          "Présence régulière recommandée pour aider l’enfant à prendre ses repères.",
          "L’organisation exacte est confirmée lors de l’inscription.",
        ],
      },
      {
        title: "À savoir",
        items: [
          "La structure est fermée pendant les vacances scolaires.",
          "Les priorités d’attribution concernent les familles domiciliées à Prilly et Jouxtens-Mézery.",
          "Le cadre est pensé pour préparer doucement l’entrée à l’école.",
        ],
      },
    ],
    contacts: [
      {
        title: "Jardin d’enfants Amadou",
        role: "Association et inscriptions",
        phone: "021 624 43 12",
        email: "amadou@prilly.ch",
        address: "Prilly",
        note: "Renseignements complémentaires sur demande auprès de l’association.",
      },
    ],
    relatedSlugs: ["accueil-prescolaire", "accueil-familial"],
  },
  {
    slug: "accueil-familial",
    path: `${root}/accueil-familial`,
    title: "Accueil familial de jour",
    eyebrow: "Milieu familial",
    description:
      "Une solution d’accueil souple de 14 semaines à 12 ans, avec un accompagnement par une coordinatrice et des accueillantes formées.",
    intro:
      "L’accueil familial de jour permet de confier son enfant à une accueillante en milieu familial tout en restant dans un cadre encadré, formé et suivi.",
    tone: "soft",
    heroCtas: [
      { label: "Comment inscrire votre enfant", href: "#demarches" },
      { label: "Voir les tarifs", href: "#tarifs" },
    ],
    quickFacts: [
      { label: "Âge", value: "14 semaines à 12 ans" },
      { label: "Passage", value: "Demande via AJENOL" },
      { label: "Révision", value: "Renouvellement tous les 4 mois" },
    ],
    steps: [
      {
        title: "Déposez votre demande",
        description: "La demande passe par AJENOL avec vos besoins d’accueil et votre situation.",
      },
      {
        title: "Analyse de la situation",
        description: "La coordinatrice évalue les disponibilités et la solution la plus adaptée.",
      },
      {
        title: "Attribution ou réévaluation",
        description: "L’accueil est attribué selon les disponibilités et revu régulièrement.",
        hint: "Le besoin est réévalué tous les 4 mois.",
      },
    ],
    sections: [
      {
        title: "Comment fonctionne l’attribution d’une place",
        items: [
          "Les accueillantes en milieu familial sont autorisées, suivies et formées.",
          "La coordinatrice veille à l’adéquation entre les besoins de la famille et les possibilités d’accueil.",
          "D’autres solutions d’accueil peuvent être proposées si le dispositif ne correspond pas à votre besoin.",
        ],
      },
      {
        title: "Encadrement",
        items: [
          "Les accueillantes bénéficient d’une formation et d’un accompagnement continu.",
          "Le dispositif s’inscrit dans un cadre professionnel coordonné.",
          "Les familles disposent d’un interlocuteur clair en cas de question ou d’ajustement.",
        ],
      },
    ],
    downloads: [
      {
        title: "Tarif accueil familial",
        description: "Document de référence pour comprendre la tarification et les modalités de calcul.",
        href: "/docs/enfance-ecoles/tarifs-accueil-familial.txt",
        meta: "Tarifs",
      },
    ],
    contacts: [
      {
        title: "Coordination accueil familial",
        role: "Demandes et suivi",
        phone: "021 624 31 45",
        email: "accueil.familial@ajenol.ch",
        note: "Les demandes se font via AJENOL et sont suivies par la coordination.",
      },
    ],
    relatedSlugs: ["accueil-prescolaire", "centres-vie-enfantine"],
  },
];
