import { Breadcrumb } from "@/components/common/breadcrumb";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  DocumentCard,
  DrainageInfoBlock,
  EnvironmentPageHero,
  NoticeCard,
  ParentSectionLinks,
  RuleSummaryList,
  TaxSummaryCard,
} from "@/features/environnement/components";
import {
  drainagePage,
  drainageQuickFacts,
  environmentContacts,
  environmentParentLinks,
} from "@/features/environnement/data";

export default function DrainagePage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Assainissement" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/assainissement" />

      <EnvironmentPageHero
        eyebrow="Eaux usees et eaux claires"
        title={drainagePage.hero.title}
        description={drainagePage.hero.description}
        imageSrc={drainagePage.hero.imageSrc}
        imageAlt={drainagePage.hero.imageAlt}
        ctas={drainagePage.hero.ctas}
        note="Le but est de rendre les regles techniques digestes, sans obliger a ouvrir chaque PDF avant de comprendre l'essentiel."
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comprendre le systeme"
          title="Des regles differentes selon la nature des eaux"
          description="Le point cle est de bien distinguer les eaux usees et les eaux claires, ainsi que les obligations des proprietaires avant tout travaux."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {drainageQuickFacts.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <NoticeCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
        <DrainageInfoBlock title="Ce qu'il faut retenir" items={drainagePage.overview} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Installations privées"
          title="Mise en conformite, evacuation et raccordement"
          description="Le reglement communal, les notices et la fiche cantonale sont traduits ici en repères plus faciles a utiliser pour preparer un projet."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <DrainageInfoBlock title="Installations privées" items={drainagePage.privateInstallations} />
          <DrainageInfoBlock title="Evacuation des eaux claires" items={drainagePage.clearWater} />
          <DrainageInfoBlock title="Raccordement au reseau" items={drainagePage.networkConnection} />
        </div>
      </section>

      <section id="taxes-2025" className="space-y-8">
        <SectionHeader
          eyebrow="Taxes applicables des 2025"
          title="Les montants a retrouver sans effort"
          description="Les nouvelles taxes sont presentrées en cartes courtes pour faciliter la lecture mobile et la comparaison des postes."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {drainagePage.taxes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <TaxSummaryCard title={item.title} amount={item.amount} note={item.note} />
            </Reveal>
          ))}
        </div>
      </section>

      <RuleSummaryList title="Regles pratiques a garder en tete" items={drainagePage.rules} />

      <section id="documents-techniques" className="space-y-8">
        <SectionHeader
          eyebrow="Documents techniques"
          title="Les supports a ouvrir selon votre besoin"
          description="Chaque document est replace dans le parcours utilisateur: reglement, retention, raccordement, fiche cantonale ou taxes."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {drainagePage.documents.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <DocumentCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactPanel contact={environmentContacts.drainage} />
    </section>
  );
}
