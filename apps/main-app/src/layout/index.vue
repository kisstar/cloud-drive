<script lang="ts" setup>
import type { LayoutMode } from '@/types/setting'

interface LayoutProps {
  mode: LayoutMode
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
      <t-header />
    </t-header>
    <t-layout>
      <t-aside>Aside</t-aside>
      <t-content>t-content</t-content>
    </t-layout>
    <t-footer>t-footer</t-footer>
  </t-layout>
</template>
