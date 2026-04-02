import { motion } from "framer-motion";
import { ArrowRight, BadgeInfo, CalendarDays, CheckCircle2, Mail, MapPin, Phone, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  LibraryCollectionSection,
  LibraryDayHours,
  LibraryFeatureCard,
  LibraryUsefulService,
  LibraryActivity,
} from "@/features/bibliotheque/data";

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "soft";
}) {
  const isExternal = href.startsWith("http");

  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="inline-flex">
      <Button variant={variant} className="w-full justify-center">
        {children}
      </Button>
    </a>
  );
}

function parseTimeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getLibraryOpeningStatus(hours: LibraryDayHours[], now = new Date()) {
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const today = hours.find((item) => item.dayIndex === day);

  if (today) {
    for (const slot of today.slots) {
      const start = parseTimeToMinutes(slot.start);
      const end = parseTimeToMinutes(slot.end);

      if (currentMinutes >= start && currentMinutes < end) {
        return { label: "Ouvert maintenant", detail: `Jusqu'a ${slot.label.split(" - ")[1]}`, tone: "open" as const };
      }

      if (currentMinutes < start) {
        return { label: "Ferme actuellement", detail: `Ouvre aujourd'hui a ${slot.label.split(" - ")[0]}`, tone: "closed" as const };
      }
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDayIndex = (day + offset) % 7;
    const nextDay = hours.find((item) => item.dayIndex === nextDayIndex);

    if (nextDay && nextDay.slots.length > 0) {
      return {
        label: "Ferme actuellement",
        detail: `Ouvre ${offset === 1 ? "demain" : nextDay.day.toLowerCase()} a ${nextDay.slots[0].label.split(" - ")[0]}`,
        tone: "closed" as const,
      };
    }
  }

  return { label: "Horaires a confirmer", detail: "Mise a jour en attente", tone: "neutral" as const };
}

function featureIcon(icon: LibraryFeatureCard["icon"]) {
  if (icon === "borrow") return Search;
  if (icon === "read") return Sparkles;
  if (icon === "work") return BadgeInfo;
  if (icon === "discover") return CalendarDays;
  if (icon === "participate") return Users;
  return ShieldCheck;
}

export function LibraryHero({
  title,
  description,
  badges,
  logoSrc,
  logoAlt,
  ctas,
}: {
  title: string;
  description: string;
  badges: string[];
  logoSrc: string;
  logoAlt: string;
  ctas: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <FadeIn className="overflow-hidden rounded-[2rem] border border-black/8 bg-gradient-to-br from-[#fff7ef] via-white to-[#f7eef8] p-6 shadow-soft md:p-8 xl:p-10">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} className="rounded-full bg-white text-prilly-coal shadow-sm">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Culture & lecture</p>
            <h1 className="text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">{title}</h1>
            <p className="max-w-2xl text-base leading-7 text-prilly-coal/74 md:text-lg">{description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ctas.map((cta, index) => (
              <ExternalButton
                key={cta.label}
                href={cta.href}
                variant={index === 0 ? "primary" : index === 1 ? "secondary" : "soft"}
              >
                {cta.label}
              </ExternalButton>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08} className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
        <div className="flex h-full flex-col justify-between gap-5 p-6 md:p-8">
          <div className="rounded-[1.5rem] border border-black/6 bg-gradient-to-br from-white to-[#f7f1fb] p-4">
            <img src={logoSrc} alt={logoAlt} className="w-full object-contain" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.25rem] bg-[#fff4e7] p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Ambiance</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/74">
                Un lieu culturel, educatif et intergenerationnel, pense autant pour la lecture que pour la vie locale.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-[#f5eef8] p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Usages</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/74">
                Lire, emprunter, travailler, participer a des animations ou simplement prendre le temps.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export function LibrarySectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-prilly-coal md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-prilly-coal/74">{description}</p>
    </div>
  );
}

export function LibraryPracticalGrid({
  cards,
}: {
  cards: Array<{ title: string; value: string; detail: string; kind: "address" | "phone" | "email" | "free" }>;
}) {
  const iconMap = {
    address: MapPin,
    phone: Phone,
    email: Mail,
    free: CheckCircle2,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = iconMap[card.kind];
        return (
          <FadeIn key={card.title} delay={index * 0.04}>
            <article className="h-full rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{card.title}</p>
              <h3 className="mt-2 text-xl font-semibold text-prilly-coal">{card.value}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{card.detail}</p>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function LibraryHoursCard({ hours }: { hours: LibraryDayHours[] }) {
  const status = getLibraryOpeningStatus(hours);

  return (
    <FadeIn>
      <section className="overflow-hidden rounded-[2rem] border border-black/8 bg-prilly-coal shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-prilly-coal via-[#4f4f4f] to-[#5a2e5f] p-6 text-white md:p-8">
            <div className="flex flex-wrap gap-2">
              <Badge className={cn("rounded-full", status.tone === "open" ? "bg-emerald-500/20 text-white" : "bg-white/10 text-white")}>
                {status.label}
              </Badge>
              <Badge className="rounded-full bg-white/10 text-white">Structure prete pour un statut dynamique</Badge>
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">Horaires</h3>
            <p className="mt-3 text-sm leading-7 text-white/82">{status.detail}</p>
            <p className="mt-5 text-sm leading-7 text-white/76">
              Les horaires sont presentes comme un bloc prioritaire pour repondre tout de suite  à la question la plus fréquente : "est-ce ouvert ?"
            </p>
          </div>
          <div className="grid gap-3 bg-white p-5 md:p-6">
            {hours.map((item) => (
              <div key={item.day} className="grid grid-cols-[110px_1fr] gap-3 rounded-[1.25rem] border border-black/8 bg-prilly-soft/60 p-3">
                <div className="rounded-[1rem] bg-[#f2a92a] px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                  {item.day}
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {item.slots.map((slot) => (
                    <div key={slot.label} className="rounded-[1rem] bg-[#6f2f8d] px-4 py-3 text-center text-sm font-semibold text-white">
                      {slot.label}
                    </div>
                  ))}
                  {item.slots.length === 1 ? <div className="hidden rounded-[1rem] bg-transparent sm:block" /> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export function LibraryFeaturesGrid({ items }: { items: LibraryFeatureCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const Icon = featureIcon(item.icon);
        return (
          <FadeIn key={item.title} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              <div className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <div key={point} className="rounded-[1rem] border border-black/8 bg-prilly-soft/70 px-4 py-3 text-sm leading-6 text-prilly-coal/78">
                    {point}
                  </div>
                ))}
              </div>
            </motion.article>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function LibraryCollectionsTabs({
  sections,
  activeId,
  onChange,
}: {
  sections: LibraryCollectionSection[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  const active = sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onChange(section.id)}
            className={cn(
              "inline-flex whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
              activeId === section.id
                ? "border-prilly-coal bg-prilly-coal text-white"
                : "border-black/8 bg-white text-prilly-coal hover:border-prilly-red/25 hover:text-prilly-red",
            )}
          >
            {section.label}
          </button>
        ))}
      </div>

      <FadeIn key={active.id}>
        <section className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{active.title}</h3>
            <p className="text-base leading-7 text-prilly-coal/74">{active.description}</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {active.groups.map((group) => (
              <article key={group.title} className="rounded-[1.5rem] border border-black/8 bg-prilly-soft/60 p-5">
                <h4 className="text-lg font-semibold text-prilly-coal">{group.title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-black/8 bg-white px-3 py-2 text-sm text-prilly-coal/76">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

export function LibraryUsefulServicesGrid({ items }: { items: LibraryUsefulService[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.04}>
          <article
            className={cn(
              "h-full rounded-[1.75rem] border border-black/8 p-5 shadow-soft md:p-6",
              item.tone === "soft" ? "bg-gradient-to-br from-[#fff7ef] via-white to-[#eef6ef]" : "bg-white",
            )}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            <div className="mt-5 space-y-2">
              {item.points.map((point) => (
                <div key={point} className="rounded-[1rem] border border-black/8 bg-white/90 px-4 py-3 text-sm leading-6 text-prilly-coal/78">
                  {point}
                </div>
              ))}
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

export function LibraryActivitiesGrid({ items }: { items: LibraryActivity[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.03}>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft"
          >
            <Badge className="bg-prilly-soft text-prilly-coal">{item.audience}</Badge>
            <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          </motion.article>
        </FadeIn>
      ))}
    </div>
  );
}

export function LibraryQuickLinks({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <FadeIn key={item.label} delay={index * 0.04}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full items-center justify-between rounded-[1.6rem] border border-black/8 bg-white px-5 py-5 shadow-soft transition hover:-translate-y-1 hover:shadow-float"
          >
            <span className="text-base font-semibold text-prilly-coal">{item.label}</span>
            <ArrowRight className="h-5 w-5 text-prilly-red transition group-hover:translate-x-1" />
          </a>
        </FadeIn>
      ))}
    </div>
  );
}

export function LibraryContactCard({
  title,
  address,
  email,
  phone,
  website,
  directionsHref,
}: {
  title: string;
  address: string[];
  email: string;
  phone: string;
  website: string;
  directionsHref: string;
}) {
  return (
    <FadeIn>
      <section className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft" id="contact">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-prilly-coal via-[#4d4d4d] to-[#6f2f8d] p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/82">
              La bibliotheque est  à la fois un lieu de ressources, de rencontres et de pratiques culturelles du quotidien.
            </p>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center gap-2 text-prilly-red">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Adresse</span>
              </div>
              <div className="mt-4 space-y-1 text-sm text-prilly-coal/78">
                {address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center gap-2 text-prilly-red">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">E-mail</span>
              </div>
              <a href={`mailto:${email}`} className="mt-4 block text-sm font-semibold text-prilly-coal hover:text-prilly-red">
                {email}
              </a>
              <a href={`mailto:${email}`} className="mt-4 inline-flex">
                <Button variant="soft" size="sm">
                  Ecrire
                </Button>
              </a>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center gap-2 text-prilly-red">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Telephone</span>
              </div>
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 block text-sm font-semibold text-prilly-coal hover:text-prilly-red">
                {phone}
              </a>
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 inline-flex">
                <Button size="sm">Appeler</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 border-t border-white/10 p-6 md:px-8 md:py-6">
          <ExternalButton href={directionsHref} variant="secondary">
            Itineraire
          </ExternalButton>
          <ExternalButton href={website} variant="soft">
            Voir le site
          </ExternalButton>
        </div>
      </section>
    </FadeIn>
  );
}
