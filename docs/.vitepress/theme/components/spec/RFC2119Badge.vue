<!-- docs/.vitepress/theme/components/spec/RFC2119Badge.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type Keyword = 'MUST' | 'MUST NOT' | 'REQUIRED' | 'SHALL' | 'SHALL NOT'
             | 'SHOULD' | 'SHOULD NOT' | 'RECOMMENDED' | 'MAY' | 'OPTIONAL'

interface Props {
  keyword: Keyword
}

const props = defineProps<Props>()

const variantClass = computed(() => {
  const required = ['MUST', 'MUST NOT', 'REQUIRED', 'SHALL', 'SHALL NOT']
  const recommended = ['SHOULD', 'SHOULD NOT', 'RECOMMENDED']
  const optional = ['MAY', 'OPTIONAL']

  if (required.includes(props.keyword)) {
    return 'bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/50'
  }
  if (recommended.includes(props.keyword)) {
    return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/50'
  }
  return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50'
})
</script>

<template>
  <span :class="cn(
    'inline-flex items-center px-1.5 py-0.5 rounded border',
    'font-mono text-xs font-semibold uppercase tracking-wide',
    variantClass
  )">
    {{ keyword }}
  </span>
</template>
