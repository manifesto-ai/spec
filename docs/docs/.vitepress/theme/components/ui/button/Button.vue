<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
type Size = 'default' | 'sm' | 'lg' | 'icon'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  asChild?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'default',
  size: 'default',
  asChild: false,
  type: 'button'
})

const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80'
    case 'destructive':
      return 'bg-destructive text-destructive-foreground shadow hover:bg-destructive/90'
    case 'outline':
      return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
    case 'ghost':
      return 'hover:bg-accent hover:text-accent-foreground'
    case 'link':
      return 'text-primary underline-offset-4 hover:underline'
    default:
      return 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-3'
    case 'lg':
      return 'h-11 px-5'
    case 'icon':
      return 'h-10 w-10'
    default:
      return 'h-10 px-4 py-2'
  }
})
</script>

<template>
  <component
    :is="props.asChild ? 'span' : 'button'"
    :type="props.asChild ? undefined : props.type"
    :class="cn(base, variantClass, sizeClass)"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
