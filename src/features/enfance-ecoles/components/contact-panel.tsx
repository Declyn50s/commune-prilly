import { Mail, MapPin, Phone } from "lucide-react";
import type { EnfanceContact } from "@/features/enfance-ecoles/types";

export function ContactPanel({ contacts }: { contacts: EnfanceContact[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {contacts.map((contact) => (
        <div key={contact.title} className="surface p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
            {contact.role}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{contact.title}</h3>
          <div className="mt-4 space-y-3 text-sm text-prilly-coal/74">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-prilly-red" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-prilly-red" />
              <span>{contact.email}</span>
            </div>
            {contact.address ? (
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-prilly-red" />
                <span>{contact.address}</span>
              </div>
            ) : null}
          </div>
          {contact.hours?.length ? (
            <div className="mt-4 rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/72">
              {contact.hours.map((entry) => (
                <p key={entry}>{entry}</p>
              ))}
            </div>
          ) : null}
          {contact.note ? <p className="mt-4 text-sm leading-6 text-prilly-coal/68">{contact.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
