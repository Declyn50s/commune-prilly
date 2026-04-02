import { useParams } from "react-router-dom";
import { RubricDetailPage } from "@/components/common/rubric-detail-page";
import { vivreHighlights, vivreRoutes } from "@/features/vivre/data/routes";

export default function VivreDetailPage() {
  const { slug = "" } = useParams();
  const page = vivreRoutes.find((item) => item.slug === slug) ?? vivreRoutes[0];

  return (
    <RubricDetailPage
      rubricLabel="Vivre"
      rubricHref="/vivre"
      title={page.title}
      description={page.description}
      highlights={vivreHighlights}
    />
  );
}
