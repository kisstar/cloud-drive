<script setup lang="ts">
interface CdDropdownProps {
  icon?: string
  text?: string
  list: {
    text: string
    command: string
  }[]
}

defineProps<CdDropdownProps>()
</script>

<template>
  <el-dropdown>
    <el-icon v-if="icon" :class="icon" class="cursor-pointer" size="18" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in list" :key="item.command" :command="item.command">
          {{ item.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
