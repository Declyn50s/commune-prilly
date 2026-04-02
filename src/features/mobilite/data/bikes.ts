import { Recycle } from "lucide-react";
import type { HeroConfig, ServiceLink } from "@/features/mobilite/data/types";

export const bikeHero: HeroConfig = {
  eyebrow: "Mobilite cyclable",
  title: "Velos",
  description: "Aides, services, itineraires et ressources pour circuler a velo à Prilly.",
  imageSrc: "/images/mobilite/trait-dunion-malley.jpg",
  imageAlt: "Trait d'union a Malley",
  ctas: [
    { label: "Voir les ressources cyclistes", href: "#ressources" },
    { label: "Mobilite partagee", href: "#partagee" },
  ],
};

export const bikeCommitments = [
  "Zones a vitesse moderée et amenagements favorables  à la marche et au velo.",
  "Promotion des mobilites douces via des subventions et des services partages.",
  "Soutien aux velos classiques, velos electriques, velos cargo, remorques et batteries via les subventions communales.",
];

export const bikeCommitmentCards = [
  { title: "Mobilite douce au quotidien", description: "Une lecture simple des amenagements et de la place du velo dans les deplacements de proximite.", icon: Recycle },
];

export const bikeSharedServices: ServiceLink[] = [
  {
    title: "carvelo2go",
    description: "Location de velos cargo electriques en libre-service pour des courses, trajets familiaux ou logistiques de proximite.",
    href: "https://www.carvelo.info/fr/",
    label: "Découvrir carvelo2go",
    eyebrow: "Mobilite partagee",
  },
  {
    title: "PubliBike",
    description: "Velos et e-bikes en libre-service pour prolonger facilement un trajet du quotidien ou une correspondance.",
    href: "https://www.publibike.ch/fr/home",
    label: "Voir PubliBike",
    eyebrow: "Mobilite partagee",
  },
];

export const bikeResources: ServiceLink[] = [
  { title: "Carte velo de l'Ouest lausannois", description: "Choisir l'itineraire le plus adapte aux trajets quotidiens ou occasionnels.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/velos", label: "Voir la ressource", eyebrow: "Carte" },
  { title: "Guide des achats a velo", description: "Conseils pratiques pour choisir un velo selon ses usages et besoins.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/velos", label: "Voir le guide", eyebrow: "Pratique" },
  { title: "Balades a velo dans l'Ouest", description: "Idées de parcours loisirs a velo a l'echelle de l'Ouest lausannois.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/velos", label: "Explorer", eyebrow: "Loisirs" },
  { title: "Pro Velo Lausanne", description: "Association de reference pour la pratique cyclable et la culture velo dans la region.", href: "https://www.pro-velo-lausanne.ch", label: "Ouvrir Pro Velo", eyebrow: "Association" },
  { title: "Suisse a velo", description: "Grand portail national d'itineraires et d'idées d'escapades a velo en Suisse.", href: "https://schweizmobil.ch/fr/suisse-a-velo", label: "Voir les itineraires", eyebrow: "National" },
  { title: "Bikeable", description: "Plateforme collaborative d'information et de retours d'experience pour cyclistes.", href: "https://www.bikeable.ch", label: "Ouvrir Bikeable", eyebrow: "Plateforme" },
  { title: "Les Bons Plans a Velo", description: "Ressources d'inspiration pour pedaler plus souvent et mieux s'equiper.", href: "https://www.lesbonsplansavelo.ch", label: "Voir les bons plans", eyebrow: "Inspiration" },
  { title: "ATE", description: "Association transports et environnement, utile pour les mobilites actives et les alternatives a l'auto-solo.", href: "https://www.ate.ch", label: "Ouvrir l'ATE", eyebrow: "Association" },
  { title: "AxeCycle", description: "Acteur regional du velo utile pour l'accompagnement et les services autour de la pratique cyclable.", href: "https://www.axecycle.ch", label: "Voir AxeCycle", eyebrow: "Regional" },
  { title: "Pompes a velos en libre service", description: "Repere pratique pour les besoins d'entretien rapide lors des trajets a velo.", href: "https://www.prilly.ch/vivre-a-prilly/mobilite/velos", label: "Voir les emplacements", eyebrow: "Service" },
];

export const bikeLeisureLinks: ServiceLink[] = [
  { title: "La Rustine", description: "Ressource utile pour l'atelier, l'entraide et la culture velo.", href: "https://www.rustine.ch", label: "Voir la Rustine", eyebrow: "Atelier" },
  { title: "Voyager avec un velo avec les CFF", description: "Preparer un trajet combine train + velo avec les informations officielles CFF.", href: "https://www.cff.ch/fr/voyager-avec-des-bagages/velo.html", label: "Voir les conditions", eyebrow: "Train + velo" },
  { title: "Rent a Bike", description: "Location de velos et velos electriques pour les loisirs ou le tourisme de proximite.", href: "https://www.rentabike.ch/fr", label: "Louer un velo", eyebrow: "Location" },
  { title: "Parcours velo gymkhana avec le TCS", description: "Initiation ludique et securitaire autour de la pratique du velo.", href: "https://www.tcs.ch/fr/tests-conseils/conseils/velo/", label: "Voir le TCS", eyebrow: "Loisirs" },
];
