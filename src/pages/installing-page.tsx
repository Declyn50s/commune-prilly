import { useMemo, useState } from "react";
import { ArrowRight, Building2, Download, FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { ContactHelpBlock } from "@/components/installation/contact-help-block";
import { DocumentCard } from "@/components/installation/document-card";
import { ImportantNotice } from "@/components/installation/important-notice";
import { PracticalInfoCard } from "@/components/installation/practical-info-card";
import { ProfileSelector } from "@/components/installation/profile-selector";
import { SpecialCaseCard } from "@/components/installation/special-case-card";
import { StepCard } from "@/components/installation/step-card";
import { Button } from "@/components/ui/button";
import { contacts } from "@/data/mock";
import {
  installationDocuments,
  installationPracticalInfos,
  installationProfiles,
  installationSpecialCases,
  installationSteps,
} from "@/data/installation";
import type { InstallProfileKey } from "@/types/content";

const pageSections: PageSideNavSection[] = [
  { id: "profil", label: "Votre situation" },
  { id: "etapes", label: "Etapes" },
  { id: "documents", label: "Documents" },
  { id: "cas-particuliers", label: "Cas particuliers" },
  { id: "infos-pratiques", label: "Infos pratiques" },
  { id: "contact", label: "Contact" },
];

export function InstallingPage() {
  const [activeProfile, setActiveProfile] = useState<InstallProfileKey>("swiss");
  const contact = contacts.find((item) => item.id === "population") ?? contacts[0];

  const filteredSteps = useMemo(
    () => installationSteps.filter((step) => step.profileKeys.includes(activeProfile)),
    [activeProfile],
  );

  const filteredCases = useMemo(
    () => installationSpecialCases.filter((item) => item.profileKeys.includes(activeProfile)),
    [activeProfile],
  );

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "S'installer à Prilly" },
        ]}
      />

      <PageHero
        eyebrow="Parcours d'installation"
        title="S'installer à Prilly"
        description="Un parcours guide pour savoir quoi faire, dans quel ordre, et accéder immediatement aux bons formulaires selon votre situation."
        tone="warm"
        aside={
          <div className="space-y-4">
            <ImportantNotice
              title="A faire dans les 8 jours"
              description="L'annonce d'arrivée a l'Office de la population est obligatoire dans les 8 jours suivant votre installation à Prilly."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#documents" className="focus-ring">
                <Button className="w-full justify-center">
                  Commencer mon inscription
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#etapes" className="focus-ring">
                <Button variant="secondary" className="w-full justify-center">
                  Voir les etapes
                </Button>
              </a>
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="profil" className="scroll-mt-32 space-y-6">
            <SectionHeader
              eyebrow="Votre profil"
              title="Votre situation"
              description="La page met en avant les contenus prioritaires selon votre profil pour faciliter la preparation des demarches."
            />
            <ProfileSelector profiles={installationProfiles} value={activeProfile} onChange={setActiveProfile} />
          </section>

          <section id="etapes" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Votre installation en etapes"
              title="L'ordre des demarches"
              description="Les obligations immediates et les démarches utiles sont presentées dans un ordre simple a suivre apres votre arrivée."
            />
            <div className="grid gap-4">
              {filteredSteps.map((step, index) => (
                <Reveal key={step.id} delay={index * 0.04}>
                  <StepCard
                    step={step}
                    index={index}
                    relatedDocuments={installationDocuments.filter((document) =>
                      step.relatedDocumentIds?.includes(document.id),
                    )}
                  />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="documents" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Documents a preparer"
              title="Les formulaires a reperer avant votre venue"
              description="Les documents utiles sont regroupes ici pour permettre une preparation simple avant le passage au guichet."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {installationDocuments.map((document, index) => (
                <Reveal key={document.id} delay={index * 0.05}>
                  <DocumentCard document={document} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="cas-particuliers" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Cas particuliers"
              title="Les situations qui demandent une attention supplementaire"
              description="Cette section aide a anticiper les justificatifs ou formalites complementaires selon votre situation."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredCases.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.05}>
                  <SpecialCaseCard item={item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="infos-pratiques" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Infos pratiques"
              title="Ce qu'il faut garder en tete avant de venir"
              description="Les informations essentielles sont rassemblées dans un bloc simple a consulter avant l'inscription."
            />
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 md:grid-cols-2">
                {installationPracticalInfos.map((item, index) => (
                  <Reveal key={item.label} delay={index * 0.04}>
                    <PracticalInfoCard item={item} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.08}>
                <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-prilly-coal">Avant de commencer</h3>
                  <div className="mt-4 grid gap-3">
                    {[
                      "Preparez votre piece d'identite et votre adresse complete.",
                      "Verifiez si un formulaire specifique est requis selon votre nationalite.",
                      "Si le bail n'est pas a votre nom, prevoyez une attestation du logeur.",
                      "Pour une famille, anticipez aussi l'ecole, la garde et les documents des enfants.",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/75">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <ContactHelpBlock contact={contact} />
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>

      <div className="fixed inset-x-0 bottom-20 z-30 px-4 md:hidden">
        <a href="#documents" className="block">
          <Button className="w-full justify-center shadow-float">
            <FileCheck2 className="h-4 w-4" />
            Commencer mon inscription
          </Button>
        </a>
      </div>

      <section className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Raccourcis utiles</p>
            <h2 className="mt-2 text-xl font-semibold text-prilly-coal">Poursuivre avec les démarches liees</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={installationDocuments[0].href} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <Download className="h-4 w-4" />
                Telecharger le formulaire
              </Button>
            </a>
            <Link to="/demarches/arrivee">
              <Button>
                Voir la démarche complete
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
