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
          },
          { 
            text: 'Roadmap', 
            link: '/intro/roadmap', 
            collapsed: true,
            items: [
              { text: 'Development Plan', link: '/intro/dev-plan' },
              { text: 'Business Plan', link: '/intro/business-plan' },
            ]
          },
          { text: 'Showcase', link: '/intro/showcase/' },
          { text: 'All Versions', link: '/intro/versions' },
          { text: 'About', link: '/intro/about' },
        ]
      },
      {
        text: 'Specification',
        items: [
          { 
            text: 'Overview',
            link: '/dev/intro',
          },
          { 
            text: 'Rendering',
            link: '/graphics/',
            collapsed: true,
            items: [
              { text: 'Vulkan', link: '/graphics/vulkan' },
              { text: 'ImGui', link: '/intro' },
              { text: 'Animation', link: '/intro' },
              { text: 'RayTracing', link: '/graphics/raytracing' },
            ]
          },
          {
            text: 'Physics', 
            link: '/physics/intro',
            collapsed: true,
            items: [

            ]
          },
          { 
            text: 'Voxel', 
            link: '/voxel/',
            collapsed: true,
            items: [
              { text: 'Sparse Voxel Octree', link: '/voxel/svo' },
            ]
          },
          { text: 'ECS', link: '/intro' },
          { text: 'WorldGen', link: '/intro' },
          { text: 'Items', link: '/intro' },
          { text: 'Audio', link: '/intro' },
          { text: 'Modding', link: '/intro' },
          { text: 'Networking', link: '/intro' },
          { text: 'VR', link: '/misc/vr' },
        ]
      },
      {
        text: 'Development',
        items: [
          { 
            text: 'Intro',
            link: '/dev/intro',
            collapsed: true,
            items: [
              { text: 'Build & Run', link: '/intro/build-run' },
              { text: 'Source Overview', link: '/intro/source-overview' },
              { text: 'Join Development', link: '/intro/join-dev' },
              { text: 'Coding Spec', link: '/intro/coding-spec' },
            ]
          },
          { 
            text: 'Devlog',
            link: '/dev/intro',
            collapsed: true,
            items: [
            ]
          },
        ]
      },
      {
        text: 'Gameplay',
        items: [
          { 
            text: 'Gamemodes', 
            link: '/gameplay/intro',
            collapsed: true,
            items: [
              { text: 'Survival', link: '/gameplay/gamemode/survival-mode' },
              { text: 'Hardcore', link: '/gameplay/gamemode/survival-mode' },
              { text: 'Creative', link: '/gameplay/gamemode/survival-mode' },
              { text: 'Spectator', link: '/gameplay/gamemode/survival-mode' },
            ]
          },
          {
            text: 'Items', 
            link: '/gameplay/items',
            collapsed: true,
            items: [
              { text: 'Stick', link: '/gameplay/materials/' },
              { text: 'Fishing Rod', link: '/gameplay/items/fishing-rod' },
            ]
          },
          { 
            text: 'Materials', 
            link: '/gameplay/materials',
            collapsed: true,
            items: [
              { text: 'Grass', link: '/gameplay/materials/grass' },
              { text: 'Stone', link: '/gameplay/materials/stone' },
              { text: 'Cobblestone', link: '/Gameplay/Materials/Cobblestone' },
              { text: 'Coal Ore', link: '/gameplay/materials/' },
              { text: 'Oak Log', link: '/gameplay/materials/' },
              { text: 'Oak Plank', link: '/gameplay/materials/' },
              { text: 'Oak Leaves', link: '/gameplay/materials/' },
            ]
          },
          { text: 'Mobs', link: '/gameplay/mobs' },
          { text: 'Recipes', link: '/gameplay/recipes' },
          { text: 'Biomes', link: '/gameplay/biomes' },
          // { text: 'Achivements', link: '/gameplay/achivements' },
          // { text: 'Enchantments', link: '/gameplay/enchantment' },
          // { text: 'Effects', link: '/gameplay/effects' },
          { text: 'Commands', link: '/gameplay/commands' },
          { text: 'Difficulty', link: '/gameplay/difficulty' },
          { text: 'Editor', link: '/gameplay/editor' },
          { 
            text: 'Tutorials', 
            link: '/gameplay/tutorials',
            collapsed: true,
            items: [
              { text: 'Servers', link: '/gameplay/tutorials/servers' },
              { text: 'Assets', link: '/gameplay/tutorials/assets' },
              { text: 'Mods', link: '/gameplay/tutorials/mods' },
            ]
          },
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
      level: [2, 3],
      label: "On this page"
    },

    nav: [
      { text: 'Showcase', link: '/intro/showcase/' },
      // { text: 'Discussions', link: 'https://elytra.dev' },
      { text: 'Dev', link: '/' },
      {
        text: 'About',
        items: [
          {
            items: [
              { text: 'Official Site', link: 'https://ethertia.com' },
              { text: 'Documentations', link: 'https://docs.ethertia.com' },
              { text: 'Discord', link: 'https://github.com/Dreamtowards/Ethertia' },
              { text: 'Github', link: 'https://discord.gg/k7ssbPJQnp' },
              { text: 'YouTube', link: '...' },
              { text: 'QQ', link: 'https://jq.qq.com/?_wv=1027&k=tgM29oDM' },
              { text: 'Bilibili', link: 'https://space.bilibili.com/19483166' },
            ]
          },
          { text: 'Roadmap', link: 'https://jq.qq.com/?_wv=1027&k=tgM29oDM' },
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dreamtowards/Ethertia' },
      { icon: 'discord', link: 'https://discord.gg/k7ssbPJQnp', ariaLabel: 'cool link' },
      { icon: 'youtube', link: '/' },
      { icon: 'twitter', link: '/' },
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
