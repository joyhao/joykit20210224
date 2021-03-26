import Prism from 'markdown-it-prism';
import path from 'path';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import Markdown from 'vite-plugin-md';
import { VitePWA } from 'vite-plugin-pwa';
import svgLoader from 'vite-svg-loader';
import tsconfigPaths from 'vite-tsconfig-paths';

import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
      "@assets": `${path.resolve(__dirname, "src/assets")}/`,
      "@views": `${path.resolve(__dirname, "src/views")}/`,
      "@com": `${path.resolve(__dirname, "src/components")}/`,
      "@router": `${path.resolve(__dirname, "src/router")}/`,
      "@entity": `${path.resolve(__dirname, "src/entity")}/`,
      "@store": `${path.resolve(__dirname, "src/store")}/`,
      "@scss": `${path.resolve(__dirname, "src/assets/scss")}/`,
      "@img": `${path.resolve(__dirname, "src/assets/images")}/`,
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism);
      },
    }),
    svgLoader(),
    tsconfigPaths(),
    VitePWA({
      manifest: {
        name: "joyKit",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
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

    dynamicImportVars({
      // options
    }),
  ],
  build: {
    assetsInlineLimit: 1024 * 10,
  },
  // ssgOptions: {
  //   script: "async",
  //   formatting: "minify",
  // },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
    exclude: ["vue-demi"],
  },
});
