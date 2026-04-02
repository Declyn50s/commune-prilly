import { useEffect, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Pagination } from "@/components/ui/Pagination";
import {
  AgendaFilters,
  AgendaHeader,
  EventCard,
} from "@/features/agenda/components";
import {
  agendaCategories,
  agendaEvents,
  agendaPeriods,
  agendaReferenceDate,
  type AgendaCategory,
  type AgendaPeriod,
} from "@/features/agenda/data";

const ITEMS_PER_PAGE = 6;

function matchesPeriod(date: string, period: AgendaPeriod) {
  if (period === "Toutes les dates") return true;

  const eventDate = new Date(`${date}T12:00:00`);
  const reference = new Date(`${agendaReferenceDate}T12:00:00`);
  const referenceYear = reference.getFullYear();
  const referenceMonth = reference.getMonth();
  const dayDiff = Math.floor((eventDate.getTime() - reference.getTime()) / 86400000);

  if (period === "Aujourd'hui") {
    return dayDiff === 0;
  }

  if (period === "Cette semaine") {
    return dayDiff >= 0 && dayDiff <= 6;
  }

  if (period === "Ce mois") {
    return eventDate.getFullYear() === referenceYear && eventDate.getMonth() === referenceMonth;
  }

  if (period === "A venir") {
    return dayDiff >= 0;
  }

  return true;
}

export default function AgendaPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AgendaCategory>("Toutes");
  const [period, setPeriod] = useState<AgendaPeriod>("Toutes les dates");
  const [sortOrder, setSortOrder] = useState<"chronological" | "reverse">("chronological");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return agendaEvents
      .filter((event) => (category === "Toutes" ? true : event.category === category))
      .filter((event) => matchesPeriod(event.date, period))
      .filter((event) => {
        if (!normalizedQuery) return true;
        const haystack =
          `${event.title} ${event.summary} ${event.location} ${event.category}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) =>
        sortOrder === "chronological" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
      );
  }, [category, period, query, sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, category, period, sortOrder]);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const visibleEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="container space-y-8 py-8 md:space-y-10 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Agenda" }]} />
      <AgendaHeader />

      <AgendaFilters
        query={query}
        category={category}
        period={period}
        sortOrder={sortOrder}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onPeriodChange={setPeriod}
        onSortOrderChange={setSortOrder}
        categories={agendaCategories}
        periods={agendaPeriods}
      />

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4 border-b border-black/8 pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal">Manifestations a venir</h2>
          <p className="text-sm text-prilly-coal/64">{filteredEvents.length} evenement(s)</p>
        </div>

        {visibleEvents.length ? (
          <div className="space-y-4">
            {visibleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-6 text-sm leading-6 text-prilly-coal/72">
            Aucun evenement ne correspond a votre recherche.
          </div>
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </section>
    </section>
  );
}
