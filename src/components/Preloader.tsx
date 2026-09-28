"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const KEY = "ms-preloaded";

// Runs before first paint (see layout.tsx) so returning visitors never see the overlay.
export const preloaderSkipScript = `try{if(sessionStorage.getItem("${KEY}")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("pre-skip")}catch(e){}`;

/** Short counter intro on the first visit of a session; covers the layout settling in. */
export function Preloader() {
  const [show, setShow] = useState(true);
  const count = useMotionValue(0);
  const label = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));

  useEffect(() => {
    if (document.documentElement.classList.contains("pre-skip")) return;
    document.documentElement.style.overflow = "hidden";
    const controls = animate(count, 100, {
      duration: 1.3,
      ease: [0.7, 0, 0.2, 1],
      onComplete: () => {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        setShow(false);
      },
    });
    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
    };
  }, [count]);

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = "")}>
      {show && (
        <motion.div
          key="pre"
          aria-hidden="true"
          data-preloader
          className="[.pre-skip_&]:hidden fixed inset-0 z-[200] flex flex-col justify-between bg-ink p-6 text-paper md:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between font-mono text-xs tracking-[0.2em] uppercase">
            <span>Madhav M S</span>
            <span>Portfolio · 2026</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-xs text-lg leading-tight font-semibold md:text-2xl">
              Loading the layer
              <br />
              under the model<span className="animate-blink text-red">_</span>
            </p>
            <motion.span className="font-mono text-[22vw] leading-[0.8] font-bold tracking-tighter text-red md:text-[14vw]">
              {label}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
