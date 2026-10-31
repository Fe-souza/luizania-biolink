import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import seo from "./vite-plugin-seo";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), seo({ type: "BeautySalon", instagram: "https://www.instagram.com/luizaniakanigoski.beauty/" }), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
