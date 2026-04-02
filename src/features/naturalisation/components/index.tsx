import { ArrowRight, Mail, Phone } from "lucide-react";

export function EligibilityChecklist({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-[1.5rem] border border-black/6 bg-white px-4 py-4 shadow-soft">
          <p className="text-sm leading-6 text-prilly-coal/80">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function FormTypeCard({
  title,
  audience,
  note,
  href,
  label,
}: {
  title: string;
  audience: string;
  note: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20"
    >
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{audience}</p>
      <p className="mt-3 rounded-[1rem] bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/76">{note}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function ProcedureSteps({
  steps,
}: {
  steps: Array<{ title: string; items: string[] }>;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-prilly-red text-sm font-semibold text-white">
            {index + 1}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{step.title}</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-prilly-coal/74">
            {step.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function DocumentChecklist({
  groups,
}: {
  groups: Array<{ title: string; items: string[] }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-prilly-coal">{group.title}</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-prilly-coal/74">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ImportantNotice({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-prilly-yellow/40 bg-prilly-yellow/14 p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{title}</p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-prilly-coal/76">
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

export function HelpfulInfoCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
      <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-prilly-coal/74">
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

export function AddressPanel({
  lines,
}: {
  lines: string[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-prilly-coal p-5 text-white shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Adresse d'envoi</p>
      <div className="mt-4 space-y-1 text-sm leading-6 text-white/92">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export function ContactPanel({
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
    <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Contact</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">{title}</h3>
      <div className="mt-4 space-y-2 text-sm leading-6 text-prilly-coal/76">
        {addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-5 space-y-3 text-sm text-prilly-coal/80">
        <p className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-prilly-red" />
          {email}
        </p>
        <p className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-prilly-red" />
          {phone}
        </p>
      </div>
    </div>
  );
}

export function RelatedLinksSection({
  links,
}: {
  links: Array<{ title: string; description: string; href: string; label: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20"
        >
          <h3 className="text-lg font-semibold text-prilly-coal">{link.title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{link.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            {link.label}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </a>
      ))}
    </div>
  );
}
