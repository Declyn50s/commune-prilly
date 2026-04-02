export type EventMonth = "janvier" | "fevrier" | "mars" | "avril" | "mai" | "juin";
export type EventType = "Cinéma" | "Concert" | "Jeunesse" | "Culture locale";
export type EventAudience = "Enfants" | "Tout public";

export type AgendaEvent = {
  id: string;
  title: string;
  type: EventType;
  date?: string;
  recurringDates?: string[];
  months: EventMonth[];
  location: string;
  description: string;
  details: string;
  schedule: string[];
  audience: EventAudience;
  image: string;
  link: string;
  isRecurring?: boolean;
  categoryLabel: string;
};

export const agendaMonths: Array<{ id: EventMonth; label: string }> = [
  { id: "janvier", label: "Janvier" },
  { id: "fevrier", label: "Fevrier" },
  { id: "mars", label: "Mars" },
  { id: "avril", label: "Avril" },
  { id: "mai", label: "Mai" },
  { id: "juin", label: "Juin" },
];

export const agendaTypes: EventType[] = ["Cinéma", "Concert", "Jeunesse", "Culture locale"];
export const agendaAudiences: EventAudience[] = ["Enfants", "Tout public"];

export const agendaEvents: AgendaEvent[] = [
  {
    id: "lanterne-magique-2026",
    title: "La Lanterne magique",
    type: "Jeunesse",
    recurringDates: ["17 janvier 2026", "7 fevrier 2026", "7 mars 2026", "28 mars 2026", "2 mai 2026", "6 juin 2026"],
    months: ["janvier", "fevrier", "mars", "mai", "juin"],
    location: "Cinétoile Malley Lumieres",
    description: "Le cine-club des enfants de 6 a 12 ans propose un samedi par mois une séance pensee pour les plus jeunes.",
    details:
      "Chaque projection est precedée d'une courte presentation d'environ 15 minutes. L'évènement est ideal pour les enfants de 6 a 12 ans et leurs accompagnant·e·s.",
    schedule: [
      "Presentation environ 15 minutes avant la projection",
      "Un samedi par mois de janvier a juin 2026",
      "Dates 2026: 17 janvier, 7 fevrier, 7 mars, 28 mars, 2 mai et 6 juin",
    ],
    audience: "Enfants",
    image: "/images/agenda-culturel/lanterne-magique.png",
    link: "https://www.lanterne-magique.org/",
    isRecurring: true,
    categoryLabel: "évènement recurrent",
  },
  {
    id: "cindrom-batcam-2026",
    title: "CINDROM",
    type: "Cinéma",
    date: "26 mars 2026",
    months: ["mars"],
    location: "Cinétoile",
    description: "Une soirée consacrée au Cinéma independant romand avec projections de courts-metrages, remise de prix et aperitif.",
    details:
      "Le rendez-vous porte la signature de BATCAM et met en avant des courts-metrages du Cinéma independant romand dans une ambiance ouverte et conviviale.",
    schedule: ["26 mars 2026", "Projection de courts-metrages", "Remise de prix suivie d'un aperitif"],
    audience: "Tout public",
    image: "/images/agenda-culturel/batcam.jpg",
    link: "https://batcam.org/",
    categoryLabel: "évènement ponctuel",
  },
  {
    id: "concert-dynamhits-2026",
    title: "Concert Dynam'Hits",
    type: "Concert",
    date: "28 mars 2026",
    months: ["mars"],
    location: "Grande salle",
    description: "Une soirée chorale dynamique à Prilly avec ouverture des portes a 18h45, début du concert a 19h30 et entrée gratuite.",
    details:
      "Le concert du Choeur mixte Dynam'Hits propose une ambiance musicale accèssible, avec entrée gratuite et chapeau  à la sortie.",
    schedule: ["28 mars 2026", "Ouverture: 18h45", "début: 19h30", "entrée gratuite, chapeau  à la sortie"],
    audience: "Tout public",
    image: "/images/agenda-culturel/dynamhits.png",
    link: "https://dynamhits.ch/",
    categoryLabel: "évènement ponctuel",
  },
];

export const culturalAgendaContact = {
  title: "Service culture et integration",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "sci@prilly.ch",
  phone: "+41 21 622 74 40",
};
