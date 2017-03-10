// fs 模块是用来读取文件用的
// fs 的全称是 File System(文件系统)
const fs = require('fs');

// 参数：filename, callback
// callback 参数：error(错误时的操作), data(成功时的操作)
fs.readFile('index.html', (error, data) => {
  if(error) {
    throw new Error('Sorry, cannot find this file.')
  }
  console.log(data.toString());
});

// console.log(data);
// 运行后会得到以下结果:
// <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 3c 6d 65 74 61 ... >

// Buffer 就是原始数据，也就是二进制数据

// 因此可以使用 console.log(data.toSting()); 来返回你想看到的文件样子
// 接着就会出现以下的结果:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//   <meta charset="UTF-8">
//   <title>hello world</title>
// </head>
// <body>
// <h1>Hello World!</h1>
// </body>
// </html>

// 即 index.html 文件

// 顺便一提，我学习 Node.js 不单单是为了学习后端，更重要是学习与后台的数据交换
// 还有 HTTP 协议的使用，未来可以测试 Ajax、fetch 等跨域问题解决方案