import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // For deployment in github
  // base: '/project-name/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/responsive.scss";`,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
