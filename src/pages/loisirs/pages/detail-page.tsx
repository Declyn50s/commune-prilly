import { useParams } from "react-router-dom";
import { RubricDetailPage } from "@/components/common/rubric-detail-page";
import { loisirsRoutes } from "@/features/loisirs/data/routes";

export default function LoisirsDetailPage() {
  const { slug = "" } = useParams();
  const page = loisirsRoutes.find((item) => item.slug === slug) ?? loisirsRoutes[0];

  return (
    <RubricDetailPage
      rubricLabel="Loisirs"
      rubricHref="/loisirs"
      title={page.title}
      description={page.description}
      highlights={["Temps fort local", "Publics concernés", "Informations pratiques"]}
    />
  );
}
