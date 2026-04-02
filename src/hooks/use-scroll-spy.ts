import { useEffect, useState } from "react";

type UseScrollSpyOptions = {
  offset?: number;
};

export function useScrollSpy(sectionIds: string[], { offset = 152 }: UseScrollSpyOptions = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [sectionIds]);

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return undefined;

    let frame = 0;

    const computeActiveSection = () => {
      const activationLine = offset + Math.min(window.innerHeight * 0.18, 140);
      const documentBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - documentBottom < 40) {
        setActiveSection(elements[elements.length - 1].id);
        return;
      }

      const firstRect = elements[0].getBoundingClientRect();
      if (firstRect.top > activationLine) {
        setActiveSection(elements[0].id);
        return;
      }

      let current = elements[0].id;

      for (const element of elements) {
        const rect = element.getBoundingClientRect();
        const topReached = rect.top <= activationLine;
        const stillReading = rect.bottom > offset + 24;

        if (topReached && stillReading) {
          current = element.id;
        } else if (rect.top > activationLine) {
          break;
        }
      }

      setActiveSection(current);
    };

    const requestCompute = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(computeActiveSection);
    };

    const observer = new IntersectionObserver(requestCompute, {
      rootMargin: `-${offset}px 0px -65% 0px`,
      threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
    });

    elements.forEach((element) => observer.observe(element));

    requestCompute();
    window.addEventListener("scroll", requestCompute, { passive: true });
    window.addEventListener("resize", requestCompute);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", requestCompute);
      window.removeEventListener("resize", requestCompute);
    };
  }, [offset, sectionIds]);

  return activeSection;
}
