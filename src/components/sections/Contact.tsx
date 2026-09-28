import { contacts } from "@/data/site";
import { LineReveal, Reveal } from "../Reveal";
import { Marked } from "../Scrawl";
import { Kicker, Panel } from "./Panel";

export function Contact() {
  return (
    <Panel id="contact" label="Contact" className="flex flex-col bg-ink text-paper hz:w-screen">
      <Kicker n="06">
        <span className="text-paper/60">Contact</span>
      </Kicker>

      <div className="mt-8 grid gap-12 hz:my-auto hz:grid-cols-[1.25fr_1fr] hz:items-end hz:gap-16">
        <div>
          <h2 className="text-[13vw] leading-[0.88] font-black tracking-[-0.05em] md:text-[clamp(4rem,9vw,8rem)] hz:text-[clamp(4rem,13vh,9.5rem)]">
            <LineReveal
              lines={[
                "Let's talk",
                <Marked key="m" kind="loop" delay={0.9}>
                  <span className="text-red">shop.</span>
                </Marked>,
              ]}
            />
          </h2>
          <Reveal delay={0.2} as="p" className="mt-8 max-w-xl text-lg leading-snug text-paper/75 hz:text-[clamp(1rem,2.1vh,1.2rem)]">
            I like talking about inference, retrieval, evals and agent tooling. If you&apos;re working on the layer under the model, I&apos;d like to hear about it.
          </Reveal>
        </div>

        <ul className="border-t-2 border-paper/20">
          {contacts.map((c, i) => (
            <Reveal as="li" key={c.href} delay={0.1 + i * 0.06}>
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                className="group relative flex items-center justify-between gap-4 overflow-hidden border-b-2 border-paper/20 py-4 text-[1.05rem] font-semibold break-all transition-colors duration-300 hover:text-ink md:text-xl hz:py-[clamp(0.6rem,1.6vh,1rem)]"
              >
                <span aria-hidden="true" className="absolute inset-0 -z-0 origin-left scale-x-0 bg-red transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
                <span className="relative">{c.label}</span>
                <span aria-hidden="true" className="relative shrink-0 transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t-2 border-paper/20 pt-5 font-mono text-xs tracking-wider text-paper/55 hz:mt-8">
        <span>Designed &amp; built by Madhav M S · © 2026</span>
        <a href="#hero" className="inline-flex items-center gap-2 text-paper hover:text-red">
          Back to start <span aria-hidden="true">↺</span>
        </a>
      </footer>
    </Panel>
  );
}
