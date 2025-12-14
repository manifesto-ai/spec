<!-- docs/.vitepress/theme/components/spec/Note.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  type?: 'info' | 'warning' | 'tip'
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  title: ''
})

const defaultTitles = {
  info: 'Note',
  warning: 'Warning',
  tip: 'Tip'
}

const displayTitle = computed(() => props.title || defaultTitles[props.type])

const styles = {
  info: {
    container: 'border-blue-500/50 bg-blue-500/10',
    icon: 'text-blue-500',
    title: 'text-blue-700 dark:text-blue-400'
  },
  warning: {
    container: 'border-yellow-500/50 bg-yellow-500/10',
    icon: 'text-yellow-500',
    title: 'text-yellow-700 dark:text-yellow-400'
  },
  tip: {
    container: 'border-green-500/50 bg-green-500/10',
    icon: 'text-green-500',
    title: 'text-green-700 dark:text-green-400'
  }
}
</script>

<template>
  <div :class="cn(
    'my-6 rounded-lg border p-4',
    styles[type].container
  )">
    <div class="flex items-start gap-3">
      <div :class="cn('mt-0.5', styles[type].icon)">
        <!-- Info Icon -->
        <svg v-if="type === 'info'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <!-- Warning Icon -->
        <svg v-else-if="type === 'warning'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <!-- Tip Icon -->
        <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <div class="flex-1">
        <h5 :class="cn('font-semibold mb-1', styles[type].title)">
          {{ displayTitle }}
        </h5>
        <div class="text-sm text-foreground/80">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
