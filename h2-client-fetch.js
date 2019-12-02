const array = [...new Array(1000)].map(v => v);

const { context, disconnectAll } = require("fetch-h2");

const ctx = context({
  httpProtocol: "http2"
});

const promises = [];

array.forEach(() => {
  promises.push(
    ctx
      .fetch("http://localhost:4443", { method: "GET" })
      .then(res => {
        return res.text();
      })
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
      })
  );
});

Promise.all(promises).then(() => {
  console.log("closed");
  disconnectAll();
  process.exit(1);
});
