import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  AddressPanel,
  ContactPanel,
  DocumentChecklist,
  EligibilityChecklist,
  FormTypeCard,
  HelpfulInfoCard,
  ImportantNotice,
  ProcedureSteps,
  RelatedLinksSection,
} from "@/features/naturalisation/components";
import {
  naturalisationAfterSteps,
  naturalisationCelebration,
  naturalisationConditions,
  naturalisationContact,
  naturalisationDocuments,
  naturalisationFormTypes,
  naturalisationHero,
  naturalisationImportantNotices,
  naturalisationPostalAddress,
  naturalisationRelatedLinks,
  naturalisationSpecialCases,
  naturalisationSteps,
} from "@/features/naturalisation/data";

export default function NaturalisationPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Demarches", href: "/demarches" },
          { label: "Naturalisation" },
        ]}
      />

      <PageHero
        eyebrow="Demarche"
        title={naturalisationHero.title}
        description={naturalisationHero.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">{naturalisationHero.body}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {naturalisationHero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        }
      />

      <section id="conditions" className="space-y-8">
        <SectionHeader
          eyebrow="Verifier les conditions"
          title="Les principaux points a verifier avant de commencer"
          description="Cette premiere lecture vous permet de voir rapidement si vous pouvez preparer une demande de naturalisation ordinaire."
        />
        <EligibilityChecklist items={naturalisationConditions} />
        <RelatedLinksSection links={naturalisationRelatedLinks} />
      </section>

      <section id="formulaires" className="space-y-8">
        <SectionHeader
          eyebrow="Choisir le bon formulaire"
          title="Quatre formulaires selon votre situation familiale"
          description="Chaque formulaire correspond à un cas precis. L'objectif est de vous orienter sans vous obliger a ouvrir tous les PDF pour comprendre lequel utiliser."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {naturalisationFormTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <FormTypeCard {...item} />
            </Reveal>
          ))}
        </div>
        <ImportantNotice
          title="A noter"
          items={["Les enfants majeurs doivent deposer une demande separee."]}
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comment faire ma demande ?"
          title="Un parcours simple avant l'envoi du dossier"
          description="La demande commence par le bon formulaire, puis par la verification complete des annexes avant l'envoi postal."
        />
        <ProcedureSteps steps={naturalisationSteps} />
        <AddressPanel lines={naturalisationPostalAddress} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents a preparer"
          title="Les pieces a reunir pour un dossier complet"
          description="La page met en avant les pieces essentielles pour eviter un dossier incomplet des le depot."
        />
        <DocumentChecklist groups={naturalisationDocuments} />
        <ImportantNotice title="Important" items={naturalisationImportantNotices} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <HelpfulInfoCard
          title="Et apres ?"
          description="Une fois la demande deposee aupres du canton, la suite locale de la procedure se poursuit à Prilly."
          items={naturalisationAfterSteps}
        />
        <HelpfulInfoCard
          title={naturalisationSpecialCases.title}
          description={naturalisationSpecialCases.description}
          items={naturalisationSpecialCases.items}
        />
      </section>

      <ImportantNotice title="Situations particulieres" items={[naturalisationSpecialCases.note]} />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.9rem] border border-black/6 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">
            Apres la naturalisation
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-prilly-coal">{naturalisationCelebration.title}</h2>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{naturalisationCelebration.description}</p>
        </div>
        <ContactPanel {...naturalisationContact} />
      </section>
    </section>
  );
}
