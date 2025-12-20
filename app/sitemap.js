export default function sitemap() {
  const baseUrl = 'https://www.o7digital-consulting.com';
  const currentDate = new Date().toISOString();
  
  // Liste des pages principales
  const routes = [
    '',
    '/index-digital-agency',
    '/about',
    '/portfolio',
    '/contact',
  ];

  // Langues supportées
  const languages = ['', 'en', 'es', 'de']; // '' = français (default), 'en', 'es', 'de'

  const urls = [];

  // Générer les URLs pour chaque combinaison de route et langue
  languages.forEach(lang => {
    routes.forEach(route => {
      const langPrefix = lang ? `/${lang}` : '';
      urls.push({
        url: `${baseUrl}${langPrefix}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' || route === '/index-digital-agency' ? 'weekly' : 'monthly',
        priority: route === '' || route === '/index-digital-agency' ? 1.0 : 0.8,
        alternates: {
          languages: {
            fr: `${baseUrl}${route}`,
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
            de: `${baseUrl}/de${route}`,
          },
        },
      });
    });
  });

  return urls;
}
