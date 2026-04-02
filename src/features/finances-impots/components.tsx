import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type {
  ContactMini,
  DeclarationStep,
  DownloadItem,
  FinanceContact,
  FinanceCta,
  HelperProfile,
  StayTariff,
  TaxLevel,
  YearDocument,
} from "@/features/finances-impots/data";

export function InternalStickyNav({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <div className="sticky top-20 z-20 overflow-x-auto rounded-[1.6rem] border border-black/8 bg-white/92 p-3 shadow-soft backdrop-blur">
      <div className="flex min-w-max gap-2">
        {items.map((item, index) => (
          <a key={item.href} href={item.href}>
            <Button variant={index === 0 ? "primary" : "secondary"} size="sm">
              {item.label}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}

export function HeroActionCard({ item, index = 0 }: { item: FinanceCta; index?: number }) {
  const Icon = item.icon;

  return (
    <motion.a
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      href={item.href}
      className="group rounded-[1.7rem] border border-black/8 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#0c5f87]/16 hover:shadow-float"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(12,95,135,0.1)] text-[#0c5f87] shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0c5f87]">
        Ouvrir
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}

export function TaxLevelCard({ item }: { item: TaxLevel }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(12,95,135,0.1)] text-[#0c5f87]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </article>
  );
}

export function DeclarationStepper({ steps }: { steps: DeclarationStep[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <article key={step.title} className="surface h-full p-5 md:p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(12,95,135,0.12)] text-lg font-semibold text-[#0c5f87]">
            {index + 1}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

export function MiniContactCard({ item }: { item: ContactMini }) {
  return (
    <article className="surface h-full p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0c5f87]">{item.title}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.role}</p>
      <div className="mt-4 space-y-2 text-sm">
        {item.email ? <a href={`mailto:${item.email}`} className="inline-flex items-center gap-2 font-medium text-prilly-coal"><Mail className="h-4 w-4 text-prilly-red" />{item.email}</a> : null}
        {item.phone ? <p className="inline-flex items-center gap-2 text-prilly-coal"><Phone className="h-4 w-4 text-prilly-red" />{item.phone}</p> : null}
      </div>
    </article>
  );
}

export function TariffCard({ item, index = 0 }: { item: StayTariff; index?: number }) {
  const isDarkText = item.textTone === "dark";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="group overflow-hidden rounded-[1.7rem] border border-black/6 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div
        className={cn(
          "bg-gradient-to-r px-5 py-4",
          isDarkText ? "text-prilly-coal" : "text-white",
          item.tone,
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em]">{item.category}</p>
          <p className="text-xl font-semibold">{item.price}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-prilly-coal/76">{item.description}</p>
      </div>
    </motion.article>
  );
}

export function JourneyPanel({
  title,
  eyebrow,
  description,
  steps,
  highlight,
  href,
  label,
}: {
  title: string;
  eyebrow: string;
  description: string;
  steps?: string[];
  highlight?: string;
  href?: string;
  label?: string;
}) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0c5f87]">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>

      {steps?.length ? (
        <div className="mt-5 space-y-3">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[1.2rem] bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/76">
              <span className="font-semibold text-prilly-coal">{index + 1}. </span>
              {step}
            </div>
          ))}
        </div>
      ) : null}

      {highlight ? (
        <div className="mt-5 rounded-[1.2rem] border border-[rgba(12,95,135,0.12)] bg-[rgba(12,95,135,0.06)] px-4 py-4 text-sm leading-6 text-prilly-coal/78">
          {highlight}
        </div>
      ) : null}

      {href && label ? (
        <a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex">
          <Button variant="secondary" className="w-full justify-center">
            {label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      ) : null}
    </article>
  );
}

export function DownloadCard({ item }: { item: DownloadItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge className="bg-[rgba(12,95,135,0.1)] text-[#0c5f87]">{item.category}</Badge>
          <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
        <Download className="mt-1 h-5 w-5 shrink-0 text-prilly-coal/45 transition group-hover:text-[#0c5f87]" />
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0c5f87]">
        {item.label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}

export function YearFilterPills({
  years,
  activeYear,
  onChange,
}: {
  years: string[];
  activeYear: string;
  onChange: (year: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onChange(year)}
          className={cn(
            "rounded-full border px-3 py-2 text-sm font-medium transition",
            activeYear === year
              ? "border-[#0c5f87]/20 bg-[rgba(12,95,135,0.1)] text-[#0c5f87]"
              : "border-black/8 bg-white text-prilly-coal/72 hover:border-[#0c5f87]/20 hover:text-[#0c5f87]",
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export function YearDocumentList({ items }: { items: YearDocument[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <a
          key={`${item.year}-${item.title}`}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-[1.2rem] border border-black/6 bg-white px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#0c5f87]/20 hover:shadow-soft"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-prilly-soft text-prilly-coal">{item.year}</Badge>
                <Badge className="bg-[rgba(12,95,135,0.1)] text-[#0c5f87]">{item.tag}</Badge>
              </div>
              <h3 className="mt-3 text-base font-semibold text-prilly-coal">{item.title}</h3>
            </div>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-prilly-coal/45" />
          </div>
        </a>
      ))}
    </div>
  );
}

export function HelperSelector({
  profiles,
  active,
  onChange,
}: {
  profiles: HelperProfile[];
  active: string;
  onChange: (id: string) => void;
}) {
  const current = profiles.find((profile) => profile.id === active) ?? profiles[0];

  return (
    <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0c5f87]">Je ne sais pas quoi faire</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">Choisissez votre situation</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                type="button"
                onClick={() => onChange(profile.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  active === profile.id
                    ? "border-[#0c5f87]/18 bg-[rgba(12,95,135,0.1)] text-[#0c5f87]"
                    : "border-black/8 bg-white text-prilly-coal/72 hover:border-[#0c5f87]/20 hover:text-[#0c5f87]",
                )}
              >
                {profile.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.7rem] bg-gradient-to-br from-[rgba(12,95,135,0.1)] via-white to-prilly-soft p-5 text-prilly-coal">
          <h4 className="text-xl font-semibold text-prilly-coal">{current.title}</h4>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{current.description}</p>
          <div className="mt-5 grid gap-3">
            {current.actions.map((action) => (
              <div key={action} className="rounded-[1.15rem] border border-black/6 bg-white/90 px-4 py-3 text-sm text-prilly-coal/76">
                {action}
              </div>
            ))}
          </div>
          <a href={current.href} className="mt-5 inline-flex">
            <Button className="justify-center bg-[#0c5f87] hover:bg-[#0c5f87]/92">
              Aller au bon bloc
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function FinanceContactCard({ contact }: { contact: FinanceContact }) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-gradient-to-br from-[#0c5f87] to-[#1176a8] p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Contact direct</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{contact.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/84">Le bon point d'entrée pour les finances communales, la taxe de séjour et les formulaires lies aux hébergements.</p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Email</span>
            </div>
            <a href={`mailto:${contact.email}`} className="mt-3 inline-flex text-sm font-semibold text-prilly-coal">
              {contact.email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Telephone</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-prilly-coal">{contact.phone}</p>
          </div>
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-5 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Horaires</p>
            <div className="mt-3 space-y-2 text-sm leading-6 text-prilly-coal/72">
              {contact.hours.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
            </div>
            {contact.notes?.length ? (
              <AccordionItem title="Autres adresses utiles">
                <div className="space-y-2">
                  {contact.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </AccordionItem>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
