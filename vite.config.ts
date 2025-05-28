import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/_tests_/setup.ts',
  },
  server: {
    port: 3001, // 🔵 frontend corre aquí
    strictPort: true, // ❗️ para que no cambie de puerto si está ocupado
    proxy: {
      '/api': {
        target: 'http://localhost:3002', // 🔁 backend corre aquí
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
