import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import liveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-useless-escape
  plugins: [vue(), liveReload(`${__dirname}/../**/*\.php`)],
  build: {
    rollupOptions: {
      output: {
        dir: path.join(__dirname, '../novus/js/build'),
        entryFileNames: 'app.js',
        assetFileNames: (assetInfo) => {
          const extType = (assetInfo as any).name.split('.')[1]
          if (extType === 'css') {
            return `app.css`
          } else {
            return `assets/[name]-[hash][extname]`
          }
        },
        chunkFileNames: 'app.js'
        // manualChunks: undefined,
      }
    }
  },
  define: {
    __VUE_PROD_DEVTOOLS__: true // no effect
  }
})
