import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { lessons } from './content/lessons'
import { validateLessons } from './content/validate'

if (import.meta.env.DEV) {
  const problems = validateLessons(lessons)
  if (problems.length) console.warn('[English Trainer] Probleme in content/lessons.ts:\n' + problems.join('\n'))
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
