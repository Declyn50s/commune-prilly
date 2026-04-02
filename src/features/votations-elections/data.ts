import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

export type VoteMethod = {
  title: string;
  description: string;
  deadline: string;
  detail: string;
  icon: LucideIcon;
};

export type ElectionType = {
  title: string;
  description: string;
  system: string;
  seats: string;
  date: string;
  note: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  status: "passe" | "a-venir";
};

export type CandidateList = {
  name: string;
  candidates: string[];
};

export type ResultSummary = {
  title: string;
  stats: Array<{ label: string; value: string }>;
  details?: Array<{ label: string; value: string; note?: string }>;
};

export type OfficialDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
  category: string;
};

export type HelpfulLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export const votingPageMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Ville", href: "/ville" },
    { label: "Votations et elections" },
  ],
  hero: {
    eyebrow: "Information civique locale",
    title: "Votations et elections",
    description:
      "Toutes les informations utiles pour voter correctement, suivre les prochains scrutins et consulter les résultats officiels à Prilly.",
    intro:
      "La page est pensee comme un centre d'information civique local: claire, rassurante et pratique pour comprendre les délais, les modes de remise, les scrutins communaux et les documents officiels.",
  },
  anchors: [
    { label: "Comment voter", href: "#comment-voter" },
    { label: "Voir les résultats", href: "#résultats" },
  ],
};

export const voteMethods: VoteMethod[] = [
  {
    title: "Par poste",
    description: "Envoyer l'enveloppe de transmission en courrier A suffisamment tot pour qu'elle arrive avant le scrutin.",
    deadline: "Au plus tard le vendredi avant les votations",
    detail: "Le courrier A est recommande pour garantir la remise dans les délais.",
    icon: Mail,
  },
  {
    title: "Depot a l'administration",
    description: "Deposer directement l'enveloppe dans les boites aux lettres de l'administration communale.",
    deadline: "Jusqu'a 11h00 le dimanche du scrutin",
    detail: "Administration communale, Route de Cossonay 40.",
    icon: Building2,
  },
  {
    title: "Au bureau de vote",
    description: "Remettre son vote en personne au local de vote le jour du scrutin.",
    deadline: "Dimanche de 10h00 a 11h00",
    detail: "Temple et centre paroissial de Saint-Etienne, chemin du Vieux-College.",
    icon: MapPin,
  },
];

export const votingSteps = [
  "Recevoir le materiel de vote a domicile.",
  "Remplir les bulletins selon le scrutin concerne.",
  "Glisser les bulletins dans l'enveloppe jaune.",
  "Completer et signer la carte de vote.",
  "Inserer le tout dans l'enveloppe de transmission.",
  "Remettre le vote par poste, a l'administration ou au bureau de vote.",
];

export const videoHelp = {
  title: "Comment voter",
  description:
    "La video explicative et le lien officiel de la Confederation aident a verifier chaque geste, du remplissage des bulletins  à la fermeture correcte des enveloppes.",
  videoSrc: "/videos/votations-elections/comment-voter-2026.mp4",
  fallbackHref: "https://www.ch.ch/fr/votations-et-elections/votations/comment-voter",
};

export const electionTypes: ElectionType[] = [
  {
    title: "Conseil communal",
    description: "Organe legislatif de la commune.",
    system: "Systeme proportionnel",
    seats: "75 membres",
    date: "8 mars 2026",
    note: "Les résultats peuvent être consultes dans la section Résultats.",
  },
  {
    title: "Municipalite",
    description: "Organe executif de la commune.",
    system: "Systeme majoritaire a deux tours",
    seats: "5 membres",
    date: "1er tour le 8 mars 2026, 2e tour le 29 mars 2026",
    note: "Une section dediee presente les listes et candidat·e·s du 2e tour.",
  },
  {
    title: "Syndicature",
    description: "Election de la ou du syndic.",
    system: "Systeme majoritaire a deux tours, avec possibilite d'election tacite",
    seats: "1 syndic",
    date: "1er tour le 26 avril 2026, 2e tour le 17 mai 2026",
    note: "Les tours suivants dependent des depots de candidatures et du résultat des tours precedents.",
  },
];

