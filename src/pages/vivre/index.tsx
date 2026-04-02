import {
  ArrowRight,
  BadgeInfo,
  Building2,
  Home,
  Mail,
  MapPin,
  Phone,
  Search,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";

type LinkCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type PriorityCard = {
  title: string;
  description: string;
  href: string;
  links: string[];
  icon: LucideIcon;
};

const pageSections: PageSideNavSection[] = [
  { id: "introduction", label: "Introduction" },
  { id: "acces", label: "Accès par besoins" },
  { id: "parcours", label: "Parcours prioritaires" },
  { id: "reperes", label: "Repères du quotidien" },
  { id: "annuaire", label: "Annuaire" },
];

const mainLinks: LinkCard[] = [
  {
    title: "S’installer à Prilly",
    description: "Premières informations utiles pour préparer votre arrivée dans la commune.",
    href: "/vivre/sinstaller",
    icon: Home,
  },
  {
    title: "Logement",
    description: "Informations utiles sur le logement et les démarches liées à l’habitat.",
    href: "/vivre/logement",
    icon: Building2,
  },
  {
    title: "Enfance & écoles",
    description: "Accueil préscolaire, scolarité et informations pour les familles.",
    href: "/vivre/enfance-ecoles/ecoles",
    icon: BadgeInfo,
  },
  {
    title: "Jeunesse",
    description: "Centre de loisirs, activités et ressources destinées aux jeunes.",
    href: "/vivre/enfance-ecoles/centre-loisirs",
    icon: Users,
  },
  {
    title: "Seniors",
    description: "Prestations, accompagnement et repères utiles pour les aînés.",
    href: "/vivre/seniors",
    icon: Users,
  },
  {
    title: "Intégration",
    description: "Cours de français, ressources locales et informations d’accueil.",
    href: "/vivre/integration",
    icon: Mail,
  },
  {
    title: "Vie de quartier",
    description: "Informations de proximité, participation locale et vie des quartiers.",
    href: "/vivre/vie-quartier",
    icon: MapPin,
  },
  {
    title: "Annuaire communal",
    description: "Services communaux, coordonnées utiles et contacts de l’administration.",
    href: "/contact/annuaire",
    icon: Search,
  },
] as const;

const priorityPaths: PriorityCard[] = [
  {
    title: "Je viens d’arriver à Prilly",
    description: "Accédez aux informations d’installation, à l’annonce d’arrivée et aux premiers repères utiles.",
    href: "/vivre/sinstaller",
    links: ["Bienvenue", "Arrivée à Prilly", "Annuaire communal"],
    icon: Home,
  },
  {
    title: "Je cherche des informations pour ma famille",
    description: "Retrouvez les rubriques liées à l’enfance, aux écoles et aux activités pour les jeunes.",
    href: "/vivre/enfance-ecoles/ecoles",
    links: ["Enfance", "Écoles", "Jeunesse"],
    icon: BadgeInfo,
  },
  {
    title: "Je cherche un service ou un contact communal",
    description: "Consultez les coordonnées, les services communaux et les contacts utiles.",
    href: "/contact/services-communaux",
    links: ["Services communaux", "Contacts utiles", "Horaires"],
    icon: Phone,
  },
  {
    title: "Je cherche des ressources selon mon profil",
    description: "Accédez aux informations destinées aux seniors, aux nouveaux arrivants et aux habitantes et habitants.",
    href: "/vivre/integration",
    links: ["Seniors", "Intégration", "Vie de quartier"],
    icon: Search,
  },
] as const;

const landmarks = [
  {
    title: "Familles et scolarité",
    description: "Enfance, écoles et jeunesse regroupent les informations utiles à la vie familiale et au parcours scolaire.",
    links: [
      { label: "Voir l’enfance", href: "/vivre/enfance-ecoles/accueil-prescolaire" },
      { label: "Voir les écoles", href: "/vivre/enfance-ecoles/ecoles" },
    ],
  },
  {
    title: "Accompagnement et intégration",
    description: "La rubrique permet de retrouver les dispositifs d’accueil, les cours de français et les ressources locales.",
    links: [
      { label: "Voir l’intégration", href: "/vivre/integration" },
      { label: "Voir les seniors", href: "/vivre/seniors" },
    ],
  },
  {
    title: "Quartiers et vie locale",
    description: "Les informations de proximité et les points de repère du quotidien sont accessibles depuis une même entrée.",
    links: [
      { label: "Voir la vie de quartier", href: "/vivre/vie-quartier" },
      { label: "S’installer à Prilly", href: "/vivre/sinstaller" },
    ],
  },
  {
    title: "Ressources communales utiles",
    description: "L’annuaire communal et les services facilitent l’accès aux contacts et aux démarches liées au quotidien.",
    links: [
      { label: "Voir l’annuaire", href: "/contact/annuaire" },
      { label: "Voir les services", href: "/contact/services-communaux" },
    ],
  },
] as const;

function PrimaryLink({
  href,
  label,
  variant = "dark",
}: {
  href: string;
  label: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      to={href}
      className={cn(
        "focus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        variant === "dark"
          ? "bg-prilly-coal text-white hover:bg-prilly-coal/92"
          : "border border-black/8 bg-white text-prilly-coal hover:border-prilly-red/20 hover:text-prilly-red",
      )}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export default function VivreIndexPage() {
  return (
    <div className="container space-y-8 py-8 md:space-y-10 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre" }]} />

      <section id="introduction" className="scroll-mt-32 space-y-5">
        <PageHero
          eyebrow="Rubrique"
          title="Vivre à Prilly"
          description="Retrouvez les informations utiles pour le quotidien, les étapes d’installation, les services aux familles et les repères de la vie locale."
          tone="warm"
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href="/vivre/sinstaller" label="S’installer à Prilly" />
          <PrimaryLink href="/contact/annuaire" label="Voir l’annuaire communal" variant="light" />
        </div>
      </section>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <PageSideNav sections={pageSections} title="Sur cette page" />

        <main className="space-y-8 md:space-y-10">
          <Reveal>
            <section id="acces" className="scroll-mt-32 space-y-6">
              <SectionHeader
                eyebrow="Accès par besoins"
                title="Les principales thématiques de la rubrique"
                description="Sélectionnez directement le sujet qui correspond à votre besoin."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {mainLinks.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.04}>
                    <Link
                      to={item.href}
                      className="group flex h-full flex-col rounded-[1.6rem] border border-black/6 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-black/10"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-prilly-coal/5 text-prilly-red">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-prilly-red">
                        Accéder
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="parcours" className="scroll-mt-32 space-y-6">
              <SectionHeader
                eyebrow="Parcours prioritaires"
                title="Accès rapides selon les besoins fréquents"
                description="Cette sélection regroupe les entrées les plus souvent recherchées."
              />

              <div className="grid gap-4">
                {priorityPaths.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <article className="rounded-[1.7rem] border border-black/6 bg-white p-5 shadow-soft">
                      <div className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-prilly-yellow/18 text-prilly-coal">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h2 className="text-xl font-semibold tracking-tight text-prilly-coal">
                              {item.title}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.links.map((label) => (
                              <span
                                key={label}
                                className="rounded-full border border-black/8 bg-[#faf8f4] px-3 py-1 text-xs font-medium text-prilly-coal/72"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <PrimaryLink href={item.href} label="Consulter" variant="light" />
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="reperes" className="scroll-mt-32 space-y-6">
              <SectionHeader
                eyebrow="Repères du quotidien"
                title="Les grands sujets de la vie locale"
                description="Chaque entrée renvoie vers les informations utiles sans multiplier les niveaux de lecture."
              />

              <div className="grid gap-4 lg:grid-cols-2">
                {landmarks.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <article className="rounded-[1.7rem] border border-black/6 bg-[#fcfbf8] p-6 shadow-soft">
                      <h2 className="text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
                      <div className="mt-5 flex flex-col gap-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="focus-ring inline-flex items-center justify-between rounded-[1rem] border border-black/8 bg-white px-4 py-3 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red"
                          >
                            {link.label}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="annuaire" className="scroll-mt-32">
              <div className="rounded-[1.9rem] border border-black/6 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                      Annuaire
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                      Coordonnées et services communaux
                    </h2>
                    <p className="max-w-2xl text-sm leading-7 text-white/78">
                      L’annuaire communal permet de retrouver rapidement un service, un interlocuteur ou
                      une information de contact.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <PrimaryLink href="/contact/annuaire" label="Voir l’annuaire" variant="light" />
                    <PrimaryLink href="/contact/services-communaux" label="Voir les services communaux" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-white/78">
                    Recherche par service ou par besoin.
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-white/78">
                    Coordonnées utiles de l’administration communale.
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-white/78">
                    Accès direct aux horaires et au guichet communal.
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </main>
      </div>
    </div>
  );
}
