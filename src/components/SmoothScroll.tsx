"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { scrollToSection, setLenis } from "@/lib/scroll";

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const instance = reduce ? null : new Lenis({ autoRaf: true, lerp: 0.09, wheelMultiplier: 1 });
    setLenis(instance);

    // Every in-page anchor goes through scrollToSection so it works in the sideways layout too.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToSection(id);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      instance?.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
