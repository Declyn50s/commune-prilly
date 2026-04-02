export const cffHero = {
  title: "Cartes journalieres CFF",
  description:
    "Une page simple pour voir le prix, comprendre l'achat et verifier rapidement la disponibilite de la carte journaliere degriffée Commune.",
  imageSrc: "/images/cartes-cff/visuel-cff-cartes-journalieres.png",
  ctas: [
    { label: "Verifier la disponibilite", href: "https://www.spartageskarte-gemeinde.ch/fr" },
    { label: "Voir les prix", href: "#prix" },
  ],
};

export const cffQuickFacts = [
  "Valable dans toute la Suisse dans le rayon AG",
  "Carte nominative",
  "Achat sur place  à la reception du Greffe municipal",
  "Disponible jusqu' à la veille du voyage",
];

export const cffPricing = [
  {
    title: "Niveau 1",
    window: "Jusqu'a 10 jours avant le voyage",
    halfFare: "Des CHF 39.–",
    fullFare: "Des CHF 52.–",
  },
  {
    title: "Niveau 2",
    window: "Jusqu'a 1 jour avant le voyage",
    halfFare: "Des CHF 59.–",
    fullFare: "Des CHF 88.–",
  },
];

export const cffSteps = [
  "Verifier la disponibilite en ligne",
  "Venir  à la reception du Greffe municipal",
  "Fournir le prenom, le nom et la date de naissance de chaque voyageur",
  "Payer sur place et présenter les pieces d'identite utiles",
];

export const cffValidity = [
  { title: "début", description: "Valable le jour choisi, des les premiers transports." },
  { title: "Fin", description: "Jusqu'a 5h le lendemain matin." },
];

export const cffConditions = [
  "accèssible a tout le monde, pas seulement aux habitantes et habitants de Prilly",
  "Plusieurs cartes peuvent être achetées pour soi ou pour d'autres personnes",
  "Cartes nominatives: prenom, nom et date de naissance sont requis",
  "Pas de prereservation possible",
  "Achat sur place uniquement",
  "Achat possible de 6 mois a 1 jour avant le voyage",
];

export const cffRefunds = [
  {
    title: "Remboursement standard",
    description: "Sans frais dans les 7 jours apres l'achat et jusqu'a 1 jour avant le voyage.",
    items: [
      "Demande dans le délai de 7 jours apres l'achat",
      "Possible jusqu'a 1 jour avant la date de voyage",
    ],
  },
  {
    title: "Remboursement exceptionnel",
    description: "Possible avec CHF 10.– de frais dans certaines situations.",
    items: [
      "Erreur de quantite",
      "Erreur de tarif",
      "Incapacite de voyager avec certificat medical",
      "Deces",
      "Achat d'un abonnement, par exemple un AG",
    ],
  },
];

export const cffLinks = [
  {
    title: "Disponibilite des cartes",
    description: "Consulter les cartes disponibles avant de vous deplacer. Aucune prereservation n'est possible.",
    href: "https://www.spartageskarte-gemeinde.ch/fr",
    label: "Voir la disponibilite",
  },
  {
    title: "Horaires CFF",
    description: "Planifier votre trajet et verifier les correspondances de voyage.",
    href: "https://www.cff.ch/fr/horaire.html",
    label: "Ouvrir les horaires",
  },
  {
    title: "Page officielle CFF",
    description: "Retrouver les informations generales sur la carte journaliere degriffée Commune cote CFF.",
    href: "https://www.cff.ch/fr",
    label: "Ouvrir CFF",
  },
  {
    title: "Transports publics lausannois",
    description: "Consulter les horaires TL pour vos deplacements de proximite avant ou apres le voyage.",
    href: "https://www.t-l.ch/",
    label: "Ouvrir TL",
  },
];

export const cffContact = {
  title: "Reception du Greffe municipal",
  phone: "+41 21 622 72 11",
};
