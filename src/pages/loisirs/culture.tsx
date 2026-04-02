import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeInfo,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AgendaFilter = "Tous" | "Musique" | "Cinéma" | "Famille" | "Théâtre";

type CultureEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  href: string;
  category: Exclude<AgendaFilter, "Tous">;
};

const quickLinks = [
  {
    title: "Voir les évènements",
    description: "Aller directement a l'agenda culturel et reperer les prochains rendez-vous.",
    href: "#agenda",
    icon: CalendarDays,
  },
  {
    title: "Participer  à la vie culturelle",
    description: "Découvrir les lieux, associations et offres pour prendre part  à la scene locale.",
    href: "#participer",
    icon: Users,
  },
  {
    title: "Organiser une manifestation",
    description: "Trouver le bon parcours pour un projet, une salle ou une manifestation à Prilly.",
    href: "#organiser",
    icon: Sparkles,
  },
  {
    title: "Obtenir une subvention",
    description: "Comprendre rapidement si votre projet peut être soutenu et comment deposer une demande.",
    href: "#aides",
    icon: BadgeInfo,
  },
] as const;

const cultureEvents: CultureEvent[] = [
  {
    id: "lanterne-magique",
    title: "La Lanterne magique",
    date: "Un samedi par mois",
    location: "Cinétoile Malley Lumieres",
    description: "Le cine-club des enfants propose une séance accompagnee, pensee pour les 6-12 ans et leurs proches.",
    image: "/images/culture/lanterne-magique.png",
    href: "/loisirs/agenda-culturel",
    category: "Famille",
  },
  {
    id: "cindrom",
    title: "CINDROM",
    date: "26 mars 2026",
    location: "Cinétoile",
    description: "Une soirée Cinéma independant romand avec projections, remise de prix et ambiance conviviale.",
    image: "/images/culture/batcam.jpg",
    href: "/loisirs/agenda-culturel",
    category: "Cinéma",
  },
  {
    id: "dynamhits",
    title: "Concert Dynam'Hits",
    date: "28 mars 2026",
    location: "Grande salle",
    description: "Un concert choral dynamique, entrée gratuite et chapeau  à la sortie, pour une soirée musicale tres accèssible.",
    image: "/images/culture/dynamhits.png",
    href: "/loisirs/agenda-culturel",
    category: "Musique",
  },
] as const;

const institutionCards = [
  {
    title: "Cinétoile",
    description: "Le Cinéma de proximite pour les séances, festivals et rendez-vous cine de l'agglomeration.",
    link: "https://www.Cinétoile.ch/",
    badge: "Cinéma",
  },
  {
    title: "Vaudoise Arena",
    description: "Une grande salle regionale pour spectacles, concerts et grands temps forts culturels.",
    link: "https://vaudoise-arena.ch/",
    badge: "Scene",
  },
  {
    title: "La Lanterne magique",
    description: "Le cine-club des enfants, ideal pour une premiere relation joyeuse et accompagnée au Cinéma.",
    link: "https://www.lanterne-magique.org/",
    badge: "Famille",
  },
  {
    title: "Artothèque",
    description: "Une porte d'entrée originale vers l'art accèssible, installée à Prilly sur le site de Cery.",
    link: "https://vu.chuv.ch/Artothèque",
    badge: "Art",
  },
  {
    title: "Locus Solus",
    description: "Un lieu prilleran singulier entre arts plastiques, editions et lectures mises en espace.",
    link: "https://locus-solus.ch/",
    badge: "Lieu local",
  },
] as const;

const associationCards = [
  {
    title: "École de musique",
    description: "Pour apprendre, pratiquer et progresser dans un cadre de proximite.",
  },
  {
    title: "Union instrumentale",
    description: "La fanfare de Prilly, tres presente dans les manifestations et les rendez-vous communaux.",
  },
  {
    title: "Dynam'Hits",
    description: "Un choeur mixte local visible dans les temps forts culturels et festifs de la commune.",
  },
  {
    title: "École de danse",
    description: "Des cours et pratiques artistiques pour differents ages et differents niveaux.",
  },
] as const;

