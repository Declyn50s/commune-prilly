import type { LucideIcon } from "lucide-react";

export type PageLink = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  imageSrc?: string;
};

export type DocumentItem = {
  title: string;
  description: string;
  href: string;
  label: string;
  category?: string;
};

export type MobilityMode = {
  title: string;
  description: string;
  points: string[];
  href: string;
  icon: LucideIcon;
};

export type HeroConfig = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctas: Array<{ label: string; href: string }>;
};

export type LeisureRoute = {
  title: string;
  description: string;
  duration?: string;
  level?: string;
  highlights: string[];
  href?: string;
};

export type ServiceLink = {
  title: string;
  description: string;
  href: string;
  label: string;
  eyebrow?: string;
};

export type ParkingRate = {
  title: string;
  price: string;
  detail: string;
  locations: string[];
};

export type ParkingEligibility = {
  title: string;
  description: string;
  rate: string;
  notes: string[];
};

export type ContactInfo = {
  title: string;
  address?: string[];
  phone?: string;
  email?: string;
  notes?: string[];
};
