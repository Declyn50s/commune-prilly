import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GenericCard } from "@/components/common/cards";
import { Hero } from "@/components/common/hero";
import { QuickLinks } from "@/components/common/quick-links";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { EventCard, NewsCard } from "@/features/home/components";
import {
  agendaItems,
  homeServices,
  newsItems,
  quickLinks,
  spotlights,
} from "@/features/home/data";

export default function HomePage() {
  return (
    <div className="container space-y-14 py-6 md:space-y-18 md:py-8">
      <Hero />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Accès rapides"
          title="Les démarches et services les plus demandés"
          description="Trouvez rapidement les informations et services dont vous avez besoin."
        />
        <QuickLinks items={quickLinks} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Actualités"
            title="Actualités communales"
            description="Informations et communications de la Commune de Prilly."
            action={
              <Link to="/actualites" className="text-sm font-semibold text-prilly-red">
                Toutes les actualités
              </Link>
            }
          />
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface flex flex-col justify-between rounded-[2rem] bg-gradient-to-br from-prilly-coal to-[#5a5a5a] p-6 text-white">
              <div>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  À là une
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{newsItems[0].title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/80">{newsItems[0].excerpt}</p>
              </div>
              <Link
                to={newsItems[0].href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-prilly-yellow"
              >
                Parcourir
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {newsItems.slice(1).map((item, index) => (
                <NewsCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="surface h-fit p-5">
          <span className="eyebrow">Informations importantes</span>
          <div className="mt-4 space-y-3">
            {spotlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/8 p-4">
                <h3 className="text-base font-semibold leading-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
                <Link
                  to={item.href}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red"
                >
                  Consulter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Agenda"
          title="Agenda"
          description="L’agenda met en avant les événements culturels, les temps forts de proximité et les rendez-vous pratiques."
          action={
            <Link to="/agenda" className="text-sm font-semibold text-prilly-red">
              Tout l'agenda
            </Link>
          }
        />
        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="surface p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">À venir</p>
            <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">
              Le calendrier communal devient un vrai repère de proximité
            </h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/70">
              Réunions d’accueil, activités culturelles, ateliers citoyens et rendez-vous de quartier
              sont mis en avant dans un format plus simple à parcourir.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {agendaItems.map((item, index) => (
              <EventCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Services utiles"
          title="Des repères rapides pour la vie quotidienne à Prilly"
          description="Accès aux principaux services de la Commune de Prilly."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="surface p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-prilly-coal">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{service.description}</p>
              <Link
                to={service.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red"
              >
                Accéder
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-black/5 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-green/10 p-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          <span className="eyebrow">Prilly aujourd’hui</span>
          <h2 className="text-3xl font-semibold tracking-tight text-prilly-coal md:text-4xl">
            Une commune à taille humaine, mobile, active et attentive à la qualité de vie.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-prilly-coal/70">
            Informations sur la commune de Prilly et ses activités.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <GenericCard
            title="Vivre à Prilly"
            description="Familles, seniors, quartier, installation et logement."
            href="/vivre"
            accent="green"
          />
          <GenericCard
            title="Découvrir les loisirs"
            description="Culture, sport, agenda et vie associative."
            href="/loisirs"
            accent="yellow"
          />
        </div>
      </section>
    </div>
  );
}
