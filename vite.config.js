/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/zgy.github.io/',
// })



export default defineConfig({
  plugins: [react()],
  base: '/zgy.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // Organize assets in a subfolder
    emptyOutDir: true,    // Clear dist folder before build
  }
});