import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice } from "@/features/dechets/components";
import {
  EmergencyNumberCard,
  InsuranceCard,
  MedicalHelpCard,
  PreventionChecklist,
  SafetyContactPanel,
  ServiceCard,
  SupportInfoCard,
} from "@/features/contact/components/security-prevention";
import {
  emergencyNumbers,
  heatEmergency,
  heatPreventionTips,
  heatResources,
  heatWarningSigns,
  insuranceInfo,
  medicalHelp,
  safetyContacts,
  securityServices,
  sexualAssaultSupport,
} from "@/features/contact/data/security-prevention";

const pageSections: PageSideNavSection[] = [
  { id: "urgences", label: "Numeros d'urgence" },
  { id: "services", label: "Services utiles" },
  { id: "chaleur", label: "Fortes chaleurs" },
  { id: "aide-specialisee", label: "Aide specialisee" },
  { id: "assurance", label: "Protection des biens" },
  { id: "contacts", label: "Contacts rapides" },
];

export default function SecurityPreventionPage() {
  const HeatIcon = heatResources.icon;

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Securite et prevention" },
        ]}
      />

      <PageHero
        eyebrow="Reperes essentiels"
        title="Securite et prevention"
        description="Cette page rassemble les reperes essentiels en cas d'urgence, de prevention et de protection à Prilly."
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">
                Police, feu, ambulance, prevention chaleur, aide specialisee et protection des biens:
                l'information utile est organisee pour etre lue en quelques secondes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#urgences" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">
                Voir les numeros d'urgence
              </a>
              <a href="#services" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">
                Accéder aux services utiles
              </a>
            </div>
          </div>
        }
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <div className="space-y-12">
          <section id="urgences" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Numeros d'urgence"
              title="Les bons reflexes, tout de suite"
              description="Les trois numeros essentiels sont places en premier pour eviter toute hesitation en situation d'urgence."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {emergencyNumbers.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <EmergencyNumberCard {...item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="services" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Services de securite et de prevention"
              title="Les interlocuteurs utiles à Prilly et dans la region"
              description="Les services sont presentes avec leur role principal pour distinguer urgence immediate, prevention et soutien."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {securityServices.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <ServiceCard {...item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="chaleur" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow={heatResources.eyebrow}
              title="Fortes chaleurs: les reperes utiles"
              description="La prevention chaleur est organisee comme un bloc de service saisonnier, avec conseils, signes d'alerte et contacts medicaux."
              action={
                <div className="flex flex-wrap gap-2">
                  <a href={heatResources.pageHref} target="_blank" rel="noreferrer" className="rounded-full bg-prilly-red px-4 py-2 text-sm font-semibold text-white">
                    Voir vd.ch/chaleur
                  </a>
                  <a href={heatResources.flyerHref} target="_blank" rel="noreferrer" className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-prilly-coal">
                    Ouvrir le flyer PDF
                  </a>
                </div>
              }
            />

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-prilly-coal shadow-soft">
                <video src={heatResources.videoSrc} className="h-full w-full object-cover" muted playsInline autoPlay loop />
              </div>
              <div className="space-y-4">
                <AlertNotice title="Le bon reflexe en ete" tone="yellow">
                  La chaleur impacte la sante. Anticiper, boire régulierement et proteger les personnes vulnerables reduit les risques avant qu'une situation ne devienne critique.
                </AlertNotice>
                <div className="rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-soft">
                  <div className="flex items-start gap-3">
                    <HeatIcon className="mt-1 h-5 w-5 text-prilly-red" />
                    <div>
                      <h3 className="text-lg font-semibold text-prilly-coal">Ressources utiles</h3>
                      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
                        Le flyer cantonal complete cette page avec des conseils visuels simples a garder sous la main.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <a href={heatResources.flyerHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-prilly-coal">
                          Telecharger le flyer
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <PreventionChecklist title="Les bons reflexes" items={heatPreventionTips} />
              <PreventionChecklist title="Signes d'alerte" items={heatWarningSigns} />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <AlertNotice title={heatEmergency.title} tone="red">
                <div className="space-y-4">
                  <p>{heatEmergency.description}</p>
                  <ul className="space-y-2">
                    {heatEmergency.actions.map((action) => (
                      <li key={action} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AlertNotice>
              <MedicalHelpCard {...medicalHelp} />
            </div>
          </section>

          <section id="aide-specialisee" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Aide specialisee"
              title="Aide apres une agression sexuelle"
              description="Le contenu est presente de maniere sobre, claire et immediatement utile, sans rendre la page anxiogene."
            />
            <SupportInfoCard {...sexualAssaultSupport} />
          </section>

          <section id="assurance" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Protection de vos biens"
              title="Assurance incendie et elements naturels"
              description="L'ECA est presentee comme un repere de protection et d'assurance, avec un acces direct a ses prestations."
            />
            <InsuranceCard {...insuranceInfo} />
          </section>

          <section id="contacts" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Contacts rapides"
              title="Les bons interlocuteurs en un bloc"
              description="Les contacts ci-dessous distinguent clairement les demandes administratives et les urgences."
            />
            <SafetyContactPanel contacts={safetyContacts} />
          </section>
        </div>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
