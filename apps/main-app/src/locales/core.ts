import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { DEFAULT_LANG } from '@/config/app'
import { COMMAND_NAME } from '@/constants/command'

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
// Language list
const langList: Array<{ key: string, text: string, command: string }> = []
// Import language messages
const importMessages: I18nMessages = {}

/**
 * Generate language configuration
 */
;(function generateLangModuleMap() {
  const fullPaths = Object.keys(langModules)

  fullPaths.forEach((fullPath) => {
    const code = fullPath.match(/\.\/lang\/([\w-]+)\/index\.ts/)?.[1]

    if (code) {
      langCode.push(code)
      langModuleMap.set(code, langModules[fullPath])
      langList.push({
        key: code,
        text: langModules[fullPath].default.lang,
        command: COMMAND_NAME.CHANGE_LANG,
      })
      importMessages[code] = langModules[fullPath].default
    }
  })
})()

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: importMessages,
  globalInjection: true,
})

export const t = i18n.global.t

export { i18n, langCode, langList }
