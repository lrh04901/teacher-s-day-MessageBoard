import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  server: {
    proxy: {
      "/api": "http://festival.lrhhz.cn:1337/",
      "/upload": "http://festival.lrhhz.cn:1337/",
    },
  },
})
