import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element the first time it scrolls into view.
 * Returns a ref plus the props to spread onto the element.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    props: {
      "data-visible": visible ? "true" : "false",
      style: { transitionDelay: `${delayMs}ms` },
    } as const,
  };
}
