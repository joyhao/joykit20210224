import path from 'path';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa';
import svgLoader from 'vite-svg-loader';
import tsconfigPaths from 'vite-tsconfig-paths';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
      "@assets": `${path.resolve(__dirname, "src/assets")}/`,
      "@views": `${path.resolve(__dirname, "src/views")}/`,
      "@com": `${path.resolve(__dirname, "src/components")}/`,
      "@router": `${path.resolve(__dirname, "src/router")}/`,
      "@store": `${path.resolve(__dirname, "src/store")}/`,
      "@scss": `${path.resolve(__dirname, "src/assets/scss")}/`,
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    tsconfigPaths(),
    VitePWA({
      manifest: {
        name: "joyKit",
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
  build: {
    assetsInlineLimit: 1024 * 10,
  },
});
