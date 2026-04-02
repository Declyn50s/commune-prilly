import { Navigate, useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { EventDetailMeta, EventSidebar } from "@/features/agenda/components";
import { formatAgendaDate, getAgendaEventBySlug } from "@/features/agenda/data";

export default function AgendaDetailPage() {
  const { slug = "" } = useParams();
  const event = getAgendaEventBySlug(slug);

  if (!event) {
    return <Navigate to="/agenda" replace />;
  }

  return (
    <section className="container space-y-8 py-8 md:space-y-10 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Agenda", href: "/agenda" },
          { label: event.title },
        ]}
      />

      <header className="space-y-4 border-b border-black/8 pb-6">
        <p className="text-sm font-medium text-prilly-coal/64">{event.category}</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">
          {event.title}
        </h1>
        <p className="max-w-3xl text-base leading-7 text-prilly-coal/72">{event.summary}</p>
      </header>

      <EventDetailMeta event={event} />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <article className="rounded-[1.6rem] border border-black/8 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal">Description</h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-prilly-coal/78">
            <p>{event.description}</p>
            <p>
              Date: {formatAgendaDate(event.date)}. Lieu: {event.location}. Adresse: {event.address}.
            </p>
          </div>
        </article>

        <EventSidebar event={event} />
      </div>
    </section>
  );
}
