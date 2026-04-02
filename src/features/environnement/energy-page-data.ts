export type EnergySubsidyCategory =
  | "Toutes"
  | "Efficience & sobriete"
  | "Energies renouvelables"
  | "Mobilite"
  | "Durabilite";

export type EnergyProfile = "Particulier" | "Proprietaire" | "Entreprise / association";

export type EnergySubsidy = {
  id: string;
  title: string;
  category: Exclude<EnergySubsidyCategory, "Toutes">;
  amount: string;
  conditions: string[];
  profiles: EnergyProfile[];
  keywords: string[];
  conditionHref: string;
  requestHref: string;
  featured?: boolean;
};

export type EnergyTipCard = {
  id: string;
  title: string;
  description: string;
  tips: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type EnergyStrategyBlock = {
  title: string;
  description: string;
  points: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type EnergyKpi = {
  id: string;
  label: string;
  value: string;
  unit: string;
  tone: "good" | "watch" | "neutral";
  note: string;
};

export type EnergyDocumentCategory = {
  id: string;
  title: string;
  description: string;
  items: Array<{
    title: string;
    type: string;
    year: string;
    href: string;
  }>;
};

export const energyHero = {
  title: "Energie & Environnement",
  description:
    "Subventions, sobriete energetique, strategie climatique et reseaux communaux : tout en un seul endroit.",
  imageSrc: "/images/environnement/energie/hero-energie.jpg",
  imageAlt: "Panneaux photovoltaiques sur un toit communal",
  ctas: [
    { label: "Voir les subventions", href: "#subventions" },
    { label: "Faire une demande", href: "/docs/environnement/energie/formulaire-subventions-2026.pdf" },
    { label: "Reduire ma consommation", href: "#conseils" },
    { label: "Comprendre la strategie de Prilly", href: "#strategie" },
  ],
  badges: ["Cite de l'energie GOLD", "Subventions 2026", "Conseils pratiques"],
};

export const energySectionLinks = [
  { label: "Subventions", href: "#subventions" },
  { label: "Conseils", href: "#conseils" },
  { label: "Strategie", href: "#strategie" },
  { label: "Batiments", href: "#batiments" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

export const subsidyCategories: EnergySubsidyCategory[] = [
  "Toutes",
  "Efficience & sobriete",
  "Energies renouvelables",
  "Mobilite",
  "Durabilite",
];

export const subsidyProfiles: Array<EnergyProfile | "Tous"> = [
  "Tous",
  "Particulier",
  "Proprietaire",
  "Entreprise / association",
];

const programmeHref = "/docs/environnement/energie/programme-subventions-2026.pdf";
const requestHref = "/docs/environnement/energie/formulaire-subventions-2026.pdf";

export const energySubsidies: EnergySubsidy[] = [
  {
    id: "isolation-enveloppe",
    title: "Isolation mur / dalle / toiture",
    category: "Efficience & sobriete",
    amount: "CHF 70 / m2",
    conditions: ["Travaux sur l'enveloppe du bati", "Demande avant travaux", "Cumul possible selon programme 2026"],
    profiles: ["Proprietaire"],
    keywords: ["isolation", "toiture", "mur", "dalle", "enveloppe", "renovation"],
    conditionHref: programmeHref,
    requestHref,
    featured: true,
  },
  {
    id: "fenetres",
    title: "Remplacement fenetres",
    category: "Efficience & sobriete",
    amount: "CHF 70 / m2",
    conditions: ["Remplacement de fenetres existantes", "Projet eligible selon programme communal", "Demande avant travaux"],
    profiles: ["Proprietaire"],
    keywords: ["fenetres", "menuisérie", "chaleur", "isolation"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "portes",
    title: "Remplacement portes",
    category: "Efficience & sobriete",
    amount: "CHF 70 / m2",
    conditions: ["Portes donnant sur l'enveloppe extérieure", "Demande prealable", "Projet situe à Prilly"],
    profiles: ["Proprietaire"],
    keywords: ["portes", "isolation", "enveloppe"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "bonus-renovation",
    title: "Bonus renovation complete enveloppe",
    category: "Efficience & sobriete",
    amount: "+ CHF 50 / m2",
    conditions: ["En complement à une renovation globale", "Conditions detaillées dans le programme 2026", "Subvention plafonnée par thematique"],
    profiles: ["Proprietaire"],
    keywords: ["bonus", "renovation complete", "enveloppe"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "cecb-plus",
    title: "CECB Plus",
    category: "Efficience & sobriete",
    amount: "Max CHF 1'500",
    conditions: ["Audit energetique du bati", "Utile pour preparer une renovation", "Facture et justificatifs requis"],
    profiles: ["Particulier", "Proprietaire"],
    keywords: ["cecb", "audit", "diagnostic", "batiment"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "amo-energie",
    title: "Assistance  à la maitrise d'ouvrage energie",
    category: "Efficience & sobriete",
    amount: "CHF 4'000 / CHF 8'000",
    conditions: ["CHF 4'000 pour habitation individuelle", "CHF 8'000 pour autres catégories", "Projet de renovation ou de transformation"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["amo", "maitrise d'ouvrage", "energie", "renovation"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "electromenager",
    title: "Appareils electromenagers efficients",
    category: "Efficience & sobriete",
    amount: "20% du prix, max CHF 400",
    conditions: ["Appareils figurant sur les listes admissibles", "Achat aupres d'un marchand agree", "Demande dans les 3 mois apres achat"],
    profiles: ["Particulier"],
    keywords: ["electromenager", "frigo", "lave-linge", "efficience"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "solaire-thermique",
    title: "Solaire thermique",
    category: "Energies renouvelables",
    amount: "CHF 4'000 ou CHF 2'500 + CHF 500 / kW",
    conditions: ["Montage selon type d'installation", "Demande avant travaux", "Cumulable selon conditions"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["solaire thermique", "chauffe-eau", "capteurs"],
    conditionHref: programmeHref,
    requestHref,
    featured: true,
  },
  {
    id: "photovoltaique",
    title: "Solaire photovoltaique",
    category: "Energies renouvelables",
    amount: "CHF 300 / kWc puis forfait CHF 9'000",
    conditions: ["CHF 300 / kWc jusqu'a 30 kWc", "Forfait CHF 9'000 au-dela", "Projet sur toiture à Prilly"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["photovoltaique", "panneaux", "solaire", "autoconsommation"],
    conditionHref: programmeHref,
    requestHref,
    featured: true,
  },
  {
    id: "cac-toiture",
    title: "Toiture pour communaute d'autoconsommation",
    category: "Energies renouvelables",
    amount: "Forfait CHF 10'000",
    conditions: ["Des 250 m2 de toiture mise a disposition", "Projet de communaute d'autoconsommation", "Conditions detaillées dans le programme"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["toiture", "cac", "autoconsommation", "communaute"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "pac-sol-eau",
    title: "PAC sol/eau",
    category: "Energies renouvelables",
    amount: "CHF 1'500 / kWth",
    conditions: ["Remplacement de systeme fossile ou projet eligible", "Demande avant travaux", "Justificatifs techniques requis"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["pac", "pompe a chaleur", "sol eau", "geothermie"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "pac-air-eau",
    title: "PAC air/eau",
    category: "Energies renouvelables",
    amount: "CHF 500 / kWth",
    conditions: ["Projet compatible avec le programme", "Demande avant travaux", "Dimensionnement selon dossier"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["pac", "pompe a chaleur", "air eau"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "cadouest",
    title: "Raccordement chauffage a distance CADOUEST",
    category: "Energies renouvelables",
    amount: "20% de la taxe, max CHF 9'000",
    conditions: ["Raccordement au reseau CADOUEST", "Demande avant travaux", "Montant plafonne par dossier"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["cadouest", "chauffage a distance", "raccordement"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "velo-electrique",
    title: "Velo electrique",
    category: "Mobilite",
    amount: "20%, max CHF 300",
    conditions: ["Achat chez un marchand agree", "Demande dans les 3 mois apres achat", "Achats en ligne non recevables"],
    profiles: ["Particulier"],
    keywords: ["velo electrique", "e-bike", "mobilite"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "bonus-marchand",
    title: "Bonus marchand prilleran",
    category: "Mobilite",
    amount: "CHF 100",
    conditions: ["En complement d'un achat eligible", "Marchand agrée situe à Prilly", "Conditions 2026 applicables"],
    profiles: ["Particulier"],
    keywords: ["bonus", "marchand", "prilly", "velo"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "velo-classique",
    title: "Velo classique",
    category: "Mobilite",
    amount: "20%, max CHF 300",
    conditions: ["Achat chez un marchand agree", "Demande dans les 3 mois", "Justificatif nominatif requis"],
    profiles: ["Particulier"],
    keywords: ["velo", "classique", "cyclable"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "velo-cargo",
    title: "Velo cargo electrique",
    category: "Mobilite",
    amount: "20%, max CHF 1'000",
    conditions: ["Achat chez un marchand agree", "Demande dans les 3 mois", "Achats en ligne non recevables"],
    profiles: ["Particulier", "Entreprise / association"],
    keywords: ["velo cargo", "cargo", "mobilite"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "remorque-velo",
    title: "Remorque velo",
    category: "Mobilite",
    amount: "20%, max CHF 300",
    conditions: ["Achat admissible", "Demande dans les 3 mois apres achat", "Marchand agrée requis"],
    profiles: ["Particulier"],
    keywords: ["remorque", "velo", "famille"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "batterie-velo",
    title: "Batterie velo",
    category: "Mobilite",
    amount: "20%, max CHF 300",
    conditions: ["Remplacement ou achat admissible", "Demande dans les 3 mois", "Marchand agrée requis"],
    profiles: ["Particulier"],
    keywords: ["batterie", "velo electrique"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "passeport-velo",
    title: "Passeport velo CFF",
    category: "Mobilite",
    amount: "50%",
    conditions: ["Abonnement eligible", "Preuve d'achat requise", "Conditions 2026 applicables"],
    profiles: ["Particulier"],
    keywords: ["passeport velo", "cff"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "mobilis-jeune",
    title: "Abonnement Mobilis jeune",
    category: "Mobilite",
    amount: "50%, max CHF 250",
    conditions: ["Pour les jeunes selon conditions du programme", "Justificatifs requis", "Demande nominative"],
    profiles: ["Particulier"],
    keywords: ["mobilis", "jeune", "abonnement"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "flexiabo",
    title: "FlexiAbo 100 jours",
    category: "Mobilite",
    amount: "50%, plafond selon programme",
    conditions: ["Produit eligible 2026", "Demande nominative", "Pieces justificatives requises"],
    profiles: ["Particulier"],
    keywords: ["flexiabo", "100 jours", "transports publics"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "demi-tarif",
    title: "Demi-tarif jeune CFF",
    category: "Mobilite",
    amount: "50%",
    conditions: ["Pour les jeunes eligibles", "Preuve d'achat requise", "Conditions detaillées dans le programme"],
    profiles: ["Particulier"],
    keywords: ["demi-tarif", "cff", "jeune"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "interrail",
    title: "Interrail",
    category: "Mobilite",
    amount: "50%",
    conditions: ["Abonnement admissible", "Pieces justificatives requises", "Demande dans le délai prevu"],
    profiles: ["Particulier"],
    keywords: ["interrail", "train", "mobilite"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "mobility-carvelo",
    title: "Mobility / Carvelo2go",
    category: "Mobilite",
    amount: "CHF 100",
    conditions: ["Abonnement ou service eligible", "Demande nominative", "Conditions 2026 applicables"],
    profiles: ["Particulier"],
    keywords: ["mobility", "carvelo", "partage"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "pre-equipement",
    title: "Pre-equipement electrique parkings collectifs",
    category: "Mobilite",
    amount: "CHF 500 par place",
    conditions: ["Parking collectif", "Pre-equipement pour mobilite electrique", "Projet situe à Prilly"],
    profiles: ["Proprietaire", "Entreprise / association"],
    keywords: ["parking", "electrique", "borne", "pre-equipement"],
    conditionHref: programmeHref,
    requestHref,
  },
  {
    id: "durabilite",
    title: "Subventions developpement durable",
    category: "Durabilite",
    amount: "Voir le volet dedie",
    conditions: ["Projets associatifs, citoyens ou d'entreprise", "Analyse au cas par cas", "Orientation via le service"],
    profiles: ["Particulier", "Entreprise / association"],
    keywords: ["durabilite", "developpement durable", "projet", "association"],
    conditionHref: "/services/environnement/plan-climat",
    requestHref: requestHref,
    featured: true,
  },
];

export const subsidyProcessSteps = [
  {
    title: "Verifier les conditions",
    description: "Reperez la bonne aide, votre profil et les conditions principales avant de lancer votre projet ou votre achat.",
  },
  {
    title: "Télécharger le formulaire",
    description: "Le formulaire 2026 centralise la demande. Gardez aussi le programme a portée de main pour les cas particuliers.",
  },
  {
    title: "Envoyer la demande",
    description: "Transmettez les justificatifs demandes : devis, facture, preuve d'achat ou pieces techniques selon la subvention.",
  },
  {
    title: "Attendre la confirmation",
    description: "La Ville confirme l'eligibilite et le montant selon le programme, les plafonds et les credits disponibles.",
  },
];

export const subsidyImportantPoints = [
  "Demande a deposer avant le début des travaux, ou dans les 3 mois apres l'achat lorsque cela s'applique.",
  "Certaines aides sont nominatives et ne peuvent être obtenues qu'une fois tous les 5 ans.",
  "Les achats en ligne ne sont pas recevables pour la mobilite cyclable.",
  "Les subventions sont plafonnées a CHF 20'000 par thematique.",
];

export const practicalTips: EnergyTipCard[] = [
  {
    id: "electricite-maison",
    title: "Electricite  à la maison",
    description: "Quelques reglages simples permettent de reduire vite les consommations invisibles.",
    tips: ["Couper les veilles inutiles", "Verifier les temperatures de lavage", "Programmer les appareils aux bons moments"],
    ctaLabel: "Voir les conseils",
    ctaHref: "https://www.energie-environnement.ch/",
  },
  {
    id: "eclairage",
    title: "Eclairage efficient",
    description: "Un eclairage plus sobre ameliore le confort tout en baissant la facture.",
    tips: ["Passer au LED", "Adapter la puissance a l'usage", "Profiter au maximum de la lumiere naturelle"],
    ctaLabel: "Consulter le guide lumiere",
    ctaHref: "/docs/environnement/energie/guide-lumiere-menages.pdf",
  },
  {
    id: "appareils",
    title: "Choisir des appareils performants",
    description: "Comparer avant l'achat reste souvent le geste le plus rentable.",
    tips: ["Comparer les etiquettes energie", "Verifier la taille vraiment utile", "Privilegier les modeles durables et reparables"],
    ctaLabel: "Comparer les appareils",
    ctaHref: "https://www.topten.ch/",
  },
  {
    id: "suivi-batiment",
    title: "Suivre la consommation de son batiment",
    description: "Mieux lire son batiment aide a prioriser les bons travaux et les bons investissements.",
    tips: ["Suivre chaleur, electricite et eau", "Demander un CECB", "Planifier les travaux par etapes"],
    ctaLabel: "Comprendre le CECB",
    ctaHref: "https://www.cecb.ch/",
  },
];

export const practicalExpressTips = [
  "Passer au LED",
  "Choisir des appareils efficients",
  "Comparer avant achat",
  "Reduire les consommations invisibles",
  "Suivre son batiment",
];

export const practicalResources = [
  { label: "Topten", href: "https://www.topten.ch/" },
  { label: "Energybox", href: "https://www.energybox.ch/" },
  { label: "Energie Environnement", href: "https://www.energie-environnement.ch/" },
  { label: "Eco-auto", href: "https://www.eco-auto.info/" },
  { label: "CECB", href: "https://www.cecb.ch/" },
];

export const strategyHighlights = {
  gold: {
    title: "Cite de l'energie GOLD",
    description:
      "Prilly met en avant un niveau d'exigence eleve en matiere de politique energetique communale, reconnu par le label GOLD 2024-2028.",
    points: [
      "Label de reference pour les politiques communales ambitieuses",
      "Reconnaissance renouvelée de 2024 a 2028",
      "Un signe de credibilite pour les habitantes, proprietaires et partenaires",
    ],
    ctaLabel: "Voir le certificat",
    ctaHref: "/docs/environnement/energie/certificat-cite-energie-gold-2024-2028.pdf",
  } satisfies EnergyStrategyBlock,
  policy: {
    title: "Politique energetique et climatique",
    description:
      "La commune inscrit son action dans une vision de long terme : transition energetique, horizon societe a 2000 watts et adaptation climatique.",
    points: ["Efficacite", "Renouvelables", "Mobilite", "Gouvernance"],
    ctaLabel: "Voir la politique 2020-2024",
    ctaHref: "/docs/environnement/energie/politique-energetique-climatique-2020-2024.pdf",
  } satisfies EnergyStrategyBlock,
  planning: {
    title: "Planification energetique territoriale",
    description:
      "Cet outil aide a prioriser les ressources, rationaliser la consommation du bati et orienter les reseaux energetiques sur le territoire.",
    points: [
      "Prioriser les ressources energetiques locales",
      "Rationaliser la consommation du bati",
      "Coordonner les choix entre batiments, chaleur et electricite",
    ],
    ctaLabel: "Voir le concept energetique",
    ctaHref: "/docs/environnement/energie/concepts-energetiques-ambitieux.pdf",
    imageSrc: "/images/environnement/energie/planification-energetique.png",
    imageAlt: "Schema de planification energetique territoriale",
  } satisfies EnergyStrategyBlock,
};

export const buildingHighlights = [
  {
    title: "Standard Batiments",
    description: "Le patrimoine communal suit un standard de reference pour guider les projets de renovation et de construction.",
  },
  {
    title: "Suivi energetique et telegestion",
    description: "Les consommations sont suivies dans la durée pour corriger les derives et piloter les installations.",
  },
  {
    title: "Deploiement du photovoltaique",
    description: "Les toitures communales sont progressivement mobilisées pour produire une electricite renouvelable locale.",
  },
  {
    title: "Courant renouvelable",
    description: "La commune vise des approvisionnements plus sobres et plus renouvelables sur son propre patrimoine.",
  },
  {
    title: "Chauffage renouvelable",
    description: "Les projets sont orientes vers des solutions coherentes avec la transition energetique et les reseaux disponibles.",
  },
];

export const enerCoachKpis: EnergyKpi[] = [
  {
    id: "energie-finale",
    label: "Energie finale",
    value: "-18%",
    unit: "vs. reference",
    tone: "good",
    note: "Tendance de baisse sur le parc suivi.",
  },
  {
    id: "energie-primaire",
    label: "Energie primaire",
    value: "-22%",
    unit: "vs. reference",
    tone: "good",
    note: "Effet combine des optimisations et de la sobriete.",
  },
  {
    id: "ges",
    label: "Gaz a effet de serre",
    value: "-31%",
    unit: "CO2e",
    tone: "good",
    note: "Baisse liee a des energies plus sobres et renouvelables.",
  },
  {
    id: "eau",
    label: "Consommation d'eau",
    value: "Suivi actif",
    unit: "multi-sites",
    tone: "neutral",
    note: "Indicateur pilote pour batiments et installations.",
  },
];

export const enerCoachFlows = ["Chaleur", "Electricite", "Eau"];

export const networkCards = [
  {
    title: "CADOUEST / chauffage a distance",
    description:
      "Le reseau de chaleur joue un role cle pour decarboner le chauffage des batiments raccordables sur le territoire.",
    imageSrc: "/images/environnement/energie/cadouest.jpg",
    imageAlt: "Presentation du reseau de chauffage a distance",
    href: "/services/services-industriels/chauffage-distance",
    label: "Voir la rubrique chauffage a distance",
  },
  {
    title: "Services industriels Lausanne (SIL)",
    description:
      "Les SIL sont un acteur important des reseaux principaux et des services energetiques relies a l'approvisionnement du territoire.",
    imageSrc: "/images/environnement/energie/chauffage-distance.jpg",
    imageAlt: "Equipements de chauffage et reseaux techniques",
    href: "/services/services-industriels",
    label: "Voir les services industriels",
  },
];

export const energyDocumentCategories: EnergyDocumentCategory[] = [
  {
    id: "subventions",
    title: "Subventions",
    description: "Les documents essentiels pour comprendre le programme 2026 et deposer une demande complete.",
    items: [
      { title: "Programme des subventions 2026", type: "Programme", year: "2026", href: "/docs/environnement/energie/programme-subventions-2026.pdf" },
      { title: "Formulaire de demande 2026", type: "Formulaire", year: "2026", href: "/docs/environnement/energie/formulaire-subventions-2026.pdf" },
      { title: "Depliant subventions 2026", type: "Depliant", year: "2026", href: "/docs/environnement/energie/depliant-subventions-2026.pdf" },
      { title: "Liste des marchands agrees", type: "Liste", year: "2026", href: "/docs/environnement/energie/liste-magasins-agrees-2026.pdf" },
    ],
  },
  {
    id: "strategie",
    title: "Strategie",
    description: "Les documents de reference qui donnent de la credibilite  à la politique energetique de la commune.",
    items: [
      { title: "Politique energetique et climatique", type: "Strategie", year: "2020-2024", href: "/docs/environnement/energie/politique-energetique-climatique-2020-2024.pdf" },
      { title: "Certificat Cite de l'energie GOLD", type: "Certificat", year: "2024-2028", href: "/docs/environnement/energie/certificat-cite-energie-gold-2024-2028.pdf" },
      { title: "Concepts energetiques ambitieux", type: "Concept", year: "s.d.", href: "/docs/environnement/energie/concepts-energetiques-ambitieux.pdf" },
    ],
  },
  {
    id: "batiments",
    title: "Batiments",
    description: "Les supports utiles pour comprendre l'exemplarite energetique du patrimoine communal.",
    items: [
      { title: "Standard Batiments 2019", type: "Standard", year: "2019", href: "/docs/environnement/energie/standard-batiments-2019.pdf" },
      { title: "Rapport EnerCoach 2022-2023", type: "Rapport", year: "2022-2023", href: "/docs/environnement/energie/rapport-enercoach-2022-2023.pdf" },
    ],
  },
  {
    id: "guides",
    title: "Guides pratiques",
    description: "Deux guides simples pour agir chez soi sur l'eclairage et l'efficacite energetique.",
    items: [
      { title: "Efficacite energetique dans le menage", type: "Guide", year: "s.d.", href: "/docs/environnement/energie/efficacite-energetique-menage.pdf" },
      { title: "Eclairage efficient dans le menage", type: "Guide", year: "s.d.", href: "/docs/environnement/energie/guide-lumiere-menages.pdf" },
    ],
  },
];

export const energyContact = {
  title: "Service Energie et Environnement",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "energie@prilly.ch",
  phone: "+41 21 622 73 51",
};
