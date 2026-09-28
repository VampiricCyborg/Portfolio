"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { RichText } from "./RichText";

const linkLabels = [
  ["github", "GitHub"],
  ["live", "Live"],
  ["writeup", "Writeup"],
] as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [name, ...rest] = project.title.split(": ");
  const subtitle = rest.join(": ");
  const inDev = project.status === "In development";

  // Spotlight follows the pointer across the card.
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 40, rotate: index % 2 ? 1.2 : -1.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col border-2 border-ink bg-paper p-6 transition-[box-shadow,translate] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-red)] hz:h-full hz:w-[clamp(25rem,31vw,32rem)] hz:shrink-0 hz:p-5 2xl:hz:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(228,18,57,0.08), transparent 60%)",
        }}
      />

      <div className="relative flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-[0.2em] text-dim">
          {String(index + 1).padStart(2, "0")} / 06
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-0.5 font-mono text-[0.68rem] font-bold tracking-wider uppercase ${
            inDev ? "border-red bg-red text-paper" : "border-ink text-ink"
          }`}
        >
          <span className={`size-1.5 rounded-full ${inDev ? "animate-pulse bg-paper" : "bg-red"}`} />
          {project.status}
        </span>
      </div>

      <h3 className="relative mt-4">
        <span className="block text-[2.4rem] leading-[0.95] font-extrabold tracking-[-0.035em] transition-colors group-hover:text-red hz:text-[clamp(2rem,4.6vh,2.75rem)]">
          {name}
        </span>
        {subtitle && (
          <span className="mt-1.5 block text-[0.95rem] leading-snug font-semibold text-balance">{subtitle}</span>
        )}
      </h3>

      <p className="relative mt-3 border-l-2 border-ink pl-3 text-[0.95rem] leading-snug font-medium italic">
        <RichText text={project.hook} />
      </p>

      <p className="relative mt-3 text-[0.9rem] leading-relaxed text-dim hz:text-[clamp(0.8rem,1.55vh,0.9rem)] hz:leading-[1.5]">
        <RichText text={project.description} />
      </p>

      <div className="relative mt-4 border-2 border-red bg-red/[0.04] p-3 hz:mt-auto">
        <p className="font-mono text-[0.62rem] font-bold tracking-[0.2em] text-red uppercase">Headline metric</p>
        <p className="mt-1 font-mono text-[0.8rem] leading-snug font-medium hz:text-[clamp(0.72rem,1.4vh,0.8rem)]">
          <RichText text={project.metric} />
        </p>
        {project.metricNote && <p className="mt-1 text-[0.72rem] text-dim italic">{project.metricNote}</p>}
      </div>

      <ul className="relative mt-3 flex flex-wrap gap-1.5" aria-label="Tech">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full border border-ink/25 px-2 py-0.5 font-mono text-[0.66rem] text-ink/80">
            {t}
          </li>
        ))}
      </ul>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {linkLabels.map(([key, label]) => {
          const href = project.links[key];
          if (!href) return null;
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener"
              className={`btn btn-sm ${key === "github" ? "" : "btn-red"}`}
              aria-label={`${label}: ${name}`}
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          );
        })}
      </div>
    </motion.article>
  );
}
