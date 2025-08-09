<script lang="ts" setup>
import type { HeaderProps } from '@/layout/header.vue'
import type { LayoutMode } from '@/types/setting'
import AppHeader from '@/layout/header.vue'

interface LayoutProps {
  mode: LayoutMode
  header?: HeaderProps
}

defineProps<LayoutProps>()
</script>

<template>
  <!-- Vertical t-layout, top navigation -->
  <t-layout v-if="mode === 'TopNav'">
    <t-header>t-header</t-header>
    <t-content>t-content</t-content>
    <t-footer>t-footer</t-footer>
  </t-layout>

  <!-- Left and right t-layout, side navigation -->
  <t-layout v-if="mode === 'SideNav'">
    <t-aside>Aside</t-aside>
    <t-layout>
      <!-- <t-header>t-header</t-header> -->
      <t-content>t-content</t-content>
      <t-footer>t-footer</t-footer>
    </t-layout>
  </t-layout>

  <!-- Combined navigation t-layout -->
  <t-layout v-else>
    <t-header>
      <AppHeader :menu-items="header?.menuItems" :left-operations="header?.leftOperations" :right-operations="header?.rightOperations" />
    </t-header>
    <t-layout>
      <t-aside>Aside</t-aside>
      <t-content>t-content</t-content>
    </t-layout>
    <t-footer>t-footer</t-footer>
  </t-layout>
</template>
