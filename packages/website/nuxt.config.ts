import { defineNuxtConfig } from 'nuxt3'

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Website',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Website',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Website',
      },
      isDev && {
        name: 'referrer',
        content: 'no-referrer',
      },
    ],
    link: [],
    script: [],
  },

  buildModules: ['@unocss/nuxt'],

  unocss: {
    uno: true,
    icons: true,
    attributify: true,

    shortcuts: [
      [/^pc-([a-z]+)-(\d+)$/, ([, w, d]) => `xl:${w}-[${d}px] lg:${w}-[${(1600 / 1920) * d}px]`],
      [/^ipad-([a-z]+)-(\d+)$/, ([, w, d]) => `md:${w}-[${d / 7.68}vw]`],
      [/^mobile-([a-z]+)-(\d+)$/, ([, w, d]) => `lt-md:${w}-[${d / 3.75}vw]`],
    ],
    rules: [],
    theme: {
      colors: {
        blue: {
          DEFAULT: '#099dfd',
        },
      },
      fontFamily: {
        numbers: ['D DIN'],
        numbersBold: ['D DIN Bold'],
      },
    },
  },

  css: ['@/assets/scss/index.scss'],

  vite: {
    css: {
      // https://github.com/nuxt-community/style-resources-module/issues/190
      // https://vite.nuxtjs.org/misc/common-issues/#styleresources
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
  },

  router: {
    extendRoutes(routes: any) {
      routes.push({
        path: '*',
        redirect: '/404',
      })
    },
  },

  // publicPath: https://github.com/nuxt/framework/issues/1467
  build: {},
} as any)
