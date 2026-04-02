import { CalendarDays, Clock3, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import type { AgendaCategory, AgendaEventItem, AgendaPeriod } from "@/features/agenda/data";
import { formatAgendaCardDate, formatAgendaDate } from "@/features/agenda/data";

export function AgendaHeader() {
  return (
    <header className="space-y-3 border-b border-black/8 pb-6">
      <h1 className="text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">Agenda</h1>
      <p className="max-w-3xl text-base leading-7 text-prilly-coal/72">
        Consultez les evenements, manifestations et rendez-vous publics à Prilly.
      </p>
    </header>
  );
}

export function AgendaFilters({
  query,
  category,
  period,
  sortOrder,
  onQueryChange,
  onCategoryChange,
  onPeriodChange,
  onSortOrderChange,
  categories,
  periods,
}: {
  query: string;
  category: AgendaCategory;
  period: AgendaPeriod;
  sortOrder: "chronological" | "reverse";
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: AgendaCategory) => void;
  onPeriodChange: (value: AgendaPeriod) => void;
  onSortOrderChange: (value: "chronological" | "reverse") => void;
  categories: readonly AgendaCategory[];
  periods: readonly AgendaPeriod[];
}) {
  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.7fr))]">
        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Recherche</span>
          <div className="flex items-center gap-3 rounded-[1rem] border border-black/10 bg-[#fbfaf7] px-4 py-3">
            <Search className="h-4 w-4 text-prilly-coal/55" />
            <Input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Rechercher un evenement"
              className="h-auto rounded-none border-0 bg-transparent px-0 py-0 shadow-none"
            />
          </div>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Categorie</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value as AgendaCategory)}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Periode</span>
          <select
            value={period}
            onChange={(event) => onPeriodChange(event.target.value as AgendaPeriod)}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            {periods.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-prilly-coal">Tri</span>
          <select
            value={sortOrder}
            onChange={(event) => onSortOrderChange(event.target.value as "chronological" | "reverse")}
            className="focus-ring h-12 w-full rounded-[1rem] border border-black/10 bg-white px-4 text-sm text-prilly-coal"
          >
            <option value="chronological">Chronologique</option>
            <option value="reverse">Plus recents d'abord</option>
          </select>
        </label>
      </div>
    </section>
  );
}

export function EventCard({ event }: { event: AgendaEventItem }) {
  const dateParts = formatAgendaCardDate(event.date);

  return (
    <article className="rounded-[1.5rem] border border-black/8 bg-white p-5">
      <div className="grid gap-5 md:grid-cols-[5.5rem_minmax(0,1fr)] md:items-start">
        <div className="rounded-[1.2rem] border border-black/10 bg-[#faf8f4] px-3 py-4 text-center">
          <p className="text-2xl font-semibold leading-none text-prilly-coal">{dateParts.day}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/64">
            {dateParts.month}
          </p>
          <p className="mt-1 text-xs text-prilly-coal/56">{dateParts.year}</p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-sm text-prilly-coal/64">
            <span className="font-medium text-prilly-coal">{event.category}</span>
            <span>/</span>
            <span>{event.location}</span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal">{event.title}</h2>
          <p className="text-sm leading-6 text-prilly-coal/72">{event.summary}</p>

          <div className="grid gap-2 text-sm text-prilly-coal/72 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-red" />
              <span>
                {event.startTime} - {event.endTime}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-prilly-red" />
              <span>{event.address}</span>
            </div>
          </div>

          <Link
            to={`/agenda/${event.slug}`}
            className="focus-ring inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/24 hover:text-prilly-red"
          >
            Voir l'evenement
          </Link>
        </div>
      </div>
    </article>
  );
}

export function EventDetailMeta({ event }: { event: AgendaEventItem }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[1.3rem] border border-black/8 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/56">Date</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">{formatAgendaDate(event.date)}</p>
      </div>
      <div className="rounded-[1.3rem] border border-black/8 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/56">Horaires</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">
          {event.startTime} - {event.endTime}
        </p>
      </div>
      <div className="rounded-[1.3rem] border border-black/8 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/56">Lieu</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">{event.location}</p>
      </div>
      <div className="rounded-[1.3rem] border border-black/8 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/56">Categorie</p>
        <p className="mt-2 text-sm font-semibold text-prilly-coal">{event.category}</p>
      </div>
    </div>
  );
}

export function EventSidebar({ event }: { event: AgendaEventItem }) {
  return (
    <aside className="space-y-5">
      <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
        <h2 className="text-lg font-semibold text-prilly-coal">Informations pratiques</h2>
        <div className="mt-4 space-y-4 text-sm leading-6 text-prilly-coal/72">
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-prilly-red" />
            <span>{formatAgendaDate(event.date)}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-red" />
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-prilly-red" />
            <span>{event.address}</span>
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
        <h2 className="text-lg font-semibold text-prilly-coal">Agenda</h2>
        <Link
          to="/agenda"
          className="focus-ring mt-4 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/24 hover:text-prilly-red"
        >
          Retour a l'agenda
        </Link>
      </section>
    </aside>
  );
}
