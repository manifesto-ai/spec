<script setup lang="ts">
import { CollapsibleRoot } from 'radix-vue'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{
  class?: string
}>(), {
  class: ''
})
</script>

<template>
  <CollapsibleRoot v-bind="$attrs" :class="cn('w-full', $props.class)">
    <slot />
  </CollapsibleRoot>
</template>
