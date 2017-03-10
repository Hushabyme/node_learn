// 获取 http 模块
const http = require('http');

// 创建服务器
// request 表示客户端发往服务端的数据
// response 表示服务端响应的数据
const server = http.createServer((request, response) => {
  // 向浏览器写入数据
  response.write('Hello World!');
  response.end();
});

// 服务器端口监听
// http://localhost:8080
server.listen(8080);

