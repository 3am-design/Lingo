import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Lingo/',
  build: {
    // Each page needs its own entry, otherwise only index.html is emitted.
    rollupOptions: {
      input: {
        main: 'index.html',
        faq: 'faq.html'
      }
    }
  }
})
