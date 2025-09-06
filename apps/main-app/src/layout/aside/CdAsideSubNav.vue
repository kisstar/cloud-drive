<script lang="ts">
import type { PropType } from 'vue'
import type { AsideSubNavItem } from '@/types/nav'
import { defineComponent } from 'vue'
import CdSubMenu from '@/layout/aside/components/CdSubMenu.vue'

interface AsideSubNavProps {
  topNavList: AsideSubNavItem[]
  bottomNavList: AsideSubNavItem[]
}

const components = {
  CdSubMenu,
}

export type AsideSubNavComponentName = keyof typeof components

export default defineComponent({
  components,
  props: {
    topNavList: {
      type: Array as PropType<AsideSubNavProps['topNavList']>,
      default: () => [],
    },
    bottomNavList: {
      type: Array as PropType<AsideSubNavProps['bottomNavList']>,
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
