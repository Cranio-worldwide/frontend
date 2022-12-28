const { getEnv } = require('./src/shared/lib/getEnv');
const API_HOST = getEnv('API_HOST') || '/';

/** @type {{rewrites(): Promise<[{destination: string, source: string}]>, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
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
