import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-me/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        signalflow: resolve(__dirname, 'projects/signalflow-ai-workspace/index.html'),
        wayfinder: resolve(__dirname, 'projects/wayfinder-logistics-command/index.html'),
        pulse: resolve(__dirname, 'projects/pulse-clinical-intelligence/index.html'),
        morrow: resolve(__dirname, 'projects/morrow-mobile-finance/index.html'),
      }
    }
  },
  server: {
    port: 5173,
    host: true,
  }
})
