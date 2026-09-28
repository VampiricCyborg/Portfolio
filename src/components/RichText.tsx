import { Fragment } from "react";

/** Renders `code` and *emphasis* inside plain data strings. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-ink/[0.07] px-1 py-px font-mono text-[0.92em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
