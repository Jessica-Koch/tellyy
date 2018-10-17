const express = require('express');
const app = express();
app.use(express.json());
const routeConfig = require('./config/route-config.js');
require('dotenv').config();

routeConfig.init(app);

console.log('app.js ');

module.exports = app;
