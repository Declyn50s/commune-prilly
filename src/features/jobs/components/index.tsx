import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function JobTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/8 bg-prilly-soft px-3 py-2 text-xs font-semibold text-prilly-coal/78">
      {label}
    </span>
  );
}

export function JobMetaRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-black/6 py-3 text-sm">
      <span className="text-prilly-coal/62">{label}</span>
      <span className="text-right font-medium text-prilly-coal">{value}</span>
    </div>
  );
}

export function RecruitmentHighlights({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-[1.7rem] border border-black/6 bg-white p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function FilterChips({
  items,
  active,
  onChange,
}: {
  items: Array<{ label: string; value: string }>;
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === item.value
              ? "bg-prilly-red text-white"
              : "border border-black/8 bg-white text-prilly-coal hover:border-prilly-red/20 hover:text-prilly-red"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function JobOfferCard({
  slug,
  title,
  service,
  activity,
  contract,
  entry,
  deadline,
  summary,
  pdfHref,
  applyHref,
  tags,
}: {
  slug: string;
  title: string;
  service: string;
  activity: string;
  contract: string;
  entry: string;
  deadline: string;
  summary: string;
  pdfHref: string;
  applyHref: string;
  tags: string[];
}) {
  return (
    <article className="rounded-[1.95rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <JobTag key={tag} label={tag} />
        ))}
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{summary}</p>
      <div className="mt-5 rounded-[1.4rem] bg-prilly-soft px-4 py-2 text-sm font-medium text-prilly-coal">
        {service}
      </div>
      <div className="mt-5">
        <JobMetaRow label="Taux d'activité" value={activity} />
        <JobMetaRow label="Type de poste" value={contract} />
        <JobMetaRow label="Entrée en fonction" value={entry} />
        <JobMetaRow label="Délai de postulation" value={deadline} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link to={`/ville/offres-emploi/${slug}`} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
          Voir le poste
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a href={pdfHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
          Voir l'annonce complète
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={applyHref} className="inline-flex items-center gap-2 rounded-full bg-prilly-red px-4 py-2 text-sm font-semibold text-white">
          Postuler
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function ApplicationSteps({ items }: { items: string[] }) {
  return (
    <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
      <h3 className="text-2xl font-semibold text-prilly-coal">Comment postuler ?</h3>
      <ol className="mt-5 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-prilly-red text-sm font-semibold text-white">
              {index + 1}
            </span>
            <span className="pt-1 text-sm leading-6 text-prilly-coal/76">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function JobsContactPanel({ email }: { email: string }) {
  return (
    <div className="rounded-[1.85rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Contact RH</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">Recrutement Ville de Prilly</h3>
      <a href={`mailto:${email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        <Mail className="h-4 w-4" />
        {email}
      </a>
    </div>
  );
}

export function RelatedDocumentsSection({
  items,
}: {
  items: Array<{ title: string; description: string; href: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="group block rounded-[1.7rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Annonce</p>
          <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            Ouvrir le PDF
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </a>
      ))}
    </div>
  );
}
