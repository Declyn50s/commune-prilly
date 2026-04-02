import {
  ArrowRight,
  CalendarDays,
  Home,
  MapPinned,
  Search,
} from "lucide-react";
import type {
  CollectionPoint,
  CollectionSummaryItem,
  TaxRelief,
  WasteContact,
  WasteDocument,
  WasteNotice,
  WastePathItem,
  WasteQuickaccèssItem,
  WasteTypeItem,
} from "@/features/dechets/types";

export const wasteQuickaccèss: WasteQuickaccèssItem[] = [
  { title: "Calendrier de collecte", description: "Les jours de passage 2026 par type de déchet et par secteur.", href: "/demarches/dechets/calendrier-de-collecte", icon: CalendarDays, tone: "red" },
  { title: "Où jeter mon déchet ?", description: "Le guide rapide pour savoir quoi déposer, où et dans quelles conditions.", href: "/demarches/dechets/tri-des-dechets", icon: Search, tone: "green" },
  { title: "Déchèteries et points de collecte", description: "Déchèterie fixe, mobiles et points de proximité à Prilly.", href: "/demarches/dechets/decheteries-et-points-de-collecte", icon: MapPinned, tone: "coal" },
  { title: "Conteneurs", description: "Couleurs officielles, règles de sortie et obligations pour les immeubles.", href: "/demarches/dechets/conteneurs", icon: Home, tone: "yellow" },
  { title: "Taxes déchets", description: "Taxe au sac, taxe forfaitaire et allégements en un seul endroit.", href: "/demarches/dechets/taxes-dechets", icon: ArrowRight, tone: "red" },
  { title: "Encombrants et ramassage à domicile", description: "Le service sur rendez-vous pour les objets trop volumineux.", href: "/demarches/dechets/encombrants", icon: Home, tone: "coal" },
];

export const wastePaths: WastePathItem[] = [
  { title: "A votre porte", description: "Les collectes régulières à domicile pour les déchets les plus fréquents.", examples: ["Ordures ménagères", "Biodéchets", "Papier et carton", "Verre"], href: "/demarches/dechets/calendrier-de-collecte", tone: "green" },
  { title: "Retour en magasin", description: "La reprise en commerce reste la solution à privilégier pour plusieurs matières.", examples: ["Piles", "PET", "Ampoules", "Appareils électriques"], href: "/demarches/dechets/tri-des-dechets", tone: "yellow" },
  { title: "Déchèterie fixe ou mobile", description: "Pour les volumes, matières spécifiques et déchets qui ne se jettent pas à domicile.", examples: ["Encombrants", "Bois", "Métal", "Huiles", "Pneus", "Peinture"], href: "/demarches/dechets/decheteries-et-points-de-collecte", tone: "red" },
  { title: "Points de collecte", description: "Des points de proximité pour certaines matières ciblées.", examples: ["Vêtements", "Aluminium", "Fer-blanc"], href: "/demarches/dechets/decheteries-et-points-de-collecte", tone: "coal" },
];

export const wasteCollectionSummary: CollectionSummaryItem[] = [
  { title: "Ordures ménagères nord", schedule: "Lundi", detail: "Secteur nord, route de Cossonay numéros pairs." },
  { title: "Ordures ménagères sud", schedule: "Mardi", detail: "Secteur sud, route de Cossonay numéros impairs." },
  { title: "Papier et carton", schedule: "Mercredi", detail: "Collecte hebdomadaire sur l'ensemble de la commune." },
  { title: "Verre", schedule: "Jeudi", detail: "Deux fois par mois selon le calendrier 2026." },
  { title: "Biodéchets nord", schedule: "Jeudi", detail: "Bacs bruns et déchets compostables du secteur nord." },
  { title: "Biodéchets sud", schedule: "Vendredi", detail: "Bacs bruns et déchets compostables du secteur sud." },
];

export const wasteSpecialCollections: WasteNotice[] = [
  { title: "Déchèteries mobiles", description: "Présence sur les secteurs Nord, Centre et Sud selon les périodes du calendrier. Pas de passage en juillet et août." },
  { title: "Collecte des sapins de Noël", description: "Un passage spécifique est organisé après les fêtes. Les consignes exactes figurent dans le calendrier 2026." },
  { title: "Vide-grenier", description: "Samedi 3 octobre 2026 au Château de Prilly." },
  { title: "Jours fériés", description: "En cas de jour férié, la collecte peut être décalée. Vérifiez toujours le PDF annuel avant de sortir votre conteneur." },
];

