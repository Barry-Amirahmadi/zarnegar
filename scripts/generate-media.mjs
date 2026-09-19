/**
 * Placeholder art direction generator.
 *
 * There is no atelier photography, and there is no atelier. Rather than pulling
 * unrelated stock images, every image slot is filled with a generated "object
 * study": a defocused mass in the piece's own tone, lit by a single soft source
 * from the top-right — the RTL reading origin — over film grain.
 *
 * They share one treatment, so the page reads as a single art-directed shoot.
 * Each file maps 1:1 onto a real photograph later — same path, same ratio.
 *
 * Two rules this generator enforces that PARNIAN's did not:
 *
 * 1. **Every catalogue primary shares one canvas and one subject geometry.**
 *    PARNIAN shipped four canvas sizes and it read as mismatched photography
 *    rather than as editorial variety; the fix was applied to the files by hand
 *    afterwards but never came back into this script, so regenerating would
 *    have undone it. Here the catalogue size and mass are constants the slots
 *    cannot override, and only `tone` and `seed` vary. The single `feature`
 *    piece is the one deliberate exception.
 * 2. **A `views` frame is the same object from another angle, not a different
 *    object.** Same tone, an adjacent seed, and the mass shifted and re-massed
 *    within a small range — enough to read as a turn of the wrist, not as a
 *    second piece of jewellery.
 *
 *   node scripts/generate-media.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", "public", "media");
mkdirSync(outDir, { recursive: true });

/** Brand grounds — kept in sync with src/app/tokens.css */
const GROUND = {
  sadaf: "#F2EEE6",
  sadafDeep: "#E5DFD2",
  shabaq: "#1A1611",
};

/**
 * The one canvas and the one subject geometry every catalogue primary uses.
 * `mass` is [x, y, size], each 0–1, positioning and sizing the defocused
 * object. Changing these changes all nine at once, which is the point.
 */
const CATALOGUE = { w: 1200, h: 1200, mass: [0.5, 0.52, 0.5] };

/** Jewellery is shown in a case, not on a table: the catalogue ground is jet. */
const piece = (name, tone, seed) => ({
  name: `piece-${name}`,
  ...CATALOGUE,
  tone,
  ground: GROUND.shabaq,
  seed,
});

/**
 * An alternate view of the piece above it.
 *
 * `turn` is 0–1 and drives how far the object rotates away from the primary
 * framing. The mass moves a little and shrinks a little — an object turned
 * edge-on presents less of itself — and the seed steps by one so the grain
 * differs without the tone doing so.
 */
const view = (name, suffix, tone, seed, turn) => ({
  name: `piece-${name}-${suffix}`,
  ...CATALOGUE,
  tone,
  ground: GROUND.shabaq,
  seed: seed + 1 + Math.round(turn * 4),
  mass: [
    CATALOGUE.mass[0] + (turn - 0.5) * 0.16,
    CATALOGUE.mass[1] + (turn - 0.5) * 0.08,
    CATALOGUE.mass[2] * (1 - turn * 0.22),
  ],
});

/**
 * A slot = one image on the page.
 * `tone` is the dominant colour of the study; `ground` is what it sits on.
 */
