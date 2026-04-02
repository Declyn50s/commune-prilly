import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { HelpfulLinksSection, SeniorsContactPanel, SupportCard } from "@/features/seniors/components";
import { proSenectuteData, seniorUsefulPageLinks, seniorsPageContacts } from "@/features/seniors/data";

export default function ProSenectutePage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Seniors", href: "/vivre/seniors" }, { label: "Pro Senectute" }]} />
      <PageHero
        eyebrow="Accompagnement social"
        title="Pro Senectute"
        description="Un partenaire de référence pour le conseil social, l’accompagnement administratif, les activités et le maintien à domicile."
        tone="warm"
        aside={<SupportCard support={proSenectuteData} />}
      />

      <section className="grid gap-4 md:grid-cols-2">
        <SupportCard support={proSenectuteData} />
        <SupportCard
          support={{
            ...proSenectuteData,
            title: "Partenariat avec la Ville",
            description:
              "Depuis février 2024, la Ville soutient avec Pro Senectute et les partenaires locaux une dynamique d’activités pour les 60+ autour de Prilly-Nord et du local de Chantegrive jusqu’à fin 2025.",
            highlights: ["Action sociale régionale", "Activités 60+", "Prilly-Nord / Chantegrive"],
            tone: "yellow",
            href: "/vivre/seniors/quartiers-solidaires",
          }}
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Liens utiles"
          title="Accéder rapidement aux bonnes ressources"
          description="Le lien vers Pro Senectute et les ressources complémentaires restent visibles pour accompagner le passage à l’action."
        />
        <HelpfulLinksSection items={seniorUsefulPageLinks} />
      </section>

      <section className="space-y-8">
        <SeniorsContactPanel contacts={seniorsPageContacts} />
      </section>
    </section>
  );
}
