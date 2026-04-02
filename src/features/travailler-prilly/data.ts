import { Building2, CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";

export const employerHero = {
  title: "Travailler  à la Ville de Prilly",
  description:
    "Rejoindre la Ville de Prilly, c'est contribuer directement  à la qualite de vie locale au sein d'une administration a taille humaine, utile et engagee.",
  ctas: [
    { label: "Voir les offres d'emploi", href: "/ville/offres-emploi" },
    { label: "Contacter le recrutement", href: "mailto:emploi@prilly.ch" },
  ],
  highlight:
    "Une page pensee comme une vraie experience marque employeur: missions utiles, valeurs concrètes, formations, apprentissages et opportunites actuelles.",
};

export const employerStats = [
  { label: "Collaboratrices et collaborateurs", value: "243", note: "Au 1er mai 2025" },
  { label: "Equivalent plein temps", value: "199.23 EPT", note: "Effectif global" },
  { label: "Services communaux", value: "11", note: "Des metiers et equipes varies" },
  { label: "Places d'apprentissage", value: "Environ 15", note: "Dans 6 metiers differents" },
];

export const employerMission = [
  "Accompagner, soutenir et encadrer le personnel durant tout son parcours professionnel au sein de l'administration.",
  "Collaborer avec l'ensemble des services communaux pour apporter conseil et appui dans les relations humaines et professionnelles.",
  "Faire vivre un service public de qualite a travers des equipes proches du terrain et utiles  à la population.",
];

export const employerValues = [
  {
    title: "Transparence",
    description: "Le recrutement privilegie une procedure de selection lisible et transparente.",
    icon: CheckCircle2,
  },
  {
    title: "Equite",
    description: "Toutes les candidatures sont traitées avec un souci d'equite et de coherence institutionnelle.",
    icon: CheckCircle2,
  },
  {
    title: "Service public de qualite",
    description: "Les competences techniques et relationnelles sont developpees pour repondre aux exigences d'un service public exigeant et humain.",
    icon: Building2,
  },
  {
    title: "Accompagnement",
    description: "Les equipes, les apprenties et apprentis et les cadres sont soutenus tout au long de leur parcours.",
    icon: Users,
  },
  {
    title: "Developpement des competences",
    description: "La formation continue, l'evolution professionnelle et la mobilite interne sont encouragees.",
    icon: Sparkles,
  },
  {
    title: "Management responsable",
    description: "Les cadres sont formes et sensibilises à une gestion d'equipe harmonisée et respectueuse.",
    icon: Users,
  },
];

export const recruitmentSection = {
  title: "Recrutement",
  intro:
    "Les engagements sont effectues vià une procedure de selection privilegient la transparence et le traitement equitable des candidatures, dans le respect des valeurs de l'administration communale.",
  points: [
    "Des offres presentées de facon lisible, avec les informations cles avant meme d'ouvrir le PDF complet.",
    "Une adresse de recrutement dediee pour centraliser les candidatures.",
    "Des metiers varies: technique, administration, projets, exploitation, culture ou integration.",
  ],
};

export const apprenticeshipSection = {
  title: "Apprentissage",
  intro:
    "La Ville de Prilly s'engage en faveur de la formation des jeunes et propose une quinzaine de places d'apprentissage dans six metiers differents.",
  trades: [
    "Agent·e d'exploitation",
    "Agent·e en information documentaire",
    "Assistant·e socio-educatif·ve",
    "Employe·e de commerce",
    "Horticulteur·trice, option paysagisme",
    "Informaticien·ne",
  ],
  note:
    "Les formatrices et formateurs pratiques s'investissent aux cotes des apprenties et apprentis pour transmettre des competences techniques et professionnelles solides jusqu'au CFC.",
};

export const developmentSection = {
  title: "Developpement / formation",
  points: [
    "La Municipalite soutient la formation continue afin de renforcer savoir-faire et savoir-etre.",
    "La mobilite interne est encouragée lorsque les besoins des services et les competences des personnes se rejoignent.",
    "La Ville soutient aussi les parcours de certification via VAE ou formations qualifiees en cours d'emploi.",
  ],
};

export const workConditions = [
  "Une administration a taille humaine, proche du terrain et des habitants.",
  "Des evaluations annuelles pour ajuster les missions, faire evoluer les pratiques et soutenir l'adequation entre besoins du service et aspirations.",
  "Une attention concrete  à la sante et  à la securite au travail, avec un charge specialise.",
  "Une approche transversale qui aide a harmoniser les pratiques RH dans l'ensemble des services.",
];

export const collaboratorCommitments = [
  {
    title: "Collaboratrices et collaborateurs",
    description: "Developper un service public de qualite, faire vivre les valeurs de l'administration et contribuer à une relation de confiance avec la population.",
    icon: Users,
  },
  {
    title: "Cadres",
    description: "Encadrer avec clarte, mettre a jour les responsabilites, accompagner les equipes et porter une gestion harmonisée du personnel.",
    icon: ShieldCheck,
  },
  {
    title: "Apprenties, apprentis et nouvelles recrues",
    description: "Etre formes, accompagnes et integres dans un environnement qui transmet autant des competences que des repères professionnels.",
    icon: Sparkles,
  },
];

export const employerContact = {
  title: "Service des Ressources humaines",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "rh@prilly.ch",
  recruitmentEmail: "emploi@prilly.ch",
  phone: "+41 21 622 75 31",
  generalPhone: "+41 21 622 72 11",
  charterHref: "/docs/ressources-humaines/2022_03_Charte_valeurs_A4_2.pdf",
};
