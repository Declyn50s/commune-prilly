import type { EnfancePageData } from "@/features/enfance-ecoles/types";

const root = "/vivre/enfance-ecoles";

export const enfanceScolairePages: EnfancePageData[] = [
  {
    slug: "accueil-parascolaire",
    path: `${root}/accueil-parascolaire`,
    title: "Accueil parascolaire",
    eyebrow: "Autour de l’école",
    description:
      "Une page repère pour distinguer les offres selon le niveau scolaire: 1P–2P, 3P–6P, 7P–8P et alternatives pour la pause de midi.",
    intro:
      "L’objectif est simple: vous aider à repérer immédiatement le bon dispositif selon la classe de votre enfant et le moment de la journée concerné.",
    tone: "school",
    childLinks: [
      {
        slug: "la-fringale",
        title: "La Fringale",
        description: "Repas et accueil de midi pour les enfants de 3P à 6P.",
        href: `${root}/la-fringale`,
        accent: "yellow",
        badge: "3P–6P",
      },
      {
        slug: "accueil-7p-8p",
        title: "Accueil 7P–8P",
        description: "Pause de midi, activité physique, étude accompagnée et alternatives.",
        href: `${root}/accueil-7p-8p`,
        accent: "red",
        badge: "7P–8P",
      },
      {
        slug: "refectoire-scolaire",
        title: "Réfectoire scolaire",
        description: "Repas de midi pour les élèves de 7P à 11S.",
        href: `${root}/refectoire-scolaire`,
        accent: "coal",
        badge: "7P–11S",
      },
      {
        slug: "devoirs-surveilles",
        title: "Devoirs surveillés",
        description: "Accompagnement pour les élèves de 3P à 6P.",
        href: `${root}/devoirs-surveilles`,
        accent: "green",
        badge: "3P–6P",
      },
    ],
    sections: [
      {
        title: "Repères par niveau",
        items: [
          "1P–2P: orientation vers les dispositifs UAPE / APEMS adaptés à la petite scolarité.",
          "3P–6P: repas et accueil de midi avec La Fringale, devoirs surveillés et APEMS.",
          "7P–8P: accueil de midi spécifique, étude accompagnée, activité physique et alternatives de repas.",
          "9S–11S: réfectoire scolaire et espaces plus autonomes à midi.",
        ],
      },
    ],
    relatedSlugs: ["la-fringale", "devoirs-surveilles", "accueil-7p-8p", "refectoire-scolaire"],
  },
  {
    slug: "la-fringale",
    path: `${root}/la-fringale`,
    title: "La Fringale",
    eyebrow: "Repas de midi 3P–6P",
    description:
      "Une page très pratique pour comprendre en quelques secondes les horaires, le prix, le fonctionnement et l’inscription de La Fringale.",
    intro:
      "La Fringale accueille les enfants de 3P à 6P sur le temps de midi avec repas et encadrement dans un cadre clair et rythmé.",
    tone: "practical",
    heroCtas: [
      { label: "S’inscrire via MonPortail-MaCantine", href: "#inscription" },
      { label: "Voir prix et horaires", href: "#infos" },
    ],
    quickFacts: [
      { label: "Public", value: "Élèves de 3P à 6P" },
      { label: "Ouverture", value: "Jours scolaires à midi" },
      { label: "Fermeture", value: "Vacances scolaires" },
      { label: "Inscription", value: "Via MonPortail-MaCantine" },
    ],
    sections: [
      {
        title: "Ce que comprend le service",
        items: [
          "Repas de midi et temps d’accueil encadré.",
          "Organisation claire entre arrivée, repas et retour à l’école.",
          "Lien direct avec les autres solutions d’accueil si nécessaire.",
        ],
      },
      {
        title: "Infos pratiques",
        items: [
          "Ouverture les jours d’école selon les besoins d’inscription.",
          "Fermeture pendant les vacances scolaires.",
          "Menus disponibles depuis la page dédiée.",
        ],
      },
    ],
    pricing: [
      {
        title: "Tarif journalier",
        value: "CHF 18.–",
        detail: "Repas et encadrement compris selon les modalités communales.",
      },
      {
        title: "Inscription",
        value: "MonPortail-MaCantine",
        detail: "Le compte parent permet de gérer les présences et le suivi.",
      },
    ],
    downloads: [
      {
        title: "Règlement",
        description: "Règles de fonctionnement du service.",
        href: "/docs/enfance-ecoles/reglement-la-fringale.txt",
        meta: "Règlement",
      },
      {
        title: "Menus",
        description: "Consulter les menus servis dans les structures de midi.",
        href: `${root}/menus`,
        meta: "Interne",
      },
    ],
    contacts: [
      {
        title: "Accueil parascolaire",
        role: "Questions et suivi des inscriptions",
        phone: "021 622 74 15",
        email: "parascolaire@prilly.ch",
      },
    ],
    relatedSlugs: ["menus", "accueil-parascolaire"],
  },
  {
    slug: "menus",
    path: `${root}/menus`,
    title: "Menus",
    eyebrow: "Repas & alimentation",
    description:
      "Une page compacte pour retrouver rapidement le bon menu selon la structure fréquentée, sans surcharge ni recherches inutiles.",
    intro:
      "La commune met en avant une politique alimentaire claire et une consultation rapide des menus par lieu d’accueil.",
    tone: "practical",
    childLinks: [
      {
        slug: "menus-cve",
        title: "CVE Acacias / Tilleul / Sorbiers",
        description: "Menus des centres de vie enfantine.",
        href: "/docs/enfance-ecoles/menus-cve.txt",
        accent: "green",
      },
      {
        slug: "menus-uape-apems",
        title: "UAPE Le Tilleul + APEMS Vieux-Collège",
        description: "Menus des structures parascolaires de référence.",
        href: "/docs/enfance-ecoles/menus-uape-apems.txt",
        accent: "yellow",
      },
      {
        slug: "menus-apems",
        title: "APEMS Confrérie / Jolimont / Corminjoz / Mont-Goulin",
        description: "Menus par lieu d’accueil.",
        href: "/docs/enfance-ecoles/menus-apems.txt",
        accent: "red",
      },
      {
        slug: "menus-fringale",
        title: "Réfectoire La Fringale",
        description: "Menus de midi pour les élèves de 3P à 6P.",
        href: "/docs/enfance-ecoles/menus-fringale.txt",
        accent: "coal",
      },
      {
        slug: "menus-refectoire",
        title: "Réfectoire scolaire",
        description: "Menus pour les élèves de 7P à 11S.",
        href: "/docs/enfance-ecoles/menus-refectoire.txt",
        accent: "coal",
      },
    ],
    sections: [
      {
        title: "Politique alimentaire",
        items: [
          "Des repas pensés pour être équilibrés, lisibles et faciles à consulter.",
          "Des adaptations et menus spéciaux sont possibles selon le cadre des structures.",
          "Chaque lieu conserve son accès de consultation propre pour éviter toute confusion.",
        ],
      },
    ],
    relatedSlugs: ["la-fringale", "refectoire-scolaire", "centres-vie-enfantine"],
  },
  {
    slug: "devoirs-surveilles",
    path: `${root}/devoirs-surveilles`,
    title: "Devoirs surveillés 3P–6P",
    eyebrow: "Accompagnement scolaire",
    description:
      "Une page claire pour comprendre le fonctionnement, les horaires, les tarifs et l’inscription aux devoirs surveillés.",
    intro:
      "Les devoirs surveillés offrent un temps d’accompagnement structuré après l’école, avec une organisation simple à lire pour les familles.",
    tone: "school",
    heroCtas: [
      { label: "S’inscrire via MonPortail", href: "#inscription" },
      { label: "Télécharger règlement et calendrier", href: "#documents" },
    ],
    sections: [
      {
        title: "Ce que sont les devoirs surveillés",
        items: [
          "Un temps d’accompagnement pour favoriser l’autonomie et les habitudes de travail.",
          "Un dispositif disponible une, deux ou trois fois par semaine selon le besoin.",
          "Une organisation pensée pour rester claire du début à la fin du créneau.",
        ],
      },
      {
        title: "Horaires",
        items: [
          "Accueil apres la classe selon le jour d’inscription.",
          "Récréation incluse dans le déroulement.",
          "Heure de libération communiquée clairement aux familles.",
        ],
      },
    ],
    pricing: [
      {
        title: "1 fois par semaine",
        value: "CHF 180.– / an",
        detail: "Tarif indicatif pour une présence hebdomadaire.",
      },
      {
        title: "2 fois par semaine",
        value: "CHF 320.– / an",
        detail: "Tarif indicatif ajusté selon la fréquence choisie.",
      },
      {
        title: "3 fois par semaine",
        value: "CHF 450.– / an",
        detail: "Tarif indicatif pour une présence plus soutenue.",
      },
    ],
    downloads: [
      {
        title: "Règlement 2025–2026",
        description: "Document de référence pour le fonctionnement du dispositif.",
        href: "/docs/enfance-ecoles/reglement-devoirs-surveilles-2025-2026.txt",
        meta: "Règlement",
      },
      {
        title: "Calendrier 2025–2026",
        description: "Repères annuels utiles pour les familles.",
        href: "/docs/enfance-ecoles/calendrier-devoirs-surveilles-2025-2026.txt",
        meta: "Calendrier",
      },
    ],
    contacts: [
      {
        title: "Service enfance & scolarité",
        role: "Inscriptions et suivi",
        phone: "021 622 74 12",
        email: "devoirs.surveilles@prilly.ch",
      },
    ],
    relatedSlugs: ["accueil-parascolaire", "accueil-7p-8p"],
  },
  {
    slug: "accueil-7p-8p",
    path: `${root}/accueil-7p-8p`,
    title: "Accueil 7P–8P",
    eyebrow: "Pause de midi & études",
    description:
      "Une page dédiée aux élèves du Grand-Pré pour ne plus mélanger l’accueil de midi, les études accompagnées et les autres solutions disponibles.",
    intro:
      "L’offre 7P–8P est structurée autour du temps de midi, avec plusieurs possibilités selon le rythme et les besoins de l’enfant.",
    tone: "school",
    sections: [
      {
        title: "Ce qui est proposé",
        items: [
          "Accueil de midi avec encadrement.",
          "Activité physique payante selon les disponibilités.",
          "Études accompagnées, bibliothèque et possibilité de pique-nique.",
          "Alternative possible vers l’APEMS Vieux-Collège selon la situation.",
        ],
      },
    ],
    pricing: [
      {
        title: "Accueil de midi",
        value: "Selon inscription",
        detail: "Tarification communiquée au moment de l’inscription via MonPortail.",
      },
      {
        title: "Activité physique",
        value: "Option payante",
        detail: "Le supplément dépend de l’activité choisie.",
      },
    ],
    downloads: [
      {
        title: "Charte et règlement",
        description: "Règles de participation et cadre de fonctionnement.",
        href: "/docs/enfance-ecoles/charte-accueil-7p-8p.txt",
        meta: "Règlement",
      },
    ],
    contacts: [
      {
        title: "Service jeunesse",
        role: "Référence 7P–8P",
        phone: "021 622 74 30",
        email: "jeunesse@prilly.ch",
      },
    ],
    relatedSlugs: ["refectoire-scolaire", "devoirs-surveilles"],
  },
  {
    slug: "refectoire-scolaire",
    path: `${root}/refectoire-scolaire`,
    title: "Réfectoire scolaire",
    eyebrow: "Repas 7P–11S",
    description:
      "Une page de service très lisible pour comprendre qui peut s’inscrire, combien cela coûte et comment fonctionne le temps de midi au réfectoire scolaire.",
    intro:
      "Le réfectoire scolaire s’adresse aux élèves de 7P à 11S avec une information pratique structurée autour des besoins réels des familles.",
    tone: "practical",
    heroCtas: [
      { label: "Comment s’inscrire", href: "#inscription" },
      { label: "Téléchargements utiles", href: "#documents" },
    ],
    quickFacts: [
      { label: "Public", value: "Élèves de 7P à 11S" },
      { label: "Ouverture", value: "Lundi, mardi, jeudi, vendredi" },
      { label: "Fermeture", value: "Mercredi et vacances scolaires" },
    ],
    sections: [
      {
        title: "Qui peut s’inscrire ?",
        items: [
          "Les élèves de 7P à 11S selon les modalités de la commune.",
          "Une inscription reste nécessaire même pour un usage ponctuel encadré.",
          "Une décharge peut être demandée selon certaines situations.",
        ],
      },
      {
        title: "Après le repas",
        items: [
          "Encadrement spécifique pour les élèves de 7P–8P.",
          "Fonctionnement plus autonome pour les plus grands selon le règlement.",
          "Articulation avec les autres offres de midi ou d’étude selon l’âge.",
        ],
      },
    ],
    pricing: [
      {
        title: "Habitants du réseau",
        value: "CHF 15.–",
        detail: "Tarif indicatif par repas pour les habitants du réseau.",
      },
      {
        title: "Hors commune",
        value: "CHF 19.–",
        detail: "Tarif indicatif appliqué hors conditions réseau.",
      },
    ],
    downloads: [
      {
        title: "Conditions d’inscription",
        description: "Document pratique pour préparer l’accès au réfectoire.",
        href: "/docs/enfance-ecoles/conditions-inscription-refectoire.txt",
        meta: "Conditions",
      },
      {
        title: "Formulaire de décharge",
        description: "À utiliser lorsque la situation nécessite une décharge spécifique.",
        href: "/docs/enfance-ecoles/decharge-refectoire.txt",
        meta: "Décharge",
      },
      {
        title: "Charte et règlement",
        description: "Cadre de participation et guide d’utilisation du service.",
        href: "/docs/enfance-ecoles/reglement-refectoire.txt",
        meta: "Règlement",
      },
    ],
    contacts: [
      {
        title: "Service jeunesse",
        role: "Réfectoire et temps de midi",
        phone: "021 622 74 30",
        email: "jeunesse@prilly.ch",
      },
    ],
    relatedSlugs: ["accueil-7p-8p", "menus"],
  },
];
