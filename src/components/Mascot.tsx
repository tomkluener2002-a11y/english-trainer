/**
 * Maskottchen „Pip“ – ein freundlicher, runder Fuchs (eigene Figur).
 * Ausdrücke: neutral, happy, celebrate, sad, thinking. Idle: sanftes Wippen + Blinzeln.
 */
import type { ReactNode } from 'react'

export type Mood = 'neutral' | 'happy' | 'celebrate' | 'sad' | 'thinking'

export const MASCOT_NAME = 'Pip'

const ORANGE = '#FF8A1F'
const ORANGE_DARK = '#E06A00'
const CREAM = '#FFF4E0'
const INK = '#3C2A1E'

function Eyes({ mood }: { mood: Mood }) {
  if (mood === 'happy' || mood === 'celebrate') {
    return (
      <g stroke={INK} strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M66 106q12-14 24 0" />
        <path d="M110 106q12-14 24 0" />
      </g>
    )
  }
  const look = mood === 'thinking' ? { x: 4, y: -6 } : mood === 'sad' ? { x: 0, y: 4 } : { x: 2, y: 1 }
  return (
    <g className="mascot-eyes">
      <ellipse cx="78" cy="104" rx="15" ry="17" fill="#fff" />
      <ellipse cx="122" cy="104" rx="15" ry="17" fill="#fff" />
      <ellipse cx={78 + look.x} cy={105 + look.y} rx="8.5" ry="10" fill={INK} />
      <ellipse cx={122 + look.x} cy={105 + look.y} rx="8.5" ry="10" fill={INK} />
      <circle cx={81 + look.x} cy={100 + look.y} r="3.2" fill="#fff" />
      <circle cx={125 + look.x} cy={100 + look.y} r="3.2" fill="#fff" />
      {mood === 'sad' && (
        <g stroke={INK} strokeWidth="4.5" strokeLinecap="round">
          <path d="M64 88q10-1 19-8" />
          <path d="M136 88q-10-1-19-8" />
        </g>
      )}
    </g>
  )
}

function Mouth({ mood }: { mood: Mood }) {
  switch (mood) {
    case 'happy':
    case 'celebrate':
      return (
        <g>
          <path d="M84 134q16 22 32 0z" fill={INK} />
          <path d="M92 142q8 7 16 0q-8-6-16 0z" fill="#FF6B81" />
        </g>
      )
    case 'sad':
      return <path d="M89 144q11-9 22 0" stroke={INK} strokeWidth="4.5" fill="none" strokeLinecap="round" />
    case 'thinking':
      return <path d="M92 140q8 2 18-2" stroke={INK} strokeWidth="4.5" fill="none" strokeLinecap="round" />
    default:
      return <path d="M88 136q6 7 12 1q6 6 12-1" stroke={INK} strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  }
}

