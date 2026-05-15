import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        research: resolve(__dirname, "research.html"),
        essays: resolve(__dirname, "essays.html")
      }
    }
  }
});
