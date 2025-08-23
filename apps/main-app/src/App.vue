<script setup lang="ts">
import AppLayout from '@/layout/index.vue'
import { useSettingStore } from '@/store/setting'
import { useLocalStore } from '@/store/setting/local'

const settingStore = useSettingStore()
const localStore = useLocalStore()
</script>

<template>
  <el-config-provider :locale="localStore.elLocals">
    <AppLayout :mode="settingStore.layoutMode" />
  </el-config-provider>
</template>

<style scoped></style>
