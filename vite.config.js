import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js
  base: '/my-portfolio/',

  plugins: [react()],

  build: {
    outDir: 'dist',
  },
});
