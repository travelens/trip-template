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
  integrations: [markdoc({
    tags: {
      gallery: {
        render: 'Gallery',
        attributes: {
          // Component props as attribute definitions
          // See Markdoc's documentation on defining attributes
          // https://markdoc.dev/docs/attributes#defining-attributes
          folder: { type: String },
        }
      },
    },
  }), alpine(), UnoCSS()]
})