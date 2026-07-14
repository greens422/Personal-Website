# Website Refresh — Brief

Instructions for rebuilding Sophia's personal site. Read this whole file before writing any code.

---

## 1. The job

Personal site. One page. Someone lands here after a DM, an intro email, or a "who is this" search, and should leave with a clear picture: **a curious person who has done a lot of different things, who believes technology should expand what humans can make rather than replace who makes it.**

**The words are the design.** Everything else is scaffolding. If a visual element competes with the copy for attention, cut it.

---

## 2. Design direction

**Vibe:** fresh, modern, relaxed. Confident, not loud. Dynamic — things move as you scroll — but *the motion serves the type*. Movement should feel like reading, not like a product launch page.

**The rule for motion:** if an animation is drawing the eye to itself instead of to a sentence, it's wrong. No parallax, no floating shapes, no animated gradient backgrounds, no scroll-jacking. Motion happens *to the words*: they arrive, they settle, the previous thought recedes. That's it.

**Non-negotiables:**
- **No pink.** Not as an accent, not as a tint, nowhere.
- No hero image, no gradient blob, no decorative illustration.
- Genuinely good on mobile — most people will open this on a phone. Motion must degrade gracefully at 375px.
- `prefers-reduced-motion` fully respected: the page must read perfectly with zero animation.

