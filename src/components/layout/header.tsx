import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PrillyLogo } from "@/components/branding/prilly-logo";
import { SearchBar } from "@/components/common/search-bar";
import { mobileShortcuts, navSections, searchSuggestions } from "@/features/site/data/navigation";
import { cn } from "@/lib/utils";
import type { NavSection } from "@/types/content";

function isSectionActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getMegaMenuColumns(count: number) {
  if (count >= 4) return "xl:grid-cols-4";
  if (count === 3) return "xl:grid-cols-3";
  if (count === 2) return "md:grid-cols-2";
  return "grid-cols-1";
}

function getSectionPanelId(prefix: string, label: string) {
  return `${prefix}-${label.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-")}`;
}

function getSectionLinks(section: NavSection) {
  return section.groups.flatMap((group) => group.links);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>("Démarches");
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [desktopQuery, setDesktopQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement | null>(null);
  const headerId = useId();

  const openSection = useMemo(
    () => navSections.find((section) => section.label === desktopOpen) ?? null,
    [desktopOpen],
  );

  useEffect(() => {
    setDesktopOpen(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopOpen(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const submitDesktopSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = desktopQuery.trim();
    navigate(query ? `/recherche?q=${encodeURIComponent(query)}` : "/recherche");
    setDesktopOpen(null);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-black/6 bg-white/92 backdrop-blur-xl"
    >
      <div className="container py-3">
        <div className="flex items-center gap-3 rounded-[1.75rem] border border-black/6 bg-white/90 px-3 py-3 shadow-[0_18px_48px_rgba(34,34,34,0.08)]">
          <Link
            to="/"
            className="focus-ring shrink-0 rounded-[1.2rem] px-2 py-1"
            aria-label="Accueil - Commune de Prilly"
          >
            <PrillyLogo className="h-11 w-auto md:h-12" />
          </Link>

          <div
            className="relative hidden min-w-0 flex-1 lg:block"
            onMouseLeave={() => setDesktopOpen(null)}
          >
            <div className="flex min-w-0 items-center gap-2">
              <nav
                aria-label="Navigation principale"
                className="flex min-w-0 flex-1 items-center gap-1 rounded-full bg-[#f7f5f1] p-1"
              >
                {navSections.map((section) => {
                  const isOpen = desktopOpen === section.label;
                  const isActive = isSectionActive(location.pathname, section.href);
                  const panelId = getSectionPanelId(headerId, section.label);

                  return (
                    <div
                      key={section.label}
                      className={cn(
                        "flex items-center rounded-full transition",
                        section.featured
                          ? "bg-prilly-red text-white shadow-sm"
                          : "text-prilly-coal hover:bg-white",
                        isActive && !section.featured && "bg-white shadow-sm",
                      )}
                    >
                      <Link
                        to={section.href}
                        className={cn(
                          "focus-ring rounded-l-full px-4 py-2.5 text-sm font-semibold transition",
                          section.featured
                            ? "text-white hover:bg-prilly-red/92"
                            : "hover:text-prilly-red",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onMouseEnter={() => setDesktopOpen(section.label)}
                        onFocus={() => setDesktopOpen(section.label)}
                        onClick={() => setDesktopOpen(null)}
                      >
                        {section.label}
                      </Link>

                      <button
                        type="button"
                        className={cn(
                          "focus-ring inline-flex items-center justify-center rounded-r-full px-3 py-2.5 transition",
                          section.featured
                            ? "text-white hover:bg-prilly-red/92"
                            : "hover:text-prilly-red",
                        )}
                        aria-label={`Ouvrir le menu ${section.label}`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-haspopup="dialog"
                        onMouseEnter={() => setDesktopOpen(section.label)}
                        onFocus={() => setDesktopOpen(section.label)}
                        onClick={() =>
                          setDesktopOpen((current) => (current === section.label ? null : section.label))
                        }
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition",
                            isOpen && "rotate-180",
                            section.featured && "text-white",
                          )}
                        />
                      </button>
                    </div>
                  );
                })}
              </nav>

              <form
                role="search"
                aria-label="Recherche"
                onSubmit={submitDesktopSearch}
                className="flex w-[19rem] items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-2 shadow-sm"
              >
                <Search className="h-4 w-4 shrink-0 text-prilly-red" />
                <input
                  value={desktopQuery}
                  onChange={(event) => setDesktopQuery(event.target.value)}
                  placeholder="Rechercher une démarche ou un service"
                  aria-label="Rechercher une démarche ou un service"
                  className="min-w-0 flex-1 bg-transparent text-sm text-prilly-coal outline-none placeholder:text-prilly-coal/45"
                />
                <button
                  type="submit"
                  className="focus-ring inline-flex shrink-0 rounded-full bg-prilly-coal px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-prilly-coal/92"
                >
                  Rechercher
                </button>
              </form>
            </div>

            <AnimatePresence>
              {openSection ? (
                <motion.div
                  id={getSectionPanelId(headerId, openSection.label)}
                  role="region"
                  aria-label={openSection.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute left-0 right-0 top-full z-50 hidden lg:block"
                >
                  <div className="pt-3">
                    <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_28px_80px_rgba(31,34,35,0.14)]">
                      <div className="grid gap-0 xl:grid-cols-[17rem_1fr]">
                        <div className="border-b border-black/6 bg-[#f6f3ee] p-6 xl:border-b-0 xl:border-r">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">
                            {openSection.label}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-prilly-coal/70">
                            {openSection.description}
                          </p>
                          <div className="mt-6 grid gap-2">
                            {getSectionLinks(openSection).slice(0, 3).map((link) => (
                              <Link
                                key={`${openSection.label}-${link.label}-aside`}
                                to={link.href}
                                className="focus-ring rounded-[1.1rem] border border-black/6 bg-white px-4 py-3 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:bg-prilly-yellow/10"
                                onClick={() => setDesktopOpen(null)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                          <Link
                            to={openSection.href}
                            className="focus-ring mt-6 inline-flex rounded-full border border-black/8 px-4 py-2 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red"
                            onClick={() => setDesktopOpen(null)}
                          >
                            Voir la rubrique
                          </Link>
                        </div>

                        <div
                          className={cn(
                            "grid gap-6 p-6",
                            getMegaMenuColumns(openSection.groups.length),
                          )}
                        >
                          {openSection.groups.map((group) => (
                            <div key={`${openSection.label}-${group.title}`} className="space-y-3">
                              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/48">
                                {group.title}
                              </h3>
                              <div className="grid gap-2">
                                {group.links.map((link) => {
                                  const linkActive = isSectionActive(location.pathname, link.href);

                                  return (
                                    <Link
                                      key={`${group.title}-${link.label}-${link.href}`}
                                      to={link.href}
                                      className={cn(
                                        "focus-ring rounded-[1.2rem] border border-transparent px-4 py-3 transition hover:border-black/6 hover:bg-[#faf8f4]",
                                        linkActive && "border-black/6 bg-[#faf8f4]",
                                      )}
                                      onClick={() => setDesktopOpen(null)}
                                    >
                                      <div className="text-sm font-semibold text-prilly-coal">{link.label}</div>
                                      {link.description ? (
                                        <div className="mt-1 text-sm leading-5 text-prilly-coal/62">
                                          {link.description}
                                        </div>
                                      ) : null}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <Link
              to="/demarches"
              className="focus-ring inline-flex h-11 items-center justify-center rounded-full border border-black/8 bg-[#f7f5f1] px-4 text-sm font-semibold text-prilly-coal transition hover:bg-white hover:text-prilly-red"
            >
              Démarches
            </Link>
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-prilly-coal"
              aria-expanded={mobileOpen}
              aria-controls={`${headerId}-mobile-menu`}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id={`${headerId}-mobile-menu`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-black/6 bg-white/98 lg:hidden"
          >
            <div className="container py-4">
              <div className="space-y-4 rounded-[2rem] border border-black/6 bg-white p-4 shadow-[0_20px_54px_rgba(31,34,35,0.12)]">
                <div className="rounded-[1.5rem] bg-[#f7f5f1] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">
                    Recherche
                  </p>
                  <div className="mt-3">
                    <SearchBar
                      compact
                      placeholder="Déménagement, horaires, déchets..."
                      suggestions={searchSuggestions.slice(0, 4)}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {mobileShortcuts.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className={cn(
                        "focus-ring rounded-[1.4rem] border px-4 py-4 transition",
                        item.title === "Démarches"
                          ? "border-prilly-red/15 bg-prilly-red text-white"
                          : "border-black/8 bg-[#faf8f4] text-prilly-coal hover:bg-prilly-soft",
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div
                        className={cn(
                          "mt-1 text-sm leading-5",
                          item.title === "Démarches" ? "text-white/82" : "text-prilly-coal/68",
                        )}
                      >
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>

                <nav aria-label="Navigation mobile" className="space-y-3">
                  {navSections.map((section) => {
                    const isOpen = mobileSection === section.label;
                    const isActive = isSectionActive(location.pathname, section.href);

                    return (
                      <section
                        key={section.label}
                        className={cn(
                          "overflow-hidden rounded-[1.6rem] border transition",
                          isOpen || isActive ? "border-black/10 bg-[#faf8f4]" : "border-black/8 bg-white",
                        )}
                      >
                        <div className="flex items-center gap-3 px-4 py-4">
                          <Link
                            to={section.href}
                            className="focus-ring min-w-0 flex-1"
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => setMobileOpen(false)}
                          >
                            <div
                              className={cn(
                                "text-base font-semibold",
                                section.featured ? "text-prilly-red" : "text-prilly-coal",
                              )}
                            >
                              {section.label}
                            </div>
                            <div className="mt-1 text-sm leading-5 text-prilly-coal/64">
                              {section.description}
                            </div>
                          </Link>

                          <button
                            type="button"
                            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-prilly-coal"
                            aria-expanded={isOpen}
                            aria-controls={`${headerId}-${section.label}-mobile-panel`}
                            onClick={() =>
                              setMobileSection((current) =>
                                current === section.label ? null : section.label,
                              )
                            }
                          >
                            <ChevronDown className={cn("h-4 w-4 transition", isOpen && "rotate-180")} />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              id={`${headerId}-${section.label}-mobile-panel`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-5 border-t border-black/6 px-4 py-4">
                                {section.groups.map((group) => (
                                  <div key={`${section.label}-${group.title}`} className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/48">
                                      {group.title}
                                    </p>
                                    <div className="grid gap-2">
                                      {group.links.map((link) => (
                                        <Link
                                          key={`${group.title}-${link.label}-${link.href}`}
                                          to={link.href}
                                          className="focus-ring rounded-[1.1rem] bg-white px-4 py-3"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          <div className="text-sm font-semibold text-prilly-coal">
                                            {link.label}
                                          </div>
                                          {link.description ? (
                                            <div className="mt-1 text-sm leading-5 text-prilly-coal/62">
                                              {link.description}
                                            </div>
                                          ) : null}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </section>
                    );
                  })}
                </nav>

                <Link
                  to="/contact/urgences"
                  className="focus-ring flex items-center justify-between rounded-[1.5rem] border border-prilly-red/15 bg-prilly-red/5 px-4 py-4"
                  onClick={() => setMobileOpen(false)}
                >
                  <div>
                    <div className="text-base font-semibold text-prilly-coal">Urgences et contact</div>
                    <div className="mt-1 text-sm text-prilly-coal/68">
                      Numéros utiles, horaires et accueil communal.
                    </div>
                  </div>
                  <Phone className="h-5 w-5 text-prilly-red" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
