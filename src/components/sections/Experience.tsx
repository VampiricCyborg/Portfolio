import { education, experience, type Role } from "@/data/site";
import { LineReveal, Reveal } from "../Reveal";
import { Kicker, Panel } from "./Panel";

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <Reveal as="article" delay={index * 0.08} className="relative border-t-2 border-ink pt-5">
      <span className="absolute -top-[7px] left-0 size-3 rounded-full bg-red" aria-hidden="true" />
      <p className="font-mono text-xs font-bold tracking-[0.18em] text-red uppercase">{role.dates}</p>
      <h3 className="mt-3 text-[1.7rem] leading-[1.05] font-extrabold tracking-tight hz:text-[clamp(1.4rem,3.2vh,1.9rem)]">
        {role.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-dim">{role.org}</p>
      <ul className="mt-4 space-y-3">
        {role.bullets.map((b) => (
          <li
            key={b}
            className="relative pl-5 text-[0.93rem] leading-relaxed text-ink/80 before:absolute before:top-[0.7em] before:left-0 before:h-0.5 before:w-2.5 before:bg-ink hz:text-[clamp(0.8rem,1.65vh,0.93rem)] hz:leading-normal"
          >
            {b}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Experience() {
  return (
    <Panel id="experience" label="Experience and education" className="hz:flex hz:gap-12">
      <div className="hz:w-[20rem] hz:shrink-0">
        <Kicker n="03">Experience &amp; Education</Kicker>
        <h2 className="h2 mt-6 hz:text-[clamp(3rem,8.5vh,5.5rem)]">
          <LineReveal lines={["Where", "I've", "shipped."]} />
        </h2>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2 hz:mt-0 hz:flex hz:gap-12 hz:self-center">
        {experience.slice(0, 2).map((r, i) => (
          <div key={r.title} className="hz:w-[clamp(22rem,27vw,27rem)]">
            <RoleCard role={r} index={i} />
          </div>
        ))}

        <div className="flex flex-col gap-10 hz:w-[clamp(22rem,27vw,27rem)]">
          <RoleCard role={experience[2]} index={2} />

          <Reveal delay={0.3} className="border-2 border-ink p-5">
            <p className="font-mono text-xs font-bold tracking-[0.25em] text-red uppercase">Education</p>
            <ul className="mt-3 divide-y-2 divide-ink/10">
              {education.map((e) => (
                <li key={e.degree} className="py-3 first:pt-1 last:pb-0">
                  <h3 className="text-lg leading-tight font-extrabold tracking-tight">{e.degree}</h3>
                  <p className="mt-1 text-sm text-dim">{e.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Panel>
  );
}
