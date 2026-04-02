import type {
  HousingAidTab,
  HousingContact,
  HousingDocumentGroup,
  HousingEligibilityRule,
  HousingQuickaccèss,
  HousingRentalStep,
  HousingSupportOrganization,
  HousingWarning,
} from "@/types/content";

export const housingQuickaccèss: HousingQuickaccèss[] = [
  {
    title: "Obtenir une aide au logement",
    description: "Identifier rapidement le bon dispositif et vérifier les conditions essentielles.",
    href: "#aides",
    accent: "red",
  },
  {
    title: "Se faire accompagner",
    description: "Repérer les structures gratuites qui peuvent vous aider dans vos démarches.",
    href: "#accompagnement",
    accent: "green",
  },
  {
    title: "Louer ou sous-louer un logement",
    description: "Comprendre les obligations en cas de location courte durée ou de sous-location.",
    href: "#sous-location",
    accent: "yellow",
  },
  {
    title: "Trouver les bons contacts",
    description: "Contacter le service compétent sans chercher dans plusieurs pages.",
    href: "#contacts",
    accent: "coal",
  },
];

export const housingAidTabs: HousingAidTab[] = [
  {
    key: "family",
    label: "Familles avec enfant",
    intro: "Une aide personnalisée au logement existe pour les familles avec un ou plusieurs enfants, selon leur situation financière et locative.",
    audience: "Familles locataires avec enfant, domiciliées légalement à Prilly.",
    conditions: [
      "Être domicilié à Prilly depuis au moins 3 ans de manière continue",
      "Occuper le logement concerné depuis au moins 1 an sans interruption",
      "Être locataire du logement concerné",
      "Ne pas déjà bénéficier d’une autre aide intégrant une contribution au logement",
    ],
    duration: "Aide accordée pour 12 mois.",
    renewal: "Renouvelable sur nouvelle demande avec révision du dossier.",
    calculation: "Le calcul tient compte du revenu net, du loyer, du nombre de pièces et du nombre d’occupants.",
    appointment: "Le dépôt de la demande se fait uniquement sur rendez-vous.",
    ctaLabel: "Demander une aide familles",
    ctaHref: "#documents",
  },
  {
    key: "individual",
    label: "Couple ou personne seule",
    intro: "L’aide individuelle au logement communale s’adresse aux personnes sans enfant qui supportent une charge locative importante malgré une autonomie financière suffisante.",
    audience: "Couples ou personnes seules sans enfant.",
    conditions: [
      "Être domicilié légalement à Prilly",
      "Résider à Prilly depuis au moins 3 ans",
      "Occuper le logement concerné depuis au moins 1 an",
      "Ne pas bénéficier déjà d’une aide comprenant une contribution au logement",
    ],
    duration: "Aide accordée pour 12 mois.",
    renewal: "Renouvelable après révision du dossier.",
    calculation: "L’analyse prend en compte la charge locative et l’équilibre global du budget du ménage.",
    appointment: "Le dépôt de la demande se fait sur rendez-vous avec le service compétent.",
    ctaLabel: "Demander une aide communale",
    ctaHref: "#documents",
  },
];

export const housingEligibilityRules: HousingEligibilityRule[] = [
  {
    title: "Être domicilié légalement à Prilly",
    description: "La demande concerne uniquement les personnes résidant légalement dans la commune.",
    tone: "red",
  },
  {
    title: "3 ans de résidence continue",
    description: "La résidence à Prilly doit être continue sur les trois dernières années.",
    tone: "coal",
  },
  {
    title: "1 an dans le logement concerné",
    description: "Le logement pour lequel l’aide est demandée doit être occupé depuis au moins 1 an.",
    tone: "coal",
  },
  {
    title: "Pas d’autre aide intégrant le logement",
    description: "Les personnes bénéficiant déjà d’un soutien incluant une participation au loyer ne sont pas éligibles.",
    tone: "yellow",
  },
];

