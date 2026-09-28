"use client";

import { motion } from "motion/react";

const paths = {
  loop: {
    viewBox: "0 0 400 110",
    d: "M214 12 C 96 4, 10 24, 14 58 C 18 94, 124 106, 226 98 C 332 90, 396 70, 386 40 C 376 10, 286 0, 170 12",
  },
  underline: {
    viewBox: "0 0 400 26",
    d: "M4 18 C 60 6, 140 4, 220 10 S 330 22, 396 8",
  },
  arrow: {
    viewBox: "0 0 184 56",
    d: "M6 40 C 60 10, 120 8, 176 30 M150 12 L 178 30 L 152 48",
  },
  strike: {
    viewBox: "0 0 400 40",
    d: "M4 26 C 90 14, 180 30, 260 18 S 360 10, 396 20",
  },
} as const;

type Kind = keyof typeof paths;

/** A hand-drawn marker stroke that draws itself in when it scrolls into view. */
export function Scrawl({
  kind,
  className = "",
  delay = 0.2,
  width,
}: {
  kind: Kind;
  className?: string;
  delay?: number;
  /** Fixed stroke width; by default it is thinner on small screens. */
  width?: number;
}) {
  const { viewBox, d } = paths[kind];
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute overflow-visible text-red ${className}`}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={width ?? 5}
        className={width ? undefined : "[stroke-width:3px] md:[stroke-width:5px]"}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ pathLength: { duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.01, delay } }}
      />
    </svg>
  );
}

/** Wraps words in a marker loop / underline. */
export function Marked({
  children,
  kind = "underline",
  delay,
  className = "",
}: {
  children: React.ReactNode;
  kind?: "loop" | "underline" | "strike";
  delay?: number;
  className?: string;
}) {
  const pos =
    kind === "loop"
      ? "-inset-x-[6%] -inset-y-[18%] h-[136%] w-[112%]"
      : kind === "strike"
        ? "left-0 top-[45%] h-[0.3em] w-full"
        : "-bottom-[0.14em] left-0 h-[0.22em] w-full";
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      {children}
      <Scrawl kind={kind} delay={delay} className={pos} />
    </span>
  );
}
