import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeInfo,
  CalendarDays,
  CheckCircle2,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";

export type EnvironmentTheme = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  label: string;
};

export type EnvironmentAction = {
  title: string;
  description: string;
  href: string;
  label: string;
  tone?: "default" | "warning" | "success";
};

export type EnvironmentDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
  tag: string;
};

export type EnvironmentContact = {
  title: string;
  description: string;
  address: string[];
  email: string;
  phones: string[];
};

export const environmentHero = {
  title: "Environnement",
  description:
    "La Ville de Prilly agit pour la biodiversite, la gestion des eaux, la qualite du cadre de vie, la prevention des especes invasives et la transition energetique.",
  imageSrc: "/images/plan-climat/csm_PlanClimat_Banner_700-220px_96dpi_a08d9703bf.jpg",
  imageAlt: "Vegetation et cadre de vie à Prilly",
  ctas: [
    { label: "Découvrir la biodiversite", href: "/services/environnement/biodiversite" },
    { label: "Voir les regles d'assainissement", href: "/services/environnement/assainissement" },
    { label: "Agir chez soi", href: "/services/environnement/charte-des-jardins" },
  ],
};

export const environmentHubSections: EnvironmentTheme[] = [
  {
    id: "plan-climat",
    title: "Plan climat",
    description: "La vision climatique de Prilly et les objectifs 2030-2050 de la commune.",
    href: "/services/environnement/plan-climat",
    icon: Sparkles,
    label: "Sous-page majeure",
  },
  {
    id: "biodiversite",
    title: "Biodiversite",
    description: "Nature en ville, ruches urbaines, faune du bati et aides pour renforcer le vivant.",
    href: "/services/environnement/biodiversite",
    icon: Trees,
    label: "Nature en ville",
  },
  {
    id: "foret",
    title: "Forêt",
    description: "Forets communales, gestion durable, labels, documents et recommandations en foret.",
    href: "/services/environnement/foret",
    icon: Trees,
    label: "Patrimoine forestier",
  },
  {
    id: "especes-invasives",
    title: "Especes invasives",
    description: "Moustique tigre, frelon asiatique et bons reflexes pour signaler et agir vite.",
    href: "/services/environnement/especes-invasives",
    icon: AlertTriangle,
    label: "Signalement",
  },
  {
    id: "charte-des-jardins",
    title: "Charte des jardins",
    description: "Un parcours simple pour s'engager, appliquer 10 bonnes pratiques et demander une subvention.",
    href: "/services/environnement/charte-des-jardins",
    icon: CheckCircle2,
    label: "Agir chez soi",
  },
  {
    id: "assainissement",
    title: "Assainissement",
    description: "Eaux usees, eaux claires, raccordements, mise en conformite et taxes 2025.",
    href: "/services/environnement/assainissement",
    icon: BadgeInfo,
    label: "Regles techniques",
  },
  {
    id: "air-bruit",
    title: "Air & bruit",
    description: "Qualite de l'air, bruit routier et rayonnement non ionisant, avec ressources utiles.",
    href: "/services/environnement/air-bruit",
    icon: Search,
    label: "Cadre de vie",
  },
  {
    id: "solaire",
    title: "Solaire",
    description: "Photovoltaique, autoconsommation, SI-REN et subvention communale 2026.",
    href: "/services/environnement/solaire",
    icon: Sparkles,
    label: "Projets energetiques",
  },
];

