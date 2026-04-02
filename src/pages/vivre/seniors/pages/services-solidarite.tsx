import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { SeniorsContactPanel, SolidarityServiceCard, SeniorsNoticeCard } from "@/features/seniors/components";
import { seniorContacts, solidarityServicesData } from "@/features/seniors/data";

export default function ServicesSolidaritePage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Seniors", href: "/vivre/seniors" }, { label: "Services solidarité" }]} />
      <PageHero
        eyebrow="Entraide et proximité"
        title="Services solidarité"
        description="Des solutions complémentaires pour les besoins du quotidien, l’entraide intergénérationnelle et l’orientation rapide vers le bon service."
        tone="warm"
        aside={
          <SeniorsNoticeCard
            title="Des solutions existent"
            description="Hotline, coups de pouce et aide du quotidien sont regroupés ici pour rendre les solutions plus visibles et plus simples à mobiliser."
          />
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Services solidaires"
          title="Mieux repérer les solutions d’aide du quotidien"
          description="Cette page rassemble les services qui peuvent répondre à des besoins simples, urgents ou ponctuels."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solidarityServicesData.map((item) => (
            <SolidarityServiceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SeniorsContactPanel contacts={seniorContacts} />
      </section>
    </section>
  );
}
