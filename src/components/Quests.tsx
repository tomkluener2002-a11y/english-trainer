/** Quests-Tab: Tagesziel und drei Tagesquests mit Truhen-Belohnung. */
import { useState } from 'react'
import { dayKey } from '../lib/date'
import { isQuestDone, QUEST_ICON, questLabel } from '../lib/quests'
import { xpToday } from '../lib/xp'
import { claimQuest } from '../state/actions'
import { useAppState, useNow } from '../state/store'
import { ChestIcon, GemIcon } from './Icons'
import { Mascot } from './Mascot'
import { Page } from './Shell'
import { sfx } from './sfx'
import { Modal, ProgressBar } from './ui'

export function QuestsScreen() {
  const s = useAppState()
  const now = useNow()
  const [reward, setReward] = useState<number | null>(null)
  const today = dayKey(now)
  const xp = xpToday(s.xp.byDay, today)
  const goal = s.profile.dailyGoal
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  const left = midnight.getTime() - now
  const h = Math.floor(left / 3_600_000)
  const m = Math.floor((left % 3_600_000) / 60_000)

  return (
    <Page>
      <div className="relative mb-6 overflow-hidden rounded-3xl bg-beetle p-5 text-white">
        <p className="label-caps opacity-90">Tagesquests</p>
        <h1 className="mt-1 max-w-[60%] text-[24px] leading-tight font-black">Schließe Quests ab und sammle Gems!</h1>
        <p className="mt-2 text-[14px] font-bold opacity-90">
          ⏳ Neue Quests in {h} Std. {m} Min.
        </p>
        <div className="absolute -right-2 -bottom-3">
          <Mascot mood="happy" size={120} />
        </div>
      </div>

      <section className="mb-6 rounded-2xl border-2 border-line p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-black">🏁 Tagesziel</h2>
          <span className="font-extrabold text-mute">
            {Math.min(xp, goal)} / {goal} XP
          </span>
        </div>
        <ProgressBar value={xp / goal} color="#FFC800" label="Tagesziel" />
        <p className="mt-2 text-sm font-semibold text-ink-soft">{xp >= goal ? 'Geschafft! Dein Streak ist für heute sicher. 🔥' : 'Eine Lektion bringt dir 10–15 XP.'}</p>
      </section>

      <h2 className="mb-3 text-xl font-black">Heute</h2>
      <div className="flex flex-col gap-3">
        {s.quests.items.map((q) => {
          const done = isQuestDone(q)
          return (
            <div key={q.id} className="flex items-center gap-4 rounded-2xl border-2 border-line p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bee/20 text-2xl" aria-hidden="true">
                {QUEST_ICON[q.kind]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="mb-2 font-extrabold">{questLabel(q)}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <ProgressBar value={q.progress / q.target} color={done ? '#58CC02' : '#FFC800'} height={14} label={questLabel(q)} />
                  </div>
                  <span className="w-12 text-right text-sm font-extrabold text-mute">
                    {q.progress}/{q.target}
                  </span>
                </div>
              </div>
              {done && !q.claimed ? (
                <button
                  className="btn btn-gold min-h-[44px] shrink-0 px-3 text-[13px]"
                  onClick={() => {
                    const r = claimQuest(q.id)
                    if (r) {
                      sfx.reward()
                      setReward(r)
                    }
                  }}
                >
                  Abholen
                </button>
              ) : (
                <span className={`shrink-0 ${q.claimed ? 'opacity-60 grayscale-[.4]' : done ? '' : 'opacity-50 grayscale'}`} aria-label={q.claimed ? 'Abgeholt' : `Belohnung: ${q.reward} Gems`}>
                  <ChestIcon size={44} open={q.claimed} />
                </span>
              )}
            </div>
          )
        })}
      </div>

      <Modal open={reward !== null} onClose={() => setReward(null)} label="Belohnung">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="animate-pop">
            <ChestIcon open size={110} />
          </div>
          <h2 className="text-[24px] font-black">Quest erfüllt!</h2>
          <p className="flex items-center gap-2 text-[22px] font-black text-sky">
            <GemIcon size={28} /> +{reward}
          </p>
          <button className="btn mt-3 w-full" onClick={() => setReward(null)}>
            Super
          </button>
        </div>
      </Modal>
    </Page>
  )
}
