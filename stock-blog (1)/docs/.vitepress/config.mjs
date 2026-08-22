import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '蜡烛图技术笔记',
  description: '股票K线蜡烛图技术学习总结',
  base: '/stock-blog/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '蜡烛图技术', link: '/candlestick/01-introduction' }
    ],

    sidebar: {
      '/candlestick/': [
        {
          text: '蜡烛图技术',
          items: [
            { text: '01 蜡烛图基础', link: '/candlestick/01-introduction' },
            { text: '02 单根K线形态', link: '/candlestick/02-single-patterns' },
            { text: '03 多根K线组合', link: '/candlestick/03-multi-patterns' },
            { text: '04 实战应用总结', link: '/candlestick/04-practical' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/stock-blog' }
    ],

    footer: {
      message: '持续学习，持续记录',
      copyright: 'Copyright © 2026'
    }
  }
})
