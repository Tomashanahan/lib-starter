import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'lib-starter'
    },
    sourcemap: true,
    target: 'es6',
    minify: false
  }
})