export const wasteDocuments: WasteDocument[] = [
  { title: "Calendrier info-déchets 2026 complet", description: "Le document de référence avec collectes, consignes de tri, déchèteries et contacts utiles.", href: "/docs/dechets/Info-dechets_2026_complet.pdf", label: "Télécharger le calendrier complet" },
  { title: "Calendrier 2026 secteurs Sud et Nord", description: "Version pratique pour repérer rapidement votre secteur et les jours de ramassage.", href: "/docs/dechets/Info-dechets_2026_secteurs_SUD_et_NORD.pdf", label: "Voir les secteurs" },
  { title: "Règlement communal sur la gestion des déchets", description: "Le cadre communal de référence pour les obligations, collectes, taxes et sanctions.", href: "/docs/dechets/EE_REGLEMENT_COMMUNAL_SUR_LA_GESTION_DES_DECHETS.pdf", label: "Consulter le règlement" },
  { title: "Directive pour les conteneurs", description: "Les couleurs officielles, volumes admis et règles pratiques pour les propriétaires.", href: "/docs/dechets/EE_DIRECTIVE_POUR_LES_CONTENEURS.pdf", label: "Consulter la directive" },
  { title: "Directive sur la taxe forfaitaire", description: "Le document utile pour comprendre la taxe forfaitaire, son montant et ses modalités.", href: "/docs/dechets/Directive_communale_taxe_dechets_2024.pdf", label: "Voir la directive" },
  { title: "Directive communale sur les prestations particulières", description: "Les conditions liées aux prestations complémentaires comme les encombrants ou cas spéciaux.", href: "/docs/dechets/Directive_communale_sur_les_prestations_particulieres_en_matiere_de_gestion_des_dechets.pdf", label: "Voir les prestations particulières" },
];

export const wasteContacts: WasteContact[] = [
  {
    title: "Infoline déchets",
    description: "Le point d'entrée à privilégier pour les questions de tri, de collecte, de conteneurs et de taxes.",
    phone: "+41 21 622 74 30",
    email: "energie.environnement@prilly.ch",
    hours: ["Du lundi au jeudi, 8h30-11h30 et 14h-16h30", "Vendredi, 8h30-11h30"],
    links: [{ label: "Recycling Map", href: "https://www.recycling-map.ch/fr/" }, { label: "Page déchets de la Ville", href: "/demarches/dechets" }],
  },
  {
    title: "Taxe déchets",
    description: "Pour les questions liées à la taxe forfaitaire, aux allégements et aux remboursements.",
    email: "taxe.dechets@prilly.ch",
    phone: "+41 21 622 74 39",
    hours: ["Réponse par e-mail ou téléphone pendant les horaires du service."],
  },
];

export const decheterieFixedSite = {
  title: "Déchèterie intercommunale de Malley",
  address: "Ch. de l'Usine-à-Gaz 20, 1020 Renens",
  hours: ["Lundi-vendredi: 8h-18h", "Samedi: 8h-17h", "Fermée les jours fériés"],
  description: "La déchèterie fixe accueille les déchets ménagers recyclables ou volumineux et constitue la bonne solution en cas de déménagement.",
  highlights: ["Accès motorisé autorisé", "Carte déchèterie nécessaire", "Espace Recup'Actions pour favoriser la seconde vie"],
  ctaLabel: "Choisir la meilleure heure",
  ctaHref: "/docs/dechets/Recyclons_Fute__choisissez_votre_heure___1.pdf",
};

export const decheterieMobileSites = [
  { title: "Secteur Nord", address: "Avenue de Mont-Goulin", hours: ["Samedi: 9h-12h", "Mercredi, nov. à fév.: 15h-18h", "Mercredi, mars à oct.: 16h-19h"] },
  { title: "Secteur Centre", address: "Place du Marché", hours: ["Samedi: 9h-12h", "Mercredi, nov. à fév.: 15h-18h", "Mercredi, mars à oct.: 16h-19h"] },
  { title: "Secteur Sud", address: "Avenue de la Rochelle", hours: ["Samedi: 9h-12h", "Mercredi, nov. à fév.: 15h-18h", "Mercredi, mars à oct.: 16h-19h"] },
];

