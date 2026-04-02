import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  DocumentCard,
  FacilityCard,
  InfoNotice,
  SportsPageHero,
  StatGrid,
} from "@/features/sports-loisirs/components";
import {
  beachVolleyFocus,
  fleurDeLysFocus,
  petanqueFocus,
  sportsDocumentLinks,
  sportsFacilities,
} from "@/features/sports-loisirs/data";

export default function SportsFacilitiesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Loisirs", href: "/loisirs" },
          { label: "Sports et loisirs", href: "/loisirs/sports-et-loisirs" },
          { label: "Equipements sportifs" },
        ]}
      />

      <SportsPageHero
        eyebrow="Lieux de pratique"
        title="Equipements sportifs"
        description="Des equipements varies pour la pratique libre, les clubs, les ecoles et les loisirs, avec une lecture plus simple des grands sites communaux."
        imageSrc="/images/sports-loisirs/complexe-fleur-de-lys.jpg"
        imageAlt="Complexe sportif de la Fleur-de-Lys"
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Les équipements disponibles"
          title="Voir rapidement les lieux disponibles à Prilly"
          description="Liste des équipements sportifs et des installations de loisirs."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sportsFacilities.map((item) => (
            <FacilityCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="fleur-de-lys" className="space-y-8">
        <SectionHeader eyebrow="Focus site" title={fleurDeLysFocus.title} description={fleurDeLysFocus.description} />
        <StatGrid items={fleurDeLysFocus.stats} />
      </section>

      <InfoNotice title={beachVolleyFocus.title} description={beachVolleyFocus.description}>
        <div id="beach-volley" className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            {beachVolleyFocus.rules.map((rule) => (
              <div key={rule} className="rounded-[1.5rem] bg-white px-4 py-4 text-sm leading-6 text-prilly-coal/76 shadow-soft">
                {rule}
              </div>
            ))}
          </div>
          <DocumentCard item={beachVolleyFocus.document} />
        </div>
      </InfoNotice>

      <InfoNotice title={petanqueFocus.title} description={petanqueFocus.description} />

      <section id="espaces-publics" className="space-y-8">
        <SectionHeader
          eyebrow="Ressources utiles"
          title="Documents et bases officielles"
          description="Les documents sont presentes ici comme des outils utiles, pas comme une simple liste brute de PDF."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {sportsDocumentLinks.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
