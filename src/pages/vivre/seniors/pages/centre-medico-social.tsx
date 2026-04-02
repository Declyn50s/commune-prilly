import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { CMSSelectorCard, HelpfulLinksSection, SeniorsContactPanel, SeniorsNoticeCard } from "@/features/seniors/components";
import { cmsPageItems, seniorUsefulPageLinks, seniorsPageContacts } from "@/features/seniors/data";

export default function CentreMedicoSocialPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Vivre", href: "/vivre" }, { label: "Seniors", href: "/vivre/seniors" }, { label: "Centre médico-social" }]} />
      <PageHero
        eyebrow="Aide et soins à domicile"
        title="Centre médico-social"
        description="Le CMS aide les personnes âgées ou les personnes rencontrant un problème de santé à accéder à des prestations adaptées à domicile."
        tone="warm"
        aside={
          <SeniorsNoticeCard
            title="Le bon CMS dépend de votre adresse"
            description="La première chose à faire est de vérifier le CMS compétent selon le lieu de domicile, notamment pour les rues partagées entre Prilly et Lausanne."
          />
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Quel CMS contacter ?"
          title="Trouver rapidement la bonne structure"
          description="Les cartes ci-dessous vous aident à savoir vers quel CMS vous tourner selon votre secteur d’habitation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cmsPageItems.map((item) => (
            <CMSSelectorCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <SeniorsNoticeCard
          title="Le rôle du CMS"
          description="Le CMS coordonne l’aide et les soins à domicile pour les personnes âgées ou celles qui rencontrent un problème de santé, avec une logique simple d’orientation et de proximité."
        />
        <SeniorsNoticeCard
          title="Liens AVASAD"
          description="Le site AVASAD permet de consulter les listes de rues, de vérifier la bonne structure et d’accéder aux informations utiles selon votre situation."
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Liens utiles"
          title="Vérifier son secteur et aller plus loin"
          description="Les accès directs AVASAD et les liens complémentaires sont regroupés ici."
        />
        <HelpfulLinksSection items={seniorUsefulPageLinks} />
      </section>

      <section className="space-y-8">
        <SeniorsContactPanel contacts={seniorsPageContacts} />
      </section>
    </section>
  );
}
