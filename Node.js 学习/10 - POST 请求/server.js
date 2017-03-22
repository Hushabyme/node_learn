const http = require('http');
const querystring = require('querystring');

http.createServer((request, response) => {
  let str = '';

  request.on('data', data => str += data);
  request.on('end', () => {
    const post_data = querystring.parse(str);

    console.log(post_data);  // { user: 'huashaby', password: '00000000' }

    response.write('数据已被接收！');

    response.end();
  })
}).listen(80);


// POST 数据比 GET 数据大得多
// 大概是 POST 为 1G，而 GET 只有 32k

// 以上并不是说是最好的方法，只是为了演示 POST 请求和 GET 请求的区别和联系。