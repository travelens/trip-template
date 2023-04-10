import UnoCSS from 'unocss/astro'
import markdoc from '@astrojs/markdoc'
import alpine from '@astrojs/alpinejs'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://travelens.github.io',
  base: 'trip',
  experimental: {
    assets: true
  },
  integrations: [markdoc(), alpine(), UnoCSS({
    injectReset: true
  })]
})