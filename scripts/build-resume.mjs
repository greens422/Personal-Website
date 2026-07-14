/**
 * Builds public/sophia-green-resume.pdf.
 *
 * Content is transcribed from Sophia_Green_Resume.docx (the source of truth, which
 * stays in the repo root and is NOT served). The one deliberate difference: the
 * .docx header carries a home address and a phone number, and the published PDF
 * must not. See §7 of website-refresh.md.
 *
 * There is a hard assertion for that at the bottom. It is not decorative — if
 * someone re-transcribes this file from the .docx later and pastes the header in
 * wholesale, the build fails rather than quietly publishing her address.
 *
 * Renders via puppeteer-core against the Chrome already installed on the machine,
 * so there's no 300MB Chromium download in devDependencies.
 *
 *   npm run resume
 */
import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// --- the things that must never appear in the output ------------------------
const FORBIDDEN = [
  "79 Deloraine",
  "M5M 2A8",
  "416-322-7377",
  "4163227377",
];

// --- contact, pulled from lib/content.ts so it can't drift from the site -----
const contentTs = readFileSync(resolve(root, "lib/content.ts"), "utf8");
const grab = (name) => {
  const m = contentTs.match(new RegExp(`export const ${name} = "([^"]+)"`));
  if (!m) throw new Error(`Could not read ${name} from lib/content.ts`);
  return m[1];
};

const EMAIL = grab("EMAIL");
const LINKEDIN = grab("LINKEDIN").replace(/^https?:\/\/(www\.)?/, "");

if (EMAIL.includes("REPLACE_ME")) {
  console.error(
    "\n  lib/content.ts still has the placeholder email.\n" +
      "  Set EMAIL to Sophia's personal address before building the public resume.\n"
  );
  process.exit(1);
}

// --- content ----------------------------------------------------------------
const entry = (role, org, dates, bullets) => ({ role, org, dates, bullets });

const RESUME = {
  name: "Sophia Green",
  sections: [
    {
      title: "Education",
      entries: [
        entry(
          "Master of Biomedical Discovery and Commercialization",
          "McMaster University, Faculty of Health Sciences — Hamilton, ON",
          "Expected September 2027",
          [
            "Admitted to the graduate stage of McMaster's competitive 4+1 BDC program, integrating graduate business training with a pharmaceutical industry internship focused on commercialization and healthcare strategy.",
          ]
        ),
        entry(
          "Honours Bachelor of Health Sciences (HBHSc), Biomedical Discovery and Commercialization",
          "McMaster University, Faculty of Health Sciences — Hamilton, ON",
          "Sept 2022 – May 2026",
          [
            "Completed the undergraduate stage of the 4+1 BDC program; senior thesis in computational biology under Dr. Andrew McArthur.",
            "GPA 11.2/12. Dean's Honour List (×7); Departmental Honour Roll in Biology; McMaster Academic Excellence in STEM Entrance Scholarship (top 10% of Faculty).",
          ]
        ),
        entry(
          "Women in Asset Management Participant",
          "Ivey Business School, Western University — London, ON",
          "May 2024",
          [
            "Selected as one of 50 women nationally for the third cohort; exposure to investment strategy, portfolio management, risk assessment, and market analysis.",
          ]
        ),
      ],
    },
    {
      title: "Research",
      entries: [
        entry(
          "Thesis Student, M.G. DeGroote Institute for Infectious Disease Research",
          "McArthur Lab — Hamilton, ON",
          "Sept 2025 – April 2026",
          [
            "Researched antimicrobial resistance and built a pipeline integrating new Minimum Inhibitory Concentration (MIC) data into the Comprehensive Antibiotic Resistance Database (CARD).",
            "Applied Python and machine learning tools to automate and validate incoming data, streamlining a previously manual review process.",
          ]
        ),
      ],
    },
    {
      title: "Experience",
      entries: [
        entry(
          "Head of Community",
          "The Network (early-stage startup) — New York, NY",
          "Aug 2025 – Present",
          [
            "Organized and hosted community “match parties,” coordinating app demonstrations, DJs, and events to introduce the platform and drive early user engagement.",
            "Worked with the founding team to consistently implement community engagement initiatives.",
          ]
        ),
        entry(
          "Global Markets Intern",
          "CIBC Capital Markets — Toronto, ON",
          "May 2025 – Aug 2025",
          [
            "Supported client communications and coordinated 10–30 product launches for the Wealth Solutions Group's Equity-Linked Structured Notes desk within Sales & Trading.",
            "Authored a weekly client-facing email blast reaching 200+ clients, supporting ongoing client engagement and product visibility.",
          ]
        ),
        entry(
          "Analyst Intern — Global Beta, Overlays and Outcome Management",
          "CIBC Asset Management — Montréal, QC",
          "June 2024 – Aug 2024",
          [
            "Analyzed portfolio risk using Bloomberg's PORT Enterprise suite (PORT, PM, PREP, JMGR) to support optimization and navigate global market conditions.",
            "Introduced a control-file methodology to the Total Investment Solutions team, improving consistency across personalized client report packages.",
          ]
        ),
      ],
    },
    {
      title: "Extracurricular and Volunteer",
      entries: [
        entry(
          "Credit Analyst",
          "DeGroote Finance and Investment Council (DFIC) — Hamilton, ON",
          "Sept 2024 – Dec 2025",
          [
            "Collaborated with a team of six to research and build an investment pitch presented to the board of directors; the recommendation was adopted into the 2025 portfolio strategy.",
            "Conducted credit analysis on a prospective security, evaluating financial health and risk to support the team's buy recommendation.",
          ]
        ),
        entry(
          "Conference Ambassador",
          "50th International Conference, Business Today (Princeton University) — New York, NY",
          "Nov 2024",
          [
            "Represented McMaster at a fully-funded global conference connecting students and executives; promotes the 51st IC to prospective attendees.",
          ]
        ),
        entry(
          "CANsail Instructor & Racer",
          "Stoney Lake Yacht Club — Stoney Lake, ON",
          "Summer 2012 – Present",
          [
            "Taught CANsail Levels 1–4 and organized weekend races for club alumni, including former Olympians and World Championship medalists.",
            "Competed in a two-person trapeze and spinnaker Class 420 boat across regattas throughout Ontario.",
          ]
        ),
      ],
    },
  ],
  skills: [
    [
      "Software",
      "Python (intermediate), Bloomberg Terminal (intermediate), GitLab, VS Code / Cursor, HTML & CSS (beginner), MS Office Suite (intermediate)",
    ],
    [
      "Languages",
      "French — conversational (oral); Honours Certificate of Bilingual Studies, French Immersion",
    ],
    [
      "Interests",
      "Pottery; yoga (yin and power); culinary arts; podcasts; sailing (420 dinghies and 29ers); DJing",
    ],
  ],
};

