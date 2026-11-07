import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-24% 0px -58% 0px",
        threshold: [0, 0.15, 0.35, 0.6]
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionIds.join("|")]);

  return active;
}
