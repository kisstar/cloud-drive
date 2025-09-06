<script lang="ts">
import type { PropType } from 'vue'
import type { AsideNavItem } from '@/types/nav'
import { defineComponent } from 'vue'
import CdMenu from '@/layout/aside/components/CdMenu.vue'

interface AsideNavProps {
  topNavList: AsideNavItem[]
  bottomNavList: AsideNavItem[]
}

const components = {
  CdMenu,
}

export type AsideNavComponentName = keyof typeof components

export default defineComponent({
  components,
  props: {
    topNavList: {
      type: Array as PropType<AsideNavProps['topNavList']>,
      default: () => [],
    },
    bottomNavList: {
      type: Array as PropType<AsideNavProps['bottomNavList']>,
      default: () => [],
    },
  },
  setup() {
  },
})
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <component
      :is="comp.component"
      v-for="comp in topNavList"
      :key="comp.key"
      v-bind="comp.props"
    />
    <component
      :is="comp.component"
      v-for="comp in bottomNavList"
      :key="comp.key"
      v-bind="comp.props"
    />
  </div>
</template>
