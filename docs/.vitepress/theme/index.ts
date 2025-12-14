import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

// SPEC Components
import Example from './components/spec/Example.vue'
import Note from './components/spec/Note.vue'
import Algorithm from './components/spec/Algorithm.vue'
import Grammar from './components/spec/Grammar.vue'
import RFC2119Badge from './components/spec/RFC2119Badge.vue'
import ConformanceLevel from './components/spec/ConformanceLevel.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title': () => h('span', { class: 'font-semibold' }, 'Manifesto')
    })
  },
  enhanceApp({ app }) {
    // Global SPEC components
    app.component('Example', Example)
    app.component('Note', Note)
    app.component('Algorithm', Algorithm)
    app.component('Grammar', Grammar)
    app.component('RFC2119Badge', RFC2119Badge)
    app.component('ConformanceLevel', ConformanceLevel)
  }
} satisfies Theme
