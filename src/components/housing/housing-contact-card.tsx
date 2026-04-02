import { Mail, Phone } from "lucide-react";
import type { HousingContact } from "@/types/content";

export function HousingContactCard({ item }: { item: HousingContact }) {
  return (
    <article className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.role}</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <div className="mt-4 space-y-3 text-sm text-prilly-coal/75">
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-prilly-red" />
          {item.phone}
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-prilly-red" />
          {item.email}
        </p>
      </div>
      <div className="mt-4 rounded-2xl bg-prilly-soft p-4">
        <p className="text-sm font-semibold text-prilly-coal">Horaires</p>
        <div className="mt-2 space-y-2 text-sm text-prilly-coal/70">
          {item.hours.map((hour) => (
            <p key={hour}>{hour}</p>
          ))}
        </div>
      </div>
      {item.appointment ? <p className="mt-4 text-sm leading-6 text-prilly-coal/70">{item.appointment}</p> : null}
    </article>
  );
}
