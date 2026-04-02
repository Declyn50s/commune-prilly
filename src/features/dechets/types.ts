import type { LucideIcon } from "lucide-react";

export type WasteTone = "red" | "yellow" | "green" | "coal" | "white";

export type WasteQuickaccèssItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tone: WasteTone;
};

export type WastePathItem = {
  title: string;
  description: string;
  examples: string[];
  href?: string;
  tone: WasteTone;
};

export type CollectionSummaryItem = {
  title: string;
  schedule: string;
  detail: string;
};

export type WasteDocument = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type WasteContact = {
  title: string;
  description: string;
  phone?: string;
  email?: string;
  fax?: string;
  hours?: string[];
  links?: Array<{ label: string; href: string }>;
};

export type WasteTypeItem = {
  title: string;
  what: string;
  where: string;
  note: string;
  keywords: string[];
};

export type CollectionPoint = {
  title: string;
  address: string;
  note: string;
};

export type WasteNotice = {
  title: string;
  description: string;
};

export type TaxRelief = {
  title: string;
  description: string;
  note: string;
  tone: WasteTone;
};
