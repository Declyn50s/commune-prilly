import { Link } from "react-router-dom";
import { ContactCard } from "@/components/common/contact-card";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { contactShortcuts, contacts } from "@/data/mock";

const contactShortcutMap: Record<string, string> = {
  "Trouver un service communal": "/contact/services-communaux",
  "Voir les horaires d’accueil": "/contact/services-communaux",
  "Voir les horaires d'accueil": "/contact/services-communaux",
  "Consulter les urgences": "/contact/securite-prevention",
  "Préparer un déplacement à l’Hôtel de Ville": "/contact",
  "Preparer un deplacement a l'Hotel de Ville": "/contact",
};

export default function ContactIndexPage() {
  return (
    <RubricLayout
      breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      eyebrow="Contact"
      title="Joindre le bon service rapidement, avec des horaires visibles et des urgences bien identifiees."
      description="La page contact privilegie l'efficacite: accès direct aux coordonnees, mise en avant des urgences et presentation claire des services communaux."
      aside={
        <div className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Plan de la ville</p>
          <div className="mt-4 rounded-[1.75rem] bg-gradient-to-br from-prilly-sky to-prilly-soft p-8 text-sm leading-6 text-prilly-coal/70">
            Zone cartographique placeholder prete a être remplacée plus tard par une carte interactive ou un module carto externe.
          </div>
        </div>
      }
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {contactShortcuts.map((item, index) => (
          <Reveal key={item} delay={index * 0.04}>
            <Link to={contactShortcutMap[item] ?? "/contact"} className="surface block p-4 text-sm font-medium text-prilly-coal transition duration-300 hover:-translate-y-1 hover:shadow-float">
              {item}
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </RubricLayout>
  );
}
