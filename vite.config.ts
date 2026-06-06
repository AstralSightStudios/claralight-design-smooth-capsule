import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: true,
    fs: {
      strict: false,
    },
  },
});