export const environmentActionCards: EnvironmentAction[] = [
  {
    title: "Signaler un moustique tigre",
    description: "Voir les bons gestes, identifier les zones d'eau stagnante et accéder au signalement.",
    href: "/services/environnement/especes-invasives#moustique-tigre",
    label: "Voir la marche a suivre",
    tone: "warning",
  },
  {
    title: "Signaler un frelon asiatique",
    description: "Photographier l'insecte et transmettre la localisation precise au bon moment de l'annee.",
    href: "/services/environnement/especes-invasives#frelon-asiatique",
    label: "Comprendre comment reagir",
    tone: "warning",
  },
  {
    title: "Adherer  à la Charte des Jardins",
    description: "S'engager dans une démarche volontaire, non contractuelle et utile pour la biodiversite.",
    href: "/services/environnement/charte-des-jardins#comment-adherer",
    label: "Voir les etapes",
    tone: "success",
  },
  {
    title: "Demander une subvention",
    description: "Une aide communale de CHF 300 est prevue pour l'intervention d'un ou d'une specialiste.",
    href: "/services/environnement/charte-des-jardins#subvention",
    label: "Verifier les conditions",
    tone: "success",
  },
  {
    title: "Comprendre les taxes eaux 2025",
    description: "Retrouver rapidement les montants applicables aux eaux usees et aux eaux claires.",
    href: "/services/environnement/assainissement#taxes-2025",
    label: "Voir les montants",
  },
];

export const environmentHubDocuments: EnvironmentDocument[] = [
  {
    title: "Plan directeur Nature en Ville",
    description: "Le document de reference pour proteger, valoriser et sensibiliser autour des espaces verts de Prilly.",
    href: "/docs/environnement/DBG-NatureEnVille.pdf",
    label: "Consulter le document",
    tag: "Biodiversite",
  },
  {
    title: "Plan Nature en Ville",
    description: "Le plan graphique qui complete le document directeur et aide a situer les interventions.",
    href: "/docs/environnement/EE_PLAN_NatureEnVille-5000-CHP-151029.pdf",
    label: "Voir le plan",
    tag: "Plan",
  },
  {
    title: "Charte des Jardins",
    description: "La charte morale proposee aux habitantes et habitants pour favoriser un jardin plus vivant.",
    href: "/docs/environnement/charte_des_jardins.pdf",
    label: "Télécharger la charte",
    tag: "Charte",
  },
  {
    title: "Formulaire de subvention",
    description: "Le formulaire communal pour demander l'aide avant le début du projet.",
    href: "/docs/environnement/demande_subvention_charte_des_jardins.pdf",
    label: "Ouvrir le formulaire",
    tag: "Subvention",
  },
  {
    title: "Reglement communal sur l'evacuation et le traitement des eaux",
    description: "Le cadre communal pour les proprietaires et ayants droit de biens-fonds raccordables.",
    href: "/docs/environnement/TRX_REG_Evacuation_Eaux.pdf",
    label: "Consulter le reglement",
    tag: "Assainissement",
  },
  {
    title: "Notice technique evacuation des eaux",
    description: "Le document de reference pour les raccordements privés, les plans et les exigences techniques.",
    href: "/docs/environnement/TRX_Notice_technique_Ev_des_eaux_des_BF_v1.1.pdf",
    label: "Voir la notice",
    tag: "Technique",
  },
  {
    title: "Directive communale sur les taxes 2025",
    description: "Le document qui precise les nouvelles taxes applicables aux eaux usees et aux eaux claires.",
    href: "/docs/environnement/TRX_Directive_communale_taxes_evacuation_des_eaux_2025.pdf",
    label: "Consulter la directive",
    tag: "Taxes",
  },
];

export const environmentMainContact: EnvironmentContact = {
  title: "Service Energie et environnement",
  description: "Le bon point d'entrée pour les questions de durabilite, biodiversite, climat et solaire.",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "energie@prilly.ch",
  phones: ["+41 21 622 73 51", "+41 21 622 73 55"],
};

