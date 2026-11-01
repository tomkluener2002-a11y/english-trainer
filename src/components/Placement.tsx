/** Adaptiver Einstufungstest: Intro, Runner (ohne Herzen, „Ich weiß es nicht“) und Ergebnis. */
import { useCallback, useEffect, useRef, useState } from 'react'
import { core, placementBank } from '../content'
import { CEFR_LEVELS, type Cefr, type PlacementQuestion } from '../content/schema'
import {
  answerPlacement,
  isFinished,
  levelStats,
  nextQuestion,
  type PlacementState,
  placementProgress,
  placementResult,
  startPlacement,
} from '../lib/placement'
import { startUnitForLevel, unitsBelowLevel } from '../lib/progress'
import { stopSpeaking } from '../lib/speech'
import { applyPlacement, skipPlacement, startFromScratch } from '../state/actions'
import { useAppState } from '../state/store'
import { Confetti } from './Confetti'
import { type CheckResult, ExerciseView } from './exercises'
import { exerciseTitle } from './exercises/meta'
import { CheckIcon, XIcon } from './Icons'
import { Mascot, MascotSays } from './Mascot'
import { navigate } from './router'
import { sfx } from './sfx'
import { CEFR_INFO, pal } from './theme'
import { Modal, ProgressBar } from './ui'

export function PlacementIntro() {
  return (
    <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
      <main className="mx-auto flex w-full max-w-[480px] flex-1 flex-col justify-center gap-6 px-5">
        <MascotSays mood="thinking" layout="column" size={150}>
          Lass uns herausfinden, wo du stehst! Die Fragen passen sich deinen Antworten an.
        </MascotSays>
        <ul className="mx-auto flex flex-col gap-2 text-[16px] font-bold text-ink-soft">
          <li>⏱️ ca. 5 Minuten · 15–25 Fragen</li>
          <li>❤️ keine Herzen – Fehler sind hier egal</li>
          <li>🤷 Unsicher? Tippe auf „Weiß ich nicht“</li>
        </ul>
      </main>
      <footer className="mx-auto flex w-full max-w-[480px] flex-col gap-2 px-4">
        <button className="btn w-full" onClick={() => navigate('/placement')} autoFocus>
          Test starten
        </button>
        <button
          className="btn btn-ghost w-full"
          onClick={() => {
            skipPlacement()
            navigate('/', { replace: true })
          }}
        >
          Ich fange bei null an
        </button>
      </footer>
    </div>
  )
}

export function PlacementRunner() {
  const [ps, setPs] = useState<PlacementState>(startPlacement)
  const [q, setQ] = useState<PlacementQuestion | null>(() => nextQuestion(placementBank, startPlacement(), Math.random))
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(false)
  const [quit, setQuit] = useState(false)
  const checker = useRef<(() => CheckResult) | null>(null)
  const placed = useAppState().placement.done

  const setCheck = useCallback((fn: (() => CheckResult) | null) => {
    checker.current = fn
    setReady(!!fn)
  }, [])

  const answer = useCallback(
    (correct: boolean) => {
      if (!q) return
      stopSpeaking()
      sfx.click()
      const ns = answerPlacement(ps, { id: q.id, level: CEFR_LEVELS.indexOf(q.cefr) }, correct)
      const nq = isFinished(ns) ? null : nextQuestion(placementBank, ns, Math.random)
      checker.current = null
      setReady(false)
      setPs(ns)
      if (!nq) {
        setDone(true)
        sfx.complete()
      } else setQ(nq)
    },
    [ps, q],
  )

  const check = useCallback(() => {
    const fn = checker.current
    if (fn) answer(fn().correct)
  }, [answer])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !quit && checker.current) {
        e.preventDefault()
        check()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [check, quit])

  if (done || !q) return <PlacementResult ps={ps} />

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="safe-top sticky top-0 z-20 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-[600px] items-center gap-3 px-4">
          <button onClick={() => setQuit(true)} className="-ml-2 rounded-xl p-2 text-mute hover:bg-snow" aria-label="Test beenden">
            <XIcon size={26} />
          </button>
          <div className="flex-1">
            <ProgressBar value={placementProgress(ps)} color="#1CB0F6" label="Testfortschritt" />
          </div>
          <span className="text-sm font-extrabold text-mute">{ps.answers.length + 1}</span>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[480px] flex-1 px-4 pt-4 pb-48" key={q.id}>
        <div className="animate-slide-in">
          <p className="label-caps mb-1 text-sky">Einstufungstest</p>
          <h1 className="mb-6 text-[24px] leading-tight font-black">{exerciseTitle(q.exercise)}</h1>
          <ExerciseView ex={q.exercise} locked={false} result={null} setCheck={setCheck} submit={(r) => answer(r.correct)} mode="placement" />
        </div>
      </main>
      <footer className="pb-safe-4 fixed inset-x-0 bottom-0 z-20 border-t-2 border-line bg-white">
        <div className="mx-auto flex w-full max-w-[480px] gap-3 px-4 pt-4">
          <button className="btn btn-white flex-1 px-2 text-[13px] tracking-wide text-mute" onClick={() => answer(false)}>
            Weiß ich nicht
          </button>
          <button className="btn flex-1" disabled={!ready} onClick={check}>
            Prüfen
          </button>
        </div>
      </footer>
      <Modal open={quit} onClose={() => setQuit(false)} label="Test beenden?">
        <div className="flex flex-col items-center gap-3 text-center">
          <Mascot mood="sad" size={100} />
          <h2 className="text-[22px] font-black">Test wirklich beenden?</h2>
          <p className="text-ink-soft">Deine bisherigen Antworten werden nicht gespeichert.</p>
          <button className="btn btn-blue mt-3 w-full" onClick={() => setQuit(false)}>
            Weitermachen
          </button>
          <button className="btn btn-ghost w-full text-cardinal" onClick={() => navigate(placed ? '/profile' : '/', { replace: true })}>
            Beenden
          </button>
        </div>
      </Modal>
    </div>
  )
}

