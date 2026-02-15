import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '黎泽懿_Aionflux',
  description: '黎泽懿_Aionflux 的个人博客',
  
  bundler: viteBundler(),
  
  theme: plumeTheme({
    // Theme options are in plume.config.ts
  }),
})
