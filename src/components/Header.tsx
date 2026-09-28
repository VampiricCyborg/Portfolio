"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { links, nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  // Track which section is under the middle of the screen (works both vertically and sideways).
  useEffect(() => {
    const ids = ["hero", ...nav.map((n) => n.id)];
    let raf = 0;
    const tick = () => {
      raf = 0;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      for (const id of ids) {
        const r = document.getElementById(id)?.getBoundingClientRect();
        if (r && r.left <= cx && r.right >= cx && r.top <= cy && r.bottom >= cy) {
          setActive(id);
          break;
        }
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-(--header-h) items-center justify-between gap-6 px-5 md:px-10">
        <a
          href="#hero"
          aria-label="Madhav M S, back to top"
          className="group relative rounded-full border-2 border-ink bg-paper px-3.5 py-0.5 text-2xl font-black tracking-tighter"
        >
          M<span className="inline-block text-red transition-transform duration-500 group-hover:rotate-[200deg]">/</span>S
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-1 rounded-full border-2 border-ink bg-paper/85 p-1 backdrop-blur-md lg:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className="relative isolate rounded-full px-4 py-1.5 text-sm font-semibold transition-colors aria-[current]:text-paper"
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn btn-sm btn-red" href={links.resume} target="_blank" rel="noopener">
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative grid size-10 place-items-center rounded-full border-2 border-ink bg-paper lg:hidden"
          >
            <span className={`absolute h-0.5 w-4 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute h-0.5 w-4 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Sections"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pt-24 pb-10 text-paper lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.25rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.25rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.25rem)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
          >
            {nav.map((n, i) => (
              <motion.a
                key={n.id}
                href={`#${n.id}`}
                className="flex items-baseline gap-4 border-b border-paper/20 py-3 text-5xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-mono text-xs text-red">0{i + 1}</span>
                {n.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <div aria-hidden="true" className="fixed inset-x-0 bottom-0 z-50 h-1.5 bg-mist/40">
        <motion.div className="h-full origin-left bg-red" style={{ scaleX: progress }} />
      </div>
    </>
  );
}
