import { aboutParagraphs, now } from "@/data/site";
import { LineReveal, Reveal } from "../Reveal";
import { Marked } from "../Scrawl";
import { Kicker, Panel } from "./Panel";

export function About() {
  return (
    <Panel id="about" label="About" className="hz:flex hz:w-[min(118rem,125vw)] hz:gap-16">
      <div className="hz:flex hz:w-[38rem] hz:shrink-0 hz:flex-col">
        <Kicker n="01">About</Kicker>
        <h2 className="h2 mt-6 hz:text-[clamp(3rem,8.5vh,6rem)]">
          <LineReveal
            lines={[
              "Systems",
              "first, then",
              <Marked key="m" delay={0.8}>
                intelligence.
              </Marked>,
            ]}
          />
        </h2>

        <Reveal delay={0.2} className="mt-10 hz:mt-auto">
          <aside aria-label="Now" className="relative border-2 border-ink bg-ink p-6 text-paper shadow-[8px_8px_0_var(--color-red)]">
            <p className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.25em] text-red uppercase">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-red" />
                <span className="relative size-2 rounded-full bg-red" />
              </span>
              Now
            </p>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-[0.95rem]">
              {now.map((n) => (
                <div key={n.label} className="contents">
                  <dt className="font-mono text-xs leading-6 tracking-wider text-paper/55 uppercase">{n.label}</dt>
                  <dd className="leading-snug font-medium">{n.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-x-10 hz:mt-0 hz:max-w-[62rem] hz:flex-1 hz:self-center hz:gap-x-14">
        {aboutParagraphs.map((p, i) => (
          <Reveal
            key={i}
            as="p"
            delay={0.1 + i * 0.08}
            className={
              i === 0
                ? "text-2xl leading-tight font-bold tracking-tight md:col-span-2 hz:text-[clamp(1.6rem,4vh,2.6rem)]"
                : "text-[1.05rem] leading-relaxed text-ink/80 hz:text-[clamp(0.95rem,2vh,1.15rem)]"
            }
          >
            {i === 0 ? (
              <>
                <span className="mr-3 font-mono text-sm font-bold text-red">→</span>
                {p}
              </>
            ) : (
              p
            )}
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