export function Mascot({ mood = 'neutral', size = 120, idle = true, className = '' }: { mood?: Mood; size?: number; idle?: boolean; className?: string }) {
  const armsUp = mood === 'celebrate'
  const earTilt = mood === 'sad' ? 12 : 0
  return (
    <div className={`${idle ? 'animate-bob' : ''} ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={`${MASCOT_NAME}, das Fuchs-Maskottchen`}>
        {/* Schatten */}
        <ellipse cx="100" cy="190" rx="52" ry="7" fill="#000" opacity=".08" />
        {/* Schwanz */}
        <path d="M150 168c26 2 42-18 38-44-2-12-12-20-20-16 4 18-6 34-26 40z" fill={ORANGE} />
        <path d="M183 112c-6-6-14-6-16-2 3 8 2 16-2 22 10-2 19-10 18-20z" fill={CREAM} />
        {/* Ohren */}
        <g transform={`rotate(${-earTilt} 72 60)`}>
          <path d="M46 78 58 24q3-8 10-2l30 34z" fill={ORANGE} />
          <path d="M60 62 64 36l18 20z" fill={INK} opacity=".85" />
        </g>
        <g transform={`rotate(${earTilt} 128 60)`}>
          <path d="M154 78 142 24q-3-8-10-2l-30 34z" fill={ORANGE} />
          <path d="M140 62 136 36l-18 20z" fill={INK} opacity=".85" />
        </g>
        {/* Körper */}
        <path d="M100 46c40 0 66 30 66 72 0 40-22 66-66 66s-66-26-66-66c0-42 26-72 66-72z" fill={ORANGE} />
        {/* Gesichtsmaske + Bauch */}
        <path d="M100 110c-14-8-40-10-54 2 0 26 22 44 54 44s54-18 54-44c-14-12-40-10-54-2z" fill={CREAM} />
        <ellipse cx="100" cy="166" rx="30" ry="16" fill={CREAM} />
        {/* Wangen */}
        <ellipse cx="60" cy="128" rx="9" ry="6" fill="#FF9FB0" opacity=".7" />
        <ellipse cx="140" cy="128" rx="9" ry="6" fill="#FF9FB0" opacity=".7" />
        <Eyes mood={mood} />
        {/* Nase */}
        <path d="M93 122h14q2 0 0 3l-5 5q-2 2-4 0l-5-5q-2-3 0-3z" fill={INK} />
        <Mouth mood={mood} />
        {/* Arme */}
        {armsUp ? (
          <>
            <ellipse cx="34" cy="96" rx="11" ry="20" fill={ORANGE_DARK} transform="rotate(-28 34 96)" />
            <ellipse cx="166" cy="96" rx="11" ry="20" fill={ORANGE_DARK} transform="rotate(28 166 96)" />
          </>
        ) : mood === 'thinking' ? (
          <>
            <ellipse cx="40" cy="146" rx="10" ry="16" fill={ORANGE_DARK} transform="rotate(20 40 146)" />
            <ellipse cx="124" cy="152" rx="10" ry="15" fill={ORANGE_DARK} transform="rotate(-60 124 152)" />
          </>
        ) : (
          <>
            <ellipse cx="40" cy="146" rx="10" ry="16" fill={ORANGE_DARK} transform="rotate(20 40 146)" />
            <ellipse cx="160" cy="146" rx="10" ry="16" fill={ORANGE_DARK} transform="rotate(-20 160 146)" />
          </>
        )}
        {/* Füße */}
        <ellipse cx="78" cy="184" rx="15" ry="7" fill={ORANGE_DARK} />
        <ellipse cx="122" cy="184" rx="15" ry="7" fill={ORANGE_DARK} />
        {/* Extras */}
        {mood === 'sad' && <path d="M138 116q5 9 0 12q-5-3 0-12z" fill="#7CCBFF" />}
        {mood === 'celebrate' && (
          <g fill="#FFC800">
            <path d="m24 40 3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
            <path d="m176 30 2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#1CB0F6" />
            <path d="m170 64 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#CE82FF" />
          </g>
        )}
        {mood === 'thinking' && (
          <g fill="#AFAFAF">
            <circle cx="166" cy="56" r="4" />
            <circle cx="178" cy="40" r="6" />
            <circle cx="186" cy="20" r="8" />
          </g>
        )}
      </svg>
    </div>
  )
}

/** Maskottchen mit Sprechblase (rechts oder darunter). */
export function MascotSays({
  children,
  mood = 'neutral',
  size = 96,
  layout = 'row',
}: {
  children: ReactNode
  mood?: Mood
  size?: number
  layout?: 'row' | 'column'
}) {
  if (layout === 'column') {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative animate-pop rounded-2xl border-2 border-line bg-white px-5 py-4 text-center text-lg leading-snug font-bold text-ink">
          {children}
          <span className="absolute -bottom-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-line bg-white" />
        </div>
        <Mascot mood={mood} size={size} />
      </div>
    )
  }
  return (
    <div className="flex items-end gap-2">
      <Mascot mood={mood} size={size} className="shrink-0" />
      <div className="relative mb-6 min-w-0 flex-1 animate-pop rounded-2xl border-2 border-line bg-white px-4 py-3 text-[17px] leading-snug font-bold text-ink">
        {children}
        <span className="absolute bottom-4 -left-[9px] h-4 w-4 rotate-45 border-b-2 border-l-2 border-line bg-white" />
      </div>
    </div>
  )
}
