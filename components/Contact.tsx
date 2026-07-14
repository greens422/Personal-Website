import Image from "next/image";
import {
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  RESUME_PDF,
  contact,
} from "@/lib/content";

const linkStyle =
  "underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

/**
 * Contact and resume, which are one thought: here's who I am, here's how to reach
 * me, here's the long version if you want it.
 *
 * Same two-column grid as the prose sections, so the margin voice gets the last
 * word on the page — which is the right place for it.
 *
 * The photo lives here and nowhere else. It's the image from her @sophiaovrflw
 * accounts, so it's what people recognise her by — but the hero stays one line of
 * type alone on the screen, per §2. Down here it's an identifier, not a feature:
 * small, unframed, no shadow, no ring. It's a casual flash selfie rather than a
 * headshot, which is exactly why it belongs beside the margin voice and not at the
 * top of the page.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 gap-y-6 px-6 pb-28 pt-16 sm:px-10 sm:pb-36 sm:pt-24 lg:grid-cols-[minmax(0,36rem)_minmax(0,15rem)]"
    >
      <h2 className="settle mb-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted lg:col-span-2">
        Contact
      </h2>

      <p className="settle max-w-[62ch] text-lg leading-[1.6] sm:text-xl sm:leading-[1.65]">
        {contact.invitation}
      </p>
      <div className="hidden lg:block" aria-hidden="true" />

      <p className="settle max-w-[62ch] text-lg leading-[1.6] text-muted sm:text-xl sm:leading-[1.65]">
        {contact.location}
      </p>
      <aside
        className="note pl-6 font-display text-[0.9375rem] leading-relaxed text-muted lg:pl-0 lg:pt-1"
        aria-label="Aside"
      >
        {contact.note}
      </aside>

      {/* Spans both columns: the brief wants this on one line, and the 36rem prose
          column is too narrow to hold it without wrapping "Resume (PDF)". */}
      <div className="settle mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7 lg:col-span-2">
        <Image
          src="/sophia-profile.jpeg"
          alt="Sophia Green"
          width={104}
          height={104}
          className="h-20 w-20 shrink-0 rounded-full object-cover object-top sm:h-24 sm:w-24"
        />

        {/* One line, as the brief asks. It wraps on a phone; it does not become a list. */}
        <p className="text-lg leading-[1.7] sm:text-xl">
          <a href={`mailto:${EMAIL}`} className={linkStyle}>
            {EMAIL}
          </a>
          <span className="mx-3 text-rule" aria-hidden="true">
            /
          </span>
          <a
            href={INSTAGRAM}
            className={linkStyle}
            target="_blank"
            rel="me noreferrer"
          >
            {INSTAGRAM_HANDLE}
          </a>
          <span className="mx-3 text-rule" aria-hidden="true">
            /
          </span>
          <a href={RESUME_PDF} className={linkStyle}>
            Resume (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}
