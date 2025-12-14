<script setup lang="ts">
import { TabsList } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <TabsList
    v-bind="$attrs"
    :class="cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      $props.class
    )"
  >
    <slot />
  </TabsList>
</template>
