const API_HOST = process.env.API_HOST || '/';

/** @type {{rewrites(): Promise<[{destination: string, source: string}]>, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "@/styles/base.scss";',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_HOST}api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
