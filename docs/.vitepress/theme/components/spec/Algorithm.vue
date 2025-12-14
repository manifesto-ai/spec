<!-- docs/.vitepress/theme/components/spec/Algorithm.vue -->
<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  name: string
  params?: string
  returns?: string
}

withDefaults(defineProps<Props>(), {
  params: '',
  returns: ''
})
</script>

<template>
  <div class="my-6 rounded-lg border border-violet-500/30 bg-violet-500/5 overflow-hidden">
    <div class="px-4 py-3 border-b border-violet-500/30 bg-violet-500/10">
      <div class="flex items-center gap-2 font-mono text-sm">
        <svg class="h-4 w-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span class="font-bold text-violet-600 dark:text-violet-400">{{ name }}</span>
        <span class="text-muted-foreground">({{ params }})</span>
        <span v-if="returns" class="text-muted-foreground">→ {{ returns }}</span>
      </div>
    </div>
    <div class="p-4">
      <ol class="list-decimal list-inside space-y-2 font-mono text-sm marker:text-violet-500">
        <slot />
      </ol>
    </div>
  </div>
</template>
