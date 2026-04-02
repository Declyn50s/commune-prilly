import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  FileCheck2,
  ShieldCheck,
  Users,
} from "lucide-react";

export type CouncilSummaryItem = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type CouncilDocument = {
  title: string;
  href: string;
  kind: string;
  description?: string;
};

export type CouncilMeeting = {
  dateLabel: string;
  isoDate: string;
  status: "a-venir" | "recente";
  location: string;
  summary: string;
  highlight: string;
  documents: CouncilDocument[];
  actions: Array<{ label: string; href: string }>;
};

export type HelpfulInfoItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type BureauGroup = {
  role: string;
  description: string;
  members?: string[];
  note?: string;
  href: string;
};

export type PartyItem = {
  name: string;
  label: string;
  href: string;
  contactRole: string;
  contactName: string;
  email?: string;
};

export type CommissionCategory = {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
};

export type ArchiveCategory = {
  title: string;
  description: string;
  href: string;
  years: Array<{ label: string; href: string }>;
};

export type CouncilContact = {
  title: string;
  addressLines: string[];
  email: string;
  phone: string;
  secondaryPhone?: string;
  fax?: string;
};

const officialBase = "https://www.prilly.ch";
const councilBase = `${officialBase}/prilly-officiel/conseil`;

export const councilPageMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Ville", href: "/ville" },
    { label: "Conseil communal" },
  ],
  hero: {
    eyebrow: "Vie democratique locale",
    title: "Conseil communal",
    description:
      "Le legislatif de la Ville de Prilly, presente comme un espace public clair pour comprendre les décisions, suivre les séances et retrouver les documents utiles.",
    intro:
      "Elu par la population, le Conseil communal debat, amende et vote les objets qui structurent la vie locale: budget, comptes, reglements, investissements, motions, petitions et interpellations.",
  },
  anchors: [
    { label: "Voir les prochaines séances", href: "#séances" },
    { label: "Consulter les archives", href: "#archives" },
    { label: "Bureau", href: "#bureau" },
    { label: "Video", href: "#video" },
  ],
  sourceLinks: {
    composition: `${officialBase}/conseil/composition-du-conseil`,
    parties: `${officialBase}/conseil/composition-du-conseil/liste-des-partis-politiques-representes-au-conseil-communal`,
    meetings: `${councilBase}/séances-du-conseil`,
    bureau: `${councilBase}/bureau`,
    regulation: `${councilBase}/reglement-du-conseil`,
    video: `${councilBase}/en-video`,
  },
};

export const councilSummary: CouncilSummaryItem[] = [
  {
    title: "75 membres",
    value: "75",
    description: "Le Conseil communal reunit 75 conseilleres et conseillers elus pour représenter la population prillerane.",
    icon: Users,
  },
  {
    title: "Election tous les 5 ans",
    value: "5 ans",
    description: "Le renouvellement se fait au scrutin proportionnel, ce qui garantit la representation des listes en présence.",
    icon: CheckCircle2,
  },
  {
    title: "séances publiques",
    value: "Ouvertes au public",
    description: "Les séances se tiennent en principe publiquement  à la Salle du Conseil communal, dans le batiment historique de Castelmont.",
    icon: Building2,
  },
  {
    title: "En principe 8 séances par an",
    value: "8 séances",
    description: "Un rythme régulier permet de suivre l'actualite politique, les preavis municipaux et les décisions importantes.",
    icon: CalendarDays,
  },
];

