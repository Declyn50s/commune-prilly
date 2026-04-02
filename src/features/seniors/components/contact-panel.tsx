import { Mail, Phone } from "lucide-react";
import type { SeniorContact } from "@/features/seniors/types";

export function SeniorsContactPanel({ contacts }: { contacts: SeniorContact[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {contacts.map((contact) => (
        <div key={contact.title} className="surface p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{contact.role}</p>
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{contact.title}</h3>
          <div className="mt-4 space-y-3 text-sm text-prilly-coal/74">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-prilly-red" />
              {contact.phone}
            </div>
            {contact.email ? (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-prilly-red" />
                {contact.email}
              </div>
            ) : null}
          </div>
          {contact.note ? <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{contact.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
