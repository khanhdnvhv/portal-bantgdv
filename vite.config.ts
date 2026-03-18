import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  // THÊM DÒNG NÀY (Đúng tên repository của bạn trên GitHub)
  base: "/portal-bantgdv/", 

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "figma:asset": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});