export const councilMeetings: CouncilMeeting[] = [
  {
    dateLabel: "30 mars 2026",
    isoDate: "2026-03-30",
    status: "a-venir",
    location: "Salle du Conseil communal, Castelmont",
    summary:
      "Séance publique centrée sur trois preavis d'etude et d'infrastructure, avec communications municipales et nouvelle liste des commissions.",
    highlight: "Galicien, cautionnement CADOUEST et espace public du Pre-Bournoud.",
    documents: [
      { title: "Ordre du jour", href: `${councilBase}/séances-liste/séance-du-30-mars-2026`, kind: "Ordre du jour" },
      { title: "Communications municipales n°01-2026", href: `${councilBase}/séances-liste/séance-du-30-mars-2026`, kind: "Communication" },
      {
        title: "Preavis 05-2026",
        href: `${councilBase}/séances-liste/séance-du-30-mars-2026`,
        kind: "Preavis",
        description: "Raccordement du ruisseau du Galicien et du bassin versant de Floreal  à la galerie de Broye.",
      },
      {
        title: "Preavis 06-2026",
        href: `${councilBase}/séances-liste/séance-du-30-mars-2026`,
        kind: "Preavis",
        description: "Augmentation du cautionnement solidaire accorde a CADOUEST S.A.",
      },
      {
        title: "Preavis 07-2026",
        href: `${councilBase}/séances-liste/séance-du-30-mars-2026`,
        kind: "Preavis",
        description: "Credit d'etudes pour l'amenagement de l'espace public du Pre-Bournoud.",
      },
      { title: "Liste des commissions", href: `${councilBase}/séances-liste/séance-du-30-mars-2026`, kind: "Commission" },
    ],
    actions: [
      { label: "Voir la séance", href: `${councilBase}/séances-liste/séance-du-30-mars-2026` },
      { label: "Voir toutes les séances", href: `${councilBase}/séances-du-conseil` },
    ],
  },
  {
    dateLabel: "2 mars 2026",
    isoDate: "2026-03-02",
    status: "recente",
    location: "Salle du Conseil communal, Castelmont",
    summary:
      "Séance recente avec quatre preavis, quatre rapports de commission, annexes techniques, reponses a interpellations et proces-verbal décisionnel.",
    highlight: "Route du Chasseur, accueil de l'enfance, garderie de Chantegrive et statuts AGEV.",
    documents: [
      { title: "Ordre du jour", href: `${councilBase}/séances-liste/séance-du-2-mars-2026`, kind: "Ordre du jour" },
      {
        title: "Preavis 01-2026 + rapport",
        href: `${councilBase}/séances-liste/séance-du-2-mars-2026`,
        kind: "Preavis",
        description: "Credit d'etude pour la requalification de la Route du Chasseur.",
      },
      {
        title: "Preavis 02-2026 + rapport",
        href: `${councilBase}/séances-liste/séance-du-2-mars-2026`,
        kind: "Preavis",
        description: "Sortie du reseau AJENOL et creation du propre reseau d'accueil de la Ville.",
      },
      {
        title: "Preavis 03-2026 + annexe + rapport",
        href: `${councilBase}/séances-liste/séance-du-2-mars-2026`,
        kind: "Preavis",
        description: "Garderie de 44 places a Chantegrive avec plans annexes.",
      },
      {
        title: "Preavis 04-2026 + annexe + rapport",
        href: `${councilBase}/séances-liste/séance-du-2-mars-2026`,
        kind: "Preavis",
        description: "Creation de l'AGEV et approbation des statuts.",
      },
      { title: "Reponses INT 21-2025 a 23-2025", href: `${councilBase}/séances-liste/séance-du-2-mars-2026`, kind: "Interpellations" },
      { title: "Nouvelles interpellations", href: `${councilBase}/séances-liste/séance-du-2-mars-2026`, kind: "Interpellations" },
      { title: "Liste des commissions", href: `${councilBase}/séances-liste/séance-du-2-mars-2026`, kind: "Commission" },
      { title: "Proces-verbal décisionnel", href: `${councilBase}/séances-liste/séance-du-2-mars-2026`, kind: "Proces-verbal" },
    ],
    actions: [
      { label: "Voir les documents", href: `${councilBase}/séances-liste/séance-du-2-mars-2026` },
      { label: "Voir les archives des séances", href: `${councilBase}/séances-du-conseil` },
    ],
  },
];

