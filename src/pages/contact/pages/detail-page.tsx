import { useParams } from "react-router-dom";
import { RubricDetailPage } from "@/components/common/rubric-detail-page";
import { contactRoutes } from "@/features/contact/data/routes";

export default function ContactDetailPage() {
  const { slug = "" } = useParams();
  const page = contactRoutes.find((item) => item.slug === slug) ?? contactRoutes[0];

  return (
    <RubricDetailPage
      rubricLabel="Contact"
      rubricHref="/contact"
      title={page.title}
      description={page.description}
      highlights={["Coordonnées directes", "Horaires utiles", "Accès et orientation"]}
    />
  );
}