const slots = [
  // — Hero —
  { name: "hero-main", w: 1200, h: 1500, tone: "#A8834A", ground: GROUND.shabaq, mass: [0.52, 0.56, 0.48], seed: 3 },
  { name: "hero-inset", w: 700, h: 700, tone: "#8A6E3C", ground: GROUND.sadafDeep, mass: [0.46, 0.5, 0.6], seed: 11 },

  // — Catalogue primaries. Tone matches each piece's `tone` in content/products.ts.
  //   Every one of these is 1200×1200 with identical mass; only tone and seed move.
  piece("mahtab", "#8C93A8", 5),
  piece("shabnam", "#A9AEB0", 13),
  piece("avishan", "#5E7356", 21),
  piece("khara", "#4A4741", 29),
  piece("ghatreh", "#9A6B33", 37),
  piece("partow", "#A88B45", 45),
  piece("katibeh", "#6E5A34", 53),
  piece("nilufar", "#3F5D70", 61),

  // — The one deliberate exception. `feature` spans all twelve columns on both
  //   the showcase and the collection page, so it is the only frame that is not
  //   square: a full-width square stands roughly two viewport heights tall.
  { name: "piece-toranj", w: 1600, h: 1000, tone: "#A8834A", ground: GROUND.shabaq, mass: [0.44, 0.52, 0.46], seed: 69 },

  // — Other views. Same object, turned.
  view("mahtab", "b", "#8C93A8", 5, 0.35),
  view("mahtab", "c", "#8C93A8", 5, 0.72),
  view("shabnam", "b", "#A9AEB0", 13, 0.42),
  view("avishan", "b", "#5E7356", 21, 0.3),
  view("avishan", "c", "#5E7356", 21, 0.68),
  view("khara", "b", "#4A4741", 29, 0.38),
  view("khara", "c", "#4A4741", 29, 0.75),
  view("ghatreh", "b", "#9A6B33", 37, 0.44),
  view("partow", "b", "#A88B45", 45, 0.33),
  view("partow", "c", "#A88B45", 45, 0.7),
  view("katibeh", "b", "#6E5A34", 53, 0.36),
  view("katibeh", "c", "#6E5A34", 53, 0.74),
  view("nilufar", "b", "#3F5D70", 61, 0.4),
  view("nilufar", "c", "#3F5D70", 61, 0.77),

  // The feature's views keep its own wide frame, not the catalogue square.
  { name: "piece-toranj-b", w: 1600, h: 1000, tone: "#A8834A", ground: GROUND.shabaq, mass: [0.5, 0.5, 0.42], seed: 71 },
  { name: "piece-toranj-c", w: 1600, h: 1000, tone: "#A8834A", ground: GROUND.shabaq, mass: [0.38, 0.54, 0.38], seed: 73 },
  { name: "piece-toranj-d", w: 1600, h: 1000, tone: "#6E5A34", ground: GROUND.shabaq, mass: [0.56, 0.5, 0.4], seed: 75 },

  // — Brand / values —
  { name: "values-texture", w: 1000, h: 1333, tone: "#8A6E3C", ground: GROUND.sadafDeep, mass: [0.48, 0.54, 0.58], seed: 83 },

  // — Gallery. One frame for all eight, as the catalogue has one for all nine.
  { name: "gallery-01", w: 1000, h: 1250, tone: "#A8834A", ground: GROUND.sadafDeep, mass: [0.5, 0.52, 0.52], seed: 101 },
  { name: "gallery-02", w: 1000, h: 1250, tone: "#5F8A85", ground: GROUND.sadaf, mass: [0.5, 0.52, 0.52], seed: 103 },
  { name: "gallery-03", w: 1000, h: 1250, tone: "#A8834A", ground: GROUND.sadafDeep, mass: [0.5, 0.52, 0.52], seed: 107 },
  { name: "gallery-04", w: 1000, h: 1250, tone: "#8A6E3C", ground: GROUND.sadaf, mass: [0.5, 0.52, 0.52], seed: 109 },
  { name: "gallery-05", w: 1000, h: 1250, tone: "#9A8E78", ground: GROUND.sadafDeep, mass: [0.5, 0.52, 0.52], seed: 113 },
  { name: "gallery-06", w: 1000, h: 1250, tone: "#8C93A8", ground: GROUND.sadaf, mass: [0.5, 0.52, 0.52], seed: 127 },
  { name: "gallery-07", w: 1000, h: 1250, tone: "#B29A66", ground: GROUND.sadafDeep, mass: [0.5, 0.52, 0.52], seed: 131 },
  { name: "gallery-08", w: 1000, h: 1250, tone: "#6E5A34", ground: GROUND.sadaf, mass: [0.5, 0.52, 0.52], seed: 137 },

  // — Closing CTA —
  { name: "cta-field", w: 1920, h: 1000, tone: "#8A6E3C", ground: GROUND.shabaq, mass: [0.34, 0.56, 0.74], seed: 149 },
];

/* `name` is destructured off by the caller, not used in the markup. */
const svg = ({ w, h, tone, ground, mass, seed }) => {
  const [mx, my, msize] = mass;
  const cx = w * mx;
  const cy = h * my;
  const rx = Math.min(w, h) * msize * 0.5;
  const ry = rx * 1.28;
  const blur = Math.min(w, h) * 0.13;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
  <defs>
    <radialGradient id="light" cx="78%" cy="18%" r="88%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.34"/>
      <stop offset="52%" stop-color="#FFFFFF" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.18"/>
    </radialGradient>
    <linearGradient id="fall" x1="1" y1="0" x2="0.1" y2="1">
      <stop offset="0%" stop-color="${tone}" stop-opacity="0.92"/>
      <stop offset="100%" stop-color="${tone}" stop-opacity="0.34"/>
    </linearGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="${blur.toFixed(1)}"/>
    </filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="${seed}" result="n"/>
      <feColorMatrix type="saturate" values="0" in="n" result="g"/>
      <feComponentTransfer in="g" result="gt">
        <feFuncA type="linear" slope="0.5"/>
      </feComponentTransfer>
      <feBlend in="SourceGraphic" in2="gt" mode="overlay"/>
    </filter>
  </defs>

  <g filter="url(#grain)">
    <rect width="${w}" height="${h}" fill="${ground}"/>
    <rect width="${w}" height="${h}" fill="url(#fall)" opacity="0.55"/>
    <g filter="url(#soft)">
      <ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="${rx.toFixed(0)}" ry="${ry.toFixed(0)}" fill="${tone}" opacity="0.85"/>
      <ellipse cx="${(cx + rx * 0.42).toFixed(0)}" cy="${(cy - ry * 0.46).toFixed(0)}" rx="${(rx * 0.5).toFixed(0)}" ry="${(ry * 0.34).toFixed(0)}" fill="#FFFFFF" opacity="0.26"/>
      <ellipse cx="${(cx - rx * 0.62).toFixed(0)}" cy="${(cy + ry * 0.5).toFixed(0)}" rx="${(rx * 0.7).toFixed(0)}" ry="${(ry * 0.4).toFixed(0)}" fill="#000000" opacity="0.2"/>
    </g>
    <rect width="${w}" height="${h}" fill="url(#light)"/>
  </g>
</svg>
`;
};

let count = 0;
for (const slot of slots) {
  writeFileSync(join(outDir, `${slot.name}.svg`), svg(slot), "utf8");
  count += 1;
}
console.log(`generated ${count} placeholder studies → public/media/`);
