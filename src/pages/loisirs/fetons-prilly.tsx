import { Sparkles, Users } from "lucide-react";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ClosingSection,
  ContactPanel,
  EventSummaryCard,
  HighlightCard,
  InfoNotice,
  ParticipationCallout,
} from "@/features/fetons-prilly/components";
import {
  fetonsPrillyClosing,
  fetonsPrillyContact,
  fetonsPrillyFutureInfo,
  fetonsPrillyHighlights,
  fetonsPrillyMeta,
  fetonsPrillyStandApplication,
  fetonsPrillySummary,
} from "@/features/fetons-prilly/data";

export default function FetonsPrillyPage() {
  return (
    <RubricLayout
      breadcrumb={fetonsPrillyMeta.breadcrumb}
      eyebrow={fetonsPrillyMeta.hero.eyebrow}
      title={fetonsPrillyMeta.hero.title}
      description={fetonsPrillyMeta.hero.description}
      tone="warm"
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-white/92 p-5 shadow-soft">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-prilly-red/10 text-prilly-red">{fetonsPrillyMeta.hero.status}</Badge>
              <Badge className="bg-prilly-yellow/20 text-prilly-coal">19-20 juin 2026</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/76">{fetonsPrillyMeta.hero.intro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#edition-2026" className="inline-flex">
              <Button className="w-full justify-center">Voir l'edition 2026</Button>
            </a>
            <a href="#tenir-un-stand" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Proposer un stand
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section className="space-y-8">
        <SectionHeader
          eyebrow="L'esprit de la manifestation"
          title="Une fête communale pour se retrouver avant l'été"
          description="Fetons Prilly est pensee comme un grand moment de rassemblement local, avec les ecoles, les sociétés locales, les familles et toute la vie de quartier."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface p-5 md:p-6">
            <div className="flex items-center gap-3 text-prilly-red">
              <Users className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">Une fête de rassemblement</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
              Organisée par la commune de Prilly avant les vacances scolaires d'été, la manifestation fait vivre le centre-ville dans une ambiance colorée et conviviale. Le cortège des ecoles, les artistes, les stands associatifs et les espaces de restauration donnent a Fetons Prilly un caractere tres communal, familial et chaleureux.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Rencontre</span>
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Convivialite</span>
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Vie locale</span>
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Ecoles et sociétés locales</span>
            </div>
          </div>
          <InfoNotice title={fetonsPrillyFutureInfo.title} description={fetonsPrillyFutureInfo.description} />
        </div>
      </section>

      <section id="edition-2026" className="space-y-8">
        <SectionHeader
          eyebrow="Edition 2026 en bref"
          title="Les dates et les lieux sont déjà visibles"
          description="Meme avec un programme encore partiel, la page permet déjà de reperer rapidement quand et ou se deroulera Fetons Prilly."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fetonsPrillySummary.map((item) => (
            <EventSummaryCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="A quoi s'attendre ?"
          title="Des repères concrets qui donnent envie de venir"
          description="Le programme detaille n'est pas encore publié, mais l'identite de la manifestation est déjà claire et lisible."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {fetonsPrillyHighlights.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="tenir-un-stand" className="space-y-8">
        <SectionHeader
          eyebrow="Tenir un stand"
          title="Un appel a candidature visible et simple a comprendre"
          description="La section est pensee comme un mini-service pour les exposant·e·s potentiels, afin que l'information importante ne soit jamais secondaire."
        />
        <ParticipationCallout
          title={fetonsPrillyStandApplication.title}
          description={fetonsPrillyStandApplication.description}
          points={fetonsPrillyStandApplication.points}
          email={fetonsPrillyContact.email}
        />
      </section>

      <ClosingSection title={fetonsPrillyClosing.title} description={fetonsPrillyClosing.description} />

      <section>
        <ContactPanel email={fetonsPrillyContact.email} />
      </section>
    </RubricLayout>
  );
}
