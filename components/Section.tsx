import type { Section as SectionType } from "@/lib/content";
import { rich } from "@/lib/rich";

/**
 * One clean column of prose, with the second voice running alongside it.
 *
 * The mechanism is a two-column grid where every block emits BOTH cells: the
 * paragraph, then either its margin note or an empty placeholder. Always emitting
 * the second cell is what keeps auto-placement honest. Skip it and the next
 * paragraph slides up into the margin column.
 *
 * The payoff is that the same DOM order works at both sizes. On desktop the note
 * sits in the margin beside the line it belongs to. On mobile the grid collapses
 * to one column and that identical markup reads as an indented aside directly
 * under its paragraph, not a footnote you have to go and tap for. Same reading
 * experience, narrower.
 *
 * The empty placeholder is hidden below `lg`, where it would otherwise land as a
 * phantom grid row and add a second gap between every paragraph.
 */

/** Sits on the spine, level with the heading. See `.node` and `.spine-fill` in globals.css. */
function Node() {
  return (
    <span
      aria-hidden="true"
      className="node absolute -left-8 top-[0.6em] h-2 w-2 rounded-full bg-sage ring-4 ring-paper sm:-left-10"
    />
  );
}

export default function Section({ section }: { section: SectionType }) {
  const { heading, blocks, note, lead, events } = section;

  return (
    <section
      id={section.id}
      className="grid grid-cols-1 gap-x-12 gap-y-6 py-16 pl-8 sm:py-24 sm:pl-10 lg:grid-cols-[minmax(0,36rem)_minmax(0,15rem)]"
    >
      <h2
        className={
          lead
            ? "reveal relative mb-1 font-display text-2xl font-medium tracking-[-0.01em] sm:text-3xl lg:col-span-2"
            : "reveal relative mb-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted lg:col-span-2"
        }
      >
        <Node />
        {heading}
      </h2>

      {blocks.map((block, i) => (
        <div key={i} className="contents">
          <p className="reveal max-w-[62ch] text-lg leading-[1.6] sm:text-xl sm:leading-[1.65]">
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
            <div className="hidden lg:block" aria-hidden="true" />
          )}
        </div>
      ))}

      {/* The one genuinely chronological section, so it's the one that gets dated
          rows. Each row is its own reveal, so they arrive in sequence as you scroll
          rather than all at once. Still prose on a line: no cards, no shadows. */}
      {events && (
        <ol className="mt-2 lg:col-span-2">
          {events.map((e) => (
            <li
              key={e.when}
              className="reveal relative grid grid-cols-1 gap-x-6 border-t border-rule py-4 sm:grid-cols-[7.5rem_minmax(0,44ch)]"
            >
              <span className="font-display text-sm font-medium tabular-nums text-accent sm:pt-[0.3rem]">
                {e.when}
              </span>
              <span className="text-lg leading-[1.55] sm:text-[1.0625rem]">
                {e.what}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
