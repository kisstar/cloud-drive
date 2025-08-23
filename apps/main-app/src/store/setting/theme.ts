import type { ThemeMode } from '@/types/setting'
import { useDark, usePreferredDark, useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'
import { DEFAULT_THEME } from '@/config/app'

interface ThemeState {
  themeMode: ThemeMode
}

const isPreferredDark = usePreferredDark()
const isDark = useDark()
const toggleDark = useToggle(isDark)

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => {
    return {
      themeMode: DEFAULT_THEME,
    }
  },
  getters: {
    currentThemeMode(state) {
      return state.themeMode
    },
    /**
     * `effectiveThemeMode` refers to the actual theme mode, while `currentThemeMode` is used for display
     */
    effectiveThemeMode(state): Exclude<ThemeMode, 'system'> {
      if (state.themeMode === 'system') {
        if (isPreferredDark.value) {
          return 'dark'
        }

        return 'light'
      }

      return state.themeMode
    },
    isDarkMode(): boolean {
      return this.effectiveThemeMode === 'dark'
    },
  },
  actions: {
    async changeThemeMode(mode: ThemeMode) {
      this.themeMode = mode

      if (this.isDarkMode !== isDark.value) {
        toggleDark()
      }
    },
  },
  persist: {
    key: 'cloud-drive:theme',
    afterHydrate: ({ store }) => {
      if (store.isDarkMode !== isDark.value) {
        toggleDark()
      }
    },
  },
})
