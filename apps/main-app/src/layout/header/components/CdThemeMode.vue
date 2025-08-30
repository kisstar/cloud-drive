<script lang="ts" setup>
import { h } from 'vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <el-switch
      :active-action-icon="h('el-icon', { class: 'i-ep-moon', size: '18' })"
      :inactive-action-icon="h('el-icon', { class: 'i-ep-sunny', size: '18' })"
    />
  </div>
</template>
