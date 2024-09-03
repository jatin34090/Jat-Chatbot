const { legacyCreateProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    legacyCreateProxyMiddleware({
      target: 'http://localhost:5500/',
      changeOrigin: true,
    })
  );

};
