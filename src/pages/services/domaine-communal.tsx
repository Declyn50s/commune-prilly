import {
  AlertTriangle,
  BadgeInfo,
  CalendarDays,
  Clock3,
  FileText,
  MapPin,
  Phone,
  Recycle,
  ShieldCheck,
  Trees,
  Users,
} from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  DocumentCard,
  DomainHero,
  FeeHighlightCard,
  ImportantNotice,
  MapHighlightCard,
  QuickLinkCard,
  RulesSummaryList,
  StepList,
  TopicSection,
  TopicSectionCard,
} from "@/features/domaine-communal/components";
import {
  banderolesInfo,
  communalAssets,
  domainContact,
  domainDocuments,
  domainFees,
  domainHero,
  domainPreparationSteps,
  domainPublicPriority,
  domainResponsibilities,
  domaineCommunalSections,
  hedgeRules,
  nestingRules,
  protectedPlantRules,
  reclameConceptZones,
  reclameContact,
  reclameDocuments,
  reclameFixedInfo,
  reclameIntro,
  reclameRules,
  reclameTemporaryInfo,
  treeRules,
  vegetalContacts,
  vegetalIntro,
  vegetalSpecialCases,
  vegetalWasteRules,
} from "@/features/domaine-communal/data";

const pageSections: PageSideNavSection[] = [
  { id: "apercu", label: "Aperçu" },
  { id: "travaux", label: "Travaux" },
  { id: "reclame", label: "Procédés de réclame" },
  { id: "vegetaux", label: "Entretien des végétaux" },
  { id: "espaces-publics", label: "Espaces publics" },
];

