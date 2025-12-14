<script setup lang="ts">
import { TabsRoot } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <TabsRoot v-bind="$attrs" :class="cn('w-full', $props.class)">
    <slot />
  </TabsRoot>
</template>
