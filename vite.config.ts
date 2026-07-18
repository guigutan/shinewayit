import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = env.VITE_API_PROXY_TARGET || 'http://127.0.0.1:7003'

  return {
    base: '/it/',
    plugins: [vue()],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    server: {
      host: '0.0.0.0',
      port: 5174,
      open: false,
      proxy: { '/api': { target: apiTarget, changeOrigin: true } },
    },
    preview: {
      host: '0.0.0.0',
      port: 5174,
      proxy: { '/api': { target: apiTarget, changeOrigin: true } },
    },
  }
})
