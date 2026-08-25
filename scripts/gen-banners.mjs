import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// repo root is the parent of this script's directory (scripts/)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "docs");
const IMG = join(ROOT, "images");

// caramellatte-aligned palette (sRGB approximations of the theme's oklch values)
const C = {
  cream1: "#FBF7EF", // base-100
  cream2: "#F3E8D5", // base-200
  cream3: "#E9D4AE", // base-300
  brownDk: "#37200F", // secondary
  brown: "#7C3A1C", // base-content
  sienna: "#8E4422", // accent
  rust: "#B8481A", // neutral
  cobalt: "#1C3CC0", // info  -> cobalt blue
  gold: "#EFAE16", // warning -> gold
  crimson: "#E64A38", // error -> crimson
};
// the three lead gestural colors plus warm supporting tones
const GESTURE = [C.crimson, C.cobalt, C.gold, C.crimson, C.cobalt, C.gold, C.sienna, C.rust, C.brownDk];

// --- seeded RNG (mulberry32) ---
function hash(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1200;
const H = 300;

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// split title onto 1 or 2 balanced centered lines (width is enforced later via textLength)
function layoutTitle(title) {
  if (title.length <= 18 || !title.includes(" ")) return { lines: [title], fs: 60 };
  const words = title.split(/\s+/);
  let best = null;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" ");
    const b = words.slice(i).join(" ");
    const w = Math.max(a.length, b.length);
    if (!best || w < best.w) best = { a, b, w };
  }
  return { lines: [best.a, best.b], fs: 52 };
}

