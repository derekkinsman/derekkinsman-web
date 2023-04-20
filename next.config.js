module.exports = {
  poweredByHeader: false,
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
    ]
  },
}
