<h1 align="center">Website Maker</h1>
<p align="center">
  <a href="https://github.com/hd996/website-maker"><img src="https://img.shields.io/github/license/hd996/website-maker?color=%231890FF&style=flat-square" alt="License"></a>
  <a href="https://github.com/hd996/website-maker"><img src="https://img.shields.io/badge/node->=14.x-brightgreen.svg" alt="Version"></a>
  <a href="https://github.com/hd996/website-maker"><img src="https://img.shields.io/github/stars/hd996/website-maker?color=%231890FF&style=flat-square" alt="Stars"></a>
</p>

## 项目演示

由于没有部署，可以点击下方图片观看视频，查看项目演示，感兴趣的可以按照下方「开发指南」本地试一下
[![website-maker](https://web-cdn.agora.io/website-maker/imgs/website-maker.png)](https://www.bilibili.com/video/BV1kZ4y1y7wE/)

## 项目介绍

Website Maker 是基于 Nuxt3 的低代码建站方案

- website：即官网，基于 Nuxt3 开发
- website-cms：官网配置平台，基于 NestJS 和 Vue3 开发
- 响应式设计：基于 Unocss 的 `shortcuts`，详见 `nuxt.config.ts`

## 开发指南

```bash
# 导入 sql
$ create database website_maker;
$ use website_maker;
$ source init.sql;

# 安装依赖
# 由于Nuxt3目前不支持pnpm，所以增加--shamefully-hoist选项
# https://github.com/nuxt/framework/discussions/939
# https://pnpm.io/zh/cli/install#--shamefully-hoist
$ pnpm install
$ pnpm install --shamefully-hoist --filter @web/website

# 启动 website
$ pnpm start:website

# 启动 website-cms
$ pnpm start:website-cms
```

## 快速入门 Nuxt3

可以看下我之前写的 [nuxt3-demo](https://github.com/hd996/nuxt3-demo)，在[掘金](https://juejin.cn/post/7031436488260730911)也有简单的介绍

## Todo

- 权限
- 组件
- 部署

## 相关链接

- [PNPM](https://pnpm.io)
- [Vue3](https://v3.cn.vuejs.org/guide/introduction.html)
- [VueUse](https://vueuse.org/guide)
- [Nuxt3](https://v3.nuxtjs.org)
- [Pinia](https://github.com/posva/pinia)
- [UnoCSS](https://github.com/antfu/unocss)
- [Material Design Icons](https://icon-sets.iconify.design/mdi)
- [NestJS](https://docs.nestjs.cn/8/introduction)
