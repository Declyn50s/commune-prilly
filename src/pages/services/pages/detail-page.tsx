import { useParams } from "react-router-dom";
import { RubricDetailPage } from "@/components/common/rubric-detail-page";
import { servicesRoutes } from "@/features/services/data/routes";

export default function ServicesDetailPage() {
  const { slug = "" } = useParams();
  const page = servicesRoutes.find((item) => item.slug === slug) ?? servicesRoutes[0];

  return (
    <RubricDetailPage
      rubricLabel="Services"
      rubricHref="/services"
      title={page.title}
      description={page.description}
      highlights={["Informations pratiques", "Documents utiles", "Contacts du service"]}
    />
  );
}