function PlacementResult({ ps }: { ps: PlacementState }) {
  const level: Cefr = placementResult(ps)
  const info = CEFR_INFO[level]
  const startUnit = startUnitForLevel(core, level)
  const passed = unitsBelowLevel(core, level).map((id) => core.units.find((u) => u.id === id)!)
  const startReady = !!startUnit && startUnit.lessons.length > 0
  const correct = ps.answers.filter((a) => a.correct).length
  const stats = levelStats(ps)

  const go = (to: '/' | '/fork', scratch = false) => {
    applyPlacement(level)
    if (scratch) startFromScratch()
    navigate(to, { replace: true })
  }

  return (
    <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
      <Confetti burst={90} />
      <main className="mx-auto w-full max-w-[480px] flex-1 px-5 pt-6 pb-4">
        <div className="flex flex-col items-center text-center">
          <Mascot mood="celebrate" size={130} />
          <p className="label-caps mt-3 text-mute">Dein Level</p>
          <div className="mt-1 animate-pop rounded-3xl border-2 border-b-[6px] border-sky-dark bg-sky px-8 py-2 text-[52px] leading-none font-black text-white">
            {level}
          </div>
          <h1 className="mt-3 text-[24px] font-black">{info.title}</h1>
          <p className="mt-1 text-[16px] text-ink-soft">{info.text}</p>
          <p className="mt-2 text-sm font-bold text-mute">
            {correct} von {ps.answers.length} Fragen richtig
          </p>
          <div className="mt-4 flex w-full justify-center gap-2" aria-label="Ergebnis je Niveau">
            {stats.map((s) => (
              <div key={s.level} className="flex flex-col items-center gap-1">
                <div className="flex h-14 w-8 items-end overflow-hidden rounded-lg bg-line">
                  <div className="w-full rounded-lg bg-feather" style={{ height: `${s.asked ? (s.correct / s.asked) * 100 : 0}%` }} />
                </div>
                <span className="text-xs font-extrabold text-mute">{CEFR_LEVELS[s.level]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border-2 border-line p-4">
          <h2 className="mb-1 text-lg font-black">Meine Empfehlung</h2>
          <p className="text-[15px] text-ink-soft">
            {startReady
              ? level === 'A1'
                ? `Wir starten ganz vorn mit „${startUnit!.title}“ und bauen Schritt für Schritt dein Fundament.`
                : `Du startest direkt bei „${startUnit!.title}“ (${startUnit!.cefr}). Alles davor ist als bestanden markiert – du kannst es trotzdem jederzeit üben.`
              : `Die Basiskurs-Units für ${level} sind noch in Arbeit. Wähle eine Spezialisierung, die zu deinen Interessen passt – die Grundlagen bleiben zum Wiederholen offen.`}
          </p>
          {passed.length > 0 && (
            <ul className="mt-3 flex flex-col gap-2">
              {passed.map((u) => (
                <li key={u.id} className="flex items-center gap-3 rounded-xl bg-snow px-3 py-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: pal(u.color).main }}>
                    <CheckIcon size={18} color="#fff" />
                  </span>
                  <span className="flex-1 font-bold">{u.title}</span>
                  <span className="text-xs font-extrabold text-mute">{u.cefr} · bestanden</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <footer className="mx-auto flex w-full max-w-[480px] flex-col gap-2 px-4">
        {startReady ? (
          <button className="btn w-full" onClick={() => go('/')} autoFocus>
            Los geht's
          </button>
        ) : (
          <>
            <button className="btn w-full" onClick={() => go('/fork')} autoFocus>
              Spezialisierung wählen
            </button>
            <button className="btn btn-white w-full" onClick={() => go('/')}>
              Zum Lernpfad
            </button>
          </>
        )}
        {level !== 'A1' && (
          <button className="btn btn-ghost w-full" onClick={() => go('/', true)}>
            Ganz von vorn anfangen
          </button>
        )}
      </footer>
    </div>
  )
}
