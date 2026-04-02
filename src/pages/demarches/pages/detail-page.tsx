import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { ContactCard } from "@/components/common/contact-card";
import { GenericCard } from "@/components/common/cards";
import { FaqList } from "@/components/common/faq-list";
import { InfoBox } from "@/components/common/info-box";
import { ProcedureStepper } from "@/components/common/procedure-stepper";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { contacts, faqs, procedures } from "@/data/mock";
import { demarchesRoutes } from "@/features/demarches/data/routes";

export default function DemarcheDetailPage() {
  const { slug = "" } = useParams();
  const route = demarchesRoutes.find((item) => item.slug === slug) ?? demarchesRoutes[0];
  const procedure = procedures.find((item) => item.slug === route.legacyKey);

  if (!procedure) {
    return (
      <div className="container py-10">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: route.title }]} />
        <div className="mt-8 surface p-6">
          <h1 className="text-4xl font-semibold text-prilly-coal">{route.title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-prilly-coal/70">{route.description}</p>
          <div className="mt-6 rounded-[1.5rem] bg-prilly-soft p-5">
            <h2 className="text-xl font-semibold text-prilly-coal">Contenu en préparation</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-prilly-coal/72">
              Cette page sera prochainement complétée. En attendant, vous pouvez consulter la rubrique parente ou contacter la commune pour obtenir l’information recherchée.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/demarches" className="inline-flex rounded-full bg-prilly-red px-5 py-3 text-sm font-semibold text-white">
                Voir les démarches
              </Link>
              <Link
                to="/contact/services-communaux"
                className="inline-flex rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-prilly-coal"
              >
                Contacter la commune
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const contact = contacts.find((item) => item.id === procedure.contactId) ?? contacts[0];
  const related = procedures.filter((item) => procedure.related.includes(item.slug));
  const procedureFaqs = faqs.filter((item) => procedure.faqIds.includes(item.id));

  return (
    <section className="container space-y-8 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: procedure.title }]} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <span className="eyebrow">Démarche</span>
          <h1 className="text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">{procedure.title}</h1>
          <p className="max-w-2xl text-base leading-7 text-prilly-coal/70">{procedure.summary}</p>
          <div className="flex flex-wrap gap-2">
            {procedure.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-prilly-soft px-3 py-2 text-sm text-prilly-coal/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="surface p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Action principale</p>
          <p className="mt-3 text-lg font-semibold text-prilly-coal">Commencer en confiance avec un parcours guidé.</p>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/70">
            Le gabarit met en avant l’information utile avant les détails techniques pour réduire l’hésitation et rendre l’action évidente.
          </p>
          <Button className="mt-5 w-full justify-center md:w-auto">{procedure.ctaLabel}</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <InfoBox title="Pour qui" tone="soft">
            {procedure.audience}
          </InfoBox>
          <InfoBox title="Documents nécessaires" tone="yellow">
            <ul className="space-y-2">
              {procedure.documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBox>
          <InfoBox title="Informations pratiques" tone="green">
            <ul className="space-y-2">
              {procedure.practicalInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBox>
        </div>
        <div className="space-y-6">
          <SectionHeader eyebrow="Étapes" title="Ce qu’il faut faire" description="Chaque étape est formulée simplement pour réduire l’incertitude et permettre une exécution rapide." />
          <ProcedureStepper steps={procedure.steps} />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-8">
          {procedureFaqs.length ? (
            <section className="space-y-5">
              <SectionHeader eyebrow="Questions fréquentes" title="Les réponses utiles avant de contacter un service" description="Une FAQ courte et ciblée rassure l’utilisateur sans l’enfermer dans de longs contenus." />
              <FaqList items={procedureFaqs} />
            </section>
          ) : null}
          {related.length ? (
            <section className="space-y-5">
              <SectionHeader eyebrow="Liens connexes" title="Démarches liées" description="Pour accompagner les cas voisins et éviter les allers-retours." />
              <div className="grid gap-4 md:grid-cols-2">
                {related.map((item) => (
                  <GenericCard key={item.slug} title={item.title} description={item.summary} href={demarchesRoutes.find((routeItem) => routeItem.legacyKey === item.slug)?.path ?? "/demarches"} accent="green" />
                ))}
              </div>
            </section>
          ) : null}
        </div>
        <aside className="space-y-6">
          <ContactCard contact={contact} />
          <div className="surface p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Besoin d’aide</p>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/70">
              Si votre situation est particulière, le service concerné peut vous orienter vers le bon canal ou le bon rendez-vous.
            </p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
              Voir tous les contacts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
