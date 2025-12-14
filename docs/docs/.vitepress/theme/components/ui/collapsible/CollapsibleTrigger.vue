<script setup lang="ts">
import { CollapsibleTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <CollapsibleTrigger
    v-bind="$attrs"
    :class="cn('flex items-center gap-2 text-sm font-medium transition hover:text-foreground', $props.class)"
  >
    <slot />
  </CollapsibleTrigger>
</template>
