import type { DocumentItem, MethodItem, ResultInsight, TimelineItem } from "@/features/vie-quartier/types";

export const mqmvTimeline: TimelineItem[] = [
  {
    title: "Elaboration",
    period: "2024",
    description: "Mobilisation des partenaires locaux et cantonaux, lancement du projet et création de la Table de développement social de Prilly.",
  },
  {
    title: "Diagnostic",
    period: "2024–2025",
    description: "Construction d’un portrait du quartier avec les habitant·e·s, les partenaires et plusieurs méthodes de collecte.",
  },
  {
    title: "Réflexion",
    period: "2025–2026",
    description: "Rédaction d’une politique de développement social et d’un plan d’action nourri par les constats du terrain.",
  },
  {
    title: "Emergence",
    period: "Dès 2026",
    description: "Ateliers d’idéation collective et émergence de premières initiatives citoyennes ou locales.",
  },
];

export const mqmvMethods: MethodItem[] = [
  {
    title: "Balades d’observation",
    description: "Des promenades commentées permettent de regarder le quartier à hauteur d’usage, de circulation et de ressenti.",
  },
  {
    title: "Entretiens et rencontres",
    description: "Des temps d’échange ciblés donnent la parole à des personnes isolées, vulnérables ou moins visibles.",
  },
  {
    title: "Ateliers de cartographie sociale",
    description: "Les participant·e·s identifient lieux ressources, zones sensibles et espaces à améliorer.",
  },
  {
    title: "Questionnaires population",
    description: "Des questionnaires donnent une base quantitative et qualitative sur les attentes et les usages.",
  },
  {
    title: "Etudes ciblées par publics",
    description: "Une attention spécifique est portée aux jeunes, aux aîné·e·s et à d’autres publics clés du quartier.",
  },
];

export const mqmvInsights: ResultInsight[] = [
  {
    title: "Population adulte",
    summary: "Le bien-être général est plutôt positif, mais plusieurs attentes locales restent très concrètes.",
    bullets: [
      "Le lien social et le sentiment d’appartenance sont jugés importants.",
      "Les habitant·e·s attendent davantage d’événements festifs, de sport et d’espaces conviviaux.",
      "La communication locale et la visibilité de ce qui existe peuvent encore être renforcées.",
    ],
    tone: "green",
  },
  {
    title: "Jeunes 12–25 ans",
    summary: "Les jeunes expriment un besoin de lieux accèssibles, d’activités visibles et de possibilités de rencontre simples.",
    bullets: [
      "Les espaces ouverts, informels et bien identifiés comptent beaucoup.",
      "Le sport, les activités ponctuelles et les formats conviviaux ressortent fortement.",
      "La manière d’être informé·e des offres disponibles est un enjeu réel.",
    ],
    tone: "yellow",
  },
  {
    title: "Personnes âgées 65+",
    summary: "L’accèssibilité, le confort des trajets et les lieux de repos apparaissent comme des thèmes majeurs.",
    bullets: [
      "Le besoin de bancs, de signalétique et d’éclairage revient régulièrement.",
      "Certains parcours ou espaces publics demandent une attention particulière pour les PMR.",
      "Les commerces de proximité et les lieux de rencontre sont perçus comme essentiels.",
    ],
    tone: "coal",
  },
  {
    title: "Isolement et vulnérabilités",
    summary: "Les repas partagés, les lieux du quotidien et les petites habitudes de quartier jouent un rôle déterminant.",
    bullets: [
      "Les liens informels de proximité aident à rompre l’isolement.",
      "Les petits commerces et les espaces relationnels comptent autant que les équipements formels.",
      "La qualité de l’accueil et la simplicité des relais locaux font une vraie différence.",
    ],
    tone: "red",
  },
  {
    title: "Jane’s Walk et quartier nord",
    summary: "Les marches mettent en lumière des enjeux très concrets autour de la mobilité, des ambiances et de la qualité des espaces publics.",
    bullets: [
      "Le bruit, la saleté et certains cheminements sont perçus comme des points faibles.",
      "Le besoin de lieux de rencontre et d’espaces plus conviviaux ressort nettement.",
      "La perception de lieux emblématiques varie selon les usages, l’âge et les habitudes du quartier.",
    ],
    tone: "yellow",
  },
];

