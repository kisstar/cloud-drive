<script setup lang="ts">
import AppLayout from '@/layout/index.vue'
import { useLocale } from '@/locales/useLocale'
import { useSettingStore } from '@/store/setting'

const { getComponentsLocale } = useLocale()
const settingStore = useSettingStore()
</script>

<template>
  <t-config-provider :global-config="getComponentsLocale">
    <AppLayout :mode="settingStore.layoutMode" />
  </t-config-provider>
</template>

<style scoped></style>
