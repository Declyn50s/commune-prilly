import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { GenericCard } from "@/components/common/cards";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { serviceCategories } from "@/data/mock";

const serviceItemHrefMap: Record<string, string> = {
  "Espaces publics": "/services/espaces-publics",
  Jardins: "/services/espaces-publics#jardins-familiaux",
  "Cimetières": "/services/cimetieres",
  Cimetieres: "/services/cimetieres",
  "Bâtiments communaux": "/services/batiments-communaux",
  "Batiments communaux": "/services/batiments-communaux",
  "Location de salles": "/services/location-salles",
  "Transports publics": "/services/mobilite/transports-publics",
  "Vélos": "/services/mobilite/velos",
  Velos: "/services/mobilite/velos",
  Voitures: "/services/mobilite/stationnement",
  Piétons: "/services/mobilite/pietons-et-loisirs",
  Pietons: "/services/mobilite/pietons-et-loisirs",
  Stationnement: "/services/mobilite/stationnement",
  "Eau potable": "/services/services-industriels/eau-potable",
  Gaz: "/services/services-industriels/gaz",
  "Chauffage a distance": "/services/services-industriels/chauffage-distance",
  Assainissement: "/services/environnement/assainissement",
  Biodiversité: "/services/environnement/biodiversite",
  Biodiversite: "/services/environnement/biodiversite",
  "Air & bruit": "/services/environnement/air-bruit",
  Environnement: "/services/environnement",
  "Domaine communal": "/services/domaine-communal",
};

export default function ServicesIndexPage() {
  return (
    <RubricLayout
      breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      eyebrow="Services communaux"
      title="Services communaux"
      description="Accès aux espaces publics, à la mobilité, à l’environnement et aux infrastructures communales."
      aside={
        <div className="surface flex items-center gap-4 p-6">
            <Search className="h-10 w-10 rounded-2xl bg-prilly-soft p-2 text-prilly-red" />
            <div>
              <h2 className="text-lg font-semibold text-prilly-coal">Accès utiles</h2>
              <p className="mt-1 text-sm leading-6 text-prilly-coal/70">
                Retrouvez les principaux services communaux regroupés par domaine.
              </p>
            </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {serviceCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.05}>
            <div className="space-y-3">
              <GenericCard title={category.title} description={category.description} href={category.href} accent={index % 2 === 0 ? "red" : "coal"} />
              <div className="surface flex flex-wrap gap-2 p-4">
                {category.items.map((item) => (
                  <Link
                    key={item}
                    to={serviceItemHrefMap[item] ?? category.href}
                    className="rounded-full border border-black/8 bg-white px-3 py-2 text-sm text-prilly-coal/70 transition hover:border-prilly-red/20 hover:text-prilly-red"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </RubricLayout>
  );
}
