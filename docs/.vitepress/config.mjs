import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '蜡烛图技术笔记',
  description: '股票K线蜡烛图技术学习总结',
  base: '/lazhutujishu/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '蜡烛图技术', link: '/candlestick/01-锤子线与上吊线' }
    ],

    sidebar: {
      '/candlestick/': [
        {
          text: '蜡烛图技术',
          items: [
            { text: '01 锤子线与上吊线', link: '/candlestick/01-锤子线与上吊线' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SeerGlaucus/lazhutujishu' }
    ],

    footer: {
      message: '持续学习，持续记录',
      copyright: 'Copyright © 2026'
    }
  }
})