**Explicitly avoid these AI-design defaults** (they read as templated on sight):
- Cream/off-white background (~#F4F1EA) + high-contrast serif display + terracotta accent (~#D97757)
- Near-black background with one acid-green or vermilion accent
- Broadsheet layout with hairline rules and dense newspaper columns
- Numbered section markers (01 / 02 / 03) when the content isn't a sequence
- Card grids with drop shadows for content that is just paragraphs
- Fade-up-on-scroll applied uniformly to every block

**Before you code:** write the token system — palette (2–3 colors + neutrals, hexes named), type pairing (one characterful display face used with restraint + a body face that's a pleasure to read at length), layout concept, and the **one signature element** the page is remembered by. Check it against the avoid-list. If any part is what you'd produce for any generic personal site, redo that part and say what you changed.

---

## 3. Structure

```
[ hero — one thesis line ]
[ intro / who I am ]
[ what I'm working on now — The Network ]
[ my own interests & projects — CPG, healthcare ]
[ background / what I've done ]
[ the belief — technology + human creativity + regulation ]
[ resume (PDF) ]
[ contact ]
```

Flat, scrollable, no nav bar. Sections separated by space and type scale, not by boxes or rules.

---

## 4. Copy (draft — edit freely, keep the voice)

**Voice rules:** first person. Plain verbs. No startup jargon, no LinkedIn cadence, no "passionate about leveraging." Get to the substantive thing fast. Treat the reader as intelligent.

### Hero — FINAL, do not rewrite
One line, large, alone on the screen. Nothing else above the fold. Give it the whole viewport and let it sit there.

> **I've never had a shortage of ideas. I used to have a shortage of ways to build them.**

Set the two sentences as two lines, not one wrapped paragraph. The break between them is the whole point — the first line is the person, the second is the turn. If there's one motion moment on this entire site, it's the second line arriving a beat after the first.

### Intro
> Hi, I'm Sophia.
>
> I don't come from an engineering background. Most of what I've done — and most of what I'm doing now — is driven by pure interest: teaching myself, and learning from people who know more than I do.
>
> Which is why this wave of AI is the most fun I've had. I've always had more ideas than I had the ability to build. The technical barrier was the bottleneck. It isn't anymore.

### The Network
Her role is **Head of Community** (Aug 2025 – present) — it's on the resume but missing from this
copy, and a reader who's here to find out what she actually does deserves it in the first sentence.
Work it in without inflating it.

> Right now I'm working on **The Network** (The Network Labs) — a platform built around user-owned intelligence for the consumer data economy.
>
> As more of life moves into a digital economy, your digital context — what you've done, what you like, who you know, what you've made — becomes one of the most valuable things you have. Right now you don't own it, and you don't benefit from it.
>
> The Network is a consumer data portability company, building toward a future where individuals own, control, and benefit from their digital context.
>
> It's the thing I care most about right now.

### My own interests & projects

**CPG**
> I love CPG. I think it's genuinely fun. When you're someone who's always thinking of new ideas, there's nothing quite like watching what actually *lands* with people — what they pick up, what they keep buying, what they tell a friend about. It's the fastest feedback loop there is on whether an idea was any good.

**Healthcare**
> I'm also deeply interested in healthcare. I start my Master's in Biomedical Discovery and Commercialization at McMaster this fall.
>
> That interest isn't abstract. It comes from my own experiences navigating the healthcare system — which is a fairly efficient way to learn where it works and where it doesn't.

> *[NOTE — do not render this on the page. This section is deliberately one line: she's navigated the system herself, and it taught her where it breaks. That's enough for a reader to go "oh, that's why." A public webpage isn't owed any more than that. Resist the urge to add detail later just because the section feels short — short is doing the work here. If it gets expanded, it stops being a reason and starts being a disclosure, which is a different thing entirely.]*

### Background
Short. Prose or a tight list — **not** a card grid, **not** a timeline component.
> Computational biology research (ML pipelines for antimicrobial resistance data), two summers at CIBC across capital markets and asset management, a McMaster degree, and now the MBDC program at DeGroote.

### The belief
This is the emotional center of the page. Give it room.
> Humans are extraordinarily creative. I think technology is about to be the most permitting thing that's ever happened to that creativity — it takes the barrier between having an idea and making it real and shrinks it to almost nothing.
>
> But it has to be built properly. Keeping a human in the loop isn't a constraint on the technology; it's the point of it. I care as much about that as I do about the building itself — which means caring about regulation, and about who owns what.

### Contact
One line. No contact form. (The current site has one, wired to Supabase + EmailJS — all of that comes out.)

- Email — personal address, **not** the McMaster one. The page should outlive the degree.
- Instagram: **@sophiaovrflw**. That's the only social. LinkedIn stays on the resume, not the page.

Profile photo sits here — see §7b.

---

## 5. Stack

- **Next.js** (App Router), TypeScript, Tailwind.
- **Motion:** `motion` (Framer Motion) for the orchestrated moments; native CSS scroll-driven animations (`animation-timeline: view()`) for anything that's just "this enters the viewport" — it's cheaper and smoother, don't reach for JS to do a fade.
- Static export is fine. No CMS, no database, no auth. It's a page.
- Fonts: self-host via `next/font`. Two faces maximum.

### On animation specifically
Sophia likes fun animation. The site still can't be a showreel. Resolve it this way: **spend the boldness in one place.**

- The hero's second line arriving a beat after the first is **the** moment. It gets real craft — timing, easing, weight.
- The marginalia sliding in (see direction below) is the recurring texture.
- Everything else is quiet. No section gets a fade-up just because it can have one.
- Chanel rule: when the page is done, take one animation off before shipping.

If motion is off (`prefers-reduced-motion`), the page must still be *good* — not a degraded version, just a calmer one.

---

## 6. Direction: Marginalia

The chosen concept. (Swap it if it doesn't feel right once it's real, but build this first.)

A single clean column of prose — the formal voice, the one that says *"The Network is a consumer data portability company building toward a future where individuals own, control, and benefit from their digital context."*

Running alongside it in the margin: **a second voice.** Small, lowercase, casual, arriving as the line it belongs to hits center. The real one. The one that says *"(read: you should own your own data. wild that this is a hot take.)"*

Why this and not a card grid: it's dynamic, it's entirely made of words, and it does the thing the whole page is trying to do — make the reader feel like they're standing next to a curious person who has a lot of thoughts and isn't performing any of them.

Rules:
- Margin notes are **hers**, not editorial filler. If a note isn't funny, sharp, or actually revealing, cut it. Three great ones beat nine mediocre ones.
- They never repeat the main column. They comment on it.
- **Mobile:** margins collapse to inline asides, indented and set in the smaller/lighter face. They must not become footnotes you have to tap for. Same reading experience, narrower.
- They are decoration-free: no icons, no speech bubbles, no highlight boxes. Just type.

---

## 7. Resume

- Current resume on the site is out of date — **remove it.** (`public/Sophia_Green_CV.pdf`, and the stale copy in `dist/`.)
- Source of truth is `Sophia_Green_Resume.docx` in the repo root.
- Ship it as `public/sophia-green-resume.pdf`.
- Link it plainly: "Resume (PDF)". No fake preview embed, no viewer widget.

**PRIVACY — non-negotiable.** The .docx header carries a home address (79 Deloraine, Toronto) and a
phone number. The published PDF **must not.** Strip both. The public header is:

> Sophia Green — [email] — linkedin.com/in/sophiajamiegreen

The address and phone stay in the .docx for versions she hands to people directly. They never touch
the web. If the PDF is ever regenerated, re-check this.

## 7b. Profile photo

`sophia-profile.jpeg` — same image as her @sophiaovrflw accounts, so it's the one people will
recognize her by.

- Goes in the **contact section only.** Not the hero. §2's "no hero image" stands — the top of the
  page is one line of type alone on the screen, and that doesn't change.
- Small. It's an identifier, not a feature. No frame, no shadow, no decorative treatment — same
  no-ornament rule as the marginalia.
- It's a casual flash selfie, not a headshot, and that's why it works down here: it matches the
  margin voice, not the main column.

---

## 8. Quality floor

- Responsive down to 375px
- Visible keyboard focus states
- `prefers-reduced-motion` respected — page must be fully readable with motion off
- Semantic HTML, real heading hierarchy
- Fast: no heavy font payloads, minimal JS
