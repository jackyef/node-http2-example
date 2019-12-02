const { createServer } = require('http2');
const { readFileSync } = require('fs');

let i = 0;
function onRequest(req, res) {
  // Detects if it is a HTTPS request or HTTP/2
  const {
    socket: { alpnProtocol },
  } = req.httpVersion === '2.0' ? req.stream.session : req;

  i += 1;

  console.log(i, 'incoming request');
  res.writeHead(200, { 'content-type': 'application/json' });

  setTimeout(() => {
    console.log('response sent');
    res.end(
      JSON.stringify({
        alpnProtocol,
        httpVersion: req.httpVersion,
      }),
    );
  }, 1000);
}

const server = createServer({ allowHTTP1: true }, onRequest).listen(4443);

server.on('connection', () => {
  console.log('connection created');
});
