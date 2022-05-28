const http = require('http');

//'https://slackapphome.onrender.com'; //'127.0.0.0';
const hostname = 'slackapphome.onrender.com';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello,!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});