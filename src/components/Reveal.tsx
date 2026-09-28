"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useState } from "react";

/** Fades and lifts its children in the first time they enter the viewport. */
export function Reveal({
  delay = 0,
  y = 28,
  className,
  children,
  as = "div",
  ...rest
}: {
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article" | "p";
} & HTMLMotionProps<"div">) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Splits a heading into lines that slide up from behind a mask. */
export function LineReveal({
  lines,
  className = "",
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <MaskedLine key={i} delay={delay + i * 0.09}>
          {line}
        </MaskedLine>
      ))}
    </span>
  );
}

// The mask is dropped once the line is in, so marker strokes can spill past the text.
function MaskedLine({ delay, children }: { delay: number; children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <span className={`-mb-[0.08em] block pb-[0.08em] ${done ? "" : "overflow-hidden"}`}>
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => setDone(true)}
      >
        {children}
      </motion.span>
    </span>
  );
}
