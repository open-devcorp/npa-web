import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      host: 'bf9136c35ac4.ngrok-free.app',
      protocol: 'wss'
    }
  }
});
