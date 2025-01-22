import { useDark, useToggle } from '@vueuse/core'

export function useThemes() {
  const isDark = useDark({
    storageKey: 'theme',
    valueDark: 'dark',
    valueLight: 'light',
  })

  const toggleTheme = useToggle(isDark)

  return {
    isDark,
    toggleTheme,
  }
}
