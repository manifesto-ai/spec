<!-- docs/.vitepress/theme/components/spec/ConformanceLevel.vue -->
<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Requirement {
  text: string
  done?: boolean
}

interface Props {
  level: number
  name: string
  description: string
  requirements: Requirement[]
}

defineProps<Props>()

const levelColors = [
  'border-l-slate-500',
  'border-l-blue-500',
  'border-l-violet-500',
  'border-l-amber-500',
]

const levelBadgeColors = [
  'bg-slate-500/20 text-slate-700 dark:text-slate-300',
  'bg-blue-500/20 text-blue-700 dark:text-blue-300',
  'bg-violet-500/20 text-violet-700 dark:text-violet-300',
  'bg-amber-500/20 text-amber-700 dark:text-amber-300',
]
</script>

<template>
  <div :class="cn(
    'my-4 rounded-lg border border-border bg-card overflow-hidden',
    'border-l-4',
    levelColors[level]
  )">
    <div class="p-4">
      <div class="flex items-center gap-2 mb-2">
        <span :class="cn(
          'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
          levelBadgeColors[level]
        )">
          Level {{ level }}
        </span>
        <h4 class="font-semibold">{{ name }}</h4>
      </div>
      <p class="text-sm text-muted-foreground mb-4">{{ description }}</p>
      <ul class="space-y-2">
        <li
          v-for="(req, idx) in requirements"
          :key="idx"
          class="flex items-start gap-2 text-sm"
        >
          <!-- Check Icon -->
          <svg
            v-if="req.done"
            class="h-4 w-4 text-green-500 mt-0.5 shrink-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <!-- Circle Icon -->
          <svg
            v-else
            class="h-4 w-4 text-muted-foreground mt-0.5 shrink-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <circle cx="12" cy="12" r="9" stroke-width="2" />
          </svg>
          <span :class="{ 'text-muted-foreground': !req.done }">
            {{ req.text }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
