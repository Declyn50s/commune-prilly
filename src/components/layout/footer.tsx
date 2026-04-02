import { navSections } from "@/features/site/data/navigation";
import {
  FooterBottom,
  FooterContact,
  FooterNav,
} from "@/components/layout/footer-sections";

export function Footer() {
  const footerSections = navSections.filter((section) =>
    ["Vivre", "Démarches", "Services", "Loisirs"].includes(section.label),
  );

  return (
    <footer className="mt-20 bg-prilly-coal text-white">
      <div className="container space-y-10 py-10 md:space-y-12 md:py-14">
        <FooterNav sections={footerSections} />
        <FooterContact />
        <FooterBottom />
      </div>
    </footer>
  );
}
