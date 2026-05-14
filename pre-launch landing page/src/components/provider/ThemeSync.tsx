'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

/**
 * Keeps document.documentElement class in sync with theme so dark: styles apply.
 * Only updates when we have a resolved theme (avoids clearing on first paint before next-themes hydrates).
 */
export function ThemeSync() {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    const resolved = resolvedTheme ?? theme
    if (resolved === 'dark') {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
    } else if (resolved === 'light') {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }
  }, [theme, resolvedTheme])

  return null
}