export const decheterieRules: WasteNotice[] = [
  { title: "Mobilité douce uniquement", description: "Les déchèteries mobiles sont prévues pour les personnes venant à pied ou en mobilité douce. Les véhicules motorisés sont redirigés vers Malley." },
  { title: "Carte et volume limité", description: "Carte déchèterie obligatoire et maximum 1 m3 par ménage." },
  { title: "Pas pour un déménagement", description: "Les mobiles ne servent pas à vider une cave ou un appartement. En cas de déménagement, utilisez la déchèterie de Malley." },
  { title: "Pas de dépôt avant l'ouverture", description: "Tout dépôt anticipé est interdit et peut faire l'objet d'une dénonciation." },
];

export const collectionPoints: CollectionPoint[] = [
  { title: "Avenue de Mont-Goulin", address: "Point de collecte vêtements et alu/fer-blanc", note: "Secteur nord" },
  { title: "Avenue de Chantegrive", address: "Point de collecte vêtements et alu/fer-blanc", note: "Proximité quartier résidentiel" },
  { title: "Avenue du Château", address: "Point de collecte vêtements et alu/fer-blanc", note: "Axe central" },
  { title: "Parc de la Suettaz", address: "Point de collecte vêtements et alu/fer-blanc", note: "Espace public de proximité" },
  { title: "Pré Bournoud", address: "Point de collecte vêtements et alu/fer-blanc", note: "Secteur centre" },
  { title: "Rue des Métiers", address: "Point de collecte vêtements et alu/fer-blanc", note: "Axe pratique pour les dépôts ciblés" },
  { title: "Avenue de la Rochelle", address: "Point de collecte vêtements et alu/fer-blanc", note: "Secteur sud" },
  { title: "Chemin de Bel-Orne", address: "Point de collecte vêtements et alu/fer-blanc", note: "Secteur sud-est" },
];

export const wasteTypes: WasteTypeItem[] = [
  { title: "Aluminium et fer-blanc", what: "Boîtes de conserve, canettes, barquettes alu propres.", where: "Points de collecte dédiés et déchèterie.", note: "Videz et rincez rapidement avant dépôt.", keywords: ["aluminium", "alu", "fer-blanc", "canette", "boite de conserve"] },
  { title: "Appareils électriques", what: "Petit électroménager, électronique, câbles, gros appareils.", where: "Retour en magasin à privilégier, sinon déchèterie fixe.", note: "La reprise par les commerces reste la voie recommandée.", keywords: ["appareils", "electrique", "électrique", "électronique", "cable", "ordinateur"] },
  { title: "Biodéchets", what: "Épluchures, marc de café, restes végétaux ménagers.", where: "Collecte à domicile dans le conteneur brun.", note: "Respectez le jour de collecte selon votre secteur.", keywords: ["biodéchets", "compost", "épluchures", "déchets verts"] },
  { title: "Bois", what: "Petits meubles démontés, planches, chutes de bois.", where: "Déchèterie fixe ou mobile selon volume.", note: "Le bois traité ou très volumineux est à orienter vers Malley.", keywords: ["bois", "planche", "meuble"] },
  { title: "Bouteilles plastiques hors PET", what: "Bidons et flacons plastiques ménagers selon consignes du distributeur.", where: "Retour en magasin ou filière spécialisée.", note: "Ne pas mélanger avec le PET dans les bacs de collecte.", keywords: ["plastique", "bouteille plastique", "flacon", "hors pet"] },
  { title: "Briques à boissons", what: "Emballages type Tetra Pak.", where: "Déchèterie fixe ou filière spécifique selon les points disponibles.", note: "Vérifiez la filière active avant dépôt.", keywords: ["briques", "tetra", "boisson"] },
  { title: "Capsules café", what: "Capsules aluminium ou plastique.", where: "Retour en magasin recommandé ou point dédié du fabricant.", note: "Le retour chez le distributeur reste la solution la plus simple.", keywords: ["capsules", "café", "nespresso"] },
  { title: "Cartouches d'encre", what: "Cartouches d'imprimante usagées.", where: "Retour en magasin ou filière spécialisée.", note: "Evitez la poubelle ordinaire.", keywords: ["cartouches", "encre", "imprimante"] },
  { title: "Encombrants", what: "Objets volumineux qui n'entrent pas dans les conteneurs.", where: "Déchèterie de Malley ou collecte à domicile sur rendez-vous.", note: "Le service à domicile est limité à 3 objets et facturé CHF 50.", keywords: ["encombrants", "meuble", "canape", "matelas"] },
  { title: "Déchets spéciaux", what: "Peintures, solvants, produits chimiques ménagers.", where: "Déchèterie fixe ou retour en magasin si possible.", note: "Ne jamais jeter avec les ordures ménagères.", keywords: ["spéciaux", "peinture", "solvant", "chimique"] },
  { title: "Habits", what: "Vêtements, linge et chaussures réutilisables.", where: "Points de collecte dédiés.", note: "Privilégiez les sacs fermés et des textiles propres.", keywords: ["habits", "vêtements", "linge", "chaussures"] },
  { title: "Huiles usées", what: "Huiles alimentaires et huiles minérales.", where: "Déchèterie fixe ou mobile selon matière.", note: "Conservez-les dans un récipient fermé avant dépôt.", keywords: ["huile", "huiles usées", "friture", "moteur"] },
  { title: "Ordures ménagères", what: "Déchets résiduels non recyclables.", where: "Collecte à domicile avec sacs blancs taxés et conteneur vert.", note: "Les sacs noirs et autres sacs non taxés sont interdits.", keywords: ["ordures", "ménagères", "sac taxé", "poubelle"] },
  { title: "Papier et carton", what: "Journaux, cartons pliés, emballages en papier propres.", where: "Collecte à domicile avec conteneur gris.", note: "Les gros cartons doivent être amenés à la déchèterie.", keywords: ["papier", "carton", "journaux"] },
  { title: "PET", what: "Bouteilles à boissons en PET.", where: "Retour en magasin à privilégier.", note: "C'est la filière de reprise recommandée par la commune.", keywords: ["pet", "bouteille pet", "plastique boissons"] },
  { title: "Piles", what: "Piles et batteries ménagères.", where: "Retour en magasin impératif ou très fortement conseillé.", note: "Ne pas déposer dans les ordures ménagères.", keywords: ["piles", "batterie"] },
  { title: "Plastiques durs", what: "Objets plastiques rigides du ménage.", where: "Déchèterie fixe ou mobile selon le type.", note: "Tous les plastiques ne vont pas dans la même filière.", keywords: ["plastiques durs", "plastique dur"] },
  { title: "Plastiques souples", what: "Films, sachets et plastiques fins.", where: "Filière commerciale spécifique si disponible, sinon selon consignes du calendrier.", note: "Vérifiez la filière avant dépôt.", keywords: ["plastiques souples", "film plastique", "sachet"] },
  { title: "Pneus", what: "Pneus de voiture et deux-roues selon conditions de reprise.", where: "Déchèterie fixe ou retour chez le professionnel.", note: "Le retour chez le vendeur ou garagiste reste à privilégier.", keywords: ["pneus", "pneu"] },
  { title: "Sagex", what: "Polystyrène expansé propre.", where: "Déchèterie fixe ou mobile.", note: "A déposer séparément des autres déchets.", keywords: ["sagex", "polystyrène"] },
  { title: "Verre", what: "Bocaux et bouteilles en verre sans bouchon ni capsule.", where: "Collecte à domicile avec conteneur bleu.", note: "Dépôt interdit après 22h et les jours fériés.", keywords: ["verre", "bocaux", "bouteilles"] },
];

