<script setup lang="ts">
import { requestFileList } from '@/api/file'
import FileList from '@/components/file-list/index.vue'

const result = requestFileList()
const { data } = result
</script>

<template>
  <FileList :data="data || []" />
</template>
