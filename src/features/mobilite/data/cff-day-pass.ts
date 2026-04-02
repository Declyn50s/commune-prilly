import { BadgeInfo, Building2, CalendarDays, CheckCircle2 } from "lucide-react";
import type { HeroConfig, ParkingRate, ServiceLink } from "@/features/mobilite/data/types";

export const cffDayPassHero: HeroConfig = {
  eyebrow: "Service transactionnel",
  title: "Cartes journalieres CFF",
  description:
    "Prix, disponibilite, achat, validite et remboursement: tout ce qu'il faut pour acheter une carte journaliere degriffée Commune sans ambiguite.",
  imageSrc: "/images/cartes-cff/visuel-cff-cartes-journalieres.png",
  imageAlt: "Visuel des cartes journalieres CFF",
  ctas: [
    { label: "Verifier la disponibilite", href: "https://www.spartageskarte-gemeinde.ch/fr" },
    { label: "Voir les prix", href: "#prix" },
  ],
};

export const cffDayPassFacts = [
  { title: "Validite", value: "Rayon AG", description: "Valable le jour choisi des premiers transports jusqu'a 5h le lendemain matin.", icon: CheckCircle2 },
  { title: "Fenetre d'achat", value: "6 mois a 1 jour", description: "Achat possible bien en amont mais aussi jusqu' à la veille du voyage.", icon: CalendarDays },
  { title: "Mode de vente", value: "Sur place", description: "Vente  à la reception de la Ville, sans prereservation.", icon: Building2 },
  { title: "Carte nominative", value: "Identite requise", description: "Nom, prenom et date de naissance sont necessaires pour chaque voyageuse ou voyageur.", icon: BadgeInfo },
];

export const cffDayPassPricing: ParkingRate[] = [
  { title: "Niveau 1", price: "Demi-tarif des CHF 39 / Plein tarif des CHF 52", detail: "Disponible jusqu'a maximum 10 jours avant le voyage.", locations: ["Achat anticipe", "Tarif le plus avantageux"] },
  { title: "Niveau 2", price: "Demi-tarif des CHF 59 / Plein tarif des CHF 88", detail: "Disponible jusqu'a 1 jour avant le voyage.", locations: ["Dernières disponibilités", "Tarif plus eleve"] },
];

export const cffDayPassSteps = [
  "Verifier la disponibilite sur spartageskarte-gemeinde.ch.",
  "Se rendre  à la reception de la Ville de Prilly.",
  "Transmettre le nom, le prenom et la date de naissance de chaque personne voyageuse.",
  "Payer sur place apres verification des données et présenter les pieces d'identite utiles.",
];

export const cffDayPassRefunds = [
  {
    title: "Remboursement standard",
    description: "Possible dans les 7 jours apres l'achat, et au plus tard jusqu'a 1 jour avant le voyage.",
    notes: ["Sans frais", "Demande a faire a l'administration"],
  },
  {
    title: "Cas exceptionnels",
    description: "Apres ce délai, un remboursement reste possible dans certains cas avec CHF 10 de frais.",
    notes: ["Erreur d'achat", "Erreur de tarif", "Maladie ou accident avec certificat", "Deces", "Achat ulterieur d'un abonnement personnel"],
  },
];

export const cffDayPassLinks: ServiceLink[] = [
  { title: "Disponibilite", description: "Verifier les cartes disponibles avant de se deplacer.", href: "https://www.spartageskarte-gemeinde.ch/fr", label: "Voir la disponibilite", eyebrow: "Essentiel" },
  { title: "Horaires CFF", description: "Planifier son trajet et verifier les correspondances.", href: "https://www.cff.ch/fr/horaire.html", label: "Ouvrir les horaires", eyebrow: "Trajet" },
  { title: "TL", description: "Completer un trajet local avant ou apres le voyage en train.", href: "https://www.t-l.ch/", label: "Ouvrir TL", eyebrow: "Complement" },
];
