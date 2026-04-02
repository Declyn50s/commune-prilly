import { BadgeInfo, FileCheck2, FileText, ShieldCheck } from "lucide-react";
import type { DocumentItem, HeroConfig, ParkingEligibility, ParkingRate, ServiceLink } from "@/features/mobilite/data/types";

export const parkingHero: HeroConfig = {
  eyebrow: "Voiture et stationnement",
  title: "Stationnement",
  description: "Places, autorisations, paiement mobile et informations utiles pour stationner à Prilly.",
  ctas: [
    { label: "Voir les autorisations", href: "#autorisations" },
    { label: "Comment faire la demande", href: "#demarche" },
  ],
};

export const parkingLocations: ParkingRate[] = [
  {
    title: "Places pour vehicules de tourisme",
    price: "CHF 100 / mois",
    detail: "Locations de places extérieures sur plusieurs sites communaux.",
    locations: ["Avenue de la Confrerie 25", "Promenade des Alpes", "Avenue de la Vallombreuse", "Route des Flumeaux 2"],
  },
  {
    title: "Places pour camping-cars, fourgons ou vehicules assimiles",
    price: "CHF 120 / mois",
    detail: "Tarif specifique sur le site de Corminjoz.",
    locations: ["Chemin de Corminjoz 24"],
  },
  {
    title: "Garages-box",
    price: "CHF 150 / mois",
    detail: "Solution plus protegée pour du stationnement couvert.",
    locations: ["Garages de Fontadel", "Garages de Floreal"],
  },
];

export const parkingHighlights = [
  "Les autorisations de stationnement s'appellent encore souvent macarons, mais fonctionnent aujourd'hui comme des autorisations sans place fixe.",
  "Elles sont valables uniquement dans les zones equipees du panneau 'sauf autorisation P'.",
  "Elles ne dispensent pas des restrictions temporaires liees aux travaux, manifestations ou mesures ponctuelles.",
  "Les contrôles se font via le numero d'immatriculation une fois l'autorisation activée dans ParkingPay.",
];

export const parkingIntroCards = [
  { title: "Sans place fixe", description: "L'autorisation ne reserve pas un emplacement individuel.", icon: BadgeInfo },
  { title: "Zone avec panneau P", description: "Valable uniquement dans les secteurs explicitement signales.", icon: FileText },
  { title: "Restrictions temporaires", description: "Les travaux, manifestations et mesures ponctuelles restent applicables.", icon: ShieldCheck },
  { title: "Contrôle par plaque", description: "Les contrôles se font via le numero d'immatriculation enregistre.", icon: FileCheck2 },
];

export const parkingTariffs: ParkingEligibility[] = [
  { title: "Habitants", description: "Pour les personnes residant à Prilly dans le secteur concerne.", rate: "CHF 360 / an", notes: ["Pas de place fixe", "Zone du quartier uniquement"] },
  { title: "Entreprise prillerane", description: "Pour les entreprises basees à Prilly dans le cadre d'un usage professionnel.", rate: "CHF 360 / an", notes: ["Usage professionnel", "Contrôle par plaque"] },
  { title: "Pendulaires", description: "Autorisation reservée aux besoins de deplacement professionnels et gerée via l'employeur.", rate: "CHF 600 / an", notes: ["Demande formulée par l'employeur", "Formulaire specifique"] },
  { title: "Visiteurs", description: "Solution occasionnelle via carte visiteurs.", rate: "CHF 60 la carte a 10 cases", notes: ["Usage temporaire", "Sans place reservee"] },
  { title: "Entreprise - carte journaliere", description: "Pour les besoins ponctuels d'entreprises intervenant sur la commune.", rate: "CHF 10 / jour", notes: ["Interventions ponctuelles", "Usage professionnel"] },
];

