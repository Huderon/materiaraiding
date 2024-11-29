import { defineConfig } from 'vitepress'
import Components from "unplugin-vue-components/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  base: '/materiaraiding/',
  title: "Materia Raiding",
  description: "Materia Raiding is a community driven project to collate the various guide and tools created for raiding in the FF14 Materia Datacenter.",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/favicon.ico',
    outline: 'deep',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: "Guides",
        items: [
          {text: "Extreme", link: "/guide/extreme"},
          {text: "Savage", link: "/guide/savage"},
          {text: "Ultimate", link: "/guide/ultimate"},
          {text: "Criterion", link: "/guide/criterion"},
        ]
      },
      {
        text: "Archive",
        items: [
          {text: "Stormblood", link: "/guide/archive/stormblood"},
          {text: "Endwalker", link: "/guide/archive/endwalker"},
        ]
      },
      {
        text: "Resources",
        items: [
          { text: 'Visitors Guide', link: '/resources/visitorsguide' },
          { text: 'Macro Mate', link: '/resources/macromate' },
          { text: 'Raidplan Templates', link: '/resources/raidplantemplates' },
        ]
      },
    ],
    sidebar: {
      '/guide/extreme': [
        {
          text: 'Extreme',
          items: [
            { text: 'EX1', link: '/guide/extreme/ex1' },
            { text: 'EX2', link: '/guide/extreme/ex2' },
            { text: 'EX3', link: '/guide/extreme/ex3' }
          ]
        }
      ],
      '/guide/savage': [
        {
          text: 'Savage',
          items: [
            { text: 'M1S', link: '/guide/savage/m1s' },
            { text: 'M2S', link: '/guide/savage/m2s' },
            { text: 'M3S', link: '/guide/savage/m3s' },
            { text: 'M4S', link: '/guide/savage/m4s' },
          ]
        }
      ],
      '/guide/ultimate': [
        {
          text: 'Ultimate',
          items: [
            { text: 'UCOB', link: '/guide/ultimate/ucob' },
            { text: 'UWU', link: '/guide/ultimate/uwu' },
            { text: 'TEA', link: '/guide/ultimate/tea' },
            { text: 'DSR', link: '/guide/ultimate/dsr' },
            { text: 'TOP', link: '/guide/ultimate/top' },
            { text: 'FRU', link: '/guide/ultimate/fru' },
          ]
        }
      ],
      '/guide/criterion': [
        {
          text: 'Criterion',
          items: [
            { text: 'ASS', link: '/guide/criterion/ass' },
            { text: 'AMR', link: '/guide/criterion/amr' },
            { text: 'AAI', link: '/guide/criterion/aai' },
          ]
        }
      ],
      '/guide/archive/endwalker': [
        {
          text: 'Endwalker',
          items: [
            {
              text: 'Extreme',
              items: [
                { text: 'EX4', link: '/guide/archive/endwalker/extreme/ex4' },
                { text: 'EX5', link: '/guide/archive/endwalker/extreme/ex5' },
                { text: 'EX6', link: '/guide/archive/endwalker/extreme/ex6' },
                { text: 'EX7', link: '/guide/archive/endwalker/extreme/ex7' },
              ]
            },
            {
              text: 'Savage',
              items: [
                { text: 'P3S', link: '/guide/archive/endwalker/savage/p3s' },
                { text: 'P4S', link: '/guide/archive/endwalker/savage/p4s' },
                { text: 'P5S', link: '/guide/archive/endwalker/savage/p5s' },
                { text: 'P6S', link: '/guide/archive/endwalker/savage/p6s' },
                { text: 'P7S', link: '/guide/archive/endwalker/savage/p7s' },
                { text: 'P8S', link: '/guide/archive/endwalker/savage/p8s' },
                { text: 'P9S', link: '/guide/archive/endwalker/savage/p9s' },
                { text: 'P10S', link: '/guide/archive/endwalker/savage/p10s' },
                { text: 'P11S', link: '/guide/archive/endwalker/savage/p11s' },
                { text: 'P12S-1', link: '/guide/archive/endwalker/savage/p12s-1' },
                { text: 'P12S-2', link: '/guide/archive/endwalker/savage/p12s-2' },
              ]
            }
          ]
        },
      ],
      '/guide/archive/stormblood': [
        {
          text: 'Stormblood',
          items: [
            {
              text: 'Extreme',
              items: [
                { text: 'EX4', link: '/guide/archive/stormblood/extreme/ex4' },
              ]
            },
          ]
        },
      ],
      '/resources': [
        {
          text: 'Resources',
          items: [
            { text: 'Visitors Guide', link: '/resources/visitorsguide' },
            { text: 'Macro Mate', link: '/resources/macromate' },
            { text: 'Raid Plan Templates', link: '/resources/raidplantemplates' },
          ]
        }
      ],
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/EySn5dRj65"},
      { icon: 'github', link: 'https://github.com/materiaraiding/materiaraiding' },
    ],
    editLink: {
      pattern: "https://github.com/materiaraiding/materiaraiding/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: '© SQUARE ENIX CO., LTD. All Rights Reserved | FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. | All content © their respective authors | Materia Raiding is a non-profit community-owned website.',
    },
  },
  vite: {
    optimizeDeps: {
      exclude: [
        'vitepress',
      ],
    },
    plugins: [
      Components({
        include: [/\.vue$/, /\.md$/],
        dirs: '.vitepress/theme/components',
        dts: '.vitepress/components.d.ts',
      }),
    ],
  },
})
