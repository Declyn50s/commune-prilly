import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  InfoGrid,
  PricingCard,
  RefundCard,
  StepsSection,
  UsefulLinkCard,
  ValidityCard,
} from "@/features/cartes-cff/components";
import {
  cffConditions,
  cffContact,
  cffHero,
  cffLinks,
  cffPricing,
  cffQuickFacts,
  cffRefunds,
  cffSteps,
  cffValidity,
} from "@/features/cartes-cff/data";

const pageSections: PageSideNavSection[] = [
  { id: "apercu", label: "Apercu" },
  { id: "prix", label: "Prix" },
  { id: "etapes", label: "Demarche" },
  { id: "validite", label: "Validite" },
  { id: "conditions", label: "Conditions" },
  { id: "remboursement", label: "Remboursement" },
  { id: "liens", label: "Liens utiles" },
  { id: "contact", label: "Contact" },
];

export default function CffCardsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Demarches", href: "/demarches" },
          { label: "Cartes journalieres CFF" },
        ]}
      />

      <PageHero
        eyebrow="Service pratique"
        title={cffHero.title}
        description={cffHero.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-soft">
              <img src={cffHero.imageSrc} alt="Visuel cartes journalieres CFF" className="w-full object-cover" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={cffHero.ctas[0].href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {cffHero.ctas[0].label}
              </a>
              <a
                href={cffHero.ctas[1].href}
                className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal"
              >
                {cffHero.ctas[1].label}
              </a>
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <div className="space-y-8">
          <section id="apercu" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="En bref"
              title="Les informations essentielles en quelques secondes"
              description="La carte journaliere degriffée Commune remplace l'ancien systeme depuis le 11 decembre 2023 et permet de voyager dans toute la Suisse."
            />
            <InfoGrid items={cffQuickFacts} />
          </section>

          <section id="prix" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Prix"
              title="Deux niveaux de prix selon le moment d'achat"
              description="Les tarifs varient selon l'anticipation de votre achat et selon que vous disposez d'un demi-tarif."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {cffPricing.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <PricingCard {...item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="etapes" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Comment ca marche"
              title="Un achat simple en 4 etapes"
              description="Le parcours est volontairement court: verification en ligne, venue au guichet, informations voyageurs et paiement sur place."
            />
            <StepsSection steps={cffSteps} />
          </section>

          <section id="validite" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Validite"
              title="Quand la carte est-elle valable ?"
              description="La validite est liee a la date choisie au moment de l'achat."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {cffValidity.map((item) => (
                <ValidityCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id="conditions" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Conditions importantes"
              title="Ce qu'il faut savoir avant de venir"
              description="Cette section evite les ambiguities frequentes sur la reservation, le caractere nominatif et les modalites d'achat."
            />
            <InfoGrid items={cffConditions} />
          </section>

          <section id="remboursement" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Remboursement"
              title="Deux cas de remboursement a distinguer"
              description="Les regles changent selon qu'il s'agit d'un remboursement standard ou d'une situation exceptionnelle."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {cffRefunds.map((item) => (
                <RefundCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id="liens" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Liens utiles"
              title="Verifier la disponibilite et preparer votre trajet"
              description="Les liens les plus utiles sont regroupes ici pour gagner du temps avant l'achat."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {cffLinks.map((item) => (
                <UsefulLinkCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <ContactPanel {...cffContact} />
          </section>
        </div>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
