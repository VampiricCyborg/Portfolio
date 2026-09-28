"use client";

import { motion, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { scrollToSection, scrollToY, setSectionResolver } from "@/lib/scroll";

// Must match the `hz` custom variant in globals.css.
const HZ_QUERY =
  "(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * On wide screens the sections sit side by side and vertical scrolling moves the row
 * sideways, one pixel of scroll per pixel of travel. The wrapper is made exactly tall enough
 * for that, and a sticky viewport holds the row in place while it slides.
 */
export function HorizontalTrack({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const geo = useRef({ top: 0, distance: 0, active: false });
  const [hz, setHz] = useState(false);

  const x = useMotionValue(0);
  const sync = useCallback(() => {
    const { top, distance, active } = geo.current;
    x.set(active ? -Math.min(Math.max(window.scrollY - top, 0), distance) : 0);
  }, [x]);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", sync);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const root = document.documentElement;
    const active = window.matchMedia(HZ_QUERY).matches && !root.classList.contains("no-hz");

    const off = () => {
      wrap.style.height = "";
      geo.current.active = false;
      setHz(false);
      sync();
    };

    if (!active) return off();

    // Fall back to the vertical layout if any panel's content is taller than the screen.
    const panels = track.querySelectorAll<HTMLElement>("[data-panel]");
    for (const p of panels) {
      if (p.scrollHeight > p.clientHeight + 4) {
        root.classList.add("no-hz");
        return off();
      }
    }

    const distance = Math.max(track.scrollWidth - window.innerWidth, 0);
    wrap.style.height = `${distance + window.innerHeight}px`;
    geo.current = { top: wrap.getBoundingClientRect().top + window.scrollY, distance, active: true };
    setHz(true);
    sync();
  }, [sync]);

  useIsoLayoutEffect(() => {
    measure();
    const onResize = () => {
      // Give the sideways layout another chance after a resize; measure() re-checks overflow.
      document.documentElement.classList.remove("no-hz");
      measure();
    };
    const ro = new ResizeObserver(() => measure());
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  // Anchor links: in sideways mode a section's scroll target is its horizontal offset.
  useEffect(() => {
    if (!hz) {
      setSectionResolver(null);
      return;
    }
    setSectionResolver((id) => {
      const el = document.getElementById(id);
      const panel = el?.closest<HTMLElement>("[data-panel]");
      if (!panel) return null;
      const { top, distance } = geo.current;
      return top + Math.min(panel.offsetLeft, distance);
    });
    return () => setSectionResolver(null);
  }, [hz]);

  // Keyboard users: slide the focused element into view (1px of scroll = 1px sideways).
  useEffect(() => {
    if (!hz) return;
    const track = trackRef.current!;
    const onFocus = (e: FocusEvent) => {
      const r = (e.target as HTMLElement).getBoundingClientRect();
      const margin = 48;
      if (r.left >= margin && r.right <= window.innerWidth - margin) return;
      const delta = r.left < margin ? r.left - margin : r.right - window.innerWidth + margin;
      scrollToY(window.scrollY + delta, { immediate: true });
    };
    track.addEventListener("focusin", onFocus);
    return () => track.removeEventListener("focusin", onFocus);
  }, [hz]);

  // Honour a #hash on first load once the layout is known.
  const hashDone = useRef(false);
  useEffect(() => {
    if (hashDone.current) return;
    hashDone.current = true;
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && document.getElementById(id)) {
      requestAnimationFrame(() => scrollToSection(id, { immediate: true }));
    }
  }, [hz]);

  return (
    <div ref={wrapRef} className="relative">
      <div className="hz:sticky hz:top-0 hz:h-dvh hz:overflow-clip">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex flex-col hz:h-full hz:w-max hz:flex-row hz:will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
