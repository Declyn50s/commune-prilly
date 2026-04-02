import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  accountDocuments,
  archiveYears,
  budgetDocuments,
  declarationContacts,
  declarationSteps,
  financeContact,
  financeHeroCtas,
  financePageMeta,
  helperProfiles,
  moreThan90DaysWarning,
  quickLinks,
  stayCardHighlight,
  stayDownloads,
  stayExemptions,
  stayJourneys,
  stayProfiles,
  stayTariffs,
  taxDownloads,
  taxLevels,
  taxSummaryCards,
} from "@/features/finances-impots/data";
import {
  DeclarationStepper,
  DownloadCard,
  FinanceContactCard,
  HelperSelector,
  HeroActionCard,
  JourneyPanel,
  MiniContactCard,
  TariffCard,
  TaxLevelCard,
  YearDocumentList,
  YearFilterPills,
} from "@/features/finances-impots/components";
import { ArrowRight, BadgeInfo, ChevronRight, Download } from "lucide-react";

const pageSections: PageSideNavSection[] = [
  { id: "impots", label: "Impots" },
  { id: "taxe-sejour", label: "Taxe de sejour" },
  { id: "documents", label: "Documents" },
  { id: "comptes-budget", label: "Comptes et budget" },
  { id: "contact", label: "Contact" },
];

