<script setup lang="ts">
import { TabsContent } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <TabsContent
    v-bind="$attrs"
    :class="cn('mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', $props.class)"
  >
    <slot />
  </TabsContent>
</template>
