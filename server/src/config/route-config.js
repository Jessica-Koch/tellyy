const logger = require('morgan');
const path = require('path');
const staticFiles = express.static(
  path.join(__dirname, '../../../filmView/build')
);
module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');
    app.use(
      logger(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
      )
    );
    app.use(staticFiles);
    app.use(staticRoutes);
  }
};
