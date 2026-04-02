import { FileText, Home, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const items = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Démarches", href: "/demarches", icon: FileText },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function MobileActionBar() {
  const location = useLocation();

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-between rounded-[1.6rem] border border-black/8 bg-white/95 p-2 shadow-float backdrop-blur-xl">
        {items.map((item) => {
          const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "focus-ring inline-flex min-w-[96px] flex-col items-center gap-1 rounded-[1.1rem] px-3 py-2 text-xs font-medium text-prilly-coal transition",
                isActive ? "bg-prilly-coal text-white" : "hover:bg-prilly-soft",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
