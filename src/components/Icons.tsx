/** Eigene, farbige SVG-Icons (einheitlicher, runder Stil). */
import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement> & { size?: number }
const svg = ({ size = 24, ...p }: P) => ({ width: size, height: size, 'aria-hidden': true as const, focusable: false as const, ...p })

export function FlameIcon({ active = true, ...p }: P & { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path
        d="M12 1.8c.6 3-1.6 4.4-3.3 6.4C7 10.1 5.5 12 5.5 15a6.5 6.5 0 0 0 13 0c0-2.2-.9-4-2-5.4-.3 1.3-1 2.3-2.1 2.8.6-3.8-.7-7.9-2.4-10.6Z"
        fill={active ? '#FF9600' : '#E5E5E5'}
      />
      <path d="M12 12.2c1.9 1.6 3 3.1 3 4.8a3 3 0 0 1-6 0c0-1.7 1.3-3 3-4.8Z" fill={active ? '#FFC800' : '#F7F7F7'} />
    </svg>
  )
}

export function HeartIcon({ broken, ...p }: P & { broken?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M12 21s-8.5-5.3-8.5-11.6A4.9 4.9 0 0 1 12 6.3a4.9 4.9 0 0 1 8.5 3.1C20.5 15.7 12 21 12 21Z" fill={broken ? '#E5E5E5' : '#FF4B4B'} />
      {broken ? (
        <path d="m12 6.6-1.6 4 2.4 1.8-1.5 4.2" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <ellipse cx="8" cy="9.6" rx="1.8" ry="1.2" fill="#fff" opacity=".55" transform="rotate(-30 8 9.6)" />
      )}
    </svg>
  )
}

export function GemIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M6.2 3.5h11.6L22 9l-10 12L2 9l4.2-5.5Z" fill="#1CB0F6" />
      <path d="M2 9h20L12 21 2 9Z" fill="#1899D6" />
      <path d="M8 9h8l-4 12L8 9Z" fill="#49C0F8" />
      <path d="M6.2 3.5 8 9h8l1.8-5.5H6.2Z" fill="#84D8FF" />
    </svg>
  )
}

export function BoltIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M13.5 1.5 4 13.6h6.6L9.5 22.5 20 9.8h-6.8l.3-8.3Z" fill="#FFC800" stroke="#E5A100" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export function CrownIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M3 8.5 7.5 12 12 5l4.5 7L21 8.5 19 18H5L3 8.5Z" fill="#FFC800" stroke="#E5A100" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="5" y="18" width="14" height="2.5" rx="1" fill="#E5A100" />
    </svg>
  )
}

export function StarIcon({ color = '#fff', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path
        d="m12 2.6 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17l-5.6 3 1.1-6.3L2.9 9.3l6.3-.9L12 2.6Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LockIcon({ color = '#AFAFAF', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <rect x="4.5" y="10" width="15" height="11" rx="3" fill={color} />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke={color} strokeWidth="2.6" fill="none" />
      <circle cx="12" cy="15.3" r="1.6" fill="#fff" />
    </svg>
  )
}

