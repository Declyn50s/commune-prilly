import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  DocumentCategory,
  MunicipalityCompetenceGroup,
  MunicipalityContact,
  MunicipalityDecision,
  MunicipalityFigure,
  MunicipalityMember,
  MunicipalitySummaryItem,
  ParkingInfoItem,
} from "@/features/municipalite/data";

export function MunicipalitySummaryCard({ item }: { item: MunicipalitySummaryItem }) {
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

export function DicastereTagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-black/8 bg-prilly-soft/70 px-3 py-1 text-xs font-medium text-prilly-coal"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function MunicipalMemberCard({ member, delay = 0 }: { member: MunicipalityMember; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className="surface group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden bg-prilly-coal/5">
          <img src={member.photo} alt={member.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-prilly-coal/72 to-transparent" />
      </div>

      <div className="space-y-5 p-5 md:p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-prilly-coal text-white">{member.badge}</Badge>
            {member.status ? (
              <Badge
                className={
                  member.status.tone === "warning"
                    ? "bg-prilly-yellow/25 text-prilly-coal"
                    : "bg-prilly-soft text-prilly-coal"
                }
              >
                {member.status.label}
              </Badge>
            ) : null}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-prilly-coal/66">{member.role}</p>
          </div>
        </div>

        {member.status ? (
          <div className="rounded-[1.35rem] border border-prilly-yellow/30 bg-prilly-yellow/12 px-4 py-4 text-sm leading-6 text-prilly-coal/82">
            {member.status.detail}
          </div>
        ) : null}

        {member.dicasteres.length ? (
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Dicasteres</p>
            <DicastereTagList items={member.dicasteres} />
          </div>
        ) : null}

        <div className="rounded-[1.35rem] bg-prilly-soft px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/58">Suppléance</p>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/76">{member.deputy}</p>
        </div>

        {member.note ? <p className="text-sm leading-6 text-prilly-coal/72">{member.note}</p> : null}
      </div>
    </motion.article>
  );
}

export function CompetenceCard({ item }: { item: MunicipalityCompetenceGroup }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="bg-prilly-yellow/25 text-prilly-coal">{item.owner}</Badge>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5">
        <DicastereTagList items={item.topics} />
      </div>
    </article>
  );
}

export function DecisionExcerptCard({ item, delay = 0 }: { item: MunicipalityDecision; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.38, ease: "easeOut", delay }}
      className="surface h-full p-5 md:p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={item.status === "pending" ? "bg-prilly-yellow/25 text-prilly-coal" : "bg-prilly-green/12 text-prilly-green"}>
            {item.status === "pending" ? "En attente de validation" : "publié"}
          </Badge>
          <span className="text-sm font-medium text-prilly-coal/60">{item.dateLabel}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/72">{item.summary}</p>
        </div>

        <div className="grid gap-2">
          {item.details.map((detail) => (
            <div key={detail} className="rounded-2xl bg-prilly-soft/80 px-4 py-3 text-sm text-prilly-coal/76">
              {detail}
            </div>
          ))}
        </div>

        {item.href && item.label ? (
          <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex">
            <Button variant="secondary" className="w-full justify-center">
              {item.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export function KeyFigureCard({ item }: { item: MunicipalityFigure }) {
  const toneClass = {
    red: "from-prilly-red/14 via-white to-prilly-red/4",
    coal: "from-prilly-coal/10 via-white to-prilly-coal/4",
    green: "from-prilly-green/14 via-white to-prilly-green/4",
    yellow: "from-prilly-yellow/24 via-white to-prilly-yellow/8",
  }[item.tone];

  return (
    <article className={cn("rounded-[1.7rem] border border-black/6 bg-gradient-to-br p-5 shadow-soft md:p-6", toneClass)}>
      <p className="text-sm font-medium text-prilly-coal/62">{item.label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{item.value}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.detail}</p>
    </article>
  );
}

export function DocumentCategoryCard({ item }: { item: DocumentCategory }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.coverage.map((entry) => (
          <span key={entry} className="rounded-full border border-black/8 px-3 py-1 text-xs font-medium text-prilly-coal/72">
            {entry}
          </span>
        ))}
      </div>

      {item.featured?.length ? (
        <div className="mt-5 grid gap-3">
          {item.featured.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.2rem] border border-black/6 bg-prilly-soft/55 px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-prilly-red/15 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-prilly-coal">
                    {doc.tag}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-prilly-coal">{doc.title}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-prilly-coal/45" />
              </div>
            </a>
          ))}
        </div>
      ) : null}

      <a href={item.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.label}
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export function ParkingInfoCard({ item }: { item: ParkingInfoItem }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </article>
  );
}

export function HelpfulInfoSection({
  items,
}: {
  items: Array<{ title: string; description: string; icon: React.ComponentType<{ className?: string }> }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
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

export function ContactPanel({ contact }: { contact: MunicipalityContact }) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="bg-gradient-to-br from-prilly-coal to-[#535353] p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">Contact direct</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{contact.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{contact.role}</p>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          {contact.addressLines?.length ? (
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
          ) : null}

          {contact.email ? (
            <div className="rounded-[1.5rem] bg-prilly-soft p-5">
              <div className="flex items-center gap-3 text-prilly-red">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">E-mail</span>
              </div>
              <a href={`mailto:${contact.email}`} className="mt-3 inline-flex text-sm font-semibold text-prilly-coal">
                {contact.email}
              </a>
            </div>
          ) : null}

          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Telephone</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-prilly-coal">{contact.phone}</p>
          </div>

          <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">A retenir</p>
            <div className="mt-3 space-y-2 text-sm leading-6 text-prilly-coal/72">
              {contact.notes?.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
