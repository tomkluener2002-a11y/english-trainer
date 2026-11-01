// Erzeugt die PWA-/Homescreen-Icons und Favicons aus SVG-Vorlagen (einmalig ausführen: `bun run icons`).
// Motiv: Maskottchen „Pip“ (Fuchs, siehe src/components/Mascot.tsx) auf grünem Grund.
import { writeFileSync } from 'node:fs'
import sharp from 'sharp'

const GREEN = '#58CC02'
const ORANGE = '#FF8A1F'
const ORANGE_DARK = '#E06A00'
const CREAM = '#FFF4E0'
const INK = '#3C2A1E'

// Fuchs im 200er-Raster (entspricht dem Maskottchen, Ausdruck „neutral/happy“)
const fox = `
  <path d="M150 168c26 2 42-18 38-44-2-12-12-20-20-16 4 18-6 34-26 40z" fill="${ORANGE}"/>
  <path d="M183 112c-6-6-14-6-16-2 3 8 2 16-2 22 10-2 19-10 18-20z" fill="${CREAM}"/>
  <path d="M46 78 58 24q3-8 10-2l30 34z" fill="${ORANGE}"/>
  <path d="M60 62 64 36l18 20z" fill="${INK}" opacity=".85"/>
  <path d="M154 78 142 24q-3-8-10-2l-30 34z" fill="${ORANGE}"/>
  <path d="M140 62 136 36l-18 20z" fill="${INK}" opacity=".85"/>
  <path d="M100 46c40 0 66 30 66 72 0 40-22 66-66 66s-66-26-66-66c0-42 26-72 66-72z" fill="${ORANGE}"/>
  <path d="M100 110c-14-8-40-10-54 2 0 26 22 44 54 44s54-18 54-44c-14-12-40-10-54-2z" fill="${CREAM}"/>
  <ellipse cx="100" cy="166" rx="30" ry="16" fill="${CREAM}"/>
  <ellipse cx="60" cy="128" rx="9" ry="6" fill="#FF9FB0" opacity=".7"/>
  <ellipse cx="140" cy="128" rx="9" ry="6" fill="#FF9FB0" opacity=".7"/>
  <ellipse cx="78" cy="104" rx="15" ry="17" fill="#fff"/>
  <ellipse cx="122" cy="104" rx="15" ry="17" fill="#fff"/>
  <ellipse cx="80" cy="106" rx="8.5" ry="10" fill="${INK}"/>
  <ellipse cx="124" cy="106" rx="8.5" ry="10" fill="${INK}"/>
  <circle cx="83" cy="101" r="3.2" fill="#fff"/>
  <circle cx="127" cy="101" r="3.2" fill="#fff"/>
  <path d="M93 122h14q2 0 0 3l-5 5q-2 2-4 0l-5-5q-2-3 0-3z" fill="${INK}"/>
  <path d="M84 134q16 22 32 0z" fill="${INK}"/>
  <path d="M92 142q8 7 16 0q-8-6-16 0z" fill="#FF6B81"/>
  <ellipse cx="40" cy="146" rx="10" ry="16" fill="${ORANGE_DARK}" transform="rotate(20 40 146)"/>
  <ellipse cx="160" cy="146" rx="10" ry="16" fill="${ORANGE_DARK}" transform="rotate(-20 160 146)"/>
  <ellipse cx="78" cy="184" rx="15" ry="7" fill="${ORANGE_DARK}"/>
  <ellipse cx="122" cy="184" rx="15" ry="7" fill="${ORANGE_DARK}"/>`

/** Fuchs zentriert auf 512er-Fläche, `scale` = Anteil der Fläche. */
const foxAt = (scale) => {
  const s = (512 * scale) / 200
  const off = (512 - 200 * s) / 2
  return `<g transform="translate(${off} ${off + 6}) scale(${s})">${fox}</g>`
}

const rounded = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="${GREEN}"/>
  ${foxAt(0.78)}</svg>`

const fullBleed = (scale) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${GREEN}"/>${foxAt(scale)}</svg>`

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="120" fill="${GREEN}"/>${foxAt(0.86)}</svg>`

const out = [
  ['public/pwa-64x64.png', rounded, 64],
  ['public/pwa-192x192.png', rounded, 192],
  ['public/pwa-512x512.png', rounded, 512],
  ['public/maskable-icon-512x512.png', fullBleed(0.62), 512],
  ['public/apple-touch-icon-180x180.png', fullBleed(0.74), 180],
]

for (const [file, svg, size] of out) {
  await sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png().toFile(file)
  console.log('✔', file)
}

writeFileSync('public/favicon.svg', favicon.replace(/\n\s*/g, ' '))
console.log('✔ public/favicon.svg')

// favicon.ico: ICO-Container mit eingebettetem 48er-PNG (von allen aktuellen Browsern unterstützt)
const png = await sharp(Buffer.from(favicon), { density: 300 }).resize(48, 48).png().toBuffer()
const header = Buffer.alloc(22)
header.writeUInt16LE(0, 0) // reserviert
header.writeUInt16LE(1, 2) // Typ: Icon
header.writeUInt16LE(1, 4) // Anzahl
header.writeUInt8(48, 6) // Breite
header.writeUInt8(48, 7) // Höhe
header.writeUInt8(0, 8) // Palette
header.writeUInt8(0, 9) // reserviert
header.writeUInt16LE(1, 10) // Farbebenen
header.writeUInt16LE(32, 12) // Bit pro Pixel
header.writeUInt32LE(png.length, 14) // Größe
header.writeUInt32LE(22, 18) // Offset
writeFileSync('public/favicon.ico', Buffer.concat([header, png]))
console.log('✔ public/favicon.ico')
