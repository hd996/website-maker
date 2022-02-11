import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { presetUno, presetAttributify } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),

    Unocss({
      presets: [presetAttributify({}), presetUno(), presetIcons({})],
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
    }),
  ],

  // css: {
  //   preprocessorOptions: {
  //     css: {
  //       charset: false,
  //     },
  //   },
  // },

  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:5555',
      },
    },
  },
})
