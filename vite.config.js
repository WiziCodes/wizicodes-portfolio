import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  env: {
    file: ".env",
  },
  plugins: [react()],
  build: {
    outDir: "build", // Output directory for the build
  },
});
