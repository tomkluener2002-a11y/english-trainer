/** App-Rahmen: sticky Top-Bar (Track, Streak, Gems, Herzen) und untere Tabbar. */
import { type ReactNode, useState } from 'react'
import { core } from '../content'
import { dayKey } from '../lib/date'
import { currentHearts } from '../lib/hearts'
import { doneToday, effectiveStreak } from '../lib/streak'
import { setActiveTrack } from '../state/actions'
import { useAppState, useNow } from '../state/store'
import { FlameIcon, GemIcon, HeartIcon, TabLearnIcon, TabPracticeIcon, TabProfileIcon, TabQuestsIcon } from './Icons'
import { visibleTracks } from './recommendation'
import { navigate } from './router'
import { pal } from './theme'
import { Sheet } from './ui'

export function TopBar() {
  const s = useAppState()
  const now = useNow()
  const today = dayKey(now)
  const streak = effectiveStreak(s.streak, today)
  const hearts = currentHearts(s.hearts, now).count
  const tracks = visibleTracks(s.tracks.chosen)
  const active = tracks.find((t) => t.id === s.tracks.active) ?? core
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="safe-top sticky top-0 z-30 border-b-2 border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[520px] items-center justify-between px-3">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-1.5 rounded-xl px-2 py-1.5 hover:bg-snow"
            aria-label={`Kurs: ${active.title}. Kurs wechseln`}
          >
            <span className="flex h-8 w-9 items-center justify-center rounded-lg border-2 text-lg" style={{ borderColor: pal(active.color).main, background: pal(active.color).light }}>
              {active.icon}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="m2 4 4 4 4-4" stroke="#AFAFAF" strokeWidth="2.4" fill="none" strokeLinecap="round" />
            </svg>
          </button>
          <button onClick={() => navigate('/profile')} className="flex items-center gap-1 rounded-xl px-2 py-1.5 hover:bg-snow" aria-label={`${streak} Tage Streak`}>
            <FlameIcon size={26} active={doneToday(s.streak, today) || streak > 0} />
            <span className="text-[17px] font-extrabold" style={{ color: streak > 0 ? '#FF9600' : '#AFAFAF' }}>
              {streak}
            </span>
          </button>
          <button onClick={() => navigate('/shop')} className="flex items-center gap-1 rounded-xl px-2 py-1.5 hover:bg-snow" aria-label={`${s.gems} Gems`}>
            <GemIcon size={24} />
            <span className="text-[17px] font-extrabold text-sky">{s.gems}</span>
          </button>
          <button onClick={() => navigate('/shop')} className="flex items-center gap-1 rounded-xl px-2 py-1.5 hover:bg-snow" aria-label={s.settings.hearts ? `${hearts} Herzen` : 'Unbegrenzte Herzen'}>
            <HeartIcon size={26} broken={s.settings.hearts && hearts === 0} />
            <span className="text-[17px] font-extrabold text-cardinal">{s.settings.hearts ? hearts : '∞'}</span>
          </button>
        </div>
      </header>
      <Sheet open={open} onClose={() => setOpen(false)} title="Meine Kurse">
        <div className="flex flex-col gap-3">
          {tracks.map((t) => (
            <button
              key={t.id}
              data-state={t.id === active.id ? 'selected' : undefined}
              onClick={() => {
                setActiveTrack(t.id)
                setOpen(false)
                navigate('/')
              }}
              className="card3d flex items-center gap-3 px-4 py-3 text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl" style={{ background: pal(t.color).light }}>
                {t.icon}
              </span>
              <span className="flex-1">
                <span className="block font-extrabold">{t.title}</span>
                <span className="block text-sm font-semibold text-ink-soft">{t.kind === 'core' ? 'Basiskurs' : t.subtitle}</span>
              </span>
            </button>
          ))}
          <button
            className="btn btn-white mt-1 w-full"
            onClick={() => {
              setOpen(false)
              navigate('/fork')
            }}
          >
            + Spezialisierung hinzufügen
          </button>
        </div>
      </Sheet>
    </>
  )
}

const TABS = [
  { path: '/', label: 'Lernen', Icon: TabLearnIcon },
  { path: '/practice', label: 'Üben', Icon: TabPracticeIcon },
  { path: '/quests', label: 'Quests', Icon: TabQuestsIcon },
  { path: '/profile', label: 'Profil', Icon: TabProfileIcon },
] as const

export function TabBar({ route }: { route: string }) {
  const current = route.startsWith('/shop') ? '/profile' : (TABS.find((t) => t.path !== '/' && route.startsWith(t.path))?.path ?? '/')
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t-2 border-line bg-white" aria-label="Hauptnavigation">
      <div className="mx-auto flex h-[66px] w-full max-w-[520px] items-center justify-around px-2">
        {TABS.map(({ path, label, Icon }) => {
          const active = current === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              aria-current={active ? 'page' : undefined}
              className={`flex h-[54px] flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl border-2 transition-colors ${
                active ? 'border-sky/50 bg-sky-light' : 'border-transparent'
              }`}
            >
              <Icon active={active} />
              <span className={`text-[11px] font-black tracking-wider uppercase ${active ? 'text-sky-dark' : 'text-mute'}`}>{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[520px] px-4 pt-4 pb-[calc(96px+env(safe-area-inset-bottom))]">{children}</div>
}
