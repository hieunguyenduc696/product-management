const users = require('../routes/user.routes');
const auth = require('../routes/auth.routes');
const product = require('../routes/product.routes');
const upload = require('../routes/upload.routes');

const setupRoutes = (app) => {
  app.use('/api/v1/product', product);
  app.use('/api/v1/user', users);
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/upload', upload);
};

module.exports = {
  setupRoutes,
};
