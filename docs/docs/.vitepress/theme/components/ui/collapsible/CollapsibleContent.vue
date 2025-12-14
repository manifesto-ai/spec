<script setup lang="ts">
import { CollapsibleContent } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <CollapsibleContent
    v-bind="$attrs"
    :class="cn('space-y-2 pt-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', $props.class)"
  >
    <slot />
  </CollapsibleContent>
</template>
