// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
 

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  adapter: vercel({
    // Configuración esencial:
    // includeFiles: ["./public/**/*", "./src/server/**/*"], // Archivos estáticos y lógica de servidor
    maxDuration: 30,       // Timeout máximo para funciones serverless
    isr: false,            // Desactiva ISR si no lo usas
    edgeMiddleware: false, // Desactiva middleware Edge si no es necesario
    imageService: true,    // Habilita Vercel Image Optimization si usas imágenes
  }),
  output: 'static',
});
