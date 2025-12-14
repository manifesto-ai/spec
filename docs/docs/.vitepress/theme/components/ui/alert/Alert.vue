<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'destructive'

const props = withDefaults(defineProps<{
  variant?: Variant
}>(), {
  variant: 'default'
})

const base = 'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>div]:pl-7'

const variantClass = computed(() => {
  return props.variant === 'destructive'
    ? 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
    : 'text-foreground'
})
</script>

<template>
  <div :class="cn(base, variantClass)">
    <slot />
  </div>
</template>