function makeSvg(seedStr, title) {
  const seed = hash(seedStr);
  const rnd = mulberry32(seed);
  const r = (a, b) => a + (b - a) * rnd();
  const ri = (a, b) => Math.floor(r(a, b + 1));
  const pick = (arr) => arr[ri(0, arr.length - 1)];
  const f = (n) => Number(n.toFixed(1));

  const tSeed1 = ri(0, 99);
  const tSeed2 = ri(0, 99);

  const parts = [];

  // --- background washes ---
  const washes = [];
  const nWash = ri(2, 3);
  for (let i = 0; i < nWash; i++) {
    const cx = r(0, W);
    const cy = r(0, H);
    const rx = r(220, 460);
    const ry = r(120, 240);
    const col = pick([C.cream2, C.cream3, C.cream2]);
    washes.push(
      `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="${col}" opacity="${f(r(0.5, 0.9))}"/>`,
    );
  }

  // --- gestural brushstrokes ---
  const strokes = [];
  const drips = [];
  const nStroke = ri(5, 7);
  for (let i = 0; i < nStroke; i++) {
    const baseY = r(40, H - 40);
    const x0 = r(-40, 120);
    const x3 = r(W - 120, W + 40);
    const x1 = r(x0, (x0 + x3) / 2);
    const x2 = r((x0 + x3) / 2, x3);
    const sway = r(40, 120);
    const y0 = baseY + r(-20, 20);
    const y1 = baseY + (rnd() < 0.5 ? -sway : sway);
    const y2 = baseY + (rnd() < 0.5 ? -sway : sway);
    const y3 = baseY + r(-20, 20);
    const sw = f(r(16, 46));
    const col = pick(GESTURE);
    const op = f(r(0.8, 0.97));
    const d = `M ${f(x0)} ${f(y0)} C ${f(x1)} ${f(y1)}, ${f(x2)} ${f(y2)}, ${f(x3)} ${f(y3)}`;
    strokes.push(
      `<path d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" opacity="${op}"/>`,
    );
    // occasional thinner highlight stroke layered on top
    if (rnd() < 0.5) {
      strokes.push(
        `<path d="${d}" fill="none" stroke="${pick(GESTURE)}" stroke-width="${f(sw * r(0.25, 0.45))}" stroke-linecap="round" opacity="${f(r(0.5, 0.8))}"/>`,
      );
    }
    // occasional paint drip hanging down from along the stroke
    if (rnd() < 0.6) {
      const dx = r(x0 + 80, x3 - 80);
      const dy = baseY + r(0, 30);
      const len = r(30, 110);
      const dsw = f(r(2, 6));
      drips.push(
        `<path d="M ${f(dx)} ${f(dy)} q ${f(r(-10, 10))} ${f(len * 0.5)}, ${f(r(-6, 6))} ${f(len)}" fill="none" stroke="${col}" stroke-width="${dsw}" stroke-linecap="round" opacity="${f(r(0.45, 0.75))}"/>`,
      );
      // drip bead at the end
      drips.push(
        `<circle cx="${f(dx + r(-6, 6))}" cy="${f(dy + len)}" r="${f(dsw * r(1.1, 1.8))}" fill="${col}" opacity="${f(r(0.5, 0.8))}"/>`,
      );
    }
  }

  // --- palette-knife dabs (bold filled blobs) ---
  const dabs = [];
  const nDab = ri(1, 3);
  for (let i = 0; i < nDab; i++) {
    const cx = r(80, W - 80);
    const cy = r(50, H - 50);
    const col = pick(GESTURE);
    const pts = [];
    const n = ri(5, 7);
    const rad = r(18, 42);
    for (let k = 0; k < n; k++) {
      const ang = (k / n) * Math.PI * 2;
      const rr = rad * r(0.55, 1.25);
      pts.push(`${f(cx + Math.cos(ang) * rr)},${f(cy + Math.sin(ang) * rr * 0.7)}`);
    }
    dabs.push(`<polygon points="${pts.join(" ")}" fill="${col}" opacity="${f(r(0.6, 0.85))}"/>`);
  }

  // --- splatter ---
  const splat = [];
  const centers = [];
  const nC = ri(2, 3);
  for (let i = 0; i < nC; i++) centers.push([r(100, W - 100), r(40, H - 40)]);
  const nDots = ri(28, 46);
  for (let i = 0; i < nDots; i++) {
    let x, y;
    if (rnd() < 0.65) {
      const [cx, cy] = pick(centers);
      x = cx + (rnd() - 0.5) * r(80, 260);
      y = cy + (rnd() - 0.5) * r(60, 180);
    } else {
      x = r(0, W);
      y = r(0, H);
    }
    const col = pick(GESTURE);
    const op = f(r(0.3, 0.9));
    if (rnd() < 0.25) {
      // elongated splat
      const rx = f(r(3, 11));
      const ry = f(r(1, 3));
      const rot = f(r(0, 180));
      splat.push(
        `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${rx}" ry="${ry}" fill="${col}" opacity="${op}" transform="rotate(${rot} ${f(x)} ${f(y)})"/>`,
      );
    } else {
      splat.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r(1.2, 7))}" fill="${col}" opacity="${op}"/>`);
    }
  }

  // --- centered title caption (artistic font, cream halo for legibility) ---
  const cx = W / 2;
  const cy = H / 2;
  const { lines, fs } = layoutTitle(title);
  const halo = Math.max(5, Math.round(fs * 0.14));
  const maxTL = 900; // keep within 1200 banner with comfortable side margins
  const tlOf = (ln) => Math.min(maxTL, Math.round(ln.length * fs * 0.6));
  const tspans = lines
    .map((ln, i) => {
      const dy = lines.length === 1 ? "0.34em" : i === 0 ? "-0.30em" : "1.06em";
      return `<tspan x="${cx}" dy="${dy}" textLength="${tlOf(ln)}" lengthAdjust="spacingAndGlyphs">${esc(ln)}</tspan>`;
    })
    .join("");
  // hand-drawn accent underline beneath the title
  const ulW = Math.min(560, Math.max(...lines.map(tlOf)) * 0.82);
  const ulY = cy + (lines.length === 1 ? fs * 0.66 : fs * 1.55);
  const ulCol = pick([C.crimson, C.gold, C.cobalt]);
  const underline = `<path d="M ${f(cx - ulW / 2)} ${f(ulY)} q ${f(ulW / 4)} ${f(r(-6, 6))}, ${f(ulW / 2)} ${f(r(-3, 3))} t ${f(ulW / 2)} ${f(r(-4, 4))}" fill="none" stroke="${ulCol}" stroke-width="${f(Math.max(4, fs * 0.09))}" stroke-linecap="round" opacity="0.9" filter="url(#rough)"/>`;
  const fontStack = `'Marker Felt','Segoe Print','Bradley Hand','Brush Script MT','Comic Sans MS',cursive`;
  const caption = `<g class="cap" text-anchor="middle">
    ${underline}
    <text x="${cx}" y="${cy}" font-size="${fs}" font-family="${fontStack}" font-weight="700" paint-order="stroke" stroke="${C.cream1}" stroke-width="${halo}" stroke-linejoin="round" fill="${C.brownDk}">${tspans}</text>
  </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <filter id="rough" x="-15%" y="-40%" width="130%" height="180%">
      <feTurbulence type="fractalNoise" baseFrequency="0.018 0.024" numOctaves="3" seed="${tSeed1}" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="13" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="soft"><feGaussianBlur stdDeviation="18"/></filter>
    <filter id="canvas" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${tSeed2}" result="t"/>
      <feColorMatrix in="t" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0"/>
    </filter>
    <style>
      .cap { font-family: "Marker Felt", "Segoe Print", "Bradley Hand", "Brush Script MT", "Comic Sans MS", cursive; font-weight: 700; }
    </style>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.cream1}"/>
  <g filter="url(#soft)">
    ${washes.join("\n    ")}
  </g>
  <g filter="url(#rough)">
    ${strokes.join("\n    ")}
    ${dabs.join("\n    ")}
  </g>
  <g>
    ${drips.join("\n    ")}
  </g>
  <g>
    ${splat.join("\n    ")}
  </g>
  <rect width="${W}" height="${H}" filter="url(#canvas)" opacity="0.05"/>
  ${caption}
</svg>
`;
}

