import { defineConfig } from 'vite';
import imageset from 'vite-imagetools';
import svgLoader from 'vite-svg-loader';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), imageset()],
  build: {
    assetsInlineLimit: 1024 * 10,
  },
});
