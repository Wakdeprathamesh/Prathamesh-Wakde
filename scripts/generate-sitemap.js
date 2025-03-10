const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://prathameshwakde.com';
const PUBLIC_DIR = path.join(__dirname, '../public');
const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/projects', changefreq: 'monthly', priority: 0.8 },
  { path: '/skills', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  ROUTES.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap generated at ${sitemapPath}`);
};

// Execute
writeSitemap(); 