import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProd = mode === 'production';
    return {
      base: isProd ? './' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      build: {
        outDir: 'docs'
      },
      resolve: {
        alias: {
<<<<<<< HEAD
          '@': path.resolve(__dirname, 'src'),
=======
<<<<<<< HEAD
          '@': path.resolve(__dirname, '.'),
=======
          '@': path.resolve(__dirname, 'src'),
>>>>>>> 4968055 (update)
>>>>>>> 389eb12 (update)
        }
      }
    };
});
