import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://nathan-geronimo-porfolio.netlify.app/',
      outDir: 'dist',
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
})
