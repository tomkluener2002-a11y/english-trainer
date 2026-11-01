/** Vollbild-Lektions-Player: Fortschritt, Herzen, Aufgabe, PRÜFEN, Feedback-Sheet, Wiederholung falscher Aufgaben. */
import { useCallback, useEffect, useRef, useState } from 'react'
import { currentHearts, MAX_HEARTS, REGEN_MS } from '../lib/hearts'
import { advance, currentItem, isSessionDone, type SessionState, sessionProgress, startSession, submit } from '../lib/session'
import { stopSpeaking } from '../lib/speech'
import { finishSession, loseHeart, PRICES, recordAnswer, refillHeartsWithGems, type SessionSummary, updateSettings } from '../state/actions'
import { getState, useAppState, useNow } from '../state/store'
import { Celebrate } from './Celebrate'
import { useLatest } from './hooks'
import { type CheckResult, ExerciseView } from './exercises'
import { exerciseTitle } from './exercises/meta'
import { recognitionSupported } from './exercises/SpeakExercise'
import { CheckIcon, FlameIcon, GemIcon, HeartIcon, XIcon } from './Icons'
import { Mascot } from './Mascot'
import { navigate } from './router'
import type { SessionSpec } from './sessions'
import { sfx } from './sfx'
import { Modal, ProgressBar } from './ui'

type Phase = 'play' | 'feedback' | 'hearts' | 'done'

const PRAISE = ['Super!', 'Richtig!', 'Klasse!', 'Genau!', 'Stark!', 'Toll gemacht!']
const HOUR = 60 * 60 * 1000

const heartsNow = () => currentHearts(getState().hearts, Date.now()).count

