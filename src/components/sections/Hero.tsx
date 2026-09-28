import { links } from "@/data/site";
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
            Building the layer under the model ✺ 2026 ✺
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

      <Reveal y={12}>
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

      <Reveal delay={0.35} className="mt-10 hz:mt-0">
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

      <div className="pointer-events-none absolute right-12 bottom-5 hidden items-center gap-2 font-mono text-[0.65rem] tracking-[0.3em] text-dim uppercase hz:flex" aria-hidden="true">
        Scroll
        <span className="relative h-5 w-16">
          <Scrawl kind="arrow" className="inset-0 size-full" width={3} delay={1.6} />
        </span>
      </div>
    </Panel>
  );
}