export const biodiversityPage = {
  hero: {
    title: "Biodiversite",
    description:
      "Espaces verts, nature en ville, ruches urbaines, faune du bati et actions concrètes pour renforcer le vivant à Prilly.",
    imageSrc: "/images/plan-climat/telecharger-2.jpg",
    imageAlt: "Nature et vegetation en ville",
    ctas: [
      { label: "Nature en Ville", href: "#nature-en-ville" },
      { label: "Aides et actions", href: "#aides-actions" },
    ],
  },
  introPoints: [
    "La commune dispose de nombreux espaces verts qui participent  à la qualite de vie et a l'identite du territoire.",
    "Le plan directeur Nature en Ville sert  à la fois d'outil de gestion, de suivi, de recommandations et d'information pour la population.",
    "La logique communale repose sur trois verbes simples: proteger, valoriser et sensibiliser.",
  ],
  communalActions: [
    "Protection et suivi des haies vives, arbres majeurs et continuites ecologiques.",
    "Developpement de toitures vegetalisées, nichoirs, gites et dispositifs favorables  à la faune.",
    "Integration progressive de la biodiversite dans la gestion des espaces publics et du bati.",
  ],
  aids: [
    "Le Fonds pour le developpement durable peut soutenir des actions utiles  à la biodiversite.",
    "La Charte des Jardins et la subvention communale donnent un parcours simple pour agir chez soi.",
    "Les projets vegetaux privés ou collectifs peuvent être mieux prepares avec l'appui d'un ou d'une specialiste.",
  ],
  beeHighlights: [
    "4 colonies sont installées sur la toiture du college de l'Union.",
    "Elles contribuent  à la pollinisation locale et  à la sensibilisation de la population.",
    "Le miel est traditionnellement vendu en automne sur la place du marche.",
  ],
  wingedFauna: [
    "Hirondelles, martinets et chauves-souris font partie de la faune du bati a proteger.",
    "Un inventaire peut être mene entre mai et septembre pour identifier les présences et les besoins.",
    "La pose de nichoirs ou de gites peut être envisagée selon les situations.",
    "L'optimisation de l'eclairage public aide aussi a reduire les perturbations nocturnes.",
  ],
  projects: [
    "Renforcer la couverture arborée et les continuites ecologiques.",
    "Poursuivre la vegetalisation des espaces publics et du bati communal.",
    "Mieux relier biodiversite, climat, gestion des eaux et cadre de vie.",
  ],
  documents: [
    {
      title: "Nature en Ville - document directeur",
      description: "Le document principal qui structure la gestion durable des espaces verts de Prilly.",
      href: "/docs/environnement/DBG-NatureEnVille.pdf",
      label: "Consulter le document",
      tag: "Document directeur",
    },
    {
      title: "Nature en Ville - plan",
      description: "Le plan qui permet de visualiser les secteurs, enjeux et mesures du dispositif communal.",
      href: "/docs/environnement/EE_PLAN_NatureEnVille-5000-CHP-151029.pdf",
      label: "Voir le plan",
      tag: "Plan",
    },
  ] as EnvironmentDocument[],
};

export const invasiveSpeciesPage = {
  hero: {
    title: "Especes invasives",
    description:
      "Identifier, signaler et adopter les bons gestes face aux especes exotiques envahissantes qui touchent la biodiversite, la sante ou l'economie locale.",
    imageSrc: "/images/environnement/frelon-asiatique.jpg",
    imageAlt: "Comparatif frelon europeen et frelon asiatique",
    ctas: [
      { label: "Moustique tigre", href: "#moustique-tigre" },
      { label: "Frelon asiatique", href: "#frelon-asiatique" },
    ],
  },
  overview: [
    "Les especes exotiques envahissantes peuvent être vegetales ou animales.",
    "Leurs impacts sont ecologiques, economiques et parfois sanitaires.",
    "L'identification et l'annonce rapide sont essentielles pour utiliser les bons moyens de lutte.",
  ],
  mosquito: {
    facts: [
      "Le moustique tigre est present dans le canton depuis 2022.",
      "Il peut transmettre la dengue, le zika et le chikungunya, meme si le risque reste encore limite.",
      "La strategie actuelle consiste a maintenir sa population le plus bas possible.",
    ],
    gestures: [
      "Vider au moins une fois par semaine les recipients ouverts.",
      "Retourner les pots ou recipients inutilises.",
      "Fermer hermetiquement les reservoirs.",
      "Ne pas laisser dehors pneus, baches ou jouets pouvant retenir de l'eau.",
      "Mettre du sable si cela permet d'eviter l'eau stagnante.",
      "Signaler tout moustique suspect vi à la plateforme dediee.",
    ],
    videoSrc: "/videos/environnement/moustique-tigre.mp4",
    flyerHref: "/docs/environnement/FLYER_MOUSTIQUE_TIGRE_2025.pdf",
  },
  hornet: {
    facts: [
      "Le frelon asiatique menace les abeilles et plus largement la biodiversite.",
      "Il se distingue du frelon europeen notamment par un thorax plus sombre et des pattes jaunes.",
      "Entre mars et fin septembre, une annonce rapide peut encore permettre une action utile sur les colonies.",
    ],
    reaction: [
      "Photographier l'insecte si possible.",
      "Transmettre la photo et la localisation precise sur frelonasiatique.ch.",
      "Apres octobre, les observations ne permettent generalement plus d'action utile sur les colonies.",
      "Les nids abandonnes ne sont pas reutilises l'année suivante.",
    ],
  },
};

