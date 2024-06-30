// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personalinfo/', // Update this to your repository name
  plugins: [react()],
  // Other Vite configurations
  build: {
    // Rollup options
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Injecting custom HTML tags
  html: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      // Add more meta tags as needed
    ],
  },
});
