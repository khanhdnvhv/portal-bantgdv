import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Thêm dòng này

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Biến "figma:asset/" thành đường dẫn thực tế đến folder src/assets
      "figma:asset": path.resolve(__dirname, "./src/assets"),
    },
  },
});