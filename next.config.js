module.exports = {
  poweredByHeader: false,
  images: {
    remotePatterns: ['www.datocms-assets.com'],
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
