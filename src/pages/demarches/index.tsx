import { Filter } from "lucide-react";
import { GenericCard } from "@/components/common/cards";
import { Reveal } from "@/components/common/reveal";
import { SearchBar } from "@/components/common/search-bar";
import { SectionHeader } from "@/components/common/section-header";
import { RubricLayout } from "@/components/common/rubric-layout";
import { searchCategories, searchSuggestions } from "@/data/mock";
import { demarchesRoutes } from "@/features/demarches/data/routes";

const routeDescriptionBySlug: Record<string, string> = {
  arrivée: "Annonce d'arrivée aupres de la commune.",
  depart: "Annonce de depart aupres de la commune.",
  "annonce-demenagement": "Annonce de changement d'adresse.",
  attestations: "Demande d'attestations et de documents.",
  "office-population": "Informations de l'Office de la population.",
  habitants: "Informations administratives pour les habitants.",
  inhumations: "Informations relatives aux inhumations.",
  chiens: "Démarches relatives aux chiens.",
  "carte-decheterie": "Demande ou renouvellement de carte de décheterie.",
  naturalisation: "Informations sur la naturalisation.",
  déchets: "Informations sur la collecte et le tri des déchets.",
  "calendrier-collecte": "Calendrier des collectes communales.",
  décheteries: "Horaires et conditions d'acces aux décheteries.",
  "points-collecte": "Informations sur les points de collecte.",
  taxes: "Informations sur les taxes communales.",
  "cartes-cff": "Informations sur les cartes journalieres CFF.",
};

const frequentSlugs = [
  "arrivee",
  "depart",
  "attestations",
  "carte-decheterie",
  "dechets",
  "cartes-cff",
];

export default function DemarchesIndexPage() {
  const frequentRoutes = demarchesRoutes.filter((item) => frequentSlugs.includes(item.slug));

  return (
    <RubricLayout
      breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Demarches" }]}
      eyebrow="Démarches"
      title="Démarches administratives"
      description="Accès aux démarches et informations administratives de la Commune de Prilly."
      tone="dark"
    >
      <div className="-mt-4 grid gap-4 rounded-[2rem] bg-prilly-coal bg-mesh px-6 py-6 text-white md:px-8">
        <SearchBar placeholder="Rechercher une demarche" suggestions={searchSuggestions} />
        <div className="flex flex-wrap gap-2">
          {searchCategories.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <section className="space-y-8">
        <SectionHeader title="Démarches" eyebrow="Administration" description="Découvrez les démarches administratives de la commune de Prilly." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {frequentRoutes.slice(0, 6).map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
              <GenericCard
                title={item.title}
                description={routeDescriptionBySlug[item.slug] ?? item.description}
                href={item.path}
                accent={index % 2 === 0 ? "red" : "coal"}
                hideBadge
                ctaLabel="Consulter"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader title="Démarches fréquentes" eyebrow="Populaires" description="Les démarches les plus couramment effectuées par nos citoyens." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {frequentRoutes.map((item) => (
            <GenericCard
              key={item.slug}
              title={item.title}
              description={routeDescriptionBySlug[item.slug] ?? item.description}
              href={item.path}
              accent="red"
              hideBadge
              ctaLabel="Consulter"
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Complète"
          title="Toutes les demarches"
          description="Liste exhaustive de toutes les démarches administratives disponibles."
          action={
            <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-prilly-coal/70">
              <Filter className="h-4 w-4 text-prilly-red" />
              Filtres à venir
            </div>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {demarchesRoutes.map((item) => (
            <GenericCard
              key={item.slug}
              title={item.title}
              description={routeDescriptionBySlug[item.slug] ?? item.description}
              href={item.path}
              accent="coal"
              hideBadge
              ctaLabel="Consulter"
            />
          ))}
        </div>
      </section>
    </RubricLayout>
  );
}
