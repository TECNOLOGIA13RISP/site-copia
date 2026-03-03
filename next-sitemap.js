module.exports = {
  siteUrl: 'https://13registro.com.br',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/sitemap.xml', '/recuperar-senha'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://13registro.com.br/sitemap.xml']
  }
}
