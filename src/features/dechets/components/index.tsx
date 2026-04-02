import type { ComponentType, ReactNode } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Download, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/common/reveal";
import { AccordionItem } from "@/components/ui/accordion";
import type {
  CollectionPoint,
  CollectionSummaryItem,
  WasteContact,
  WasteDocument,
  WastePathItem,
  WasteQuickaccèssItem,
  WasteTypeItem,
} from "@/features/dechets/types";
import { cn } from "@/lib/utils";

export function AlertNotice({
  title,
  children,
  tone = "yellow",
}: {
  title: string;
  children: ReactNode;
  tone?: "yellow" | "red" | "green" | "coal";
}) {
  const styles = {
    yellow: { wrap: "border-prilly-yellow/50 bg-prilly-yellow/15", icon: "bg-prilly-yellow text-prilly-coal", Icon: AlertTriangle },
    red: { wrap: "border-prilly-red/20 bg-prilly-red/8", icon: "bg-prilly-red text-white", Icon: AlertTriangle },
    green: { wrap: "border-prilly-green/30 bg-prilly-green/10", icon: "bg-prilly-green text-white", Icon: CheckCircle2 },
    coal: { wrap: "border-prilly-coal bg-prilly-coal text-white", icon: "bg-white text-prilly-coal", Icon: AlertTriangle },
  }[tone];
  const Icon = styles.Icon;
  return (
    <div className={cn("rounded-[1.75rem] border p-5 shadow-soft", styles.wrap)}>
      <div className="flex items-start gap-4">
        <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl", styles.icon)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h3 className={cn("text-lg font-semibold", tone === "coal" ? "text-white" : "text-prilly-coal")}>{title}</h3>
          <div className={cn("text-sm leading-6", tone === "coal" ? "text-white/78" : "text-prilly-coal/74")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function CollectionPointCard({ item }: { item: CollectionPoint }) {
  return (
    <div className="surface h-full p-5">
      <div className="flex items-start gap-3">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-prilly-green/12 text-prilly-green">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="text-sm text-prilly-coal/72">{item.address}</p>
          <p className="text-sm leading-6 text-prilly-coal/68">{item.note}</p>
        </div>
      </div>
    </div>
  );
}

export function CollectionSummaryCard({ item }: { item: CollectionSummaryItem }) {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white px-5 py-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.schedule}</p>
      <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.detail}</p>
    </div>
  );
}

