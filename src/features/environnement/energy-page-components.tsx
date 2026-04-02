import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeInfo,
  CalendarDays,
  CheckCircle2,
  Download,
  Mail,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type {
  EnergyDocumentCategory,
  EnergyKpi,
  EnergyProfile,
  EnergyStrategyBlock,
  EnergySubsidy,
  EnergySubsidyCategory,
  EnergyTipCard,
} from "@/features/environnement/energy-page-data";

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ActionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

export function EnergyHero({
  title,
  description,
  imageSrc,
  imageAlt,
  ctas,
  badges,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctas: Array<{ label: string; href: string }>;
  badges: string[];
}) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <FadeIn className="overflow-hidden rounded-[2rem] border border-black/8 bg-gradient-to-br from-[#f2f7f6] via-white to-[#eef5ef] p-6 shadow-soft md:p-8 xl:p-10">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} className="rounded-full bg-white text-prilly-coal shadow-sm">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">
              Transition energetique
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-prilly-coal/74 md:text-lg">{description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ctas.map((cta, index) => (
              <ActionLink key={cta.label} href={cta.href} className="inline-flex">
                <Button
                  variant={index === 0 ? "primary" : index === 1 ? "secondary" : "soft"}
                  className="w-full justify-center"
                >
                  {cta.label}
                </Button>
              </ActionLink>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08} className="overflow-hidden rounded-[2rem] border border-black/8 bg-prilly-coal shadow-soft">
        <div className="relative h-full min-h-[320px]">
          <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-prilly-coal/60 via-prilly-coal/20 to-transparent" />
          <div className="relative flex h-full flex-col justify-end gap-3 p-6 text-white md:p-8">
            <Badge className="w-fit rounded-full bg-white/15 text-white backdrop-blur">Parcours utiles</Badge>
            <p className="max-w-md text-sm leading-6 text-white/86">
              Une page pensee pour agir vite : trouver une aide, preparer un projet, comprendre la
              strategie et Télécharger les bons documents.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function EnergySectionNav({ links }: { links: Array<{ label: string; href: string }> }) {
  return (
    <div className="sticky top-20 z-20 -mx-4 overflow-x-auto border-y border-black/6 bg-white/90 px-4 py-3 backdrop-blur">
      <div className="flex gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex whitespace-nowrap rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/25 hover:text-prilly-red"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SubsidyFilterBar({
  categories,
  currentCategory,
  onCategoryChange,
  profiles,
  currentProfile,
  onProfileChange,
  search,
  onSearchChange,
}: {
  categories: EnergySubsidyCategory[];
  currentCategory: EnergySubsidyCategory;
  onCategoryChange: (category: EnergySubsidyCategory) => void;
  profiles: Array<EnergyProfile | "Tous">;
  currentProfile: EnergyProfile | "Tous";
  onProfileChange: (profile: EnergyProfile | "Tous") => void;
  search: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="space-y-5 rounded-[2rem] border border-black/8 bg-white p-5 shadow-soft md:p-6">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">
            Filtrer les aides
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "inline-flex whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
                  currentCategory === category
                    ? "border-prilly-red bg-prilly-red text-white"
                    : "border-black/8 bg-prilly-soft text-prilly-coal hover:border-prilly-red/25 hover:text-prilly-red",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">
            Recherche instantanée
          </span>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-prilly-coal/45" />
            <Input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Rechercher une aide, un equipement ou un abonnement"
              className="pl-10"
            />
          </div>
        </label>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Votre profil</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {profiles.map((profile) => (
            <button
              key={profile}
              type="button"
              onClick={() => onProfileChange(profile)}
              className={cn(
                "inline-flex whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
                currentProfile === profile
                  ? "border-prilly-coal bg-prilly-coal text-white"
                  : "border-black/8 bg-white text-prilly-coal hover:border-prilly-red/25 hover:text-prilly-red",
              )}
            >
              {profile}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function subsidyTone(category: EnergySubsidy["category"]) {
  if (category === "Efficience & sobriete") return "from-[#edf5fb] via-white to-[#eef7f3]";
  if (category === "Energies renouvelables") return "from-[#eef7ea] via-white to-[#fff6de]";
  if (category === "Mobilite") return "from-[#eef3fb] via-white to-[#f4f8ff]";
  return "from-[#f6f2fb] via-white to-[#f4f8f4]";
}

export function SubsidyCard({ item, delay = 0 }: { item: EnergySubsidy; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "h-full overflow-hidden rounded-[1.75rem] border border-black/8 bg-gradient-to-br p-5 shadow-soft md:p-6",
          subsidyTone(item.category),
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-3">
            <Badge className="bg-white text-prilly-coal">{item.category}</Badge>
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
          </div>
          <div className="rounded-[1.25rem] bg-white px-4 py-3 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/50">Montant</p>
            <p className="mt-1 text-lg font-semibold text-prilly-red">{item.amount}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.profiles.map((profile) => (
            <Badge key={profile} className="bg-white/90 text-prilly-coal">
              {profile}
            </Badge>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          {item.conditions.map((condition) => (
            <div
              key={condition}
              className="rounded-[1rem] border border-black/8 bg-white/90 px-4 py-3 text-sm leading-6 text-prilly-coal/78"
            >
              {condition}
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ActionLink href={item.conditionHref} className="inline-flex">
            <Button variant="soft" className="w-full justify-center">
              Voir conditions
            </Button>
          </ActionLink>
          <ActionLink href={item.requestHref} className="inline-flex">
            <Button variant="primary" className="w-full justify-center">
              Faire la demande
            </Button>
          </ActionLink>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export function SubsidyProcess({
  steps,
  importantPoints,
}: {
  steps: Array<{ title: string; description: string }>;
  importantPoints: string[];
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.04}>
            <article className="h-full rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">
                Etape {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{step.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.08}>
        <section className="overflow-hidden rounded-[2rem] bg-prilly-coal p-6 text-white shadow-soft md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Points importants</p>
          <div className="mt-5 space-y-3">
            {importantPoints.map((point) => (
              <div key={point} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/84">
                {point}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

function tipIcon(id: string) {
  if (id === "electricite-maison") return Sparkles;
  if (id === "eclairage") return CheckCircle2;
  if (id === "appareils") return Trees;
  return BadgeInfo;
}

export function PracticalTipsGrid({ items }: { items: EnergyTipCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = tipIcon(item.id);

        return (
          <FadeIn key={item.id} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              <div className="mt-5 space-y-2">
                {item.tips.map((tip) => (
                  <div key={tip} className="rounded-[1rem] border border-black/8 bg-prilly-soft/70 px-4 py-3 text-sm leading-6 text-prilly-coal/78">
                    {tip}
                  </div>
                ))}
              </div>
              <ActionLink href={item.ctaHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                {item.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
            </motion.article>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function ExpressTipsStrip({ items }: { items: string[] }) {
  return (
    <FadeIn>
      <section className="rounded-[2rem] border border-black/8 bg-gradient-to-r from-prilly-soft via-white to-[#eef6ef] p-5 shadow-soft md:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-prilly-coal text-white">Conseils express</Badge>
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-prilly-coal/76"
            >
              <CheckCircle2 className="h-4 w-4 text-prilly-red" />
              {item}
            </span>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}

export function ResourceLinks({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <ActionLink
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/25 hover:text-prilly-red"
            >
              {item.label}
              <ArrowRight className="h-4 w-4" />
            </ActionLink>
          ))}
    </div>
  );
}

export function StrategyFeature({
  title,
  description,
  points,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  delay = 0,
}: EnergyStrategyBlock & { delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <section className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
        <div className={cn("grid gap-0", imageSrc ? "lg:grid-cols-[0.95fr_1.05fr]" : "")}>
          {imageSrc ? (
            <div className="min-h-[220px] overflow-hidden bg-prilly-soft">
              <img src={imageSrc} alt={imageAlt ?? title} className="h-full w-full object-cover" />
            </div>
          ) : null}
          <div className="p-6 md:p-8">
            <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-prilly-coal/74">{description}</p>
            <div className="mt-5 grid gap-3">
              {points.map((point) => (
                <div key={point} className="rounded-[1.1rem] border border-black/8 bg-prilly-soft/70 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  {point}
                </div>
              ))}
            </div>
            {ctaLabel && ctaHref ? (
              <ActionLink href={ctaHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
            ) : null}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

function buildingIcon(title: string) {
  if (title.includes("photovoltaique")) return Sparkles;
  if (title.includes("Chauffage")) return AlertTriangle;
  if (title.includes("Courant")) return CheckCircle2;
  return BadgeInfo;
}

export function BuildingHighlights({
  items,
  reportHref,
}: {
  items: Array<{ title: string; description: string }>;
  reportHref: string;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item, index) => {
          const Icon = buildingIcon(item.title);

          return (
            <FadeIn key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>
      <ActionLink href={reportHref} className="inline-flex">
        <Button variant="soft">Voir le rapport EnerCoach</Button>
      </ActionLink>
    </div>
  );
}

function kpiTone(tone: EnergyKpi["tone"]) {
  if (tone === "good") return "bg-[#eff7ee] text-[#2f6a3f]";
  if (tone === "watch") return "bg-[#fff2df] text-[#8d5b16]";
  return "bg-prilly-soft text-prilly-coal";
}

export function EnerCoachDashboard({
  items,
  flows,
}: {
  items: EnergyKpi[];
  flows: string[];
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/50">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{item.value}</p>
                  <p className="mt-1 text-sm text-prilly-coal/62">{item.unit}</p>
                </div>
                <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", kpiTone(item.tone))}>
                  {item.tone === "good" ? "Suivi positif" : item.tone === "watch" ? "A surveiller" : "Reference"}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{item.note}</p>
            </motion.article>
          </FadeIn>
        ))}
      </section>

      <FadeIn delay={0.1}>
        <section className="overflow-hidden rounded-[2rem] bg-prilly-coal p-6 text-white shadow-soft md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Lecture du tableau de bord</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">Une structure prete a evoluer</h3>
          <p className="mt-3 text-sm leading-7 text-white/82">
            Les indicateurs sont presentes comme un mini dashboard pour pouvoir accueillir d'autres
            données EnerCoach par la suite sans changer l'architecture de la page.
          </p>
          <div className="mt-6 grid gap-3">
            {flows.map((flow) => (
              <div key={flow} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  {flow === "Chaleur" ? (
                    <AlertTriangle className="h-4 w-4 text-prilly-yellow" />
                  ) : flow === "Electricite" ? (
                    <Sparkles className="h-4 w-4 text-prilly-yellow" />
                  ) : (
                    <CalendarDays className="h-4 w-4 text-prilly-yellow" />
                  )}
                  <span className="text-sm font-medium text-white/86">{flow}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

export function NetworkCards({
  items,
}: {
  items: Array<{
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    label: string;
  }>;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.05}>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft"
          >
            <div className="aspect-[16/7] overflow-hidden bg-prilly-soft">
              <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-prilly-coal/74">{item.description}</p>
              <ActionLink href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                {item.label}
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
            </div>
          </motion.article>
        </FadeIn>
      ))}
    </div>
  );
}

export function DocumentsLibrary({ categories }: { categories: EnergyDocumentCategory[] }) {
  return (
    <div className="grid gap-4">
      {categories.map((category, index) => (
        <FadeIn key={category.id} delay={index * 0.04}>
          <AccordionItem title={category.title}>
            <div className="space-y-5">
              <p className="text-sm leading-6 text-prilly-coal/70">{category.description}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.5rem] border border-black/8 bg-prilly-soft/60 p-4 transition hover:-translate-y-0.5 hover:bg-prilly-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge className="bg-white text-prilly-coal">{item.type}</Badge>
                        <h4 className="mt-3 text-lg font-semibold text-prilly-coal">{item.title}</h4>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-prilly-red">
                        <Download className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-prilly-coal/62">{item.year}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                      Télécharger
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AccordionItem>
        </FadeIn>
      ))}
    </div>
  );
}

export function EnergyContactCard({
  title,
  address,
  email,
  phone,
}: {
  title: string;
  address: string[];
  email: string;
  phone: string;
}) {
  return (
    <FadeIn>
      <section className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft" id="contact">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-prilly-coal via-[#4e4e4e] to-[#35635d] p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/82">
              Le service accompagne les demandes de subvention, les questions techniques et les
              demandes d'information liees a l'energie et a l'environnement.
            </p>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Adresse</p>
              <div className="mt-4 space-y-1 text-sm text-prilly-coal/78">
                {address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center gap-2 text-prilly-red">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">
                  Email
                </span>
              </div>
              <a href={`mailto:${email}`} className="mt-4 block text-sm font-semibold text-prilly-coal hover:text-prilly-red">
                {email}
              </a>
              <a href={`mailto:${email}`} className="mt-4 inline-flex">
                <Button variant="soft" size="sm">
                  Ecrire
                </Button>
              </a>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center gap-2 text-prilly-red">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">
                  Telephone
                </span>
              </div>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="mt-4 block text-sm font-semibold text-prilly-coal hover:text-prilly-red"
              >
                {phone}
              </a>
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 inline-flex">
                <Button variant="primary" size="sm">
                  Appeler
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export function SectionIntro({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      {badge ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{badge}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-prilly-coal md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-prilly-coal/74">{description}</p>
    </div>
  );
}

export function KeyIntroCards() {
  const cards = [
    {
      title: "Pour les habitantes et habitants",
      text: "Trouver une subvention, comparer les bonnes aides et preparer une demande complete.",
      icon: Trees,
    },
    {
      title: "Pour les proprietaires",
      text: "Comprendre les soutiens  à la renovation, au solaire, aux PAC et au chauffage a distance.",
      icon: BadgeInfo,
    },
    {
      title: "Pour comprendre la vision communale",
      text: "Retrouver la strategie energetique, les reseaux et l'exemplarite des batiments communaux.",
      icon: Sparkles,
    },
    {
      title: "Pour la mobilite",
      text: "Identifier rapidement les aides velo, abonnements et solutions de mobilite partagee.",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <FadeIn key={card.title} delay={index * 0.04}>
            <article className="h-full rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{card.text}</p>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
