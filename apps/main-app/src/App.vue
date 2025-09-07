<script setup lang="ts">
import { useLocalStore } from '@/store/setting/local'

const localStore = useLocalStore()
</script>

<template>
  <el-config-provider :locale="localStore.elLocals">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
