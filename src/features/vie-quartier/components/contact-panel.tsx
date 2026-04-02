import { BadgeInfo, Phone } from "lucide-react";
import type { VQContact } from "@/features/vie-quartier/types";

export function VQContactPanel({ contact }: { contact: VQContact }) {
  return (
    <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{contact.role}</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">{contact.name}</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <a href={`mailto:${contact.email}`} className="rounded-2xl bg-prilly-soft px-4 py-4 text-sm text-prilly-coal">
          {contact.email}
        </a>
        <div className="rounded-2xl bg-prilly-soft px-4 py-4 text-sm text-prilly-coal">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-prilly-red" />
            {contact.phone}
          </div>
          {contact.whatsapp ? (
            <div className="mt-2 flex items-center gap-2">
              <BadgeInfo className="h-4 w-4 text-prilly-green" />
              WhatsApp: {contact.whatsapp}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