// --- walk docs ---
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

function headingText(line) {
  return line.replace(/^#{1,6}\s+/, "").trim();
}

const FENCE = /^\s*(`{3,}|~{3,})/;
const BANNER = /^\s*!?\[[^\]]*\]\(\/images\/.*\)\s*$/;
const HEADING = /^#{1,6}\s+\S/;

// Yields [index, line] for every line outside a fenced code block, so the two
// rewriters below never touch a markdown sample. docs/CLAUDE.md documents the
// banner convention by showing one; without this it was edited as if real.
function* outsideFences(lines) {
  let open = null;
  for (const [i, line] of lines.entries()) {
    const fence = FENCE.exec(line);
    if (fence) {
      const marker = fence[1];
      if (!open) open = { char: marker[0], len: marker.length };
      else if (marker[0] === open.char && marker.length >= open.len) open = null;
      continue;
    }
    if (!open) yield [i, line];
  }
}

// Drops any pre-existing /images/ reference line (placeholder or old).
export function stripBannerLines(lines) {
  const drop = new Set();
  for (const [i, line] of outsideFences(lines)) if (BANNER.test(line)) drop.add(i);
  return lines.filter((_, i) => !drop.has(i));
}

// Index of the line whose heading is the page title, or -1.
export function findTitleIndex(lines) {
  for (const [i, line] of outsideFences(lines)) if (HEADING.test(line)) return i;
  return -1;
}

// docs/CLAUDE.md is the project spec, not content: it carries no banner.
export function isGenerated(relPath) {
  return relPath !== "CLAUDE.md";
}

function main() {
  const files = walk(DOCS)
    .filter((p) => isGenerated(relative(DOCS, p)))
    .sort();
  const report = [];

  for (const mdPath of files) {
    const rel = relative(DOCS, mdPath); // e.g. 0-math/00-azon.md
    const webPath = "/images/" + rel.replace(/\.md$/, ".svg");
    const svgPath = join(IMG, rel.replace(/\.md$/, ".svg"));

    // patch markdown
    let lines = readFileSync(mdPath, "utf8").split("\n");

    lines = stripBannerLines(lines);

    const hi = findTitleIndex(lines);
    const title = hi >= 0 ? headingText(lines[hi]) : "ALMAAT";
    const alt = title.replace(/[\[\]]/g, "");
    const imgLine = `![${alt}](${webPath})`;

    // generate + write svg (with the page title rendered as caption)
    const svg = makeSvg(rel, title);
    mkdirSync(dirname(svgPath), { recursive: true });
    writeFileSync(svgPath, svg);

    if (hi < 0) {
      // no heading: prepend image
      lines = [imgLine, "", ...lines];
    } else {
      // normalize blank lines right after the heading, then insert padded image
      let j = hi + 1;
      while (j < lines.length && lines[j] === "") lines.splice(j, 1);
      lines.splice(hi + 1, 0, "", imgLine, "");
    }

    writeFileSync(mdPath, lines.join("\n"));
    report.push(`${rel}  ->  ${webPath}  [${alt}]`);
  }

  console.log(`generated ${files.length} banners\n`);
  console.log(report.join("\n"));
}

// Only generate when invoked directly; importing this module must have no side
// effects, so the helpers above can be unit-tested.
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
