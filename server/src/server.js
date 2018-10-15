const http = require('http');
const app = require('../src/app');

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
