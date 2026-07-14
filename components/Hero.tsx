"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";

/**
 * The one moment on the site.
 *
 * The break between the two lines is the whole point: the first line is the
 * person, the second is the turn. So the second line does not simply fade in
 * behind the first — it waits a full beat, and lands.
 *
 * The easing is asymmetric on purpose. Both lines rise, but line two travels
 * further and decelerates harder, so it reads as arriving at a conclusion rather
 * than as a second item in a staggered list. That's the difference between the
 * sentence landing and a UI animating.
 */

const line = {
  hidden: { opacity: 0, y: "0.4em" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
      y: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
  }),
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="flex min-h-svh items-center px-6 sm:px-10">
      <h1 className="mx-auto w-full max-w-5xl font-display text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[4rem]">
        {/* Two lines, not one wrapped paragraph — the break is the content.
            `text-balance` keeps each sentence's own wrap even, so line one doesn't
            drop a single orphaned word ("ideas.") onto a line of its own. */}
        <motion.span
          className="block text-balance"
          variants={line}
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          custom={0.15}
        >
          {hero.line1}
        </motion.span>

        <motion.span
          className="mt-2 block text-balance text-accent sm:mt-3"
          variants={line}
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          // The beat. Long enough that the first line is read and finished before
          // the second exists. Shorter than this and they read as one block.
          custom={1.15}
        >
          {hero.line2}
        </motion.span>
      </h1>
    </section>
  );
}
