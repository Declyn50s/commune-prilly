import { Clock3, Download, MapPin, Sparkles } from "lucide-react";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ClosingSection,
  ContactPanel,
  DayProgramCard,
  DocumentDownloadCard,
  EventSummaryCard,
  HighlightCard,
  SolidarityInfoBlock,
} from "@/features/christmas-market/components";
import {
  christmasMarketClosing,
  christmasMarketContact,
  christmasMarketDocuments,
  christmasMarketFoodAndActivities,
  christmasMarketHighlights,
  christmasMarketMeta,
  christmasMarketProgram,
  christmasMarketSolidarity,
  christmasMarketSummary,
  christmasMarketContest,
} from "@/features/christmas-market/data";

export default function ChristmasMarketPage() {
  return (
    <RubricLayout
      breadcrumb={christmasMarketMeta.breadcrumb}
      eyebrow={christmasMarketMeta.hero.eyebrow}
      title={christmasMarketMeta.hero.title}
      description={christmasMarketMeta.hero.description}
      tone="warm"
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-white/92 p-5 shadow-soft">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-prilly-red/10 text-prilly-red">{christmasMarketMeta.hero.status}</Badge>
              <Badge className="bg-prilly-yellow/20 text-prilly-coal">5-6 decembre 2025</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/76">{christmasMarketMeta.hero.intro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#programme" className="inline-flex">
              <Button className="w-full justify-center">Voir le programme</Button>
            </a>
            <a href="/docs/marche-noel/251106-PRILLY-NOEL-A5.pdf" target="_blank" rel="noreferrer" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Télécharger le flyer
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section className="space-y-8">
        <SectionHeader
          eyebrow="L'edition 2025 en bref"
          title="Dates, lieu et esprit de l'évènement visibles immediatement"
          description="Le marché de Nöel est presente comme un vrai rendez-vous local: simple a comprendre, chaleureux à parcourir et déjà inspirant pour l'edition suivante."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {christmasMarketSummary.map((item) => (
            <EventSummaryCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Une ambiance locale et familiale"
          title="Artisanat, musique, gourmandises et rencontres"
          description="Le communique et le flyer montrent un évènement communal de proximite, centré sur les familles, la convivialite et la decouverte."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface p-5 md:p-6">
            <div className="flex items-center gap-3 text-prilly-red">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">Esprit du marche</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
              Artisanat local et d'ici et d'ailleurs, animations musicales et familiales, restauration sur place, gratuité des activités et absence d'inscription: le Marché de Nöel de Prilly est pense comme un moment simple, accèssible et joyeux a vivre ensemble.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Artisanat local</span>
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Animations gratuites</span>
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Sans inscription</span>
              <span className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">Partenariat avec Prilly Centre</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {christmasMarketHighlights.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="programme" className="space-y-8">
        <SectionHeader
          eyebrow="Programme"
          title="Deux journees, deux rythmes, une lecture tres simple"
          description="Le programme complet est repris ici pour eviter d'ouvrir le flyer juste pour comprendre les horaires, les ateliers, les concerts et les temps forts."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {christmasMarketProgram.map((day) => (
            <DayProgramCard key={day.label} day={day} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Le marche cote solidaire"
          title="Une fête qui fait aussi circuler l'entraide"
          description="La dimension solidaire fait partie de l'identite de l'évènement, aux cotes de l'artisanat, des animations et de la convivialite."
        />
        <SolidarityInfoBlock
          title={christmasMarketSolidarity.title}
          description={christmasMarketSolidarity.description}
          points={christmasMarketSolidarity.points}
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Restauration et animations"
          title="Ce qui fait l'ambiance sur place"
          description="Raclette, marrons, vin chaud, petit train, Saint Nicolas, ateliers et concerts composent une experience familiale tres lisible."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface p-5 md:p-6">
            <div className="flex items-center gap-3 text-prilly-red">
              <Clock3 className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">A ne pas manquer</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {christmasMarketFoodAndActivities.map((item) => (
                <div key={item} className="rounded-[1.25rem] bg-prilly-soft px-4 py-4 text-sm font-medium text-prilly-coal/78">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="surface p-5 md:p-6">
            <div className="flex items-center gap-3 text-prilly-red">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">Infos pratiques</span>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-[1.25rem] bg-prilly-soft px-4 py-4 text-sm leading-6 text-prilly-coal/78">
                Place du Marche, devant le centre commercial Prilly Centre, route de Cossonay 28.
              </div>
              <div className="rounded-[1.25rem] bg-prilly-soft px-4 py-4 text-sm leading-6 text-prilly-coal/78">
                Vendredi 5 decembre: 16h a 21h.
              </div>
              <div className="rounded-[1.25rem] bg-prilly-soft px-4 py-4 text-sm leading-6 text-prilly-coal/78">
                Samedi 6 decembre: 10h a 18h.
              </div>
              <div className="rounded-[1.25rem] bg-prilly-soft px-4 py-4 text-sm leading-6 text-prilly-coal/78">
                Animations gratuites et sans inscription pendant tout l'évènement.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Concours"
          title="Les boules de Noel continuent l'histoire du marche"
          description="Le concours relie l'atelier creatif, le decor du sapin et une recompense familiale simple et joyeuse."
        />
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-red/8 via-prilly-yellow/22 to-white p-6 shadow-soft md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{christmasMarketContest.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{christmasMarketContest.description}</p>
            </div>
            <div className="rounded-[1.5rem] border border-prilly-yellow/45 bg-white/92 px-5 py-4 text-sm font-semibold text-prilly-coal shadow-soft">
              A gagner: {christmasMarketContest.reward}
            </div>
          </div>
        </section>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents a Télécharger"
          title="Le flyer et le communique restent accèssibles"
          description="Les documents sont presentes avec contexte pour prolonger la page, pas pour remplacer l'information essentielle."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {christmasMarketDocuments.map((item) => (
            <DocumentDownloadCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ClosingSection title={christmasMarketClosing.title} description={christmasMarketClosing.description} />

      <section>
        <ContactPanel
          service={christmasMarketContact.service}
          address={christmasMarketContact.address}
          email={christmasMarketContact.email}
          phone={christmasMarketContact.phone}
        />
      </section>
    </RubricLayout>
  );
}
