import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { ActivityCard, VQContactPanel } from "@/features/vie-quartier/components";
import { quartierActivities, quartierContact } from "@/features/vie-quartier/data";

export default function ActivitesQuartierPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Vivre", href: "/vivre" },
          { label: "Vie de quartier", href: "/vivre/vie-quartier" },
          { label: "Activités de quartier" },
        ]}
      />

      <PageHero
        eyebrow="Vie locale"
        title="Activités de quartier"
        description="Des rendez-vous conviviaux pour créer du lien, découvrir le quartier et participer à la vie locale."
        tone="warm"
        aside={
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <img
              src="/images/vie-quartier/csm_capture_2_ef2dc71728.png"
              alt="Extrait d’informations et détails des activités de quartier"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Rendez-vous réguliers"
          title="Ce qui se passe concrètement dans le quartier"
          description="Les activités sont présentées dans une logique simple: pour qui, quand, où et comment participer."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quartierActivities.map((item) => (
            <ActivityCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
            Vie locale et convivialité
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-prilly-coal">Des activités qui créent des habitudes positives</h2>
          <div className="mt-4 space-y-3">
            {[
              "Rompre l’isolement et favoriser des rencontres simples dans le quartier.",
              "Créer des rendez-vous réguliers qui rendent la vie locale plus visible et plus chaleureuse.",
              "Valoriser des lieux de proximité où l’on peut venir sans formalité excessive.",
              "Montrer qu’un quartier vivant se construit aussi par des petites habitudes conviviales.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-prilly-soft px-4 py-4 text-sm leading-6 text-prilly-coal/74">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
            Comment être informé·e ?
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-prilly-coal">Suivre les prochains rendez-vous</h2>
          <div className="mt-4 space-y-3">
            {[
              "Contacter les personnes référentes du quartier pour connaître les prochaines dates.",
              "Suivre les activités locales et les relais associatifs de proximité.",
              "Se renseigner auprès de la cheffe de projet cohésion sociale si vous souhaitez participer ou proposer une idée.",
              "Demander directement comment s’inscrire, venir ou contribuer à une activité.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-prilly-soft px-4 py-4 text-sm leading-6 text-prilly-coal/74">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Un lien local pour participer ou se renseigner"
          description="Le contact reste visible pour que les activités de quartier ne soient pas perçues comme des contenus figés, mais comme des invitations à rejoindre la vie locale."
        />
        <VQContactPanel contact={quartierContact} />
      </section>
    </section>
  );
}
