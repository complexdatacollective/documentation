/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://documentation.networkcanvas.dev',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
