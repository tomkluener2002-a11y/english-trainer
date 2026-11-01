import type { Cefr, ColorKey } from '../content/schema'

export interface Palette {
  /** Hauptfarbe (Flächen, Knoten). */
  main: string
  /** Dunkler 3D-Rand. */
  dark: string
  /** Heller Hintergrund. */
  light: string
  /** Textfarbe auf `main`. */
  fg: string
}

export const PALETTE: Record<ColorKey, Palette> = {
  green: { main: '#58CC02', dark: '#58A700', light: '#D7FFB8', fg: '#fff' },
  blue: { main: '#1CB0F6', dark: '#1899D6', light: '#DDF4FF', fg: '#fff' },
  purple: { main: '#CE82FF', dark: '#A568CC', light: '#F4E5FF', fg: '#fff' },
  orange: { main: '#FF9600', dark: '#CC7900', light: '#FFEFD6', fg: '#fff' },
  red: { main: '#FF4B4B', dark: '#EA2B2B', light: '#FFDFE0', fg: '#fff' },
  yellow: { main: '#FFC800', dark: '#E5A100', light: '#FFF5CC', fg: '#6B4E00' },
  teal: { main: '#00C2A8', dark: '#009E88', light: '#D2F8F2', fg: '#fff' },
  pink: { main: '#FF7BC6', dark: '#E0559F', light: '#FFE3F3', fg: '#fff' },
}

export const pal = (c: ColorKey | undefined) => PALETTE[c ?? 'green']

export const CEFR_INFO: Record<Cefr, { title: string; text: string }> = {
  A1: { title: 'Einsteiger', text: 'Du verstehst einfache Wörter und Sätze. Wir legen das Fundament.' },
  A2: { title: 'Grundkenntnisse', text: 'Du kommst in einfachen Alltagssituationen zurecht.' },
  B1: { title: 'Fortgeschritten', text: 'Du kannst dich über vertraute Themen unterhalten.' },
  B2: { title: 'Selbstständig', text: 'Du sprichst flüssig über viele Themen und verstehst Details.' },
  C1: { title: 'Kompetent', text: 'Du drückst dich fließend und präzise aus – stark!' },
}
