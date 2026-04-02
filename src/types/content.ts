import type { LucideIcon } from "lucide-react";

export type NavMenuLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavMenuGroup = {
  title: string;
  links: NavMenuLink[];
};

export type NavSection = {
  label: string;
  href: string;
  description: string;
  featured?: boolean;
  groups: NavMenuGroup[];
};

export type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  theme: "red" | "yellow" | "green" | "coal";
};

export type NewsItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
};

export type EventItem = {
  id: string;
  title: string;
  category: string;
  dateLabel: string;
  location: string;
  description: string;
  href: string;
};

export type Procedure = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  documents: string[];
  steps: string[];
  practicalInfo: string[];
  ctaLabel: string;
  ctaHref: string;
  contactId: string;
  related: string[];
  faqIds: string[];
  tags: string[];
  featured?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  href: string;
  items: string[];
};

export type Contact = {
  id: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  hours: string[];
  emergency?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Spotlight = {
  title: string;
  description: string;
  href: string;
};

export type InstallProfileKey = "swiss" | "foreign" | "family";

export type InfoBadgeTone = "red" | "yellow" | "green" | "coal";

export type InstallationProfile = {
  key: InstallProfileKey;
  label: string;
  description: string;
};

export type InstallationStep = {
  id: string;
  title: string;
  summary: string;
  action: string;
  audience: string;
  required: boolean;
  badges: string[];
  relatedDocumentIds?: string[];
  ctaLabel: string;
  ctaHref: string;
  profileKeys: InstallProfileKey[];
};

export type InstallationDocument = {
  id: string;
  title: string;
  description: string;
  audience: string;
  timing: string;
  href: string;
  ctaLabel: string;
};

export type InstallationSpecialCase = {
  id: string;
  title: string;
  description: string;
  guidance: string;
  badge: string;
  profileKeys: InstallProfileKey[];
};

export type InstallationPracticalInfo = {
  label: string;
  value: string;
  tone?: InfoBadgeTone;
};

export type HousingAidKey = "family" | "individual";

export type HousingQuickaccèss = {
  title: string;
  description: string;
  href: string;
  accent: "red" | "yellow" | "green" | "coal";
};

export type HousingAidTab = {
  key: HousingAidKey;
  label: string;
  intro: string;
  audience: string;
  conditions: string[];
  duration: string;
  renewal: string;
  calculation: string;
  appointment: string;
  ctaLabel: string;
  ctaHref: string;
};

export type HousingEligibilityRule = {
  title: string;
  description: string;
  tone?: InfoBadgeTone;
};

export type HousingDocumentGroup = {
  title: string;
  description: string;
  items: string[];
};

export type HousingSupportOrganization = {
  title: string;
  description: string;
  audience: string;
  supportType: string;
  contactMode: string;
  ctaLabel: string;
  ctaHref: string;
  tone: "green" | "coal";
};

export type HousingRentalStep = {
  title: string;
  description: string;
  action: string;
};

export type HousingWarning = {
  title: string;
  description: string;
};

export type HousingContact = {
  title: string;
  role: string;
  phone: string;
  email: string;
  hours: string[];
  appointment?: string;
};
