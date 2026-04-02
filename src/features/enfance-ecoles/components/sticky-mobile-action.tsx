import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyMobileAction({ label, href }: { label: string; href: string }) {
  return (
    <div className="fixed inset-x-0 bottom-20 z-30 px-4 md:hidden">
      <a href={href} className="block">
        <Button className="w-full justify-center shadow-float">
          {label}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}
