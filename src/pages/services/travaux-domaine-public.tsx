import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice } from "@/features/dechets/components";
import {
  caniculeWorkNotice,
  publicWorksNotices,
  speedLimitNotices,
  trafficImpacts,
  worksContacts,
} from "@/features/public-works/data";
import {
  TrafficImpactCard,
  UsefulLinkCard,
  WorkNoticeCard,
  WorksContactPanel,
} from "@/features/public-works/components";

const pageSections: PageSideNavSection[] = [
  { id: "infos", label: "Informations importantes" },
  { id: "travaux", label: "Travaux en cours" },
  { id: "deviations", label: "Trafic et deviations" },
  { id: "vitesse", label: "30 km/h de nuit" },
  { id: "contacts", label: "Contacts et liens utiles" },
];

export default function PublicWorksPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Travaux sur le domaine public" },
        ]}
      />

      <PageHero
        eyebrow="Chantiers et circulation"
        title="Travaux sur le domaine public"
        description="Cette page centralise les chantiers en cours et annonces à Prilly, avec leurs impacts sur la circulation, les plans utiles et les contacts."
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Des travaux sont régulierement realises pour entretenir ou ameliorer les
                infrastructures, routes et espaces publics. Ils peuvent impacter les usagers de la
                voie publique.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#travaux" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">
                Voir les travaux en cours
              </a>
              <a href="#deviations" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Consulter les plans et deviations
              </a>
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <div className="space-y-12">
          <section id="infos" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Informations importantes"
              title="Perturbations et mesures a connaitre"
              description="Les informations les plus utiles sont mises en avant des le haut de page pour une lecture immediate."
            />
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <AlertNotice title="Travaux en cours" tone="yellow">
                Plusieurs chantiers et mesures de circulation peuvent modifier les habitudes de
                deplacement. Les fiches ci-dessous resument les dates, durees et impacts sans
                obliger a ouvrir un PDF pour comprendre l'essentiel.
              </AlertNotice>
              <UsefulLinkCard
                title={caniculeWorkNotice.title}
                description={caniculeWorkNotice.description}
                href={caniculeWorkNotice.href}
              />
            </div>
          </section>

          <section id="travaux" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Travaux en cours et annonces"
              title="Des fiches chantier concues pour aller droit au but"
              description="Chaque chantier est presente avec son statut, sa duree, sa localisation et ses impacts sur la circulation, les bus, les pietons ou les cycles."
            />
            <div className="space-y-5">
              {publicWorksNotices.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <WorkNoticeCard {...item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="deviations" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Trafic et deviations"
              title="Les impacts circulation en un seul bloc"
              description="Deviations, sens unique, arrets deplaces et maintien des cheminements sont regroupes ici pour faciliter la lecture."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {trafficImpacts.map((item) => (
                <TrafficImpactCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id="vitesse" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="30 km/h de nuit"
              title="Une mesure distincte des chantiers"
              description="La limitation de vitesse de nuit est separee des travaux ponctuels pour clarifier son objectif et son perimetre."
            />
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
                <p className="text-sm leading-6 text-prilly-coal/74">{speedLimitNotices.description}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {speedLimitNotices.dates.map((item) => (
                    <div key={item} className="rounded-[1.35rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">
                  Rues concernees
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {speedLimitNotices.streets.map((street) => (
                    <span key={street} className="rounded-full border border-black/8 bg-white px-3 py-2 text-sm text-prilly-coal/74">
                      {street}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-prilly-coal/74">{speedLimitNotices.purpose}</p>
              </div>
              <div className="rounded-[1.9rem] border border-black/6 bg-gradient-to-br from-prilly-soft via-white to-prilly-yellow/10 p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">
                  Vue generale des zones concernees
                </p>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">
                  La vue ci-dessous presente les rues concernees de maniere synthetique. Un plan
                  general peut etre rattache ici des qu'il est disponible dans le projet documentaire.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {speedLimitNotices.streets.map((street) => (
                    <div key={street} className="rounded-[1.25rem] bg-white px-4 py-4 text-sm font-medium text-prilly-coal shadow-soft">
                      {street}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contacts" className="grid gap-5 scroll-mt-32 lg:grid-cols-[1.05fr_0.95fr]">
            <WorksContactPanel
              phone={worksContacts.main.phone}
              email={worksContacts.main.email}
              secondary={worksContacts.secondary}
            />
            <div className="rounded-[1.9rem] border border-black/6 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">
                Liens utiles
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href="https://www.t-l.ch/voyager/info-trafic/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.2rem] border border-black/8 px-4 py-3 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red"
                >
                  <span>Suivre l'info trafic TL</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={caniculeWorkNotice.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.2rem] border border-black/8 px-4 py-3 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red"
                >
                  <span>Lire la mesure canicule de POLOuest</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
