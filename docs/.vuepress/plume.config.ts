import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'

export default defineThemeConfig({
  logo: 'https://github.com/lzy98276.png',
  appearance: true,  // Dark mode switch
  profile: {
    name: '黎泽懿_Aionflux',
    description: '科技爱好者 | 开源贡献者',
    avatar: 'https://github.com/lzy98276.png',
    circle: true,
    location: 'China',
    organization: 'Aionflux',
  },
  social: [
    { icon: 'github', link: 'https://github.com/lzy98276' },
  ],
  navbar,
  footer: {
    message: 'Powered by VuePress & Plume',
    copyright: '© 2026 黎泽懿_Aionflux',
  },
})
