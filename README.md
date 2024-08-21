---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.png'
  title: Havensli 博客
  description: 大度看世界  从容过生活
  tagline: 生活百般知味，人生需要笑对，风吹雨打知生活，苦尽甘来懂人生，高潮时享受成就，低谷时品味人生，以平常心看世界，有所为有所不为。知足常乐，保持进步。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://gitee.com/havensli' }
    - { icon: 'LogoWechat' , link: '/docs/wechat' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about

footer:
  startYear: 2024
---

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@2.x -g theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@2.x theme-cli init
```