<script lang="ts" setup>
import type { NavItem } from '@/types/nav'

type NavItemProps = NavItem

const props = withDefaults(defineProps<NavItemProps>(), {
  shape: 'square',
})
const emit = defineEmits(['click'])

function handleClick() {
  emit('click', props)
}
</script>

<template>
  <t-tooltip placement="bottom">
    <t-button class="pl-0!" :shape="shape" variant="text" @click="handleClick">
      <t-link v-if="href" :href hover="color" :target="target">
        <t-icon :name="icon" />
        {{ content }}
      </t-link>
      <t-icon v-else-if="icon" :name="icon" />
      {{ content }}
    </t-button>
  </t-tooltip>
</template>
