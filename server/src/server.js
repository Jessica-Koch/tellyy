const http = require('http');
const app = require('./app');
const express = require('express');

app.use(express.json());
const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
