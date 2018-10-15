const express = require('express');
const app = express();

const routeConfig = require('./config/route-config.js');
require('dotenv').config();

routeConfig.init(app);

module.exports = app;