export const gardenCharterPage = {
  hero: {
    title: "Charte des jardins",
    description:
      "Une démarche simple pour favoriser la biodiversite dans les jardins privés, avec bonnes pratiques, adhesion et subvention communale.",
    imageSrc: "/images/plan-climat/telecharger-2.jpg",
    imageAlt: "Vegetation et biodiversite de proximite",
    ctas: [
      { label: "Voir les bonnes pratiques", href: "#bonnes-pratiques" },
      { label: "Demander une subvention", href: "#subvention" },
    ],
  },
  why: [
    "La charte repose sur un engagement moral et volontaire, non contractuel.",
    "Elle aide a transformer les jardins privés en relais utiles pour la biodiversite locale.",
    "Un embleme en bois est offert par la commune aux personnes adherentes.",
  ],
  goodPractices: [
    "Laisser pousser des coins de pelouse.",
    "Favoriser les arbustes indigenes.",
    "Creer des abris pour la faune.",
    "Maintenir des passages entre jardins.",
    "Renoncer aux herbicides et pesticides.",
    "Limiter l'eclairage nocturne.",
    "Eviter les plantes exotiques envahissantes.",
    "Prevoir une rampe de sortie pour la piscine.",
    "Conserver des zones de terre nue ou de bois mort lorsque c'est pertinent.",
    "Diversifier les plantations et les ressources pour les pollinisateurs.",
  ],
  steps: [
    "Lire la charte et verifier qu'elle correspond a votre demarche.",
    "Remplir le formulaire d'adhesion individuelle.",
    "Transmettre votre demande  à la commune.",
    "Mettre en place les bonnes pratiques dans la duree.",
  ],
  subvention: {
    amount: "CHF 300",
    details: [
      "La subvention finance la venue d'un ou d'une specialiste.",
      "La demande doit être transmise avant le début du projet.",
      "Aucun subside n'est accorde si le projet a déjà commence.",
      "Les documents a joindre doivent être prepares au moment de la demande.",
      "L'embleme de la charte est offert aux personnes qui s'engagent.",
    ],
  },
  documents: [
    {
      title: "Charte des Jardins",
      description: "Le texte de reference qui presente l'esprit de la démarche et les engagements proposes.",
      href: "/docs/environnement/charte_des_jardins.pdf",
      label: "Consulter la charte",
      tag: "Charte",
    },
    {
      title: "10 bonnes pratiques",
      description: "La synthese pratique a garder sous la main pour transformer son jardin pas a pas.",
      href: "/docs/environnement/10_bonnes_pratiques.pdf",
      label: "Télécharger la fiche",
      tag: "Pratiques",
    },
    {
      title: "Formulaire d'adhesion",
      description: "Le document pour adherer individuellement  à la Charte des Jardins.",
      href: "/docs/environnement/adhesion_charte_des_jardins.pdf",
      label: "Ouvrir le formulaire",
      tag: "Adhesion",
    },
    {
      title: "Formulaire de subvention",
      description: "Le formulaire a transmettre  à la commune avant le demarrage du projet.",
      href: "/docs/environnement/demande_subvention_charte_des_jardins.pdf",
      label: "Ouvrir le formulaire",
      tag: "Subvention",
    },
  ] as EnvironmentDocument[],
};

