import { ChevronDown } from "lucide-react";
import type { MouseEvent } from "react";
import { useId, useState } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

export type PageSideNavSection = {
  id: string;
  label: string;
};

type PageSideNavProps = {
  sections: PageSideNavSection[];
  title?: string;
  offset?: number;
  className?: string;
};

export function PageSideNav({
  sections,
  title = "Dans cette page",
  offset = 152,
  className,
}: PageSideNavProps) {
  const activeSection = useScrollSpy(
    sections.map((section) => section.id),
    { offset },
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();

  const handleNavigate = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  if (!sections.length) {
    return null;
  }

  return (
    <aside className={cn("order-first xl:col-start-2 xl:row-start-1 xl:self-stretch", className)}>
      <div className="sticky top-24 z-20 rounded-[1.35rem] border border-black/8 bg-white/98 p-4 shadow-[0_14px_34px_rgba(31,34,35,0.08)] xl:hidden">
        <button
          type="button"
          className="focus-ring flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={mobileOpen}
          aria-controls={panelId}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/56">
              {title}
            </p>
            <p className="mt-1 text-[15px] font-semibold text-prilly-coal">
              {sections.find((section) => section.id === activeSection)?.label ?? sections[0].label}
            </p>
          </div>
          <ChevronDown className={cn("h-4 w-4 text-prilly-coal transition", mobileOpen && "rotate-180")} />
        </button>

        {mobileOpen ? (
          <nav id={panelId} aria-label={title} className="mt-4 grid gap-2 border-t border-black/6 pt-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavigate(section.id)}
                aria-current={activeSection === section.id ? "location" : undefined}
                className={cn(
                  "focus-ring rounded-[1rem] border px-3.5 py-3 text-[15px] font-medium transition",
                  activeSection === section.id
                    ? "border-prilly-red/18 bg-prilly-soft text-prilly-coal"
                    : "border-black/8 bg-[#faf8f4] text-prilly-coal/72 hover:border-black/10 hover:text-prilly-coal",
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "block h-2.5 w-2.5 rounded-full transition",
                      activeSection === section.id ? "bg-prilly-red" : "bg-prilly-coal/18",
                    )}
                  />
                  {section.label}
                </span>
              </a>
            ))}
          </nav>
        ) : null}
      </div>

      <div className="hidden h-full xl:block">
        <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-auto rounded-[1.6rem] border border-black/8 bg-white/98 p-5 shadow-[0_16px_40px_rgba(31,34,35,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/56">{title}</p>
          <nav aria-label={title} className="relative mt-4 border-l border-black/8 pl-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavigate(section.id)}
                aria-current={activeSection === section.id ? "location" : undefined}
                className={cn(
                  "focus-ring relative block rounded-[1rem] px-3 py-3 text-[15px] leading-5 transition",
                  activeSection === section.id
                    ? "bg-prilly-soft font-semibold text-prilly-coal shadow-sm"
                    : "font-medium text-prilly-coal/72 hover:bg-prilly-coal/4 hover:text-prilly-coal",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[1.05rem] top-2.5 h-[calc(100%-1.25rem)] w-1 rounded-full transition",
                    activeSection === section.id ? "bg-prilly-red" : "bg-transparent",
                  )}
                />
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
