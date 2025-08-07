import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useThemeStore } from '@/store/setting/theme'

export const useSettingStore = defineStore('setting', () => {
  const themeStore = useThemeStore()
  const themeMode = computed(() => themeStore.themeMode)

  return {
    themeMode,
    changeThemeMode: themeStore.changeThemeMode,
  }
})
