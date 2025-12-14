import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Manifesto AI',
  titleTemplate: 'Manifesto Specification',
  description: 'Semantic State Protocol for AI Agents',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      rel: 'stylesheet'
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Manifesto Specification' }],
    ['meta', { property: 'og:description', content: 'Semantic State Protocol for AI Agents' }],
    ['meta', { property: 'og:image', content: 'https://spec.manifesto-ai.dev/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://spec.manifesto-ai.dev'
  },

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./theme', import.meta.url))
      }
    }
  },

  themeConfig: {
    siteTitle: 'Manifesto AI',
    logo: '/logo.png',

    nav: [
      { text: 'Spec', link: '/draft/' },
      {
        text: 'Versions',
        items: [
          { text: 'Working Draft', link: '/draft/' },
          { text: 'v0.1 (upcoming)', link: '/v0.1/' },
        ]
      },
      { text: 'RFC', link: '/rfc/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'GitHub', link: 'https://github.com/manifesto-ai/manifesto-spec' }
    ],

    sidebar: {
      '/draft/': [
        {
          text: 'Specification',
          items: [
            { text: 'Introduction', link: '/draft/' },
            { text: '1. Overview', link: '/draft/1-overview' },
            { text: '2. Snapshot', link: '/draft/2-snapshot' },
            { text: '3. Semantic Path', link: '/draft/3-semantic-path' },
            { text: '4. Effect', link: '/draft/4-effect' },
            { text: '5. Expression', link: '/draft/5-expression' },
            { text: '6. Validation', link: '/draft/6-validation' },
            { text: '7. Execution', link: '/draft/7-execution' },
          ]
        },
        {
          text: 'Appendices',
          collapsed: true,
          items: [
            { text: 'A. Notation Conventions', link: '/draft/appendix-a-notation' },
            { text: 'B. Grammar Summary', link: '/draft/appendix-b-grammar' },
            { text: 'C. Conformance Checklist', link: '/draft/appendix-c-conformance' },
          ]
        }
      ],
      '/rfc/': [
        {
          text: 'RFC Process',
          items: [
            { text: 'Overview', link: '/rfc/' },
            { text: 'Template', link: '/rfc/template' },
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'For Implementers', link: '/guide/for-implementers' },
            { text: 'For AI Agents', link: '/guide/for-ai-agents' },
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    editLink: {
      pattern: 'https://github.com/manifesto-ai/manifesto-spec/edit/main/docs/:path',
      text: 'Edit this page'
    },

    socialLinks: [],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024-present Manifesto Contributors'
    }
  }
})