export const electionCalendar2026: TimelineItem[] = [
  {
    date: "5 au 12 janvier 2026 a 12h",
    title: "Depot des candidatures",
    description: "Depot des listes et dossiers pour le Conseil communal et le 1er tour de la Municipalite.",
    status: "passe",
  },
  {
    date: "8 mars 2026",
    title: "Conseil communal + 1er tour Municipalite",
    description: "Scrutin communal principal avec election du legislatif et premier tour de l'executif.",
    status: "passe",
  },
  {
    date: "29 mars 2026",
    title: "2e tour Municipalite",
    description: "Deuxieme tour pour la Municipalite, en meme temps que le 2e tour de l'election complementaire au Conseil d'Etat vaudois.",
    status: "a-venir",
  },
  {
    date: "26 avril 2026",
    title: "1er tour Syndicature",
    description: "Premier tour de l'election  à la syndicature, sauf election tacite.",
    status: "a-venir",
  },
  {
    date: "17 mai 2026",
    title: "2e tour Syndicature",
    description: "Second tour de la syndicature si aucun résultat n'est acquis au premier tour.",
    status: "a-venir",
  },
];

export const municipalRound2Lists: CandidateList[] = [
  {
    name: "Entente Prilly",
    candidates: ["Claramunt Lumia", "Capuano Tony", "Sartorelli Luigi", "Deillon Fabien", "Barbey Aurelie"],
  },
  {
    name: "Parti socialiste, independants de gauche et parti ouvrier populaire",
    candidates: ["Zodogome Vincent", "Zwahlen Ariane"],
  },
  {
    name: "Les Vert·e·s de Prilly",
    candidates: ["Mattia Maurizio", "Joly Rebecca", "Viredaz Antoine"],
  },
];

export const resultSections: ResultSummary[] = [
  {
    title: "Conseil communal 2026",
    stats: [
      { label: "Electeur·rice·s inscrit·e·s", value: "8'531" },
      { label: "Bulletins rentres", value: "2'657" },
      { label: "Bulletins blancs", value: "20" },
      { label: "Bulletins nuls", value: "122" },
      { label: "Bulletins valables", value: "2'515" },
      { label: "Participation", value: "31,15 %" },
    ],
  },
  {
    title: "Municipalite 2026 - 1er tour",
    stats: [
      { label: "Electeur·rice·s inscrit·e·s", value: "8'531" },
      { label: "Bulletins rentres", value: "3'119" },
      { label: "Bulletins blancs", value: "87" },
      { label: "Bulletins nuls", value: "12" },
      { label: "Bulletins valables", value: "3'107" },
      { label: "Majorite absolue", value: "1'554" },
      { label: "Suffrages exprimes", value: "12'188" },
      { label: "Participation", value: "36,56 %" },
    ],
    details: [
      { label: "Luigi Sartorelli", value: "1'398 voix", note: "45.00 %" },
      { label: "Lumia Claramunt", value: "1'199 voix", note: "38.59 %" },
      { label: "Ariane Zwahlen", value: "1'168 voix", note: "37.59 %" },
      { label: "Rebecca Joly", value: "1'121 voix", note: "36.08 %" },
      { label: "Maurizio Mattia", value: "1'118 voix", note: "35.98 %" },
      { label: "Tony Capuano", value: "1'088 voix", note: "35.02 %" },
      { label: "Fabien Deillon", value: "1'051 voix", note: "33.83 %" },
      { label: "Antoine Viredaz", value: "1'040 voix", note: "33.47 %" },
      { label: "Vincent Zodogome", value: "1'039 voix", note: "33.44 %" },
      { label: "Aurelie Barbey", value: "1'029 voix", note: "33.12 %" },
      { label: "Sylvie Krattinger", value: "764 voix", note: "24.59 %" },
    ],
  },
  {
    title: "Votations fédérales du 8 mars 2026",
    stats: [{ label: "Participation à Prilly", value: "52,31 %" }],
    details: [
      { label: "Initiative argent liquide", value: "Refusee" },
      { label: "Contre-projet argent liquide", value: "Accepte" },
      { label: "Question subsidiaire", value: "Preference au contre-projet" },
      { label: "Initiative SSR", value: "Refusee a 68,66 %" },
      { label: "Initiative pour un fonds climat", value: "Refusee a 54,36 %" },
      { label: "Imposition individuelle", value: "Acceptée a 72,34 %" },
    ],
  },
  {
    title: "Election complementaire au Conseil d'Etat vaudois",
    stats: [{ label: "Participation à Prilly", value: "44,85 %" }],
    details: [
      { label: "Roger Nordmann", value: "1'325 voix" },
      { label: "Jean-Francois Thuillard", value: "990 voix" },
      { label: "Agathe Rabaud-Sidorenko", value: "284 voix" },
    ],
  },
];

