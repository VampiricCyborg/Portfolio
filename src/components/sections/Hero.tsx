import { heroStats, links } from "@/data/site";
import { LineReveal, Reveal } from "../Reveal";
import { Marked, Scrawl } from "../Scrawl";
import { Panel } from "./Panel";

function Sticker() {
  return (
    <div className="pointer-events-none absolute top-28 right-10 hidden size-36 md:block hz:top-[calc(var(--header-h)+1.5rem)] hz:right-12 hz:size-[17vh]" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="size-full animate-spin-slow">
        <defs>
          <path id="sticker-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" className="fill-red" />
        <text className="fill-paper font-mono text-[14px] font-bold uppercase">
          <textPath href="#sticker-circle" textLength="486" lengthAdjust="spacing">
            Open to internships ✺ AI/ML infra ✺ 2026 ✺
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center text-4xl font-black text-paper md:text-5xl hz:text-[5vh]">✺</span>
    </div>
  );
}

export function Hero() {
  return (
    <Panel id="hero" label="Intro" className="flex min-h-svh flex-col pt-28 hz:w-screen hz:min-h-0">
      <Sticker />

      <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3" y={12}>
        <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold">
          <span className="relative flex size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-red opacity-75" />
            <span className="relative size-2.5 rounded-full bg-red" />
          </span>
          Open to AI/ML infrastructure internships
        </p>
        <p className="font-mono text-xs leading-relaxed tracking-wide text-dim">
          <strong className="text-sm tracking-[0.25em] text-ink">MADHAV M S</strong>
          <br />
          AI Infrastructure Engineer · CS @ CIT · Data Science @ IIT Madras
        </p>
      </Reveal>

      <h1 className="mt-10 max-w-[14ch] text-[10.5vw] leading-[0.88] font-black tracking-[-0.055em] md:text-[clamp(5rem,11vw,9.5rem)] hz:my-auto hz:max-w-none hz:text-[clamp(4rem,14.5vh,11rem)]">
        <LineReveal
          delay={0.15}
          lines={[
            "I build the layer",
            <Marked key="m" kind="loop" delay={1}>
              <span className="text-red">under the model.</span>
            </Marked>,
          ]}
        />
      </h1>

      <div className="mt-10 grid gap-8 hz:mt-0 hz:grid-cols-[minmax(0,34rem)_1fr] hz:items-end hz:gap-12">
        <Reveal delay={0.35}>
          <p className="max-w-[34rem] text-lg leading-snug font-medium text-ink/80 hz:text-[clamp(1rem,2.1vh,1.2rem)]">
            Capacity governance for LLM inference, retrieval that cites its sources, vector search from the paper up, and memory for coding agents. I measure everything I build and publish the numbers, including the ones that didn&apos;t hold up.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-red" href="#projects">
              See the work <span aria-hidden="true">→</span>
            </a>
            <a className="btn" href={links.resume} target="_blank" rel="noopener">
              Resume
            </a>
            <a className="btn" href={links.github} target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 border-t-2 border-ink md:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal
              as="li"
              key={s.value}
              delay={0.45 + i * 0.07}
              className="border-ink/15 py-4 pr-4 max-md:[&:nth-child(-n+2)]:border-b md:border-r md:pl-4 md:first:pl-0 md:last:border-r-0"
            >
              <b className="block text-[clamp(1.6rem,3vw,2.4rem)] leading-none font-extrabold tracking-tight whitespace-nowrap hz:text-[clamp(1.5rem,4.2vh,2.5rem)]">
                {s.value}
              </b>
              <span className="mt-2 block text-[0.8rem] leading-snug text-dim">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute right-12 bottom-5 hidden items-center gap-2 font-mono text-[0.65rem] tracking-[0.3em] text-dim uppercase hz:flex" aria-hidden="true">
        Scroll
        <span className="relative h-5 w-16">
          <Scrawl kind="arrow" className="inset-0 size-full" width={3} delay={1.6} />
        </span>
      </div>
    </Panel>
  );
}
