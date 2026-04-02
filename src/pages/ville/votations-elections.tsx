import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  CandidateListCard,
  ElectionTimeline,
  ElectionTypeCard,
  HelpfulLinksSection,
  OfficialDocumentCard,
  ResultSummaryCard,
  VideoHelpSection,
  VoteMethodCard,
  VotingContactPanel,
  VotingHero,
} from "@/features/votations-elections/components";
import {
  electionCalendar2026,
  electionTypes,
  helpfulVotingLinks,
  municipalRound2Lists,
  officialVotingDocuments,
  resultSections,
  upcomingScrutins,
  videoHelp,
  voteMethods,
  votingContact,
  votingInfoCards,
  votingPageMeta,
  votingSteps,
} from "@/features/votations-elections/data";

export default function VotationsElectionsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={votingPageMeta.breadcrumb} />

      <VotingHero
        title={votingPageMeta.hero.title}
        description={votingPageMeta.hero.description}
        intro={votingPageMeta.hero.intro}
        ctas={votingPageMeta.anchors}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Voter en 3 facons"
          title="Les trois manieres de remettre son enveloppe"
          description="Les délais sont mis en avant tout de suite pour rassurer et eviter les erreurs de dernière minute."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {voteMethods.map((item) => (
            <VoteMethodCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="comment-voter" className="space-y-8">
        <SectionHeader
          eyebrow="Comment voter ?"
          title="Une procedure simple, etape par etape"
          description="La page transforme le mode d'emploi en parcours clair pour verifier rapidement que tout est correct avant l'envoi."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {votingInfoCards.map((item) => (
            <div key={item.title} className="surface p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red"><item.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            </div>
          ))}
        </div>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {votingSteps.map((step, index) => (
            <li key={step} className="surface flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prilly-red text-sm font-semibold text-white">{index + 1}</div>
              <p className="text-sm leading-6 text-prilly-coal/78">{step}</p>
            </li>
          ))}
        </ol>
        <VideoHelpSection {...videoHelp} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Elections communales 2026"
          title="Trois scrutins, trois logiques de vote"
          description="Conseil communal, Municipalite et syndicature sont séparés pour rendre le mode de scrutin et la composition de chaque organe immediatement compréhensibles."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {electionTypes.map((item) => (
            <ElectionTypeCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Calendrier 2026"
          title="Les grandes dates a retenir"
          description="Une timeline chronologique pour suivre le depot des candidatures, les tours de scrutin et la logique de la sequence electorale."
        />
        <ElectionTimeline items={electionCalendar2026} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="2e tour de la Municipalite"
          title="Les listes et candidat·e·s presentes au scrutin du 29 mars 2026"
          description="Les candidatures sont regroupees par liste deposee pour rendre la lecture plus claire et plus institutionnelle."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {municipalRound2Lists.map((item) => (
            <CandidateListCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section id="résultats" className="space-y-8">
        <SectionHeader
          eyebrow="Résultats"
          title="Les chiffres recents, reunis en blocs lisibles"
          description="La page distingue les résultats communaux, federaux et cantonaux à Prilly pour permettre une verification rapide sans ouvrir directement les proces-verbaux."
        />
        <div className="grid gap-4 xl:grid-cols-2">
          {resultSections.map((item) => (
            <ResultSummaryCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="prochains-scrutins" className="space-y-8">
        <SectionHeader
          eyebrow="Prochains scrutins"
          title="L'agenda civique des prochaines semaines"
          description="Les prochains tours de scrutin sont isoles dans une section courte pour être repères rapidement depuis la page."
        />
        <ElectionTimeline items={upcomingScrutins} />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents et proces-verbaux"
          title="Les pieces officielles sans effet de liste brute"
          description="Chaque document est contextualise pour indiquer ce qu'il confirme ou a quoi il sert dans la page."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {officialVotingDocuments.map((item) => (
            <OfficialDocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Liens utiles"
          title="Les bonnes ressources institutionnelles, au bon endroit"
          description="Ces liens prolongent la page avec les sources officielles cantonales, fédérales et explicatives les plus utiles."
        />
        <HelpfulLinksSection items={helpfulVotingLinks} />
      </section>

      <VotingContactPanel {...votingContact} />
    </section>
  );
}
