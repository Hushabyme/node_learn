const express = require('./node_modules/express');
const expressStatic = require('./node_modules/express-static');

const server = express();

// 用户数据
const users = {
  'Alice': '123',
  'Bob': '456',
  'Cherry': '789',
};

server.get('/login', (req, res) => {
  const user = req.query['user'];
  const password = req.query['password'];

  // 注意 "== null" 表示为 `null` 或 `undefined`
  if(users[user] == null) {
    res.send({ok: 'false', message: '该用户不存在'});
  } else if(users[user] !== password){
    res.send({ok: 'false', message: '密码错误'});
  } else {
    res.send({ok: 'true', message: '登陆成功'});
  }

});

server.use(expressStatic('./file'));

server.listen(2020);