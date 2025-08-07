import type { ThemeMode } from '@/types/setting'
import { defineStore } from 'pinia'
import { DEFAULT_THEME } from '@/config/app'

interface ThemeState {
  themeMode: ThemeMode
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => {
    return {
      themeMode: DEFAULT_THEME,
    }
  },
  getters: {
    currentThemeMode: (state): ThemeMode => {
      if (state.themeMode === 'auto') {
        const media = window.matchMedia('(prefers-color-scheme:dark)')

        if (media.matches) {
          return 'dark'
        }

        return 'light'
      }

      return state.themeMode
    },
    isDarkMode: (state) => {
      return state.themeMode === 'dark'
    },
  },
  actions: {
    async changeThemeMode(mode: ThemeMode) {
      this.themeMode = mode
      document.documentElement.setAttribute('theme-mode', this.isDarkMode ? 'dark' : '')
    },
  },
  persist: {
    afterHydrate: ({ store }) => {
      store.changeThemeMode(store.currentThemeMode)
    },
  },
})
