import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

import vue from '@vitejs/plugin-vue';

vite.config.ts;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  build: {
    assetsInlineLimit: 1024 * 10,
  },
});
