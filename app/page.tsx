import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import { sections } from "@/lib/content";

/**
 * Flat, scrollable, no nav bar. Sections are separated by space and type scale —
 * not by boxes, rules, cards, or numbered markers.
 *
 * Hero is the only client component on the page; everything else is static HTML
 * with CSS scroll-driven animation. That's the whole JS payload.
 */
export default function Page() {
  return (
    <main>
      <Hero />

      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}

      <Contact />
    </main>
  );
}
