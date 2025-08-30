<script setup lang="ts">
defineProps<{
  avatar?: string
}>()
</script>

<template>
  <el-sub-menu index="">
    <template #title>
      <el-avatar
        :src="avatar || 'avatar.png'"
      />
    </template>
    <el-menu-item>
      <el-link class="w-full" href="https://github.com/kisstar/cloud-drive/issues" target="_blank" underline="never">
        帮助与反馈
      </el-link>
    </el-menu-item>
  </el-sub-menu>
</template>
