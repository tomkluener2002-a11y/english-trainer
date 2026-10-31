/**
 * Prüft alle Inhalte: `bun run validate:content`
 * Einzelne JSON-Dateien (Unit oder Vokabelliste) prüfen:
 *   bun run validate:content pfad/zur/unit.json [pfad/zu/vocab.json]
 */
import { readFileSync } from 'node:fs'
import { placementBank, tracks, vocabulary } from '../src/content/index'
import { type Issue, validateContent, validateUnit, validateVocabList } from '../src/content/validate'

function print(issues: Issue[]) {
  for (const i of issues) {
    const tag = i.level === 'error' ? '\x1b[31m✖ Fehler \x1b[0m' : '\x1b[33m⚠ Hinweis\x1b[0m'
    console.log(`${tag} ${i.path}: ${i.message}`)
  }
}

const files = process.argv.slice(2)
let issues: Issue[]
if (files.length) {
  const known = new Set(vocabulary.map((v) => v.id))
  issues = []
  const units: unknown[] = []
  for (const f of files) {
    const data: unknown = JSON.parse(readFileSync(f, 'utf8'))
    if (Array.isArray(data)) {
      const r = validateVocabList(data)
      issues.push(...r.issues)
      r.ids.forEach((id) => known.add(id))
    } else units.push(data)
  }
  for (const u of units) issues.push(...validateUnit(u, known))
} else {
  const r = validateContent({ tracks, vocab: vocabulary, placement: placementBank })
  issues = r.issues
  const s = r.stats
  console.log(`Inhalte: ${s.tracks} Tracks · ${s.units} Units · ${s.lessons} Lektionen · ${s.exercises} Aufgaben · ${s.vocab} Vokabeln · ${s.placement} Einstufungsfragen`)
}
print(issues)
const errors = issues.filter((i) => i.level === 'error').length
const warnings = issues.length - errors
console.log(errors ? `\x1b[31m${errors} Fehler\x1b[0m, ${warnings} Hinweise` : `\x1b[32m✔ Inhalte gültig\x1b[0m (${warnings} Hinweise)`)
process.exit(errors ? 1 : 0)