const aidCards = [
  {
    title: "Carte CULTISSIME",
    audience: "18-25 ans",
    description: "Un passeport culturel gratuit qui ouvre des réductions dans plusieurs institutions de la region lausannoise.",
    link: "https://www.carte-cultissime.ch/",
  },
  {
    title: "PASSCULTURE",
    audience: "Étudiantes et étudiants",
    description: "Un tarif reduit pour les personnes en formation postobligatoire dans le canton de Vaud.",
    link: "https://www.passculture.ch/",
  },
  {
    title: "CarteCulture",
    audience: "Budget modeste",
    description: "Une carte gratuite pour faciliter l'accès  à la culture avec des réductions importantes.",
    link: "https://www.carteculture.ch/",
  },
] as const;

const commissionDocs = [
  { label: "Activites 2025", href: "/docs/loisirs/culture/activites-2025.pdf" },
  { label: "Reglement", href: "/docs/loisirs/culture/reglement-commission-culturelle.pdf" },
  { label: "Membres 2026", href: "/docs/loisirs/culture/liste-membres-2026-01.pdf" },
] as const;

function QuickLinkCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: typeof CalendarDays;
}) {
  return (
    <a href={href} className="group block h-full">
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }} className="surface h-full p-5 md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Ouvrir
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </motion.div>
    </a>
  );
}

function EventFeatureCard({ event }: { event: CultureEvent }) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.18 }} className="surface group h-full overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-prilly-soft">
        <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          <Badge>{event.category}</Badge>
          <Badge className="bg-prilly-yellow/20 text-prilly-coal">{event.date}</Badge>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{event.title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{event.description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-prilly-coal/68">
          <MapPin className="h-4 w-4 text-prilly-red" />
          {event.location}
        </div>
        <a href={event.href} className="mt-6 inline-flex">
          <Button variant="secondary">
            Voir plus
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </motion.article>
  );
}

