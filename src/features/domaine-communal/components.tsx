import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ContactInfo, DomainDocument, TopicCard } from "@/features/domaine-communal/data";

export function DomainHero({
  eyebrow,
  title,
  description,
  ctas,
  notes,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctas: Array<{ label: string; href: string }>;
  notes: string[];
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="warm"
      aside={
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
          <div className="space-y-4 p-6 md:p-7">
            <div className="space-y-3">
              {notes.map((note) => (
                <div key={note} className="rounded-[1.25rem] border border-black/8 bg-prilly-soft/55 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  {note}
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {ctas.map((cta, index) => (
                <a key={cta.href} href={cta.href} className="inline-flex">
                  <Button variant={index === 0 ? "primary" : "soft"} className="w-full border border-black/8">
                    {cta.label}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

export function TopicSectionCard({ item }: { item: TopicCard }) {
  const Icon = item.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.35, ease: "easeOut" }}>
      <a href={item.href} className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
            <Icon className="h-5 w-5" />
          </div>
          <Badge className="bg-prilly-soft text-prilly-coal">Volet</Badge>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Aller  à la section
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </a>
    </motion.div>
  );
}

export function ImportantNotice({
  title,
  description,
  icon: Icon,
  tone = "soft",
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  tone?: "soft" | "warning";
}) {
  const toneClass =
    tone === "warning"
      ? "border-prilly-red/16 bg-gradient-to-br from-prilly-red/10 via-white to-prilly-yellow/12"
      : "border-black/8 bg-white";

  return (
    <article className={`h-full rounded-[1.6rem] border p-5 shadow-soft ${toneClass} md:p-6`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </article>
  );
}

export function StepList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="surface h-full p-6 md:p-7">
      <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-[1.15rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            <span className="mr-2 font-semibold text-prilly-red">{index + 1}.</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function RulesSummaryList({
  title,
  items,
  dark = false,
}: {
  title: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <section className={`overflow-hidden rounded-[2rem] p-6 shadow-soft md:p-8 ${dark ? "bg-prilly-coal text-white" : "surface"}`}>
      <h3 className={`text-3xl font-semibold tracking-tight ${dark ? "text-white" : "text-prilly-coal"}`}>{title}</h3>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-[1.25rem] px-4 py-3 text-sm leading-6 ${
              dark ? "border border-white/12 bg-white/6 text-white/82" : "border border-black/8 text-prilly-coal/76"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeeHighlightCard({
  title,
  amount,
  note,
}: {
  title: string;
  amount: string;
  note: string;
}) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Tarif simplifie</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-prilly-red">{amount}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{note}</p>
    </article>
  );
}

export function DocumentCard({ item }: { item: DomainDocument }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Badge className="bg-prilly-soft text-prilly-coal">{item.tag}</Badge>
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <Download className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}

export function ContactPanel({ contact }: { contact: ContactInfo }) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{contact.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{contact.role}</p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Adresse</span>
            </div>
            <div className="mt-4 space-y-1 text-sm text-prilly-coal/78">
              {contact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
            </div>
            <a href={`mailto:${contact.email}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {contact.email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Telephone</span>
            </div>
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopicSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="space-y-8 scroll-mt-24">
      <div className="max-w-3xl space-y-3">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-3xl font-semibold tracking-tight text-prilly-coal md:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-prilly-coal/72">{description}</p>
      </div>
      {children}
    </section>
  );
}

export function MapHighlightCard({
  title,
  description,
  imageSrc,
  imageAlt,
  items,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  items: string[];
}) {
  return (
    <section className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#5e5e5e] to-prilly-red p-6 text-white md:p-8">
          <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/82">{description}</p>
          <div className="mt-5 grid gap-3">
            {items.map((item) => (
              <div key={item} className="rounded-[1.15rem] border border-white/12 bg-white/6 px-4 py-3 text-sm leading-6 text-white/82">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-prilly-soft">
          {imageSrc ? <img src={imageSrc} alt={imageAlt ?? title} className="h-full min-h-[260px] w-full object-cover" /> : <div className="h-full min-h-[260px] w-full" />}
        </div>
      </div>
    </section>
  );
}

export function QuickLinkCard({
  title,
  description,
  href,
  isAnchor = false,
}: {
  title: string;
  description: string;
  href: string;
  isAnchor?: boolean;
}) {
  const content = (
    <>
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir plus
        <ArrowRight className="h-4 w-4" />
      </div>
    </>
  );

  if (isAnchor) {
    return (
      <a href={href} className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
      {content}
    </Link>
  );
}
