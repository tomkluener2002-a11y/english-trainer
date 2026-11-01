/** Weggabelung: gemeinsam mit dem Maskottchen eine Spezialisierung wählen (Vorschläge, Karten, Rückfragen). */
import { type CSSProperties, useState } from 'react'
import { cefrIndex, core, specializations, trackById } from '../content'
import type { Cefr, Track } from '../content/schema'
import { pendingFork, suggestTracks } from '../lib/progress'
import { chooseTracks, dismissFork, removeTrack, setActiveTrack } from '../state/actions'
import { useAppState } from '../state/store'
import { BackIcon, CheckIcon, XIcon } from './Icons'
import { MascotSays } from './Mascot'
import { INTERESTS } from './options'
import { navigate } from './router'
import { sfx } from './sfx'
import { pal } from './theme'
import { AudioButtons, Chip } from './ui'

type Step = { kind: 'pick' } | { kind: 'follow'; index: number } | { kind: 'done' }

export function ForkScreen() {
  const s = useAppState()
  // Beim Öffnen festhalten – nach der Wahl ist die Gabelung nicht mehr „offen“.
  const [milestone] = useState(() => pendingFork(s, core))
  const [step, setStep] = useState<Step>({ kind: 'pick' })
  const [picked, setPicked] = useState<string[]>([])
  const [focus, setFocus] = useState<Record<string, string>>({})
  const [final, setFinal] = useState<string[]>([])

  const suggestions = suggestTracks(specializations, s.profile.interests, s.tracks.chosen)
  const recommended = suggestions.filter((x) => x.matched.length > 0).slice(0, 2)
  const recIds = new Set(recommended.map((r) => r.track.id))
  const others = suggestions.filter((x) => !recIds.has(x.track.id))
  const chosen = s.tracks.chosen.map((id) => trackById.get(id)).filter((t): t is Track => !!t)
  const withFollow = picked.map((id) => trackById.get(id)!).filter((t) => t.followUp)
  const name = s.profile.name.trim()

  const toggle = (id: string) => {
    sfx.click()
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  }

  const confirm = () => {
    chooseTracks(picked, focus)
    const playable = picked.find((id) => trackById.get(id)!.units.some((u) => u.lessons.length))
    setActiveTrack(playable ?? 'core')
    setFinal(picked)
    setStep({ kind: 'done' })
    sfx.complete()
  }

  const nextFromPick = () => (withFollow.length ? setStep({ kind: 'follow', index: 0 }) : confirm())
  const later = () => {
    if (milestone) dismissFork()
    navigate('/', { replace: true })
  }

  const reason = (matched: string[]) =>
    'Weil du dich für ' +
    matched
      .map((m) => INTERESTS.find((i) => i.id === m)?.label ?? m)
      .join(' und ') +
    ' interessierst.'

  if (step.kind === 'done') {
    const titles = final.map((id) => trackById.get(id)!.title)
    const soon = final.filter((id) => !trackById.get(id)!.units.some((u) => u.lessons.length))
    return (
      <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
        <main className="mx-auto flex w-full max-w-[480px] flex-1 flex-col justify-center gap-6 px-5">
          <MascotSays mood="celebrate" layout="column" size={150}>
            Super Wahl{name ? `, ${name}` : ''}! <b>{titles.join(' & ')}</b> {titles.length > 1 ? 'sind' : 'ist'} jetzt Teil deines Lernpfads.
            {soon.length > 0 && (
              <span className="mt-2 block text-[15px] text-ink-soft">
                {soon.map((id) => trackById.get(id)!.title).join(', ')}: Die Lektionen sind noch in Arbeit – bis dahin lernst du im Basiskurs weiter.
              </span>
            )}
          </MascotSays>
          <div className="flex flex-wrap justify-center gap-2">
            {final.map((id) => {
              const t = trackById.get(id)!
              return (
                <span key={id} className="flex items-center gap-2 rounded-2xl border-b-4 px-4 py-2 font-extrabold" style={{ background: pal(t.color).main, borderColor: pal(t.color).dark, color: pal(t.color).fg }}>
                  {t.icon} {t.title}
                </span>
              )
            })}
          </div>
        </main>
        <footer className="mx-auto w-full max-w-[480px] px-4">
          <button className="btn w-full" onClick={() => navigate('/', { replace: true })} autoFocus>
            Zum Lernpfad
          </button>
        </footer>
      </div>
    )
  }

  if (step.kind === 'follow') {
    const t = withFollow[step.index]
    const f = t.followUp!
    const last = step.index + 1 >= withFollow.length
    return (
      <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
        <header className="mx-auto flex h-16 w-full max-w-[480px] items-center px-4">
          <button
            onClick={() => setStep(step.index ? { kind: 'follow', index: step.index - 1 } : { kind: 'pick' })}
            className="-ml-2 rounded-xl p-2 text-mute hover:bg-snow"
            aria-label="Zurück"
          >
            <BackIcon size={26} />
          </button>
        </header>
        <main className="mx-auto w-full max-w-[480px] flex-1 px-4" key={t.id}>
          <div className="animate-slide-in">
            <MascotSays mood="thinking">
              <span className="mb-1 block text-sm font-extrabold" style={{ color: pal(t.color).dark }}>
                {t.icon} {t.title}
              </span>
              {f.question}
            </MascotSays>
            <div className="mt-6 flex flex-col gap-3">
              {f.options.map((o) => (
                <Chip key={o.id} emoji={o.emoji} selected={focus[t.id] === o.id} onClick={() => setFocus((x) => ({ ...x, [t.id]: o.id }))}>
                  {o.label}
                </Chip>
              ))}
            </div>
          </div>
        </main>
        <footer className="mx-auto flex w-full max-w-[480px] flex-col gap-2 border-t-2 border-line px-4 pt-4">
          <button className="btn w-full" disabled={!focus[t.id]} onClick={() => (last ? confirm() : setStep({ kind: 'follow', index: step.index + 1 }))}>
            {last ? 'Bestätigen' : 'Weiter'}
          </button>
          <button className="btn btn-ghost w-full text-mute" onClick={() => (last ? confirm() : setStep({ kind: 'follow', index: step.index + 1 }))}>
            Überspringen
          </button>
        </footer>
      </div>
    )
  }

  return (
    <div className="safe-top flex min-h-dvh flex-col bg-white">
      <header className="sticky top-0 z-10 bg-white">
        <div className="mx-auto flex h-14 w-full max-w-[520px] items-center justify-between px-4">
          <button onClick={later} className="-ml-2 rounded-xl p-2 text-mute hover:bg-snow" aria-label="Schließen">
            <XIcon size={26} />
          </button>
          <span className="label-caps text-beetle-dark">Weggabelung</span>
          <span className="w-10" />
        </div>
      </header>
      <main className="mx-auto w-full max-w-[520px] flex-1 px-4 pb-48">
        <MascotSays mood={milestone ? 'celebrate' : 'happy'}>
          {milestone ? (
            <>
              Glückwunsch{name ? `, ${name}` : ''}! Du hast „{milestone.title}“ geschafft. 🎉 Hier gabelt sich der Weg: Lass uns gemeinsam eine Spezialisierung wählen – der Basiskurs
              läuft parallel weiter.
            </>
          ) : (
            <>Lass uns gemeinsam schauen, welche Spezialisierung zu dir passt. Du kannst mehrere wählen – der Basiskurs läuft parallel weiter.</>
          )}
        </MascotSays>

        {chosen.length > 0 && (
          <section className="mt-6">
            <h2 className="label-caps mb-2 text-mute">Deine Spezialisierungen</h2>
            <div className="flex flex-col gap-2">
              {chosen.map((t) => (
                <div key={t.id} className="flex items-center gap-3 rounded-2xl border-2 border-line p-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl" style={{ background: pal(t.color).light }}>
                    {t.icon}
                  </span>
                  <span className="flex-1 font-extrabold">{t.title}</span>
                  <button className="rounded-xl px-3 py-2 text-sm font-extrabold tracking-wide text-cardinal uppercase hover:bg-cardinal-light" onClick={() => removeTrack(t.id)}>
                    Entfernen
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {recommended.length > 0 && (
          <section className="mt-6">
            <h2 className="label-caps mb-2 text-feather-dark">⭐ Meine Vorschläge für dich</h2>
            <div className="flex flex-col gap-4">
              {recommended.map(({ track, matched }) => (
                <TrackCard key={track.id} track={track} reason={reason(matched)} selected={picked.includes(track.id)} onToggle={() => toggle(track.id)} level={s.placement.level} />
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="mt-6">
            <h2 className="label-caps mb-2 text-mute">{recommended.length ? 'Weitere Spezialisierungen' : 'Alle Spezialisierungen'}</h2>
            <div className="flex flex-col gap-4">
              {others.map(({ track }) => (
                <TrackCard key={track.id} track={track} selected={picked.includes(track.id)} onToggle={() => toggle(track.id)} level={s.placement.level} />
              ))}
            </div>
          </section>
        )}

        {suggestions.length === 0 && <p className="mt-6 rounded-2xl bg-snow p-4 text-center text-ink-soft">Du hast bereits alle Spezialisierungen gewählt. Stark!</p>}
      </main>
      <footer className="pb-safe-4 fixed inset-x-0 bottom-0 border-t-2 border-line bg-white">
        <div className="mx-auto flex w-full max-w-[520px] flex-col gap-1 px-4 pt-3">
          <button className="btn w-full" disabled={!picked.length} onClick={nextFromPick}>
            {picked.length ? `Weiter (${picked.length} gewählt)` : 'Wähle eine Spezialisierung'}
          </button>
          <button className="btn btn-ghost w-full text-mute" onClick={later}>
            {milestone ? 'Später entscheiden' : 'Abbrechen'}
          </button>
        </div>
      </footer>
    </div>
  )
}

function TrackCard({ track, reason, selected, onToggle, level }: { track: Track; reason?: string; selected: boolean; onToggle: () => void; level: Cefr | null }) {
  const p = pal(track.color)
  const ready = track.units.reduce((n, u) => n + u.lessons.length, 0)
  const planned = track.units.reduce((n, u) => n + (u.plannedLessons?.length ?? 0), 0)
  const hard = track.minCefr && level && cefrIndex(track.minCefr) > cefrIndex(level)
  return (
    <article
      className="overflow-hidden rounded-3xl border-2 border-b-4 bg-white transition-colors"
      style={{ borderColor: selected ? p.main : '#E5E5E5', background: selected ? p.light : '#fff' }}
    >
      <div className="flex items-start gap-3 p-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-b-4 text-3xl" style={{ background: p.main, borderColor: p.dark }}>
          {track.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[19px] leading-tight font-black">{track.title}</h3>
          <p className="text-[14px] font-bold" style={{ color: p.dark }}>
            {track.subtitle}
          </p>
        </div>
      </div>
      <div className="px-4 pb-4">
        {reason && (
          <p className="mb-3 rounded-xl bg-feather-light px-3 py-2 text-[14px] font-bold text-feather-dark">
            <span aria-hidden="true">💡 </span>
            {reason}
          </p>
        )}
        <p className="text-[15px] font-semibold text-ink-soft">{track.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-[13px] font-extrabold">
          <span className="rounded-full bg-snow px-3 py-1">{track.units.length} Units</span>
          {ready > 0 ? (
            <span className="rounded-full bg-feather-light px-3 py-1 text-feather-dark">{ready} Lektionen bereit</span>
          ) : (
            <span className="rounded-full bg-bee/25 px-3 py-1 text-[#8A6A00]">In Arbeit · {planned} Lektionen geplant</span>
          )}
          {track.minCefr && (
            <span className={`rounded-full px-3 py-1 ${hard ? 'bg-cardinal-light text-cardinal-dark' : 'bg-snow'}`}>
              ab {track.minCefr}
              {hard ? ' · anspruchsvoll' : ''}
            </span>
          )}
        </div>
        {track.sample && (
          <div className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-line bg-white p-3">
            <AudioButtons text={track.sample.en} size="sm" />
            <div className="min-w-0">
              <p className="text-[15px] font-extrabold" lang="en">
                „{track.sample.en}“
              </p>
              <p className="text-[13px] font-semibold text-ink-soft">{track.sample.de}</p>
            </div>
          </div>
        )}
        <button
          className={`btn mt-4 w-full ${selected ? '' : 'btn-white'}`}
          style={selected ? ({ '--btn-bg': p.main, '--btn-edge': p.dark, '--btn-fg': p.fg } as CSSProperties) : { color: p.dark }}
          onClick={onToggle}
          aria-pressed={selected}
        >
          {selected ? (
            <>
              <CheckIcon size={20} /> Ausgewählt
            </>
          ) : (
            'Auswählen'
          )}
        </button>
      </div>
    </article>
  )
}
