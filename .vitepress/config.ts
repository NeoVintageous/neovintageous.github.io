import { defineConfig } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote'

export default defineConfig({
  title: 'NeoVintageous Docs',
  description: 'Documentation for NeoVintageous, a Vim emulator for Sublime Text',
  lang: 'en',
  srcDir: 'src',
  srcExclude: ['reusables/**'],
  cleanUrls: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },

  sitemap: {
    hostname: 'https://neovintageous.github.io',
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
    }
  },

  themeConfig: {

    nav: [
      // ...
    ],

    sidebar: [
      {
        text: 'Prologue',
        collapsed: false,
        items: [
          { text: 'Contributing', link: 'contributing.md' },
          { text: 'Roadmap', link: '/roadmap' },
          { text: 'Changelog', link: 'https://github.com/NeoVintageous/NeoVintageous/blob/master/CHANGELOG.md' },
          { text: 'Known issues', link: '/known-issues' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'About NeoVintageous', link: '/guide/about-neovintageous' },
          { text: 'Getting started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Plugins',
        link: '/plugins',
        collapsed: false,
        items: [
          { text: 'Abolish', link: '/plugins/abolish' },
          { text: 'Commentary', link: '/plugins/commentary' },
          { text: 'Highlighted Yank', link: '/plugins/highlighted-yank' },
          { text: 'Indent Object', link: '/plugins/indent-object' },
          { text: 'Input Method', link: '/plugins/input-method' },
          { text: 'Markology', link: '/plugins/markology' },
          { text: 'Multiple Cursors', link: '/plugins/multiple-cursors' },
          { text: 'Sneak', link: '/plugins/sneak' },
          { text: 'Surround', link: '/plugins/surround' },
          { text: 'Targets', link: '/plugins/targets' },
          { text: 'Unimpaired', link: '/plugins/unimpaired' },
        ],
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'GUI', link: '/reference/gui' },
          { text: 'Settings', link: '/reference/settings' },
          { text: 'Options', link: '/reference/options' },
          { text: 'neovintageousrc', link: '/reference/neovintageousrc' },
          { text: 'Modes', link: '/reference/modes' },
          { text: 'Key mapping', link: '/reference/key-mapping' },
          { text: 'Search highlighting', link: '/reference/search-highlighting' },
        ],
      },
    ],

    lastUpdated: false,

    editLink: {
      pattern: 'https://github.com/neovintageous/neovintageous.github.io/edit/main/src/:path',
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/neovintageous' },
      { icon: 'github', link: 'https://github.com/NeoVintageous/NeoVintageous' },
    ],

    search: {
      provider: 'local',
    },
  },
})
