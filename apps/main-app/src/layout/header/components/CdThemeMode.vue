<script lang="ts" setup>
import { h } from 'vue'

interface Props {
  command?: string
  value?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'nav', value: Props): void
}>()

function handleChange(value: string | number | boolean) {
  emit('nav', { ...props, value: !!value })
}
</script>

<template>
  <div class="flex justify-center items-center">
    <el-switch
      :model-value="props.value"
      :active-action-icon="h('el-icon', { class: 'i-ep-sunny', size: '18' })"
      :inactive-action-icon="h('el-icon', { class: 'i-ep-moon', size: '18' })"
      @change="handleChange"
    />
  </div>
</template>
