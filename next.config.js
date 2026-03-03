/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  env: {
    API_URL: process.env.API_URL,
    API_MAIL_KEY: process.env.API_MAIL_KEY,
    API_MAIL_FROM: process.env.API_MAIL_FROM,
    SITE_URL: process.env.SITE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    NEXT_PUBLIC_SENTRY_ENV: process.env.NEXT_PUBLIC_SENTRY_ENV,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
    NEXT_PUBLIC_GOOGLE_MEASUREMENT: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
    MSSQL_HOST: process.env.MSSQL_HOST,
    MSSQL_DATABASE: process.env.MSSQL_DATABASE,
    MSSQL_USERNAME: process.env.MSSQL_USERNAME,
    MSSQL_PASSWORD: process.env.MSSQL_PASSWORD,
    EMAIL_TEMPLATE_CONTACT_ID: process.env.EMAIL_TEMPLATE_CONTACT_ID,
    EMAIL_TEMPLATE_CONTACT_TO_EMAIL:
      process.env.EMAIL_TEMPLATE_CONTACT_TO_EMAIL,
    EMAIL_TEMPLATE_RECOVER_PASSWORD_ID:
      process.env.EMAIL_TEMPLATE_RECOVER_PASSWORD_ID,
    EMAIL_TEMPLATE_RECOVER_PASSWORD_FROM_EMAIL:
      process.env.EMAIL_TEMPLATE_RECOVER_PASSWORD_FROM_EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      },
      {
        // matching all API routes
        source: '/api/auth/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
