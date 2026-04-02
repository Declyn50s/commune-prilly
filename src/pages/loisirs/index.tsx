import { EventCard, GenericCard } from "@/components/common/cards";
import { SectionHeader } from "@/components/common/section-header";
import { RubricLayout } from "@/components/common/rubric-layout";
import { agendaItems } from "@/data/mock";

const leisureQuickLinks = [
  {
    title: "Culture",
    description: "Voir les événements, participer, organiser et financer.",
    href: "/loisirs/culture",
  },
  {
    title: "Agenda culturel",
    description: "Voir rapidement les événements culturels à venir et filtrer par type.",
    href: "/loisirs/agenda-culturel",
  },
  {
    title: "Bibliothèque",
    description: "Consulter les horaires, les services et les ressources de la bibliothèque communale.",
    href: "/loisirs/bibliotheque",
  },
  {
    title: "Subventions culturelles",
    description: "Vérifier l'éligibilité, choisir le bon type d'aide et télécharger les formulaires utiles.",
    href: "/loisirs/subventions",
  },
  {
    title: "Organiser une manifestation",
    description: "Structurer un événement, réserver un lieu et enchaîner vers la demande de soutien si besoin.",
    href: "/loisirs/manifestations",
  },
  {
    title: "Sports et loisirs",
    description: "Accéder à la rubrique sport, piscines, activités gratuites et jeunesse.",
    href: "/loisirs/sports-et-loisirs",
  },
  {
    title: "Piscines",
    description: "Comparer Fleur-de-Lys et Fontadel, consulter les horaires et les abonnements.",
    href: "/loisirs/sports-et-loisirs/piscines",
  },
  {
    title: "Fêtons Prilly",
    description: "Retrouver les dates 2026 et l'appel à candidatures pour les stands.",
    href: "/loisirs/fetons-prilly",
  },
  {
    title: "Marché de Noël",
    description: "Voir le programme, les animations, les documents et l'esprit de l'événement.",
    href: "/loisirs/marche-noel",
  },
  {
    title: "Sociétés locales",
    description: "Explorer l'annuaire des clubs, chorales et associations de Prilly.",
    href: "/loisirs/sports-et-loisirs/societes-locales",
  },
];

export default function LoisirsIndexPage() {
  return (
    <RubricLayout
      breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Loisirs" }]}
      eyebrow="Loisirs & culture"
      title="Une rubrique plus vivante, sans rompre l'élégance institutionnelle."
      description="L’univers loisirs valorise les événements, les activités et les associations avec une mise en forme plus chaleureuse, plus visuelle et toujours très lisible."
      tone="warm"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {agendaItems.map((item, index) => (
          <EventCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Navigation utile"
          title="Les principales entrées de la rubrique"
          description="La page loisirs relie directement les univers déjà produits pour éviter les répétitions et aller plus vite vers le bon contenu."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {leisureQuickLinks.map((item, index) => (
            <GenericCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              accent={index % 2 === 0 ? "yellow" : "red"}
            />
          ))}
        </div>
      </section>
    </RubricLayout>
  );
}
