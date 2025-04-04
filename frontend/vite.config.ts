import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    esbuild: {
      keepNames: true,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        Router: path.resolve(__dirname, './src/router'),
        layouts: path.resolve(__dirname, './src/layouts'),
        routes: path.resolve(__dirname, './src/routes'),
        features: path.resolve(__dirname, './src/features'),
        components: path.resolve(__dirname, './src/components'),
        store: path.resolve(__dirname, './src/store'),
        pages: path.resolve(__dirname, './src/pages'),
      },
    },
  });
};
