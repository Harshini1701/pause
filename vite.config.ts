import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),TanStackRouterVite(),VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        "name": "Pause",
        "short_name": "Pause",
        "icons": [
          {
            "src": "web-app-manifest-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "display": "standalone"
      },
      

    }),],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
