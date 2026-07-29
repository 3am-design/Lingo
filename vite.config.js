import { defineConfig } from 'vite'

import { LOCALES, PAGES } from './build/config.mjs'

// Each page needs its own entry, otherwise only index.html is emitted. Derived
// from the same locale list the renderer uses, so adding a language is one edit
// in build/config.mjs and nothing here.
const input = Object.fromEntries(
  LOCALES.filter((locale) => locale.enabled).flatMap((locale) =>
    PAGES.map((page) => [
      `${locale.code}-${page.id}`,
      locale.dir ? `${locale.dir}/${page.file}` : page.file
    ])
  )
)

export default defineConfig({
  base: '/Lingo/',
  build: {
    rollupOptions: { input }
  }
})
