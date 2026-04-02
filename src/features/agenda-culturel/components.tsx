import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, Mail, MapPin, Phone, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AgendaEvent, EventAudience, EventMonth, EventType } from "@/features/agenda-culturel/events";

export function AgendaHero() {
  return (
    <div className="space-y-4">
      <div className="rounded-[1.75rem] border border-black/8 bg-white/92 p-5 shadow-soft">
        <p className="text-sm leading-6 text-prilly-coal/76">
          Retrouvez ici les rendez-vous culturels soutenus par la commune: Cinéma, concerts, propositions jeunesse et temps forts locaux a reperer en quelques secondes.
        </p>
      </div>
      <a href="/agenda" className="inline-flex">
        <Button variant="ghost" className="border border-black/8 bg-white">
          Vers l'agenda general
          <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring inline-flex rounded-full px-4 py-2.5 text-sm font-medium transition ${
        active ? "bg-prilly-coal text-white shadow-soft" : "border border-black/8 bg-white text-prilly-coal hover:border-prilly-red/25 hover:text-prilly-red"
      }`}
    >
      {label}
    </button>
  );
}

export function EventFilterBar({
  activeMonth,
  activeType,
  activeAudience,
  onMonthChange,
  onTypeChange,
  onAudienceChange,
  monthOptions,
  typeOptions,
  audienceOptions,
}: {
  activeMonth: EventMonth | "all";
  activeType: EventType | "all";
  activeAudience: EventAudience | "all";
  onMonthChange: (value: EventMonth | "all") => void;
  onTypeChange: (value: EventType | "all") => void;
  onAudienceChange: (value: EventAudience | "all") => void;
  monthOptions: Array<{ id: EventMonth; label: string }>;
  typeOptions: EventType[];
  audienceOptions: EventAudience[];
}) {
  return (
    <div className="space-y-4 rounded-[2rem] border border-black/6 bg-white p-5 shadow-soft md:p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Par mois</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={activeMonth === "all"} label="Tous" onClick={() => onMonthChange("all")} />
          {monthOptions.map((option) => (
            <FilterChip key={option.id} active={activeMonth === option.id} label={option.label} onClick={() => onMonthChange(option.id)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Par type</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={activeType === "all"} label="Tous" onClick={() => onTypeChange("all")} />
          {typeOptions.map((option) => (
            <FilterChip key={option} active={activeType === option} label={option} onClick={() => onTypeChange(option)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Par public</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={activeAudience === "all"} label="Tous" onClick={() => onAudienceChange("all")} />
          {audienceOptions.map((option) => (
            <FilterChip key={option} active={activeAudience === option} label={option} onClick={() => onAudienceChange(option)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCardShell({
  image,
  children,
  onOpen,
}: {
  image: string;
  children: ReactNode;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="aspect-[16/9] overflow-hidden bg-prilly-soft">
          <img src={image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
        <div className="p-5 md:p-6">{children}</div>
      </button>
    </motion.article>
  );
}

export function EventCard({ event, onOpen }: { event: AgendaEvent; onOpen: (event: AgendaEvent) => void }) {
  return (
    <EventCardShell image={event.image} onOpen={() => onOpen(event)}>
      <div className="flex flex-wrap gap-2">
        <Badge>{event.type}</Badge>
        <Badge className="bg-prilly-yellow/20 text-prilly-coal">{event.audience}</Badge>
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">{event.date}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">{event.title}</h3>
      <div className="mt-4 space-y-2 text-sm text-prilly-coal/72">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-prilly-red" />
          {event.location}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{event.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir details
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </EventCardShell>
  );
}

export function RecurringEventCard({ event, onOpen }: { event: AgendaEvent; onOpen: (event: AgendaEvent) => void }) {
  return (
    <EventCardShell image={event.image} onOpen={() => onOpen(event)}>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-prilly-green/12 text-prilly-green">{event.categoryLabel}</Badge>
        <Badge>{event.type}</Badge>
        <Badge className="bg-prilly-yellow/20 text-prilly-coal">{event.audience}</Badge>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{event.title}</h3>
      <div className="mt-4 flex items-center gap-2 text-sm text-prilly-coal/72">
        <MapPin className="h-4 w-4 text-prilly-red" />
        {event.location}
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{event.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {event.recurringDates?.map((date) => (
          <span key={date} className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">
            {date}
          </span>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir details
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </EventCardShell>
  );
}

export function EventModal({
  event,
  onClose,
}: {
  event: AgendaEvent | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {event ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-prilly-coal/55 p-4 md:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-white shadow-float"
            onClick={(eventClick) => eventClick.stopPropagation()}
          >
            <div className="aspect-[16/8] overflow-hidden bg-prilly-soft">
              <img src={event.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-5 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{event.type}</Badge>
                    <Badge className="bg-prilly-yellow/20 text-prilly-coal">{event.audience}</Badge>
                    {event.isRecurring ? <Badge className="bg-prilly-green/12 text-prilly-green">évènement recurrent</Badge> : null}
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{event.title}</h3>
                </div>
                <button type="button" onClick={onClose} className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 text-prilly-coal transition hover:bg-prilly-soft">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-[1.5rem] bg-prilly-soft p-4">
                  <div className="flex items-center gap-2 text-prilly-red">
                    <CalendarDays className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">Date</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-prilly-coal">{event.date ?? "Voir les dates ci-dessous"}</p>
                </div>
                <div className="rounded-[1.5rem] bg-prilly-soft p-4">
                  <div className="flex items-center gap-2 text-prilly-red">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">Lieu</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-prilly-coal">{event.location}</p>
                </div>
                <div className="rounded-[1.5rem] bg-prilly-soft p-4">
                  <div className="flex items-center gap-2 text-prilly-red">
                    <Clock3 className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">Infos pratiques</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-prilly-coal">{event.audience}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-prilly-coal/74">{event.details}</p>

              <div className="mt-6 space-y-3">
                {event.schedule.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                    {item}
                  </div>
                ))}
              </div>

              {event.recurringDates?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {event.recurringDates.map((date) => (
                    <span key={date} className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">
                      {date}
                    </span>
                  ))}
                </div>
              ) : null}

              <a href={event.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
                <Button>
                  Ouvrir le site
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function TimelineSection({
  groupedEvents,
  onOpen,
}: {
  groupedEvents: Array<{ monthLabel: string; events: AgendaEvent[] }>;
  onOpen: (event: AgendaEvent) => void;
}) {
  return (
    <div className="space-y-6">
      {groupedEvents.map((group) => (
        <section key={group.monthLabel} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-black/8" />
            <h3 className="text-lg font-semibold uppercase tracking-[0.16em] text-prilly-coal/62">{group.monthLabel}</h3>
            <div className="h-px flex-1 bg-black/8" />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {group.events.map((event) =>
              event.isRecurring ? (
                <RecurringEventCard key={event.id} event={event} onOpen={onOpen} />
              ) : (
                <EventCard key={event.id} event={event} onOpen={onOpen} />
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ContactPanel({
  title,
  address,
  email,
  phone,
}: {
  title: string;
  address: string[];
  email: string;
  phone: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#555555] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">Pour les informations pratiques et l'accompagnement des rendez-vous culturels.</p>
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
