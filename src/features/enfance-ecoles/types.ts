export type EnfanceTone = "soft" | "school" | "youth" | "practical";

export type EnfanceLinkCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
  accent: "red" | "yellow" | "green" | "coal";
  badge?: string;
};

export type EnfanceAgeGroup = {
  id: string;
  label: string;
  summary: string;
  serviceSlugs: string[];
};

export type EnfanceContact = {
  title: string;
  role: string;
  phone: string;
  email: string;
  address?: string;
  hours?: string[];
  note?: string;
};

export type EnfanceDownload = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

export type EnfancePricing = {
  title: string;
  value: string;
  detail: string;
};

export type EnfanceTimelineItem = {
  title: string;
  value: string;
  detail: string;
};

export type EnfanceNotice = {
  title: string;
  description: string;
  tone: "red" | "yellow" | "green" | "coal";
};

export type EnfanceStep = {
  title: string;
  description: string;
  hint?: string;
};

export type EnfanceFact = {
  label: string;
  value: string;
};

export type EnfanceSectionBlock = {
  title: string;
  description?: string;
  items: string[];
};

export type EnfanceServiceCard = {
  title: string;
  description: string;
  meta: string[];
  href?: string;
};

export type EnfancePoster = {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
};

export type EnfancePageData = {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  tone: EnfanceTone;
  heroCtas?: Array<{ label: string; href: string }>;
  quickFacts?: EnfanceFact[];
  notices?: EnfanceNotice[];
  childLinks?: EnfanceLinkCard[];
  steps?: EnfanceStep[];
  timeline?: EnfanceTimelineItem[];
  downloads?: EnfanceDownload[];
  pricing?: EnfancePricing[];
  serviceCards?: EnfanceServiceCard[];
  sections?: EnfanceSectionBlock[];
  posters?: EnfancePoster[];
  contacts?: EnfanceContact[];
  relatedSlugs?: string[];
};
