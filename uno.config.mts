import {
  defineConfig,
  presetTypography,
  presetIcons,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [{ 'i-logo': 'i-logos-astro w-6em h-6em transition-800' }],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetWind4({
      preflights: {
        reset: true
      }
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto Sans',
        mono: 'Noto Sans Mono',
        display: 'Noto Serif',
        heading: 'Noto Serif'
      }
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  theme: {
    colors: {
      // Rosely design system — full palette
      rosely: {
        black: '#27272a', // Black Beauty — deep text / dark backgrounds
        granite: '#615f5f', // Granite Gray — muted text / borders
        opal: '#a49e9e', // Opal Gray — placeholders / secondary UI
        sugar: '#f4eee8', // Sugar Swizzle — warm off-white background
        morning: '#ec809e', // Morning Glory — primary pink accent
        rose: '#f7caca', // Rose Quartz — gentle base pink
        barely: '#F8D7DD', // Barely Pink — soft background tint
        heavenly: '#f4dede', // Heavenly Pink — ultra-soft accent
        grapeade: '#85677b', // Grapeade — dark purple accent
        orchid: '#b565a7', // Radiant Orchid — vibrant accent
        lupine: '#be9cc1', // Lupine — soft purple states
        lavender: '#D2C4D6', // Lavender Fog — muted lilac bg
        raspberry: '#d2386c', // Raspberry Sorbet — errors / alerts
        spearmint: '#64bfa4', // Spearmint — success states
        aquarius: '#3CADD4', // Aquarius — links / info
        meadowlark: '#eada4f' // Meadowlark — warnings
      },
      pink: {
        DEFAULT: '#ec809e' // Morning Glory - enables text-pink, bg-pink, border-pink
      }
    }
  },
  safelist: [
    'i-fa6-brands-linkedin',
    'i-fa6-brands-facebook',
    'i-fa6-brands-instagram',
    'i-fa6-brands-github',
    'i-fa6-solid-location-dot'
  ]
})
