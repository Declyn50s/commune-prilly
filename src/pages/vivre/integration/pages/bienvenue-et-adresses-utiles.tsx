import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { IntegrationContactPanel, ResourceCard } from "@/features/integration/components";
import { bienvenueAdressesUtiles, integrationContacts, welcomeResources } from "@/features/integration/data";

export default function BienvenueAdressesUtilesPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Intégration", href: "/vivre/integration" }, { label: "Bienvenue et adresses utiles" }]} />
      <PageHero
        eyebrow="Premiers repères"
        title="Bienvenue et adresses utiles"
        description="Des ressources pour s’orienter, comprendre les démarches et trouver de l’aide dans la région."
        tone="warm"
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Bienvenue en plusieurs langues"
          title="Commencer avec des repères simples"
          description="La brochure Bienvenue et le site cantonal permettent de trouver rapidement des informations utiles dans différentes langues."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {welcomeResources.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Adresses utiles"
          title="Des relais concrets pour s’informer et être accompagné"
          description="Ces structures peuvent aider sur les questions d’installation, d’intégration, de vie familiale ou d’orientation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bienvenueAdressesUtiles.map((item) => (
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
