import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  HelpfulNotice,
  OfficialDocumentCard,
  PoolChoiceCard,
  PoolContactsPanel,
  PoolInfoSection,
  PoolPricingCard,
  PoolsHero,
  PracticalInfoList,
  SeasonBadge,
} from "@/features/piscines/components";
import {
  contactCards,
  fleurDeLysInfo,
  fontadelInfo,
  poolChoices,
  poolDocuments,
  poolsHero,
  practicalRules,
  pricingCards,
  pricingNotice,
  seasonIndicator,
} from "@/features/piscines/data";

export default function PoolsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Loisirs", href: "/loisirs" },
          { label: "Sports et loisirs", href: "/loisirs/sports-et-loisirs" },
          { label: "Piscines" },
        ]}
      />

      <PoolsHero {...poolsHero} />

      <section className="space-y-6">
        <SeasonBadge {...seasonIndicator} />
      </section>

      <section id="choisir" className="space-y-8">
        <SectionHeader
          eyebrow="Choisir sa piscine"
          title="Distinguer immediatement Fleur-de-Lys et Fontadel"
          description="Deux cartes, deux logiques d'usage: l'extérieur pour la saison et la vie estivale, le couvert pour la pratique réguliere hors ete."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {poolChoices.map((item) => (
            <PoolChoiceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="fleur-de-lys" className="space-y-8">
        <SectionHeader
          eyebrow="Piscine extérieure"
          title="Fleur-de-Lys"
          description="Ici, l'essentiel ressort d'un coup d'oeil: saison, horaires, meteo, parking, abonnements en ligne, accèssibilite et restaurant."
        />
        <PoolInfoSection {...fleurDeLysInfo} />
      </section>

      <section id="abonnements" className="space-y-8">
        <SectionHeader
          eyebrow="Abonnements et tarifs"
          title="Des cartes tarifaires lisibles, sans tableau lourd"
          description="Les formules AquaPass sont presentes par usage pour rendre le choix plus clair avant d'ouvrir les documents officiels."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricingCards.map((item) => (
            <PoolPricingCard key={item.title} item={item} />
          ))}
        </div>
        <HelpfulNotice {...pricingNotice} />
      </section>

      <section id="fontadel" className="space-y-8">
        <SectionHeader
          eyebrow="Piscine couverte"
          title="Fontadel"
          description="Le bassin couvert est traite comme un service a part entiere: dimensions, ouverture publique, cours et contacts dedies."
        />
        <PoolInfoSection title={fontadelInfo.title} imageSrc={fontadelInfo.imageSrc} imageAlt={fontadelInfo.imageAlt} address={fontadelInfo.address} phone={fontadelInfo.phone} facts={fontadelInfo.facts} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Regles pratiques"
          title="Les informations importantes sans passer par le PDF complet"
          description="La synthese garde ce qui aide reellement l'usager: securite, hygiene, meteo, surveillance des enfants et usage des billets."
        />
        <PracticalInfoList items={practicalRules} />
      </section>

      <section id="documents" className="space-y-8">
        <SectionHeader
          eyebrow="Documents utiles"
          title="Les bons supports, remis en contexte"
          description="Chaque document est relie à un besoin concret: regler une question d'usage, verifier un tarif, comprendre les CGV ou retrouver la liste des clubs."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {poolDocuments.map((item) => (
            <OfficialDocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contacts"
          title="S'adresser tout de suite au bon interlocuteur"
          description="Les contacts sont séparés par lieu et par besoin pour eviter les renvois inutiles."
        />
        <PoolContactsPanel items={contactCards} />
      </section>
    </section>
  );
}
