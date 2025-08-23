import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLayoutStore } from '@/store/setting/layout'
import { useLocalStore } from '@/store/setting/local'
import { useThemeStore } from '@/store/setting/theme'

export const useSettingStore = defineStore('setting', () => {
  const themeStore = useThemeStore()
  const layoutStore = useLayoutStore()
  const localStore = useLocalStore()
  const layoutMode = computed(() => layoutStore.currentLayout)
  const themeMode = computed(() => themeStore.currentThemeMode)
  const lang = computed(() => localStore.currentLang)

  return {
    themeMode,
    layoutMode,
    lang,
    changeThemeMode: themeStore.changeThemeMode,
    changeLayoutMode: layoutStore.changeLayoutMode,
    changeLang: localStore.changeLang,
  }
})
