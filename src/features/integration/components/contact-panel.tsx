import { Mail, MapPin, Phone } from "lucide-react";
import type { IntegrationContact } from "@/features/integration/types";

export function IntegrationContactPanel({ contacts }: { contacts: IntegrationContact[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {contacts.map((contact) => (
        <div key={contact.title} className="surface p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{contact.role}</p>
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{contact.title}</h3>
          <div className="mt-4 space-y-3 text-sm text-prilly-coal/74">
            {contact.address ? (
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-prilly-red" />
                {contact.address}
              </div>
            ) : null}
            {contact.email ? (
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-prilly-red" />
                {contact.email}
              </div>
            ) : null}
            {contact.phone ? (
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-prilly-red" />
                {contact.phone}
              </div>
            ) : null}
          </div>
          {contact.note ? <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{contact.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