export function LessonPlayer({ spec, onDone, onExit }: { spec: SessionSpec; onDone: (s: SessionSummary) => void; onExit: () => void }) {
  const state = useAppState()
  const now = useNow()
  const heartsOn = spec.usesHearts && state.settings.hearts
  const hearts = currentHearts(state.hearts, now).count

  const [session, setSession] = useState<SessionState>(() => startSession(spec.items))
  const [phase, setPhase] = useState<Phase>(() => (heartsOn && heartsNow() <= 0 ? 'hearts' : 'play'))
  const [result, setResult] = useState<CheckResult | null>(null)
  const [ready, setReady] = useState(false)
  const [quit, setQuit] = useState(false)
  const [summary, setSummary] = useState<SessionSummary | null>(null)
  const [heartAnim, setHeartAnim] = useState(0)
  const [praise, setPraise] = useState(PRAISE[0])
  const checker = useRef<(() => CheckResult) | null>(null)
  const [started] = useState(() => Date.now())
  const item = currentItem(session)

  const setCheck = useCallback((fn: (() => CheckResult) | null) => {
    checker.current = fn
    setReady(!!fn)
  }, [])

  useEffect(() => () => stopSpeaking(), [])

  const finish = useCallback(
    (s: SessionState) => {
      const sum = finishSession({ kind: spec.kind, session: s, durationMs: Date.now() - started, lessonId: spec.lessonId, unitId: spec.unitId })
      sfx.complete()
      setSummary(sum)
      setPhase('done')
    },
    [spec, started],
  )

  const proceed = useCallback(
    (s: SessionState) => {
      const next = advance(s)
      checker.current = null
      setReady(false)
      setResult(null)
      if (isSessionDone(next)) {
        setSession(next)
        finish(next)
        return
      }
      setSession(next)
      setPhase(heartsOn && heartsNow() <= 0 ? 'hearts' : 'play')
    },
    [finish, heartsOn],
  )

  const handle = useCallback(
    (r: CheckResult) => {
      if (!item || phase !== 'play') return
      stopSpeaking()
      if (!r.skipped) recordAnswer(item.key, item.ex, r.correct)
      const s1 = submit(session, { correct: r.correct, skipped: r.skipped })
      if (r.silent) {
        proceed(s1)
        return
      }
      setSession(s1)
      setResult(r)
      setPhase('feedback')
      if (r.skipped) sfx.click()
      else if (r.correct) {
        setPraise(PRAISE[Math.floor(Math.random() * PRAISE.length)])
        sfx.correct()
      } else {
        sfx.wrong()
        if (heartsOn) {
          loseHeart()
          setHeartAnim((n) => n + 1)
        }
      }
    },
    [item, phase, session, proceed, heartsOn],
  )

  const check = useCallback(() => {
    const fn = checker.current
    if (fn) handle(fn())
  }, [handle])

  const skipPaused = useCallback(
    (kind: 'speak' | 'listen') => {
      updateSettings(kind === 'speak' ? { speakingOffUntil: Date.now() + HOUR } : { listeningOffUntil: Date.now() + HOUR })
      handle({ correct: true, skipped: true, silent: true })
    },
    [handle],
  )

  // Pausierte Sprech-/Höraufgaben ohne Strafe überspringen.
  useEffect(() => {
    if (!item || phase !== 'play') return
    const t = item.ex.type
    if ((t === 'speak' && state.settings.speakingOffUntil > Date.now()) || ((t === 'listen-choice' || t === 'listen-type') && state.settings.listeningOffUntil > Date.now())) {
      const timer = window.setTimeout(() => handle({ correct: true, skipped: true, silent: true }), 0)
      return () => window.clearTimeout(timer)
    }
  }, [item, phase, state.settings.speakingOffUntil, state.settings.listeningOffUntil, handle])

  // Enter = Prüfen / Weiter
  const keyRef = useLatest({ check, proceed: () => proceed(session), phase, ready })
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || quit) return
      const k = keyRef.current
      if (k.phase === 'feedback') {
        e.preventDefault()
        k.proceed()
      } else if (k.phase === 'play' && k.ready) {
        e.preventDefault()
        k.check()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [quit, keyRef])

  if (phase === 'done' && summary) return <Celebrate spec={spec} summary={summary} onDone={() => onDone(summary)} />

  if (phase === 'hearts')
    return (
      <HeartsEmpty
        onRefilled={() => setPhase('play')}
        onPractice={() => navigate('/session/heal', { replace: true })}
        onQuit={onExit}
      />
    )

  if (!item) return null
  const ex = item.ex
  const isListen = ex.type === 'listen-choice' || ex.type === 'listen-type'
  const skipLabel = ex.type === 'speak' && recognitionSupported ? '🤐 Kann gerade nicht sprechen – überspringen' : isListen ? '🔇 Kann gerade nicht zuhören – überspringen' : null
  const primaryLabel = ex.type === 'intro' || (ex.type === 'speak' && !recognitionSupported) ? 'Weiter' : 'Prüfen'
  const progress = sessionProgress(session)
  const locked = phase === 'feedback'

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      {/* Kopfzeile */}
      <header className="safe-top sticky top-0 z-20 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-[600px] items-center gap-3 px-4">
          <button onClick={() => setQuit(true)} className="-ml-2 rounded-xl p-2 text-mute hover:bg-snow" aria-label="Lektion beenden">
            <XIcon size={26} />
          </button>
          <div className="relative flex-1">
            <ProgressBar value={progress} label="Lektionsfortschritt" />
            {session.combo >= 3 && !locked && (
              <span className="absolute -top-5 left-0 flex animate-pop items-center gap-1 text-xs font-black tracking-wide text-fox uppercase">
                <FlameIcon size={14} /> {session.combo} in Folge
              </span>
            )}
          </div>
          {heartsOn ? (
            <div className="flex items-center gap-1 text-lg font-extrabold text-cardinal" aria-label={`${hearts} Herzen`}>
              <span key={heartAnim} className={heartAnim ? 'animate-heart-loss' : ''}>
                <HeartIcon size={28} broken={hearts === 0} />
              </span>
              {hearts}
            </div>
          ) : (
            <div className="flex items-center gap-1 text-lg font-extrabold text-cardinal" aria-label="Unbegrenzte Herzen">
              <HeartIcon size={28} />∞
            </div>
          )}
        </div>
      </header>

      {/* Aufgabe */}
      <main className="mx-auto w-full max-w-[480px] flex-1 px-4 pt-4 pb-56" key={`${session.index}-${item.key}`}>
        <div className="animate-slide-in">
          {item.retry && (
            <p className="mb-2 flex items-center gap-2 text-sm font-extrabold tracking-wide text-fox uppercase">
              <span aria-hidden="true">↻</span> Vorheriger Fehler
            </p>
          )}
          <h1 className="mb-6 text-[24px] leading-tight font-black text-ink">{exerciseTitle(ex)}</h1>
          <ExerciseView ex={ex} locked={locked} result={result} setCheck={setCheck} submit={handle} mode="lesson" />
        </div>
      </main>

      {/* Fußleiste / Feedback */}
      {phase === 'feedback' && result ? (
        <FeedbackSheet result={result} explanation={ex.explanation} praise={praise} combo={session.combo} onNext={() => proceed(session)} />
      ) : (
        <footer className="pb-safe-4 fixed inset-x-0 bottom-0 z-20 border-t-2 border-line bg-white">
          <div className="mx-auto flex w-full max-w-[480px] flex-col gap-2 px-4 pt-4">
            {skipLabel && (
              <button
                type="button"
                onClick={() => skipPaused(ex.type === 'speak' ? 'speak' : 'listen')}
                className="btn btn-white min-h-[44px] text-[14px]"
              >
                {skipLabel}
              </button>
            )}
            {skipLabel && (
              <p className="-mt-1 text-center text-[12px] font-semibold text-mute">Solche Aufgaben werden dann 1 Std. übersprungen (Profil → Einstellungen).</p>
            )}
            {ex.type !== 'match' && (
              <button type="button" className="btn w-full" disabled={!ready} onClick={check}>
                {primaryLabel}
              </button>
            )}
            {ex.type === 'match' && <p className="py-3 text-center text-ink-soft">Tippe auf die passenden Paare</p>}
          </div>
        </footer>
      )}

      <Modal open={quit} onClose={() => setQuit(false)} label="Lektion beenden?">
        <div className="flex flex-col items-center gap-3 text-center">
          <Mascot mood="sad" size={110} />
          <h2 className="text-[22px] font-black">Warte, nicht aufgeben!</h2>
          <p className="text-ink-soft">Wenn du jetzt aufhörst, geht dein Fortschritt in dieser Lektion verloren.</p>
          <button className="btn btn-blue mt-3 w-full" onClick={() => setQuit(false)}>
            Weiterlernen
          </button>
          <button className="btn btn-ghost w-full text-cardinal" onClick={onExit}>
            Beenden
          </button>
        </div>
      </Modal>
    </div>
  )
}