export const drainagePage = {
  hero: {
    title: "Assainissement",
    description:
      "Comprendre les eaux usees et les eaux claires, preparer un raccordement et retrouver rapidement les taxes et documents utiles.",
    imageSrc: "/images/environnement/taxes-eaux-2025.jpg",
    imageAlt: "Synthese des taxes 2025 pour les eaux usees et les eaux claires",
    ctas: [
      { label: "Comprendre les taxes 2025", href: "#taxes-2025" },
      { label: "Voir les documents techniques", href: "#documents-techniques" },
    ],
  },
  overview: [
    "Le reseau d'assainissement communal distingue les eaux usees et les eaux claires.",
    "Le respect des regles techniques et du reglement communal est essentiel pour le bon fonctionnement du reseau.",
    "Les proprietaires et ayants droit de biens-fonds raccordables sont concernes par ces obligations.",
  ],
  privateInstallations: [
    "Les installations privées doivent être mises en conformite lorsque la situation l'exige.",
    "Il faut contacter la commune avant les travaux ou avant de modifier les evacuations.",
    "Les raccordements privés sont soumis a des prescriptions techniques precises et a des documents a remettre.",
  ],
  clearWater: [
    "Les eaux claires doivent d'abord être infiltrées si les conditions hydrogologiques le permettent et avec autorisation.",
    "Si l'infiltration n'est pas possible, l'evacuation doit suivre le PGEE et peut necessiter une retention.",
    "Les eaux claires ne doivent pas être evacuees comme des eaux usees.",
  ],
  networkConnection: [
    "Un plan et des informations techniques doivent être remis  à la commune selon le projet.",
    "Les travaux privés de raccordement doivent être coordonnes avec les services communaux.",
    "Le deversement de substances nocives dans le reseau est interdit.",
  ],
  taxes: [
    { title: "Taxe initiale de raccordement - eaux usees", amount: "CHF 120 / UR", note: "Unite de raccordement" },
    { title: "Taxe annuelle d'utilisation - eaux usees", amount: "CHF 100 + CHF 10 / mm", note: "Par compteur et selon le diametre" },
    { title: "Taxe annuelle de traitement - eaux usees", amount: "CHF 2 / m3", note: "Par m3 d'eau consommee" },
    { title: "Taxe initiale - eaux claires", amount: "CHF 70 / m2", note: "Surface impermeable" },
    { title: "Taxe annuelle d'utilisation - eaux claires", amount: "CHF 2 / m2", note: "Batis raccordes" },
  ],
  rules: [
    "L'accès au reseau et son usage sont soumis au respect du reglement communal.",
    "Les enfants, riverains, proprietaires et entreprises doivent respecter les consignes de securite autour des ouvrages.",
    "Les installations privés ne doivent pas degrader ou polluer les reseaux communaux.",
    "Les billets, taxes et conditions administratives suivent les regles communales et les directives en vigueur.",
  ],
  documents: [
    {
      title: "Reglement communal sur l'evacuation et le traitement des eaux",
      description: "Le cadre reglementaire communal pour les obligations, interdictions et taxes liees au reseau.",
      href: "/docs/environnement/TRX_REG_Evacuation_Eaux.pdf",
      label: "Consulter le reglement",
      tag: "Reglement",
    },
    {
      title: "Notice generale retention",
      description: "La notice utile pour comprendre les exigences de retention des eaux claires selon les projets.",
      href: "/docs/environnement/TRX_Notice_generale_Retention_v5.pdf",
      label: "Voir la notice",
      tag: "Retention",
    },
    {
      title: "Notice technique evacuation des eaux des biens-fonds",
      description: "Le document principal pour les raccordements privés et les pieces a fournir.",
      href: "/docs/environnement/TRX_Notice_technique_Ev_des_eaux_des_BF_v1.1.pdf",
      label: "Consulter la notice",
      tag: "Technique",
    },
    {
      title: "Fiche cantonale evacuation des eaux",
      description: "Un complement utile pour la protection de l'homme et de l'environnement dans les projets.",
      href: "/docs/environnement/19.09.01_Fiche_application_protection_homme_environnement_evacuation_eaux.pdf",
      label: "Ouvrir la fiche",
      tag: "Canton",
    },
    {
      title: "Directive communale taxes 2025",
      description: "Le document de reference pour les nouvelles taxes applicables des 2025.",
      href: "/docs/environnement/TRX_Directive_communale_taxes_evacuation_des_eaux_2025.pdf",
      label: "Voir la directive",
      tag: "Taxes",
    },
  ] as EnvironmentDocument[],
};

