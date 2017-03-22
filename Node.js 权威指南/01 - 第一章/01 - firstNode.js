const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-type': 'text/html'});
  response.write('<head><meta charset="utf-8"></head>');
  response.end('<h1>Hello World! I\'m learning Node.js.</h1>');
}).listen(8080, '127.0.0.1');

console.log('Server running at http://localhost:8080');