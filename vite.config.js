import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'copy-file-compatible-script',
      writeBundle() {
        const outputDirectory = resolve('dist/src')
        mkdirSync(outputDirectory, { recursive: true })
        copyFileSync(resolve('src/main.js'), resolve(outputDirectory, 'main.js'))
      }
    }
  ]
})
