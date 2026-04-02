import type { EnfancePageData } from "@/features/enfance-ecoles/types";

const root = "/vivre/enfance-ecoles";

export const enfanceVacancesPages: EnfancePageData[] = [
  {
    slug: "vacances-activites",
    path: `${root}/vacances-activites`,
    title: "Vacances & activités",
    eyebrow: "Temps libres & découvertes",
    description:
      "Une page hub plus vivante pour orienter rapidement vers les offres de vacances, d’activités sportives et de loisirs selon l’âge et la période.",
    intro:
      "Colonies, passeport vacances, centre de loisirs et activités ponctuelles sont regroupés ici pour éviter les recherches dispersées.",
    tone: "youth",
    childLinks: [
      {
        slug: "paques",
        title: "Tu sais Pâques quoi faire ?",
        description: "Une sélection d’activités de vacances de printemps.",
        href: "/posters/paques-2026.svg",
        accent: "yellow",
      },
      {
        slug: "colonies-vacances",
        title: "Colonies de vacances",
        description: "Séjours à Plan-Sépey / Gryon, inscriptions et tarifs 2026.",
        href: `${root}/colonies-vacances`,
        accent: "red",
      },
      {
        slug: "passeport-vacances",
        title: "Passeport Vacances",
        description: "Activités d’été pour les 9 à 15 ans.",
        href: `${root}/passeport-vacances`,
        accent: "green",
      },
      {
        slug: "centre-loisirs",
        title: "Centre de loisirs Carrefour-Sud",
        description: "Un lieu vivant pour les jeunes, les projets et les activités régulières.",
        href: `${root}/centre-loisirs`,
        accent: "coal",
      },
    ],
    posters: [
      {
        title: "Affiche Pâques 2026",
        description: "Visuel de démonstration pour la programmation de printemps.",
        image: "/posters/paques-2026.svg",
        href: "/posters/paques-2026.svg",
        ctaLabel: "Voir l’affiche",
      },
    ],
    relatedSlugs: ["colonies-vacances", "passeport-vacances", "centre-loisirs"],
  },
  {
    slug: "colonies-vacances",
    path: `${root}/colonies-vacances`,
    title: "Colonies de vacances",
    eyebrow: "Séjours 2026",
    description:
      "Une page plus attractive pour mettre en avant les séjours de Plan-Sépey / Gryon avec des dates très visibles, des tarifs clairs et une inscription simple à comprendre.",
    intro:
      "Les colonies de vacances sont pensées comme une offre lisible et rassurante pour les familles, avec une information claire sur les séries, l’âge et les besoins particuliers.",
    tone: "youth",
    heroCtas: [
      { label: "Voir les dates 2026", href: "#dates" },
      { label: "S’inscrire en ligne", href: "#inscription" },
    ],
    timeline: [
      {
        title: "Série 1",
        value: "6 au 17 juillet 2026",
        detail: "Séjour à Plan-Sépey / Gryon pour les enfants inscrits dans les délais.",
      },
      {
        title: "Série 2",
        value: "20 au 31 juillet 2026",
        detail: "Deuxième série d’été 2026.",
      },
      {
        title: "Ouverture des inscriptions",
        value: "18 mars 2026",
        detail: "Les demandes sont traitées dans l’ordre d’arrivée selon les places disponibles.",
      },
    ],
    pricing: [
      {
        title: "Habitants de Prilly",
        value: "CHF 420.–",
        detail: "Tarif indicatif par série pour les familles domiciliées à Prilly.",
      },
      {
        title: "Hors commune",
        value: "CHF 560.–",
        detail: "Tarif indicatif pour les familles hors commune.",
      },
    ],
    posters: [
      {
        title: "Plan-Sépey / Gryon 2026",
        description: "Visuel de démonstration pour présenter les colonies.",
        image: "/posters/colonies-plan-sepey-2026.svg",
        href: "/posters/colonies-plan-sepey-2026.svg",
        ctaLabel: "Voir le visuel",
      },
    ],
    sections: [
      {
        title: "À savoir avant l’inscription",
        items: [
          "Les âges concernés et la capacité d’accueil sont précisés au moment de l’ouverture.",
          "Les besoins particuliers peuvent être signalés à l’inscription.",
          "Le site de Plan-Sépey peut être présenté plus en détail vi à la page propriété dédiée.",
        ],
      },
    ],
    contacts: [
      {
        title: "Colonies de vacances",
        role: "Renseignements et inscriptions",
        phone: "021 622 74 30",
        email: "colonies@prilly.ch",
      },
    ],
    relatedSlugs: ["vacances-activites", "passeport-vacances"],
  },
  {
    slug: "passeport-vacances",
    path: `${root}/passeport-vacances`,
    title: "Passeport Vacances",
    eyebrow: "Été 2026",
    description:
      "Une page visuelle et compacte pour aider les familles à comprendre les périodes, les deux passeports disponibles et les dates clés d’inscription aux activités.",
    intro:
      "Le Passeport Vacances s’adresse aux 9 à 15 ans et permet de composer un programme d’activités d’été selon une logique simple: choisir son passeport, puis réserver ses activités au bon moment.",
    tone: "youth",
    timeline: [
      {
        title: "Période 1",
        value: "6 au 17 juillet 2026",
        detail: "Premier passeport disponible sur cette période.",
      },
      {
        title: "Période 2",
        value: "10 au 21 août 2026",
        detail: "Deuxième passeport disponible en fin d’été.",
      },
      {
        title: "Ouverture des activités",
        value: "3 juin 2026",
        detail: "Premier arrivé, premier servi pour la réservation des activités.",
      },
    ],
    pricing: [
      {
        title: "Passeport découverte",
        value: "CHF 45.–",
        detail: "Pour un nombre limité d’activités au choix.",
      },
      {
        title: "Passeport complet",
        value: "CHF 75.–",
        detail: "Pour un programme plus dense et plus flexible.",
      },
    ],
    posters: [
      {
        title: "Affiche Passeport Vacances 2026",
        description: "Support visuel à mettre en avant sur la page.",
        image: "/posters/passeport-vacances-2026.svg",
        href: "/posters/passeport-vacances-2026.svg",
        ctaLabel: "Voir l’affiche",
      },
    ],
    downloads: [
      {
        title: "Accéder à APVRL",
        description: "Plateforme et informations complètes du réseau Passeport Vacances.",
        href: "https://www.apvrl.ch",
        meta: "APVRL",
      },
    ],
    contacts: [
      {
        title: "Passeport Vacances",
        role: "Informations générales",
        phone: "021 622 74 30",
        email: "vacances@prilly.ch",
      },
    ],
    relatedSlugs: ["vacances-activites", "centre-loisirs"],
  },
  {
    slug: "centre-loisirs",
    path: `${root}/centre-loisirs`,
    title: "Centre de loisirs Carrefour-Sud",
    eyebrow: "Lieu vivant & jeunesse",
    description:
      "Une page plus chaleureuse pour présenter les activités, les temps forts, les horaires et les contacts du centre de loisirs Carrefour-Sud.",
    intro:
      "Carrefour-Sud est pensé comme un lieu ressource où l’on peut venir pour des activités régulières, des projets, des actualités locales et des temps plus informels.",
    tone: "youth",
    sections: [
      {
        title: "Ce qu’on peut y faire",
        items: [
          "Participer à des activités récurrentes et des projets collectifs.",
          "Retrouver des temps d’accueil informels et les soupers du vendredi.",
          "Prendre part à des ateliers comme la boxe ou la danse selon la programmation.",
        ],
      },
      {
        title: "Infos utiles",
        items: [
          "Horaires actualisés selon la programmation.",
          "Actualités relayées sur les canaux jeunesse et Instagram.",
          "Lieu pensé pour encourager l’autonomie et l’engagement des jeunes.",
        ],
      },
    ],
    contacts: [
      {
        title: "Carrefour-Sud",
        role: "Centre de loisirs",
        phone: "021 622 74 31",
        email: "carrefour-sud@prilly.ch",
        address: "Prilly",
        note: "Suivre aussi les actualités et informations pratiques sur Instagram.",
      },
    ],
    relatedSlugs: ["vacances-activites", "passeport-vacances"],
  },
  {
    slug: "ecoles",
    path: `${root}/ecoles`,
    title: "Écoles",
    eyebrow: "Scolarité",
    description:
      "Une page institutionnelle et très lisible pour comprendre le rôle de la Ville, les établissements scolaires et les liens utiles autour de la scolarité.",
    intro:
      "La commune ne gère pas seule toute la scolarité, mais elle joue un rôle important dans les services liés à l’école, l’accueil et la coordination locale.",
    tone: "school",
    serviceCards: [
      {
        title: "Établissement primaire de Prilly",
        description: "Informations principales pour la scolarité primaire et les liens utiles.",
        meta: ["Site de l’établissement", "Repères pratiques", "Liens directs"],
      },
      {
        title: "Établissement primaire et secondaire",
        description: "Le point d’entrée pour les familles concernées par la suite du parcours scolaire.",
        meta: ["Secondaire", "Organisation", "Informations officielles"],
      },
      {
        title: "Conseil d’établissement",
        description: "Le lien entre l’école, les familles, les partenaires et la commune.",
        meta: ["Participation", "Dialogue", "Vie scolaire"],
      },
    ],
    sections: [
      {
        title: "Le rôle de la Ville",
        items: [
          "La commune soutient les services liés à l’école, à l’accueil, aux repas et à l’accompagnement.",
          "Elle oriente vers les bons établissements et les bons interlocuteurs.",
          "Elle met en avant les liens utiles pour réduire les recherches dispersées.",
        ],
      },
    ],
    downloads: [
      {
        title: "Établissement primaire",
        description: "Accès au site ou aux informations de référence.",
        href: "https://www.vd.ch",
        meta: "Lien utile",
      },
      {
        title: "Établissement primaire et secondaire",
        description: "Point d’entrée externe pour les informations officielles.",
        href: "https://www.vd.ch",
        meta: "Lien utile",
      },
    ],
    relatedSlugs: ["conseillere-ecole-famille", "via-escola"],
  },
  {
    slug: "conseillere-ecole-famille",
    path: `${root}/conseillere-ecole-famille`,
    title: "Conseillère école-famille",
    eyebrow: "Soutien & écoute",
    description:
      "Une page rassurante pour expliquer clairement le rôle, les situations concernées et le cadre confidentiel des accompagnements proposés.",
    intro:
      "La conseillère école-famille est un appui de proximité pour les parents, les enfants et les partenaires lorsqu’une situation scolaire, familiale ou relationnelle demande un accompagnement.",
    tone: "soft",
    sections: [
      {
        title: "Quand la contacter ?",
        items: [
          "Quand la relation avec l’école devient difficile à comprendre ou à vivre.",
          "Quand un enfant traverse une période sensible qui impacte sa scolarité.",
          "Quand la famille a besoin d’un relais, d’une écoute ou d’une orientation.",
        ],
      },
      {
        title: "Ce qu’elle peut faire",
        items: [
          "Recevoir les familles sur place ou, si nécessaire, à domicile.",
          "Aider à clarifier une situation et à trouver les bons relais.",
          "Intervenir dans un cadre confidentiel et respectueux.",
        ],
      },
    ],
    downloads: [
      {
        title: "Dépliant d’information",
        description: "Présentation synthétique du rôle et des missions.",
        href: "/docs/enfance-ecoles/depliant-conseillere-ecole-famille.txt",
        meta: "Dépliant",
      },
    ],
    contacts: [
      {
        title: "Conseillère école-famille",
        role: "Rencontres et orientation",
        phone: "021 622 74 50",
        email: "ecole-famille@prilly.ch",
        address: "Prilly",
        note: "Rencontre possible à domicile selon la situation.",
      },
    ],
    relatedSlugs: ["ecoles", "via-escola"],
  },
];
