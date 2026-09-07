import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          es: 'es',
          de: 'de',
          it: 'it',
          pt: 'pt'
        }
      }
    })
  ],
  output: 'static',
  site: 'https://www.o7digitalgroup.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'it', 'pt'],
    routing: { prefixDefaultLocale: false }
  }
});
