import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/simple_todo_app/",
  plugins: [react(), tailwindcss()],
});