export const airNoisePage = {
  hero: {
    title: "Air & bruit",
    description:
      "Des repères simples pour comprendre la qualite de l'air, le bruit routier et le rayonnement non ionisant dans le cadre de vie communal.",
    imageSrc: "/images/plan-climat/csm_PlanClimat_Banner_700-220px_96dpi_a08d9703bf.jpg",
    imageAlt: "Cadre urbain et qualite de vie",
    ctas: [
      { label: "Voir les ressources", href: "#ressources" },
      { label: "Contacter le service", href: "#contact" },
    ],
  },
  air: [
    "La qualite de l'air est un enjeu de sante publique et de cadre de vie.",
    "Le plan de mesures OPair Lausanne-Morges reste une reference utile pour comprendre les actions sur les emissions.",
    "Les sujets air, chaleur urbaine et mobilite se croisent avec le Plan climat communal.",
  ],
  noise: [
    "Le bruit routier reste une source importante de nuisance dans les zones urbaines.",
    "Les mesures d'amenagement, de vitesse et d'organisation de l'espace public peuvent contribuer a l'attenuer.",
  ],
  radiation: [
    "Le rayonnement non ionisant et l'electrosmog suscitent des questions fréquentes de la population.",
    "Une brochure d'information permet de retrouver des repères simples et des precautions de base.",
    "La carte nationale des antennes aide a visualiser le contexte de maniere plus large.",
  ],
  resources: [
    {
      title: "Brochure electrosmog",
      description: "Une ressource pratique pour comprendre les expositions et les gestes de prudence.",
      href: "/docs/environnement/EE_BROCHURE_ELECTROSMOG.pdf",
      label: "Consulter la brochure",
      tag: "Rayonnement",
    },
    {
      title: "Carte nationale des antennes",
      description: "Accéder  à la cartographie de reference pour visualiser les installations a l'echelle nationale.",
      href: "https://map.geo.admin.ch/",
      label: "Ouvrir la carte",
      tag: "Carte",
    },
  ] as EnvironmentDocument[],
};

export const solarPage = {
  hero: {
    title: "Solaire",
    description:
      "Une page claire pour comprendre l'offre photovoltaïque à Prilly, le partenariat avec SI-REN et les avantages pour les proprietaires et locataires.",
    imageSrc: "/images/plan-climat/csm_PlanClimat_Banner_700-220px_96dpi_a08d9703bf.jpg",
    imageAlt: "Toitures et transition energetique",
    ctas: [
      { label: "Voir la subvention 2026", href: "#incitations" },
      { label: "Comprendre l'offre SI-REN", href: "#offre-si-ren" },
    ],
  },
  reasons: [
    "Le photovoltaïque permet de produire localement une part de l'electricite consommee.",
    "Les immeubles locatifs avec potentiel en toiture sont des cibles importantes pour l'action communale.",
    "Le montage propose vise a reduire les Démarches et les risques financiers pour les proprietaires.",
  ],
  offer: [
    "SI-REN peut intervenir comme tiers investisseur.",
    "Le proprietaire met la toiture a disposition sans devoir porter seul l'investissement.",
    "Le montage peut generer un revenu par location de toiture et des economies sur les communs.",
    "Les locataires peuvent aussi beneficier d'un avantage financier via l'autoconsommation.",
  ],
  incentive: {
    amount: "CHF 10'000",
    title: "Subvention communale forfaitaire 2026",
    points: [
      "Aide forfaitaire communale pour accompagner les projets 2026.",
      "Moins de Démarches et moins de risques financiers grace au tiers investisseur.",
      "Le dispositif peut être combine avec une logique de communaute d'autoconsommation.",
    ],
  },
  event: [
    "Séance d'information publique le mardi 17 mars 2026 a 19h.",
    "Lieu: Grande Salle.",
    "Objectif: expliquer l'offre, les benefices et les prochaines etapes pour les proprietaires.",
  ],
};

