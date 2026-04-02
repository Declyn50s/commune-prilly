import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import {
  IntegrationContactPanel,
  IntegrationNoticeCard,
  ResourceCard,
  StatCard,
} from "@/features/integration/components";
import { integrationContacts, religionLinks, religionsStats, worshipPlaces } from "@/features/integration/data";

export default function NationalitesReligionsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Intégration", href: "/vivre/integration" }, { label: "Nationalités et religions" }]} />
      <PageHero
        eyebrow="Diversité prillérane"
        title="Nationalités et religions"
        description="Prilly, une commune diverse, riche de ses cultures, de ses langues et de ses convictions."
        tone="warm"
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="Prilly en chiffres" title="Quelques repères pour comprendre la diversité locale" description="Les chiffres sont présentés ici de manière sobre et lisible, sans transformer la diversité en simple bloc statistique." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {religionsStats.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <IntegrationNoticeCard
          title="Diversité religieuse"
          description="Prilly accueille une pluralité de convictions et de traditions, ainsi que des personnes sans appartenance religieuse. Le dialogue et le respect mutuel restent centraux."
        />
        <IntegrationNoticeCard
          title="Semaine des religions"
          description="Chaque début novembre, cet événement rappelle l’importance du dialogue interreligieux. Le service intégration et culture y contribue avec la CISIP."
        />
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Lieux de culte à Prilly" title="Des repères présentés de façon respectueuse et utile" description="Les lieux de culte sont présentés comme des points de repère dans une commune diverse et ouverte." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {worshipPlaces.map((item) => (
            <div key={item.title} className="surface p-5">
              <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
              {item.address ? <p className="mt-3 text-sm text-prilly-coal/70">{item.address}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Liens utiles" title="Approfondir si besoin" description="Les liens utiles sont regroupés pour aller plus loin sans alourdir la page principale." />
        <div className="grid gap-4 md:grid-cols-2">
          {religionLinks.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <IntegrationContactPanel contacts={integrationContacts} />
      </section>
    </section>
  );
}
