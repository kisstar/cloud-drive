<script setup lang="ts">
import type { FileInfo } from '@cloud-drive/fff'

interface FileListProps {
  data: FileInfo[]
}

defineProps<FileListProps>()

const columns = [
  {
    dataKey: 'name',
    title: '文件名',
    width: 420,
    flexGrow: '1',
  },
  {
    dataKey: 'size',
    title: '大小',
    width: 230,
    flexGrow: '1',
  },
  {
    dataKey: 'category',
    title: '类型',
    width: 230,
    flexGrow: '1',
  },
  {
    dataKey: 'updated_at',
    title: '修改时间',
    width: 200,
    flexGrow: '1',
  },
]
</script>

<template>
  <el-auto-resizer>
    <template #default="{ height, width }">
      <el-table-v2
        :columns="columns"
        :data="data"
        :width="width"
        :height="height"
      />
    </template>
  </el-auto-resizer>
</template>
