const http = require("http");

const array = [...new Array(1000)].map(v => v);

array.forEach(() => {
  http.get("http://localhost:3000").on("error", err => {
    console.error("err", err);
  });
});
