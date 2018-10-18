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
    // Handle React routing, return all requests to React app
    app.use(
      express.static(path.join(__dirname, '..', '..', '..', 'client/build'))
    );
    app.get('*', function(req, res) {
      res.send(
        path.join(__dirname, '..', '..', '..', 'client/build', 'index.html')
      );
    });

    app.use(staticRoutes);
  }
};
