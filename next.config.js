const API_HOST = process.env.API_HOST || '/';

/** @type {{rewrites(): Promise<[{destination: string, source: string}]>, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "@/styles/base.scss";',
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
