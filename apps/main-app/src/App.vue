<script setup lang="ts">
import { Button, ConfigProvider, Input } from 'tdesign-vue-next'
import { ref } from 'vue'
import { useLocale } from '@/locales/useLocale'
import { useSettingStore } from '@/store/setting'

const msg = ref('Dark theme')
const { getComponentsLocale } = useLocale()
const settingStore = useSettingStore()
</script>

<template>
  <ConfigProvider :global-config="getComponentsLocale">
    <!-- TODO: remove test content -->
    <div class="p-2 bg-white dark:bg-black">
      <Input />
      <Button @click="settingStore.changeThemeMode('dark')">
        {{ msg }}
      </Button>
      <Button theme="default" @click="settingStore.changeThemeMode('light')">
        Light theme
      </Button>
    </div>
  </ConfigProvider>
</template>

<style scoped></style>
