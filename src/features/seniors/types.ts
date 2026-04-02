export type SeniorTone = "red" | "yellow" | "green" | "coal";

export type SeniorQuickaccèss = {
  title: string;
  description: string;
  href: string;
  tone: SeniorTone;
};

export type SeniorCommitment = {
  title: string;
  description: string;
  tone: SeniorTone;
};

export type SeniorSupport = {
  title: string;
  description: string;
  audience: string;
  highlights: string[];
  href?: string;
  tone: SeniorTone;
};

export type CMSItem = {
  title: string;
  description: string;
  area: string;
  ctaLabel: string;
  href: string;
};

export type SeniorContact = {
  title: string;
  role: string;
  phone: string;
  email?: string;
  note?: string;
};

export type HelpfulLink = {
  title: string;
  description: string;
  href: string;
};

export type NeighborhoodInitiative = {
  title: string;
  description: string;
  activities: string[];
  href?: string;
};

export type SolidarityService = {
  title: string;
  description: string;
  help: string[];
  contact: string;
};