export default function CultureHubPage() {
  const [activeFilter, setActiveFilter] = useState<AgendaFilter>("Tous");
  const filteredEvents = useMemo(
    () => (activeFilter === "Tous" ? cultureEvents : cultureEvents.filter((event) => event.category === activeFilter)),
    [activeFilter],
  );

  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Loisirs", href: "/loisirs" },
        { label: "Culture" },
      ]}
      eyebrow="Culture & participation"
      title="La culture à Prilly"
      description="Decouvrez, participez et creez des évènements culturels."
      tone="warm"
      aside={
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-white/20 bg-prilly-coal shadow-float"
        >
          <div className="relative aspect-[16/11] overflow-hidden">
            <img src="/images/culture/hero-feu.jpg" alt="Performance de feu lors d'un évènement culturel" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-prilly-coal via-prilly-coal/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-white/14 text-white">Découvrir</Badge>
                <Badge className="bg-white/14 text-white">Participer</Badge>
                <Badge className="bg-white/14 text-white">Organiser</Badge>
                <Badge className="bg-white/14 text-white">Financer</Badge>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/84">
                Une entrée unique pour voir les rendez-vous, rejoindre la vie culturelle locale et lancer vos propres projets.
              </p>
            </div>
          </div>
          <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-3">
            <a href="#agenda" className="inline-flex">
              <Button className="w-full justify-center">Voir l'agenda</Button>
            </a>
            <a href="/loisirs/manifestations" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Organiser un évènement
              </Button>
            </a>
            <a href="/loisirs/subventions" className="inline-flex">
              <Button variant="soft" className="w-full justify-center border border-white/12 bg-white/10 text-white hover:bg-white/16">
                Demander une subvention
              </Button>
            </a>
          </div>
        </motion.div>
      }
    >
      <section className="space-y-8">
        <SectionHeader
          eyebrow="accès rapides"
          title="Quatre parcours pour entrer tout de suite dans la bonne action"
          description="Le hub culturel doit repondre instantanement a votre intention: sortir, participer, organiser ou chercher un soutien."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <QuickLinkCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="agenda" className="space-y-8">
        <SectionHeader
          eyebrow="Agenda culturel"
          title="Le coeur vivant de la page"
          description="Cette section met les évènements au premier plan: image, date, catégorie, description courte et accès direct vers l'agenda detaille."
          action={
            <a href="/loisirs/agenda-culturel">
              <Button>Voir l'agenda complet</Button>
            </a>
          }
        />

        <div className="rounded-[2rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
          <div className="flex flex-wrap gap-2">
            {(["Tous", "Musique", "Cinéma", "Famille", "Théâtre"] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  activeFilter === filter ? "bg-white text-prilly-coal" : "border border-white/12 bg-white/8 text-white hover:bg-white/14"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/8 p-5 shadow-soft md:p-6">
              {filteredEvents.length ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="overflow-hidden rounded-[1.5rem] bg-white text-prilly-coal">
                      <div className="aspect-[16/10] overflow-hidden bg-prilly-soft">
                        <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2">
                          <Badge>{event.category}</Badge>
                          <Badge className="bg-prilly-yellow/20 text-prilly-coal">{event.date}</Badge>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold tracking-tight">{event.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{event.description}</p>
                        <a href={event.href} className="mt-5 inline-flex">
                          <Button variant="secondary">Voir plus</Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-white/18 px-5 py-10 text-center text-sm text-white/78">
                  Aucun évènement mis en avant pour ce filtre ici. Consultez l'agenda complet pour parcourir toute la programmation.
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">Focus du moment</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">Des rendez-vous faciles a reperer</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Cinéma, concert, jeunesse: le hub met les formats les plus utiles en avant avant de renvoyer vers l'agenda detaille.
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">Flow utilisateur</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/82">
                  <span className="rounded-full bg-white/10 px-3 py-2">Découvrir</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="rounded-full bg-white/10 px-3 py-2">Participer</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="rounded-full bg-white/10 px-3 py-2">Organiser</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="rounded-full bg-white/10 px-3 py-2">Financer</span>
                </div>
              </div>
              <a href="/loisirs/agenda-culturel" className="inline-flex w-full">
                <Button className="w-full justify-center">
                  Ouvrir la page Agenda
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="évènements phares"
          title="Trois rendez-vous qui donnent le ton"
          description="Les temps forts culturels sont presentes ici comme de vraies cartes d'appel, avec un visuel fort et un accès direct."
        />
        <div className="grid gap-4 xl:grid-cols-3">
          {cultureEvents.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.03}>
              <EventFeatureCard event={event} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="participer" className="space-y-8">
        <SectionHeader
          eyebrow="Institutions & lieux culturels"
          title="Des portes d'entrée concrètes pour sortir, voir, écouter ou explorer"
          description="Cette grille relie Prilly à ses lieux culturels proches et à ses adresses singulieres, sans tomber dans une liste froide."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {institutionCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface flex h-full flex-col p-5 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge>{item.badge}</Badge>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                    {item.badge === "Cinéma" ? <FileText className="h-5 w-5" /> : item.badge === "Scene" ? <Building2 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
                  <Button variant="ghost" className="border border-black/8 bg-white">
                    Visiter le site
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Associations locales"
          title="Des structures pour pratiquer et faire vivre la culture locale"
          description="La page met en avant quelques repères simples, puis vous renvoie vers l'annuaire complet quand vous voulez aller plus loin."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {associationCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <Sparkles className="h-5 w-5 text-prilly-red" />
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <a href="/loisirs/sports-et-loisirs/societes-locales" className="inline-flex">
          <Button variant="secondary">Voir toutes les associations</Button>
        </a>
      </section>

      <section id="aides" className="space-y-8">
        <SectionHeader
          eyebrow="Aides & réductions"
          title="Des bons plans culture utiles selon votre situation"
          description="Trois cartes, trois cas d'usage clairs: jeunesse, etudes et budget modeste."
        />
        <div className="grid gap-4 xl:grid-cols-3">
          {aidCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface flex h-full flex-col p-5 md:p-6">
                <Badge className="bg-prilly-yellow/20 text-prilly-coal">{item.audience}</Badge>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
                  <Button variant="ghost" className="border border-black/8 bg-white">
                    Voir le dispositif
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="organiser" className="space-y-8">
        <SectionHeader
          eyebrow="Organiser un évènement"
          title="Organiser une manifestation à Prilly"
          description="Le parcours complet est déjà pret: demarches, autorisations, salles et subventions sont relies pour eviter de tourner en rond."
        />
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-red/12 via-prilly-yellow/24 to-white shadow-soft">
          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">Un bloc tres visible pour passer de l'envie au projet</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/78">Demarches</div>
                <div className="rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/78">Autorisations</div>
                <div className="rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/78">Subventions</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/loisirs/manifestations" className="inline-flex">
                  <Button>Voir le guide</Button>
                </a>
                <a href="/loisirs/subventions" className="inline-flex">
                  <Button variant="secondary">Deposer une demande</Button>
                </a>
              </div>
            </div>
            <div className="rounded-[1.7rem] border border-black/8 bg-white p-5 md:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Parcours recommande</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-prilly-coal/76">
                <span className="rounded-full border border-black/8 px-3 py-2">Découvrir</span>
                <ArrowRight className="h-4 w-4" />
                <span className="rounded-full border border-black/8 px-3 py-2">Participer</span>
                <ArrowRight className="h-4 w-4" />
                <span className="rounded-full border border-black/8 px-3 py-2">Organiser</span>
                <ArrowRight className="h-4 w-4" />
                <span className="rounded-full border border-black/8 px-3 py-2">Financer</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
                Le hub culture sert d'entrée. La page manifestations vous aide a cadrer le projet. La page subventions prend ensuite le relais pour le financement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Commission culturelle"
          title="Une commission utile, sans jargon"
          description="Elle soutient les projets, finance des évènements et anime la vie culturelle locale. Ici, on garde l'essentiel et on renvoie vers les documents si besoin."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm leading-7 text-prilly-coal/76">
              La Commission culturelle soutient les projets, finance des évènements et contribue a faire circuler les initiatives culturelles à Prilly avec une lecture plus accèssible qu'une page purement administrative.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] bg-prilly-soft px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Stat UX</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">10+</p>
                <p className="mt-2 text-sm text-prilly-coal/72">évènements ou activités visibles par an</p>
              </div>
              <div className="rounded-[1.4rem] bg-prilly-soft px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Archive utile</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">2021-2025</p>
                <p className="mt-2 text-sm text-prilly-coal/72">activités et documents disponibles</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/loisirs/subventions" className="inline-flex">
                <Button>Voir les subventions</Button>
              </a>
              <a href="/docs/loisirs/culture/commission-culturelle-documents.zip" target="_blank" rel="noreferrer" className="inline-flex">
                <Button variant="secondary">Voir les activités</Button>
              </a>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">Documents utiles</p>
            <div className="mt-5 space-y-3">
              {commissionDocs.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.15rem] bg-white/10 px-4 py-4 text-sm text-white/84 transition hover:bg-white/14"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Newsletter"
          title="Restez informe"
          description="Un bloc simple pour s'inscrire aux informations culturelles et conserver un lien direct avec les rendez-vous utiles."
        />
        <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto]">
            <Input type="email" placeholder="Votre email" aria-label="Votre email" />
            <Input type="text" placeholder="Votre lieu" aria-label="Votre lieu" />
            <Button className="justify-center">S'inscrire</Button>
          </div>
          <label className="mt-4 flex items-start gap-3 text-sm text-prilly-coal/72">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-black/20" />
            <span>J'accepte de recevoir les informations culturelles de Prilly et je peux me désinscrire a tout moment.</span>
          </label>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Service culture et integration"
          description="Pour une question sur l'agenda, une demande de soutien ou un projet culturel a faire emerger."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Phone className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">+41 21 622 74 40</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Mail className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">sci@prilly.ch</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+41216227440" className="inline-flex">
                <Button>Appeler</Button>
              </a>
              <a href="mailto:sci@prilly.ch" className="inline-flex">
                <Button variant="secondary">Envoyer mail</Button>
              </a>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-black/8 bg-gradient-to-br from-prilly-soft via-white to-prilly-yellow/18 p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3 text-prilly-red">
              <Search className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/60">Besoins fréquents</span>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/76">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                Voir rapidement les évènements du moment
              </div>
              <div className="flex items-start gap-3 rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/76">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                Trouver à qui parler pour organiser un projet
              </div>
              <div className="flex items-start gap-3 rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/76">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                Basculer vers les pages subventions et manifestations sans rupture
              </div>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
