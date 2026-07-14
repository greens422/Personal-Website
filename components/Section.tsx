import type { Section as SectionType } from "@/lib/content";
import { rich } from "@/lib/rich";

/**
 * One clean column of prose, with the second voice running alongside it.
 *
 * The mechanism is a two-column grid where every block emits BOTH cells — the
 * paragraph, then either its margin note or an empty placeholder. Always emitting
 * the second cell is what keeps auto-placement honest: skip it and the next
 * paragraph slides up into the margin column.
 *
 * The payoff is that the same DOM order works at both sizes. On desktop the note
 * sits in the margin beside the line it belongs to. On mobile the grid collapses
 * to one column and that identical markup reads as an indented aside directly
 * under its paragraph — not a footnote you have to go and tap for. Same reading
 * experience, narrower.
 */
export default function Section({ section }: { section: SectionType }) {
  const { heading, blocks, note, lead } = section;

  return (
    <section
      id={section.id}
      className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 gap-y-6 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,36rem)_minmax(0,15rem)]"
    >
      <h2
        className={
          lead
            ? "settle mb-1 font-display text-2xl font-medium tracking-[-0.01em] sm:text-3xl lg:col-span-2"
            : "settle mb-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted lg:col-span-2"
        }
      >
        {heading}
      </h2>

      {blocks.map((block, i) => (
        <div key={i} className="contents">
          <p className="settle max-w-[62ch] text-lg leading-[1.6] sm:text-xl sm:leading-[1.65]">
            {rich(block.p)}
          </p>

          {note?.anchor === i ? (
            <aside
              className="note pl-6 font-display text-[0.9375rem] leading-relaxed text-muted lg:pl-0 lg:pt-1"
              // The margin voice is commentary, not the document. It shouldn't
              // interrupt the main column when a screen reader runs the page.
              aria-label="Aside"
            >
              {note.text}
            </aside>
          ) : (
            // The empty margin cell exists only to keep two-column auto-placement
            // honest — without it the next paragraph slides up into the margin.
            // It must NOT exist at one column, where it would otherwise land as a
            // phantom grid row and add a second gap between every paragraph.
            <div className="hidden lg:block" aria-hidden="true" />
          )}
        </div>
      ))}
    </section>
  );
}
