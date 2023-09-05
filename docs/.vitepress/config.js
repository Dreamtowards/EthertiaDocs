import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ethertia Docs",
  description: "Ethertia Documentations",
  titleTemplate: ':title - Ethertia Docs', 
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/res/logo-bl.png' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }],
    ['script', {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'TAG_ID');`]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //siteTitle: false,
    logo: { 
        light: "/res/logo-bl.png",
        dark: "/res/logo-wt.png",
        alt: ""
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Guide', link: '/guide' },
      { text: 'Discussions', link: 'https://elytra.dev' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          },
          { text: 'Examples', link: '/markdown-examples' },
          { text: 'Examples', link: '/markdown-examples' },
        ]
      },
      
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: 'Examples',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-' },
              { text: 'Runtime API Examples', link: '/api-' },
              {
                text: 'Examples',
                link: '/markdown-examples',
                items: [
                  { text: 'Markdown Examples', link: '/markdown-' },
                  { text: 'Runtime API Examples', link: '/api-' }
                ]
              }
            ]
          }
        ]
      }
    ],

    aside: true,
    outline: {
      level: 2,
      label: "On this page"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dreamtowards/Ethertia' },
      { icon: 'discord', link: 'https://github.com/Dreamtowards/Ethertia', ariaLabel: 'cool link' },
      { icon: 'youtube', link: 'https://github.com/Dreamtowards/Ethertia' },
      { icon: 'twitter', link: 'https://github.com/Dreamtowards/Ethertia' },
    ],
    
    // footer will only be displayed when the page doesn't contain a sidebar. This is due to design concerns.
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }

  },
  markdown: {
    lineNumbers: false
  }
})
