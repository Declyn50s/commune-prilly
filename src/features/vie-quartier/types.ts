export type VQTone = "red" | "yellow" | "green" | "coal";

export type StrategyItem = {
  title: string;
  description: string;
  tone: VQTone;
};

export type ProjectHighlight = {
  title: string;
  summary: string;
  goal: string;
  href: string;
  tone: VQTone;
};

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
};

export type MethodItem = {
  title: string;
  description: string;
};

export type ResultInsight = {
  title: string;
  summary: string;
  bullets: string[];
  tone?: VQTone;
};

export type DocumentItem = {
  title: string;
  description: string;
  context: string;
  href: string;
  meta: string;
};

export type ActivityItem = {
  title: string;
  description: string;
  audience: string;
  schedule: string;
  location: string;
  contact: string;
};

export type VQContact = {
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsapp?: string;
};
