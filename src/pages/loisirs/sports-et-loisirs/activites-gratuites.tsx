import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  FreeActivityCard,
  SportsPageHero,
} from "@/features/sports-loisirs/components";
import { freeActivities, sportsContacts } from "@/features/sports-loisirs/data";

const anchors = [
  "urban-training",
  "aqua-training",
  "urban-fit-senior",
  "gym-poussette",
  "dimanche",
  "sports-jeunes",
  "coup-de-pouce",
];

export default function FreeActivitiesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Loisirs", href: "/loisirs" },
          { label: "Sports et loisirs", href: "/loisirs/sports-et-loisirs" },
          { label: "Activites gratuites" },
        ]}
      />

      <SportsPageHero
        eyebrow="Bouger sans frais"
        title="Activites gratuites"
        description="Des activités pour bouger, Découvrir et partager à Prilly, sans frais et avec une lecture plus pratique des horaires, publics et inscriptions."
        imageSrc="/images/sports-loisirs/urban-training.jpg"
        imageAlt="Affiche Urban Training"
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow=" à là une"
          title="Les rendez-vous gratuits qui structurent l'offre communale"
          description="La page privilegie les formats les plus utiles au public: pratique extérieure, famille, seniors, jeunesse et activités du dimanche."
        />
        <div className="space-y-6">
          {freeActivities.map((item, index) => (
            <FreeActivityCard key={item.title} item={item} id={anchors[index]} />
          ))}
        </div>
      </section>

      <ContactPanel {...sportsContacts.common} />
    </section>
  );
}
