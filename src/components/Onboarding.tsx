/** Willkommen + Onboarding-Dialog mit dem Maskottchen. Daten bleiben lokal (localStorage). */
import { useState } from 'react'
import type { InterestId } from '../content/schema'
import { DAILY_GOALS } from '../lib/xp'
import { completeOnboarding, skipPlacement } from '../state/actions'
import type { Reason } from '../state/types'
import { BackIcon } from './Icons'
import { Mascot, MASCOT_NAME, MascotSays } from './Mascot'
import { INTERESTS, REASONS } from './options'
import { navigate } from './router'
import { Chip } from './ui'

const STEPS = 5

export function Onboarding() {
  const [step, setStep] = useState(-1)
  const [name, setName] = useState('')
  const [reason, setReason] = useState<Reason | null>(null)
  const [interests, setInterests] = useState<InterestId[]>([])
  const [goal, setGoal] = useState(20)
  const [start, setStart] = useState<'test' | 'scratch' | null>(null)
  const who = name.trim() || 'du'

  if (step < 0) return <Welcome onStart={() => setStep(0)} />

  const finish = () => {
    completeOnboarding({ name, reason, interests, dailyGoal: goal })
    if (start === 'scratch') {
      skipPlacement()
      navigate('/', { replace: true })
    } else navigate('/placement', { replace: true })
  }

  const canNext = [true, !!reason, interests.length > 0, true, !!start][step]
  const next = () => (step + 1 < STEPS ? setStep(step + 1) : finish())

  return (
    <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
      <header className="mx-auto flex h-16 w-full max-w-[480px] items-center gap-4 px-4">
        <button onClick={() => setStep(step - 1)} className="-ml-2 rounded-xl p-2 text-mute hover:bg-snow" aria-label="Zurück">
          <BackIcon size={26} />
        </button>
        <div className="flex flex-1 justify-center gap-2" aria-label={`Schritt ${step + 1} von ${STEPS}`}>
          {Array.from({ length: STEPS }, (_, i) => (
            <span
              key={i}
              className="h-3 rounded-full transition-all duration-300"
              style={{ width: i === step ? 32 : 12, background: i <= step ? '#58CC02' : '#E5E5E5' }}
            />
          ))}
        </div>
        <span className="w-10" />
      </header>

      <main className="mx-auto w-full max-w-[480px] flex-1 px-4 pt-2 pb-6" key={step}>
        <div className="animate-slide-in">
          {step === 0 && (
            <>
              <MascotSays mood="happy">
                Hi, ich bin {MASCOT_NAME}! 👋 Ich begleite dich beim Englischlernen. Wie darf ich dich nennen?
              </MascotSays>
              <label className="mt-6 block">
                <span className="sr-only">Dein Vorname</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 40))}
                  onKeyDown={(e) => e.key === 'Enter' && next()}
                  autoFocus
                  autoComplete="given-name"
                  placeholder="Dein Vorname (optional)"
                  className="w-full rounded-2xl border-2 border-line bg-snow px-4 py-4 text-lg font-bold outline-none placeholder:text-mute focus:border-sky"
                />
              </label>
              <p className="mt-3 text-sm text-mute">Dein Name bleibt nur auf diesem Gerät gespeichert.</p>
            </>
          )}
          {step === 1 && (
            <>
              <MascotSays>Schön, dich kennenzulernen, {who}! Warum möchtest du Englisch lernen?</MascotSays>
              <div className="mt-6 flex flex-col gap-3">
                {REASONS.map((r) => (
                  <Chip key={r.id} emoji={r.emoji} selected={reason === r.id} onClick={() => setReason(r.id)}>
                    {r.label}
                  </Chip>
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <MascotSays mood="thinking">Wofür interessierst du dich? Wähle alles, was passt – daraus schlage ich dir später Spezialisierungen vor.</MascotSays>
              <div className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2">
                {INTERESTS.map((it) => (
                  <Chip
                    key={it.id}
                    emoji={it.emoji}
                    selected={interests.includes(it.id)}
                    onClick={() => setInterests((xs) => (xs.includes(it.id) ? xs.filter((x) => x !== it.id) : [...xs, it.id]))}
                  >
                    {it.label}
                  </Chip>
                ))}
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <MascotSays>Wie viel Zeit möchtest du täglich investieren? Kleine Schritte jeden Tag wirken am besten.</MascotSays>
              <div className="mt-6 flex flex-col gap-3">
                {DAILY_GOALS.map((g) => (
                  <button
                    key={g.xp}
                    type="button"
                    data-state={goal === g.xp ? 'selected' : undefined}
                    aria-pressed={goal === g.xp}
                    onClick={() => setGoal(g.xp)}
                    className="card3d flex items-center justify-between px-5 py-4 text-[17px] font-bold"
                  >
                    <span>{g.minutes} Min. / Tag</span>
                    <span className="font-extrabold opacity-70">{g.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <MascotSays mood="thinking">Super! Wie gut ist dein Englisch schon?</MascotSays>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  data-state={start === 'test' ? 'selected' : undefined}
                  aria-pressed={start === 'test'}
                  onClick={() => setStart('test')}
                  className="card3d flex items-center gap-4 px-4 py-4 text-left"
                >
                  <span className="text-4xl">🧭</span>
                  <span>
                    <span className="block text-[17px] font-extrabold">Einstufungstest machen</span>
                    <span className="block text-[15px] font-semibold text-ink-soft">Empfohlen · ca. 5 Minuten · ich finde dein Level</span>
                  </span>
                </button>
                <button
                  type="button"
                  data-state={start === 'scratch' ? 'selected' : undefined}
                  aria-pressed={start === 'scratch'}
                  onClick={() => setStart('scratch')}
                  className="card3d flex items-center gap-4 px-4 py-4 text-left"
                >
                  <span className="text-4xl">🌱</span>
                  <span>
                    <span className="block text-[17px] font-extrabold">Ich fange bei null an</span>
                    <span className="block text-[15px] font-semibold text-ink-soft">Direkt mit der ersten Lektion starten</span>
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[480px] border-t-2 border-line px-4 pt-4">
        <button className="btn w-full" disabled={!canNext} onClick={next}>
          {step === 4 ? "Los geht's" : 'Weiter'}
        </button>
      </footer>
    </div>
  )
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
      <main className="mx-auto flex w-full max-w-[480px] flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-feather-light/60 blur-2xl" />
          <Mascot mood="happy" size={210} />
        </div>
        <h1 className="mt-6 text-[34px] leading-tight font-black text-feather">English Trainer</h1>
        <p className="mt-3 max-w-[320px] text-[19px] leading-snug font-bold text-ink-soft">
          Englisch lernen – spielerisch, kostenlos und in nur 5 Minuten am Tag.
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-extrabold text-ink-soft">
          <li className="rounded-full bg-snow px-3 py-1.5">🧭 Einstufungstest</li>
          <li className="rounded-full bg-snow px-3 py-1.5">🗺️ Lernpfad A1–B2</li>
          <li className="rounded-full bg-snow px-3 py-1.5">🎯 Spezialisierungen</li>
        </ul>
      </main>
      <footer className="mx-auto flex w-full max-w-[480px] flex-col gap-3 px-4">
        <button className="btn w-full" onClick={onStart} autoFocus>
          Los geht's
        </button>
        <p className="pb-1 text-center text-xs text-mute">Ohne Konto · alle Daten bleiben auf deinem Gerät</p>
      </footer>
    </div>
  )
}
