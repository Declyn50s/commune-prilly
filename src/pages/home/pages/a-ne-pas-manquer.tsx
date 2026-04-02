import { RubricDetailPage } from "@/components/common/rubric-detail-page";

export default function HomeHighlightsPage() {
  return <RubricDetailPage rubricLabel="Accueil" rubricHref="/" title="Informations importantes" description="Les contenus prioritaires et les informations de service mises en avant." highlights={["Infos prioritaires", "Temps forts", "Raccourcis utiles"]} />;
}
