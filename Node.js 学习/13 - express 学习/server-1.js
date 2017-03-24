const express = require('./node_modules/express');

const server = express();

server.get('/', () => {
  console.log('GET');

});

server.post('/', () => {
  console.log('POST');
});

server.listen(6060);
