/** Konfetti als eigene Canvas-Animation (keine Abhängigkeit). */
import { useEffect, useRef } from 'react'

const COLORS = ['#58CC02', '#1CB0F6', '#FF4B4B', '#FFC800', '#CE82FF', '#FF9600', '#00C2A8']

interface Piece {
  x: number
  y: number
  vx: number
  vy: number
  w: number
  h: number
  rot: number
  vr: number
  color: string
  shape: 0 | 1
}

export function Confetti({ burst = 140 }: { burst?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const W = () => canvas.clientWidth
    const pieces: Piece[] = []
    const spawn = (n: number, fromX: number, dir: number) => {
      for (let i = 0; i < n; i++) {
        const angle = (-Math.PI / 2) + dir * (0.25 + Math.random() * 0.55)
        const speed = 9 + Math.random() * 9
        pieces.push({
          x: fromX,
          y: canvas.clientHeight * 0.75,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          w: 6 + Math.random() * 6,
          h: 8 + Math.random() * 8,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          shape: Math.random() < 0.7 ? 0 : 1,
        })
      }
    }
    spawn(burst / 2, 0, 1)
    spawn(burst / 2, W(), -1)
    const second = window.setTimeout(() => {
      for (let i = 0; i < burst / 2; i++) {
        pieces.push({
          x: Math.random() * W(),
          y: -20 - Math.random() * 100,
          vx: (Math.random() - 0.5) * 2,
          vy: 2 + Math.random() * 3,
          w: 6 + Math.random() * 6,
          h: 8 + Math.random() * 8,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          shape: 0,
        })
      }
    }, 450)
    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
      for (const p of pieces) {
        p.vy += 0.32
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.scale(1, Math.cos(p.rot * 2))
        ctx.fillStyle = p.color
        if (p.shape === 0) ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        else {
          ctx.beginPath()
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }
      for (let i = pieces.length - 1; i >= 0; i--) if (pieces[i].y > canvas.clientHeight + 40) pieces.splice(i, 1)
      if (pieces.length) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(second)
      window.removeEventListener('resize', resize)
    }
  }, [burst])
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-40 h-full w-full" aria-hidden="true" />
}
