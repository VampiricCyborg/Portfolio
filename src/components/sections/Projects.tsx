import { projects } from "@/data/projects";
import { links } from "@/data/site";
import { ProjectCard } from "../ProjectCard";
import { LineReveal, Reveal } from "../Reveal";
import { Marked } from "../Scrawl";
import { Kicker, Panel } from "./Panel";

export function Projects() {
  return (
    <Panel id="projects" label="Projects" className="hz:flex hz:gap-6">
      <div className="hz:flex hz:w-[27rem] hz:shrink-0 hz:flex-col hz:pr-6">
        <Kicker n="02">Projects</Kicker>
        <h2 className="h2 mt-6 hz:text-[clamp(3rem,8.5vh,5.5rem)]">
          <LineReveal
            lines={[
              "Six things",
              "I built and",
              <Marked key="m" delay={0.8}>
                measured.
              </Marked>,
            ]}
          />
        </h2>
        <Reveal delay={0.2} className="mt-6 max-w-sm text-lg leading-snug text-ink/75 hz:mt-auto">
          Each one ships with a README that reports the numbers, including where they fell short.
          <span className="mt-6 hidden items-center gap-3 font-mono text-xs tracking-[0.25em] text-red uppercase hz:flex">
            Keep scrolling <span aria-hidden="true">→</span>
          </span>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 hz:mt-0 hz:flex hz:h-full">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-10 hz:mt-0 hz:flex hz:w-[16rem] hz:shrink-0 hz:items-center hz:justify-center">
        <a
          href={links.repos}
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight hz:flex-col hz:gap-5 hz:text-center hz:text-3xl"
        >
          <span className="grid size-16 place-items-center rounded-full border-2 border-ink text-2xl transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-red group-hover:bg-red group-hover:text-paper hz:size-28 hz:text-4xl">
            →
          </span>
          <span className="decoration-red decoration-2 underline-offset-4 group-hover:underline">More on GitHub →</span>
        </a>
      </div>
    </Panel>
  );
}