export default function FinancesImpotsPage() {
  const [helperProfile, setHelperProfile] = useState(helperProfiles[0].id);
  const [accountYear, setAccountYear] = useState("2024");
  const [budgetYear, setBudgetYear] = useState("2026");

  const filteredAccounts = useMemo(
    () => accountDocuments.filter((item) => item.year === accountYear),
    [accountYear],
  );
  const filteredBudgets = useMemo(
    () => budgetDocuments.filter((item) => item.year === budgetYear),
    [budgetYear],
  );

  return (
    <section className="container space-y-10 py-8 md:space-y-12 md:py-10">
      <Breadcrumb items={financePageMeta.breadcrumb} />

      <PageHero
        eyebrow={financePageMeta.hero.eyebrow}
        title={financePageMeta.hero.title}
        description={financePageMeta.hero.description}
        tone="dark"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/8 p-5 text-white shadow-soft">
              <p className="text-sm leading-6 text-white/82">{financePageMeta.hero.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={financePageMeta.sourceLinks.cantonTaxes} target="_blank" rel="noreferrer" className="inline-flex">
                <Button className="justify-center bg-[#0c5f87] hover:bg-[#0c5f87]/92">
                  Accéder à VaudTax
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#documents" className="inline-flex">
                <Button variant="secondary" className="justify-center">
                  Voir les formulaires
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {financeHeroCtas.map((item, index) => (
          <HeroActionCard key={item.title} item={item} index={index} />
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <div className="space-y-10 md:space-y-12">
          <HelperSelector profiles={helperProfiles} active={helperProfile} onChange={setHelperProfile} />

      <Reveal>
        <section id="impots" className="space-y-8 scroll-mt-32">
          <SectionHeader
            eyebrow="Impots en Suisse"
            title="impôts cantonaux et taux communal"
            description="La déclaration fiscale se fait avec le Canton de Vaud, tandis que la commune applique son taux communal et gère certaines taxes et contacts de proximite."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {taxLevels.map((item) => (
              <TaxLevelCard key={item.title} item={item} />
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-[rgba(12,95,135,0.12)] via-white to-prilly-soft p-6 shadow-soft md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-[#0c5f87] text-white">Taux communal : 72.5</Badge>
                <Badge className="bg-prilly-yellow/25 text-prilly-coal">Prilly</Badge>
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">Le canton reste le bon point d'entrée pour déclarer</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-prilly-coal/72">
                Au 29 mars 2026, l'Etat de Vaud presente la déclaration d'impot via sa prestation VaudTax en ligne. Nous gardons ici un parcours tres concret: comprendre les niveaux, accéder au canton, puis joindre le bon service si besoin.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={financePageMeta.sourceLinks.vaudTax} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button className="justify-center bg-[#0c5f87] hover:bg-[#0c5f87]/92">
                    Accéder à VaudTax
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href={financePageMeta.sourceLinks.cantonTaxes} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button variant="secondary" className="justify-center">
                    Accéder au site du canton
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div id="declaration" className="space-y-4 scroll-mt-32">
              <DeclarationStepper steps={declarationSteps} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {declarationContacts.map((item) => (
              <MiniContactCard key={item.title} item={item} />
            ))}
          </div>

          <AccordionItem title="Documents fiscaux complementaires">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {taxDownloads.map((item) => (
                <DownloadCard key={item.title} item={item} />
              ))}
            </div>
          </AccordionItem>
        </section>
      </Reveal>

      <Reveal>
        <section id="taxe-sejour" className="space-y-8 scroll-mt-32">
          <SectionHeader
            eyebrow="Taxe de séjour"
            title="Taxe de séjour"
            description="Informations relatives aux séjours, hébergements, déclarations et tarifs."
          />

          <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-[#0c5f87] text-white">Dès la premiere nuit</Badge>
                <Badge className="bg-prilly-yellow/25 text-prilly-coal">Non inscrit au registre = taxe obligatoire</Badge>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {stayProfiles.map((profile) => (
                  <article key={profile.title} className="rounded-[1.6rem] border border-black/6 bg-prilly-soft/55 p-5">
                    <h3 className="text-xl font-semibold text-prilly-coal">{profile.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{profile.description}</p>
                    <div className="mt-4 grid gap-2">
                      {profile.points.map((point) => (
                        <div key={point} className="rounded-[1.05rem] bg-white px-4 py-3 text-sm text-prilly-coal/76">
                          {point}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
              <div className="grid gap-0 md:grid-rows-2">
                <div className="border-b border-black/6 p-4">
                  <img
                    src="/images/ville/finances-impots/taxe-sejour-profils.png"
                    alt="Schema des profils concernes par la taxe de séjour à Prilly"
                    className="w-full rounded-[1.2rem] object-cover"
                  />
                </div>
                <div className="p-4">
                  <img
                    src="/images/ville/finances-impots/taxe-sejour-categories.png"
                    alt="Tarifs par catégories d'hébergement"
                    className="w-full rounded-[1.2rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {taxSummaryCards.map((item) => (
              <article key={item.title} className="surface h-full p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(12,95,135,0.1)] text-[#0c5f87]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              </article>
            ))}
          </div>

          <section className="space-y-6">
            <SectionHeader
              eyebrow="Tarifs"
              title="Tarifs par catégorie"
              description="Chaque catégorie reprend le montant officiel et un resume court pour savoir rapidement ou vous vous situez. Base legale : RITS."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stayTariffs.map((item, index) => (
                <TariffCard key={item.category} item={item} index={index} />
              ))}
            </div>
          </section>

          <section id="demarches-sejour" className="space-y-6 scroll-mt-32">
            <SectionHeader
              eyebrow="Demarches"
              title="Déclarations selon votre situation"
              description="Hoteliers et loueurs, Airbnb et déclaration mensuelle sont séparés pour aller au bon formulaire sans ambiguite."
            />
            <div className="grid gap-4 xl:grid-cols-3">
              {stayJourneys.map((item) => (
                <JourneyPanel key={item.title} {...item} />
              ))}
            </div>
          </section>

          <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-[rgba(12,95,135,0.11)] via-white to-prilly-soft p-6 shadow-soft md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0c5f87]">Lausanne Transport Card</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{stayCardHighlight.title}</h3>
              <p className="mt-3 text-sm leading-7 text-prilly-coal/72">{stayCardHighlight.description}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.2rem] bg-white px-4 py-4 text-sm text-prilly-coal/76">Gratuite des transports publics pendant le séjour</div>
                <div className="rounded-[1.2rem] bg-white px-4 py-4 text-sm text-prilly-coal/76">Réductions sur plusieurs activités culturelles et touristiques</div>
              </div>
              <a href={stayCardHighlight.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
                <Button className="justify-center bg-[#0c5f87] hover:bg-[#0c5f87]/92">
                  {stayCardHighlight.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="space-y-5">
              <div className="rounded-[2rem] border border-prilly-yellow/25 bg-prilly-yellow/12 p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <BadgeInfo className="mt-1 h-5 w-5 text-prilly-coal" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal">Cas special &gt; 90 jours</p>
                    <p className="mt-3 text-sm leading-7 text-prilly-coal/78">{moreThan90DaysWarning}</p>
                  </div>
                </div>
              </div>

              <div className="surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0c5f87]">Exonérations</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">Checklist des cas les plus fréquents</h3>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {stayExemptions.map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-black/6 bg-prilly-soft/55 px-4 py-4 text-sm text-prilly-coal/76">
                      {item}
                    </div>
                  ))}
                </div>
                <a href="/docs/ville/finances-impots/demande-exoneration-taxe-sejour.pdf" target="_blank" rel="noreferrer" className="mt-5 inline-flex">
                  <Button variant="secondary" className="justify-center">
                    Ouvrir le formulaire d'exonération
                    <Download className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="documents" className="space-y-8 scroll-mt-32">
          <SectionHeader
            eyebrow="Documents & telechargements"
            title="Formulaires et documents"
            description="Documents relatifs à la taxe de séjour, aux finances et aux frontaliers."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stayDownloads.map((item) => (
              <DownloadCard key={item.title} item={item} />
            ))}
          </div>

          <AccordionItem title="Frontaliers, employeurs et documents fiscaux complementaires">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {taxDownloads.map((item) => (
                <DownloadCard key={item.title} item={item} />
              ))}
            </div>
          </AccordionItem>
        </section>
      </Reveal>

      <Reveal>
        <section id="comptes-budget" className="space-y-8 scroll-mt-32">
          <SectionHeader
            eyebrow="Comptes & budget"
            title="Comptes et budgets"
            description="Les documents recents sont mis en avant, tandis que l'archive officielle reste accèssible pour l'ensemble des années disponibles."
          />

          <div className="grid gap-5 xl:grid-cols-2">
            <article className="surface p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0c5f87]">Comptes</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">Comptes communaux</h3>
                </div>
                <YearFilterPills years={archiveYears.accounts} activeYear={accountYear} onChange={setAccountYear} />
              </div>
              <p className="mt-4 text-sm leading-6 text-prilly-coal/72">Comptes 2014 a 2024, commentaires 2017 et 2018, etat financier 2024 et analyse 2023.</p>
              <div className="mt-5">
                <YearDocumentList items={filteredAccounts.length ? filteredAccounts : accountDocuments} />
              </div>
              <a href={financePageMeta.sourceLinks.financeArchive} target="_blank" rel="noreferrer" className="mt-5 inline-flex">
                <Button variant="ghost" className="justify-center">
                  Voir toute l'archive des comptes
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </article>

            <article className="surface p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0c5f87]">Budget</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">Budgets et version actuelle</h3>
                </div>
                <YearFilterPills years={archiveYears.budgets} activeYear={budgetYear} onChange={setBudgetYear} />
              </div>
              <p className="mt-4 text-sm leading-6 text-prilly-coal/72">Budgets communaux 2020 a 2026, avec mise en avant du budget actuel et des versions amendées recentes.</p>
              <div className="mt-5">
                <YearDocumentList items={filteredBudgets.length ? filteredBudgets : budgetDocuments} />
              </div>
              <a href={financePageMeta.sourceLinks.financeArchive} target="_blank" rel="noreferrer" className="mt-5 inline-flex">
                <Button variant="ghost" className="justify-center">
                  Voir toute l'archive des budgets
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => (
              <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
                <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0c5f87]">
                  {item.label}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="space-y-8 scroll-mt-32">
          <SectionHeader
            eyebrow="Contact"
            title="Contact"
            description="Service ? contacter pour les questions de finances, de taxe de séjour et de formulaires."
          />
          <FinanceContactCard contact={financeContact} />
        </section>
      </Reveal>

        </div>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
