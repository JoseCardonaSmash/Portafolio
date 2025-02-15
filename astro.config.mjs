// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';
 

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  adapter: vercel(), // Sin opciones adicionales
  output: 'static',
});
