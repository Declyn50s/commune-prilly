import { ArrowRight, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

export function EmergencyNumberCard({
  title,
  number,
  description,
  href,
  tone,
  icon: Icon,
}: {
  title: string;
  number: string;
  description: string;
  href: string;
  tone: "red" | "white";
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "group block rounded-[1.9rem] border p-5 shadow-soft transition duration-200 hover:-translate-y-1",
        tone === "red"
          ? "border-prilly-red/15 bg-prilly-red text-white hover:bg-prilly-red/92"
          : "border-black/6 bg-white text-prilly-coal hover:border-prilly-red/20",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", tone === "red" ? "bg-white/14 text-white" : "bg-prilly-soft text-prilly-coal")}>
            <Icon className="h-5 w-5" />
          </div>
          <p className={cn("mt-4 text-sm font-semibold uppercase tracking-[0.16em]", tone === "red" ? "text-white/75" : "text-prilly-red")}>{title}</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight">{number}</p>
          <p className={cn("mt-3 text-sm leading-6", tone === "red" ? "text-white/84" : "text-prilly-coal/72")}>{description}</p>
        </div>
        <ArrowRight className={cn("mt-1 h-5 w-5 shrink-0 transition group-hover:translate-x-1", tone === "red" ? "text-white/80" : "text-prilly-coal/45")} />
      </div>
    </a>
  );
}

export function ServiceCard({
  title,
  role,
  href,
  ctaLabel,
}: {
  title: string;
  role: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{role}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-prilly-red">
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function PreventionChecklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-prilly-coal/74">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MedicalHelpCard({
  title,
  description,
  phone,
  href,
}: {
  title: string;
  description: string;
  phone: string;
  href: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-prilly-green/25 bg-prilly-green/10 p-5 shadow-soft">
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
      <a href={href} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-prilly-coal shadow-soft">
        <Phone className="h-4 w-4 text-prilly-red" />
        {phone}
      </a>
    </div>
  );
}

export function SupportInfoCard({
  title,
  description,
  points,
  href,
  ctaLabel,
}: {
  title: string;
  description: string;
  points: string[];
  href: string;
  ctaLabel: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-black/6 bg-white p-6 shadow-soft">
      <h3 className="text-2xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-prilly-coal/76">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white">
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function InsuranceCard({
  title,
  description,
  points,
  href,
  imageSrc,
}: {
  title: string;
  description: string;
  points: string[];
  href: string;
  imageSrc: string;
}) {
  return (
    <div className="grid gap-5 rounded-[2rem] border border-black/6 bg-white p-5 shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">ECA</p>
        <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-prilly-coal/76">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
          Voir les prestations ECA
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="overflow-hidden rounded-[1.6rem] border border-black/6 bg-prilly-soft">
        <img src={imageSrc} alt="Visuel ECA assurance et prévention" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export function SafetyContactPanel({
  contacts,
}: {
  contacts: Array<{ title: string; description: string; phone?: string; emergency?: string; href: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {contacts.map((item) => (
        <div key={item.title} className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
          <div className="mt-4 space-y-2 text-sm text-prilly-coal/78">
            {item.phone ? <p>Téléphone: {item.phone}</p> : null}
            {item.emergency ? <p>Urgence: <a href={`tel:${item.emergency}`} className="font-semibold text-prilly-red">{item.emergency}</a></p> : null}
          </div>
          <a href={item.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            Ouvrir le site
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      ))}
    </div>
  );
}
