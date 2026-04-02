import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  BiodiversityHighlight,
  ContactPanel,
  DocumentCard,
  EnvironmentPageHero,
  InvasiveSpeciesAlert,
  NoticeCard,
  ParentSectionLinks,
  VideoHelpCard,
} from "@/features/environnement/components";
import {
  environmentContacts,
  environmentParentLinks,
  invasiveAlertCards,
  invasiveSpeciesPage,
} from "@/features/environnement/data";

export default function InvasiveSpeciesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Especes invasives" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/especes-invasives" />

      <EnvironmentPageHero
        eyebrow="Signalement et prevention"
        title={invasiveSpeciesPage.hero.title}
        description={invasiveSpeciesPage.hero.description}
        imageSrc={invasiveSpeciesPage.hero.imageSrc}
        imageAlt={invasiveSpeciesPage.hero.imageAlt}
        ctas={invasiveSpeciesPage.hero.ctas}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Vue d'ensemble"
          title="Comprendre l'enjeu avant d'agir"
          description="La lutte contre les especes exotiques envahissantes repose sur l'identification, le bon canal de signalement et des gestes adaptes."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {invasiveAlertCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <NoticeCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
        <BiodiversityHighlight title="Pourquoi il faut annoncer et identifier" points={invasiveSpeciesPage.overview} />
      </section>

      <section id="moustique-tigre" className="space-y-8">
        <SectionHeader
          eyebrow="Moustique tigre"
          title="Des gestes simples, a repeter chaque semaine"
          description="Le moustique tigre est déjà present dans le canton. Le but reste de maintenir sa population tres basse en eliminant l'eau stagnante et en signalant les cas suspects."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <InvasiveSpeciesAlert title="Ce qu'il faut retenir" description="Le risque sanitaire reste limite, mais les bons gestes domestiques sont decisifs pour limiter la proliferation locale.">
            <div className="grid gap-3">
              {invasiveSpeciesPage.mosquito.facts.map((fact) => (
                <div key={fact} className="rounded-[1.25rem] border border-black/8 bg-white/90 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  {fact}
                </div>
              ))}
            </div>
          </InvasiveSpeciesAlert>
          <BiodiversityHighlight title="Bons gestes a appliquer tout de suite" points={invasiveSpeciesPage.mosquito.gestures} />
        </div>
        <VideoHelpCard
          title="Video locale moustique tigre"
          description="Une ressource video pour comprendre rapidement les gestes de prevention et la logique de signalement."
          src={invasiveSpeciesPage.mosquito.videoSrc}
        />
        <div className="grid gap-4 md:grid-cols-1 xl:max-w-xl">
          <DocumentCard
            item={{
              title: "Flyer moustique tigre 2025",
              description: "La fiche pratique a garder sous la main pour identifier les gestes utiles et retrouver les messages de prevention.",
              href: invasiveSpeciesPage.mosquito.flyerHref,
              label: "Télécharger le flyer",
              tag: "Prevention",
            }}
          />
        </div>
      </section>

      <section id="frelon-asiatique" className="space-y-8">
        <SectionHeader
          eyebrow="Frelon asiatique"
          title="Photographier, localiser, signaler"
          description="La difference avec le frelon europeen doit être vérifiée avec une photo. L'annonce est surtout utile entre mars et fin septembre."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <BiodiversityHighlight title="Ce qu'il faut savoir" points={invasiveSpeciesPage.hornet.facts} />
          <InvasiveSpeciesAlert title="Comment reagir ?" description="L'objectif est de permettre une action utile sur les colonies au bon moment de l'annee.">
            <div className="grid gap-3">
              {invasiveSpeciesPage.hornet.reaction.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-black/8 bg-white/90 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  {item}
                </div>
              ))}
            </div>
          </InvasiveSpeciesAlert>
        </div>
      </section>

      <ContactPanel contact={environmentContacts.invasive} />
    </section>
  );
}
