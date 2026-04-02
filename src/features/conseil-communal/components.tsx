import type {
  ArchiveCategory,
  BureauGroup,
  CommissionCategory,
  CouncilContact,
  CouncilDocument,
  CouncilMeeting,
  CouncilSummaryItem,
  HelpfulInfoItem,
  PartyItem,
} from "@/features/conseil-communal/data";
import { archiveIcon } from "@/features/conseil-communal/data";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CouncilSummaryCard({ item }: { item: CouncilSummaryItem }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-prilly-coal/65">{item.title}</p>
          <p className="text-3xl font-semibold tracking-tight text-prilly-coal">{item.value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </article>
  );
}

export function MeetingDocumentsList({ documents }: { documents: CouncilDocument[] }) {
  return (
    <div className="grid gap-2">
      {documents.map((document) => (
        <a
          key={document.title}
          href={document.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-black/6 bg-prilly-soft/60 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-prilly-red/15 hover:bg-white"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-white text-prilly-coal">{document.kind}</Badge>
                <span className="text-sm font-semibold text-prilly-coal">{document.title}</span>
              </div>
              {document.description ? (
                <p className="text-sm leading-6 text-prilly-coal/70">{document.description}</p>
              ) : null}
            </div>
            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-prilly-coal/45" />
          </div>
        </a>
      ))}
    </div>
  );
}

export function MeetingCard({ meeting, delay = 0 }: { meeting: CouncilMeeting; delay?: number }) {
  const statusClass =
    meeting.status === "a-venir"
      ? "bg-prilly-green/12 text-prilly-green"
      : "bg-prilly-yellow/25 text-prilly-coal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, ease: "easeOut", delay }}
      className="surface overflow-hidden p-6 md:p-7"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className={statusClass}>{meeting.status === "a-venir" ? "A venir" : "Recente"}</Badge>
              <Badge className="bg-prilly-soft text-prilly-coal/75">{meeting.location}</Badge>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{meeting.dateLabel}</h3>
              <p className="text-sm leading-6 text-prilly-coal/72">{meeting.summary}</p>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-gradient-to-br from-prilly-coal to-[#565656] px-5 py-4 text-white shadow-soft md:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Objets cles</p>
            <p className="mt-2 text-sm leading-6 text-white/88">{meeting.highlight}</p>
          </div>
        </div>

        <MeetingDocumentsList documents={meeting.documents} />

        <div className="flex flex-col gap-3 sm:flex-row">
          {meeting.actions.map((action, index) => (
            <a key={action.label} href={action.href} target="_blank" rel="noreferrer" className="inline-flex">
              <Button variant={index === 0 ? "primary" : "secondary"} className="w-full justify-center">
                {action.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function HelpfulInfoSection({ items }: { items: HelpfulInfoItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
            className="surface h-full p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-yellow/20 text-prilly-coal">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}

export function BureauMemberCard({ group }: { group: BureauGroup }) {
  return (
    <article className="surface h-full p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{group.role}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/76">{group.description}</p>
      {group.members?.length ? (
        <div className="mt-4 space-y-2">
          {group.members.map((member) => (
            <div key={member} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm font-medium text-prilly-coal">
              {member}
            </div>
          ))}
        </div>
      ) : null}
      {group.note ? <p className="mt-4 text-sm leading-6 text-prilly-coal/65">{group.note}</p> : null}
      <a
        href={group.href}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red"
      >
        Consulter la composition officielle
        <ChevronRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export function PartyCard({ party }: { party: PartyItem }) {
  return (
    <article className="surface h-full p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xl font-semibold text-prilly-coal">{party.name}</p>
          <p className="mt-1 text-sm text-prilly-coal/65">{party.label}</p>
        </div>
        <a
          href={party.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-prilly-coal transition hover:border-prilly-red/15 hover:text-prilly-red"
          aria-label={`Ouvrir le site de ${party.name}`}
        >
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-5 rounded-[1.5rem] bg-prilly-soft p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{party.contactRole}</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">{party.contactName}</p>
        {party.email ? (
          <a href={`mailto:${party.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-prilly-red">
            <Mail className="h-4 w-4" />
            {party.email}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function CommissionCard({ item }: { item: CommissionCategory }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.eyebrow}</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red"
      >
        Ouvrir la ressource utile
        <ChevronRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export function ArchiveCategoryCard({ item }: { item: ArchiveCategory }) {
  const ArchiveIcon = archiveIcon;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <ArchiveIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5">
        <AccordionItem title="Parcourir les annees">
          <div className="flex flex-wrap gap-2">
            {item.years.map((year) => (
              <a
                key={year.label}
                href={year.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/8 px-3 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/15 hover:text-prilly-red"
              >
                {year.label}
              </a>
            ))}
          </div>
        </AccordionItem>
      </div>

      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red"
      >
        Ouvrir la catégorie complete
        <ChevronRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export function ContactPanel({ contact }: { contact: CouncilContact }) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-gradient-to-br from-prilly-coal to-[#555555] p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact direct</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{contact.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">
            Pour une question sur les séances, les documents, les objets traites ou l'organisation du Conseil.
          </p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Adresse</span>
            </div>
            <div className="mt-3 space-y-1 text-sm leading-6 text-prilly-coal">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">E-mail</span>
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
            <div className="mt-3 space-y-1 text-sm leading-6 text-prilly-coal">
              <p>{contact.phone}</p>
              {contact.secondaryPhone ? <p>{contact.secondaryPhone}</p> : null}
              {contact.fax ? <p>Fax {contact.fax}</p> : null}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">A retenir</p>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/72">
              Les séances se tiennent a Castelmont et les documents officiels sont publiés par séance ou par série d'archives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoFollowSection({
  title,
  description,
  href,
  ctaLabel,
}: {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <div className="surface overflow-hidden bg-gradient-to-br from-white via-prilly-soft/80 to-prilly-yellow/20">
      <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[1.75rem] bg-prilly-coal p-6 text-white shadow-soft">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <ChevronRight className="h-7 w-7" />
          </div>
          <p className="mt-5 text-2xl font-semibold tracking-tight">{title}</p>
          <p className="mt-3 text-sm leading-6 text-white/82">
            Depuis la plateforme de diffusion, les habitantes et habitants peuvent suivre la séance meme en cas d'absence physique.
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-base leading-7 text-prilly-coal/72">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={href} target="_blank" rel="noreferrer" className="inline-flex">
              <Button className="w-full justify-center">
                {ctaLabel}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#séances" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Revenir aux séances
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CouncilAnchorNav({
  items,
  className,
}: {
  items: Array<{ label: string; href: string }>;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item, index) => (
        <a key={item.href} href={item.href}>
          <Button variant={index === 0 ? "primary" : "secondary"}>{item.label}</Button>
        </a>
      ))}
    </div>
  );
}
