import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, Sparkles } from "lucide-react";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type {
  AdRate,
  ArchiveIssue,
  ArchiveYear,
  ContributionRule,
  FeaturedIssue,
  JournalStat,
  PublicationScheduleItem,
} from "@/features/prillheraut/data";

export function FeaturedIssueCard({ issue, compact = false }: { issue: FeaturedIssue; compact?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface overflow-hidden"
    >
      <div className={compact ? "space-y-5 p-5" : "grid gap-0 lg:grid-cols-[0.42fr_0.58fr]"}>
        <div className={compact ? "" : "border-b border-black/6 bg-gradient-to-br from-prilly-coal via-[#585858] to-prilly-red p-6 text-white lg:border-b-0 lg:border-r"}>
          <div className={`overflow-hidden rounded-[1.75rem] ${compact ? "border border-prilly-red/15 bg-gradient-to-br from-prilly-coal via-[#525252] to-prilly-red p-5 text-white" : "border border-white/10 bg-white/8 p-6 backdrop-blur-sm"}`}>
            <div className="flex items-center justify-between gap-3">
              <Badge className={compact ? "bg-white/14 text-white" : "bg-white/14 text-white"}>{issue.tag}</Badge>
              <span className={`${compact ? "text-white/70" : "text-white/70"} text-xs font-semibold uppercase tracking-[0.18em]`}>{issue.issueNumber}</span>
            </div>
            <p className={`mt-8 text-sm font-semibold uppercase tracking-[0.18em] ${compact ? "text-white/70" : "text-white/70"}`}>{issue.period}</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{compact ? issue.period : "Prill'heraut"}</h3>
            <p className={`mt-3 max-w-xs text-sm leading-6 ${compact ? "text-white/82" : "text-white/82"}`}>
              {compact ? issue.highlight : "Le journal communal de Prilly, entre actualités, agenda, culture et informations pratiques."}
            </p>
          </div>
        </div>

        <div className={compact ? "" : "p-6 md:p-8"}>
          <div className="flex flex-wrap gap-2">
            <Badge>{issue.period}</Badge>
            <Badge className="bg-prilly-yellow/20 text-prilly-coal">{issue.issueNumber}</Badge>
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{issue.title}</h3>
          <p className="mt-4 text-sm leading-7 text-prilly-coal/74">{issue.summary}</p>
          <div className="mt-5 rounded-[1.5rem] bg-prilly-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Pourquoi le lire</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/78">{issue.highlight}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {issue.articles.map((article) => (
              <span key={article} className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">
                {article}
              </span>
            ))}
          </div>
          <a href={issue.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
            <Button>
              Lire le PDF
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function EditorialStatCard({ item }: { item: JournalStat }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full p-5 md:p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">{item.title}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">{item.value}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </motion.article>
  );
}

export function PublicationTimeline({ items }: { items: PublicationScheduleItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <motion.article
          key={item.issueNumber}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
          className="surface p-5"
        >
          <div className="grid gap-4 md:grid-cols-[120px_1fr_1fr] md:items-center">
            <div className="rounded-[1.5rem] bg-prilly-coal px-4 py-3 text-sm font-semibold text-white">{item.issueNumber}</div>
            <div className="rounded-[1.5rem] bg-prilly-soft px-4 py-4">
              <div className="flex items-center gap-2 text-prilly-red">
                <Clock3 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">délai de remise</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-prilly-coal">{item.copyDeadline}</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/8 px-4 py-4">
              <div className="flex items-center gap-2 text-prilly-red">
                <CalendarDays className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">Parution</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-prilly-coal">{item.publicationDate}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function ContributionInfoCard({ item }: { item: ContributionRule }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 space-y-3">
        {item.points.map((point) => (
          <div key={point} className="flex gap-3 rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/78">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-prilly-green" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export function AdPricingCard({ item }: { item: AdRate }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.format}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{item.price}</p>
      <div className="mt-4 rounded-[1.5rem] bg-prilly-soft px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Dimensions</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">{item.dimensions}</p>
      </div>
    </article>
  );
}

export function ArchiveIssueCard({ issue }: { issue: ArchiveIssue }) {
  const card = (
    <div className="rounded-[1.25rem] border border-black/8 bg-white px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
      <p className="text-sm font-medium text-prilly-coal">{issue.label}</p>
      {issue.note ? <p className="mt-2 text-xs leading-5 text-prilly-coal/58">{issue.note}</p> : null}
    </div>
  );

  if (issue.href) {
    return (
      <a href={issue.href} target="_blank" rel="noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
}

export function ArchiveYearAccordion({ item }: { item: ArchiveYear }) {
  return (
    <AccordionItem title={`${item.year} · ${item.issues.length} edition(s)`}>
      <div className="space-y-4">
        <p>{item.description}</p>
        {item.highlight ? (
          <div className="rounded-[1.5rem] border border-prilly-yellow/35 bg-prilly-yellow/14 px-4 py-3 text-sm text-prilly-coal/78">
            {item.highlight}
          </div>
        ) : null}
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {item.issues.map((issue) => (
            <ArchiveIssueCard key={`${item.year}-${issue.label}`} issue={issue} />
          ))}
        </div>
        <a href={item.yearHref} target="_blank" rel="noreferrer" className="inline-flex">
          <Button variant="ghost" size="sm" className="border border-black/8 bg-white">
            Ouvrir l'année dans les archives officielles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </AccordionItem>
  );
}

export function ContactPanel({ email, note }: { email: string; note: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#555555] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact redaction</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">Une seule adresse pour contribuer ou se renseigner</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{note}</p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
            </div>
            <a href={`mailto:${email}`} className="mt-4 inline-flex text-lg font-semibold text-prilly-coal transition hover:text-prilly-red">
              {email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">A retenir</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/74">
              Textes, visuels, logos et demandes concernant les annonces peuvent passer par la meme adresse de redaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
