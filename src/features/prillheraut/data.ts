import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  CalendarDays,
  Download,
  FileText,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

export type FeaturedIssue = {
  id: string;
  year: number;
  issueNumber: string;
  period: string;
  title: string;
  summary: string;
  highlight: string;
  articles: string[];
  href: string;
  tag: string;
};

export type JournalStat = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type PublicationScheduleItem = {
  issueNumber: string;
  copyDeadline: string;
  publicationDate: string;
};

export type ContributionRule = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export type AdRate = {
  format: string;
  dimensions: string;
  price: string;
};

export type ArchiveIssue = {
  label: string;
  href?: string;
  note?: string;
};

export type ArchiveYear = {
  year: number;
  description: string;
  issues: ArchiveIssue[];
  yearHref: string;
  highlight?: string;
  recent?: boolean;
};

export const prillherautArchivePage = "https://www.prilly.ch/prilly-officiel/prillheraut-le-journal";

export const prillherautPageMeta = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Ville", href: "/ville" },
    { label: "Prill'heraut - Le Journal" },
  ],
  hero: {
    eyebrow: "Journal communal",
    title: "Prill'heraut",
    description:
      "Le journal d'information communal de Prilly relaie la vie locale, l'agenda, les projets communaux, la culture et les informations civiques dans un format editorial accèssible.",
    intro:
      "Pense comme une vitrine editoriale et une archive vivante, le Prill'heraut permet de lire le dernier numero, retrouver les anciennes editions et comprendre comment contribuer au journal communal.",
  },
};

export const prillherautFeaturedIssues: FeaturedIssue[] = [
  {
    id: "2026-01",
    year: 2026,
    issueNumber: "No 1",
    period: "Fevrier - mars 2026",
    title: "Elections communales, agenda local et vie quotidienne",
    summary:
      "Le numero de début 2026 met en avant les elections communales, l'agenda de la ville, la jeunesse, le plan lumiere, la journée du velo, le climat et plusieurs rendez-vous culturels.",
    highlight: "Le dernier numero a lire en premier pour suivre les actualités civiques et la vie locale.",
    articles: ["Elections communales 2026", "Agenda communal", "Jeunesse", "Plan lumiere", "Journée du velo", "Culture et climat"],
    href: "/docs/prillheraut/PrillHeraut_No_01-2026.pdf",
    tag: "Dernier numero",
  },
  {
    id: "2025-02",
    year: 2025,
    issueNumber: "No 2",
    period: "Avril - mai 2025",
    title: "Un numero qui montre toute la diversite du journal communal",
    summary:
      "Editorial culturel, agenda tres visible, bibliotheque, jeunesse, sport, climat et espaces publics: ce numero illustre la richesse des rubriques qui rythment la vie prillerane.",
    highlight: "Un bon exemple du role de lien entre information communale, culture et quotidien.",
    articles: ["Editorial culturel", "Agenda communal", "Bibliotheque", "Jeunesse", "Sport", "Climat et espaces publics"],
    href: "/docs/prillheraut/PrillHeraut_No_02-2025.pdf",
    tag: "Numero de reference",
  },
  {
    id: "2025-01",
    year: 2025,
    issueNumber: "No 1",
    period: "Fevrier - mars 2025",
    title: "Une edition exceptionnelle, uniquement digitale",
    summary:
      "publié uniquement en version numerique apres le refus du budget 2025 par le Conseil communal, ce numero montre comment le journal explique des impacts concrets sur la vie communale.",
    highlight: "Une edition utile pour comprendre la fonction d'information de proximite du Prill'heraut.",
    articles: ["Editorial", "Agenda", "Jeunesse", "Bibliotheque", "Culture locale", "Impacts sur la vie communale"],
    href: "/docs/prillheraut/PrillHeraut_No_01-2025.pdf",
    tag: "Edition speciale",
  },
];

export const prillherautStats: JournalStat[] = [
  {
    title: "Media communal de proximite",
    value: "Journal d'information",
    description: "Le Prill'heraut relaye les actualités, les projets, les évènements et les repères utiles de la vie prillerane.",
    icon: BadgeInfo,
  },
  {
    title: "Parutions 2026",
    value: "5 numeros",
    description: "Le calendrier editorial 2026 fixe des délais clairs pour preparer les contenus et annoncer les prochaines parutions.",
    icon: CalendarDays,
  },
  {
    title: "Archives",
    value: "Depuis 2005",
    description: "Les editions anciennes restent consultables pour retrouver la memoire recente de la commune et de ses projets.",
    icon: Download,
  },
  {
    title: "Contributions",
    value: "Ouvertes",
    description: "Habitant·e·s, acteurs locaux et entreprises prilleranes peuvent proposer des contenus ou des annonces dans un cadre clair.",
    icon: Users,
  },
];

