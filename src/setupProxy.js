
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'https://instasmall-business.herokuapp.com',
      changeOrigin: true,
    })
  );
};