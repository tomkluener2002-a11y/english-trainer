import { useEffect, useMemo, useState } from 'react'
import type { TranslateExercise as TranslateEx } from '../../content/schema'
import { bankTokens, checkText } from '../../lib/answer'
import { shuffle } from '../../lib/rng'
import { MascotSays } from '../Mascot'
import { sfx } from '../sfx'
import { AudioButtons } from '../ui'
import type { ExerciseProps } from './types'

/** Wortbank-Übersetzung: Wörter antippen (oder per Tastatur tippen), Antippen in der Lösung entfernt sie wieder. */
export function TranslateExercise({ ex, locked, result, setCheck }: ExerciseProps<TranslateEx>) {
  const lang = ex.direction === 'de-en' ? 'en' : 'de'
  const tokens = useMemo(
    () => shuffle([...bankTokens(ex.answer), ...ex.distractors]).map((text, id) => ({ id, text })),
    [ex.answer, ex.distractors],
  )
  const [picked, setPicked] = useState<number[]>([])
  const [keyboard, setKeyboard] = useState(false)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const accepted = [ex.answer, ...(ex.accepted ?? [])]
    if (keyboard) {
      if (!typed.trim()) return setCheck(null)
      setCheck(() => {
        const r = checkText(typed, accepted, { lang })
        return { correct: r.correct, nearMiss: r.nearMiss ? r.closest : undefined, solution: ex.answer }
      })
    } else {
      if (!picked.length) return setCheck(null)
      const sentence = picked.map((i) => tokens[i].text).join(' ')
      setCheck(() => ({ correct: checkText(sentence, accepted, { lang, typos: false }).correct, solution: ex.answer }))
    }
  }, [picked, typed, keyboard, ex, lang, tokens, setCheck])

  const add = (i: number) => {
    if (locked || picked.includes(i)) return
    sfx.click()
    setPicked((p) => [...p, i])
  }
  const remove = (i: number) => {
    if (locked) return
    sfx.click()
    setPicked((p) => p.filter((x) => x !== i))
  }

  const answerColor = !locked || !result ? undefined : result.correct ? 'correct' : 'wrong'

  return (
    <div className="flex flex-col gap-5">
      <MascotSays size={84} mood="neutral">
        <div className="flex items-center gap-3">
          {ex.direction === 'en-de' && <AudioButtons text={ex.prompt} size="sm" autoPlay />}
          <span lang={ex.direction === 'en-de' ? 'en' : 'de'}>{ex.prompt}</span>
        </div>
      </MascotSays>

      {keyboard ? (
        <textarea
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
          disabled={locked}
          rows={3}
          autoFocus
          lang={lang}
          autoCorrect="off"
          spellCheck={false}
          placeholder={lang === 'en' ? 'Auf Englisch schreiben' : 'Auf Deutsch schreiben'}
          aria-label="Deine Übersetzung"
          className="w-full resize-none rounded-2xl border-2 border-line bg-snow p-4 text-lg font-bold outline-none placeholder:text-mute focus:border-sky"
        />
      ) : (
        <>
          <div
            className={`flex min-h-[116px] flex-wrap content-start gap-2 py-1 ${locked && result && !result.correct ? 'animate-shake' : ''}`}
            style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 56px, #E5E5E5 56px, #E5E5E5 58px)' }}
            aria-label="Deine Antwort"
            aria-live="polite"
          >
            {picked.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => remove(i)}
                disabled={locked}
                data-state={answerColor}
                className="card3d animate-pop px-3 py-2 text-[17px] font-bold"
                lang={lang}
              >
                {tokens[i].text}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-2" aria-label="Wortbank">
            {tokens.map((t) =>
              picked.includes(t.id) ? (
                <span key={t.id} className="rounded-2xl border-2 border-b-4 border-line bg-line px-3 py-2 text-[17px] font-bold text-transparent select-none" aria-hidden="true">
                  {t.text}
                </span>
              ) : (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => add(t.id)}
                  disabled={locked}
                  className="card3d px-3 py-2 text-[17px] font-bold"
                  lang={lang}
                >
                  {t.text}
                </button>
              ),
            )}
          </div>
        </>
      )}
      {!locked && (
        <button
          type="button"
          onClick={() => setKeyboard((k) => !k)}
          className="self-center rounded-xl px-3 py-2 text-sm font-extrabold tracking-wide text-sky uppercase hover:bg-sky-light"
        >
          {keyboard ? 'Wortbank verwenden' : '⌨️ Tastatur verwenden'}
        </button>
      )}
    </div>
  )
}
