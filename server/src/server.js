// const http = require('http');
// const app = require('../build/src/app');

// const port = parseInt(process.env.PORT, 10) || 5000;
// app.set('port', port);

// const server = http.createServer(app);
// server.listen(port);

// server.on('listening', () => {
//   console.log(`Server is listening on port ${server.address().port}`);
// });
const app = require('./app');
const http = require('http');
const server = http.createServer(app);

server.listen(5000);

server.on('listening', () => {
  console.log('server is listening for requests on port 5000');
});
