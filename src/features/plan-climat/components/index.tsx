import { ArrowRight, Mail, Phone } from "lucide-react";

export function ClimateThemeCard({
  title,
  items,
  tone = "light",
}: {
  title: string;
  items: string[];
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`rounded-[1.9rem] p-5 shadow-soft ${
        tone === "dark"
          ? "bg-prilly-coal text-white"
          : "border border-black/6 bg-white text-prilly-coal"
      }`}
    >
      <h3 className={`text-2xl font-semibold ${tone === "dark" ? "text-white" : "text-prilly-coal"}`}>{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-[1.25rem] px-4 py-4 text-sm font-medium ${
              tone === "dark" ? "bg-white/10 text-white" : "bg-prilly-soft text-prilly-coal"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClimateGoalCard({
  title,
  target,
  description,
}: {
  title: string;
  target: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{title}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{target}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </div>
  );
}

export function ClimateKeyFigureCard({
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

export function TrajectorySection({
  imageSrc,
  points,
  description,
}: {
  imageSrc: string;
  points: string[];
  description: string;
}) {
  return (
    <div className="grid gap-6 rounded-[2rem] border border-black/6 bg-white p-5 shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
      <div className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-prilly-soft">
        <img src={imageSrc} alt="Trajectoire climatique de Prilly" className="w-full object-cover" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-prilly-coal">Trajectoire climatique</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-prilly-coal/76">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ParticipationSection({
  title,
  description,
  stats,
  impact,
  reportHref,
}: {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  impact: string[];
  reportHref: string;
}) {
  return (
    <div className="grid gap-6 rounded-[2rem] border border-black/6 bg-white p-5 shadow-soft lg:grid-cols-[1.05fr_1fr]">
      <div>
        <h3 className="text-2xl font-semibold text-prilly-coal">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.3rem] bg-prilly-soft px-4 py-4">
              <p className="text-sm font-semibold text-prilly-coal">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-prilly-coal">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">
          Ce que l'Assemblée a apporte
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-prilly-coal/76">
          {impact.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href={reportHref}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white"
        >
          Consulter le rapport de l'Assemblée citoyenne
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export function ActionHighlightCard({ text }: { text: string }) {
  return (
    <div className="rounded-[1.65rem] border border-black/6 bg-white p-5 shadow-soft">
      <p className="text-sm leading-6 text-prilly-coal/76">{text}</p>
    </div>
  );
}

export function ClimateDocumentCard({
  title,
  type,
  description,
  href,
  label,
}: {
  title: string;
  type: string;
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
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{type}</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function ClimateContactPanel({
  title,
  addressLines,
  email,
  phones,
}: {
  title: string;
  addressLines: string[];
  email: string;
  phones: string[];
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
        {phones.map((phone) => (
          <p key={phone} className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-prilly-red" />
            {phone}
          </p>
        ))}
      </div>
    </div>
  );
}
