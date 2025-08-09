<script setup lang="ts">
import type { NavList } from '@/types/nav'
import NavItem from './NavItem.vue'

type NavItemProps = NavList

withDefaults(defineProps<NavItemProps>(), {
  items: () => [],
})
</script>

<template>
  <t-dropdown :min-column-width="120" trigger="click">
    <template #dropdown>
      <t-dropdown-item v-for="item in items" :key="item.key">
        <NavItem v-bind="item" />
      </t-dropdown-item>
    </template>
    <t-button variant="text">
      <template v-if="icon" #icon>
        <t-icon :name="icon" />
      </template>
      {{ content }}
      <template #suffix>
        <t-icon name="chevron-down" />
      </template>
    </t-button>
  </t-dropdown>
</template>
