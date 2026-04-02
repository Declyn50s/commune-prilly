import { CalendarDays, MapPin, Phone, Search } from "lucide-react";

export const utilityServices = [
  {
    title: "Eau potable",
    description: "Qualité de l'eau, provenance, documents 2025 et contact du Service de l'eau.",
    href: "/services/services-industriels/eau-potable",
    icon: Search,
    tone: "blue" as const,
  },
  {
    title: "Gaz",
    description: "Réseau, dépannage, horaires et numéros utiles du service du gaz.",
    href: "/services/services-industriels/gaz",
    icon: Phone,
    tone: "amber" as const,
  },
  {
    title: "Chauffage à distance",
    description: "Comprendre le réseau CADOUEST SA et trouver le bon interlocuteur.",
    href: "/services/services-industriels/chauffage-distance",
    icon: CalendarDays,
    tone: "coal" as const,
  },
];

export const industrialServicesContacts = [
  {
    title: "Service de l'eau",
    description: "Distribution et qualité de l'eau potable.",
    phone: "+41 21 315 85 30",
    href: "/services/services-industriels/eau-potable",
  },
  {
    title: "Service du gaz",
    description: "Réseau gaz, dépannage et contact clients.",
    phone: "+41 21 315 83 11",
    href: "/services/services-industriels/gaz",
  },
  {
    title: "CADOUEST SA",
    description: "Réseau de chauffage à distance à Prilly et Renens.",
    phone: "+41 21 624 14 74",
    href: "/services/services-industriels/chauffage-distance",
  },
];

export const industrialIntro = {
  title: "Services industriels",
  description:
    "Eau potable, gaz et chauffage à distance : informations utiles, qualité de service et contacts à Prilly.",
  body:
    "Cette rubrique aide à identifier rapidement le bon service technique selon votre besoin, avec des contenus séparés pour l'eau, le gaz et le chauffage à distance.",
};

export const industrialServicesExplanation = [
  {
    title: "Des interlocuteurs différents",
    description:
      "L'eau potable et le gaz relèvent principalement des Services industriels de Lausanne, alors que le chauffage à distance est géré par CADOUEST SA.",
  },
  {
    title: "Des besoins très concrets",
    description:
      "Qualité de l'eau, dépannage gaz, compréhension du réseau de chaleur : chaque page va droit au but selon le besoin réel.",
  },
  {
    title: "Une navigation simple",
    description:
      "Le hub permet d'identifier rapidement le bon interlocuteur sans devoir parcourir un long contenu technique.",
  },
];

export const waterKeyFigures = [
  { label: "Échantillons prélevés en 2025", value: "3'132", note: "Contrôles réalisés tout au long du réseau" },
  { label: "Paramètres analysés", value: "35'708", note: "Suivi microbiologique et physico-chimique" },
  { label: "Qualité microbiologique", value: "Très bonne", note: "E. coli et entérocoques à 0" },
  { label: "Qualité physico-chimique", value: "Très bonne", note: "Résultats 2025 conformes" },
];

export const waterOriginData = {
  summary:
    "Prilly est alimentée par les réservoirs de Chablière, Sauvabelin, Petite-Croix et Crissier. Les ressources proviennent du lac Léman, du lac de Bret et des sources.",
  reservoirs: ["Chablière", "Sauvabelin", "Petite-Croix", "Crissier"],
  treatment:
    "L'eau des lacs est traitée dans les usines de Lutry, Saint-Sulpice et Bret, puis désinfectée par légère chloration avant injection dans le réseau.",
  shares: [
    { label: "Lac Léman", value: "66 %" },
    { label: "Lac de Bret", value: "8 %" },
    { label: "Sources", value: "26 %" },
  ],
};

export const waterQualityMetrics = {
  microbiology: {
    intro:
      "Les analyses microbiologiques vérifient l'absence de micro-organismes indiquant une contamination. Les résultats 2025 pour Prilly sont de très bonne qualité.",
    items: [
      { label: "E. coli", value: "0", note: "Aucune détection" },
      { label: "Entérocoques", value: "0", note: "Aucune détection" },
      { label: "Germes aérobies mésophiles", value: "0 à 15", note: "Très en dessous de la norme < 300" },
    ],
    imageSrc: "/images/services-industriels/csm_Microbiologie_b9975bc2eb.png",
  },
  chemistry: {
    intro:
      "Les analyses physico-chimiques s'intéressent à la composition naturelle de l'eau et aux substances surveillées. Les résultats 2025 sont conformes.",
    items: [
      { label: "Dureté totale", value: "14.1 à 18.1 °f", note: "Eau non considérée comme très dure" },
      { label: "Nitrates", value: "2.2 à 2.8 mg/l", note: "Très en dessous des valeurs limites" },
      { label: "Appréciation", value: "Très bonne qualité", note: "Résultats conformes sur les réservoirs suivis" },
    ],
    imageSrc: "/images/services-industriels/csm_Chimie_729a625dd0.png",
  },
  micropollutants: {
    intro:
      "Plus de 300 substances sont suivies. Le 1,2,4-Triazole est observé dans les réseaux approvisionnés par l'eau du Léman, à des concentrations jugées sans risque pour la santé selon l'OFCO.",
    points: [
      "Aucune recommandation particulière de consommation",
      "Suivi régulier dans les réseaux concernés",
      "Information transparente et actualisée",
    ],
  },
};

