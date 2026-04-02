import { ArrowRight, Building2, Download, FileCheck2, Home, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice } from "@/components/housing/alert-notice";
import { CalculationInfoCard } from "@/components/housing/calculation-info-card";
import { DocumentsChecklist } from "@/components/housing/documents-checklist";
import { EligibilityHighlights } from "@/components/housing/eligibility-highlights";
import { HousingAidTabs } from "@/components/housing/housing-aid-tabs";
import { HousingContactCard } from "@/components/housing/housing-contact-card";
import { QuickaccèssCards } from "@/components/housing/quick-access-cards";
import { RentalRulesStepper } from "@/components/housing/rental-rules-stepper";
import { SupportOrganizationCard } from "@/components/housing/support-organization-card";
import { ImportantNotice } from "@/components/installation/important-notice";
import { Button } from "@/components/ui/button";
import {
  housingAidTabs,
  housingContacts,
  housingDocumentGroups,
  housingEligibilityRules,
  housingQuickaccèss,
  housingRentalSteps,
  housingSupportOrganizations,
  housingWarnings,
} from "@/data/housing";

export function HousingPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Logement" }]} />

      <PageHero
        eyebrow="Service logement"
        title="Logement"
        description="Un hub clair pour savoir si vous pouvez bénéficier d’une aide, préparer votre dossier, comprendre vos obligations et contacter le bon service."
        aside={
          <div className="space-y-4">
            <ImportantNotice
              title="Avant de déposer un dossier"
              description="Les demandes d’aide au logement se font sur rendez-vous. Préparez vos justificatifs avant le premier contact avec le service."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#aides">
                <Button className="w-full justify-center">
                  Demander une aide au logement
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#conditions">
                <Button variant="secondary" className="w-full justify-center">
                  Voir les conditions
                </Button>
              </a>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Accès rapides"
          title="Choisissez l’entrée qui correspond à votre besoin"
          description="La page est pensée par intentions d’usage pour vous orienter rapidement vers la bonne information."
        />
        <QuickaccèssCards items={housingQuickaccèss} />
      </section>

      <section id="aides" className="space-y-8">
        <SectionHeader
          eyebrow="Aide individuelle au logement"
          title="Deux aides distinctes selon votre composition de ménage"
          description="Les familles avec enfant et les couples ou personnes seules sans enfant n’ont pas le même parcours. Les conditions sont donc séparées pour gagner en clarté."
        />
        <HousingAidTabs items={housingAidTabs} />
      </section>

      <section id="conditions" className="space-y-8">
        <SectionHeader
          eyebrow="Conditions essentielles"
          title="Les critères à vérifier avant toute demande"
          description="Ce bloc vous permet de savoir en quelques secondes si votre situation mérite un dossier complet."
        />
        <EligibilityHighlights items={housingEligibilityRules} />
        <div className="rounded-[1.75rem] border border-prilly-yellow/30 bg-prilly-yellow/20 p-5 text-sm leading-6 text-prilly-coal/80">
          Un rendez-vous est nécessaire pour déposer une demande. Préparez l’ensemble des pièces justificatives avant de prendre contact.
        </div>
      </section>

      <section id="documents" className="space-y-8">
        <SectionHeader
          eyebrow="Documents à préparer"
          title="Documents à préparer"
          description="Les pièces sont regroupées par logique d’usage pour éviter les oublis et faciliter la préparation du dossier."
        />
        <DocumentsChecklist groups={housingDocumentGroups} />
        <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
          <p className="text-sm leading-6 text-prilly-coal/75">
            Préparez l’ensemble des pièces justificatives avant le rendez-vous afin de faciliter le traitement du dossier.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Calcul de l’aide"
          title="Comprendre sans entrer d’abord dans un barème technique"
          description="Le principe de calcul est présenté de façon pédagogique avant tout détail administratif."
        />
        <CalculationInfoCard />
      </section>

      <section id="accompagnement" className="space-y-8">
        <SectionHeader
          eyebrow="Accompagnement et aides gratuites"
          title="Des structures existent pour vous aider à avancer"
          description="Cette section rend visibles les ressources gratuites pour les situations fragiles, les difficultés administratives ou la recherche de logement."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {housingSupportOrganizations.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <SupportOrganizationCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="sous-location" className="space-y-8">
        <SectionHeader
          eyebrow="Location et sous-location"
          title="Un mini parcours pratique pour les locations de courte durée"
          description="Les obligations liées à la location ou sous-location sont regroupées dans un format simple à suivre."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-prilly-coal">Ce qu’il faut faire</h3>
              <p className="mt-3 text-sm leading-7 text-prilly-coal/75">
                Le cadre légal a évolué. Toute personne mettant à disposition un logement contre rémunération entre 1 et 89 nuits doit respecter une procédure communale précise.
              </p>
            </div>
            <RentalRulesStepper items={housingRentalSteps} />
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Documents complémentaires si vous êtes locataire</p>
              <div className="mt-4 grid gap-3">
                {["Copie du bail", "Accord ou autorisation du propriétaire"].map((item) => (
                  <div key={item} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <AlertNotice items={housingWarnings} />
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Actions utiles</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href="#contacts">
                  <Button className="w-full justify-center">
                    <Download className="h-4 w-4" />
                    Télécharger le formulaire d’annonce
                  </Button>
                </a>
                <a href="#contacts">
                  <Button variant="secondary" className="w-full justify-center">
                    <PhoneCall className="h-4 w-4" />
                    Contacter le greffe
                  </Button>
                </a>
                <a href="#contacts" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/8 px-4 py-3 text-sm font-semibold text-prilly-coal transition hover:bg-prilly-soft">
                  Voir les obligations
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Immeubles locatifs"
          title="Les appartements liés à la Ville de Prilly"
          description="Une information concise pour orienter vers la bonne gérance, sans alourdir la page."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
              <Home className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-prilly-coal">Publiaz Immobilier SA</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">
              La Ville de Prilly loue des appartements dans plusieurs immeubles via Publiaz Immobilier SA.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-prilly-coal">Exploitation et Gérance</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">
              Le service communal reste un point de contact utile pour les informations liées au parc locatif communal.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="space-y-8">
        <SectionHeader
          eyebrow="Contacts utiles"
          title="Les interlocuteurs à contacter selon votre besoin"
          description="Les emails, téléphones, horaires et modalités de rendez-vous sont regroupés dans une zone unique et facile à scanner."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {housingContacts.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <HousingContactCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-20 z-30 px-4 md:hidden">
        <a href="#aides" className="block">
          <Button className="w-full justify-center shadow-float">
            <FileCheck2 className="h-4 w-4" />
            Demander une aide
          </Button>
        </a>
      </div>
    </section>
  );
}
