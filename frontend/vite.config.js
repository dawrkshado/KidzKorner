import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["Coiny", "cursive"], 
      },
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // ms
    },
    host: true,
    port: 5173
  },
  build: {
    // Optimize build for SEO and performance
    // Use esbuild (default, faster) or terser for more aggressive minification
    minify: 'esbuild', // Change to 'terser' if you install terser package
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet'],
        },
      },
    },
    // Generate source maps for better debugging (can disable in production)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize asset inlining threshold
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet'],
  },
})
