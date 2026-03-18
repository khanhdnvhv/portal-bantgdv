import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // Thêm dòng này (Tên repository của bạn phải nằm giữa hai dấu gạch chéo)
  base: "/portal-bantgdv/", 
  
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "figma:asset": path.resolve(__dirname, "./src/assets"),
    },
  },
});