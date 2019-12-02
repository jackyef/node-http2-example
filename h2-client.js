const array = [...new Array(1000)].map(v => v);

const http2 = require("http2");

const client = http2.connect("http://localhost:4443");

array.forEach(() => {
  const req = client.request({ ":method": "GET", ":path": "/" });
  // req.on("response", responseHeaders => {
    // do something with the headers
  //   console.log({ responseHeaders });
  // });
  // req.on("data", chunk => {
    // do something with the data
    // console.log("chunk", chunk);
  // });
  // req.on("end", () => {
  //   console.log('response received');
  // })
});

