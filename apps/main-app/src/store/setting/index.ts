import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLayoutStore } from '@/store/setting/layout'
import { useThemeStore } from '@/store/setting/theme'

export const useSettingStore = defineStore('setting', () => {
  const themeStore = useThemeStore()
  const layoutStore = useLayoutStore()
  const layoutMode = computed(() => layoutStore.layoutMode)
  const themeMode = computed(() => themeStore.themeMode)

  return {
    themeMode,
    layoutMode,
    changeThemeMode: themeStore.changeThemeMode,
    changeLayoutMode: layoutStore.changeLayoutMode,
  }
})