export const councilHelpfulInfo: HelpfulInfoItem[] = [
  {
    title: "Le role du Conseil",
    description:
      "Le Conseil communal delibere et decide sur les preavis municipaux, le budget, les comptes, les reglements et les investissements qui engagent la commune.",
    icon: ShieldCheck,
  },
  {
    title: "Des séances publiques",
    description:
      "Les séances sont publiques et organisées a Castelmont. Elles peuvent aussi être suivies a distance grace  à la diffusion audiovisuelle lorsqu'aucune décision contraire n'est prise.",
    icon: Building2,
  },
  {
    title: "Le travail en commissions",
    description:
      "Avant d'arriver en séance, les objets sont etudies par des commissions permanentes, intercommunales ou ad hoc qui examinent les dossiers et remettent un rapport.",
    icon: Users,
  },
  {
    title: "Preavis et rapports",
    description:
      "Les preavis expliquent les propositions de la Municipalite. Les rapports de commission apportent un regard politique et technique avant la décision du Conseil.",
    icon: FileText,
  },
  {
    title: "Interpellations, motions et petitions",
    description:
      "Le Conseil traite aussi les demandes et interventions des elu·e·s: motions, postulats, interpellations, petitions et autres objets lies  à la vie democratique locale.",
    icon: BadgeInfo,
  },
];

export const councilBureau: BureauGroup[] = [
  {
    role: "Presidence",
    description: "Conduit les séances, assure la police des debats et represente le Conseil communal.",
    note: "La composition nominative 2025-2026 est publiée dans la liste officielle du Bureau du Conseil.",
    href: `${councilBase}/bureau`,
  },
  {
    role: "1er vice-président et 2e vice-président",
    description: "Appuient la presidence et assurent la continuite de la conduite des séances.",
    note: "Consulter la liste officielle 2025-2026 pour le detail des personnes elues.",
    href: `${councilBase}/bureau`,
  },
  {
    role: "Scrutateurs et scrutateurs suppleants",
    description: "Supervisent les votes, le contrôle des présences et le bon deroulement formel des deliberations.",
    note: "Presentes dans la liste officielle du Bureau du Conseil.",
    href: `${councilBase}/bureau`,
  },
  {
    role: "Secretariat",
    description: "Prepare les séances, suit les objets traites et garantit la continuite administrative du Conseil.",
    note: "Le secretariat et le secretariat suppleant figurent dans la composition officielle 2025-2026.",
    href: `${councilBase}/bureau`,
  },
  {
    role: "Huissiers",
    description: "Assurent l'accueil, la logistique des séances et l'organisation pratique dans la salle du Conseil.",
    note: "Huissier et huissier suppleant sont precises dans le document officiel du Bureau.",
    href: `${councilBase}/bureau`,
  },
];

export const councilParties: PartyItem[] = [
  { name: "Le Centre", label: "Section locale", href: "https://pdc-vd.ch", contactRole: "Président de la section de Prilly", contactName: "David Stauffer", email: "dasta@bluewin.ch" },
  { name: "PLR", label: "Les Liberaux-Radicaux de Prilly", href: "https://www.plrp.ch", contactRole: "Président de la section de Prilly", contactName: "Philippe Schroff", email: "philippe@schroff.name" },
  { name: "Les Vert.e.s de Prilly", label: "VDP", href: "https://vert-e-s-vd.ch", contactRole: "Contact section ouest lausannois", contactName: "Section OL", email: "section-ol@verts-vd.ch" },
  { name: "Les Vert'liberaux", label: "Section representée à Prilly", href: "https://vd.vertliberaux.ch", contactRole: "Representant pour Prilly", contactName: "Louis Rivier", email: "lrivier@sunrise.ch" },
  { name: "Parti Socialiste et Independant.e.s de gauche", label: "PSIG", href: "https://www.psvaud.ch", contactRole: "Co-presidence de la section de Prilly", contactName: "Yan Giroud et Olivier Pilet", email: "yan.giroud@ontheroad-again.com" },
  { name: "UDC", label: "Union democratique du centre", href: "https://www.udc-vaud.ch", contactRole: "Président de la section de Prilly", contactName: "Fabien Deillon", email: "deillon@2wire.ch" },
];

