const express = require('./node_modules/express');

// 创建服务器
const server = express();

// 处理请求
server.use('/index.html', (req, res) => {
  res.send('<h1>Hello World</h1>');
  res.end();
});

// 监听
server.listen(8082);

// 输入 http://localhost:8082/index.html 查看结果

/*
* 处理请求的 3 种方法：
* .get：处理 GET 请求
* .post：处理 POST 请求
* .use：处理 GET/POST 请求
* */