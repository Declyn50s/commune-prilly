import { useMemo, useState } from "react";
import { BadgeInfo, CalendarDays, Sparkles } from "lucide-react";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import {
  AgendaHero,
  ContactPanel,
  EventCard,
  EventFilterBar,
  EventModal,
  RecurringEventCard,
  TimelineSection,
} from "@/features/agenda-culturel/components";
import {
  agendaAudiences,
  agendaEvents,
  agendaMonths,
  agendaTypes,
  culturalAgendaContact,
  type AgendaEvent,
  type EventAudience,
  type EventMonth,
  type EventType,
} from "@/features/agenda-culturel/events";

const monthLabels = Object.fromEntries(agendaMonths.map((item) => [item.id, item.label])) as Record<EventMonth, string>;

function eventMatches(event: AgendaEvent, month: EventMonth | "all", type: EventType | "all", audience: EventAudience | "all") {
  const matchesMonth = month === "all" || event.months.includes(month);
  const matchesType = type === "all" || event.type === type;
  const matchesAudience = audience === "all" || event.audience === audience;

  return matchesMonth && matchesType && matchesAudience;
}

export default function AgendaCulturelPage() {
  const [activeMonth, setActiveMonth] = useState<EventMonth | "all">("all");
  const [activeType, setActiveType] = useState<EventType | "all">("all");
  const [activeAudience, setActiveAudience] = useState<EventAudience | "all">("all");
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);

  const filteredEvents = useMemo(
    () => agendaEvents.filter((event) => eventMatches(event, activeMonth, activeType, activeAudience)),
    [activeAudience, activeMonth, activeType],
  );

  const upcomingEvents = useMemo(() => filteredEvents.slice(0, 2), [filteredEvents]);

  const groupedEvents = useMemo(() => {
    const visibleMonths = activeMonth === "all" ? agendaMonths.map((item) => item.id) : [activeMonth];

    return visibleMonths
      .map((month) => ({
        monthLabel: monthLabels[month],
        events: filteredEvents.filter((event) => event.months.includes(month)),
      }))
      .filter((group) => group.events.length > 0);
  }, [activeMonth, filteredEvents]);

  return (
    <RubricLayout
      breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Loisirs", href: "/loisirs" }, { label: "Agenda culturel" }]}
      eyebrow="Culture & rendez-vous"
      title="Agenda culturel"
      description="Un agenda visuel et filtrable pour repérer rapidement les rendez-vous soutenus par la commune, avec les dates, les lieux et les details utiles en un coup d'oeil."
      tone="warm"
      aside={<AgendaHero />}
    >
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Filtres utiles"
          title="Voir tout de suite ce qui se passe ce mois-ci"
          description="Les filtres par mois, type et public permettent de scanner l'agenda sans devoir faire defiler une liste statique."
        />
        <EventFilterBar
          activeMonth={activeMonth}
          activeType={activeType}
          activeAudience={activeAudience}
          onMonthChange={setActiveMonth}
          onTypeChange={setActiveType}
          onAudienceChange={setActiveAudience}
          monthOptions={agendaMonths}
          typeOptions={agendaTypes}
          audienceOptions={agendaAudiences}
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Prochains évènements"
          title="Les rendez-vous les plus proches remontent en premier"
          description="Avec peu d'évènements, la page reste riche grace à une vraie mise en avant visuelle et à une gestion specifique des rendez-vous recurrents."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {upcomingEvents.map((event) =>
            event.isRecurring ? (
              <RecurringEventCard key={event.id} event={event} onOpen={setSelectedEvent} />
            ) : (
              <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
            ),
          )}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="évènements"
          title="Une lecture par cartes puis par mois"
          description="La Lanterne magique garde une seule grande carte avec toutes ses dates 2026, pendant que les rendez-vous ponctuels restent immediatement comparables."
        />
        <div className="grid gap-4 xl:grid-cols-3">
          {filteredEvents.map((event) =>
            event.isRecurring ? (
              <RecurringEventCard key={event.id} event={event} onOpen={setSelectedEvent} />
            ) : (
              <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
            ),
          )}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Timeline"
          title="Une autre facon de parcourir le semestre"
          description="La vue par mois permet de repérer rapidement les pics de programmation et de retrouver les évènements sans effort."
        />
        <TimelineSection groupedEvents={groupedEvents} onOpen={setSelectedEvent} />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="surface p-5 md:p-6">
          <div className="flex items-center gap-3 text-prilly-red">
            <CalendarDays className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">A retenir</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">Une programmation courte, mais tres lisible</h2>
          <p className="mt-3 text-sm leading-7 text-prilly-coal/74">
            L'agenda culturel met ici l'accent sur la rapidite de lecture: dates claires, visuels identifies, badges utiles et details accèssibles au clic.
          </p>
        </article>
        <article className="surface p-5 md:p-6">
          <div className="flex items-center gap-3 text-prilly-red">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">Types de rendez-vous</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {agendaTypes.map((item) => (
              <span key={item} className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">
                {item}
              </span>
            ))}
            <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">évènements soutenus par la commune</span>
            <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Vue mobile prioritaire</span>
          </div>
        </article>
      </section>

      <section>
        <ContactPanel
          title={culturalAgendaContact.title}
          address={culturalAgendaContact.address}
          email={culturalAgendaContact.email}
          phone={culturalAgendaContact.phone}
        />
      </section>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </RubricLayout>
  );
}
