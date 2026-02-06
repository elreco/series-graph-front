import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'configure-well-known',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/.well-known/apple-app-site-association') {
            res.setHeader('Content-Type', 'application/json');
          }
          if (req.url === '/.well-known/assetlinks.json') {
            res.setHeader('Content-Type', 'application/json');
          }
          next();
        });
      }
    }
  ],
  base: "/",
  build: {
    minify: false,
    sourcemap: false,
    cssCodeSplit: false,
    target: "esnext",
    ssr: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});