export const prillherautSchedule2026: PublicationScheduleItem[] = [
  { issueNumber: "No 1", copyDeadline: "15 janvier 2026", publicationDate: "13 fevrier 2026" },
  { issueNumber: "No 2", copyDeadline: "4 mars 2026", publicationDate: "2 avril 2026" },
  { issueNumber: "No 3", copyDeadline: "19 mai 2026", publicationDate: "19 juin 2026" },
  { issueNumber: "No 4", copyDeadline: "13 aout 2026", publicationDate: "11 septembre 2026" },
  { issueNumber: "No 5", copyDeadline: "12 novembre 2026", publicationDate: "11 decembre 2026" },
];

export const prillherautContributionRules: ContributionRule[] = [
  {
    title: "Vous souhaitez vous exprimer dans le Prill'heraut ?",
    description: "Les textes et propositions editoriales sont a envoyer  à la redaction du journal communal.",
    points: [
      "Adresse de contact: prillheraut(at)prilly.ch",
      "Les textes peuvent être proposes par la population et les acteurs locaux.",
      "Le ton de la page reste simple, vivant et tourne vers la vie communale.",
    ],
    icon: Mail,
  },
  {
    title: "Formats de fichiers acceptes",
    description: "La preparation editoriale est facilitée quand les fichiers sont transmis dans des formats exploitables directement.",
    points: [
      "Photos et images: jpeg, tif, psd, etc.",
      "Logos: ai, eps, jpeg, pdf, etc.",
      "Un visuel clair et un texte structure accelerent l'integration dans la maquette.",
    ],
    icon: FileText,
  },
];

export const prillherautAdRates: AdRate[] = [
  { format: "1/4 page", dimensions: "98 x 130.5 mm", price: "CHF 250.-" },
  { format: "1/8 page", dimensions: "98 x 63.25 mm", price: "CHF 150.-" },
  { format: "1/16 page", dimensions: "47 x 63.25 mm", price: "CHF 70.-" },
];

export const prillherautRubrics = [
  {
    title: "Agenda communal",
    description: "Les numeros 2025 et 2026 mettent l'agenda en avant pour relier les informations communales aux rendez-vous du quotidien.",
  },
  {
    title: "Editorial et vie publique",
    description: "Le journal sert aussi de relais civique, par exemple pour expliquer le contexte budgetaire ou mettre en avant les elections communales.",
  },
  {
    title: "Culture, bibliotheque et loisirs",
    description: "Les rubriques culturelles montrent la vie locale sous un angle chaleureux et concret, entre animations, lecture et sorties.",
  },
  {
    title: "Jeunesse et vie locale",
    description: "Jeunesse, sport, climat, mobilite et espaces publics apparaissent régulierement pour refleter la realite du territoire.",
  },
];

export const prillherautContact = {
  email: "prillheraut@prilly.ch",
  note: "Pour proposer un texte, poser une question editoriale ou demander des informations sur les annonces commerciales.",
};

export const prillherautPracticalNotes = [
  "Heraut: un messager public qui transmet des informations importantes. Cette definition historique eclaire le nom du journal, mais reste secondaire par rapport a sa fonction de service public local.",
  "Les annonces commerciales sont reservées aux entreprises de Prilly.",
  "Les archives officielles du Prill'heraut couvrent les editions de 2005 a 2026.",
];

