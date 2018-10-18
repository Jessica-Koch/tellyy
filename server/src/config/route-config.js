const logger = require('morgan');
const path = require('path');
const express = require('express');

module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');
    const staticFiles = express.static('client/build');
    app.use(
      logger(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
      )
    );
    app.use(staticFiles);
    app.use(staticRoutes);
  }
};
