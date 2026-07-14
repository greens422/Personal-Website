/**
 * Every word and link on the page. One file, so copy edits never mean hunting through components.
 *
 * The `note` on a section is the margin voice — see §6 of website-refresh.md. Rules that matter:
 * a note never restates the column it sits beside, it comments on it. If a note isn't funny, sharp,
 * or actually revealing, it should be deleted rather than improved. Three great ones beat nine.
 */

// The McMaster address, chosen deliberately over the personal Gmail — the Gmail
// carries too much identifying information to hand to strangers on the internet.
// The tradeoff is that this one expires with the degree; when it does, changing
// it here updates the contact line, the mailto, and the resume PDF header, which
// are the only three places it appears.
export const EMAIL = "greens42@mcmaster.ca";

export const LINKEDIN = "https://www.linkedin.com/in/sophiajamiegreen";
export const INSTAGRAM = "https://instagram.com/sophiaovrflw";
export const INSTAGRAM_HANDLE = "@sophiaovrflw";
export const RESUME_PDF = "/sophia-green-resume.pdf";

export const hero = {
  line1: "I've never had a shortage of ideas.",
  line2: "I used to have a shortage of ways to build them.",
};

export const contact = {
  invitation:
    "I'm a very curious human and I love talking. Reach out if you're keen to discuss anything at all.",
  location: "Toronto based. Currently in Whistler, British Columbia.",
  // The margin voice gets the joke, which is the right division of labour: the
  // column states where she is, the margin admits how she feels about it.
  note: "(and in new york on 48 hours' notice. the notice is a formality. i am always already half-packed.)",
};

export type Block = { p: string };

export type Section = {
  id: string;
  heading: string;
  blocks: Block[];
  /**
   * "Hi, I'm Sophia." is a sentence she says, not a filing label. Every other
   * heading here ("The Network", "Background") genuinely is a label. So the intro
   * gets set as a spoken line and the rest get set as quiet section markers.
   */
  lead?: boolean;
  /** The margin voice. Lowercase, casual, hers. Anchored to a block by index. */
  note?: { text: string; anchor: number };
};

export const sections: Section[] = [
  {
    id: "intro",
    heading: "Hi, I'm Sophia.",
    lead: true,
    blocks: [
      {
        p: "I don't come from an engineering background. Most of what I've done — and most of what I'm doing now — is driven by pure interest: teaching myself, and learning from people who know more than I do.",
      },
      {
        p: "Which is why this wave of AI is the most fun I've had. I've always had more ideas than I had the ability to build. The technical barrier was the bottleneck. It isn't anymore.",
      },
    ],
    note: {
      text: "(the honest version: i was the person with forty tabs open and no way to ship any of it.)",
      anchor: 1,
    },
  },
  {
    id: "the-network",
    heading: "The Network",
    blocks: [
      {
        p: "Right now I'm Head of Community at **The Network** (The Network Labs) — a platform built around user-owned intelligence for the consumer data economy.",
      },
      {
        p: "As more of life moves into a digital economy, your digital context — what you've done, what you like, who you know, what you've made — becomes one of the most valuable things you have. Right now you don't own it, and you don't benefit from it.",
      },
      {
        p: "The Network is a consumer data portability company, building toward a future where individuals own, control, and benefit from their digital context.",
      },
      { p: "It's the thing I care most about right now." },
    ],
    note: {
      text: "(read: you should own your own data. wild that this is a hot take.)",
      anchor: 2,
    },
  },
  {
    id: "cpg",
    heading: "CPG",
    blocks: [
      {
        p: "I love CPG. I think it's genuinely fun. When you're someone who's always thinking of new ideas, there's nothing quite like watching what actually *lands* with people — what they pick up, what they keep buying, what they tell a friend about. It's the fastest feedback loop there is on whether an idea was any good.",
      },
    ],
    note: {
      text: "(a shelf is the most honest focus group ever built. it cannot be nice to you.)",
      anchor: 0,
    },
  },
  {
    id: "healthcare",
    heading: "Healthcare",
    blocks: [
      {
        p: "I'm also deeply interested in healthcare. I start my Master's in Biomedical Discovery and Commercialization at McMaster this fall.",
      },
      {
        p: "That interest isn't abstract. It comes from my own experiences navigating the healthcare system — which is a fairly efficient way to learn where it works and where it doesn't.",
      },
    ],
    // No margin note here. The brief is explicit that this section stays short and unelaborated —
    // a quip in the margin would be the exact "add detail because it feels short" move it warns off.
  },
  {
    id: "background",
    heading: "Background",
    blocks: [
      {
        p: "Computational biology research (ML pipelines for antimicrobial resistance data, in Andrew McArthur's lab), two summers at CIBC across capital markets and asset management, a McMaster degree, and now the MBDC program at DeGroote.",
      },
    ],
    note: {
      text: "(yes, that's a strange line to draw between four things. it made sense one step at a time.)",
      anchor: 0,
    },
  },
  {
    id: "belief",
    heading: "The belief",
    blocks: [
      {
        p: "Humans are extraordinarily creative. I think technology is about to be the most permitting thing that's ever happened to that creativity — it takes the barrier between having an idea and making it real and shrinks it to almost nothing.",
      },
      {
        p: "But it has to be built properly. Keeping a human in the loop isn't a constraint on the technology; it's the point of it. I care as much about that as I do about the building itself — which means caring about regulation, and about who owns what.",
      },
    ],
    note: {
      text: "(the point was never to remove the person. it was to remove the part between the person and the thing.)",
      anchor: 1,
    },
  },
];