export const housingDocumentGroups: HousingDocumentGroup[] = [
  {
    title: "Documents obligatoires",
    description: "Les pièces à préparer dans presque tous les dossiers.",
    items: [
      "Formulaire de demande complété",
      "Bail à loyer",
      "Dernière notification de hausse ou de baisse de loyer",
      "3 dernières fiches de salaire des personnes majeures vivant dans le logement",
    ],
  },
  {
    title: "Documents financiers",
    description: "Selon vos revenus et prestations en cours.",
    items: [
      "Décompte de la caisse de chômage",
      "Dernière rente AI, AVS, PC ou document assimilé",
      "Pour les indépendants: comptes pertes et profits et bilan",
      "État des comptes bancaires ou postaux si demandé dans le formulaire",
    ],
  },
  {
    title: "Documents familiaux",
    description: "Utiles pour les ménages avec séparation ou enfants en formation.",
    items: [
      "Jugement de divorce ou convention de séparation",
      "Attestation d’études ou contrat d’apprentissage pour l’enfant concerné",
    ],
  },
  {
    title: "Selon votre situation",
    description: "Le service peut demander d’autres pièces justificatives selon le dossier.",
    items: [
      "Autres justificatifs liés au ménage ou au loyer",
      "Pièces complémentaires demandées par le service lors du rendez-vous",
    ],
  },
];

export const housingSupportOrganizations: HousingSupportOrganization[] = [
  {
    title: "AVSL",
    description: "Un conseil social et juridique gratuit pour les personnes ou familles en grande fragilité socio-économique.",
    audience: "Personnes ayant besoin d’une aide de proximité et de compréhension des démarches.",
    supportType: "Conseil gratuit, possible en plusieurs langues.",
    contactMode: "Contact téléphonique le matin.",
    ctaLabel: "Voir l’accompagnement AVSL",
    ctaHref: "#contacts",
    tone: "green",
  },
  {
    title: "Rel’og",
    description: "Un accompagnement à la recherche de logement et aux démarches administratives liées au logement.",
    audience: "Personnes en difficulté avec la langue, l’écrit, l’administration ou internet.",
    supportType: "Aide au dossier, orientation, possibilité de logement de transition.",
    contactMode: "Uniquement sur rendez-vous.",
    ctaLabel: "Prendre contact avec Rel’og",
    ctaHref: "#contacts",
    tone: "coal",
  },
];

export const housingRentalSteps: HousingRentalStep[] = [
  {
    title: "S’annoncer à la commune",
    description: "Toute personne mettant à disposition un logement contre rémunération entre 1 et 89 nuits doit s’annoncer à la commune.",
    action: "Effectuez l’annonce au moins 10 jours avant la première nuitée.",
  },
  {
    title: "Remplir le formulaire",
    description: "La location ou sous-location de courte durée nécessite une annonce claire de l’activité.",
    action: "Préparez le formulaire d’annonce et les informations relatives au logement.",
  },
  {
    title: "Tenir et transmettre le registre",
    description: "Un registre des personnes hébergées doit être tenu et transmis chaque mois à la commune.",
    action: "Organisez un suivi mensuel pour rester conforme.",
  },
];

export const housingWarnings: HousingWarning[] = [
  {
    title: "Annonce obligatoire 10 jours avant",
    description: "L’annonce doit être faite avant la première nuitée. Cette obligation s’applique aux locations ou sous-locations de courte durée entre 1 et 89 nuits.",
  },
  {
    title: "Accord du propriétaire requis",
    description: "Si vous êtes locataire et que vous sous-louez, vous devez fournir une copie du bail et l’accord du propriétaire.",
  },
  {
    title: "Au-delà de 90 jours",
    description: "Si le logement est loué plus de 90 jours par année civile, une autorisation de changement d’affectation peut être nécessaire.",
  },
];

export const housingContacts: HousingContact[] = [
  {
    title: "Service AIL",
    role: "Aide individuelle au logement",
    phone: "021 622 72 30",
    email: "ail@prilly.ch",
    hours: ["Lundi à mercredi: 08:00-11:45 / 13:30-16:30", "Jeudi: sur rendez-vous", "Vendredi: 08:00-14:00"],
    appointment: "Rendez-vous nécessaire pour déposer une demande d’aide.",
  },
  {
    title: "Greffe communal",
    role: "Location, sous-location et annonces obligatoires",
    phone: "021 622 72 20",
    email: "greffe@prilly.ch",
    hours: ["Lundi à mercredi: 08:00-11:45 / 13:30-16:30", "Jeudi: 08:00-11:45 / 13:30-18:00"],
  },
  {
    title: "Exploitation et Gérance",
    role: "Immeubles locatifs communaux",
    phone: "021 622 73 15",
    email: "gerance@prilly.ch",
    hours: ["Lundi à jeudi: 08:00-11:45 / 13:30-16:30", "Vendredi: 08:00-14:00"],
  },
  {
    title: "Publiaz Immobilier SA",
    role: "Gérance des appartements liés à la Ville de Prilly",
    phone: "021 331 15 00",
    email: "location@publiaz.ch",
    hours: ["Du lundi au vendredi: selon horaires de la gérance"],
  },
];
