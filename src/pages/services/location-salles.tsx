import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  BookingStepCard,
  DownloadCard,
  NoticeCard,
  RentalContactPanel,
  RentalHero,
  RoomCardView,
  RoomDetailSection,
} from "@/features/location-salles/components";
import {
  bookingSteps,
  practicalNotices,
  rentalContact,
  rentalDocuments,
  rentalHero,
  roomCards,
  roomDetails,
} from "@/features/location-salles/data";

const pageSections: PageSideNavSection[] = [
  { id: "salles", label: "Les salles" },
  { id: "comment-reserver", label: "Comment reserver" },
  { id: "a-savoir", label: "A savoir" },
  { id: "infos-pratiques", label: "Infos pratiques" },
  { id: "documents", label: "Documents" },
  { id: "contact", label: "Contact" },
];

export default function RoomRentalPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Location de salles" },
        ]}
      />

      <RentalHero
        eyebrow="Reservation de salles"
        title={rentalHero.title}
        description={rentalHero.description}
        ctas={rentalHero.ctas}
        notes={rentalHero.notes}
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="salles" className="scroll-mt-32 space-y-8">
            <SectionHeader eyebrow="Les salles" title="Choisir rapidement le bon lieu" description="Découvrez nos salles disponibles pour location et événements." />
            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {roomCards.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.03}>
                  <RoomCardView item={item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="comment-reserver" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Comment reserver"
              title="Un parcours simple en 4 etapes"
              description="L'objectif est de permettre a un utilisateur de comprendre, choisir et lancer une reservation en moins d'une minute."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {bookingSteps.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <BookingStepCard item={item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="a-savoir" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="A savoir"
              title="Le reglement resume en points utiles"
              description="Le reglement complet reste telechargeable, mais voici les reperes essentiels pour eviter les erreurs de parcours."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {practicalNotices.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <NoticeCard title={item.title} description={item.description} icon={item.icon} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="infos-pratiques" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Infos pratiques par salle"
              title="Les details utiles avant d'envoyer la demande"
              description="Chaque salle dispose ici d'un resume actionnable pour eviter d'ouvrir plusieurs PDF juste pour verifier une condition essentielle."
            />
            <div className="grid gap-6">
              {roomDetails.map((item) => (
                <RoomDetailSection key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section id="documents" className="scroll-mt-32 space-y-8">
            <SectionHeader
              eyebrow="Documents telechargeables"
              title="Les bons supports, au bon moment"
              description="Les documents restent disponibles, mais leur utilite est clarifiee pour gagner du temps."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {rentalDocuments.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <DownloadCard item={item} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <RentalContactPanel
              title={rentalContact.title}
              address={rentalContact.address}
              email={rentalContact.email}
              phone={rentalContact.phone}
              officeHours={rentalContact.officeHours}
            />
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
