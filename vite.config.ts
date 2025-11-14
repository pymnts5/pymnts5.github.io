// import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  plugins: [react()],
  server: {
    port: 5173,
  },
  optimizeDeps: {
    exclude: ['onlinepay-react'],
  },
  ssr: {
    noExternal: ['onlinepay-react'], // or true to bundle everything
  },
});
