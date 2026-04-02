import { ArrowRight, AlertTriangle, BadgeInfo, CheckCircle2, FileText, Mail, Phone, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const dogActions = [
  {
    title: "J'ai un chien",
    description: "Annoncer la detention de votre chien sous 14 jours.",
    details: "C'est la bonne action si vous arrivez avec un chien, si vous devenez detentrice ou detenteur, ou si la situation doit être mise a jour.",
  },
  {
    title: "Je n'ai plus de chien",
    description: "Annoncer rapidement un deces, une vente ou une cessation de detention.",
    details: "Le signalement permet d'eviter des erreurs administratives et fiscales sur votre dossier.",
  },
] as const;

const channels = [
  {
    title: "En ligne",
    description: "Le guichet virtuel permet de lancer rapidement la démarche quand votre situation peut être traitée a distance.",
    ctaLabel: "Guichet virtuel",
    ctaHref: "mailto:population@prilly.ch",
  },
  {
    title: "Guichet",
    description: "Le guichet de l'Office de la population reste la bonne porte d'entrée pour toutes les situations qui demandent un accompagnement direct.",
    ctaLabel: "Contacter le guichet",
    ctaHref: "mailto:population@prilly.ch",
  },
] as const;

const obligations = [
  {
    title: "Puce electronique",
    description: "Le chien doit être identifie correctement par puce electronique.",
    icon: CheckCircle2,
  },
  {
    title: "Chiens dangereux",
    description: "Les cas particuliers ou races soumises a des regles specifiques doivent être annonces et verifies.",
    icon: AlertTriangle,
  },
  {
    title: "Morsures",
    description: "Toute morsure ou incident doit être signale selon les obligations en vigueur.",
    icon: ShieldCheck,
  },
] as const;

const rules = [
  "Annonce dans les délais",
  "Situation du chien tenue a jour",
  "Respect du cadre communal et cantonal",
] as const;

export default function DogsPage() {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Demarches", href: "/demarches" },
        { label: "Chiens" },
      ]}
      eyebrow="Demarche animaux"
      title="Chiens"
      description="Toutes les Démarches pour votre chien à Prilly"
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-black/8 bg-white/92 p-5 shadow-soft">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-prilly-red/10 text-prilly-red">Annonce</Badge>
              <Badge className="bg-prilly-yellow/20 text-prilly-coal">Obligations</Badge>
              <Badge className="bg-prilly-soft text-prilly-coal">Impot</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/76">
              La page doit permettre de comprendre tres vite quoi faire, comment le faire et combien cela coute.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#actions" className="inline-flex">
              <Button className="w-full justify-center">Déclarer un chien</Button>
            </a>
            <a href="mailto:population@prilly.ch" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Guichet virtuel
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section id="actions" className="space-y-8">
        <SectionHeader
          eyebrow="Actions principales"
          title="Deux situations, deux reflexes"
          description="Le premier niveau de lecture doit être immediat: annoncer un chien ou annoncer que vous n'en avez plus."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {dogActions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className={`rounded-[1.85rem] p-6 shadow-soft md:p-8 ${index === 0 ? "border border-black/8 bg-white" : "border border-black/8 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-green/10"}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">{item.title}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{item.description}</h3>
                <p className="mt-4 text-sm leading-7 text-prilly-coal/74">{item.details}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comment faire"
          title="En ligne ou au guichet"
          description="Deux canaux lisibles, sans jargon ni parcours caché."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {channels.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface h-full p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-prilly-coal/74">{item.description}</p>
                <a href={item.ctaHref} className="mt-6 inline-flex">
                  <Button variant={index === 0 ? "primary" : "secondary"}>
                    {item.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Obligations"
          title="Les points a ne pas manquer"
          description="Trois obligations ressortent tout de suite pour reduire le risque d'oubli."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {obligations.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Impot"
          title="Le montant ressort immediatement"
          description="Un affichage volontairement tres simple pour aller droit au but."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="surface p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Impot annuel</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight text-prilly-coal">CHF 220</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/74">Montant de reference pour l'impot sur les chiens.</p>
          </div>
          <div className="surface p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Exonérations</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">Selon situation</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/74">Certaines situations peuvent ouvrir un droit a exonération ou à un traitement particulier.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Regles"
          title="Le resume simple a retenir"
          description="Quelques points cles avant d'ouvrir le reglement complet."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.85rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <div className="space-y-3">
              {rules.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.85rem] border border-black/8 bg-gradient-to-br from-prilly-soft via-white to-prilly-yellow/15 p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Reglement officiel</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">Le document complet reste accèssible</h3>
            <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
              Si vous avez besoin du cadre detaille, le reglement communal sur les chiens est disponible en telechargement.
            </p>
            <a href="/docs/demarches/chiens/reglement-chiens.pdf" target="_blank" rel="noreferrer" className="mt-6 inline-flex">
              <Button variant="secondary">
                Ouvrir le reglement
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Office de la population"
          description="Le bon point d'entrée pour déclarer, modifier ou cloturer la situation de votre chien."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Phone className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">+41 21 622 73 21</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Mail className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">population@prilly.ch</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <FileText className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">Annonce et suivi des demarches</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:population@prilly.ch" className="inline-flex">
                <Button>Envoyer un mail</Button>
              </a>
              <a href="tel:+41216227321" className="inline-flex">
                <Button variant="secondary">Appeler</Button>
              </a>
            </div>
          </div>
          <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">A retenir</p>
            <div className="mt-5 space-y-3">
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Annonce sous 14 jours</div>
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">CHF 220 d'impot de reference</div>
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Reglement disponible en ligne</div>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
