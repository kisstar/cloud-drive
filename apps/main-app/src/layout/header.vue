<script setup lang="ts">
import type { HeaderConfig } from '@/types/nav'

export type HeaderProps = HeaderConfig

withDefaults(defineProps<HeaderProps>(), {
  menuItems: () => [],
  leftOperations: () => [],
  rightOperations: () => [],
})
</script>

<template>
  <t-head-menu>
    <template #logo>
      <img width="136" class="logo" src="/brand.png" alt="logo">
    </template>

    <t-menu-item v-for="{ key, content, ...rest } in menuItems" :key="key" v-bind="rest">
      {{ content }}
    </t-menu-item>

    <component
      :is="operation.component"
      v-for="operation in leftOperations"
      :key="operation.key"
      v-bind="operation.componentProps"
    />

    <template #operations>
      <component
        :is="operation.component"
        v-for="operation in rightOperations"
        :key="operation.key"
        v-bind="operation.componentProps"
      />
    </template>
  </t-head-menu>
</template>