export const wasteContainerColors = [
  { title: "Vert", subtitle: "Ordures ménagères", detail: "Conteneur pour les sacs blancs taxés." },
  { title: "Brun", subtitle: "Biodéchets", detail: "Déchets compostables et déchets de cuisine admis." },
  { title: "Gris", subtitle: "Papier et carton", detail: "Papiers et cartons propres, cartons volumineux exclus." },
  { title: "Bleu", subtitle: "Verre", detail: "Bouteilles et bocaux, sans dépôt après 22h." },
];

export const wasteContainerRules: WasteNotice[] = [
  { title: "Pictogramme obligatoire", description: "Chaque conteneur doit afficher le pictogramme correspondant à la matière collectée." },
  { title: "Volumes admis", description: "Les conteneurs compatibles avec le système communal sont prévus de 140 à 770 litres." },
  { title: "Sortie des bacs", description: "Les conteneurs peuvent être sortis au plus tôt à 20h la veille et doivent être rentrés après le passage du camion." },
  { title: "Verre et tranquillité publique", description: "Le dépôt de verre est interdit après 22h et les jours fériés." },
  { title: "Entretien et accèssibilité", description: "Le propriétaire doit veiller à l'entretien, à l'accèssibilité et à la compatibilité du point de présentation." },
  { title: "Domaine public", description: "Le stationnement permanent des conteneurs sur le domaine public n'est pas admis." },
];

