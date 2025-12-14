<!-- docs/.vitepress/theme/components/spec/Example.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  number: number
  title?: string
  counter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  counter: false
})

const borderClass = computed(() =>
  props.counter
    ? 'border-l-red-500'
    : 'border-l-blue-500'
)

const labelClass = computed(() =>
  props.counter
    ? 'bg-red-500/20 text-red-700 dark:text-red-400'
    : 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
)
</script>

<template>
  <div :class="cn(
    'my-6 rounded-lg border border-border bg-card overflow-hidden',
    'border-l-4',
    borderClass
  )">
    <div class="px-4 py-2 bg-muted/50 border-b border-border flex items-center gap-2">
      <span :class="cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
        labelClass
      )">
        {{ counter ? 'Counter Example' : 'Example' }} № {{ number }}
      </span>
      <span v-if="title" class="text-sm text-muted-foreground">
        {{ title }}
      </span>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
