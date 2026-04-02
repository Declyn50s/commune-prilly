export const newsCategories = [
  "Toutes",
  "Commune",
  "Environnement",
  "Mobilite",
  "Culture",
  "Jeunesse",
  "Urbanisme",
  "Administration",
  "Travaux",
  "Securite",
] as const;

export type NewsCategory = (typeof newsCategories)[number];

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<NewsCategory, "Toutes">;
  date: string;
  summary: string;
  content: string[];
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "news-001",
    slug: "ouverture-exceptionnelle-guichet-population",
    title: "Ouverture exceptionnelle du guichet population samedi matin",
    category: "Administration",
    date: "2026-04-03",
    summary:
      "Le guichet population sera exceptionnellement ouvert le samedi 4 avril 2026 de 08h30 a 11h30 pour les démarches liees aux arrivées, departs et changements d'adresse.",
    featured: true,
    content: [
      "Le service de la population ouvrira exceptionnellement ses guichets le samedi 4 avril 2026 de 08h30 a 11h30 a l'Hotel de Ville.",
      "Cette ouverture concerne principalement les annonces d'arrivee, les departs, les changements d'adresse et la remise de documents administratifs courants.",
      "Les habitantes et habitants sont invites a se presenter avec les pieces justificatives necessaires afin de faciliter le traitement des demandes.",
    ],
  },
  {
    id: "news-002",
    slug: "reamenagement-vegetalise-avenue-paisible",
    title: "Reamenagement vegetalise de l'avenue de la Paisible",
    category: "Environnement",
    date: "2026-03-29",
    summary:
      "Des plantations et amenagements de surface seront realises sur l'avenue de la Paisible afin d'ameliorer l'ombrage, la permeabilite des sols et le confort des deplacements.",
    content: [
      "La Commune de Prilly entreprendra au mois d'avril un reamenagement vegetalise sur plusieurs troncons de l'avenue de la Paisible.",
      "Les interventions prevoient des plantations d'arbustes, l'adaptation de certaines surfaces minerales et l'amelioration du traitement paysager des abords.",
      "Des informations complementaires sur les phases de chantier et les incidences ponctuelles sur la circulation seront communiquees avant le debut des travaux.",
    ],
  },
  {
    id: "news-003",
    slug: "collecte-speciale-dechets-encombrants-avril",
    title: "Collecte speciale des déchets encombrants",
    category: "Travaux",
    date: "2026-03-24",
    summary:
      "Une collecte speciale des déchets encombrants est organisee le mercredi 8 avril 2026. Les depots devront etre prepares selon les consignes communales habituelles.",
    content: [
      "Une collecte speciale des déchets encombrants aura lieu le mercredi 8 avril 2026 sur l'ensemble du territoire communal.",
      "Les objets devront etre deposes aux emplacements habituels, la veille au soir, sans entraver les cheminements pietons ni l'acces des vehicules de secours.",
      "Les objets valorisables ou relevant de filieres specifiquees devront continuer a etre apportes aux points de collecte adaptes.",
    ],
  },
  {
    id: "news-004",
    slug: "inscriptions-fete-quartier-uttins",
    title: "Inscriptions ouvertes pour la fete de quartier des Uttins",
    category: "Jeunesse",
    date: "2026-03-21",
    summary:
      "Les inscriptions sont ouvertes pour les stands, animations et participations associatives a la prochaine fete de quartier des Uttins.",
    content: [
      "La Commune ouvre les inscriptions pour la fete de quartier des Uttins qui se tiendra au mois de mai.",
      "Les associations, groupes d'habitantes et habitants ainsi que les partenaires locaux peuvent proposer un stand, une animation ou une activité de proximite.",
      "Les demandes seront traitées par ordre de reception, dans la limite des emplacements disponibles.",
    ],
  },
  {
    id: "news-005",
    slug: "horaires-paques-services-communaux",
    title: "Horaires de Paques des services communaux",
    category: "Commune",
    date: "2026-03-18",
    summary:
      "Les horaires d'ouverture des services communaux seront adaptes durant le week-end de Paques. Certaines prestations resteront accessibles selon les modalites habituelles.",
    content: [
      "Les services communaux adapteront leurs horaires durant la periode de Paques.",
      "Les guichets seront fermes le vendredi 10 avril et le lundi 13 avril 2026. La reprise habituelle interviendra le mardi 14 avril 2026.",
      "Les informations relatives aux urgences et aux contacts utiles restent disponibles sur le site communal.",
    ],
  },
  {
    id: "news-006",
    slug: "travaux-voirie-chemin-des-creuses",
    title: "Travaux de voirie sur le chemin des Creuses",
    category: "Travaux",
    date: "2026-03-14",
    summary:
      "Des travaux de refection de chaussee et d'adaptation des bordures seront engages sur le chemin des Creuses. La circulation sera maintenue avec des restrictions ponctuelles.",
    content: [
      "Des travaux de voirie debuteront le 20 avril 2026 sur le chemin des Creuses pour une durée estimee a trois semaines.",
      "La circulation restera possible mais des alternats et fermetures ponctuelles de courte durée pourront etre necessaires selon l'avancement du chantier.",
      "Les riveraines et riverains seront informes en amont des contraintes d'acces particulieres.",
    ],
  },
  {
    id: "news-007",
    slug: "programme-culturel-printemps-prilly",
    title: "Programme culturel de printemps à Prilly",
    category: "Culture",
    date: "2026-03-10",
    summary:
      "La programmation culturelle du printemps reunit concerts, rencontres, lectures et activités de proximite proposees dans differents lieux communaux.",
    content: [
      "Le programme culturel de printemps est desormais disponible.",
      "Plusieurs rendez-vous sont proposes entre avril et juin dans les salles communales, les espaces publics et les lieux partenaires de la commune.",
      "Le detail des dates, conditions de participation et informations pratiques est publie dans l'agenda communal.",
    ],
  },
  {
    id: "news-008",
    slug: "rappel-inscriptions-rentree-scolaire",
    title: "Rappel concernant les inscriptions pour la rentrée scolaire",
    category: "Jeunesse",
    date: "2026-03-06",
    summary:
      "Les familles concernées par une premiere inscription ou un changement de situation sont invitées a transmettre leur dossier dans les delais indiques.",
    content: [
      "La Commune rappelle que les inscriptions liees a la rentrée scolaire doivent etre deposees dans les delais communiques aux familles.",
      "Les dossiers incomplets peuvent entrainer un traitement plus long. Il est recommande de verifier les pieces demandées avant l'envoi.",
      "Les informations utiles sont disponibles aupres des services concernes et dans la rubrique enfance et ecoles.",
    ],
  },
  {
    id: "news-009",
    slug: "mise-en-sens-unique-temporaire-route-gare",
    title: "Mise en sens unique temporaire sur la route de la Gare",
    category: "Mobilite",
    date: "2026-03-02",
    summary:
      "Une regulation temporaire de la circulation sera mise en place sur la route de la Gare durant une phase de travaux techniques.",
    content: [
      "En raison d'interventions sur des infrastructures souterraines, une mise en sens unique temporaire sera introduite sur une portion de la route de la Gare.",
      "La signalisation de deviation sera installée sur place. Les transports publics conserveront leurs arrets habituels, sous reserve d'adaptations ponctuelles.",
      "Les usageres et usagers sont invites a suivre la signalisation temporaire et a anticiper leurs deplacements.",
    ],
  },
  {
    id: "news-010",
    slug: "avis-prevention-demarchage-a-domicile",
    title: "Avis de prevention concernant le demarchage a domicile",
    category: "Securite",
    date: "2026-02-25",
    summary:
      "La Commune rappelle les precautions a observer en cas de demarchage a domicile et invite la population a signaler toute situation suspecte aux services competents.",
    content: [
      "Plusieurs signalements recents conduisent la Commune a rappeler les consignes de prudence en cas de demarchage a domicile.",
      "Il est recommande de ne pas laisser entrer de personnes inconnues sans verification prealable et de ne pas transmettre de documents personnels sans raison etablie.",
      "En cas de doute, la population peut prendre contact avec les services de prevention ou les autorites competentes.",
    ],
  },
  {
    id: "news-011",
    slug: "enquete-publique-secteur-corminjoz",
    title: "Enquete publique dans le secteur de Corminjoz",
    category: "Urbanisme",
    date: "2026-02-18",
    summary:
      "Une enquete publique est ouverte concernant un projet d'amenagement dans le secteur de Corminjoz. Le dossier peut etre consulte selon les modalites indiquees.",
    content: [
      "Une enquete publique concernant un projet d'amenagement dans le secteur de Corminjoz est ouverte a compter du 23 fevrier 2026.",
      "Le dossier est consultable pendant la durée legale aux heures d'ouverture habituelles du service competent.",
      "Les oppositions ou observations devront etre formulées dans les formes et delais prevus par la procedure.",
    ],
  },
  {
    id: "news-012",
    slug: "communication-municipale-seance-avril",
    title: "Communication municipale a l'issue de la seance du 1er avril 2026",
    category: "Commune",
    date: "2026-04-01",
    summary:
      "La Municipalite informe la population de plusieurs décisions administratives et organisationnelles prises lors de sa seance du 1er avril 2026.",
    content: [
      "A l'issue de sa seance du 1er avril 2026, la Municipalite a adopte plusieurs décisions relatives a l'organisation communale et a la conduite de projets en cours.",
      "Les principaux points concernent le suivi de chantiers, l'organisation de manifestations de proximite et diverses questions administratives courantes.",
      "Les communications complementaires seront publiees selon les sujets concernes dans les rubriques du site officiel.",
    ],
  },
];

export const newsArchiveYears = ["2026", "2025", "2024"] as const;

export const newsArchiveMonths = [
  "Tous les mois",
  "Avril 2026",
  "Mars 2026",
  "Fevrier 2026",
] as const;

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
