/** Lernpfad (Home): geschwungener Pfad aus 3D-Knoten, Unit-Banner, „WEITER LERNEN“. */
import { type CSSProperties, type ReactNode, type RefObject, useEffect, useRef, useState } from 'react'
import { core } from '../content'
import type { Track, Unit } from '../content/schema'
import { buildPath, nextLessonInTrack, type PathNode, type PathUnit, type Recommendation } from '../lib/progress'
import { openChest, setActiveTrack } from '../state/actions'
import { useAppState } from '../state/store'
import { BookIcon, ChestIcon, CrownIcon, GemIcon, LockIcon, SignpostIcon, StarIcon, TrophyIcon } from './Icons'
import { Mascot } from './Mascot'
import { navigate } from './router'
import { startRecommendation, useRecommendation, visibleTracks } from './recommendation'
import { sfx } from './sfx'
import { CEFR_INFO, pal } from './theme'
import { AudioButtons, Modal, Sheet } from './ui'

const OFFSETS = [0, 44, 70, 44, 0, -44, -70, -44]
export function PathScreen() {
  const s = useAppState()
  const visible = visibleTracks(s.tracks.chosen)
  const track = visible.find((t) => t.id === s.tracks.active) ?? core
  const next = nextLessonInTrack(s, track)
  const units = buildPath(s, track, next?.lesson.id ?? null)
  const rec = useRecommendation()
  const currentRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [tips, setTips] = useState<Unit | null>(null)
  const [chest, setChest] = useState<number | null>(null)
  const hasLessons = track.units.some((u) => u.lessons.length)

  useEffect(() => {
    const t = window.setTimeout(() => currentRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }), 120)
    return () => window.clearTimeout(t)
  }, [track.id])

  const sections = units.map((pu, i) => ({ pu, no: i + 1, divider: track.kind === 'core' && i > 0 && pu.unit.cefr !== units[i - 1].unit.cefr }))
  return (
    <div className="mx-auto w-full max-w-[520px] px-4 pt-3 pb-[calc(190px+env(safe-area-inset-bottom))]">
      {visible.length > 1 && (
        <div className="no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 py-1" role="tablist" aria-label="Kurse">
          {visible.map((t) => {
            const on = t.id === track.id
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActiveTrack(t.id)}
                className="flex shrink-0 items-center gap-2 rounded-2xl border-2 border-b-4 px-3 py-1.5 text-[15px] font-extrabold"
                style={on ? { borderColor: pal(t.color).dark, background: pal(t.color).main, color: pal(t.color).fg } : { borderColor: '#E5E5E5', color: '#777' }}
              >
                <span>{t.icon}</span>
                {t.kind === 'core' ? 'Basiskurs' : t.title}
              </button>
            )
          })}
          <button onClick={() => navigate('/fork')} className="flex shrink-0 items-center rounded-2xl border-2 border-b-4 border-dashed border-line px-3 py-1.5 text-[15px] font-extrabold text-sky">
            + Neu
          </button>
        </div>
      )}

      {track.kind === 'specialization' && <TrackHeader track={track} hasLessons={hasLessons} />}

      {sections.map(({ pu, no: unitNo, divider }) => {
        return (
          <section key={pu.unit.id} className="mb-6" aria-label={`Unit ${unitNo}: ${pu.unit.title}`}>
            {divider && (
              <div className="my-6 flex items-center gap-3 text-mute">
                <span className="h-[2px] flex-1 bg-line" />
                <span className="text-sm font-extrabold tracking-wider uppercase">
                  {pu.unit.cefr} · {CEFR_INFO[pu.unit.cefr].title}
                </span>
                <span className="h-[2px] flex-1 bg-line" />
              </div>
            )}
            <UnitBanner pu={pu} no={unitNo} onTips={() => setTips(pu.unit)} />
            <UnitNodes
              pu={pu}
              unitIndex={unitNo}
              selected={selected}
              setSelected={setSelected}
              currentRef={currentRef}
              onChest={(unitId) => {
                const r = openChest(unitId)
                if (r) {
                  sfx.reward()
                  setChest(r)
                }
              }}
            />
          </section>
        )
      })}

      <div className="mt-4 flex flex-col items-center gap-2 text-center text-mute">
        <Mascot mood="thinking" size={90} idle={false} />
        <p className="max-w-[280px] text-[15px] font-bold">Weitere Units sind in Arbeit. Bald geht's hier weiter!</p>
      </div>

      <ContinueBar rec={rec} />

      <Sheet open={!!tips} onClose={() => setTips(null)} title={tips ? `Tipps: ${tips.title}` : ''}>
        {tips?.tips?.map((t) => (
          <div key={t.title} className="mb-6">
            <h3 className="mb-2 text-lg font-black">{t.title}</h3>
            <p className="text-[16px] leading-relaxed font-semibold text-ink-soft">{t.text}</p>
            {t.examples && (
              <ul className="mt-3 flex flex-col gap-2">
                {t.examples.map((e) => (
                  <li key={e.en} className="flex items-center gap-3 rounded-xl bg-snow p-3">
                    <AudioButtons text={e.en} size="sm" />
                    <span>
                      <span className="block font-extrabold" lang="en">
                        {e.en}
                      </span>
                      <span className="block text-sm text-ink-soft">{e.de}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Sheet>

      <Modal open={chest !== null} onClose={() => setChest(null)} label="Truhe geöffnet">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="animate-pop">
            <ChestIcon open size={120} />
          </div>
          <h2 className="text-[24px] font-black">Truhe geöffnet!</h2>
          <p className="flex items-center gap-2 text-[22px] font-black text-sky">
            <GemIcon size={30} /> +{chest}
          </p>
          <button className="btn mt-3 w-full" onClick={() => setChest(null)}>
            Super
          </button>
        </div>
      </Modal>
    </div>
  )
}

function TrackHeader({ track, hasLessons }: { track: Track; hasLessons: boolean }) {
  const p = pal(track.color)
  return (
    <div className="mb-6 overflow-hidden rounded-3xl border-2 border-b-4" style={{ borderColor: p.dark, background: p.light }}>
      <div className="flex items-center gap-4 p-4">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-4xl" style={{ background: p.main }}>
          {track.icon}
        </span>
        <div>
          <p className="label-caps" style={{ color: p.dark }}>
            Spezialisierung
          </p>
          <h1 className="text-[22px] leading-tight font-black">{track.title}</h1>
          <p className="text-[15px] font-semibold text-ink-soft">{track.subtitle}</p>
        </div>
      </div>
      {!hasLessons && (
        <div className="border-t-2 bg-white p-4" style={{ borderColor: p.main }}>
          <p className="text-[15px] font-semibold text-ink-soft">
            Diese Spezialisierung ist vorgemerkt – die Lektionen sind gerade in Arbeit. Bis dahin lernst du im Basiskurs weiter.
          </p>
          <button className="btn mt-3 w-full" onClick={() => setActiveTrack('core')}>
            Zum Basiskurs
          </button>
        </div>
      )}
    </div>
  )
}

function UnitBanner({ pu, no, onTips }: { pu: PathUnit; no: number; onTips: () => void }) {
  const { unit } = pu
  const planned = unit.lessons.length === 0
  const p = planned ? { main: '#E5E5E5', dark: '#CECECE', fg: '#777', light: '' } : pal(unit.color)
  return (
    <div className="sticky top-[calc(58px+env(safe-area-inset-top))] z-10 rounded-2xl border-b-4 px-4 py-3" style={{ background: p.main, borderColor: p.dark, color: p.fg }}>
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-extrabold tracking-wider uppercase opacity-80">
            {unit.cefr} · Unit {no}
            {pu.testedOut && ' · ✓ übersprungen'}
            {planned && ' · Bald verfügbar'}
            {unit.status === 'partial' && ' · Teilweise fertig'}
          </p>
          <h2 className="text-[20px] leading-tight font-black">
            <span aria-hidden="true">{unit.icon} </span>
            {unit.title}
          </h2>
          <p className="mt-0.5 text-[14px] font-semibold opacity-90">{planned ? unit.topics.join(' · ') : unit.description}</p>
        </div>
        {unit.tips?.length ? (
          <button
            onClick={onTips}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border-2 px-2.5 py-2 text-[12px] font-extrabold tracking-wider uppercase"
            style={{ borderColor: 'rgba(255,255,255,.45)', color: p.fg }}
            aria-label={`Tipps zu ${unit.title}`}
          >
            <BookIcon size={20} color={p.fg} />
            Tipps
          </button>
        ) : null}
      </div>
    </div>
  )
}

function UnitNodes({
  pu,
  unitIndex,
  selected,
  setSelected,
  currentRef,
  onChest,
}: {
  pu: PathUnit
  unitIndex: number
  selected: string | null
  setSelected: (id: string | null) => void
  currentRef: RefObject<HTMLDivElement | null>
  onChest: (unitId: string) => void
}) {
  const dir = unitIndex % 2 === 0 ? -1 : 1
  const p = pal(pu.unit.color)
  const lessonCount = pu.unit.lessons.length
  const hasCurrent = pu.nodes.some((n) => n.kind === 'lesson' && n.current)
  const mascotAt = Math.min(2, pu.nodes.length - 1)
  return (
    <div className="relative flex flex-col items-center gap-5 pt-16 pb-2">
      {pu.nodes.map((node, i) => {
        const x = OFFSETS[i % OFFSETS.length] * dir
        const isSel = selected === node.id
        const current = node.kind === 'lesson' && node.current
        return (
          <div key={node.id} className="relative" style={{ transform: `translateX(${x}px)`, zIndex: isSel ? 25 : undefined }} ref={current ? currentRef : undefined}>
            <NodeButton node={node} color={p} selected={isSel} onClick={() => handleNode(node, pu, setSelected, isSel, onChest)} />
            {i === mascotAt && (hasCurrent || (lessonCount === 0 && unitIndex === 1)) && (
              <div className="pointer-events-none absolute top-1/2 -translate-y-1/2" style={{ [x >= 0 ? 'right' : 'left']: '130px' } as CSSProperties}>
                <Mascot mood="happy" size={92} />
              </div>
            )}
            {i === mascotAt && !hasCurrent && lessonCount > 0 && (
              <div
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-[56px] opacity-40"
                style={{ [x >= 0 ? 'right' : 'left']: '140px' } as CSSProperties}
                aria-hidden="true"
              >
                {pu.unit.icon}
              </div>
            )}
            {isSel && <NodePopover node={node} pu={pu} color={p} onClose={() => setSelected(null)} />}
          </div>
        )
      })}
    </div>
  )
}

function handleNode(node: PathNode, pu: PathUnit, setSelected: (id: string | null) => void, isSel: boolean, onChest: (unitId: string) => void) {
  if (node.kind === 'chest') {
    if (node.status === 'available') onChest(pu.unit.id)
    else setSelected(isSel ? null : node.id)
    return
  }
  if (node.kind === 'fork' && node.status === 'available') {
    navigate('/fork')
    return
  }
  sfx.click()
  setSelected(isSel ? null : node.id)
}

type Pal = { main: string; dark: string; light: string; fg: string }

function NodeButton({ node, color, selected, onClick }: { node: PathNode; color: Pal; selected: boolean; onClick: () => void }) {
  const base = 'relative flex items-center justify-center rounded-full transition-transform active:translate-y-[6px]'
  const gray = { background: '#E5E5E5', boxShadow: '0 7px 0 #CECECE' }
  let style: CSSProperties = gray
  let content: ReactNode = <LockIcon size={30} />
  let size = 72
  let label = ''

  switch (node.kind) {
    case 'lesson':
      label = `Lektion ${node.lesson.title}`
      if (node.status === 'done') {
        style = { background: '#FFC800', boxShadow: '0 7px 0 #E5A100' }
        content = <CrownIcon size={36} />
        label += ', abgeschlossen'
      } else if (node.status === 'available') {
        style = { background: color.main, boxShadow: `0 7px 0 ${color.dark}` }
        content = <StarIcon size={34} color={color.fg} />
        label += node.current ? ', aktuell' : ''
      } else label += ', gesperrt'
      break
    case 'planned':
      size = 60
      style = { background: '#F7F7F7', boxShadow: '0 6px 0 #E5E5E5', border: '2px dashed #E5E5E5' }
      content = <LockIcon size={24} color="#D5D5D5" />
      label = `${node.title}, bald verfügbar`
      break
    case 'chest':
      return (
        <button
          onClick={onClick}
          className={`relative ${node.status === 'available' ? 'animate-wiggle' : ''}`}
          aria-label={node.status === 'opened' ? 'Truhe (geöffnet)' : node.status === 'available' ? 'Truhe öffnen' : 'Truhe (gesperrt)'}
          style={{ filter: node.status === 'locked' ? 'grayscale(1) opacity(.5)' : node.status === 'opened' ? 'grayscale(.6) opacity(.7)' : undefined }}
        >
          <ChestIcon size={72} open={node.status === 'opened'} />
        </button>
      )
    case 'trophy':
      label = 'Unit-Wiederholung'
      if (node.status === 'done') {
        style = { background: '#FFC800', boxShadow: '0 7px 0 #E5A100' }
        content = <TrophyIcon size={36} color="#fff" />
      } else if (node.status === 'available') {
        style = { background: color.main, boxShadow: `0 7px 0 ${color.dark}` }
        content = <TrophyIcon size={36} color={color.fg} />
      } else content = <TrophyIcon size={34} color="#AFAFAF" />
      break
    case 'fork':
      label = 'Weggabelung: Spezialisierung wählen'
      if (node.status === 'available') {
        style = { background: '#CE82FF', boxShadow: '0 7px 0 #A568CC' }
        content = <SignpostIcon size={36} />
      } else content = <SignpostIcon size={34} color="#AFAFAF" />
      break
  }

  const current = node.kind === 'lesson' && node.current
  const crowns = node.kind === 'lesson' ? node.crowns : 0
  return (
    <div className="relative">
      {current && (
        <div className="absolute -top-14 left-1/2 z-[5] animate-bounce-soft rounded-xl border-2 border-line bg-white px-3 py-1.5 text-[15px] font-black tracking-wider uppercase" style={{ color: color.main }}>
          Start
          <span className="absolute -bottom-[8px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-line bg-white" />
        </div>
      )}
      {current && <span className="absolute -inset-[9px] rounded-full border-[6px]" style={{ borderColor: '#E5E5E5' }} aria-hidden="true" />}
      {node.kind === 'fork' && node.status === 'available' && (
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-beetle" aria-hidden="true" />
      )}
      <button onClick={onClick} className={base} style={{ ...style, width: size, height: size, outline: selected ? '3px solid #84D8FF' : undefined, outlineOffset: 6 }} aria-label={label}>
        <span className="absolute top-[14%] left-[22%] h-[18%] w-[30%] rounded-full bg-white/25" aria-hidden="true" />
        {content}
      </button>
      {crowns > 1 && (
        <span className="absolute -right-2 -bottom-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-fox px-1 text-xs font-black text-white">
          {crowns}
        </span>
      )}
      {node.kind === 'fork' && (
        <span className="absolute top-full left-1/2 mt-3 -translate-x-1/2 text-xs font-extrabold tracking-wider whitespace-nowrap text-beetle-dark uppercase">Weggabelung</span>
      )}
    </div>
  )
}

function NodePopover({ node, pu, color, onClose }: { node: PathNode; pu: PathUnit; color: Pal; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.parentElement?.contains(e.target as Node)) onClose()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('mousedown', onDoc)
    window.addEventListener('keydown', onKey)
    ref.current?.querySelector('button')?.focus({ preventScroll: true })
    return () => {
      document.removeEventListener('mousedown', onDoc)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  let title = ''
  let sub = ''
  let action: { label: string; go: () => void } | null = null
  let active = false
  const lessons = pu.unit.lessons
  switch (node.kind) {
    case 'lesson': {
      const idx = lessons.findIndex((l) => l.id === node.id)
      title = node.lesson.title
      sub = node.status === 'locked' ? 'Schließe zuerst die Lektionen davor ab.' : `Lektion ${idx + 1} von ${lessons.length}${node.lesson.description ? ` · ${node.lesson.description}` : ''}`
      if (node.status !== 'locked') {
        active = true
        action = { label: node.status === 'done' ? 'Wiederholen +10 XP' : 'Start +10 XP', go: () => navigate(`/lesson/${node.id}`) }
      }
      break
    }
    case 'planned':
      title = node.title
      sub = 'Bald verfügbar – an dieser Lektion arbeiten wir gerade.'
      break
    case 'chest':
      title = 'Truhe'
      sub = node.status === 'opened' ? 'Schon geöffnet.' : 'Schließe die Lektionen davor ab, um sie zu öffnen.'
      break
    case 'trophy':
      title = 'Unit-Wiederholung'
      sub = node.status === 'locked' ? 'Schließe alle Lektionen dieser Unit ab.' : 'Teste alles aus dieser Unit und hol dir den Pokal.'
      if (node.status !== 'locked') {
        active = true
        action = { label: node.status === 'done' ? 'Nochmal +15 XP' : 'Start +15 XP', go: () => navigate(`/session/unit/${pu.unit.id}`) }
      }
      break
    case 'fork':
      title = 'Weggabelung'
      sub = 'Schließe diese Unit ab – dann wählen wir gemeinsam eine Spezialisierung.'
      break
  }
  const bg = active ? color.main : '#F7F7F7'
  const fg = active ? color.fg : '#777'
  return (
    <div
      ref={ref}
      className="absolute top-full left-1/2 z-20 mt-4 w-[270px] -translate-x-1/2 animate-pop rounded-2xl border-2 p-4"
      style={{ background: bg, color: fg, borderColor: active ? color.dark : '#E5E5E5' }}
      role="dialog"
      aria-label={title}
    >
      <span className="absolute -top-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-t-2 border-l-2" style={{ background: bg, borderColor: active ? color.dark : '#E5E5E5' }} />
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-0.5 text-[14px] font-semibold opacity-90">{sub}</p>
      {action && (
        <button className="btn mt-3 w-full" style={{ '--btn-bg': '#fff', '--btn-edge': 'rgba(0,0,0,.15)', '--btn-fg': color.main === '#FFC800' ? '#6B4E00' : color.main } as CSSProperties} onClick={action.go}>
          {action.label}
        </button>
      )}
    </div>
  )
}

function ContinueBar({ rec }: { rec: Recommendation }) {
  const label =
    rec.kind === 'lesson'
      ? { top: `Als Nächstes: ${rec.title}`, sub: rec.unitTitle, btn: 'Weiter lernen' }
      : rec.kind === 'practice'
        ? { top: rec.mode === 'mistakes' ? `${rec.count} Fehler warten auf dich` : `${rec.count} Wörter sind fällig`, sub: 'Kurz wiederholen festigt dein Wissen', btn: 'Jetzt üben' }
        : rec.kind === 'fork'
          ? { top: 'Zeit für eine Weggabelung!', sub: 'Wähle eine Spezialisierung', btn: 'Spezialisierung wählen' }
          : { top: 'Alles erledigt – stark!', sub: 'Halte dein Wissen frisch', btn: 'Wiederholen' }
  return (
    <div className="fixed inset-x-0 bottom-[calc(68px+env(safe-area-inset-bottom))] z-20 bg-gradient-to-t from-white via-white via-75% to-white/0 pt-8">
      <div className="mx-auto w-full max-w-[520px] px-4 pb-3">
        <p className="mb-2 truncate text-center text-[14px] font-bold text-ink-soft">
          <span className="font-black text-ink">{label.top}</span> · {label.sub}
        </p>
        <button className="btn w-full" onClick={() => startRecommendation(rec)}>
          {label.btn}
        </button>
      </div>
    </div>
  )
}
