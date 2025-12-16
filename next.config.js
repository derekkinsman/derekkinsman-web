module.exports = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com'
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Clacks-Overhead',
            value: 'GNU Terry Pratchett',
          }
        ],
      },
    ];
  },
};
