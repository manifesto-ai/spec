<script setup lang="ts">
import { TabsTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <TabsTrigger
    v-bind="$attrs"
    :class="cn(
      'inline-flex min-w-[100px] items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
      $props.class
    )"
  >
    <slot />
  </TabsTrigger>
</template>
