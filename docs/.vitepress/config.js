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
  
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: "https://docs.ethertia.com/zh/"
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //siteTitle: false,
    logo: { 
        light: "/res/logo-bl.png",
        dark: "/res/logo-wt.png",
        alt: ""
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { 
            text: 'Overview', 
            link: '/intro/',
            collapsed: true,
            items: [
              { text: 'Build & Run', link: '/intro/build-run' },
              { text: 'Source Overview', link: '/intro/source-overview' },
              { text: 'Join Development', link: '/intro/join-dev' },
            ]
          },
          { 
            text: 'Roadmap', 
            link: '/intro/roadmap', 
            collapsed: true,
            items: [
              { text: 'Business Plan', link: '/intro/business-plan' },
            ]
          },
          { text: 'Showcase', link: '/intro/showcase' },
          { text: 'All Versions', link: '/intro/versions' },
          { text: 'About', link: '/intro/about' },
        ]
      },
      {
        text: 'Gameplay',
        items: [
          { text: 'Gamemodes', link: '/gameplay/intro' },
          { text: 'Items', link: '/gameplay' },
          { text: 'Mobs', link: '/gameplay' },
          { text: 'Recipes', link: '/gameplay' },
          { text: 'Biomes', link: '/gameplay' },
          { text: 'Commands', link: '/gameplay' },
          { 
            text: 'Tutorials', 
            link: '/gameplay/tutorials',
            collapsed: true,
            items: [
              { text: 'Servers', link: '/getting-started/build-run' },
              { text: 'Assets', link: '/getting-started/build-run' },
              { text: 'Mods', link: '/getting-started/build-run' },
            ]
          },
        ]
      },
      {
        text: 'Development',
        items: [
          { 
            text: 'Graphics',
            link: '/graphics/',
            collapsed: true,
            items: [
              { text: 'Vulkan', link: '/intro' },
              { text: 'ImGui', link: '/intro' },
              { text: 'Animation', link: '/intro' },
            ]
          },
          {
            text: 'Physics', 
            link: '/physics/intro',
            collapsed: true,
            items: [

            ]
          },
          { text: 'WorldGen', link: '/intro' },
          { text: 'Items', link: '/intro' },
          { text: 'Entity', link: '/intro' },
          { text: 'Audio', link: '/intro' },
          { text: 'Modding', link: '/intro' },
          { text: 'Networking', link: '/intro' },
        ]
      },
      {
        text: 'Miscellaneous',
        items: [
          { 
            text: 'blog', 
            collapsed: true,
            items: [
              { text: '9.5 VitePress', link: '/blog23/9.5-vitepress.md' },
              { text: '9.6 bugfix: ImGui vulkan Error: "RenderPass incompatible"', link: '/blog23/9.6-bugfix-imgui-renderpass-incompatible' },
              { text: '9.10 json libs', link: '/blog23/9.10-json-libs.md' },
            ]
          },
          { 
            text: 'vkx', 
            link: '/libvkx/',
            collapsed: true,
            items: [
              { text: '9.6 bugfix: ImGui vulkan Error: "RenderPass incompatible"', link: '/blog23/9.6-bugfix-imgui-renderpass-incompatible' },
            ]
          },
          { text: 'stdx', link: '/getting-started/source-overview' },
          // { text: 'Roadmap', link: '/getting-started/source-overview' },
          // { text: 'Business Plan', link: '/intro' },
          // { text: 'Development Plan', link: '/intro' },
        ]
      },
      // {
      //   text: 'Libraries',
      //   items: [
      //   ]
      // },
    ],

    aside: true,
    outline: {
      level: 2,
      label: "On this page"
    },

    nav: [
      { text: 'Showcase', link: '/intro/showcase' },
      // { text: 'Discussions', link: 'https://elytra.dev' },
      { text: 'Dev', link: '/' },
      {
        text: 'About',
        items: [
          {
            items: [
              { text: 'Discord', link: '...' },
              { text: 'Github', link: '...' },
              { text: 'YouTube', link: '...' },
              { text: 'Bilibili', link: '...' }
            ]
          },
          { text: 'Examples', link: '/markdown-examples' },
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dreamtowards/Ethertia' },
      { icon: 'discord', link: 'https://github.com/Dreamtowards/Ethertia', ariaLabel: 'cool link' },
      { icon: 'youtube', link: 'https://github.com/Dreamtowards/Ethertia' },
      { icon: 'twitter', link: 'https://github.com/Dreamtowards/Ethertia' },
    ],
    
    
    // footer will only be displayed when the page doesn't contain a sidebar. This is due to design concerns.
    // footer: {
    //   // message: 'Released under the MIT License.',
    //   // copyright: 'Copyright © Elytra Corporation, Eldrine Le Prismarine'
    // },
    
    editLink: {
      pattern: 'https://github.com/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: true,
    // {
    //   text: 'Updated at', 
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'medium'
    //   }
    // }

    search: {
      provider: 'local'
    },

  },
  markdown: {
    lineNumbers: false
  }
})
