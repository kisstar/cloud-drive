<script setup lang="ts">
interface CdDropdownProps {
  icon?: string
  text?: string
  command?: string
  list: {
    key: string
    text: string
    command: string
  }[]
}

const props = defineProps<CdDropdownProps>()
const emit = defineEmits<{
  (e: 'nav', value: { command?: string, value: string }): void
}>()

function handleSelect(key: string) {
  emit('nav', { command: props.command, value: key })
}
</script>

<template>
  <el-dropdown>
    <el-icon
      v-if="icon"
      :class="icon"
      class="cursor-pointer"
      size="18"
    />
    <span v-if="text">{{ text }}</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in list"
          :key="item.key"
          :command="item.command"
          @click="handleSelect(item.key)"
        >
          {{ item.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
