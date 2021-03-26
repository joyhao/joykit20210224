import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgLoader from 'vite-svg-loader';

import viteESLint from '@ehutch79/vite-eslint';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    viteESLint(),
    VitePWA({
      manifest: {
        name: "joyKit",
      },
    }),
  ],
  build: {
    assetsInlineLimit: 1024 * 10,
  },
});