export const ownerRules: WasteNotice[] = [
  { title: "Installer le bon équipement", description: "Prévoir des conteneurs conformes, suffisamment dimensionnés et facilement accèssibles pour le ramassage." },
  { title: "Informer les occupants", description: "Les consignes de tri et les jours de sortie doivent être clairement visibles dans l'immeuble." },
  { title: "Gérer les cas particuliers", description: "Les gros cartons, déchets spéciaux et dépôts non conformes doivent être réorientés vers la bonne filière." },
];

export const taxSystems = [
  { title: "Taxe au sac", description: "Les déchets résiduels sont éliminés avec des sacs blancs taxés obligatoires.", details: ["Formats: 17 L, 35 L, 60 L et 110 L", "Sacs noirs et sacs non taxés interdits", "Concerne les ordures ménagères"] },
  { title: "Taxe forfaitaire", description: "Une taxe annuelle complète le financement du service communal.", details: ["Due dès 18 ans", "Due aussi pour un domicile secondaire", "Montant de référence au 1er janvier 2024: CHF 66"] },
];

export const taxReliefs: TaxRelief[] = [
  { title: "Habitants", description: "Les étudiants et apprentis jusqu'à 25 ans peuvent demander un allégement sur justificatif.", note: "D'autres demandes peuvent être examinées selon la situation.", tone: "white" },
  { title: "Familles", description: " à la naissance, la commune octroie 80 sacs de 35 L ou 160 sacs de 17 L.", note: "Le courrier d'information existe en plusieurs langues.", tone: "yellow" },
  { title: "Situations médicales", description: "Les personnes concernées par l'incontinence peuvent obtenir un remboursement annuel de CHF 70.", note: "Des pièces justificatives sont demandées.", tone: "green" },
  { title: "Entreprises et associations", description: "Des demandes d'exemption ou d'ajustement peuvent être examinées selon le type d'activité.", note: "Le service taxe déchets peut orienter vers la bonne démarche.", tone: "coal" },
];

export const enterpriseWasteRules = [
  { title: "Petites entreprises", description: "Si la quantité de déchets produite reste comparable à celle d'un ménage, l'utilisation des sacs taxés et la collecte porte-à-porte peuvent convenir." },
  { title: "Autres entreprises", description: "Les entreprises générant davantage de déchets doivent organiser une élimination autonome vià une filière ou un prestataire spécialisé." },
  { title: "Taxe forfaitaire entreprise", description: "Montant de référence au 1er janvier 2024: CHF 100, avec prorata temporis si l'activité débute ou cesse en cours d'année." },
  { title: "Déchèterie des ménages", description: "Les entreprises n'utilisent pas la déchèterie des ménages et doivent passer par des filières agréées." },
];

export const encombrantsInfo = {
  conditions: ["Collecte à domicile sur rendez-vous", "CHF 50 par enlèvement", "Maximum 3 objets", "Pas de prestation en juillet et août", "Passage toutes les deux semaines", "Dépôt devant l'immeuble le matin du rendez-vous", "Présence obligatoire de la personne ayant pris rendez-vous"],
  reuse: ["Privilégier les associations caritatives si l'objet peut encore servir", "Recup'Actions à Malley pour la seconde vie", "Caritas, CSP et autres réseaux de réemploi selon l'objet"],
};

export const wasteRelatedLinks = [
  { title: "Carte de déchèterie", description: "Demander ou remplacer votre carte d'accès à la déchèterie.", href: "/demarches/carte-decheterie", icon: ArrowRight },
  { title: "Office de la population", description: "Le bon contact pour la carte d'accès gratuite par ménage.", href: "/demarches/office-population", icon: ArrowRight },
  { title: "Déchets des entreprises", description: "Consulter les règles spécifiques pour les activités professionnelles.", href: "/demarches/dechets/entreprises", icon: ArrowRight },
  { title: "Taxes déchets", description: "Comprendre la taxe au sac, la taxe forfaitaire et les allégements.", href: "/demarches/dechets/taxes-dechets", icon: ArrowRight },
];

export const wastePageShortcuts = [
  { label: "Calendrier", href: "/demarches/dechets/calendrier-de-collecte" },
  { label: "Tri des déchets", href: "/demarches/dechets/tri-des-dechets" },
  { label: "Déchèteries", href: "/demarches/dechets/decheteries-et-points-de-collecte" },
  { label: "Taxes", href: "/demarches/dechets/taxes-dechets" },
];

export const wasteMapImages = {
  collectionMap: "/images/dechets/241209-INFO-DECHETS-PRILLY-A4_CARTE_page-0001.jpg",
  mobileMap: "/images/dechets/csm_2026-01-Decheterie_mobile_fdc7cd6bef.jpg",
};
