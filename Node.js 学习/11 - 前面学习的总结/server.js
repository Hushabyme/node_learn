const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

http.createServer((request, response) => {
  const path = url.parse(request.url, true);
  const pathname = path.pathname;
  // GET
  const GET = path.query;

  // POST
  let str = '';

  request.on('data', data => str += data);

  request.on('end', () => {
    const POST = querystring.parse(str);

    response.write('数据已成功发送！');

    console.log(pathname, GET, POST);

  });

  response.setHeader("Content-Type", "text/html");

  fs.readFile('index.html', (error, data) => {
    if(error) {
      console.log(error);
    } else {
      response.write(data);

      response.end();
    }
  });

}).listen(2333);