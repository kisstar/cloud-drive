<script setup lang="ts">
import { Button, ConfigProvider, Input } from 'tdesign-vue-next'
import { ref } from 'vue'
import { useLocale } from '@/locales/useLocale'

const msg = ref('hello world')
const { getComponentsLocale } = useLocale()
</script>

<template>
  <ConfigProvider :global-config="getComponentsLocale">
    <!-- TODO: remove test content -->
    <div class="p-2 bg-white dark:bg-black">
      <Input />
      <Button theme="primary">
        {{ msg }}
      </Button>
    </div>
  </ConfigProvider>
</template>

<style scoped></style>
