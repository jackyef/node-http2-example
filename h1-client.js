const fetch = require('node-fetch');

const array = [...new Array(10)].map(v => v);

array.forEach(() => {
  fetch('http://localhost:3000')
    .catch(() => {
      // noop
    })
    .then(res => console.log({ res }))
    .catch(err => console.error(err));
});