export const waterMeaningForResidents = [
  "L'eau distribuée à Prilly est potable et peut être consommée normalement.",
  "La dureté est modérée: un point utile à connaître pour les appareils ménagers.",
  "Des informations plus précises peuvent être consultées selon l'adresse et le secteur de distribution.",
];

export const waterDocuments = [
  {
    title: "Information qualité de l'eau 2025 Prilly",
    description: "Le document de synthèse principal pour comprendre la qualité de l'eau distribuée à Prilly en 2025.",
    href: "/docs/services-industriels/2026-02-Information_qualite_2025_Prilly.pdf",
    label: "Consulter le document",
  },
  {
    title: "Dépliant qualité de l'eau 2025",
    description: "Une version pédagogique et visuelle des informations utiles pour les habitantes et habitants.",
    href: "/docs/services-industriels/2026-02-Depliant_qualite_de_l_eau_2025.pdf",
    label: "Télécharger le dépliant",
  },
  {
    title: "Courrier d'information aux communes",
    description: "Le courrier de contexte accompagnant les informations qualité 2025.",
    href: "/docs/services-industriels/2026-02-Courrier_info_qualite_CD_25.pdf",
    label: "Voir le courrier",
  },
  {
    title: "Carte de dureté des eaux",
    description: "Le document utile pour repérer la dureté de l'eau selon les zones d'alimentation.",
    href: "/docs/services-industriels/EE_CARTE_DURETE_DES_EAUX.pdf",
    label: "Ouvrir la carte",
  },
];

export const waterContact = {
  title: "Service de l'eau",
  addressLines: ["Rue de Genève 36", "Case postale 7416", "1002 Lausanne"],
  phone: "+41 21 315 85 30",
  fax: "+41 21 315 80 05",
  email: "eau@lausanne.ch",
  website: "https://www.lausanne.ch/eau",
};

export const gasInfo = {
  intro:
    "à Prilly, le réseau et la distribution de gaz naturel sont gérés par les Services industriels de Lausanne (SiL). Le gaz est utilisé principalement pour le chauffage, la cuisine et certains usages industriels.",
  interventions: [
    { title: "Permanence téléphonique", value: "+41 21 315 83 25", note: "Toute intervention sur une installation de gaz doit être signalée." },
    { title: "Bureau technique", value: "+41 21 315 83 47", note: "Questions techniques et coordination." },
    { title: "Contact clients", value: "+41 21 315 87 14", note: "Suivi administratif et clientèle." },
    { title: "En dehors des heures de bureau", value: "+41 21 315 93 95", note: "Dépannage et intervention 24h/24, 7j/7." },
  ],
  officeHours: ["Lundi-vendredi", "07h30-11h30", "13h00-16h30", "Dépannage 24h/24, 7j/7"],
  contact: {
    title: "Service du gaz",
    addressLines: ["Chemin de Pierre-de-Plan 4", "1005 Lausanne"],
    phone: "+41 21 315 83 11",
    fax: "+41 21 315 80 04",
    website: "https://www.prilly.ch/vivre-a-prilly/services-industriels/gaz",
  },
};

export const heatingNetworkInfo = {
  intro:
    "Le chauffage à distance sur la commune de Prilly est déployé et géré par la société CADOUEST SA, qui construit, exploite et entretient le réseau.",
  role:
    "La société promeut, distribue et vend la chaleur principalement sur les territoires des Communes de Prilly et de Renens.",
  benefits: [
    "Énergie locale",
    "Part renouvelable supérieure à 60 %",
    "Prix concurrentiel et stable",
    "Amélioration de la qualité de l'air",
    "Réduction de nombreuses sources de pollution ponctuelles",
  ],
  contact: {
    title: "CADOUEST SA",
    addressLines: ["Route de Flumeaux 1", "1008 Prilly"],
    phone: "+41 21 624 14 74",
    email: "info@cadouest.ch",
    website: "https://cadouest.ch/",
  },
};
