import { AlertTriangle, CheckCircle2, MapPin, Phone, Search } from "lucide-react";

export const emergencyNumbers = [
  {
    title: "Police",
    number: "117",
    description: "Intervention policière immédiate et urgences de sécurité.",
    href: "tel:117",
    tone: "red" as const,
    icon: Phone,
  },
  {
    title: "Feu",
    number: "118",
    description: "Incendie, fumées, explosion ou danger lié au feu.",
    href: "tel:118",
    tone: "red" as const,
    icon: AlertTriangle,
  },
  {
    title: "Ambulance",
    number: "144",
    description: "Urgence médicale vitale ou besoin d'une ambulance.",
    href: "tel:144",
    tone: "red" as const,
    icon: CheckCircle2,
  },
  {
    title: "Plus de repères utiles",
    number: "ch.ch",
    description: "Toutes les références utiles et les autres numéros d'urgence en Suisse.",
    href: "https://www.ch.ch/fr/securite-et-droit/urgences-et-premiers-secours/numeros-durgence",
    tone: "white" as const,
    icon: Search,
  },
];

export const securityServices = [
  {
    title: "POLOuest",
    role: "Police de proximité, prévention, interventions et demandes administratives.",
    ctaLabel: "Voir le service",
    href: "https://www.polouest.ch",
  },
  {
    title: "SDIS Malley / Renens",
    role: "Sapeurs-pompiers et secours incendie pour Prilly et la région.",
    ctaLabel: "Découvrir le SDIS",
    href: "https://sdis-malley.ch/accueil/",
  },
  {
    title: "Samaritains",
    role: "Premiers secours, accompagnement associatif et sensibilisation.",
    ctaLabel: "Trouver de l'aide",
    href: "https://www.samaritains.ch/fr",
  },
  {
    title: "Protection civile",
    role: "Appui à la population et organisation de protection en cas d'événement.",
    ctaLabel: "Voir la protection civile",
    href: "https://www.vd.ch/themes/securite/protection-civile",
  },
];

export const heatPreventionTips = [
  "Boire souvent, sans attendre d'avoir soif.",
  "Boire en général 1,5 à 2,5 litres d'eau par jour.",
  "Éviter les boissons sucrées, le café, le thé et l'alcool.",
  "Fermer fenêtres, volets et stores pendant la journée.",
  "Aérer tôt le matin, le soir ou la nuit.",
  "Se rafraîchir régulièrement.",
  "Porter des vêtements légers.",
  "Privilégier les sorties aux heures fraîches.",
  "Manger léger.",
  "Penser aux personnes vulnérables.",
];

export const heatWarningSigns = [
  "Vertiges",
  "Nausées",
  "Fatigue inhabituelle",
  "Maux de tête",
  "Crampes",
  "Soif extrême",
  "Urines foncées",
  "Malaise ou faiblesse",
];

export const heatEmergency = {
  title: "Urgence vitale",
  description:
    "Une température corporelle supérieure à 40°C, une confusion, une inconscience, une peau sèche ou l'absence de transpiration nécessitent un appel immédiat au 144.",
  actions: [
    "Appeler le 144",
    "Mettre la personne dans un endroit frais",
    "Refroidir avec de l'eau froide",
    "Éventer en attendant les secours",
  ],
};

export const medicalHelp = {
  title: "Besoin d'un avis médical",
  description:
    "Si l'état inquiète sans relever d'une urgence vitale, contactez votre médecin traitant ou la Centrale des médecins.",
  phone: "0848 133 133",
  href: "tel:0848133133",
};

export const heatResources = {
  pageHref: "https://www.vd.ch/chaleur",
  flyerHref: "/docs/securite-prevention/CONSEILS_GENERAUX_A5.pdf",
  videoSrc: "/videos/securite-prevention/canicule_A_16x9_03.mp4",
  eyebrow: "Chaleur et santé",
  icon: MapPin,
};

export const sexualAssaultSupport = {
  title: "Aide après une agression sexuelle",
  description:
    "Une aide existe immédiatement pour toute victime, mineure ou majeure, quel que soit son genre ou son orientation sexuelle.",
  points: [
    "Urgences hospitalières 24h/24 et 7j/7",
    "Accueil confidentiel",
    "Sans obligation de porter plainte",
    "accèssible à tous les genres et orientations",
  ],
  href: "https://www.agression-sexuelle-urgences.ch",
  ctaLabel: "Obtenir de l'aide et des informations",
};

export const insuranceInfo = {
  title: "Protection de vos biens",
  description:
    "Dans le canton de Vaud, les bâtiments ainsi que les biens mobiliers sont soumis à l'assurance ECA contre l'incendie et les éléments naturels.",
  points: [
    "Bâtiments construits ou en construction",
    "Biens mobiliers",
    "Prestations ECA en matière d'assurance et de prévention",
  ],
  href: "https://www.eca-vaud.ch/a-propos/",
  imageSrc: "/images/securite-prevention/t%C3%A9l%C3%A9charger.jpg",
};

export const safetyContacts = [
  {
    title: "POLOuest",
    description: "Demandes administratives et informations de police de proximité.",
    phone: "+41 21 622 80 00",
    emergency: "117",
    href: "https://www.polouest.ch",
  },
  {
    title: "SDIS Malley / Renens",
    description: "Urgences feu et secours incendie.",
    emergency: "118",
    href: "https://sdis-malley.ch/accueil/",
  },
];
