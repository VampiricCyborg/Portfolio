import { skills } from "@/data/site";
import { LineReveal, Reveal } from "../Reveal";
import { Marked } from "../Scrawl";
import { Kicker, Panel } from "./Panel";

// Split on commas that aren't inside parentheses, so "AWS (EC2, S3)" stays one chip.
function splitItems(items: string) {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of items) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

export function Skills() {
  return (
    <Panel id="skills" label="Skills" className="hz:flex hz:gap-12">
      <div className="hz:w-[20rem] hz:shrink-0">
        <Kicker n="04">Skills</Kicker>
        <h2 className="h2 mt-6 hz:text-[clamp(3rem,8.5vh,5.5rem)]">
          <LineReveal
            lines={[
              "The",
              <Marked key="m" delay={0.7}>
                toolbox.
              </Marked>,
            ]}
          />
        </h2>
      </div>

      <div className="mt-12 grid border-t-2 border-l-2 border-ink md:grid-cols-2 hz:mt-0 hz:w-[clamp(56rem,68vw,74rem)] hz:grid-cols-3 hz:grid-rows-2 hz:self-stretch">
        {skills.map((s, i) => (
          <Reveal
            key={s.group}
            delay={i * 0.06}
            className="group relative flex flex-col border-r-2 border-b-2 border-ink p-6 transition-colors duration-300 hover:bg-ink hover:text-paper hz:p-5"
          >
            <h3 className="mt-2 text-[1.6rem] leading-none font-extrabold tracking-tight hz:text-[clamp(1.3rem,3.2vh,1.9rem)]">
              {s.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {splitItems(s.items).map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-current/30 px-2.5 py-1 text-[0.8rem] leading-none font-medium transition-colors group-hover:border-paper/30 hover:!border-red hover:bg-red hover:text-paper hz:text-[clamp(0.7rem,1.45vh,0.8rem)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <span
              aria-hidden="true"
              className="mt-auto self-end pt-4 font-mono text-5xl leading-none font-bold text-transparent transition-colors [-webkit-text-stroke:1.5px_var(--color-red)] group-hover:text-red hz:text-[clamp(2.5rem,7vh,4rem)]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
