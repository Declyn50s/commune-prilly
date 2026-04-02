import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import type { Plugin } from "vite";

const PUBLIC_DIRS = ["images", "posters", "docs", "videos"];
const PATH_RE = new RegExp(
  `\\/(${PUBLIC_DIRS.join("|")})\\/`,
);

function publicBasePathPlugin(): Plugin {
  return {
    name: "public-base-path",
    transform(code, id) {
      if (!/\.(tsx?|jsx?)$/.test(id) || id.includes("node_modules")) return;
      if (!PATH_RE.test(code)) return;

      const dirs = PUBLIC_DIRS.join("|");

      // 1. JSX attribute values: src="/images/..." → src={import.meta.env.BASE_URL+"images/..."}
      let result = code.replace(
        new RegExp(`=["'](\\/(${dirs})\\/[^"'\\s>]+?)["']`, "g"),
        (_match, p) => `={import.meta.env.BASE_URL+"${p.slice(1)}"}`,
      );

      // 2. Bare string/template literals: "/images/..." → import.meta.env.BASE_URL+"images/..."
      result = result.replace(
        new RegExp(`(["\`'])(\\/(${dirs})\\/[^"'\\s\`]+?)\\1`, "g"),
        (_match, _q, p) => `import.meta.env.BASE_URL+"${p.slice(1)}"`,
      );

      return result;
    },
  };
}

export default defineConfig({
  base: "/commune-prilly/",
  plugins: [react(), publicBasePathPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
