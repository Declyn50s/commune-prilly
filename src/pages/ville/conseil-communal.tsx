import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { SectionHeader } from "@/components/common/section-header";
import {
  ArchiveCategoryCard,
  BureauMemberCard,
  CommissionCard,
  ContactPanel,
  CouncilAnchorNav,
  CouncilSummaryCard,
  HelpfulInfoSection,
  MeetingCard,
  PartyCard,
  VideoFollowSection,
} from "@/features/conseil-communal/components";
import {
  councilArchiveCategories,
  councilBureau,
  councilCommissions,
  councilContact,
  councilHelpfulInfo,
  councilMeetings,
  councilPageMeta,
  councilParties,
  councilSummary,
  councilVideoInfo,
} from "@/features/conseil-communal/data";
import { ChevronRight } from "lucide-react";

const pageSections: PageSideNavSection[] = [
  { id: "apercu", label: "Le Conseil en bref" },
  { id: "seances", label: "Seances" },
  { id: "fonctionnement", label: "Fonctionnement" },
  { id: "bureau", label: "Bureau" },
  { id: "partis", label: "Partis" },
  { id: "commissions", label: "Commissions" },
  { id: "archives", label: "Archives" },
  { id: "video", label: "Video" },
  { id: "contact", label: "Contact" },
  { id: "ressources", label: "Ressources" },
];

export default function ConseilCommunalPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={councilPageMeta.breadcrumb} />

      <PageHero
        eyebrow={councilPageMeta.hero.eyebrow}
        title={councilPageMeta.hero.title}
        description={councilPageMeta.hero.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">{councilPageMeta.hero.intro}</p>
            </div>
            <CouncilAnchorNav items={councilPageMeta.anchors.slice(0, 2)} />
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Composition", href: councilPageMeta.sourceLinks.composition },
                { label: "Partis", href: councilPageMeta.sourceLinks.parties },
                { label: "Reglement", href: councilPageMeta.sourceLinks.regulation },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/15 hover:text-prilly-red"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="apercu" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Le Conseil en bref"
              title="Les reperes essentiels pour comprendre le legislatif communal"
              description="Une entree rapide pour saisir le cadre electif, le rythme des seances et le lieu ou s'exerce la deliberation publique."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {councilSummary.map((item) => (
                <CouncilSummaryCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="seances" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Prochaines seances et ordres du jour"
              title="Trouver rapidement la bonne seance et les bons documents"
              description="Chaque seance regroupe ses objets, ses documents utiles et un acces direct a la page officielle pour consulter l'ensemble des pieces."
              action={<CouncilAnchorNav items={councilPageMeta.anchors.slice(0, 2)} className="md:justify-end" />}
            />
            <div className="grid gap-5 xl:grid-cols-2">
              {councilMeetings.map((meeting, index) => (
                <MeetingCard key={meeting.isoDate} meeting={meeting} delay={index * 0.05} />
              ))}
            </div>
          </section>

          <section id="fonctionnement" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Comprendre le fonctionnement"
              title="Une lecture simple du reglement, sans jargon inutile"
              description="La page met en avant ce qui aide vraiment a suivre la vie democratique locale: role du Conseil, publicite des seances, commissions, rapports et interventions."
            />
            <HelpfulInfoSection items={councilHelpfulInfo} />
          </section>

          <section id="bureau" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Bureau du Conseil"
              title="Une organisation claire qui structure les seances et la preparation des objets"
              description="Le Bureau est elu chaque annee. Il encadre les debats, organise les commissions et garantit le bon deroulement institutionnel du Conseil."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {councilBureau.map((group) => (
                <BureauMemberCard key={group.role} group={group} />
              ))}
            </div>
          </section>

          <section id="partis" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Partis representes"
              title="Identifier les sensibilites politiques presentes au Conseil communal"
              description="Les partis representes disposent chacun d'un point de contact ou d'une presidence locale pour mieux orienter les personnes qui souhaitent comprendre les forces en presence."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {councilParties.map((party) => (
                <PartyCard key={party.name} party={party} />
              ))}
            </div>
          </section>

          <section id="commissions" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Commissions"
              title="Le travail d'examen se fait en amont, avant le passage en seance publique"
              description="Les commissions rendent les dossiers lisibles, instruisent les objets et permettent au Conseil de deliberer sur une base preparee."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {councilCommissions.map((item) => (
                <CommissionCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="archives" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Archives du Conseil"
              title="Retrouver une annee, une serie documentaire ou un historique precis"
              description="Les archives sont organisees par grandes familles documentaires pour eviter l'effet de liste brute et permettre une recherche plus rapide."
            />
            <div className="grid gap-4 xl:grid-cols-3">
              {councilArchiveCategories.map((item) => (
                <ArchiveCategoryCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="video" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="En video"
              title="Suivre le Conseil communal meme a distance"
              description="La diffusion audiovisuelle renforce l'accessibilite des seances et prolonge leur caractere public pour les habitantes et habitants qui ne peuvent pas se deplacer."
            />
            <VideoFollowSection {...councilVideoInfo} />
          </section>

          <section id="contact" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Contact"
              title="Un point d'entree clair pour joindre le Conseil communal"
              description="Adresse, e-mail et telephone sont regroupes dans un bloc visible, pense pour etre repere facilement sur desktop comme sur mobile."
            />
            <ContactPanel contact={councilContact} />
          </section>

          <section id="ressources" className="scroll-mt-32 rounded-[2rem] border border-black/8 bg-white p-5 shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
                  Ressources officielles
                </p>
                <h2 className="mt-2 text-xl font-semibold text-prilly-coal">
                  Acceder directement aux pages de reference du Conseil
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={councilPageMeta.sourceLinks.meetings}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <span className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-prilly-red px-5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-prilly-red/90">
                    seances officielles
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href={councilPageMeta.sourceLinks.video}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <span className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-prilly-yellow px-5 text-sm font-semibold text-prilly-coal transition duration-200 hover:-translate-y-0.5 hover:bg-prilly-yellow/90">
                    Plateforme video
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
