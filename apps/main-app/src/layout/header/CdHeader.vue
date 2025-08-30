<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import CDBrand from '@/layout/header/components/CDBrand.vue'
import CdButton from '@/layout/header/components/CdButton.vue'
import CdDropdown from '@/layout/header/components/CdDropdown.vue'
import CdThemeMode from '@/layout/header/components/CdThemeMode.vue'
import CdUserInfo from '@/layout/header/components/CdUserInfo.vue'

interface HeaderProps {
  leftNavList: {
    command: string
    component: string
    props?: Record<string, unknown>
  }[]
  rightNavList: {
    command: string
    component: string
    props?: Record<string, unknown>
  }[]
}

export default defineComponent({
  components: {
    CDBrand,
    CdButton,
    CdDropdown,
    CdThemeMode,
    CdUserInfo,
  },
  props: {
    leftNavList: {
      type: Array as PropType<HeaderProps['leftNavList']>,
    },
    rightNavList: {
      type: Array as PropType<HeaderProps['rightNavList']>,
    },
  },
})
</script>

<template>
  <el-menu
    mode="horizontal"
    :ellipsis="false"
    class="flex justify-between"
  >
    <component :is="comp.component" v-for="comp in leftNavList" :key="comp.command" v-bind="comp.props" />
    <component :is="comp.component" v-for="comp in rightNavList" :key="comp.command" v-bind="comp.props" />
  </el-menu>
</template>

<style scoped>
.el-sub-menu {
  --el-menu-base-level-padding: 10px;
}
</style>
