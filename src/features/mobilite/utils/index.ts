export function getLinkProps(href: string) {
  const isExternal = href.startsWith("http") || href.startsWith("/docs/");

  return {
    href,
    target: isExternal ? "_blank" : undefined,
    rel: isExternal ? "noreferrer" : undefined,
  };
}
