import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionSidebar } from "@/components/common/section-sidebar";

type RubricLayoutProps = {
  breadcrumb: Array<{ label: string; href?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark" | "warm";
};

export function RubricLayout({
  breadcrumb,
  eyebrow,
  title,
  description,
  children,
  aside,
  tone = "light",
}: RubricLayoutProps) {
  return (
    <section className="container space-y-10 py-8 md:py-10">
      <Breadcrumb items={breadcrumb} />
      <PageHero eyebrow={eyebrow} title={title} description={description} aside={aside} tone={tone} />
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <div className="space-y-10">{children}</div>
        <SectionSidebar />
      </div>
    </section>
  );
}
