<script lang="ts">
import type { PropType } from 'vue'
import type { HeaderNavItem } from '@/types/nav'
import { defineComponent } from 'vue'
import CdBrand from '@/layout/header/components/CdBrand.vue'
import CdButton from '@/layout/header/components/CdButton.vue'
import CdDropdown from '@/layout/header/components/CdDropdown.vue'
import CdThemeMode from '@/layout/header/components/CdThemeMode.vue'
import CdUserInfo from '@/layout/header/components/CdUserInfo.vue'

interface HeaderProps {
  leftNavList: HeaderNavItem[]
  rightNavList: HeaderNavItem[]
}

const components = {
  CdBrand,
  CdButton,
  CdDropdown,
  CdThemeMode,
  CdUserInfo,
}

export type HeaderComponentName = keyof typeof components

export default defineComponent({
  components,
  props: {
    leftNavList: {
      type: Array as PropType<HeaderProps['leftNavList']>,
    },
    rightNavList: {
      type: Array as PropType<HeaderProps['rightNavList']>,
    },
  },
  emits: {
    nav: (_: HeaderNavItem['props']) => true,
  },
  setup(_, { emit }) {
    function handleNav(navItemOptions: HeaderNavItem['props']) {
      emit('nav', navItemOptions)
    }

    return {
      handleNav,
    }
  },
})
</script>

<template>
  <el-menu
    mode="horizontal"
    :ellipsis="false"
    class="flex justify-between"
  >
    <component
      :is="comp.component"
      v-for="comp in leftNavList"
      :key="comp.key"
      v-bind="comp.props"
      @nav="handleNav"
    />
    <component
      :is="comp.component"
      v-for="comp in rightNavList"
      :key="comp.key"
      v-bind="comp.props"
      @nav="handleNav"
    />
  </el-menu>
</template>

<style scoped>
.el-sub-menu {
  --el-menu-base-level-padding: 10px;
}
</style>
