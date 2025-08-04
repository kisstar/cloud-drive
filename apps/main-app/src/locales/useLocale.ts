import type { GlobalConfigProvider } from 'tdesign-vue-next'
import type { Lang } from '@/locales'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { APP_LOCALE_KEY } from '@/constants/storage-key'
import { i18n, langCode } from '@/locales'

function useLocale() {
  const { locale } = useI18n({ useScope: 'global' })

  function changeLocale(lang: Lang) {
    // If the switched language is not in the corresponding language file,
    // it defaults to Simplified Chinese
    if (!langCode.includes(lang)) {
      lang = 'zh_CN'
    }

    locale.value = lang
    useLocalStorage(APP_LOCALE_KEY, 'zh_CN').value = lang
  }

  const getComponentsLocale = computed(() => {
    return (i18n.global.getLocaleMessage(locale.value) as { componentsLocale: GlobalConfigProvider }).componentsLocale
  })

  return {
    changeLocale,
    getComponentsLocale,
    locale,
  }
}

export { useLocale }
