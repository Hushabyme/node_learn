// 获取 http 模块
const http = require('http');

// 创建服务器
// request 表示客户端发往服务端的数据
// response 表示服务端响应的数据
const server = http.createServer((request, response) => {
  // 展示大概的意思，这个很 low，不值得这么用
  // 如果网站很多，这样不行
  switch (request.url) {
    case '/1.html' :
      response.write('1.html');
      break;
    case '/2.html' :
      response.write('2.html');
      break;
    default :
    response.write('404');
      break;
  }

  response.end();
});

// 服务器端口监听
// http://localhost:8080
server.listen(8080);