export const environmentContacts = {
  main: environmentMainContact,
  biodiversity: environmentMainContact,
  invasive: {
    title: "Signalements et prevention",
    description: "Pour orienter un signalement ou verifier le bon canal avant envoi.",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "energie@prilly.ch",
    phones: ["+41 21 622 73 51"],
  } satisfies EnvironmentContact,
  gardens: environmentMainContact,
  drainage: {
    title: "Assainissement et domaines",
    description: "Le bon point d'entrée pour un projet de raccordement, une question technique ou un suivi de dossier.",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    email: "domaines@prilly.ch",
    phones: ["+41 21 622 73 55", "+41 21 622 75 80"],
  } satisfies EnvironmentContact,
  airNoise: environmentMainContact,
  solar: environmentMainContact,
};

export const environmentParentLinks = [
  { label: "Environnement", href: "/services/environnement" },
  { label: "Plan climat", href: "/services/environnement/plan-climat" },
  { label: "Biodiversite", href: "/services/environnement/biodiversite" },
  { label: "Forêt", href: "/services/environnement/foret" },
  { label: "Especes invasives", href: "/services/environnement/especes-invasives" },
  { label: "Charte des jardins", href: "/services/environnement/charte-des-jardins" },
  { label: "Assainissement", href: "/services/environnement/assainissement" },
  { label: "Air & bruit", href: "/services/environnement/air-bruit" },
  { label: "Solaire", href: "/services/environnement/solaire" },
];

export const biodiversityHighlights = [
  {
    title: "Nature en Ville",
    description: "Un plan directeur qui structure la gestion des espaces verts, leur suivi et les recommandations futures.",
    icon: Trees,
  },
  {
    title: "Ruches urbaines",
    description: "Quatre colonies sur la toiture du college de l'Union participent  à la pollinisation locale.",
    icon: Sparkles,
  },
  {
    title: "Faune du bati",
    description: "Hirondelles, martinets et chauves-souris peuvent être mieux proteges grace aux inventaires et aux nichoirs.",
    icon: ShieldCheck,
  },
];

export const invasiveAlertCards = [
  {
    title: "Moustique tigre",
    description: "Le bon reflexe consiste a supprimer l'eau stagnante et a signaler les cas suspects.",
    icon: AlertTriangle,
  },
  {
    title: "Frelon asiatique",
    description: "Une photo et une localisation precise sont utiles entre mars et fin septembre.",
    icon: ShieldCheck,
  },
  {
    title: "Ne pas improviser",
    description: "L'identification et les plateformes officielles restent prioritaires avant toute intervention.",
    icon: FileText,
  },
];

export const gardenNoticeCards = [
  {
    title: "Charte morale",
    description: "La démarche repose sur un engagement volontaire, non contractuel et progressif.",
    icon: CheckCircle2,
  },
  {
    title: "Subvention de CHF 300",
    description: "Elle soutient l'intervention d'un ou d'une specialiste, avant le début du projet.",
    icon: Sparkles,
  },
  {
    title: "Embleme offert",
    description: "La commune remet un embleme en bois pour valoriser l'engagement pris.",
    icon: Trees,
  },
];

export const drainageQuickFacts = [
  {
    title: "Eaux usees",
    description: "Elles sont a evacuer vers le reseau approprie et soumises a des taxes distinctes.",
    icon: BadgeInfo,
  },
  {
    title: "Eaux claires",
    description: "L'infiltration est privilegiee si les conditions hydrogologiques le permettent.",
    icon: CalendarDays,
  },
  {
    title: "Avant travaux",
    description: "Contacter la commune est indispensable avant tout projet de raccordement ou de modification.",
    icon: FileText,
  },
];
