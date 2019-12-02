const http = require('http');

let i = 0;
const server = http.createServer((req, res) => {
  i += 1;
  console.log(i, 'incoming request...');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  setTimeout(() => {
    res.end('ok');
  }, 1000);
});

server.on('connection', () => {
  console.log('a new connection!');
});

server.listen(3000);