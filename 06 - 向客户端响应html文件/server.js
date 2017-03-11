const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

  // 设置 HTTP 响应头(Header)，标识这个文件类型是 html 文件
  response.setHeader("Content-Type", "text/html");

  // 读取文件
  fs.readFile('index.html', (err, data) => {
    if(err) {
      console.log(err);
    } else {
      response.write(data);
    }

    // 文件写入后，关闭服务器
    response.end();
  });

  // Node.js 中所有的操作都是异步执行的，因此这里的 end() 方法在读文件之前就执行完毕了
  // 也就是说，前面读文件的时候，将其加入到事件循环中，然后执行 end() 方法
  // end() 方法执行完了以后，再去读文件，就读取不到文件了
  // response.end();
});

server.listen(8888);