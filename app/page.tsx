import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import { sections } from "@/lib/content";

/**
 * Flat, scrollable, no nav bar. Sections are separated by space and type scale,
 * not by boxes, rules, cards, or numbered markers.
 *
 * The spine runs the length of the sections and draws itself as you scroll, with
 * a node at each heading. It starts below the hero on purpose: the hero gets the
 * whole viewport with nothing else in it, and a line reaching up into it would
 * both break that and mean the spine arrives already part-drawn.
 *
 * Hero is the only client component on the page. Everything else is static HTML
 * with CSS scroll-driven animation. That is the entire JS payload.
 */
export default function Page() {
  return (
    <main>
      <Hero />

      <div className="spine-wrap relative mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* The track is always there, faint. The fill draws over it. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-6 top-0 w-px bg-rule sm:left-10"
        >
          <div className="spine-fill h-full w-full bg-gradient-to-b from-sage to-accent" />
        </div>

        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        <Contact />
      </div>
    </main>
  );
}
