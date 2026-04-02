import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, FileText, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type {
  CandidateList,
  ElectionType,
  HelpfulLink,
  OfficialDocument,
  ResultSummary,
  TimelineItem,
  VoteMethod,
} from "@/features/votations-elections/data";

export function VotingHero({
  title,
  description,
  intro,
  ctas,
}: {
  title: string;
  description: string;
  intro: string;
  ctas: Array<{ label: string; href: string }>;
}) {
  return (
    <PageHero
      eyebrow="Information civique locale"
      title={title}
      description={description}
      tone="light"
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
            <p className="text-sm leading-6 text-prilly-coal/76">{intro}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta, index) => (
              <a key={cta.href} href={cta.href} className="inline-flex">
                <Button variant={index === 0 ? "primary" : "secondary"}>{cta.label}</Button>
              </a>
            ))}
          </div>
        </div>
      }
    />
  );
}

export function VoteMethodCard({ item }: { item: VoteMethod }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-4 rounded-[1.5rem] bg-prilly-soft p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">délai</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">{item.deadline}</p>
        <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.detail}</p>
      </div>
    </article>
  );
}

export function VideoHelpSection({
  title,
  description,
  videoSrc,
  fallbackHref,
}: {
  title: string;
  description: string;
  videoSrc: string;
  fallbackHref: string;
}) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-gradient-to-br from-prilly-coal to-[#555555] p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Aide video</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{description}</p>
          <a href={fallbackHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
            <Button variant="secondary">
              Voir le mode d'emploi officiel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="p-4 md:p-6">
          <div className="overflow-hidden rounded-[1.75rem] border border-black/8 bg-black shadow-soft">
            <video controls preload="metadata" className="w-full">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ElectionTypeCard({ item }: { item: ElectionType }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <h3 className="text-2xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 grid gap-3">
        <div className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal"><span className="font-semibold">Systeme:</span> {item.system}</div>
        <div className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal"><span className="font-semibold">Composition:</span> {item.seats}</div>
        <div className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal"><span className="font-semibold">Date:</span> {item.date}</div>
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{item.note}</p>
    </article>
  );
}

export function ElectionTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <motion.article
          key={`${item.date}-${item.title}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
          className="surface p-5"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="md:min-w-56">
              <Badge className={item.status === "a-venir" ? "bg-prilly-green/12 text-prilly-green" : ""}>{item.status === "a-venir" ? "A venir" : "Passe"}</Badge>
              <p className="mt-3 text-lg font-semibold text-prilly-coal">{item.date}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function CandidateListCard({ item }: { item: CandidateList }) {
  return (
    <article className="surface h-full p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Liste deposee</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.name}</h3>
      <div className="mt-5 space-y-2">
        {item.candidates.map((candidate) => (
          <div key={candidate} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm font-medium text-prilly-coal">
            {candidate}
          </div>
        ))}
      </div>
    </article>
  );
}

export function ResultSummaryCard({ item }: { item: ResultSummary }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <h3 className="text-2xl font-semibold text-prilly-coal">{item.title}</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {item.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-prilly-soft px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{stat.label}</p>
            <p className="mt-2 text-lg font-semibold text-prilly-coal">{stat.value}</p>
          </div>
        ))}
      </div>
      {item.details?.length ? (
        <div className="mt-5 space-y-2">
          {item.details.map((detail) => (
            <div key={`${detail.label}-${detail.value}`} className="flex flex-col gap-1 rounded-2xl border border-black/8 px-4 py-3 text-sm text-prilly-coal md:flex-row md:items-center md:justify-between">
              <span className="font-medium">{detail.label}</span>
              <span className="text-prilly-coal/78">
                {detail.value}
                {detail.note ? ` - ${detail.note}` : ""}
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function OfficialDocumentCard({ item }: { item: OfficialDocument }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge>{item.category}</Badge>
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <FileText className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.label}
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export function HelpfulLinksSection({ items }: { items: HelpfulLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            {item.label}
            <ChevronRight className="h-4 w-4" />
          </div>
        </a>
      ))}
    </div>
  );
}

export function VotingContactPanel({
  title,
  addressLines,
  email,
  phone,
}: {
  title: string;
  addressLines: string[];
  email: string;
  phone: string;
}) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-gradient-to-br from-prilly-coal to-[#555555] p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">
            Un point d'entrée clair pour les questions liees aux scrutins, a l'information civique et aux documents officiels.
          </p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Adresse</span>
            </div>
            <div className="mt-3 space-y-1 text-sm leading-6 text-prilly-coal">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">E-mail</span>
            </div>
            <a href={`mailto:${email}`} className="mt-3 inline-flex text-sm font-semibold text-prilly-coal">
              {email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-prilly-soft p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Telephone</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-prilly-coal">{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
