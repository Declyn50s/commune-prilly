import type {
  CMSItem,
  HelpfulLink,
  SeniorCommitment,
  SeniorContact,
  SeniorQuickaccèss,
  SeniorSupport,
} from "@/features/seniors/types";

const root = "/vivre/seniors";

export const seniorQuickaccèss: SeniorQuickaccèss[] = [
  {
    title: "Trouver une aide ou un accompagnement",
    description: "Identifier rapidement un soutien social, administratif ou de maintien à domicile.",
    href: `${root}/pro-senectute`,
    tone: "green",
  },
  {
    title: "Contacter le bon CMS",
    description: "Savoir quel centre médico-social correspond à votre lieu d’habitation.",
    href: `${root}/centre-medico-social`,
    tone: "red",
  },
  {
    title: "Je suis proche aidant",
    description: "Découvrir les ressources gratuites, l’écoute et les conseils disponibles.",
    href: `${root}/proches-aidants`,
    tone: "yellow",
  },
  {
    title: "Découvrir les activités et associations",
    description: "Repérer les lieux et initiatives qui favorisent le lien social.",
    href: `${root}/quartiers-solidaires`,
    tone: "coal",
  },
  {
    title: "Trouver un service solidaire",
    description: "Accéder à des solutions d’entraide et à des services du quotidien.",
    href: `${root}/services-solidarite`,
    tone: "green",
  },
  {
    title: "Voir les contacts utiles",
    description: "AVASAD, Pro Senectute, CMS, ARASPE et autres accès directs.",
    href: "#contacts",
    tone: "red",
  },
];

export const seniorCommitments: SeniorCommitment[] = [
  {
    title: "Veiller au bien-être",
    description: "La Ville porte une attention particulière aux aîné·e·s et à leur qualité de vie au quotidien.",
    tone: "red",
  },
  {
    title: "Soutenir l’intégration et le lien social",
    description: "Les activités, les associations et les lieux de proximité sont soutenus pour éviter l’isolement.",
    tone: "green",
  },
  {
    title: "Accompagner les initiatives locales",
    description: "La commune valorise les projets et partenaires qui renforcent une ville plus solidaire et plus humaine.",
    tone: "yellow",
  },
];

export const seniorSupports: SeniorSupport[] = [
  {
    title: "Pro Senectute Vaud",
    description: "Un appui concret pour les questions sociales, administratives et le maintien à domicile.",
    audience: "Personnes âgées, proches et habitant·e·s qui cherchent un accompagnement fiable.",
    highlights: [
      "Conseil social et accompagnement administratif",
      "Soutien au maintien à domicile",
      "Activités et liens utiles pour les seniors",
    ],
    href: `${root}/pro-senectute`,
    tone: "green",
  },
  {
    title: "Partenariat Ville de Prilly",
    description: "Depuis février 2024, un partenariat dynamise les activités des 60+ avec l’Association de quartier de Prilly-Nord jusqu’à fin 2025.",
    audience: "Habitant·e·s de 60 ans et plus qui souhaitent participer à des activités de proximité.",
    highlights: [
      "Animations locales",
      "Lien avec le quartier de Prilly-Nord",
      "Vie sociale et convivialité",
    ],
    href: `${root}/quartiers-solidaires`,
    tone: "yellow",
  },
];

export const cmsData: CMSItem[] = [
  {
    title: "CMS Prilly-Nord",
    description: "Pour les personnes domiciliées dans la partie nord de la commune.",
    area: "Secteurs nord selon la répartition AVASAD.",
    ctaLabel: "Voir la liste des rues",
    href: "https://www.avasad.ch",
  },
  {
    title: "CMS Prilly-Sud",
    description: "Pour les habitant·e·s relevant du secteur sud de Prilly.",
    area: "Secteurs sud selon la répartition AVASAD.",
    ctaLabel: "Voir la liste des rues",
    href: "https://www.avasad.ch",
  },
  {
    title: "Rues à cheval sur Prilly et Lausanne",
    description: "Certaines rues nécessitent une vérification selon l’adresse exacte.",
    area: "Cas mixtes entre Prilly et Lausanne.",
    ctaLabel: "Vérifier mon CMS",
    href: "https://www.avasad.ch",
  },
];

export const seniorContacts: SeniorContact[] = [
  {
    title: "AVASAD",
    role: "Soins et aide à domicile",
    phone: "0848 822 822",
    note: "Point d’entrée utile pour les CMS, les proches aidants et les soins à domicile.",
  },
  {
    title: "Pro Senectute Vaud",
    role: "Conseil social et activités",
    phone: "021 646 17 21",
    email: "info@vd.prosenectute.ch",
  },
  {
    title: "ARASPE",
    role: "Réseau social régional",
    phone: "021 622 74 00",
    note: "Renseignements utiles selon les situations sociales et familiales.",
  },
];

export const usefulSeniorLinks: HelpfulLink[] = [
  {
    title: "AVASAD",
    description: "Accéder aux CMS, à l’aide et aux soins à domicile.",
    href: "https://www.avasad.ch",
  },
  {
    title: "Pro Senectute Vaud",
    description: "Découvrir l’accompagnement social et les activités pour seniors.",
    href: "https://www.prosenectute.ch",
  },
  {
    title: "ARASPE",
    description: "Identifier d’autres relais sociaux utiles selon votre situation.",
    href: "https://www.araspe.ch",
  },
];
