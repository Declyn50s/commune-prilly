export type IntegrationTone = "red" | "yellow" | "green" | "coal";

export type IntegrationQuickAccess = {
  title: string;
  description: string;
  href: string;
  tone: IntegrationTone;
};

export type PolicyPrinciple = {
  title: string;
  description: string;
  tone: IntegrationTone;
};

export type ResourceItem = {
  title: string;
  description: string;
  address?: string;
  phone?: string;
  website?: string;
  href: string;
};

export type FrenchCourse = {
  title: string;
  description: string;
  audience: string;
  details: string[];
  href: string;
  tone: IntegrationTone;
};

export type IntegrationDocument = {
  title: string;
  description: string;
  context: string;
  href: string;
  meta: string;
};

export type TimelineActivity = {
  year: string;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type WorshipPlace = {
  title: string;
  description: string;
  address?: string;
};

export type IntegrationContact = {
  title: string;
  role: string;
  address?: string;
  email?: string;
  phone?: string;
  note?: string;
};