export const prillherautArchiveByYear: ArchiveYear[] = [
  {
    year: 2026,
    recent: true,
    highlight: "Le dernier numero est centre sur les elections communales 2026 et l'agenda local.",
    description: "La nouvelle saison editoriale met en avant les informations civiques, culturelles et pratiques du début d'annee.",
    yearHref: prillherautArchivePage,
    issues: [{ label: "Edition fevrier - mars", href: "/docs/prillheraut/PrillHeraut_No_01-2026.pdf", note: "Dernier numero disponible" }],
  },
  {
    year: 2025,
    recent: true,
    highlight: "Une année tres representative de la diversite des rubriques et du role d'information communale.",
    description: "Entre edition digitale exceptionnelle, agenda, culture, jeunesse et climat, 2025 illustre bien le ton du journal.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: "/docs/prillheraut/PrillHeraut_No_01-2025.pdf", note: "Edition uniquement digitale" },
      { label: "Edition avril - mai", href: "/docs/prillheraut/PrillHeraut_No_02-2025.pdf", note: "Numero de reference" },
      { label: "Edition juin - juillet - aout", href: prillherautArchivePage, note: "Disponible via les archives officielles" },
      { label: "Edition septembre - octobre - novembre", href: prillherautArchivePage, note: "Disponible via les archives officielles" },
      { label: "Edition decembre 2025 - janvier 2026", href: prillherautArchivePage, note: "Disponible via les archives officielles" },
    ],
  },
  {
    year: 2024,
    recent: true,
    description: "Une année complete avec cinq editions, facilement reperables avant de remonter plus loin dans les archives.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: prillherautArchivePage },
      { label: "Edition avril - mai", href: prillherautArchivePage },
      { label: "Edition juin - juillet - aout", href: prillherautArchivePage },
      { label: "Edition septembre - octobre", href: prillherautArchivePage },
      { label: "Edition novembre - decembre 2024 - janvier 2025", href: prillherautArchivePage },
    ],
  },
  {
    year: 2023,
    recent: true,
    description: "Des editions recentes a consulter pour retrouver les sujets culturels, pratiques et institutionnels de la commune.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: prillherautArchivePage },
      { label: "Edition avril - mai", href: prillherautArchivePage },
      { label: "Edition juin - juillet - aout", href: prillherautArchivePage },
      { label: "Edition septembre - octobre", href: prillherautArchivePage },
      { label: "Edition novembre - decembre 2023 et janvier 2024", href: prillherautArchivePage },
    ],
  },
  {
    year: 2022,
    description: "Les archives 2022 gardent la trace des parutions hybrides de fin d'année et des editions saisonnieres.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: prillherautArchivePage },
      { label: "Edition avril - mai", href: prillherautArchivePage },
      { label: "Edition juin - juillet - aout", href: prillherautArchivePage },
      { label: "Edition septembre - octobre - novembre", href: prillherautArchivePage },
      { label: "Edition novembre - decembre 2022 et janvier 2023", href: prillherautArchivePage },
    ],
  },
  {
    year: 2021,
    description: "Une année charniere avec des editions saisonnieres et la transition vers les numeros de fin 2021 - début 2022.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: prillherautArchivePage },
      { label: "Edition avril - mai", href: prillherautArchivePage },
      { label: "Edition juin - juillet - aout", href: prillherautArchivePage },
      { label: "Edition septembre - octobre", href: prillherautArchivePage },
      { label: "Edition novembre - decembre 2021 et janvier 2022", href: prillherautArchivePage },
    ],
  },
  {
    year: 2020,
    description: "Les archives 2020 conservent aussi une edition speciale, utile pour retrouver un contexte editorial particulier.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: prillherautArchivePage },
      { label: "Edition speciale", href: prillherautArchivePage },
      { label: "Edition septembre - octobre", href: prillherautArchivePage },
      { label: "Edition decembre 2020 - janvier 2021", href: prillherautArchivePage },
    ],
  },
  {
    year: 2019,
    description: "Cinq editions pour retrouver les repères editoriaux classiques du journal communal.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Edition fevrier - mars", href: prillherautArchivePage },
      { label: "Edition avril - mai", href: prillherautArchivePage },
      { label: "Edition juin - juillet - aout", href: prillherautArchivePage },
      { label: "Edition septembre - octobre", href: prillherautArchivePage },
      { label: "Edition novembre - decembre 2019 et janvier 2020", href: prillherautArchivePage },
    ],
  },
  {
    year: 2018,
    description: "Les archives mensuelles 2018 permettent de retrouver un rythme editorial plus soutenu.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2018", href: prillherautArchivePage },
      { label: "Fevrier 2018", href: prillherautArchivePage },
      { label: "Mars 2018", href: prillherautArchivePage },
      { label: "Avril 2018", href: prillherautArchivePage },
      { label: "Mai 2018", href: prillherautArchivePage },
      { label: "Juin 2018", href: prillherautArchivePage },
      { label: "Septembre 2018", href: prillherautArchivePage },
      { label: "Novembre 2018", href: prillherautArchivePage },
    ],
  },
  {
    year: 2017,
    description: "Les numeros 2017 conservent aussi un encarte special autour du samedi des Bibliotheques.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2017", href: prillherautArchivePage },
      { label: "Fevrier 2017", href: prillherautArchivePage },
      { label: "Mars 2017", href: prillherautArchivePage },
      { label: "Avril 2017", href: prillherautArchivePage },
      { label: "Mai 2017", href: prillherautArchivePage },
      { label: "Juin 2017", href: prillherautArchivePage },
      { label: "Septembre 2017", href: prillherautArchivePage },
      { label: "Octobre 2017", href: prillherautArchivePage },
      { label: "Novembre 2017", href: prillherautArchivePage },
      { label: "Decembre 2017", href: prillherautArchivePage },
    ],
  },
  {
    year: 2016,
    description: "Dix editions mensuelles à parcourir pour retrouver l'actualite communale de l'annee.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2016", href: prillherautArchivePage },
      { label: "Fevrier 2016", href: prillherautArchivePage },
      { label: "Mars 2016", href: prillherautArchivePage },
      { label: "Avril 2016", href: prillherautArchivePage },
      { label: "Mai 2016", href: prillherautArchivePage },
      { label: "Juin 2016", href: prillherautArchivePage },
      { label: "Septembre 2016", href: prillherautArchivePage },
      { label: "Octobre 2016", href: prillherautArchivePage },
      { label: "Novembre 2016", href: prillherautArchivePage },
      { label: "Decembre 2016", href: prillherautArchivePage },
    ],
  },
  {
    year: 2015,
    description: "Une archive annuelle dense avec des numeros mensuels sur la plus grande partie de l'annee.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2015", href: prillherautArchivePage },
      { label: "Fevrier 2015", href: prillherautArchivePage },
      { label: "Mars 2015", href: prillherautArchivePage },
      { label: "Avril 2015", href: prillherautArchivePage },
      { label: "Mai 2015", href: prillherautArchivePage },
      { label: "Juin 2015", href: prillherautArchivePage },
      { label: "Septembre 2015", href: prillherautArchivePage },
      { label: "Octobre 2015", href: prillherautArchivePage },
      { label: "Novembre 2015", href: prillherautArchivePage },
      { label: "Decembre 2015", href: prillherautArchivePage },
    ],
  },
  {
    year: 2014,
    description: "Les parutions 2014 permettent de remonter une année supplementaire dans l'histoire recente du journal communal.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2014", href: prillherautArchivePage },
      { label: "Fevrier 2014", href: prillherautArchivePage },
      { label: "Mars 2014", href: prillherautArchivePage },
      { label: "Avril 2014", href: prillherautArchivePage },
      { label: "Mai 2014", href: prillherautArchivePage },
      { label: "Juin 2014", href: prillherautArchivePage },
      { label: "Septembre 2014", href: prillherautArchivePage },
      { label: "Octobre 2014", href: prillherautArchivePage },
      { label: "Novembre 2014", href: prillherautArchivePage },
      { label: "Decembre 2014", href: prillherautArchivePage },
    ],
  },
  {
    year: 2013,
    description: "Les archives 2013 gardent la trace des numeros mensuels et des grands rendez-vous communaux.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2013", href: prillherautArchivePage },
      { label: "Fevrier 2013", href: prillherautArchivePage },
      { label: "Mars 2013", href: prillherautArchivePage },
      { label: "Avril 2013", href: prillherautArchivePage },
      { label: "Mai 2013", href: prillherautArchivePage },
      { label: "Juin 2013", href: prillherautArchivePage },
      { label: "Septembre 2013", href: prillherautArchivePage },
      { label: "Novembre 2013", href: prillherautArchivePage },
      { label: "Decembre 2013", href: prillherautArchivePage },
    ],
  },
  {
    year: 2012,
    description: "Une archive utile pour revisiter une decennie de vie communale et de chroniques locales.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2012", href: prillherautArchivePage },
      { label: "Fevrier 2012", href: prillherautArchivePage },
      { label: "Mars 2012", href: prillherautArchivePage },
      { label: "Avril 2012", href: prillherautArchivePage },
      { label: "Mai 2012", href: prillherautArchivePage },
      { label: "Juin 2012", href: prillherautArchivePage },
      { label: "Septembre 2012", href: prillherautArchivePage },
      { label: "Octobre 2012", href: prillherautArchivePage },
      { label: "Novembre 2012", href: prillherautArchivePage },
      { label: "Decembre 2012", href: prillherautArchivePage },
    ],
  },
  {
    year: 2011,
    description: "Les numeros 2011 restent accèssibles via les archives officielles du journal communal.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2011", href: prillherautArchivePage },
      { label: "Fevrier 2011", href: prillherautArchivePage },
      { label: "Mars 2011", href: prillherautArchivePage },
      { label: "Avril 2011", href: prillherautArchivePage },
      { label: "Mai 2011", href: prillherautArchivePage },
      { label: "Juin 2011", href: prillherautArchivePage },
      { label: "Septembre 2011", href: prillherautArchivePage },
      { label: "Octobre 2011", href: prillherautArchivePage },
      { label: "Novembre 2011", href: prillherautArchivePage },
      { label: "Decembre 2011", href: prillherautArchivePage },
    ],
  },
  {
    year: 2010,
    description: "Une archive annuelle complete, utile pour retrouver les grandes informations de la commune au début des années 2010.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2010", href: prillherautArchivePage },
      { label: "Fevrier 2010", href: prillherautArchivePage },
      { label: "Mars 2010", href: prillherautArchivePage },
      { label: "Avril 2010", href: prillherautArchivePage },
      { label: "Mai 2010", href: prillherautArchivePage },
      { label: "Juin 2010", href: prillherautArchivePage },
      { label: "Septembre 2010", href: prillherautArchivePage },
      { label: "Octobre 2010", href: prillherautArchivePage },
      { label: "Novembre 2010", href: prillherautArchivePage },
      { label: "Decembre 2010", href: prillherautArchivePage },
    ],
  },
  {
    year: 2009,
    description: "Les numeros 2009 prolongent la memoire recente du journal communal avec une archive mensuelle riche.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2009", href: prillherautArchivePage },
      { label: "Fevrier 2009", href: prillherautArchivePage },
      { label: "Mars 2009", href: prillherautArchivePage },
      { label: "Avril 2009", href: prillherautArchivePage },
      { label: "Mai 2009", href: prillherautArchivePage },
      { label: "Juin 2009", href: prillherautArchivePage },
      { label: "Septembre 2009", href: prillherautArchivePage },
      { label: "Octobre 2009", href: prillherautArchivePage },
      { label: "Novembre 2009", href: prillherautArchivePage },
      { label: "Decembre 2009", href: prillherautArchivePage },
    ],
  },
  {
    year: 2008,
    description: "Les archives 2008 restent consultables vi à la page officielle du Prill'heraut.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2008", href: prillherautArchivePage },
      { label: "Fevrier 2008", href: prillherautArchivePage },
      { label: "Mars 2008", href: prillherautArchivePage },
      { label: "Avril 2008", href: prillherautArchivePage },
      { label: "Mai 2008", href: prillherautArchivePage },
      { label: "Juin 2008", href: prillherautArchivePage },
      { label: "Septembre 2008", href: prillherautArchivePage },
      { label: "Octobre 2008", href: prillherautArchivePage },
      { label: "Novembre 2008", href: prillherautArchivePage },
      { label: "Decembre 2008", href: prillherautArchivePage },
    ],
  },
  {
    year: 2007,
    description: "Une série mensuelle complete pour retrouver les informations locales de 2007.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2007", href: prillherautArchivePage },
      { label: "Fevrier 2007", href: prillherautArchivePage },
      { label: "Mars 2007", href: prillherautArchivePage },
      { label: "Avril 2007", href: prillherautArchivePage },
      { label: "Mai 2007", href: prillherautArchivePage },
      { label: "Juin 2007", href: prillherautArchivePage },
      { label: "Septembre 2007", href: prillherautArchivePage },
      { label: "Octobre 2007", href: prillherautArchivePage },
      { label: "Novembre 2007", href: prillherautArchivePage },
      { label: "Decembre 2007", href: prillherautArchivePage },
    ],
  },
  {
    year: 2006,
    description: "Les archives 2006 restent accèssibles pour remonter  à la premiere phase de l'historique numerique du journal.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Janvier 2006", href: prillherautArchivePage },
      { label: "Fevrier 2006", href: prillherautArchivePage },
      { label: "Mars 2006", href: prillherautArchivePage },
      { label: "Avril 2006", href: prillherautArchivePage },
      { label: "Mai 2006", href: prillherautArchivePage },
      { label: "Juin 2006", href: prillherautArchivePage },
      { label: "Septembre 2006", href: prillherautArchivePage },
      { label: "Octobre 2006", href: prillherautArchivePage },
      { label: "Novembre 2006", href: prillherautArchivePage },
      { label: "Decembre 2006", href: prillherautArchivePage },
    ],
  },
  {
    year: 2005,
    description: "Les premieres editions disponibles dans l'archive numerique permettent de revenir au lancement de cette memoire editoriale.",
    yearHref: prillherautArchivePage,
    issues: [
      { label: "Juin 2005", href: prillherautArchivePage },
      { label: "Aout 2005", href: prillherautArchivePage },
      { label: "Septembre 2005", href: prillherautArchivePage },
      { label: "Octobre 2005", href: prillherautArchivePage },
      { label: "Novembre 2005", href: prillherautArchivePage },
      { label: "Decembre 2005", href: prillherautArchivePage },
    ],
  },
];
