import { RubricDetailPage } from "@/components/common/rubric-detail-page";

export default function HomeQuickLinksPage() {
  return <RubricDetailPage rubricLabel="Accueil" rubricHref="/" title="Accès rapides" description="Les raccourcis de service les plus utiles depuis la page d’accueil." highlights={["Démarches prioritaires", "Services du quotidien", "Contacts utiles"]} />;
}
