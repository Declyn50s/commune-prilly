import { ArrowRight, Clock3, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { Contact } from "@/types/content";
import { Button } from "@/components/ui/button";

export function ContactHelpBlock({ contact }: { contact: Contact }) {
  return (
    <section className="rounded-[2rem] bg-prilly-coal bg-mesh p-6 text-white shadow-float md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-yellow">Besoin d’aide ?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">L’Office de la population vous accompagne.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
            Si vous avez un doute sur les documents, sur votre statut de séjour ou sur un cas familial particulier, mieux vaut vérifier avant de vous déplacer.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-semibold">{contact.title}</p>
              <p className="mt-2 text-sm text-white/80">{contact.phone}</p>
              <p className="text-sm text-white/80">{contact.email}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock3 className="h-4 w-4 text-prilly-yellow" />
                Horaires
              </div>
              <div className="mt-2 space-y-1 text-sm text-white/80">
                {contact.hours.slice(0, 2).map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button className="justify-center">
            <Phone className="h-4 w-4" />
            Contacter le service
          </Button>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir les horaires
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/demarches" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir les démarches liées
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
