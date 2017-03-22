const http = require('http');

http.createServer((request, response) => {
  response.write('请求成功');

  response.end();
}).listen(8080);
