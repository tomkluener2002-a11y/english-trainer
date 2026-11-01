/** Üben-Hub: Spaced Repetition (schwache/fällige Wörter), Fehlerkiste, Unit-Wiederholung, Wortliste. */
import { useState } from 'react'
import { tracks, unitWords, vocabById } from '../content'
import { isUnitDone, isUnitPlayedThrough } from '../lib/progress'
import { dueWords, strength, weakWords } from '../lib/srs'
import { useAppState, useNow } from '../state/store'
import { Mascot, MascotSays } from './Mascot'
import { startRecommendation, useRecommendation, visibleTracks } from './recommendation'
import { navigate } from './router'
import { mistakeItems } from './sessions'
import { Page } from './Shell'
import { pal } from './theme'
import { AudioButtons } from './ui'

function HubCard({
  emoji,
  title,
  text,
  count,
  color,
  disabled,
  onClick,
}: {
  emoji: string
  title: string
  text: string
  count?: number
  color: keyof typeof COLORS
  disabled?: boolean
  onClick: () => void
}) {
  const c = COLORS[color]
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="card3d flex w-full items-center gap-4 p-4 text-left disabled:opacity-60"
      style={disabled ? undefined : { borderColor: c.border }}
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-[34px]" style={{ background: c.bg }}>
        {emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[18px] font-black">{title}</span>
        <span className="block text-[14px] font-semibold text-ink-soft">{text}</span>
      </span>
      {count !== undefined && count > 0 && (
        <span className="flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-sm font-black text-white" style={{ background: c.main }}>
          {count}
        </span>
      )}
    </button>
  )
}

const COLORS = {
  blue: { main: '#1CB0F6', bg: '#DDF4FF', border: '#84D8FF' },
  purple: { main: '#CE82FF', bg: '#F4E5FF', border: '#E3C1FF' },
  red: { main: '#FF4B4B', bg: '#FFDFE0', border: '#FFB2B2' },
}

export function PracticeScreen() {
  const s = useAppState()
  const now = useNow()
  const rec = useRecommendation()
  const [showAll, setShowAll] = useState(false)
  const learned = Object.keys(s.srs).filter((id) => vocabById.has(id))
  const weak = weakWords(s.srs, now).length
  const due = dueWords(s.srs, now).length
  const mistakes = mistakeItems(s).length
  const units = visibleTracks(s.tracks.chosen)
    .concat(tracks.filter((t) => t.kind === 'specialization' && !s.tracks.chosen.includes(t.id)))
    .flatMap((t) => t.units)
    .filter((u) => u.lessons.length && (isUnitPlayedThrough(s, u) || isUnitDone(s, u) || u.lessons.some((l) => s.lessons[l.id])) && unitWords(u).length >= 3)

  if (!learned.length) {
    return (
      <Page>
        <h1 className="mb-4 text-[28px] font-black">Üben</h1>
        <div className="flex flex-col items-center gap-4 rounded-3xl border-2 border-line p-6 text-center">
          <Mascot mood="thinking" size={130} />
          <h2 className="text-xl font-black">Hier sammle ich deine Wörter</h2>
          <p className="text-ink-soft">Mach deine erste Lektion – danach trainieren wir hier gezielt alles, was du gelernt hast.</p>
          <button className="btn w-full" onClick={() => startRecommendation(rec)}>
            Zur nächsten Lektion
          </button>
        </div>
      </Page>
    )
  }

  const words = [...learned].sort((a, b) => strength(s.srs[a]) - strength(s.srs[b]))
  return (
    <Page>
      <h1 className="mb-3 text-[28px] font-black">Üben</h1>
      <MascotSays size={80} mood="happy">
        {due > 0 ? `${due} ${due === 1 ? 'Wort ist' : 'Wörter sind'} reif für eine Wiederholung. Ein paar Minuten reichen!` : 'Regelmäßiges Wiederholen bringt Wörter ins Langzeitgedächtnis.'}
      </MascotSays>

      <div className="mt-4 flex flex-col gap-3">
        <HubCard emoji="🧠" title="Schwache Wörter trainieren" text="Gezielt die Wörter, die dir schwerfallen" count={weak} color="blue" onClick={() => navigate('/session/weak')} />
        <HubCard
          emoji="🔁"
          title="Fällige Wiederholungen"
          text={due ? 'Spaced Repetition: genau zur richtigen Zeit' : 'Gerade nichts fällig – du kannst trotzdem üben'}
          count={due}
          color="purple"
          onClick={() => navigate('/session/due')}
        />
        <HubCard
          emoji="🧰"
          title="Fehlerkiste"
          text={mistakes ? 'Deine Fehler aus den Lektionen – jetzt richtig machen' : 'Leer – super gemacht!'}
          count={mistakes}
          color="red"
          disabled={!mistakes}
          onClick={() => navigate('/session/mistakes')}
        />
      </div>

      {units.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-black">Unit wiederholen</h2>
          <div className="flex flex-col gap-2">
            {units.map((u) => (
              <button key={u.id} onClick={() => navigate(`/session/unit/${u.id}`)} className="card3d flex items-center gap-3 p-3 text-left">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl" style={{ background: pal(u.color).light }}>
                  {u.icon}
                </span>
                <span className="flex-1">
                  <span className="block font-extrabold">{u.title}</span>
                  <span className="block text-sm font-semibold text-ink-soft">
                    {u.cefr} · {unitWords(u).length} Wörter {s.unitReviews.includes(u.id) ? '· 🏆' : ''}
                  </span>
                </span>
                <span className="text-sm font-black tracking-wide text-sky uppercase">Start</span>
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-black">Meine Wörter ({learned.length})</h2>
        <ul className="divide-y-2 divide-line rounded-2xl border-2 border-line">
          {(showAll ? words : words.slice(0, 8)).map((id) => {
            const w = vocabById.get(id)!
            const st = strength(s.srs[id])
            const bars = Math.max(1, Math.round(st * 4))
            return (
              <li key={id} className="flex items-center gap-3 px-3 py-2.5">
                <AudioButtons text={w.en} size="sm" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-extrabold" lang="en">
                    {w.emoji ? `${w.emoji} ` : ''}
                    {w.en}
                  </span>
                  <span className="block truncate text-sm font-semibold text-ink-soft">{w.de}</span>
                </span>
                <span className="flex items-end gap-0.5" aria-label={`Stärke ${bars} von 4`}>
                  {[1, 2, 3, 4].map((b) => (
                    <span key={b} className="w-1.5 rounded-full" style={{ height: 6 + b * 4, background: b <= bars ? (bars <= 1 ? '#FF4B4B' : bars <= 2 ? '#FF9600' : '#58CC02') : '#E5E5E5' }} />
                  ))}
                </span>
              </li>
            )
          })}
        </ul>
        {words.length > 8 && (
          <button className="btn btn-ghost mt-2 w-full" onClick={() => setShowAll((x) => !x)}>
            {showAll ? 'Weniger anzeigen' : 'Alle anzeigen'}
          </button>
        )}
      </section>
    </Page>
  )
}
