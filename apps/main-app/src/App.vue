<script setup lang="ts">
import { ConfigProvider } from 'tdesign-vue-next'
import AppLayout from '@/layout/index.vue'
import { useLocale } from '@/locales/useLocale'
import { useSettingStore } from '@/store/setting'

const { getComponentsLocale } = useLocale()
const settingStore = useSettingStore()
</script>

<template>
  <ConfigProvider :global-config="getComponentsLocale">
    <AppLayout :mode="settingStore.layoutMode" />
  </ConfigProvider>
</template>

<style scoped></style>
