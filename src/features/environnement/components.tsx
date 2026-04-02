import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { EnvironmentAction, EnvironmentContact, EnvironmentDocument, EnvironmentTheme } from "@/features/environnement/data";

export function EnvironmentPageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  ctas,
  note,
}: {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctas?: Array<{ label: string; href: string }>;
  note?: string;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="warm"
      aside={
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white/92 shadow-soft">
          <div className="aspect-[4/3] overflow-hidden bg-prilly-soft">
            <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4 p-5 md:p-6">
            {note ? <p className="text-sm leading-6 text-prilly-coal/72">{note}</p> : null}
            {ctas?.length ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {ctas.map((cta, index) => (
                  <Link key={cta.href} to={cta.href} className="inline-flex">
                    <Button variant={index === 0 ? "primary" : "soft"} className="w-full border border-black/8">
                      {cta.label}
                    </Button>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      }
    />
  );
}

export function ThemeHubCard({ item }: { item: EnvironmentTheme }) {
  const Icon = item.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.35, ease: "easeOut" }}>
      <Link to={item.href} className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
            <Icon className="h-5 w-5" />
          </div>
          <Badge className="bg-prilly-soft text-prilly-coal">{item.label}</Badge>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Ouvrir
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}

export function ActionCard({ item }: { item: EnvironmentAction }) {
  const toneClass =
    item.tone === "warning"
      ? "from-prilly-red/14 via-white to-prilly-yellow/18"
      : item.tone === "success"
        ? "from-prilly-green/16 via-white to-prilly-yellow/14"
        : "from-prilly-soft via-white to-prilly-yellow/12";

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.35, ease: "easeOut" }}>
      <Link to={item.href} className={`block h-full overflow-hidden rounded-[1.75rem] border border-black/8 bg-gradient-to-br ${toneClass} p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6`}>
        <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          {item.label}
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}

export function NoticeCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </article>
  );
}

export function DocumentCard({ item }: { item: EnvironmentDocument }) {
  const isExternal = item.href.startsWith("http");

  return (
    <motion.a
      href={item.href}
      target={isExternal || item.href.endsWith(".pdf") ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6"
    >
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
    </motion.a>
  );
}

export function TaxSummaryCard({
  title,
  amount,
  note,
}: {
  title: string;
  amount: string;
  note: string;
}) {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.35, ease: "easeOut" }} className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Taxes 2025</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-prilly-red">{amount}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{note}</p>
    </motion.article>
  );
}

export function RuleSummaryList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-coal to-[#4f4f4f] p-6 text-white shadow-soft md:p-8">
      <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-[1.25rem] border border-white/12 bg-white/6 px-4 py-3 text-sm leading-6 text-white/82">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactPanel({ contact }: { contact: EnvironmentContact }) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft" id="contact">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-green p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{contact.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{contact.description}</p>
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
            <div className="mt-4 space-y-2">
              {contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BiodiversityHighlight({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <section className="surface h-full p-6 md:p-7">
      <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <div className="mt-5 space-y-3">
        {points.map((point) => (
          <div key={point} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}

export function InvasiveSpeciesAlert({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-prilly-red/16 bg-gradient-to-br from-prilly-red/10 via-white to-prilly-yellow/12 p-6 shadow-soft md:p-8">
      <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-prilly-coal/74">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}

export function GardenCharterSteps({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <article key={step} className="surface h-full p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Etape {index + 1}</p>
          <p className="mt-4 text-sm leading-7 text-prilly-coal/76">{step}</p>
        </article>
      ))}
    </div>
  );
}

export function DrainageInfoBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="surface h-full p-6 md:p-7">
      <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function SolarIncentiveCard({
  amount,
  title,
  points,
}: {
  amount: string;
  title: string;
  points: string[];
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-green/18 via-white to-prilly-yellow/16 p-6 shadow-soft md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Aide 2026</p>
      <div className="mt-3 flex flex-wrap items-end gap-4">
        <h3 className="text-4xl font-semibold tracking-tight text-prilly-coal">{amount}</h3>
        <p className="max-w-xl text-base text-prilly-coal/72">{title}</p>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="rounded-[1.25rem] border border-black/8 bg-white/88 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ParentSectionLinks({
  links,
  current,
}: {
  links: Array<{ label: string; href: string }>;
  current: string;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={`inline-flex rounded-full px-4 py-2.5 text-sm font-medium transition ${
            current === link.href
              ? "bg-prilly-coal text-white shadow-soft"
              : "border border-black/8 bg-white text-prilly-coal hover:border-prilly-red/25 hover:text-prilly-red"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function VideoHelpCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <section className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-prilly-coal p-6 text-white md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/82">{description}</p>
        </div>
        <div className="bg-black">
          <video src={src} controls className="h-full min-h-[260px] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
