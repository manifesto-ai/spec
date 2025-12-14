<!-- docs/.vitepress/theme/components/spec/Grammar.vue -->
<script setup lang="ts">
interface GrammarRule {
  name: string
  definition: string | string[]
}

interface Props {
  rules: GrammarRule[]
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: ''
})

function toArray(def: string | string[]): string[] {
  return Array.isArray(def) ? def : [def]
}
</script>

<template>
  <div class="my-6 rounded-lg bg-slate-950 overflow-hidden">
    <div v-if="title" class="px-4 py-2 border-b border-slate-800 flex items-center gap-2">
      <svg class="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span class="text-sm font-medium text-slate-300">{{ title }}</span>
    </div>
    <div class="p-4 font-mono text-sm">
      <div v-for="rule in rules" :key="rule.name" class="mb-3 last:mb-0">
        <div class="flex flex-wrap items-start">
          <span class="text-rose-400 font-semibold min-w-[140px]">{{ rule.name }}</span>
          <span class="text-slate-500 mx-2">:</span>
          <div class="flex flex-col">
            <div
              v-for="(alt, idx) in toArray(rule.definition)"
              :key="idx"
              class="flex items-center"
            >
              <span v-if="idx > 0" class="text-slate-500 mr-2">|</span>
              <span class="text-cyan-400">{{ alt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
