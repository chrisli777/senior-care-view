
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// Update package.json to add the start script
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
if (!packageJson.scripts.start) {
  packageJson.scripts.start = 'vite';
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
  console.log('Added "start" script to package.json');
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