export const councilCommissions: CommissionCategory[] = [
  {
    title: "Commissions permanentes",
    eyebrow: "Suivi dans la duree",
    description:
      "Elles assurent un travail régulier sur les sujets recurrents du Conseil et offrent des repères stables sur l'ensemble de la legislature.",
    href: `${officialBase}/conseil/composition-du-conseil/liste-des-commissions-permanentes`,
  },
  {
    title: "Commissions intercommunales",
    eyebrow: "Coordination regionale",
    description:
      "Elles relient Prilly a des structures ou institutions partagées avec d'autres communes lorsque les enjeux depassent le seul territoire communal.",
    href: `${officialBase}/conseil/composition-du-conseil/liste-des-commissions-intercommunales`,
  },
  {
    title: "Commissions ad hoc",
    eyebrow: "Etude des objets",
    description:
      "Le Bureau nomme des commissions pour examiner un preavis, un reglement, un credit, une petition ou un autre objet avant son passage en séance.",
    href: `${councilBase}/bureau`,
  },
];

export const councilArchiveCategories: ArchiveCategory[] = [
  {
    title: "Rapports de commissions",
    description: "Retrouver les rapports classes par année pour suivre l'analyse politique et technique des objets soumis au Conseil.",
    href: `${councilBase}/archives-du-conseil/rapports-de-commissions`,
    years: [
      { label: "2016", href: `${councilBase}/archives-du-conseil/rapports-de-commissions/rapports-de-commissions-2016` },
      { label: "2015", href: `${councilBase}/archives-du-conseil/rapports-de-commissions/rapports-de-commissions-2015` },
      { label: "2014", href: `${councilBase}/archives-du-conseil/rapports-de-commissions/rapports-de-commissions-2014` },
      { label: "2013", href: `${councilBase}/archives-du-conseil/rapports-de-commissions/rapports-de-commissions-2013` },
      { label: "2012", href: `${councilBase}/archives-du-conseil/rapports-de-commissions/rapports-de-commissions-2012` },
    ],
  },
  {
    title: "Proces-verbaux",
    description: "Accéder aux proces-verbaux décisionnels et historiques des séances du Conseil communal.",
    href: `${councilBase}/archives-du-conseil/proces-verbaux`,
    years: [
      { label: "2016", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2016` },
      { label: "2015", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2015` },
      { label: "2014", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2014` },
      { label: "2013", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2013` },
      { label: "2012", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2012` },
      { label: "2011", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2011` },
      { label: "2010", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2010` },
      { label: "2009", href: `${councilBase}/archives-du-conseil/proces-verbaux/proces-verbaux-2009` },
    ],
  },
  {
    title: "Preavis et rapports municipaux",
    description: "Explorer les propositions de la Municipalite et leurs rapports par annee, pour remonter l'historique des objets traites.",
    href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux`,
    years: [
      { label: "2016", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2016` },
      { label: "2015", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2015` },
      { label: "2014", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2014` },
      { label: "2013", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2013` },
      { label: "2012", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2012` },
      { label: "2011", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2011` },
      { label: "2010", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2010` },
      { label: "2009", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2009` },
      { label: "2008", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2008` },
      { label: "2007", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2007` },
      { label: "2006", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2006` },
      { label: "2005", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2005` },
      { label: "2004", href: `${councilBase}/archives-du-conseil/preavis-et-rapports-municipaux/preavis-et-rapports-2004` },
    ],
  },
];

export const councilVideoInfo = {
  title: "Suivre les séances en video",
  description:
    "Les séances peuvent être suivies en ligne, une solution utile pour les personnes empechees, en deplacement ou a l'etranger. La logique est simple: garder l'accès  à la vie democratique locale meme a distance.",
  href: "https://www.sonomix.ch",
  ctaLabel: "Accéder  à la diffusion en ligne",
};

export const councilContact: CouncilContact = {
  title: "Conseil communal",
  addressLines: ["Route de Cossonay 42", "1008 Prilly"],
  email: "conseil@prilly.ch",
  phone: "+41 21 622 72 11",
  secondaryPhone: "+41 21 622 72 90",
  fax: "+41 21 622 72 05",
};

export const archiveIcon = FileCheck2;
