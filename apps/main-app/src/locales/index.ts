import type { DropdownOption } from 'tdesign-vue-next'
import type { I18nOptions } from 'vue-i18n'
import { useLocalStorage, usePreferredLanguages } from '@vueuse/core'
import { computed } from 'vue'
import { createI18n } from 'vue-i18n'
import { DEFAULT_LANG } from '@/config/app'
import { APP_LOCALE_KEY } from '@/constants/storage-key'

type I18nMessages = I18nOptions['messages']

interface LangModuleInfo {
  default: { lang: string }
  [key: string]: unknown
}

// Import language files
const langModules = import.meta.glob<LangModuleInfo>('./lang/*/index.ts', { eager: true })
const langModuleMap = new Map<string, LangModuleInfo>()
// Navigator languages
const languages = usePreferredLanguages()
// Language code (The folder name in the lang directory)
const langCode: Array<string> = []

// Language list
const langList = computed(() => {
  const list: DropdownOption[] = []

  langModuleMap.forEach((value, key) => {
    list.push({
      content: value.default.lang,
      value: key,
    })
  })

  return list
})
// Import language messages
const importMessages = computed(() => {
  const message: I18nMessages = {}

  langModuleMap.forEach((value, key) => {
    message[key] = value.default
  })

  return message
})

/**
 * Generate a list of language modules
 */
function generateLangModuleMap() {
  const fullPaths = Object.keys(langModules)

  fullPaths.forEach((fullPath) => {
    const k = fullPath.replace('./lang', '')
    const startIndex = 1
    const lastIndex = k.lastIndexOf('/')
    const code = k.substring(startIndex, lastIndex)

    langCode.push(code)
    langModuleMap.set(code, langModules[fullPath])
  })
};

generateLangModuleMap()
const i18n = createI18n({
  legacy: false,
  locale: useLocalStorage(APP_LOCALE_KEY, DEFAULT_LANG).value || languages.value[0] || DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: importMessages.value,
  globalInjection: true,
})

export const t = i18n.global.t

export { i18n, langCode, langList }
