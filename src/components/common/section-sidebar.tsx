import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { contactRoutes } from "@/features/contact/data/routes";
import { demarchesRoutes } from "@/features/demarches/data/routes";
import { loisirsRoutes } from "@/features/loisirs/data/routes";
import { servicesRoutes } from "@/features/services/data/routes";
import type { RouteDefinition } from "@/features/site/data/navigation";
import { villeRoutes } from "@/features/ville/data/routes";
import { vivreRoutes } from "@/features/vivre/data/routes";

type SidebarConfig = {
  title: string;
  rootPath: string;
  rootLabel: string;
  routes: RouteDefinition[];
};

const sidebarConfigs: Array<{ match: (pathname: string) => boolean; config: SidebarConfig }> = [
  {
    match: (pathname) => pathname.startsWith("/vivre"),
    config: {
      title: "Rubrique Vivre",
      rootPath: "/vivre",
      rootLabel: "Vue d'ensemble",
      routes: vivreRoutes,
    },
  },
  {
    match: (pathname) => pathname.startsWith("/demarches"),
    config: {
      title: "Rubrique Demarches",
      rootPath: "/demarches",
      rootLabel: "Vue d'ensemble",
      routes: demarchesRoutes,
    },
  },
  {
    match: (pathname) => pathname.startsWith("/services"),
    config: {
      title: "Rubrique Services",
      rootPath: "/services",
      rootLabel: "Vue d'ensemble",
      routes: servicesRoutes,
    },
  },
  {
    match: (pathname) => pathname.startsWith("/loisirs"),
    config: {
      title: "Rubrique Loisirs",
      rootPath: "/loisirs",
      rootLabel: "Vue d'ensemble",
      routes: loisirsRoutes,
    },
  },
  {
    match: (pathname) => pathname.startsWith("/ville"),
    config: {
      title: "Rubrique Ville",
      rootPath: "/ville",
      rootLabel: "Vue d'ensemble",
      routes: villeRoutes,
    },
  },
  {
    match: (pathname) => pathname.startsWith("/contact"),
    config: {
      title: "Rubrique Contact",
      rootPath: "/contact",
      rootLabel: "Vue d'ensemble",
      routes: contactRoutes,
    },
  },
];

function isLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SectionSidebar({ className }: { className?: string }) {
  const { pathname } = useLocation();
  const match = sidebarConfigs.find((entry) => entry.match(pathname));

  if (!match) {
    return null;
  }

  const { title, rootPath, rootLabel, routes } = match.config;

  return (
    <aside className={cn("hidden xl:block", className)}>
      <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-auto rounded-[1.6rem] border border-black/8 bg-white/98 p-5 shadow-[0_16px_40px_rgba(31,34,35,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/56">{title}</p>

        <nav aria-label={title} className="mt-4 space-y-2">
          <NavLink
            to={rootPath}
            end
            className={({ isActive }) =>
              cn(
                "focus-ring block rounded-[1rem] px-3 py-3 text-[15px] leading-5 transition",
                isActive
                  ? "bg-prilly-soft font-semibold text-prilly-coal shadow-sm"
                  : "font-medium text-prilly-coal/72 hover:bg-prilly-coal/4 hover:text-prilly-coal",
              )
            }
          >
            {rootLabel}
          </NavLink>

          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={() =>
                cn(
                  "focus-ring block rounded-[1rem] px-3 py-3 text-[15px] leading-5 transition",
                  isLinkActive(pathname, route.path)
                    ? "bg-prilly-soft font-semibold text-prilly-coal shadow-sm"
                    : "font-medium text-prilly-coal/72 hover:bg-prilly-coal/4 hover:text-prilly-coal",
                )
              }
            >
              {route.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
