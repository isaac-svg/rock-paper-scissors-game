import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "favicon-32x32.png",
        "apple-touch-icon.png",
        "maskable_icon.svg",
        "/images/bg-pentagon.svg",
        "/images/bg-triangle.svg",
        "/images/icon-close.svg",
        "/images/icon-lozard.svg",
        "/images/icon-rock.svg",
        "/images/icon-scissors.svg",
        "/images/icon-spock.svg",
        "/images/image-rules-bonus.svg",
        "/images/logo-bonus.svg",
        "/images/logo.svg",

      ],
      
      manifest: {
        name: "ROCK PAPER SCISSORS GAME",
        short_name: "Rock Paper Scissors",
        description:
          "Exciting and simple to play rock, paper scissors game",
        theme_color: "#141539",
        background_color: "#141539",
        start_url: "/",
        display:"standalone",
        icons: [
          {
            src: "/maskables/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose:"maskable any"
          },
          {
            src: "/maskables/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose:"maskable any"
          },
          {
            src: "/maskables/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose:"maskable any"
          },
          {
            src: "/maskables/icon-364x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose:"maskable any"
          },
          {
            src: "/maskables/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose:"any maskable"
          },
        ],
      },
    }),
  ],
  // server:{
  //   host:"0.0.0.0"
  // }
})
