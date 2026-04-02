import { useParams } from "react-router-dom";
import { RubricDetailPage } from "@/components/common/rubric-detail-page";
import { villeRoutes } from "@/features/ville/data/routes";

export default function VilleDetailPage() {
  const { slug = "" } = useParams();
  const page = villeRoutes.find((item) => item.slug === slug) ?? villeRoutes[0];

  return (
    <RubricDetailPage
      rubricLabel="Ville"
      rubricHref="/ville"
      title={page.title}
      description={page.description}
      highlights={["Contexte institutionnel", "Informations à consulter", "Contacts et ressources"]}
    />
  );
}