export default function DomaineCommunalPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Domaine communal" },
        ]}
      />

      <DomainHero
        eyebrow="Autorisations et usages"
        title={domainHero.title}
        description={domainHero.description}
        ctas={domainHero.ctas}
        notes={domainHero.notes}
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="apercu" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Les 3 volets"
              title="Trouver rapidement le bon sujet"
              description="La page est organisée pour répondre rapidement aux principales questions liées aux autorisations, aux règles d’usage et aux contacts utiles."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {domaineCommunalSections.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <TopicSectionCard item={item} />
                </Reveal>
              ))}
            </div>
          </section>

          <TopicSection
            id="travaux"
            eyebrow="Travaux et occupation"
            title="Avant tout travaux sur le domaine public ou communal privé"
            description="Cette section permet de verifier rapidement si une autorisation est necessaire, ce qu'il faut preparer et les principaux tarifs a anticiper avant toute intervention."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <ImportantNotice title="Autorisation prealable" description={domainPublicPriority[0]} icon={ShieldCheck} tone="warning" />
              <ImportantNotice title="Parcelles communales aussi" description={domainPublicPriority[1]} icon={MapPin} />
              <ImportantNotice title="delai minimum" description={domainPublicPriority[2]} icon={CalendarDays} />
              <ImportantNotice title="Pas avant le permis" description={domainPublicPriority[3]} icon={Clock3} tone="warning" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <StepList title="Ce qu'il faut preparer" items={domainPreparationSteps} />
              <RulesSummaryList title="Responsabilites et securite" items={domainResponsibilities} dark />
            </div>

            <section className="space-y-6">
              <SectionHeader
                eyebrow="Tarifs et emoluments"
                title="Une lecture rapide avant d'ouvrir le tarif complet"
                description="Les montants les plus frequents sont mis en avant ici. Le document integral reste disponible pour les cas specifiques ou les occupations plus complexes."
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {domainFees.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.03}>
                    <FeeHighlightCard title={item.title} amount={item.amount} note={item.note} />
                  </Reveal>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <SectionHeader
                eyebrow="Documents utiles"
                title="Les bons supports pour lancer la demande"
                description="Le formulaire, les conditions generales et le tarif complet sont relies a leur usage pour eviter les erreurs de parcours."
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {domainDocuments.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.03}>
                    <DocumentCard item={item} />
                  </Reveal>
                ))}
              </div>
            </section>

            <ContactPanel contact={domainContact} />
          </TopicSection>

          <TopicSection
            id="reclame"
            eyebrow="Procedes de reclame"
            title="Banderoles, enseignes et affichage: ce qui demande une autorisation"
            description="Cette partie distingue les trois grands cas de figure et resume les principales limites d'affichage, pour permettre de choisir rapidement le bon formulaire."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <ImportantNotice title="Autorisation obligatoire" description={reclameIntro[0]} icon={BadgeInfo} tone="warning" />
              <ImportantNotice title="Service en charge" description={reclameIntro[1]} icon={FileText} />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <MapHighlightCard
                title={banderolesInfo.title}
                description={banderolesInfo.summary}
                items={[...banderolesInfo.points, ...banderolesInfo.locations]}
              />
              <RulesSummaryList title="Regles principales" items={reclameRules} />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <StepList title={reclameTemporaryInfo.title} items={reclameTemporaryInfo.points} />
              <StepList title={reclameFixedInfo.title} items={reclameFixedInfo.points} />
            </div>

            <section className="surface overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-red p-6 text-white md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Concept general d'affichage</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">Un cadre pour proteger le paysage et la circulation</h3>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    Le concept general d'affichage organise l'implantation des supports, harmonise les usages, protege les sites et evite la proliferation excessive des affiches.
                  </p>
                </div>
                <div className="grid gap-3 p-6 md:grid-cols-2 md:p-8">
                  {reclameConceptZones.map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-black/8 px-4 py-4 text-sm leading-6 text-prilly-coal/76">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <SectionHeader
                eyebrow="Formulaires et references"
                title="Tous les documents relies au bon cas d'usage"
                description="Banderoles, reclame temporaire, reclame fixe, concept d'affichage et reglement communal sont regroupes sans liste documentaire confuse."
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {reclameDocuments.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.02}>
                    <DocumentCard item={item} />
                  </Reveal>
                ))}
              </div>
            </section>

            <ContactPanel contact={reclameContact} />
          </TopicSection>

          <TopicSection
            id="vegetaux"
            eyebrow="Entretien des vegetaux"
            title="Les obligations pratiques pour les proprietaires"
            description="Cette section transforme les obligations de taille, de gabarit et d'entretien en reperes simples a appliquer, avec un message particulier sur la nidification et les cas sensibles."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <ImportantNotice title="Principe general" description={vegetalIntro[0]} icon={Trees} tone="warning" />
              <ImportantNotice title="Cas a distinguer" description={vegetalIntro[1]} icon={BadgeInfo} />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-6">
                <StepList title="Taille des haies" items={hedgeRules} />
                <StepList title="Taille des arbres" items={treeRules} />
              </div>
              <MapHighlightCard
                title="Gabarits routiers"
                description="Le degagement vertical et lateral doit garantir la visibilite, la circulation des pietons et le passage des vehicules."
                imageSrc="/images/domaine-communal/gabarit-vegetaux.jpg"
                imageAlt="Schema de gabarit routier pour vegetaux bordant le domaine public"
                items={["2.50 m au-dessus des trottoirs", "5.00 m au-dessus des routes", "1.00 m de degagement depuis le bord de la chaussee"]}
              />
            </div>

            <section className="overflow-hidden rounded-[2rem] border border-prilly-red/16 bg-gradient-to-br from-prilly-red/10 via-white to-prilly-yellow/12 p-6 shadow-soft md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Periode de nidification</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">Du 15 mars au 31 juillet, je ne touche pas a ma haie</h3>
                  <div className="mt-5 space-y-3">
                    {nestingRules.map((item) => (
                      <div key={item} className="rounded-[1.15rem] border border-black/8 bg-white/88 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <img src="/images/domaine-communal/nidification-1.jpg" alt="Illustration d'un nid dans une haie" className="h-full min-h-[180px] w-full rounded-[1.6rem] object-cover" />
                  <img src="/images/domaine-communal/nidification-2.jpg" alt="Illustration de petite faune dans un jardin" className="h-full min-h-[180px] w-full rounded-[1.6rem] object-cover" />
                </div>
              </div>
            </section>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <ImportantNotice title="Vegetaux proteges" description={protectedPlantRules.join(" ")} icon={ShieldCheck} />
              <ImportantNotice title="Dechets vegetaux" description={vegetalWasteRules.join(" ")} icon={Recycle} />
              <ImportantNotice title="Cas particuliers" description={vegetalSpecialCases.join(" ")} icon={AlertTriangle} tone="warning" />
              <ImportantNotice title="Qui contacter" description={vegetalContacts.join(" ")} icon={Phone} />
            </div>
          </TopicSection>

          <TopicSection
            id="espaces-publics"
            eyebrow="Espaces publics et patrimoine exploite"
            title="Jardins, forets, vigne communale et acces loisirs"
            description="Le domaine communal, c'est aussi un patrimoine vivant: espaces de detente, jardins familiaux, forêt communale et vigne exploitée par la Ville."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {communalAssets.spaces.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <QuickLinkCard title={item.title} description={item.description} href={item.href} isAnchor={item.href.startsWith("#")} />
                </Reveal>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]" id="jardins-familiaux">
              <MapHighlightCard
                title="Jardins familiaux de Sous-Cery"
                description="La Ville souhaite favoriser le respect, l'echange et un travail de la terre respectueux de l'Homme et de son environnement, en proposant des parcelles en location a cultiver."
                items={communalAssets.gardens}
              />
              <div className="grid gap-4 content-start">
                <DocumentCard item={communalAssets.forestDocs[3]} />
                <ImportantNotice title="Inscription" description="La demande se fait par courrier ou par mail a exploitation@prilly.ch." icon={Users} />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <MapHighlightCard
                title="Foret de Montolivet et patrimoine forestier"
                description="Les bois communaux participent a la qualite de vie, a la biodiversite et a la gestion durable du territoire."
                imageSrc="/images/domaine-communal/foret-montolivet.jpg"
                imageAlt="Foret de Montolivet"
                items={communalAssets.forest}
              />
              <MapHighlightCard
                title="Vigne communale"
                description="Un patrimoine viticole local qui relie production, transmission et vie communale."
                imageSrc="/images/domaine-communal/vins-prilly.jpg"
                imageAlt="Vins de Prilly sur tonneau"
                items={communalAssets.vines}
              />
            </div>

            <section className="space-y-6">
              <SectionHeader
                eyebrow="Guides et documents"
                title="Les documents utiles pour les jardins et la foret"
                description="Ces supports completent la page pour celles et ceux qui souhaitent aller plus loin sans perdre le contexte d'usage."
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {communalAssets.forestDocs.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.03}>
                    <DocumentCard item={item} />
                  </Reveal>
                ))}
              </div>
            </section>

            <ContactPanel contact={communalAssets.exploitationContact} />
          </TopicSection>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