export const upcomingScrutins: TimelineItem[] = [
  {
    date: "29 mars 2026",
    title: "Municipalite 2e tour + Conseil d'Etat vaudois 2e tour",
    description: "Jour de scrutin combine pour la commune et le canton.",
    status: "a-venir",
  },
  {
    date: "26 avril 2026",
    title: "Election  à la syndicature - 1er tour",
    description: "Premier tour pour designer la ou le syndic.",
    status: "a-venir",
  },
  {
    date: "17 mai 2026",
    title: "Election  à la syndicature - 2e tour",
    description: "Deuxieme tour si necessaire.",
    status: "a-venir",
  },
];

export const officialVotingDocuments: OfficialDocument[] = [
  {
    title: "Proces-verbal communal - Municipalite 8 mars 2026",
    description: "Document officiel confirmant les chiffres du 1er tour, la participation et les suffrages detailles des candidat·e·s.",
    href: "/docs/votations-elections/Proces-verbal_communal_Municipalite_08.03.2026.pdf",
    label: "Ouvrir le proces-verbal",
    category: "Proces-verbal",
  },
  {
    title: "Proces-verbal communal - Votations fédérales 8 mars 2026",
    description: "Document officiel des votations fédérales à Prilly avec participation et statut de chaque objet.",
    href: "/docs/votations-elections/Proces-verbal_communal_votations_federales_08.03.2026.pdf",
    label: "Ouvrir le proces-verbal",
    category: "Proces-verbal",
  },
  {
    title: "Proces-verbal communal - Election Conseil d'Etat 8 mars 2026",
    description: "Document officiel de l'election complementaire au Conseil d'Etat vaudois à Prilly.",
    href: "/docs/votations-elections/Proces-verbal_communal_Election_Conseil_d_Etat_08.03.2026.pdf",
    label: "Ouvrir le proces-verbal",
    category: "Proces-verbal",
  },
  {
    title: "Publication des listes - 2e tour Municipalite",
    description: "Document officiel des listes deposees pour le 2e tour municipal du 29 mars 2026.",
    href: "/docs/votations-elections/Liste_2eme_tour_MUN_Publication_PP_et_site.pdf",
    label: "Voir la publication",
    category: "Publication",
  },
];

export const helpfulVotingLinks: HelpfulLink[] = [
  {
    title: "Canton de Vaud - prochains scrutins",
    description: "Calendrier cantonal et informations officielles sur les votations et elections vaudoises.",
    href: "https://www.vd.ch/etat-droit-finances/votations-elections/prochaines-votations-et-elections",
    label: "Ouvrir le Canton",
  },
  {
    title: "Confederation - votations et elections",
    description: "Informations nationales sur les scrutins, objets federaux et fonctionnement du vote en Suisse.",
    href: "https://www.ch.ch/fr/votations-et-elections/",
    label: "Ouvrir la Confederation",
  },
  {
    title: "Pour-ma-commune.ch",
    description: "Comprendre les institutions communales et la participation democratique locale.",
    href: "https://www.pour-ma-commune.ch",
    label: "Voir le site",
  },
  {
    title: "Confederation - comment voter",
    description: "Mode d'emploi officiel pour verifier la bonne procedure avant de glisser son vote.",
    href: "https://www.ch.ch/fr/votations-et-elections/votations/comment-voter",
    label: "Voir comment voter",
  },
];

export const votingContact = {
  title: "Conseil communal",
  addressLines: ["Route de Cossonay 42", "1008 Prilly"],
  email: "conseil@prilly.ch",
  phone: "+41 21 622 72 11",
};

export const votingInfoCards = [
  {
    title: "Voter correctement",
    description: "Materiel, enveloppes, carte de vote et gestes utiles sont expliques sans jargon.",
    icon: CheckCircle2,
  },
  {
    title: "Ne pas rater le délai",
    description: "Les horaires de remise sont mis en avant tres tot dans la page.",
    icon: Clock3,
  },
  {
    title: "Verifier les résultats officiels",
    description: "Les chiffres recents sont presents dans des blocs lisibles, avec accès direct aux proces-verbaux.",
    icon: FileCheck2,
  },
  {
    title: "Comprendre les scrutins",
    description: "Conseil communal, Municipalite et syndicature sont distingues clairement.",
    icon: Users,
  },
];

export const contactIcons = { MapPin, Phone, Mail, BadgeInfo, FileText, ShieldCheck, CalendarDays };
