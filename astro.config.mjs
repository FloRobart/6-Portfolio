// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",

  base: process.env.BASE_URL || "/",
  trailingSlash: "never",
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  compressHTML: true,

  env: {
    validateSecrets: true,
    schema: {
      APP_NAME: envField.string({ context: "client", access: "public", optional: false }),
    },
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    root: ".",
    publicDir: "./public",
  },
});