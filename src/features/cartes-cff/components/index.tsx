import { ArrowRight, Phone } from "lucide-react";

export function InfoGrid({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-[1.6rem] border border-black/6 bg-white px-4 py-4 shadow-soft">
          <p className="text-sm leading-6 text-prilly-coal/80">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function PricingCard({
  title,
  window,
  halfFare,
  fullFare,
}: {
  title: string;
  window: string;
  halfFare: string;
  fullFare: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-prilly-red/12 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{title}</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{window}</h3>
      <div className="mt-5 grid gap-3">
        <div className="rounded-[1.2rem] bg-[#fff2f2] px-4 py-4">
          <p className="text-xs uppercase tracking-[0.14em] text-prilly-coal/60">Avec demi-tarif</p>
          <p className="mt-2 text-3xl font-semibold text-prilly-coal">{halfFare}</p>
        </div>
        <div className="rounded-[1.2rem] bg-prilly-soft px-4 py-4">
          <p className="text-xs uppercase tracking-[0.14em] text-prilly-coal/60">Sans demi-tarif</p>
          <p className="mt-2 text-3xl font-semibold text-prilly-coal">{fullFare}</p>
        </div>
      </div>
    </div>
  );
}

export function StepsSection({
  steps,
}: {
  steps: string[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step} className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-prilly-red text-sm font-semibold text-white">
            {index + 1}
          </div>
          <p className="mt-4 text-sm leading-6 text-prilly-coal/78">{step}</p>
        </div>
      ))}
    </div>
  );
}

export function ValidityCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{title}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/76">{description}</p>
    </div>
  );
}

export function RefundCard({
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

export function UsefulLinkCard({
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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20"
    >
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function ContactPanel({
  title,
  phone,
}: {
  title: string;
  phone: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Contact</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-5 flex items-center gap-3 text-sm text-prilly-coal/80">
        <Phone className="h-4 w-4 text-prilly-red" />
        {phone}
      </p>
    </div>
  );
}
