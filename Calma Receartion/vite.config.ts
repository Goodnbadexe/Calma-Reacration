import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'analyze'
      ? visualizer({
          filename: 'dist/bundle-treemap.html',
          template: 'treemap',
          gzipSize: true,
          brotliSize: true,
        })
      : undefined,
    viteCompression({
      verbose: false,
      disable: false,
      threshold: 2048,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteCompression({
      verbose: false,
      disable: false,
      threshold: 2048,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ].filter(Boolean),
  resolve: {
    alias: Object.fromEntries(
      Object.entries({
        '@': path.resolve(__dirname, 'src'),
        ...(process.env.VITEST
          ? { 'embla-carousel-react': path.resolve(__dirname, 'src/test/stubs/embla-carousel-react.ts') }
          : {})
      })
    ),
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    css: true,
  },
}) as any)
