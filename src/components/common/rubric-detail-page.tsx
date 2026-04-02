import type { ReactNode } from "react";
import { RubricLayout } from "@/components/common/rubric-layout";

export function RubricDetailPage({
  rubricLabel,
  rubricHref,
  title,
  description,
  highlights,
}: {
  rubricLabel: string;
  rubricHref: string;
  title: string;
  description: string;
  highlights: string[];
}) {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: rubricLabel, href: rubricHref },
        { label: title },
      ]}
      eyebrow={rubricLabel}
      title={title}
      description={description}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <div key={item} className="surface p-5">
            <p className="text-lg font-semibold text-prilly-coal">{item}</p>
          </div>
        ))}
      </div>
    </RubricLayout>
  );
}