// --- markup -----------------------------------------------------------------
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const entryHtml = (e) => `
  <article class="entry">
    <div class="entry-head">
      <h3>${esc(e.role)}</h3>
      <span class="dates">${esc(e.dates)}</span>
    </div>
    <p class="org">${esc(e.org)}</p>
    <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
  </article>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Sophia Green — Resume</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=Newsreader:opsz,wght@6..72,400..600&display=swap" rel="stylesheet">
<style>
  /* Same tokens as the site, so the PDF reads as the same object. */
  :root {
    --ink: #12211e;
    --accent: #0b6b5e;
    --muted: #6d7d77;
    --rule: #dde2dd;
  }
  * { box-sizing: border-box; }
  @page { size: letter; margin: 14mm 15mm; }
  body {
    margin: 0;
    font-family: "Newsreader", Georgia, serif;
    font-size: 9.6pt;
    line-height: 1.42;
    color: var(--ink);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  header { margin-bottom: 14px; }
  h1 {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: 21pt;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0 0 4px;
  }
  .contact {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: 8.6pt;
    color: var(--muted);
  }
  .contact a { color: var(--muted); text-decoration: none; }
  .contact span { margin: 0 7px; color: var(--rule); }

  section { margin-top: 13px; }
  h2 {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: 8pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.13em;
    color: var(--accent);
    margin: 0 0 7px;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--rule);
  }

  .entry { margin-bottom: 9px; page-break-inside: avoid; }
  .entry-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
  }
  h3 { font-size: 10.2pt; font-weight: 600; margin: 0; }
  .dates {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: 8.2pt;
    color: var(--muted);
    white-space: nowrap;
  }
  .org {
    font-size: 9pt;
    font-style: italic;
    color: var(--muted);
    margin: 1px 0 4px;
  }
  ul { margin: 0; padding-left: 14px; }
  li { margin-bottom: 2px; }

  .skills { margin-top: 4px; }
  .skills div { margin-bottom: 3px; }
  .skills b {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: 8.4pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
</style>
</head>
<body>
  <header>
    <h1>${esc(RESUME.name)}</h1>
    <!-- Deliberately no street address and no phone number. See §7 of website-refresh.md. -->
    <p class="contact">
      <a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a>
      <span>/</span>
      <a href="https://${esc(LINKEDIN)}">${esc(LINKEDIN)}</a>
    </p>
  </header>

  ${RESUME.sections
    .map(
      (s) => `
  <section>
    <h2>${esc(s.title)}</h2>
    ${s.entries.map(entryHtml).join("")}
  </section>`
    )
    .join("")}

  <section>
    <h2>Skills &amp; Interests</h2>
    <div class="skills">
      ${RESUME.skills
        .map(([k, v]) => `<div><b>${esc(k)}</b> &nbsp;${esc(v)}</div>`)
        .join("")}
    </div>
  </section>
</body>
</html>`;

// --- the guard --------------------------------------------------------------
const leaked = FORBIDDEN.filter((s) =>
  html.replace(/\s+/g, " ").toLowerCase().includes(s.toLowerCase())
);
if (leaked.length) {
  console.error(
    `\n  REFUSING TO BUILD — the resume contains private contact details that must ` +
      `not be published:\n    ${leaked.join("\n    ")}\n`
  );
  process.exit(1);
}

// --- render -----------------------------------------------------------------
const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
];
const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("\n  No Chrome or Edge found. Checked:\n    " + CHROME_CANDIDATES.join("\n    "));
  process.exit(1);
}

const out = resolve(root, "public/sophia-green-resume.pdf");
const debugHtml = resolve(root, "scripts/.resume-preview.html");
writeFileSync(debugHtml, html);

const browser = await puppeteer.launch({ executablePath, headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await page.pdf({ path: out, format: "letter", printBackground: true });
await browser.close();

console.log(`  ✓ ${out}`);
console.log(`    header: ${EMAIL} / ${LINKEDIN}`);
console.log(`    no street address, no phone number\n`);
