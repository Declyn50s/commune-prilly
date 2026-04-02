import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  AgeGroupSelector,
  ContactPanel,
  QuickLinksSection,
} from "@/features/enfance-ecoles/components";
import {
  enfanceAgeGroups,
  enfanceHubHighlights,
  enfanceHubPrimaryLinks,
  enfanceHubSecondaryLinks,
  enfanceHubUtilityLinks,
  enfancePrimaryContact,
} from "@/features/enfance-ecoles/data";

export default function EnfanceEcolesHubPage() {
  const [selectedAge, setSelectedAge] = useState(enfanceAgeGroups[0]?.id ?? "0-4");

  const ageCards = useMemo(() => {
    const group = enfanceAgeGroups.find((entry) => entry.id === selectedAge) ?? enfanceAgeGroups[0];
    return enfanceHubPrimaryLinks
      .concat(enfanceHubSecondaryLinks)
      .filter((item) => group.serviceSlugs.includes(item.slug));
  }, [selectedAge]);

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Enfance & écoles" },
        ]}
      />

      <PageHero
        eyebrow="Rubrique familles"
        title="Enfance & écoles"
        description="Accueil, scolarité, repas, activités et accompagnement pour les enfants, les jeunes et les familles à Prilly."
        tone="warm"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/30 bg-prilly-yellow/20 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal">
                Informations utiles
              </p>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/75">
                Cette rubrique a été pensée par âge, moments de vie et besoins concrets pour que
                les familles trouvent rapidement le bon service sans se perdre dans les contenus.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {enfanceHubUtilityLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal transition hover:bg-prilly-soft"
                >
                  <item.icon className="h-4 w-4 text-prilly-red" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {enfanceHubHighlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <div className="surface p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <QuickLinksSection
        eyebrow="Accès rapides principaux"
        title="Les six portes d’entrée les plus utiles pour les familles"
        description="Chaque carte mène vers un mini-parcours clair, orienté action et pensé pour faire gagner du temps."
        items={enfanceHubPrimaryLinks}
      />

      <QuickLinksSection
        eyebrow="Accès secondaires"
        title="Des services complémentaires à portée de clic"
        description="Ces accès rapides permettent de retrouver les dispositifs utiles sans surcharger la page principale."
        items={enfanceHubSecondaryLinks}
        compact
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Trouver le bon service selon l’âge"
          title="Une entrée simple par tranche d’âge"
          description="Le but est de vous montrer immédiatement les dispositifs qui concernent réellement votre enfant."
        />
        <AgeGroupSelector
          groups={enfanceAgeGroups}
          selected={selectedAge}
          onSelect={setSelectedAge}
          relatedCards={ageCards}
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact principal"
          title="Un point d’entrée unique pour orienter les familles"
          description="Si vous hésitez entre plusieurs structures ou si votre situation est particulière, le Service de l’enfance vous guide vers la bonne solution."
        />
        <ContactPanel contacts={[enfancePrimaryContact]} />
      </section>
    </section>
  );
}
