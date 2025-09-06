<script setup lang="ts">
import type { AsideSubNavMenuItem } from '@/types/nav'

defineProps<{
  command?: string
  list: AsideSubNavMenuItem[]
}>()
</script>

<template>
  <el-menu>
    <template v-for="menuItem in list">
      <!-- menu item -->
      <el-menu-item v-if="!menuItem.children" :key="menuItem.key" :index="menuItem.text">
        <template #title>
          {{ menuItem.text }}
        </template>
      </el-menu-item>

      <!-- sub menu -->
      <el-sub-menu v-if="menuItem.children" :key="menuItem.key" :index="menuItem.key">
        <template #title>
          <span>{{ menuItem.text }}</span>
        </template>
        <el-menu-item v-for="subMenuItem in (menuItem.children || [])" :key="subMenuItem.key" :index="subMenuItem.key">
          <template #title>
            {{ subMenuItem.text }}
          </template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