export const mqmvDocuments: DocumentItem[] = [
  {
    title: "Présentation de la démarche Mon quartier, ma voix",
    description: "Le document qui pose les intentions, les partenaires et le cadre général du projet.",
    context: "Vision d’ensemble",
    href: "/docs/vie-quartier/ANNEXE_IX_Presentation_demarche_MQMV.pdf",
    meta: "PDF",
  },
  {
    title: "Rapport d’activité Jane’s Walk",
    description: "Une promenade urbaine qui éclaire les usages, les perceptions et les points d’attention du quartier nord.",
    context: "Observation in situ",
    href: "/docs/vie-quartier/ANNEXE_I_2025.06.25_Rapport_d_activite-Jane_s_Walk_Final.pdf",
    meta: "PDF",
  },
  {
    title: "Analyse consolidée du questionnaire à la population adulte",
    description: "Les grands enseignements issus de la récolte de terrain auprès des habitant·e·s.",
    context: "Population adulte",
    href: "/docs/vie-quartier/ANNEXE_IV_Analyse_consolidee_questionnaire_MQMV_20250826.pdf",
    meta: "PDF",
  },
  {
    title: "Analyse du questionnaire 12–25 ans",
    description: "Les attentes, usages et perceptions exprimés par les jeunes du quartier.",
    context: "Jeunes 12–25 ans",
    href: "/docs/vie-quartier/ANNEXE_V_Analyse_questionnaire_MQMV_12-25_20250915.pdf",
    meta: "PDF",
  },
  {
    title: "Compte rendu des entretiens",
    description: "Des retours qualitatifs sur des situations d’isolement ou de vulnérabilité.",
    context: "Entretiens ciblés",
    href: "/docs/vie-quartier/ANNEXE_VI_Compte_rendu_des_entretiens_20250813.pdf",
    meta: "PDF",
  },
  {
    title: "Perception du quartier nord par les 65+",
    description: "Une lecture sensible du quartier au regard des besoins des aîné·e·s.",
    context: "Aîné·e·s 65+",
    href: "/docs/vie-quartier/ANNEXE_VII_Comment_le_QN_de_Prilly_est_percu_par_ses_habitant.es.pdf",
    meta: "PDF",
  },
  {
    title: "Restitution de la récolte citoyenne",
    description: "Une synthèse des retours du forum participatif de septembre 2025.",
    context: "Forum participatif",
    href: "/docs/vie-quartier/ANNEXE_VIII_Restitution_de_la_recolte_citoyenne_Forum_participatif_MQMV_sept._2025_FINAL.pdf",
    meta: "PDF",
  },
];

export const mqmvFocusNord: ResultInsight[] = [
  {
    title: "Mobilité et accèssibilité",
    summary: "Le quartier nord concentre plusieurs enjeux très concrets liés aux déplacements du quotidien.",
    bullets: [
      "Certains trajets sont peu confortables pour les personnes à mobilité réduite.",
      "Le besoin de bancs, d’éclairage et de pauses est souvent évoqué.",
      "La lisibilité des parcours et de certains accès mérite d’être renforcée.",
    ],
    tone: "coal",
  },
  {
    title: "Espaces publics et ambiances",
    summary: "Le ressenti sur la qualité des lieux varie selon les usages et les moments de la journée.",
    bullets: [
      "Le bruit, la saleté et la qualité de certains espaces publics sont des sujets récurrents.",
      "Des lieux emblématiques sont appréciés mais demandent parfois une meilleure mise en valeur.",
      "Les espaces conviviaux et accueillants restent un besoin très présent.",
    ],
    tone: "red",
  },
  {
    title: "Commerce et vie locale",
    summary: "Les commerces et les lieux de proximité jouent un rôle important dans le sentiment d’appartenance.",
    bullets: [
      "Les petits commerces sont perçus comme des points d’ancrage du quotidien.",
      "Les repas partagés et les lieux de rencontre de proximité favorisent le lien social.",
      "Le besoin d’espaces vivants et accèssibles ressort dans plusieurs contributions.",
    ],
    tone: "green",
  },
];

export const mqmvLaunchFacts = [
  {
    title: "Lancement officiel",
    period: "1er juin 2024",
    description: "Le projet est lancé publiquement avec une volonté claire de construire avec la population.",
  },
  {
    title: "Premier territoire",
    period: "Quartier nord",
    description: "La première phase se concentre sur ce secteur avant d’éventuelles extensions à d’autres quartiers.",
  },
  {
    title: "Suite de la démarche",
    period: "Dès 2026",
    description: "Les ateliers d’idéation et les premières initiatives citoyennes doivent prendre forme.",
  },
];
