/**
 * Übernimmt geprüfte Entwürfe aus content-drafts/*.json in src/content/drafts/ (TypeScript).
 *   bun scripts/gen-drafts.ts
 * Nur Units ohne Validator-FEHLER werden übernommen; der Rest wird gemeldet.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { vocabulary } from '../src/content/index'
import { validateUnit, validateVocabList } from '../src/content/validate'

const SRC = join(import.meta.dir, '../content-drafts')
const OUT = join(import.meta.dir, '../src/content/drafts')
mkdirSync(OUT, { recursive: true })
for (const f of readdirSync(OUT)) if (f !== 'README.md') rmSync(join(OUT, f))

const baseIds = new Set(vocabulary.map((v) => v.id))
const files = existsSync(SRC) ? readdirSync(SRC).filter((f) => f.endsWith('.json') && !f.endsWith('.vocab.json')).sort() : []
const accepted: { id: string; ident: string }[] = []
const rejected: string[] = []
const seenVocab = new Set<string>()

for (const f of files) {
  const id = f.replace(/\.json$/, '')
  const vocabFile = join(SRC, `${id}.vocab.json`)
  if (!existsSync(vocabFile)) {
    rejected.push(`${id}: keine .vocab.json`)
    continue
  }
  const unit = JSON.parse(readFileSync(join(SRC, f), 'utf8'))
  const vocab = JSON.parse(readFileSync(vocabFile, 'utf8')) as { id: string }[]
  const vr = validateVocabList(vocab)
  const known = new Set([...baseIds, ...seenVocab, ...vr.ids])
  const dup = vocab.filter((v) => baseIds.has(v.id) || seenVocab.has(v.id)).map((v) => v.id)
  const issues = [...vr.issues, ...validateUnit(unit, known, String(unit?.id ?? '').split('.')[0])].filter((i) => i.level === 'error')
  if (dup.length) issues.push({ level: 'error', path: id, message: `Vokabel-IDs bereits vergeben: ${dup.slice(0, 5).join(', ')}` } as never)
  if (issues.length) {
    rejected.push(`${id}: ${issues.length} Fehler, z.B. ${issues[0].path}: ${issues[0].message}`)
    continue
  }
  vocab.forEach((v) => seenVocab.add(v.id))
  const ident = 'd_' + id.replace(/[^a-z0-9]/gi, '_')
  writeFileSync(
    join(OUT, `${id}.ts`),
    `// Generiert von scripts/gen-drafts.ts aus content-drafts/${id}.json – nicht von Hand ändern.\nimport type { Unit, VocabEntry } from '../schema'\n\nexport const unit: Unit = ${JSON.stringify(unit, null, 2)}\n\nexport const vocab: VocabEntry[] = ${JSON.stringify(vocab, null, 2)}\n`,
  )
  accepted.push({ id, ident })
}

const index = `// Generiert von scripts/gen-drafts.ts – nicht von Hand ändern.
import type { Unit, VocabEntry } from '../schema'
${accepted.map((a) => `import { unit as ${a.ident}, vocab as ${a.ident}_vocab } from './${a.id}'`).join('\n')}

export const draftUnits: Unit[] = [${accepted.map((a) => a.ident).join(', ')}]
export const draftVocab: VocabEntry[] = [${accepted.map((a) => `...${a.ident}_vocab`).join(', ')}]
`
writeFileSync(join(OUT, 'index.ts'), index)
console.log(`Übernommen: ${accepted.length} Units`)
if (rejected.length) {
  console.log(`Abgelehnt (${rejected.length}):`)
  for (const r of rejected) console.log(' - ' + r)
}