function FeedbackSheet({
  result,
  explanation,
  praise,
  combo,
  onNext,
}: {
  result: CheckResult
  explanation?: string
  praise: string
  combo: number
  onNext: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    ref.current?.focus({ preventScroll: true })
  }, [])
  const kind = result.skipped ? 'neutral' : result.correct ? 'ok' : 'bad'
  const theme = {
    ok: { bg: '#D7FFB8', fg: '#58A700', btn: '' },
    bad: { bg: '#FFDFE0', fg: '#EA2B2B', btn: 'btn-red' },
    neutral: { bg: '#DDF4FF', fg: '#1899D6', btn: 'btn-blue' },
  }[kind]
  return (
    <div className="pb-safe-4 fixed inset-x-0 bottom-0 z-30 animate-slide-up" style={{ background: theme.bg }} role="status" aria-live="assertive">
      <div className="mx-auto w-full max-w-[480px] px-4 pt-5">
        <div className="mb-4 flex items-start gap-3" style={{ color: theme.fg }}>
          <span className="flex h-11 w-11 shrink-0 animate-pop items-center justify-center rounded-full bg-white">
            {kind === 'bad' ? <XIcon size={24} color={theme.fg} /> : <CheckIcon size={26} color={theme.fg} />}
          </span>
          <div className="min-w-0 flex-1">
            {kind === 'ok' && (
              <>
                <h2 className="text-[22px] font-black">{result.nearMiss ? 'Fast perfekt!' : praise}</h2>
                {result.nearMiss && (
                  <p className="mt-1 text-[16px] font-bold">
                    Achte auf die Schreibweise: <span className="font-black" lang="en">{result.nearMiss}</span>
                  </p>
                )}
                {!result.nearMiss && combo >= 3 && (
                  <p className="mt-0.5 flex items-center gap-1 text-[15px] font-extrabold">
                    <FlameIcon size={16} /> {combo} richtige in Folge!
                  </p>
                )}
              </>
            )}
            {kind === 'bad' && (
              <>
                <h2 className="text-[20px] font-black">Richtige Lösung:</h2>
                <p className="mt-0.5 text-[17px] font-bold break-words">{result.solution}</p>
                {explanation && <p className="mt-2 text-[15px] font-semibold text-ink/80">{explanation}</p>}
              </>
            )}
            {kind === 'neutral' && (
              <>
                <h2 className="text-[20px] font-black">Kein Problem!</h2>
                {result.solution && <p className="mt-0.5 text-[17px] font-bold">{result.solution}</p>}
                {result.note && <p className="mt-2 text-[15px] font-semibold text-ink/80">{result.note}</p>}
              </>
            )}
          </div>
        </div>
        <button ref={ref} type="button" className={`btn w-full ${theme.btn}`} onClick={onNext}>
          {kind === 'bad' ? 'Verstanden' : 'Weiter'}
        </button>
      </div>
    </div>
  )
}

