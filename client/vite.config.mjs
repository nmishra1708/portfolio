import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

function includeUploadsInBuild() {
  return {
    name: "include-upload-assets",
    apply: "build",
    async generateBundle() {
      const uploadsDirectory = resolve(projectRoot, "uploads");
      const entries = await readdir(uploadsDirectory, { withFileTypes: true });

      for (const entry of entries) {
        if (!entry.isFile()) continue;

        this.emitFile({
          type: "asset",
          fileName: `uploads/${entry.name}`,
          source: await readFile(resolve(uploadsDirectory, entry.name)),
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), includeUploadsInBuild()],
  server: {
    proxy: {
      "/api": "http://localhost:4000",
      "/uploads": "http://localhost:4000",
    },
  },
});
