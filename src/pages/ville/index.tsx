import { GenericCard } from "@/components/common/cards";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { cityHighlights, cityThemes } from "@/data/mock";

const cityHrefMap: Record<string, string> = {
  "Conseil communal": "/ville/conseil-communal",
  Municipalite: "/ville/municipalite",
  "Municipalité": "/ville/municipalite",
  "Archives communales": "/ville/archives-communales",
  "Histoire & Prilly 360°": "/ville/archives-communales",
  "Finances & impôts": "/ville/finances-impots",
  "Votations & elections": "/ville/votations-elections",
  "Votations & élections": "/ville/votations-elections",
  "Reglements communaux": "/ville/reglements-communaux",
  "Règlements communaux": "/ville/reglements-communaux",
  "Ressources humaines": "/ville/ressources-humaines",
  "Offres d'emploi": "/ville/offres-emploi",
  "Offres d’emploi": "/ville/offres-emploi",
  "Emoluments et subventions": "/ville/emoluments-et-subventions",
  "Émoluments et subventions": "/ville/emoluments-et-subventions",
};

export default function VilleIndexPage() {
  return (
    <RubricLayout
      breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Ville" }]}
      eyebrow="Ville"
      title="Informations institutionnelles"
      description="Municipalité, Conseil communal, finances, votations, archives et emploi communal."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {cityThemes.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <div className="surface p-5">
              <h2 className="text-lg font-semibold text-prilly-coal">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cityHighlights.map((item) => (
            <GenericCard
              key={item}
              title={item}
              description="Accéder à la rubrique correspondante."
              href={cityHrefMap[item] ?? "/ville"}
              accent="coal"
            />
        ))}
        <GenericCard
          title="Ressources humaines"
          description="Emploi, recrutement, apprentissage et contacts RH."
          href="/ville/ressources-humaines"
          accent="coal"
        />
        <GenericCard
          title="Emoluments et subventions"
          description="Tarifs communaux, émoluments et subventions."
          href="/ville/emoluments-et-subventions"
          accent="coal"
        />
      </div>
    </RubricLayout>
  );
}
