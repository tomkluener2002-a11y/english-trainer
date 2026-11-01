/**
 * Minimales Hash-Routing (funktioniert unter dem GitHub-Pages-Unterpfad ohne Server-Rewrites).
 * Routen: #/  #/practice  #/quests  #/profile  #/shop  #/fork
 *         #/lesson/<id>  #/session/<mode>[/<unitId>]  #/placement
 */
import { useSyncExternalStore } from 'react'

function read(): string {
  const h = typeof location !== 'undefined' ? location.hash.replace(/^#/, '') : ''
  return h || '/'
}

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb)
  return () => window.removeEventListener('hashchange', cb)
}

export function useRoute(): string {
  return useSyncExternalStore(subscribe, read, () => '/')
}

export function navigate(path: string, opts: { replace?: boolean } = {}) {
  const target = '#' + path
  if (opts.replace) {
    history.replaceState(null, '', target)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  } else if (location.hash !== target) location.hash = target
}

/** Zerlegt "/lesson/core.a1u1.l1" → ['lesson', 'core.a1u1.l1']. */
export function segments(route: string): string[] {
  return route.split('?')[0].split('/').filter(Boolean).map(decodeURIComponent)
}

export function query(route: string): URLSearchParams {
  return new URLSearchParams(route.split('?')[1] ?? '')
}
