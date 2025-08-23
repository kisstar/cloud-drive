import type { I18nOptions } from 'vue-i18n'
import { computed } from 'vue'
import { createI18n } from 'vue-i18n'
import { DEFAULT_LANG } from '@/config/app'

type I18nMessages = I18nOptions['messages']

interface LangModuleInfo {
  default: { lang: string }
  [key: string]: unknown
}

// Import language files
const langModules = import.meta.glob<LangModuleInfo>('./lang/*/index.ts', { eager: true })
const langModuleMap = new Map<string, LangModuleInfo>()
// Language code (The folder name in the lang directory)
const langCode: Array<string> = []

/**
 * Generate a list of language modules
 */
;(function generateLangModuleMap() {
  const fullPaths = Object.keys(langModules)

  fullPaths.forEach((fullPath) => {
    const code = fullPath.match(/\.\/lang\/(\w+)\/index\.ts/)?.[1]

    if (code) {
      langCode.push(code)
      langModuleMap.set(code, langModules[fullPath])
    }
  })
})()

// Import language messages
const importMessages = computed(() => {
  const message: I18nMessages = {}

  langModuleMap.forEach((value, key) => {
    message[key] = value.default
  })

  return message
})

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: importMessages.value,
  globalInjection: true,
})

export const t = i18n.global.t

export { i18n, langCode }
