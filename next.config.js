module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/overview': { page: '/overview' },
      '/vote': { page: '/vote' },
      '/charts': { page: '/charts' },
      '/battleground': { page: '/battleground' },
    };
  },
};
