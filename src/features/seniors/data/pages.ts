import type {
  CMSItem,
  HelpfulLink,
  NeighborhoodInitiative,
  SeniorContact,
  SeniorSupport,
  SolidarityService,
} from "@/features/seniors/types";

export const caregiverSupportData: SeniorSupport = {
  title: "Soutien aux proches aidants",
  description: "Les CMS proposent un accompagnement individuel, des moments d’échange, des conseils et une orientation adaptée.",
  audience: "Toutes les personnes proches aidantes du canton peuvent bénéficier de cette prestation.",
  highlights: [
    "Accompagnement individuel et gratuit",
    "Carte d’urgence et conseils pratiques",
    "Moments d’échange et orientation",
  ],
  href: "/vivre/seniors/proches-aidants",
  tone: "red",
};

export const proSenectuteData: SeniorSupport = {
  title: "Pro Senectute Vaud",
  description: "Un partenaire de référence pour l’action sociale régionale, le conseil social et l’accompagnement administratif.",
  audience: "Seniors, proches et personnes qui cherchent un appui pour le quotidien et l’autonomie.",
  highlights: [
    "Conseil social",
    "Accompagnement administratif",
    "Maintien à domicile",
    "Activités pour seniors",
  ],
  href: "/vivre/seniors/pro-senectute",
  tone: "green",
};

export const quartiersSolidairesData: NeighborhoodInitiative[] = [
  {
    title: "Association de quartier de Prilly-Nord",
    description: "Une dynamique locale qui soutient les activités de proximité et les rencontres entre habitant·e·s.",
    activities: ["Temps conviviaux", "Initiatives locales", "Rencontres 60+"],
    href: "/vivre/seniors/quartiers-solidaires",
  },
  {
    title: "Espace Rencontre",
    description: "Un lieu pour partager des activités, créer du lien et rompre l’isolement.",
    activities: ["Ateliers", "Repas", "Moments d’échange"],
    href: "/vivre/seniors/quartiers-solidaires",
  },
  {
    title: "Au Cœur du Sud",
    description: "Une initiative de quartier qui favorise la convivialité et les projets intergénérationnels.",
    activities: ["Pétanque", "Repas", "Vie communautaire"],
    href: "/vivre/seniors/quartiers-solidaires",
  },
];

export const solidarityServicesData: SolidarityService[] = [
  {
    title: "Hotline Centrale des solidarités",
    description: "Une ligne utile pour être orienté·e rapidement vers la bonne aide de proximité.",
    help: ["Orientation selon les besoins", "Relais locaux", "Soutien du quotidien"],
    contact: "Hotline solidarité",
  },
  {
    title: "Coup d’Pouce",
    description: "Un dispositif d’entraide qui facilite certaines démarches ou besoins pratiques.",
    help: ["Aide ponctuelle", "Appui de proximité", "Lien avec d’autres services"],
    contact: "Service local d’entraide",
  },
  {
    title: "Entraide intergénérationnelle",
    description: "Des jeunes et bénévoles peuvent apporter une aide concrète pour des besoins simples.",
    help: ["Courses", "Petits coups de main", "Lien entre générations"],
    contact: "Réseau de quartier",
  },
];

export const cmsPageItems: CMSItem[] = [
  ...[
    {
      title: "CMS Prilly-Nord",
      description: "Le bon point de contact pour l’aide et les soins à domicile selon votre adresse au nord de la commune.",
      area: "Adresses du secteur nord.",
      ctaLabel: "Accéder à la liste des rues",
      href: "https://www.avasad.ch",
    },
    {
      title: "CMS Prilly-Sud",
      description: "Le CMS compétent pour les habitations relevant du secteur sud.",
      area: "Adresses du secteur sud.",
      ctaLabel: "Accéder à la liste des rues",
      href: "https://www.avasad.ch",
    },
    {
      title: "Prilly / Lausanne",
      description: "Pour certaines rues mixtes, il faut vérifier la répartition exacte avant de contacter le CMS.",
      area: "Rues à cheval sur les deux communes.",
      ctaLabel: "Vérifier mon secteur",
      href: "https://www.avasad.ch",
    },
  ],
];

export const seniorUsefulPageLinks: HelpfulLink[] = [
  {
    title: "AVASAD",
    description: "Le portail pour les soins à domicile, les CMS et les proches aidants.",
    href: "https://www.avasad.ch",
  },
  {
    title: "Liste des rues CMS",
    description: "Vérifier la structure compétente selon l’adresse exacte.",
    href: "https://www.avasad.ch",
  },
  {
    title: "Pro Senectute Vaud",
    description: "Informations, activités et accompagnement social.",
    href: "https://www.prosenectute.ch",
  },
];

export const seniorsPageContacts: SeniorContact[] = [
  {
    title: "CMS / AVASAD",
    role: "Soins à domicile et proches aidants",
    phone: "0848 822 822",
    note: "Prestations et orientation selon le lieu d’habitation.",
  },
  {
    title: "Pro Senectute Vaud",
    role: "Conseil social",
    phone: "021 646 17 21",
    email: "info@vd.prosenectute.ch",
  },
];
