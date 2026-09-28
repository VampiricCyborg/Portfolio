import { tapeWords } from "@/data/site";

/** Hazard-tape marquee between sections. Horizontal on mobile, vertical on the sideways track. */
export function Tape({ tone = "red", reverse = false }: { tone?: "red" | "ink"; reverse?: boolean }) {
  const colors = tone === "red" ? "bg-red text-paper" : "bg-ink text-paper";
  const items = [...tapeWords, ...tapeWords];
  return (
    <div
      aria-hidden="true"
      className="relative z-10 shrink-0 overflow-hidden py-6 hz:flex hz:h-full hz:w-28 hz:items-center hz:justify-center hz:overflow-visible hz:py-0"
    >
      <div
        className={`${colors} -mx-4 -rotate-2 border-y-2 border-ink py-3 hz:mx-0 hz:-my-8 hz:h-[calc(100%+4rem)] hz:w-20 hz:rotate-[1.5deg] hz:overflow-hidden hz:border-x-2 hz:border-y-0 hz:py-0`}
      >
        <ul
          className={`flex w-max animate-marquee gap-8 pr-8 hz:pr-0 hz:pb-10 font-mono text-sm font-bold tracking-[0.2em] whitespace-nowrap uppercase hz:h-max hz:w-full hz:animate-marquee-y hz:flex-col hz:items-center hz:gap-10 ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {items.map((w, i) => (
            <li key={i} className="flex items-center gap-8 hz:flex-col hz:gap-10 hz:[writing-mode:vertical-rl]">
              {w}
              <span className="text-lg">✺</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
