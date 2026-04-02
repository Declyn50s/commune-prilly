import { FileText, MapPinned } from "lucide-react";
import type { WasteContact } from "@/features/dechets/types";

export const decheterieCardIntro = {
  eyebrow: "Accès aux déchèteries",
  title: "Carte de déchèterie",
  description:
    "Une carte par ménage pour accéder aux déchèteries de Prilly et de Malley.",
  summary:
    "L'Office de la population délivre automatiquement une carte de déchèterie par ménage. Elle permet l'accès à la déchèterie intercommunale fixe de Malley ainsi qu'aux trois déchèteries mobiles de Prilly.",
  cta: {
    label: "Voir les déchèteries",
    href: "/demarches/dechets/decheteries-et-points-de-collecte",
  },
};

export const cardaccèssPoints = [
  {
    title: "Déchèterie intercommunale fixe de Malley",
    description:
      "La carte permet d'accéder au site fixe de Malley pour les dépôts recyclables, volumineux et les situations comme un déménagement.",
  },
  {
    title: "Déchèteries mobiles de Prilly",
    description:
      "La même carte donne aussi accès aux trois déchèteries mobiles de Prilly, sur les secteurs Nord, Centre et Sud.",
  },
];

export const cardIssueCases = [
  "Carte perdue",
  "Carte volée",
  "Carte détériorée",
];

export const decheterieCardUsefulLinks = [
  {
    title: "Déchèteries",
    description:
      "Retrouver les horaires, les accès, les règles d'usage et la carte des sites fixes et mobiles.",
    href: "/demarches/dechets/decheteries-et-points-de-collecte",
    icon: MapPinned,
  },
  {
    title: "Loi vaudoise sur le contrôle des habitants",
    description:
      "La base légale cantonale utile pour le rôle de l'Office de la population et la délivrance des documents liés au ménage.",
    href: "https://publication.vd.ch/publications/dgaic/aide-memoire/administration-communale/contrôle-des-habitants",
    icon: FileText,
  },
];

export const decheterieCardContact: WasteContact[] = [
  {
    title: "Office de la population",
    description:
      "En cas de perte, de vol ou de détérioration de la carte, adressez-vous directement à l'Office de la population.",
    email: "population@prilly.ch",
    phone: "+41 21 622 73 21",
    fax: "+41 21 622 73 25",
  },
];

export const decheterieCardHighlights = [
  {
    title: "Délivrance automatique",
    description:
      "La carte est émise automatiquement par ménage, sans démarche distincte à effectuer dans le parcours standard.",
  },
  {
    title: "Carte liée au ménage",
    description:
      "Elle sert de justificatif d'accès aux infrastructures de déchèterie prévues pour les habitants concernés.",
  },
  {
    title: "Réflexe en cas de problème",
    description:
      "Si la carte n'est plus utilisable, l'Office de la population est le seul bon point de contact.",
  },
];

export const decheterieCardProblemNotice = {
  title: "En cas de perte, de vol ou de détérioration",
  description:
    "Dans tous ces cas, il faut contacter l'Office de la population. La page va droit au but pour éviter les hésitations et les renvois inutiles.",
};
