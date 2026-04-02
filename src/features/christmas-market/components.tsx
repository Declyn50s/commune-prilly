import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Download, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type {
  DocumentItem,
  EventSummaryItem,
  HighlightItem,
  ProgramDay,
} from "@/features/christmas-market/data";

export function EventSummaryCard({ item }: { item: EventSummaryItem }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
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

export function DayProgramCard({ day }: { day: ProgramDay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full overflow-hidden"
    >
      <div className="border-b border-black/6 bg-gradient-to-br from-prilly-red/8 via-prilly-yellow/18 to-white p-5 md:p-6">
        <Badge className="bg-white text-prilly-coal">{day.hours}</Badge>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{day.label}</h3>
        <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{day.date}</p>
      </div>
      <div className="space-y-3 p-5 md:p-6">
        {day.items.map((item) => (
          <div key={`${day.label}-${item.time ?? item.title}-${item.title}`} className="rounded-[1.25rem] border border-black/8 bg-white px-4 py-4">
            {item.time ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.time}</p> : null}
            <p className="mt-1 text-sm font-semibold text-prilly-coal">{item.title}</p>
            {item.description ? <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p> : null}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export function HighlightCard({ item }: { item: HighlightItem }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </article>
  );
}

export function SolidarityInfoBlock({ title, description, points }: { title: string; description: string; points: string[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#575757] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Dimension solidaire</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{description}</p>
        </div>
        <div className="grid gap-3 p-6 md:p-8">
          {points.map((point) => (
            <div key={point} className="flex gap-3 rounded-[1.5rem] bg-white px-4 py-4 text-sm leading-6 text-prilly-coal/78">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-prilly-green" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DocumentDownloadCard({ item }: { item: DocumentItem }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge className="bg-prilly-soft text-prilly-coal">Document</Badge>
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <Download className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.cta}
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export function ContactPanel({
  service,
  address,
  email,
  phone,
}: {
  service: string;
  address: string[];
  email: string;
  phone: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#555555] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{service}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">Pour les informations sur l'évènement, les partenaires et les prochaines editions.</p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Adresse</span>
            </div>
            <div className="mt-4 space-y-1 text-sm text-prilly-coal/78">
              {address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
            </div>
            <a href={`mailto:${email}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Telephone</span>
            </div>
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClosingSection({ title, description }: { title: string; description: string }) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-red/8 p-6 shadow-soft md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/62">Edition passee, elan conserve</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-prilly-coal/74">{description}</p>
        </div>
        <div className="rounded-[1.5rem] border border-prilly-yellow/40 bg-white/92 px-5 py-4 text-sm font-medium text-prilly-coal shadow-soft">
          L'ambiance familiale, locale et solidaire installe déjà le rendez-vous 2026.
        </div>
      </div>
    </section>
  );
}
