import UnoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'
import { SiteMetadata } from './src/common/config.ts'

// https://astro.build/config
export default defineConfig({
  site: SiteMetadata.site,
  base: process.env.npm_package_name + '/',
  integrations: [UnoCSS()]
})
