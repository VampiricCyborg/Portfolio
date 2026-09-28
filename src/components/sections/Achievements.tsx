import { hackathons, links } from "@/data/site";
import { LineReveal, Reveal } from "../Reveal";
import { Kicker, Panel } from "./Panel";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs font-bold tracking-[0.25em] text-red uppercase">{children}</p>;
}

export function Achievements() {
  return (
    <Panel id="achievements" label="Achievements and community" className="hz:flex hz:gap-12">
      <div className="hz:w-[20rem] hz:shrink-0">
        <Kicker n="05">Achievements &amp; Community</Kicker>
        <h2 className="h2 mt-6 hz:text-[clamp(3rem,8.5vh,5.5rem)]">
          <LineReveal lines={["Off the", "clock."]} />
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 hz:mt-0 hz:flex hz:gap-10 hz:self-center">
        <div className="flex flex-col gap-8 hz:w-[26rem]">
          <Reveal className="flex flex-col gap-3">
            <Label>Achievements</Label>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener"
              className="group relative block overflow-hidden border-2 border-ink bg-red p-6 text-paper shadow-[8px_8px_0_var(--color-ink)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span aria-hidden="true" className="absolute -right-4 -bottom-10 text-[9rem] leading-none opacity-20 transition-transform duration-700 group-hover:rotate-12">
                ♞
              </span>
              <b className="block text-5xl leading-none font-black tracking-tight hz:text-[clamp(2.5rem,6vh,3.5rem)]">
                LeetCode Knight
              </b>
              <span className="mt-3 block font-medium">800+ problems solved, 1850+ contest rating →</span>
            </a>
          </Reveal>
          <Reveal delay={0.1} as="p" className="border-l-4 border-ink pl-4 text-lg leading-snug font-semibold">
            20+ public GitHub repositories spanning AI/ML tooling and backend infrastructure
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 hz:w-[26rem]">
          <Reveal delay={0.1} className="flex flex-col gap-3">
            <Label>Writing</Label>
            <a
              href={links.sluicePost}
              target="_blank"
              rel="noopener"
              className="group block border-2 border-ink p-6 transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              <i className="block text-2xl leading-tight font-bold tracking-tight">
                Building Sluice: QoS-Aware Capacity Governance for Self-Hosted LLM Inference
              </i>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-red">dev.to <span aria-hidden="true">↗</span></span>
            </a>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-3">
            <Label>Clubs</Label>
            <p className="text-[1rem] leading-relaxed">
              <b>Member, Quant Club</b>, Chennai Institute of Technology · Feb 2026 – Present. Analyze market data for statistical trading-strategy design.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex flex-col gap-3 md:col-span-2 hz:w-[22rem]">
          <Label>Hackathons</Label>
          <p className="text-xl leading-snug font-bold tracking-tight">
            {hackathons.map((h, i) => (
              <span key={h}>
                {i > 0 && <span className="mx-2 text-red">·</span>}
                {h}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}
