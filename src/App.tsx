import { useState } from 'react'
import { LessonOverview } from './components/LessonOverview'
import { LessonPlayer } from './components/LessonPlayer'
import { useProgress } from './hooks/useProgress'
import type { Session } from './lib/session'

export default function App() {
  const { progress, recordSession, resetProgress } = useProgress()
  const [session, setSession] = useState<Session | null>(null)
  // Erhöht sich bei jedem Start, damit der Player auch bei gleicher Lektion neu startet
  const [runId, setRunId] = useState(0)

  const start = (s: Session) => {
    setSession(s)
    setRunId((n) => n + 1)
    window.scrollTo({ top: 0 })
  }

  if (session) {
    return (
      <LessonPlayer
        key={runId}
        session={session}
        onExit={() => setSession(null)}
        onRecord={recordSession}
        onStartSession={start}
      />
    )
  }

  return <LessonOverview progress={progress} onStart={start} onReset={resetProgress} />
}
