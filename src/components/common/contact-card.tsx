import { Mail, MapPin, Phone } from "lucide-react";
import type { Contact } from "@/types/content";

export function ContactCard({ contact }: { contact: Contact }) {
  return (
    <article className={`surface p-5 ${contact.emergency ? "border-prilly-red/20 bg-prilly-red/5" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-prilly-coal">{contact.title}</h3>
          {contact.emergency ? <p className="mt-1 text-sm font-medium text-prilly-red">Numéros prioritaires</p> : null}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm text-prilly-coal/70">
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-prilly-red" />
          {contact.phone}
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-prilly-red" />
          {contact.email}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-prilly-red" />
          {contact.address}
        </p>
      </div>
      <div className="mt-4 rounded-2xl bg-white/80 p-4">
        <p className="text-sm font-semibold text-prilly-coal">Horaires</p>
        <ul className="mt-2 space-y-2 text-sm text-prilly-coal/70">
          {contact.hours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
