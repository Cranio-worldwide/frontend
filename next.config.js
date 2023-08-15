/** @type {{rewrites(): Promise<[{destination: string, source: string}]>, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "@/styles/base.scss";',
  },
  trailingSlash: true,
  externalResolver: false,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cranio-worldwide.tk'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
