import type Lenis from "lenis";

let lenis: Lenis | null = null;
// Set by <HorizontalTrack> while the sideways layout is active: maps a section id to the
// window scrollY that brings it into view.
let resolver: ((id: string) => number | null) | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function setSectionResolver(fn: typeof resolver) {
  resolver = fn;
}

export function scrollToSection(id: string, opts: { immediate?: boolean } = {}) {
  let y = resolver?.(id) ?? null;
  if (y === null) {
    const el = document.getElementById(id);
    if (!el) return;
    y = el.getBoundingClientRect().top + window.scrollY;
  }
  scrollToY(y, opts);
  history.replaceState(null, "", id === "hero" ? location.pathname : `#${id}`);
}

export function scrollToY(y: number, opts: { immediate?: boolean } = {}) {
  if (lenis) {
    lenis.scrollTo(y, { immediate: opts.immediate, duration: 1.4 });
  } else {
    window.scrollTo({ top: y, behavior: opts.immediate ? "instant" : "smooth" });
  }
}
