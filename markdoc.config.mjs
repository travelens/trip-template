import { defineMarkdocConfig, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  tags: {
    gallery: {
      render: component('./src/common/Gallery.astro'),
      attributes: {
        folder: { type: String }
      }
    }
  }
})
