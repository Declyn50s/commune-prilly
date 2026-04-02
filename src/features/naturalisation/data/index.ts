export const naturalisationHero = {
  title: "Naturalisation",
  description:
    "Un guide clair pour verifier les conditions principales, choisir le bon formulaire et preparer un dossier complet à Prilly.",
  body:
    "Cette page vous aide a comprendre les premieres etapes de la naturalisation ordinaire, sans devoir dechiffrer seul·e les formulaires et les annexes.",
  ctas: [
    { label: "Verifier les conditions", href: "#conditions" },
    { label: "Choisir mon formulaire", href: "#formulaires" },
  ],
};

export const naturalisationConditions = [
  "Etre au benefice d'un permis d'etablissement (C) valable",
  "Vivre en Suisse depuis plus de 10 ans",
  "Compter au moins 2 ans dans le canton de Vaud",
  "Ne pas avoir beneficie de l'aide sociale durant les 3 dernières annees",
  "Disposer d'un casier judiciaire vierge",
  "Avoir le niveau de francais requis: oral B1 et ecrit A2",
];

export const naturalisationFormTypes = [
  {
    title: "Personne seule sans enfant ou enfant mineur seul",
    audience: "Une personne seule sans enfant a charge, ou un enfant mineur deposant la demande prevue pour sa situation.",
    note: "Formulaire officiel pour une demande individuelle simple.",
    href: "/docs/naturalisation/requerant-seul-ou-enfant-mineur.pdf",
    label: "Télécharger le formulaire",
  },
  {
    title: "Personne seule avec enfant(s)",
    audience: "Une personne seule deposant aussi des informations pour un ou plusieurs enfants mineurs.",
    note: "Des informations distinctes sont demandées pour chaque enfant mineur.",
    href: "/docs/naturalisation/requerant-seul-avec-enfants.pdf",
    label: "Télécharger le formulaire",
  },
  {
    title: "Couple sans enfant",
    audience: "Un couple marie ou lie par un partenariat enregistre sans enfant a inclure dans la demande.",
    note: "Le formulaire couvre la situation du couple.",
    href: "/docs/naturalisation/couple-sans-enfants.pdf",
    label: "Télécharger le formulaire",
  },
  {
    title: "Couple avec enfant(s)",
    audience: "Un couple marie ou lie par un partenariat enregistre avec un ou plusieurs enfants mineurs.",
    note: "Pour les enfants de plus de 12 ans, la partie langue doit être prise en compte. A partir de 16 ans, une signature specifique est prevue.",
    href: "/docs/naturalisation/couple-avec-enfants.pdf",
    label: "Télécharger le formulaire",
  },
];

export const naturalisationSteps = [
  {
    title: "Choisir et completer le bon formulaire",
    items: [
      "Télécharger le formulaire correspondant a votre situation familiale",
      "Le remplir en ligne",
      "L'imprimer puis le signer",
    ],
  },
  {
    title: "Preparer un dossier complet",
    items: [
      "Joindre toutes les annexes requises",
      "Verifier les pieces d'identite, permis, attestations de domicile et preuves de langue",
      "S'assurer que le dossier est complet avant l'envoi",
    ],
  },
  {
    title: "Envoyer la demande par la poste",
    items: [
      "Adresser le dossier au Service de la population, secteur des naturalisations",
      "Envoyer le tout au centre de numerisation a Lausanne",
      "Les dossiers incomplets ne permettent pas de commencer correctement la procedure",
    ],
  },
];

export const naturalisationPostalAddress = [
  "Service de la population",
  "Secteur des naturalisations",
  "Centre de numerisation",
  "Case postale",
  "1014 Lausanne",
];

export const naturalisationDocuments = [
  {
    title: "Documents d'identite",
    items: [
      "Copie du ou des documents d'identite valables",
      "Copie du ou des permis C valables",
    ],
  },
  {
    title: "Justificatifs de domicile",
    items: [
      "Attestation(s) de domicile prouvant les 10 années passees en Suisse",
    ],
  },
  {
    title: "Preuve de langue",
    items: [
      "Passeport fide B1 oral / A2 ecrit",
      "Attestation d'ecole obligatoire en francais suivie au minimum 5 ans",
      "Diplome du degre secondaire II en francais",
      "Diplome du degre tertiaire en francais",
      "Diplome DELF, TCF ou TEF / TEC selon les supports admis",
    ],
  },
  {
    title: "Cas particuliers",
    items: [
      "Attestation Lire et Ecrire si la situation le justifie",
      "Certificat medical detaille en cas de circonstances personnelles pertinentes",
    ],
  },
];

export const naturalisationImportantNotices = [
  "Seuls les dossiers complets sont acceptes.",
  "Les confirmations d'inscription à un examen fide ne sont pas acceptees.",
  "Les enfants majeurs doivent deposer une demande separee.",
];

export const naturalisationAfterSteps = [
  "La Commune de Prilly prend ensuite en charge la suite locale de la demande.",
  "Une audition est organisée par la Police de l'Ouest lausannois.",
  "Une convocation est ensuite adressee pour le test de connaissances elementaires.",
];

export const naturalisationSpecialCases = {
  title: "Circonstances personnelles",
  description:
    "L'autorite cantonale tient compte de maniere appropriee des situations particulieres, a condition qu'elles soient expliquees et documentées.",
  items: [
    "Handicap physique, mental ou psychique",
    "Maladie grave ou de longue duree",
    "Grandes difficultes a apprendre, lire ou ecrire",
  ],
  note: "La personne candidate doit fournir les preuves utiles pour permettre cette prise en compte.",
};

export const naturalisationCelebration = {
  title: "Apres la naturalisation",
  description:
    "Les personnes naturalisées domiciliees à Prilly recoivent une invitation personnelle à une soirée festive organisée par la Municipalite, avec remise d'un cadeau.",
};

export const naturalisationRelatedLinks = [
  {
    title: "Connaissances de francais - fide",
    description: "Verifier les exigences linguistiques et les informations utiles sur la preuve de langue.",
    href: "https://www.fide-info.ch/",
    label: "Voir fide-info.ch",
  },
];

export const naturalisationContact = {
  title: "Greffe municipal",
  addressLines: ["Route de Cossonay 40", "1008 Prilly"],
  email: "naturalisations@prilly.ch",
  phone: "+41 21 622 72 11",
};
