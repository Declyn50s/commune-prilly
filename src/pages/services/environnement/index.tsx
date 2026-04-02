import { useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import {
  BuildingHighlights,
  DocumentsLibrary,
  EnerCoachDashboard,
  EnergyContactCard,
  EnergyHero,
  EnergySectionNav,
  ExpressTipsStrip,
  KeyIntroCards,
  NetworkCards,
  PracticalTipsGrid,
  ResourceLinks,
  SectionIntro,
  StrategyFeature,
  SubsidyCard,
  SubsidyFilterBar,
  SubsidyProcess,
} from "@/features/environnement/energy-page-components";
import {
  buildingHighlights,
  enerCoachFlows,
  enerCoachKpis,
  energyContact,
  energyDocumentCategories,
  energyHero,
  energySectionLinks,
  energySubsidies,
  networkCards,
  practicalExpressTips,
  practicalResources,
  practicalTips,
  strategyHighlights,
  subsidyCategories,
  subsidyImportantPoints,
  subsidyProcessSteps,
  subsidyProfiles,
  type EnergyProfile,
  type EnergySubsidyCategory,
} from "@/features/environnement/energy-page-data";

export default function EnvironmentHubPage() {
  const [category, setCategory] = useState<EnergySubsidyCategory>("Toutes");
  const [profile, setProfile] = useState<EnergyProfile | "Tous">("Tous");
  const [search, setSearch] = useState("");

  const normalizedQuery = search.trim().toLowerCase();
  const filteredSubsidies = energySubsidies.filter((item) => {
    const categoryMatch = category === "Toutes" || item.category === category;
    const profileMatch = profile === "Tous" || item.profiles.includes(profile);
    const haystack = [item.title, item.category, item.amount, ...item.keywords, ...item.conditions, ...item.profiles]
      .join(" ")
      .toLowerCase();
    const searchMatch = normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

    return categoryMatch && profileMatch && searchMatch;
  });

  return (
    <section className="container space-y-12 py-8 md:space-y-16 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Energie & Environnement" }]} />

      <EnergyHero
        title={energyHero.title}
        description={energyHero.description}
        imageSrc={energyHero.imageSrc}
        imageAlt={energyHero.imageAlt}
        ctas={energyHero.ctas}
        badges={energyHero.badges}
      />

      <EnergySectionNav links={energySectionLinks} />

      <section className="space-y-8">
        <SectionIntro
          badge="Environnement"
          title="Subventions, conseils et documents"
          description="Aides 2026, conseils pratiques, strat?gie communale et documents utiles."
        />
        <KeyIntroCards />
      </section>

      <section id="subventions" className="space-y-8 scroll-mt-28">
        <SectionIntro
          badge="Subventions 2026"
          title="Toutes les subventions energie, mobilite et durabilite en un coup d'oeil"
          description="La Ville de Prilly soutient les projets des habitantes et habitants, des entreprises et des associations prilleranes. Les aides sont en grande partie cumulables avec les aides cantonales et fédérales."
        />

        <SubsidyFilterBar
          categories={subsidyCategories}
          currentCategory={category}
          onCategoryChange={setCategory}
          profiles={subsidyProfiles}
          currentProfile={profile}
          onProfileChange={setProfile}
          search={search}
          onSearchChange={setSearch}
        />

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-black/8 bg-prilly-soft/70 px-5 py-4">
          <p className="text-sm text-prilly-coal/72">
            {filteredSubsidies.length} aide{filteredSubsidies.length > 1 ? "s" : ""} visible
            {normalizedQuery ? `s pour "${search}"` : ""}
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="/docs/environnement/energie/programme-subventions-2026.pdf" target="_blank" rel="noreferrer">
              <span className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:text-prilly-red">
                Télécharger le programme 2026
              </span>
            </a>
            <a href="/docs/environnement/energie/formulaire-subventions-2026.pdf" target="_blank" rel="noreferrer">
              <span className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:text-prilly-red">
                Télécharger le formulaire 2026
              </span>
            </a>
            <a href="/docs/environnement/energie/liste-magasins-agrees-2026.pdf" target="_blank" rel="noreferrer">
              <span className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:text-prilly-red">
                Voir les marchands agrees
              </span>
            </a>
          </div>
        </div>

        {filteredSubsidies.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredSubsidies.map((item, index) => (
              <SubsidyCard key={item.id} item={item} delay={index * 0.02} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-black/10 bg-white px-6 py-12 text-center shadow-soft">
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Aucune aide trouvee</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/70">
              Essayez un autre mot-cle comme "fenetres", "PAC", "photovoltaique", "velo electrique" ou
              reinitialisez les filtres.
            </p>
          </div>
        )}

        <div className="space-y-6 rounded-[2rem] border border-black/8 bg-gradient-to-br from-[#f4f8fb] via-white to-[#f4f8f4] p-6 shadow-soft md:p-8">
          <SectionIntro
            badge="Demande de subvention"
            title="?tapes de la demande"
            description="Points ? v?rifier avant l'envoi d'un dossier."
          />
          <SubsidyProcess steps={subsidyProcessSteps} importantPoints={subsidyImportantPoints} />
        </div>
      </section>

      <section id="conseils" className="space-y-8 scroll-mt-28">
        <SectionIntro
          badge="Conseils pratiques"
          title="Reduire sa consommation au quotidien"
          description="Des repères simples pour baisser les usages superflus, mieux acheter et mieux suivre les performances de son logement ou de son batiment."
        />
        <PracticalTipsGrid items={practicalTips} />
        <ExpressTipsStrip items={practicalExpressTips} />
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Ressources utiles</p>
          <ResourceLinks items={practicalResources} />
        </div>
      </section>

      <section id="strategie" className="space-y-8 scroll-mt-28">
        <SectionIntro
          badge="Strategie energetique communale"
          title="La strategie energetique de Prilly"
          description="Label, orientations politiques et outils territoriaux de la commune."
        />
        <div className="grid gap-4 xl:grid-cols-2">
          <StrategyFeature {...strategyHighlights.gold} />
          <StrategyFeature {...strategyHighlights.policy} delay={0.05} />
        </div>
        <StrategyFeature {...strategyHighlights.planning} delay={0.08} />
      </section>

      <section id="batiments" className="space-y-8 scroll-mt-28">
        <SectionIntro
          badge="Batiments et reseaux"
          title="Le patrimoine communal comme levier d'exemplarite"
          description="La commune agit aussi sur ses propres batiments, suit les consommations et oriente les projets en lien avec les reseaux energetiques du territoire."
        />

        <div className="space-y-6 rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
          <SectionIntro
            badge="Batiments communaux"
            title="Gestion du patrimoine communal"
            description="La commune applique un principe d'exemplarite energetique sur son propre patrimoine."
          />
          <BuildingHighlights
            items={buildingHighlights}
            reportHref="/docs/environnement/energie/rapport-enercoach-2022-2023.pdf"
          />
        </div>

        <div className="space-y-6 rounded-[2rem] border border-black/8 bg-gradient-to-br from-[#f4f8fb] via-white to-[#eef6ef] p-6 shadow-soft md:p-8">
          <SectionIntro
            badge="Indicateurs EnerCoach"
            title="Indicateurs EnerCoach"
            description="Indicateurs de suivi des b?timents communaux."
          />
          <EnerCoachDashboard items={enerCoachKpis} flows={enerCoachFlows} />
        </div>

        <div className="space-y-6 rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
          <SectionIntro
            badge="Reseaux energie"
            title="Chauffage a distance et services industriels"
            description="Deux portes d'entrée pour comprendre le role des reseaux dans la transition energetique locale."
          />
          <NetworkCards items={networkCards} />
        </div>
      </section>

      <section id="documents" className="space-y-8 scroll-mt-28">
        <SectionIntro
          badge="Documents et contact"
          title="Documents et formulaires"
          description="Documents relatifs aux subventions, ? la strat?gie ?nerg?tique et aux actions communales."
        />
        <DocumentsLibrary categories={energyDocumentCategories} />
      </section>

      <EnergyContactCard
        title={energyContact.title}
        address={energyContact.address}
        email={energyContact.email}
        phone={energyContact.phone}
      />
    </section>
  );
}
