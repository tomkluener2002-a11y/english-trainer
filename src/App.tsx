import { useEffect, useState } from 'react'
import { ForkScreen } from './components/Fork'
import { LessonPlayer } from './components/LessonPlayer'
import { Mascot } from './components/Mascot'
import { Onboarding } from './components/Onboarding'
import { PathScreen } from './components/Path'
import { markPracticedToday } from './components/recommendation'
import { PlacementIntro, PlacementRunner } from './components/Placement'
import { PracticeScreen } from './components/Practice'
import { ProfileScreen, ShopScreen } from './components/Profile'
import { QuestsScreen } from './components/Quests'
import { navigate, segments, useRoute } from './components/router'
import { lessonSession, type PracticeMode, practiceSession, type SessionSpec } from './components/sessions'
import { TabBar, TopBar } from './components/Shell'
import { core } from './content'
import { pendingFork } from './lib/progress'
import { getState, useAppState } from './state/store'

const PRACTICE_MODES: PracticeMode[] = ['mistakes', 'weak', 'due', 'unit', 'heal']

function buildSpec(seg: string[]): SessionSpec | null {
  const s = getState()
  const now = Date.now()
  if (seg[0] === 'lesson' && seg[1]) return lessonSession(seg[1], s, now)
  if (seg[0] === 'session' && PRACTICE_MODES.includes(seg[1] as PracticeMode)) return practiceSession(seg[1] as PracticeMode, s, now, seg[2])
  return null
}

function SessionRoute({ seg }: { seg: string[] }) {
  const [spec] = useState(() => buildSpec(seg))
  if (!spec || !spec.items.length) {
    return (
      <div className="safe-top flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <Mascot mood="thinking" size={130} />
        <h1 className="text-2xl font-black">Hier gibt es gerade nichts zu üben</h1>
        <p className="text-ink-soft">Mach eine Lektion – dann habe ich neues Material für dich.</p>
        <button className="btn w-full max-w-[360px]" onClick={() => navigate('/', { replace: true })}>
          Zum Lernpfad
        </button>
      </div>
    )
  }
  const back = spec.kind === 'practice' ? '/practice' : '/'
  return (
    <LessonPlayer
      spec={spec}
      onExit={() => navigate(back, { replace: true })}
      onDone={() => {
        if (spec.kind === 'practice') markPracticedToday()
        navigate(pendingFork(getState(), core) ? '/fork' : '/', { replace: true })
      }}
    />
  )
}

export default function App() {
  const s = useAppState()
  const route = useRoute()
  const seg = segments(route)

  useEffect(() => {
    if (seg[0] !== undefined) window.scrollTo(0, 0)
  }, [route]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!s.profile.onboarded) return <Onboarding />
  if (seg[0] === 'placement') return <PlacementRunner key={route} />
  if (!s.placement.done) return <PlacementIntro />
  if (seg[0] === 'lesson' || seg[0] === 'session') return <SessionRoute key={route} seg={seg} />
  if (seg[0] === 'fork') return <ForkScreen key={route} />

  let screen
  switch (seg[0]) {
    case 'practice':
      screen = <PracticeScreen />
      break
    case 'quests':
      screen = <QuestsScreen />
      break
    case 'profile':
      screen = <ProfileScreen />
      break
    case 'shop':
      screen = <ShopScreen />
      break
    default:
      screen = <PathScreen />
  }
  return (
    <div className="min-h-dvh bg-white">
      <TopBar />
      <main>{screen}</main>
      <TabBar route={route} />
    </div>
  )
}