function HeartsEmpty({ onRefilled, onPractice, onQuit }: { onRefilled: () => void; onPractice: () => void; onQuit: () => void }) {
  const state = useAppState()
  const now = useNow()
  const h = currentHearts(state.hearts, now)
  useEffect(() => {
    if (h.count > 0) onRefilled()
  }, [h.count, onRefilled])
  const mins = h.nextAt ? Math.max(1, Math.round((h.nextAt - now) / 60000)) : Math.round(REGEN_MS / 60000)
  const canBuy = state.gems >= PRICES.heartsRefill
  return (
    <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="relative">
          <Mascot mood="sad" size={150} />
          <span className="absolute -right-4 -bottom-2 animate-pop">
            <HeartIcon size={56} broken />
          </span>
        </div>
        <h1 className="text-[26px] font-black">Keine Herzen mehr</h1>
        <p className="text-[17px] text-ink-soft">
          Fehler gehören dazu! Übe, um ein Herz zurückzubekommen – oder warte: Das nächste Herz kommt in <b className="text-ink">{mins} Min.</b>
        </p>
        <div className="flex gap-1" aria-label={`0 von ${MAX_HEARTS} Herzen`}>
          {Array.from({ length: MAX_HEARTS }, (_, i) => (
            <HeartIcon key={i} size={26} broken />
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[480px] flex-col gap-3 px-4 pb-2">
        <button className="btn w-full" onClick={onPractice}>
          Üben, um Herzen aufzufüllen
        </button>
        <button className="btn btn-white w-full" disabled={!canBuy} onClick={() => refillHeartsWithGems() && onRefilled()}>
          Auffüllen · <GemIcon size={20} /> {PRICES.heartsRefill}
        </button>
        <button className="btn btn-ghost w-full text-mute" onClick={onQuit}>
          Lektion beenden
        </button>
      </div>
    </div>
  )
}
