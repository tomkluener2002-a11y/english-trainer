// Erzeugt die PWA-/Homescreen-Icons aus SVG-Vorlagen (einmalig ausführen: `bun run icons`).
import sharp from 'sharp'

const gradient = `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4f46e5"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>`

// Sprechblase mit "EN", ausgelegt auf eine 512er-Fläche
const bubble = `
  <path d="M120 150h272a32 32 0 0 1 32 32v136a32 32 0 0 1-32 32H250l-78 62v-62h-52a32 32 0 0 1-32-32V182a32 32 0 0 1 32-32z" fill="#fff"/>
  <text x="256" y="292" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="128" font-weight="800" fill="#4f46e5">EN</text>`

// Abgerundetes Icon (purpose "any")
const rounded = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${gradient}
  <rect width="512" height="512" rx="112" fill="url(#g)"/>${bubble}</svg>`

// Vollflächig, Motiv in der Safe-Zone (maskable + Apple Touch Icon, iOS rundet selbst ab)
const fullBleed = (scale) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">${gradient}
  <rect width="512" height="512" fill="url(#g)"/>
  <g transform="translate(256 256) scale(${scale}) translate(-256 -265)">${bubble}</g></svg>`

const out = [
  ['public/pwa-64x64.png', rounded, 64],
  ['public/pwa-192x192.png', rounded, 192],
  ['public/pwa-512x512.png', rounded, 512],
  ['public/maskable-icon-512x512.png', fullBleed(0.8), 512],
  ['public/apple-touch-icon-180x180.png', fullBleed(1), 180],
]

for (const [file, svg, size] of out) {
  await sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png().toFile(file)
  console.log('✔', file)
}
