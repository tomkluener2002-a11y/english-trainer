/** Profil: Name, Level, Statistiken, Streak-Kalender, Wochen-XP, Erfolge, Einstellungen. Plus Shop. */
import { type ReactNode, useState } from 'react'
import { trackById } from '../content'
import { ACHIEVEMENTS } from '../lib/achievements'
import { dayKey } from '../lib/date'
import { currentHearts, MAX_HEARTS } from '../lib/hearts'
import { effectiveStreak, MAX_FREEZES } from '../lib/streak'
import { DAILY_GOALS, weekXp } from '../lib/xp'
import { buyFreeze, PRICES, refillHeartsWithGems, resetAll, setDailyGoal, updateProfile, updateSettings } from '../state/actions'
import { useAppState, useNow } from '../state/store'
import { BackIcon, BoltIcon, CrownIcon, FlameIcon, GemIcon, HeartIcon } from './Icons'
import { Mascot } from './Mascot'
import { INTERESTS } from './options'
import { navigate } from './router'
import { Page } from './Shell'
import { sfx } from './sfx'
import { pal } from './theme'
import { Modal } from './ui'

const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

function Toggle({ label, desc, checked, onChange }: { label: string; desc?: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-3">
      <span className="flex-1">
        <span className="block font-extrabold">{label}</span>
        {desc && <span className="block text-sm font-semibold text-ink-soft">{desc}</span>}
      </span>
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="relative h-8 w-14 shrink-0 rounded-full bg-line transition-colors peer-checked:bg-feather peer-focus-visible:outline-3 peer-focus-visible:outline-sky after:absolute after:top-1 after:left-1 after:h-6 after:w-6 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-6" />
    </label>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-black">{title}</h2>
      {children}
    </section>
  )
}

