import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://o7digitalgroup.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'it', 'pt'],
    routing: { prefixDefaultLocale: false }
  }
});
