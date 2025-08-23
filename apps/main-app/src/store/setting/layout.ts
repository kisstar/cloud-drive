import type { LayoutMode } from '@/types/setting'
import { defineStore } from 'pinia'
import { DEFAULT_LAYOUT } from '@/config/app'

interface LayoutState {
  layoutMode: LayoutMode
}

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => {
    return {
      layoutMode: DEFAULT_LAYOUT,
    }
  },
  getters: {
    currentLayout: (state): LayoutMode => {
      return state.layoutMode
    },
  },
  actions: {
    async changeLayoutMode(mode: LayoutMode) {
      this.layoutMode = mode
    },
  },
  persist: {
    key: 'cloud-drive:layout',
    afterHydrate: ({ store }) => {
      store.changeLayoutMode(store.currentLayout)
    },
  },
})
