<script lang="ts" setup>
defineProps<{
  command?: string
  list: {
    key: string
    icon: string
    text: string
  }[]
}>()
</script>

<template>
  <el-menu collapse>
    <el-menu-item v-for="item in list" :key="item.key" :index="item.key">
      <div class="flex flex-col justify-center items-center text-xs">
        <span :class="item.icon" />
        <span class="mt-1">{{ item.text }}</span>
      </div>
    </el-menu-item>
  </el-menu>
</template>
