import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function UtilityServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link to={href} className="group block rounded-[1.85rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Ouvrir la page
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function KeyFigureCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{label}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{value}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{note}</p>
    </div>
  );
}

export function QualityMetricCard({
  title,
  intro,
  items,
  imageSrc,
}: {
  title: string;
  intro: string;
  items: Array<{ label: string; value: string; note: string }>;
  imageSrc?: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
      <h3 className="text-2xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{intro}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-[1.35rem] bg-prilly-soft px-4 py-4">
            <p className="text-sm font-semibold text-prilly-coal">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-prilly-coal">{item.value}</p>
            <p className="mt-2 text-sm leading-5 text-prilly-coal/68">{item.note}</p>
          </div>
        ))}
      </div>
      {imageSrc ? (
        <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-black/6 bg-white">
          <img src={imageSrc} alt={title} className="w-full object-cover" />
        </div>
      ) : null}
    </div>
  );
}

export function IndustrialContactPanel({
  title,
  addressLines,
  phone,
  fax,
  email,
  website,
}: {
  title: string;
  addressLines: string[];
  phone?: string;
  fax?: string;
  email?: string;
  website?: string;
}) {
  return (
    <div className="rounded-[1.85rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Contact</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">{title}</h3>
      <div className="mt-4 space-y-2 text-sm leading-6 text-prilly-coal/76">
        {addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-5 space-y-3 text-sm text-prilly-coal/80">
        {phone ? <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-prilly-red" />{phone}</p> : null}
        {fax ? <p>Fax {fax}</p> : null}
        {email ? <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-prilly-red" />{email}</p> : null}
        {website ? (
          <a href={website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            Voir le site
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function IndustrialDocumentCard({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Document</p>
      <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function IndustrialNoticeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.65rem] border border-black/6 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </div>
  );
}
