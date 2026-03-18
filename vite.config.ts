import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Dòng này giúp Vite hiểu figma:asset/ chính là thư mục src/assets/ của bạn
      "figma:asset": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});