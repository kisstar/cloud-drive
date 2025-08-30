<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
}>()
</script>

<template>
  <div>
    <el-link underline="never">
      <el-icon v-if="icon" :class="icon" size="18" />
      <span v-if="text">{{ text }}</span>
    </el-link>
  </div>
</template>