export function WasteContactPanel({ contacts }: { contacts: WasteContact[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {contacts.map((item) => (
        <div key={item.title} className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.title}</p>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          <div className="mt-4 space-y-3 text-sm text-prilly-coal/78">
            {item.phone ? <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-prilly-red" />{item.phone}</p> : null}
            {item.email ? <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-prilly-red" />{item.email}</p> : null}
            {item.fax ? <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-prilly-red" />Fax {item.fax}</p> : null}
            {item.hours?.length ? (
              <div>
                <p className="font-medium text-prilly-coal">Horaires</p>
                <ul className="mt-2 space-y-1">{item.hours.map((hour) => <li key={hour}>{hour}</li>)}</ul>
              </div>
            ) : null}
            {item.links?.length ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/30 hover:text-prilly-red">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function DownloadCard({ item }: { item: WasteDocument }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">Document utile</p>
          <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/70">{item.description}</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-coal transition group-hover:bg-prilly-red group-hover:text-white">
          <Download className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 inline-flex rounded-full border border-black/8 px-4 py-2 text-sm font-medium text-prilly-coal transition group-hover:border-prilly-red/20 group-hover:text-prilly-red">
        {item.label}
      </div>
    </a>
  );
}

export function WasteNoticeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.6rem] border border-black/6 bg-white px-5 py-5 shadow-soft">
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{description}</p>
    </div>
  );
}

const accèssToneStyles = {
  red: "bg-prilly-red text-white",
  yellow: "bg-prilly-yellow text-prilly-coal",
  green: "bg-prilly-green text-white",
  coal: "bg-prilly-coal text-white",
  white: "bg-white text-prilly-coal",
};

export function WasteQuickaccèssCard({ item }: { item: WasteQuickaccèssItem }) {
  const Icon = item.icon;
  return (
    <Link to={item.href} className="group block rounded-[1.85rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", accèssToneStyles[item.tone])}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-prilly-coal/40 transition group-hover:translate-x-1 group-hover:text-prilly-red" />
      </div>
    </Link>
  );
}

export function RelatedPagesSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{ title: string; description: string; href: string; icon: ComponentType<{ className?: string }> }>;
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Aller plus loin</p>
        <h2 className="text-2xl font-semibold text-prilly-coal">{title}</h2>
        <p className="max-w-3xl text-sm leading-6 text-prilly-coal/70">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isExternal = item.href.startsWith("http");
          const content = (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-coal">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-prilly-red">
                Ouvrir
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </>
          );
          return (
            <Reveal key={item.href} delay={index * 0.04}>
              {isExternal ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
                  {content}
                </a>
              ) : (
                <Link to={item.href} className="group block rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-prilly-red/20">
                  {content}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function TaxInfoCard({
  title,
  description,
  details,
  tone = "white",
}: {
  title: string;
  description: string;
  details: string[];
  tone?: "white" | "yellow" | "green" | "coal";
}) {
  const toneClass = {
    white: "border-black/6 bg-white",
    yellow: "border-prilly-yellow/40 bg-prilly-yellow/15",
    green: "border-prilly-green/25 bg-prilly-green/10",
    coal: "border-prilly-coal bg-prilly-coal text-white",
  }[tone];
  return (
    <div className={cn("rounded-[1.75rem] border p-5 shadow-soft", toneClass)}>
      <h3 className={cn("text-xl font-semibold", tone === "coal" ? "text-white" : "text-prilly-coal")}>{title}</h3>
      <p className={cn("mt-3 text-sm leading-6", tone === "coal" ? "text-white/78" : "text-prilly-coal/72")}>{description}</p>
      <ul className={cn("mt-4 space-y-2 text-sm", tone === "coal" ? "text-white/86" : "text-prilly-coal/76")}>
        {details.map((detail) => (
          <li key={detail} className="flex gap-3">
            <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", tone === "coal" ? "bg-white" : "bg-prilly-red")} />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const pathToneClasses = {
  red: "from-prilly-red/8 to-white",
  yellow: "from-prilly-yellow/20 to-white",
  green: "from-prilly-green/12 to-white",
  coal: "from-prilly-coal/8 to-white",
  white: "from-white to-white",
};

export function WastePathCard({ item }: { item: WastePathItem }) {
  const content = (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.title}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.examples.map((example) => (
          <span key={example} className="rounded-full bg-white px-3 py-2 text-xs font-medium text-prilly-coal/72 ring-1 ring-black/6">
            {example}
          </span>
        ))}
      </div>
      {item.href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Consulter
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  const className = cn("group block rounded-[1.85rem] border border-black/6 bg-gradient-to-br p-5 shadow-soft transition duration-200 hover:-translate-y-1", pathToneClasses[item.tone]);
  return item.href ? <Link to={item.href} className={className}>{content}</Link> : <div className={className}>{content}</div>;
}

export function WasteTypeAccordion({ item }: { item: WasteTypeItem }) {
  return (
    <AccordionItem title={item.title}>
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-prilly-coal">Quoi</p>
          <p>{item.what}</p>
        </div>
        <div>
          <p className="font-semibold text-prilly-coal">Où</p>
          <p>{item.where}</p>
        </div>
        <div>
          <p className="font-semibold text-prilly-coal">Point important</p>
          <p>{item.note}</p>
        </div>
      </div>
    </AccordionItem>
  );
}
