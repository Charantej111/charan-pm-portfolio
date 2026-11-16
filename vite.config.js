import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// Custom middleware to serve HTML files cleanly without trailing slashes in dev mode
function multiPageMiddleware() {
  return {
    name: 'multi-page-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        let url = req.url.split('?')[0];
        if (url === '/about-me' || url === '/about-me/') {
          req.url = '/about-me/index.html';
        } else if (url === '/projects' || url === '/projects/') {
          req.url = '/projects/index.html';
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [multiPageMiddleware()],
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
