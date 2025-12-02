import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Required for GitHub Pages when using a custom domain
  base: "/",    

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        // Include 404 explicitly so GitHub Pages will serve it
        "404": path.resolve(__dirname, "404.html"),
      },
    },
  },
});
