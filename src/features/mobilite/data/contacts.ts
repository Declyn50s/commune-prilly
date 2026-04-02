import type { ContactInfo, PageLink } from "@/features/mobilite/data/types";
import { mobilityQuickaccèss, mobilityRoutes } from "@/features/mobilite/data/hub";

export const mobilityContacts: Record<string, ContactInfo> = {
  common: {
    title: "Administration communale",
    address: ["Route de Cossonay 40", "1008 Prilly"],
    phone: "+41 21 622 72 11",
    notes: ["Point de contact transversal pour les informations de mobilite et les horaires de guichet."],
  },
  parking: {
    title: "Stationnement et autorisations",
    phone: "+41 21 622 72 21",
    email: "separquer@prilly.ch",
    notes: ["Autres adresses utiles selon les cas: finances@prilly.ch, entreprises@prilly.ch, frontaliers@prilly.ch."],
  },
  cff: {
    title: "Reception de la Ville",
    phone: "+41 21 622 72 11",
    notes: ["Vente sur place des cartes journalieres degriffées Commune."],
  },
};

export const relatedPageGroups: Record<string, PageLink[]> = {
  walking: mobilityQuickaccèss.filter((item) => item.href !== mobilityRoutes.walking),
  bikes: mobilityQuickaccèss.filter((item) => item.href !== mobilityRoutes.bikes),
  publicTransport: mobilityQuickaccèss.filter((item) => item.href !== mobilityRoutes.publicTransport),
  cffDayPass: mobilityQuickaccèss.filter((item) => item.href !== mobilityRoutes.cffDayPass),
  parking: mobilityQuickaccèss.filter((item) => item.href !== mobilityRoutes.parking),
  ridesharing: mobilityQuickaccèss.filter((item) => item.href !== mobilityRoutes.ridesharing),
};