export const parkingEligibility: ParkingEligibility[] = [
  { title: "Habitants", description: "Résidents du secteur concerne souhaitant prolonger le stationnement en zone autorisée.", rate: "Autorisation annuelle", notes: ["Zone du domicile", "Pas de place fixe"] },
  { title: "Entreprises", description: "Sociétés prilleranes ayant besoin d'un stationnement dans leur secteur d'activite.", rate: "Autorisation annuelle", notes: ["Usage professionnel", "Contrôle par plaque"] },
  { title: "Pendulaires", description: "Employe·e·s ou usagers concernes par un besoin de stationnement professionnel durable.", rate: "Autorisation annuelle", notes: ["Demande via employeur", "Quota selon taille d'entreprise"] },
  { title: "Medecins", description: "Professionnels de sante ayant besoin d'un cadre de stationnement specifique pour leur activite.", rate: "Selon autorisation", notes: ["Usage professionnel", "Justificatifs requis"] },
  { title: "CMS", description: "Intervenant·e·s en sante ou aide a domicile ayant besoin d'un accès de proximite pour les visites.", rate: "Selon autorisation", notes: ["Cadre professionnel", "Contrôle par plaque"] },
  { title: "Visiteurs", description: "Besoin ponctuel pour les proches, visites ou usages occasionnels.", rate: "Carte visiteurs", notes: ["Usage temporaire", "Pas de place reservee"] },
  { title: "Entreprises externes", description: "Entreprises non prilleranes intervenant temporairement sur la commune.", rate: "Carte journaliere", notes: ["Intervention ponctuelle", "Justification de mission"] },
];

export const parkingSteps = [
  "Creer un compte sur ParkingPay ou se connecter.",
  "Choisir la commune de Prilly et la zone correspondante.",
  "Selectionner le type d'autorisation: secteur P, 52 ecoles accès ayant droit ou autre catégorie utile.",
  "Transmettre le permis de circulation pour chaque vehicule concerne.",
  "Attendre la validation communale.",
  "Finaliser le paiement pour activer l'autorisation.",
];

export const parkingPendularRules = [
  "La demande pendulaire est formulée par l'employeur.",
  "Une photocopie du permis de circulation est requise pour chaque vehicule.",
  "Quota maximal selon la taille de l'entreprise: jusqu'a 20 employes = 3, jusqu'a 50 = 5, jusqu'a 100 = 7, des 101 employes = 10.",
];

export const parkingZonesDoc: DocumentItem = {
  title: "Zones macarons et panneaux",
  description: "Le plan detaille permet de distinguer les secteurs avec autorisation P des autres secteurs de stationnement.",
  href: "/docs/mobilite/stationnement/Zone_et_panneaux_2023_V3.pdf",
  label: "Voir le plan detaille",
  category: "Plan de zones",
};

export const parkingMobileApps: ServiceLink[] = [
  { title: "allpark", description: "Paiement minute et gestion mobile du stationnement en Suisse romande.", href: "https://www.allpark.ch/", label: "Voir allpark", eyebrow: "Paiement mobile" },
  { title: "ParkingPay", description: "Application cle pour la gestion de nombreuses autorisations et pour le stationnement numerique.", href: "https://www.parkingpay.ch", label: "Ouvrir ParkingPay", eyebrow: "Paiement mobile" },
  { title: "PayByPhone", description: "Application de paiement de stationnement simple, rapide et tres orientée usage.", href: "https://www.paybyphone.ch/", label: "Voir PayByPhone", eyebrow: "Paiement mobile" },
];

export const parkingDocuments: DocumentItem[] = [
  { title: "Reglement 2008", description: "Base reglementaire des autorisations de stationnement.", href: "/docs/mobilite/stationnement/BRS-Macarons_Reglement_2008.pdf", label: "Lire le reglement", category: "Reglement" },
  { title: "Prescriptions municipales 2023", description: "Document de reference pour les usages, catégories et limites actuelles.", href: "/docs/mobilite/stationnement/Ville_de_Prilly_Macarons_de_stationnement_Prescriptions_municipales_Edition_2023_V3.pdf", label: "Voir les prescriptions", category: "Prescriptions" },
  { title: "Tarifs des autorisations", description: "Tarifs utiles pour habitants, entreprises, pendulaires et visiteurs.", href: "/docs/mobilite/stationnement/BRS-Macarons_Tarifs.pdf", label: "Voir les tarifs", category: "Tarifs" },
  { title: "Demande d'autorisation", description: "Formulaire pour une autorisation de stationnement classique.", href: "/docs/mobilite/stationnement/Demande_d_autorisation_-_Macaron.pdf", label: "Ouvrir le formulaire", category: "Formulaire" },
  { title: "Demande pendulaire", description: "Formulaire specifique pour les autorisations pendulaires via employeur.", href: "/docs/mobilite/stationnement/Demande_autorisation_pendulaire.pdf", label: "Ouvrir le formulaire", category: "Formulaire" },
  { title: "Plan des zones", description: "Visualiser les zones macarons, panneaux et secteurs concernes.", href: "/docs/mobilite/stationnement/Zone_et_panneaux_2023_V3.pdf", label: "Voir le plan", category: "Plan" },
];
