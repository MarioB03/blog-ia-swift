import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blog-ia-swift.vercel.app",
  trailingSlash: "never",
  markdown: {
    shikiConfig: {
      themes: {
        light: "min-light",
        dark: "min-dark",
      },
      defaultColor: false,
    },
  },
});
