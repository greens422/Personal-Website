"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { hero } from "@/lib/content";

/**
 * The one moment on the site: the name arrives, the sheen passes across it once,
 * and it rests on its own reflection.
 *
 * The reflection is a second, aria-hidden copy of the name, flipped on Y and
 * faded out through a mask, sitting directly beneath the real one. It reads as
 * type on a polished surface. It is the only mirror on the page, and like the
 * sheen it lives here and nowhere else, which is how the brief asks boldness to
 * be spent: all in one place.
 */

const rise = {
  hidden: { opacity: 0, y: "0.35em" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
      y: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
  }),
};

// The gradient needs the "real" painted colour so the sweep can pass through the
// type and leave it exactly as it found it. The delay sits after the name has
// finished arriving; a sheen over still-moving type reads as a glitch, not light.
const inkBase = {
  "--sheen-base": "#12211e",
  "--sheen-delay": "1.5s",
} as CSSProperties;

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="flex min-h-svh items-center px-6 sm:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <motion.h1
          className="font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          variants={rise}
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          custom={0.15}
        >
          <span className="sheen" style={inkBase}>
            {hero.name}
          </span>

          {/* The reflection. Purely decorative, so it's hidden from assistive tech
              and pointer events. It mirrors the real name and dissolves downward. */}
          <span
            aria-hidden="true"
            className="mirror block select-none font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            {hero.name}
          </span>
        </motion.h1>

        <motion.p
          className="-mt-2 max-w-2xl text-balance font-body text-xl leading-[1.4] text-muted sm:mt-0 sm:text-2xl"
          variants={rise}
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          custom={0.9}
        >
          {hero.tagline}
        </motion.p>
      </div>
    </section>
  );
}
