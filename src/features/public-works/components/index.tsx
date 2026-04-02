import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";

export function WorkStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "En cours": "bg-prilly-red text-white",
    Annoncé: "bg-prilly-yellow text-prilly-coal",
    Bientôt: "bg-prilly-coal text-white",
    Ponctuel: "bg-prilly-green text-white",
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status] ?? "bg-prilly-soft text-prilly-coal"}`}>
      {status}
    </span>
  );
}

export function TimelineDateBlock({
  dateLabel,
  duration,
}: {
  dateLabel: string;
  duration: string;
}) {
  return (
    <div className="flex flex-wrap gap-3 text-sm text-prilly-coal/74">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2">
        <CalendarDays className="h-4 w-4 text-prilly-red" />
        {dateLabel}
      </div>
      <div className="rounded-full border border-black/8 bg-prilly-soft px-4 py-2 font-medium">
        Durée: {duration}
      </div>
    </div>
  );
}

export function WorkNoticeCard({
  title,
  status,
  dateLabel,
  duration,
  location,
  summary,
  impacts,
  imageSrc,
  mapSrc,
  mapLabel,
  links,
  contact,
}: {
  title: string;
  status: string;
  dateLabel: string;
  duration: string;
  location: string;
  summary: string;
  impacts: string[];
  imageSrc?: string;
  mapSrc?: string;
  mapLabel?: string;
  links?: Array<{ label: string; href: string }>;
  contact: string;
}) {
  return (
    <article className="rounded-[1.95rem] border border-black/6 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-3">
          <WorkStatusBadge status={status} />
          <h3 className="text-2xl font-semibold text-prilly-coal">{title}</h3>
          <p className="inline-flex items-center gap-2 text-sm text-prilly-coal/74">
            <MapPin className="h-4 w-4 text-prilly-red" />
            {location}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <TimelineDateBlock dateLabel={dateLabel} duration={duration} />
      </div>
      <p className="mt-5 text-sm leading-6 text-prilly-coal/76">{summary}</p>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.5rem] bg-prilly-soft p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Impacts</p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-prilly-coal/76">
            {impacts.map((impact) => (
              <li key={impact} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </div>
        {imageSrc || mapSrc ? (
          <MapPreviewCard src={imageSrc ?? mapSrc ?? ""} label={mapLabel ?? "Plan"} />
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-black/10 bg-white p-4 text-sm leading-6 text-prilly-coal/60">
            Aucun visuel intégré dans cette fiche. L'essentiel de l'impact est néanmoins résumé ci-contre.
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {links?.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
            {link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        ))}
        {mapSrc || imageSrc ? (
          <a href={imageSrc ?? mapSrc} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-prilly-red px-4 py-2 text-sm font-semibold text-white">
            Consulter le plan
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
      <p className="mt-4 text-sm font-medium text-prilly-coal/76">Contact utile: {contact}</p>
    </article>
  );
}

export function TrafficImpactCard({
  title,
  description,
  bullets,
  href,
}: {
  title: string;
  description: string;
  bullets: string[];
  href: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-prilly-coal/76">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir le support
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function MapPreviewCard({ src, label }: { src: string; label: string }) {
  const isPdf = src.toLowerCase().endsWith(".pdf");
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-white">
      {isPdf ? (
        <div className="flex h-full min-h-[220px] flex-col justify-between bg-gradient-to-br from-prilly-soft via-white to-prilly-yellow/12 p-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Plan / déviation</p>
            <h4 className="mt-3 text-lg font-semibold text-prilly-coal">{label}</h4>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
              Le plan PDF est disponible directement depuis cette fiche pour consulter l'itinéraire détaillé.
            </p>
          </div>
          <a href={src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            Ouvrir le PDF
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <img src={src} alt={label} className="h-full w-full object-cover" />
      )}
    </div>
  );
}

export function UsefulLinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Ouvrir
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function WorksContactPanel({
  phone,
  email,
  secondary,
}: {
  phone: string;
  email: string;
  secondary?: { title: string; note: string };
}) {
  return (
    <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Besoin d'un renseignement ?</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">Service Infrastructures et espaces publics</h3>
      <div className="mt-5 space-y-3 text-sm text-prilly-coal/80">
        <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-prilly-red" />{phone}</p>
        <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-prilly-red" />{email}</p>
      </div>
      {secondary ? (
        <div className="mt-5 rounded-[1.35rem] bg-prilly-soft p-4 text-sm leading-6 text-prilly-coal/76">
          <p className="font-semibold text-prilly-coal">{secondary.title}</p>
          <p className="mt-2">{secondary.note}</p>
        </div>
      ) : null}
    </div>
  );
}
