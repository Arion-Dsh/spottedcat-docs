import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.DOCS_BASE ?? (repository ? `/${repository}/` : '/')

export default defineConfig({
  lang: 'en-US',
  title: 'Spottedcat',
  titleTemplate: ':title | Spottedcat',
  description: 'A lightweight cross-platform Rust 2D/3D game engine for desktop, WebAssembly, iOS, Android, and AI-assisted creation.',
  base,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://rustyspottedcat.dev'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#d56b3f' }],
    ['meta', { name: 'keywords', content: 'Spottedcat, Rust game engine, Rust 2D engine, Rust 3D engine, WebAssembly game engine, WASM game engine, cross-platform game engine, AI-assisted game development' }],
    ['link', { rel: 'canonical', href: 'https://rustyspottedcat.dev/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://rustyspottedcat.dev/' }],
    ['meta', { property: 'og:title', content: 'Spottedcat Documentation' }],
    ['meta', { property: 'og:description', content: 'A lightweight cross-platform Rust 2D/3D game engine for desktop, WebAssembly, iOS, Android, and AI-assisted creation.' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Spottedcat Documentation' }],
    ['meta', { name: 'twitter:description', content: 'A lightweight cross-platform Rust 2D/3D game engine for desktop, WebAssembly, iOS, Android, and AI-assisted creation.' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Spottedcat',
    nav: [
      { text: 'Guide', link: '/guide/flappy-cat' },
      { text: 'Examples', link: '/examples/' },
      { text: 'AI Guide', link: '/ai/' },
      { text: 'Platforms', link: '/platforms/' },
      { text: 'Release Notes', link: '/release-notes/1.0' },
      { text: 'API Reference', link: 'https://docs.rs/spottedcat' }
    ],
    sidebar: {
      '/guide/stability': [
        {
          text: 'Release Notes',
          items: [
            { text: 'Spottedcat 1.0', link: '/release-notes/1.0' },
            { text: 'Stability Policy', link: '/guide/stability' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/guide/getting-started' },
            { text: 'Build Flappy Cat', link: '/guide/flappy-cat' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: '2D Rendering', link: '/graphics/2d' },
            { text: '3D Rendering', link: '/graphics/3d' },
            { text: 'Custom Shaders', link: '/graphics/shaders' },
            { text: 'Built-in Splash', link: '/guide/splash' },
            { text: 'Input and Audio', link: '/guide/input-audio' }
          ]
        },
        {
          text: 'Recipes',
          items: [
            { text: 'Draw an Image', link: '/recipes/draw-image' },
            { text: 'Move with Keyboard', link: '/recipes/move-with-keyboard' },
            { text: 'Render Text', link: '/recipes/render-text' },
            { text: 'Use OneShotSplash', link: '/recipes/use-splash' }
          ]
        }
      ],
      '/recipes/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/guide/getting-started' },
            { text: 'Build Flappy Cat', link: '/guide/flappy-cat' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: '2D Rendering', link: '/graphics/2d' },
            { text: '3D Rendering', link: '/graphics/3d' },
            { text: 'Custom Shaders', link: '/graphics/shaders' },
            { text: 'Built-in Splash', link: '/guide/splash' },
            { text: 'Input and Audio', link: '/guide/input-audio' }
          ]
        },
        {
          text: 'Recipes',
          items: [
            { text: 'Draw an Image', link: '/recipes/draw-image' },
            { text: 'Move with Keyboard', link: '/recipes/move-with-keyboard' },
            { text: 'Render Text', link: '/recipes/render-text' },
            { text: 'Use OneShotSplash', link: '/recipes/use-splash' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Examples Gallery', link: '/examples/' }
          ]
        },
        {
          text: 'Playable WASM Examples',
          items: [
            { text: 'Flappy Cat', link: '/play/flappy-cat' },
            { text: 'Input Demo', link: '/play/input' },
            { text: 'Image Demo', link: '/play/image' },
            { text: 'Shader Demo', link: '/play/shader' }
          ]
        }
      ],
      '/play/': [
        {
          text: 'Examples',
          items: [
            { text: 'Examples Gallery', link: '/examples/' }
          ]
        },
        {
          text: 'Playable WASM Examples',
          items: [
            { text: 'Flappy Cat', link: '/play/flappy-cat' },
            { text: 'Input Demo', link: '/play/input' },
            { text: 'Image Demo', link: '/play/image' },
            { text: 'Shader Demo', link: '/play/shader' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'AI Guide',
          items: [
            { text: 'AI-assisted Creation', link: '/ai/' }
          ]
        },
        {
          text: 'Useful References',
          items: [
            { text: 'Examples Gallery', link: '/examples/' },
            { text: 'Build Flappy Cat', link: '/guide/flappy-cat' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: 'API Reference', link: 'https://docs.rs/spottedcat' }
          ]
        }
      ],
      '/graphics/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/guide/getting-started' },
            { text: 'Build Flappy Cat', link: '/guide/flappy-cat' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: '2D Rendering', link: '/graphics/2d' },
            { text: '3D Rendering', link: '/graphics/3d' },
            { text: 'Custom Shaders', link: '/graphics/shaders' },
            { text: 'Built-in Splash', link: '/guide/splash' },
            { text: 'Input and Audio', link: '/guide/input-audio' }
          ]
        },
        {
          text: 'Recipes',
          items: [
            { text: 'Draw an Image', link: '/recipes/draw-image' },
            { text: 'Move with Keyboard', link: '/recipes/move-with-keyboard' },
            { text: 'Render Text', link: '/recipes/render-text' },
            { text: 'Use OneShotSplash', link: '/recipes/use-splash' }
          ]
        }
      ],
      '/platforms/': [
        {
          text: 'Cross-platform',
          items: [
            { text: 'Platform Overview', link: '/platforms/' },
            { text: 'Web / WASM', link: '/platforms/web' },
            { text: 'iOS and Android', link: '/platforms/mobile' }
          ]
        }
      ],
      '/release-notes/': [
        {
          text: 'Release Notes',
          items: [
            { text: 'Spottedcat 1.0', link: '/release-notes/1.0' },
            { text: 'Stability Policy', link: '/guide/stability' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Arion-Dsh/spottedcat' }
    ],
    editLink: {
      pattern: 'https://github.com/Arion-Dsh/spottedcat-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    lastUpdated: { text: 'Last updated' },
    footer: {
      message: 'Released under the MIT OR Apache-2.0 License.',
      copyright: 'Copyright © Spottedcat contributors'
    }
  },
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true
})
