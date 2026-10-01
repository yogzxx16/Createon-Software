import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import express from 'express';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Try to load .env from current directory, and fallback to parent directory
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'vercel-api-dev-server',
        configureServer(server) {
          const app = express();
          app.use(express.json());
          app.use('/api/contact', async (req, res) => {
            try {
              // Load the handler from api/contact.ts
              const module = await server.ssrLoadModule('/api/contact.ts');
              // Execute the default export (Vercel Node.js handler)
              await module.default(req, res);
            } catch (err) {
              console.error('API Handler Error:', err);
              res.status(500).json({ success: false, message: 'Internal server error.' });
            }
          });
          server.middlewares.use(app);
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
