<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'secondary' | 'destructive' | 'outline'

const props = withDefaults(defineProps<{
  variant?: Variant
}>(), {
  variant: 'default'
})

const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'border-transparent bg-secondary text-secondary-foreground shadow'
    case 'destructive':
      return 'border-transparent bg-destructive text-destructive-foreground shadow'
    case 'outline':
      return 'text-foreground'
    default:
      return 'border-transparent bg-primary text-primary-foreground shadow'
  }
})
</script>

<template>
  <span :class="cn(base, variantClass)">
    <slot />
  </span>
</template>
