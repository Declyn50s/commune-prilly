import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchBar } from "@/components/common/search-bar";
import { Button } from "@/components/ui/button";

const fréquentActions = [
  { label: "Annoncer une arrivée ou un départ", href: "/demarches/arrivee" },
  { label: "Demander une attestation de domicile", href: "/demarches/attestations" },
  { label: "Trouver le calendrier de collecte", href: "/demarches/dechets/calendrier-de-collecte" },
  { label: "Consulter les horaires des services", href: "/contact/services-communaux" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-prilly-coal px-6 py-7 text-white shadow-float md:px-10 md:py-10">
      <img
        src="/images/home/prilly-panorama-ete.jpg"
        alt="Vue panoramique de la Commune de Prilly"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(21,27,34,0.88)_0%,rgba(21,27,34,0.72)_42%,rgba(21,27,34,0.48)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,39,45,0.18),transparent_38%)]" />
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-5"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Commune de Prilly
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/90">
              Accès directs
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Bienvenue à Prilly
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/80 md:text-[17px]">
              Démarches prioritaires, services utiles, agenda local et contacts.
            </p>
          </div>
          <SearchBar
            placeholder="Rechercher une démarche, un service, un horaire ou un événement"
            suggestions={["déménagement", "attestation de domicile", "déchets", "carte de déchèterie", "agenda"]}
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/demarches">
              <Button size="lg">
                Accéder aux démarches
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact/services-communaux">
              <Button variant="secondary" size="lg">
                Contacter la commune
              </Button>
            </Link>
          </div>
          <div className="grid gap-3 pt-1 sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Horaires des services" },
              { icon: MapPin, label: "Contacts communaux" },
              { icon: Clock3, label: "Accès rapides utiles" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/90">
                <item.icon className="mb-2 h-4 w-4 text-prilly-yellow" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="surface space-y-5 p-5 text-prilly-coal"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Aujourd'hui à Prilly</p>
              <h2 className="mt-2 text-xl font-semibold">Vos actions les plus fréquentes</h2>
            </div>
            <div className="rounded-2xl bg-prilly-yellow px-4 py-2 text-sm font-semibold">Aujourd'hui</div>
          </div>
          <div className="grid gap-2.5">
            {fréquentActions.map((item) => (
              <Link key={item.label} to={item.href} className="flex items-center justify-between gap-3 rounded-2xl border border-black/8 bg-prilly-soft px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-soft">
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-prilly-red" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
