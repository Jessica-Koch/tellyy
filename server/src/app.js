const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const routeConfig = require('./config/route-config.js');

routeConfig.init(app);

module.exports = app;
