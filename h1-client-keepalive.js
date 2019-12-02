const fetch = require('node-fetch');
const http = require('http');

const array = [...new Array(10)].map(v => v);

const agent = new http.Agent({
  keepAlive: true,
  keepAliveMsecs: 500,
  maxSockets: 2,
});

const fetchOpts = { agent };

array.forEach(() => {
  fetch('http://localhost:3000', fetchOpts).catch(() => {
    // noop
  });
});
