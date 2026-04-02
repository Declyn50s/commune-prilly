export const caniculeWorkNotice = {
  title: "Travaux extérieurs et canicule",
  description:
    "Durant les alertes canicule, la Police de l'Ouest lausannois autorise les travaux extérieurs dès 6h du matin pour protéger la santé des travailleurs exposés.",
  details: [
    "Secteurs concernés: construction, revêtement des routes, agriculture notamment",
    "Dérogation valable uniquement pendant les périodes d'alerte canicule",
    "Base d'information: Police de l'Ouest lausannois",
  ],
  href: "https://www.polouest.ch/organisation/actualites/horaires-travaux-extérieurs-lors-dalertes-canicule",
};

export const publicWorksNotices = [
  {
    title: "Mont-Goulin terminus ligne tl n°33",
    status: "En cours",
    dateLabel: "Avis de travaux du 20.08.2025",
    duration: "6 mois",
    location: "Avenue de Mont-Goulin, terminus de la ligne 33",
    summary: "Mise aux normes PMR du terminus avec adaptation de la boucle d'entrée et de l'arrêt.",
    impacts: [
      "Boucle d'entrée fermée",
      "Arrêt déplacé devant les bâtiments 25 / 27",
      "Avenue de Mont-Goulin mise en sens unique",
    ],
    links: [
      { label: "Info trafic TL", href: "https://www.t-l.ch/voyager/info-trafic/" },
    ],
    contact: "Grégoire Romailler",
  },
  {
    title: "Coudraie ligne tl n°33",
    status: "Annoncé",
    dateLabel: "Avis de travaux du 20.10.2025",
    duration: "16 semaines",
    location: "Arrêts Coudraie et axe Vieux-Collège",
    summary: "Mise aux normes PMR des arrêts avec déplacement temporaire et déviation du bus direction Mont-Goulin.",
    impacts: [
      "Arrêts déplacés",
      "Bus direction Mont-Goulin dévié par la route du Vieux-Collège",
      "Information trafic à suivre sur le site des TL",
    ],
    links: [
      { label: "Info trafic TL", href: "https://www.t-l.ch/voyager/info-trafic/" },
    ],
    contact: "Grégoire Romailler",
  },
  {
    title: "Route des Flumeaux - fermeture",
    status: "Bientôt",
    dateLabel: "Phases prévues du 18 au 22 mars 2026 et du 14 au 17 avril 2026",
    duration: "Deux phases courtes à fort impact",
    location: "Carrefour route de Renens / route des Flumeaux",
    summary: "Travaux sur le carrefour et la partie basse des arrêts de bus avec fortes perturbations de circulation.",
    impacts: [
      "Déviation par avenue de la Confrérie et avenue de Florissant",
      "Fortes perturbations automobiles et bus",
      "Plan de déviation à consulter avant déplacement",
    ],
    mapSrc: "/docs/travaux-domaine-public/Deviation.pdf",
    mapLabel: "Plan de déviation Flumeaux",
    contact: "Service Infrastructures et espaces publics",
  },
  {
    title: "Avenue de Mont-Goulin - sens unique",
    status: "En cours",
    dateLabel: "Durée prévue: 4 mois",
    duration: "4 mois",
    location: "Avenue de Mont-Goulin",
    summary: "Restriction de circulation avec passage en sens unique selon le plan annexé.",
    impacts: [
      "Pas de changement pour les piétons",
      "Les cycles doivent respecter le sens de circulation",
      "Lecture du plan fortement recommandée avant passage",
    ],
    imageSrc: "/images/travaux-domaine-public/avenue_de_mont_goulin.jpg",
    mapLabel: "Plan Mont-Goulin sens unique",
    contact: "Service Infrastructures et espaces publics",
  },
  {
    title: "Chemin des Planches 6",
    status: "Ponctuel",
    dateLabel: "Début: jeudi 12 février",
    duration: "1 jour",
    location: "Chemin des Planches 6",
    summary: "Fermeture ponctuelle de la route selon plan, avec maintien du cheminement piéton.",
    impacts: [
      "Cheminement piéton maintenu",
      "Cyclistes priés de descendre du vélo",
      "Fermeture de route selon plan de chantier",
    ],
    contact: "Service Infrastructures et espaces publics",
  },
];

export const trafficImpacts = [
  {
    title: "Déviation Route des Flumeaux",
    description: "Circulation déviée par l'avenue de la Confrérie et l'avenue de Florissant pendant les phases de fermeture du carrefour.",
    bullets: ["Fortes perturbations", "Bus impactés", "Plan PDF disponible"],
    href: "/docs/travaux-domaine-public/Deviation.pdf",
  },
  {
    title: "Avenue de Mont-Goulin en sens unique",
    description: "Le sens unique s'applique selon le plan annexé. Les piétons restent maintenus, les cycles doivent suivre le sens de circulation.",
    bullets: ["Piétons maintenus", "Cycles soumis au sens unique", "Visuel de plan disponible"],
    href: "/images/travaux-domaine-public/avenue_de_mont_goulin.jpg",
  },
  {
    title: "Arrêts de bus déplacés",
    description: "Sur les secteurs Mont-Goulin et Coudraie, les arrêts de la ligne 33 sont temporairement déplacés ou déviés.",
    bullets: ["Mont-Goulin: arrêt devant les bâtiments 25 / 27", "Coudraie: bus dévié via Vieux-Collège", "Suivi en temps réel sur le site TL"],
    href: "https://www.t-l.ch/voyager/info-trafic/",
  },
];

export const speedLimitNotices = {
  title: "30 km/h de nuit",
  description:
    "La limitation de vitesse de nuit est présentée séparément des chantiers pour éviter les confusions entre mesure de circulation durable et travaux ponctuels.",
  dates: [
    "Dès le 23 octobre 2025 à 22h00",
    "Dès le 11 novembre 2025",
    "Dès le 12 novembre 2025",
    "Dès le 13 novembre 2025",
  ],
  streets: [
    "Chemin du Chalet Mignon",
    "Chemin des Passiaux",
    "Rue des Métiers",
    "Chemin du Vieux-Tilleul",
  ],
  purpose:
    "L'objectif est de mieux concilier circulation et qualité de vie nocturne, avec une lecture simple des secteurs concernés.",
};

export const worksContacts = {
  main: {
    title: "Service Infrastructures et espaces publics",
    phone: "+41 21 622 72 31",
    email: "travaux@prilly.ch",
  },
  secondary: {
    title: "Grégoire Romailler",
    note: "Contact utile pour certains avis de travaux liés aux transports publics et aux aménagements PMR.",
  },
};
