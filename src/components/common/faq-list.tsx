import type { FaqItem } from "@/types/content";
import { AccordionItem } from "@/components/ui/accordion";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <AccordionItem key={item.id} title={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