export function ProfileScreen() {
  const s = useAppState()
  const now = useNow()
  const today = dayKey(now)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(s.profile.name)
  const [confirmReset, setConfirmReset] = useState(false)
  const streak = effectiveStreak(s.streak, today)
  const week = weekXp(s.xp.byDay, today)
  const maxWeek = Math.max(10, ...week.map((d) => d.xp))
  const since = new Date(s.profile.createdAt)
  const display = s.profile.name.trim() || 'Lernende:r'
  const unlocked = ACHIEVEMENTS.filter((a) => s.achievements[a.id]).length
  const paused = s.settings.speakingOffUntil > now || s.settings.listeningOffUntil > now

  return (
    <Page>
      {/* Kopf */}
      <div className="flex flex-col items-center text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-dashed border-beetle bg-beetle/15 text-[44px] font-black text-beetle-dark">
          {display.slice(0, 1).toUpperCase()}
        </div>
        {editing ? (
          <form
            className="mt-3 flex w-full max-w-[300px] gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              updateProfile({ name: name.trim().slice(0, 40) })
              setEditing(false)
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              aria-label="Name"
              className="min-w-0 flex-1 rounded-xl border-2 border-line bg-snow px-3 py-2 font-bold outline-none focus:border-sky"
            />
            <button className="btn min-h-[44px] px-4 text-sm">OK</button>
          </form>
        ) : (
          <button className="mt-3 flex items-center gap-2 text-[26px] font-black" onClick={() => setEditing(true)} aria-label="Name bearbeiten">
            {display} <span className="text-base text-mute">✏️</span>
          </button>
        )}
        <p className="text-sm font-bold text-mute">
          Dabei seit {MONTHS[since.getMonth()]} {since.getFullYear()}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {s.placement.level && <span className="rounded-full bg-sky px-3 py-1 text-sm font-black text-white">Level {s.placement.level}</span>}
          {s.tracks.chosen.map((id) => {
            const t = trackById.get(id)
            return t ? (
              <span key={id} className="rounded-full px-3 py-1 text-sm font-extrabold" style={{ background: pal(t.color).light, color: pal(t.color).dark }}>
                {t.icon} {t.title}
              </span>
            ) : null
          })}
        </div>
      </div>

      {/* Statistik */}
      <Section title="Statistik">
        <div className="grid grid-cols-2 gap-3">
          <Stat icon={<FlameIcon size={28} />} value={streak} label="Tage Streak" />
          <Stat icon={<BoltIcon size={28} />} value={s.xp.total} label="XP gesamt" />
          <Stat icon={<CrownIcon size={28} />} value={s.stats.lessons} label="Lektionen" />
          <Stat icon={<span className="text-2xl">🏅</span>} value={`${unlocked}/${ACHIEVEMENTS.length}`} label="Erfolge" />
        </div>
      </Section>

      <Section title="Streak-Kalender">
        <StreakCalendar active={s.streak.activeDays} frozen={s.streak.frozenDays} now={now} longest={s.streak.longest} />
      </Section>

      <Section title="XP diese Woche">
        <div className="flex h-40 items-end justify-between gap-2 rounded-2xl border-2 border-line p-4">
          {week.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-xs font-extrabold text-mute">{d.xp || ''}</span>
              <div className="w-full max-w-[28px] rounded-lg" style={{ height: `${Math.max(4, (d.xp / maxWeek) * 80)}px`, background: d.day === today ? '#FFC800' : d.xp ? '#1CB0F6' : '#E5E5E5' }} />
              <span className={`text-xs font-extrabold ${d.day === today ? 'text-fox' : 'text-mute'}`}>{d.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Erfolge">
        <div className="grid grid-cols-3 gap-3">
          {ACHIEVEMENTS.map((a) => {
            const got = !!s.achievements[a.id]
            const v = Math.min(a.target, a.value(s))
            return (
              <div key={a.id} className="flex flex-col items-center gap-1 rounded-2xl border-2 border-line p-2 text-center" title={a.description}>
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border-b-4 text-3xl"
                  style={got ? { background: pal(a.color).main, borderColor: pal(a.color).dark } : { background: '#F7F7F7', borderColor: '#E5E5E5', filter: 'grayscale(1)', opacity: 0.55 }}
                >
                  {a.icon}
                </span>
                <span className="text-[13px] leading-tight font-extrabold">{a.title}</span>
                <span className="text-[11px] font-bold text-mute">{got ? '✓ erreicht' : `${v}/${a.target}`}</span>
              </div>
            )
          })}
        </div>
      </Section>

      <Section title="Einstellungen">
        <div className="divide-y-2 divide-line rounded-2xl border-2 border-line px-4">
          <Toggle label="Soundeffekte" checked={s.settings.sound} onChange={(v) => updateSettings({ sound: v })} />
          <Toggle label="Vibration" desc="Haptisches Feedback, falls unterstützt" checked={s.settings.haptics} onChange={(v) => updateSettings({ haptics: v })} />
          <Toggle label="Herzen" desc="Aus = entspannter Modus ohne Herzverlust" checked={s.settings.hearts} onChange={(v) => updateSettings({ hearts: v })} />
          <div className="py-3">
            <p className="mb-2 font-extrabold">Tagesziel</p>
            <div className="grid grid-cols-4 gap-2">
              {DAILY_GOALS.map((g) => (
                <button
                  key={g.xp}
                  data-state={s.profile.dailyGoal === g.xp ? 'selected' : undefined}
                  aria-pressed={s.profile.dailyGoal === g.xp}
                  onClick={() => setDailyGoal(g.xp)}
                  className="card3d px-1 py-2 text-center"
                >
                  <span className="block text-[15px] font-black">{g.xp} XP</span>
                  <span className="block text-[11px] font-bold opacity-70">{g.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="py-3">
            <p className="mb-2 font-extrabold">Interessen</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((it) => {
                const on = s.profile.interests.includes(it.id)
                return (
                  <button
                    key={it.id}
                    aria-pressed={on}
                    onClick={() => updateProfile({ interests: on ? s.profile.interests.filter((x) => x !== it.id) : [...s.profile.interests, it.id] })}
                    className={`rounded-full border-2 px-3 py-1.5 text-sm font-extrabold ${on ? 'border-sky bg-sky-light text-sky-dark' : 'border-line text-ink-soft'}`}
                  >
                    {it.emoji} {it.label}
                  </button>
                )
              })}
            </div>
          </div>
          {paused && (
            <div className="flex items-center gap-3 py-3">
              <span className="flex-1 text-sm font-semibold text-ink-soft">Sprech- oder Höraufgaben sind gerade pausiert.</span>
              <button className="btn btn-white min-h-[40px] px-3 text-xs" onClick={() => updateSettings({ speakingOffUntil: 0, listeningOffUntil: 0 })}>
                Aktivieren
              </button>
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <button className="btn btn-white w-full" onClick={() => navigate('/fork')}>
            🛤️ Spezialisierung ändern
          </button>
          <button className="btn btn-white w-full" onClick={() => navigate('/placement')}>
            🧭 Einstufungstest wiederholen
          </button>
          <button className="btn btn-white w-full" onClick={() => navigate('/shop')}>
            💎 Shop
          </button>
          <button className="btn btn-ghost w-full text-cardinal" onClick={() => setConfirmReset(true)}>
            Fortschritt zurücksetzen
          </button>
        </div>
        <p className="mt-6 text-center text-xs font-semibold text-mute">Ohne Konto · alle Daten bleiben lokal auf diesem Gerät.</p>
      </Section>

      <Modal open={confirmReset} onClose={() => setConfirmReset(false)} label="Fortschritt zurücksetzen?">
        <div className="flex flex-col items-center gap-3 text-center">
          <Mascot mood="sad" size={100} />
          <h2 className="text-[22px] font-black">Wirklich alles zurücksetzen?</h2>
          <p className="text-ink-soft">Name, Level, Fortschritt, Streak und Gems werden auf diesem Gerät gelöscht. Das kann nicht rückgängig gemacht werden.</p>
          <button className="btn btn-blue mt-3 w-full" onClick={() => setConfirmReset(false)}>
            Abbrechen
          </button>
          <button
            className="btn btn-red w-full"
            onClick={() => {
              resetAll()
              navigate('/', { replace: true })
            }}
          >
            Zurücksetzen
          </button>
        </div>
      </Modal>
    </Page>
  )
}

function Stat({ icon, value, label }: { icon: ReactNode; value: number | string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border-2 border-line p-3">
      {icon}
      <div>
        <div className="text-xl leading-tight font-black">{value}</div>
        <div className="text-[13px] font-bold text-mute">{label}</div>
      </div>
    </div>
  )
}

function StreakCalendar({ active, frozen, now, longest }: { active: string[]; frozen: string[]; now: number; longest: number }) {
  const d = new Date(now)
  const year = d.getFullYear()
  const month = d.getMonth()
  const first = new Date(year, month, 1)
  const days = new Date(year, month + 1, 0).getDate()
  const lead = (first.getDay() + 6) % 7 // Montag zuerst
  const act = new Set(active)
  const frz = new Set(frozen)
  const today = dayKey(now)
  const cells: (string | null)[] = [...Array(lead).fill(null), ...Array.from({ length: days }, (_, i) => dayKey(new Date(year, month, i + 1, 12)))]
  return (
    <div className="rounded-2xl border-2 border-line p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-black">
          {MONTHS[month]} {year}
        </span>
        <span className="text-sm font-bold text-mute">Rekord: {longest} Tage</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((w) => (
          <span key={w} className="pb-1 text-xs font-extrabold text-mute">
            {w}
          </span>
        ))}
        {cells.map((key, i) =>
          key ? (
            <span
              key={key}
              className="mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold"
              style={{
                background: act.has(key) ? '#FF9600' : frz.has(key) ? '#84D8FF' : 'transparent',
                color: act.has(key) || frz.has(key) ? '#fff' : key > today ? '#D5D5D5' : '#777',
                boxShadow: key === today ? 'inset 0 0 0 2px #FF9600' : undefined,
              }}
            >
              {Number(key.slice(8))}
            </span>
          ) : (
            <span key={`e${i}`} />
          ),
        )}
      </div>
    </div>
  )
}

export function ShopScreen() {
  const s = useAppState()
  const now = useNow()
  const hearts = currentHearts(s.hearts, now).count
  const [msg, setMsg] = useState('')
  const flash = (t: string) => {
    setMsg(t)
    window.setTimeout(() => setMsg(''), 2200)
  }
  return (
    <Page>
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => history.back()} className="-ml-2 rounded-xl p-2 text-mute hover:bg-snow" aria-label="Zurück">
          <BackIcon size={26} />
        </button>
        <h1 className="flex-1 text-[28px] font-black">Shop</h1>
        <span className="flex items-center gap-1 text-xl font-black text-sky">
          <GemIcon size={26} /> {s.gems}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <ShopItem
          icon={<HeartIcon size={44} />}
          title="Herzen auffüllen"
          text={s.settings.hearts ? `Du hast ${hearts} von ${MAX_HEARTS} Herzen.` : 'Herzen sind ausgeschaltet – du hast unbegrenzt.'}
          price={PRICES.heartsRefill}
          disabled={!s.settings.hearts || hearts >= MAX_HEARTS || s.gems < PRICES.heartsRefill}
          onBuy={() => {
            if (refillHeartsWithGems()) {
              sfx.reward()
              flash('Herzen aufgefüllt! ❤️')
            }
          }}
        />
        <ShopItem
          icon={<span className="text-[40px]">🧊</span>}
          title="Streak-Freeze"
          text={`Schützt deinen Streak, wenn du einen Tag verpasst. Ausgerüstet: ${s.streak.freezes}/${MAX_FREEZES}`}
          price={PRICES.freeze}
          disabled={s.streak.freezes >= MAX_FREEZES || s.gems < PRICES.freeze}
          onBuy={() => {
            if (buyFreeze()) {
              sfx.reward()
              flash('Streak-Freeze ausgerüstet! 🧊')
            }
          }}
        />
      </div>
      <p className="mt-6 text-center text-sm font-semibold text-ink-soft">Gems verdienst du mit Lektionen, Quests und Truhen.</p>
      {msg && (
        <div className="fixed inset-x-0 bottom-[calc(84px+env(safe-area-inset-bottom))] z-40 flex justify-center px-4" role="status">
          <span className="animate-pop rounded-2xl bg-ink px-4 py-3 font-extrabold text-white">{msg}</span>
        </div>
      )}
    </Page>
  )
}

function ShopItem({ icon, title, text, price, disabled, onBuy }: { icon: ReactNode; title: string; text: string; price: number; disabled: boolean; onBuy: () => void }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border-2 border-line p-4">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-snow">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-lg font-black">{title}</p>
        <p className="text-sm font-semibold text-ink-soft">{text}</p>
      </div>
      <button className="btn btn-white min-h-[44px] shrink-0 gap-1 px-3 text-sm" disabled={disabled} onClick={onBuy}>
        <GemIcon size={18} /> {price}
      </button>
    </div>
  )
}
