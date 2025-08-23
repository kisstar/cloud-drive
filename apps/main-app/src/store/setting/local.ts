import type { Language } from 'element-plus/es/locale'
import type { Lang } from '@/types/setting'
import { usePreferredLanguages } from '@vueuse/core'
import { defineStore } from 'pinia'
import { DEFAULT_LANG } from '@/config/app'
import { elLocaleMap, i18n, langCode } from '@/locales'

interface LocalState {
  lang: Lang
}

const preferredLanguages = usePreferredLanguages()

export const useLocalStore = defineStore('local', {
  state: (): LocalState => {
    return {
      lang: DEFAULT_LANG,
    }
  },
  getters: {
    currentLang(state): Lang {
      return state.lang
    },
    /**
     * `effectiveLang` refers to the actual effectiveness, while `currentLang` is used for display
     */
    effectiveLang(state): Exclude<Lang, 'system'> {
      if (state.lang === 'system') {
        const preferredLanguage = preferredLanguages.value[0]

        if (langCode.includes(preferredLanguage)) {
          return preferredLanguage as Exclude<Lang, 'system'>
        }

        return DEFAULT_LANG as Exclude<Lang, 'system'>
      }

      return state.lang
    },
    elLocals(): Language {
      return elLocaleMap[this.effectiveLang]
    },
  },
  actions: {
    async _setLang() {
      i18n.global.locale.value = this.effectiveLang
      document.querySelector('html')?.setAttribute('lang', this.effectiveLang)
    },
    async changeLang(lang: Lang) {
      this.lang = lang
      this._setLang()
    },
  },
  persist: {
    key: 'cloud-drive:local',
    afterHydrate: ({ store }) => {
      store._setLang()
    },
  },
})