export function CheckIcon({ color = 'currentColor', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="m4.5 12.5 5 5 10-11" stroke={color} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XIcon({ color = 'currentColor', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="m6 6 12 12M18 6 6 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function BackIcon({ color = 'currentColor', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M15 5 8 12l7 7" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SpeakerIcon({ color = '#fff', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M4 9.5h3.5L12.5 5v14l-5-4.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" fill={color} />
      <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function TurtleIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <ellipse cx="11" cy="13" rx="7" ry="5.2" fill="#58CC02" />
      <path d="M6.5 12.5h9M8.5 9.5l1.5 3-1.5 3M13.5 9.5l-1.5 3 1.5 3" stroke="#58A700" strokeWidth="1.3" fill="none" />
      <circle cx="19.5" cy="12" r="2.3" fill="#89E219" />
      <circle cx="20.2" cy="11.4" r=".5" fill="#4B4B4B" />
      <rect x="6" y="16.5" width="2.4" height="3" rx="1.2" fill="#89E219" />
      <rect x="13.2" y="16.5" width="2.4" height="3" rx="1.2" fill="#89E219" />
    </svg>
  )
}

export function MicIcon({ color = '#fff', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <rect x="8.5" y="2.5" width="7" height="12" rx="3.5" fill={color} />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3.5M8.5 21h7" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function BookIcon({ color = '#fff', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M3 5.5C5.8 4.3 8.8 4.3 11.2 6v13.5C8.8 17.8 5.8 17.8 3 19V5.5ZM21 5.5c-2.8-1.2-5.8-1.2-8.2.5v13.5c2.4-1.7 5.4-1.7 8.2-.5V5.5Z" fill={color} />
    </svg>
  )
}

export function ChestIcon({ open, ...p }: P & { open?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" {...svg(p)}>
      {open ? (
        <>
          <path d="M7 22h34v16a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V22Z" fill="#CE8A3F" />
          <path d="M9 10h30l3 12H6l3-12Z" fill="#E5A15A" transform="rotate(-14 24 22)" />
          <rect x="7" y="22" width="34" height="5" fill="#A86A2B" />
          <circle cx="18" cy="20" r="3" fill="#1CB0F6" />
          <circle cx="26" cy="18" r="3.4" fill="#FFC800" />
          <circle cx="32" cy="21" r="2.6" fill="#1CB0F6" />
        </>
      ) : (
        <>
          <path d="M7 20h34v18a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V20Z" fill="#CE8A3F" />
          <path d="M11 7h26a4 4 0 0 1 4 4v9H7v-9a4 4 0 0 1 4-4Z" fill="#E5A15A" />
          <rect x="7" y="18" width="34" height="5" fill="#A86A2B" />
          <rect x="20" y="16" width="8" height="10" rx="2" fill="#FFC800" stroke="#E5A100" strokeWidth="1.5" />
        </>
      )}
    </svg>
  )
}

export function TrophyIcon({ color = '#FFC800', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path d="M7 3.5h10v6a5 5 0 0 1-10 0v-6Z" fill={color} />
      <path d="M7 5.5H4.2v1.8A3.5 3.5 0 0 0 7.5 11M17 5.5h2.8v1.8a3.5 3.5 0 0 1-3.3 3.7" stroke={color} strokeWidth="1.8" fill="none" />
      <rect x="10.8" y="14" width="2.4" height="4" fill={color} />
      <rect x="7.5" y="18" width="9" height="2.8" rx="1.2" fill={color} />
    </svg>
  )
}

export function SignpostIcon({ color = '#fff', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <rect x="10.8" y="2.5" width="2.4" height="19" rx="1.2" fill={color} />
      <path d="M4 5h11l3 2.5L15 10H4V5Z" fill={color} />
      <path d="M20 11.5H9l-3 2.5 3 2.5h11v-5Z" fill={color} opacity=".85" />
    </svg>
  )
}

export function GearIcon({ color = '#AFAFAF', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...svg(p)}>
      <path
        d="M10.3 2.5h3.4l.5 2.6 1.6.9 2.5-.9 1.7 2.9-2 1.8v1.9l2 1.8-1.7 2.9-2.5-.9-1.6.9-.5 2.6h-3.4l-.5-2.6-1.6-.9-2.5.9-1.7-2.9 2-1.8V9.8l-2-1.8 1.7-2.9 2.5.9 1.6-.9.5-2.6Z"
        fill={color}
      />
      <circle cx="12" cy="11.9" r="3" fill="#fff" />
    </svg>
  )
}

/* ───────────── Tabbar-Icons ───────────── */

export function TabLearnIcon({ active, ...p }: P & { active?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" {...svg({ size: 30, ...p })}>
      <path d="M4 15 16 4.5 28 15v11.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V15Z" fill={active ? '#FF9600' : '#DADADA'} />
      <path d="M2.5 15.5 16 3.5l13.5 12" stroke={active ? '#FF4B4B' : '#AFAFAF'} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12.5" y="18" width="7" height="10.5" rx="1.5" fill={active ? '#CC7900' : '#AFAFAF'} />
    </svg>
  )
}
export function TabPracticeIcon({ active, ...p }: P & { active?: boolean }) {
  const c = active ? '#1CB0F6' : '#AFAFAF'
  const d = active ? '#1899D6' : '#DADADA'
  return (
    <svg viewBox="0 0 32 32" {...svg({ size: 30, ...p })}>
      <rect x="9" y="14.5" width="14" height="3" rx="1.5" fill={d} />
      <rect x="3" y="9" width="5" height="14" rx="2" fill={c} />
      <rect x="24" y="9" width="5" height="14" rx="2" fill={c} />
      <rect x="7" y="11" width="3.5" height="10" rx="1.5" fill={d} />
      <rect x="21.5" y="11" width="3.5" height="10" rx="1.5" fill={d} />
    </svg>
  )
}
export function TabQuestsIcon({ active, ...p }: P & { active?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" {...svg({ size: 30, ...p })}>
      <path d="M5 13h22v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V13Z" fill={active ? '#CE8A3F' : '#DADADA'} />
      <path d="M8 5h16a3 3 0 0 1 3 3v5H5V8a3 3 0 0 1 3-3Z" fill={active ? '#E5A15A' : '#C4C4C4'} />
      <rect x="5" y="12" width="22" height="3.5" fill={active ? '#A86A2B' : '#AFAFAF'} />
      <rect x="13.5" y="10.5" width="5" height="7" rx="1.5" fill={active ? '#FFC800' : '#F0F0F0'} />
    </svg>
  )
}
export function TabProfileIcon({ active, ...p }: P & { active?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" {...svg({ size: 30, ...p })}>
      <circle cx="16" cy="16" r="13" fill={active ? '#CE82FF' : '#DADADA'} />
      <circle cx="16" cy="13" r="5" fill="#fff" />
      <path d="M7.5 25.5a9.5 9.5 0 0 1 17 0" fill="#fff" />
    </svg>
  )
}
