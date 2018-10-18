const logger = require('morgan');
const path = require('path');
const express = require('express');

module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');

    app.use(
      logger(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
      )
    );

    // Serve any static files
    const staticFiles = express.static(
      path.join(__dirname, '..', '..', '..', 'client/build')
    );

    // Handle React routing, return all requests to React app
    app.use(staticFiles);

    app.use(staticRoutes);
  }
};
