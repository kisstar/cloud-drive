<script setup lang="ts">
import { Button } from 'tdesign-vue-next'
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<template>
  <div class="p-2 bg-white dark:bg-black">
    <Button theme="primary">
      {{ msg }}
    </Button>
  </div>
</template>

<style scoped></style>
