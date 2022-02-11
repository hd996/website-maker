<h1 align="center">Website Maker</h1>
<p align="center">
  <a href="https://github.com/hd996/website-maker"><img src="https://img.shields.io/github/license/hd996/website-maker?color=%231890FF&style=flat-square" alt="License"></a>
  <a href="https://github.com/hd996/website-maker"><img src="https://img.shields.io/badge/node->=14.x-brightgreen.svg" alt="Version"></a>
  <a href="https://github.com/hd996/website-maker"><img src="https://img.shields.io/github/stars/hd996/website-maker?color=%231890FF&style=flat-square" alt="Stars"></a>
</p>

## 项目介绍

Website Maker 是基于 Nuxt3 的低代码建站方案。

- website：网站
- website-cms：网站配置平台

## 开发

```bash
# 安装依赖

# 由于Nuxt3目前不支持pnpm，所以增加--shamefully-hoist选项，创建扁平的node_modules目录结构，官方支持后再改
# https://github.com/nuxt/framework/discussions/939
# https://pnpm.io/zh/cli/install#--shamefully-hoist
$ pnpm install
$ pnpm install --shamefully-hoist --filter @web/website

# 启动 website
$ pnpm start:website

# 启动 website-cms
$ pnpm start:website-cms
```

## 相关链接

- [PNPM](https://pnpm.io)
- [Vue3](https://v3.cn.vuejs.org/guide/introduction.html)
- [VueUse](https://vueuse.org/guide)
- [Nuxt3](https://v3.nuxtjs.org)
- [Pinia](https://github.com/posva/pinia)
- [UnoCSS](https://github.com/antfu/unocss)
- [Material Design Icons](https://icon-sets.iconify.design/mdi)
- [NestJS](https://docs.nestjs.cn/8/introduction)