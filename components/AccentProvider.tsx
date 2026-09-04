'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { animate } from 'framer-motion'
import { themeForPath, DEFAULT_THEME } from '@/lib/theme'

// Animates a real color transition across the whole site whenever the route
// changes, by tweening --accent / --accent-soft on <html> with Framer
// Motion's color interpolation. Every component that reads var(--accent)
// picks up the transition automatically - no per-component animation needed.
export default function AccentProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const initialized = useRef(false)

  useEffect(() => {
    const theme = themeForPath(pathname || '/')
    const root = document.documentElement

    if (!initialized.current) {
      root.style.setProperty('--accent', theme.accent)
      root.style.setProperty('--accent-soft', theme.accentSoft)
      initialized.current = true
      return
    }

    const currentAccent = getComputedStyle(root).getPropertyValue('--accent').trim() || DEFAULT_THEME.accent
    const controls = animate(currentAccent, theme.accent, {
      duration: 0.7,
      ease: 'easeInOut',
      onUpdate: (v) => root.style.setProperty('--accent', v),
    })

    return () => controls.stop()
  }, [pathname])

  return <>{children}</>
}
