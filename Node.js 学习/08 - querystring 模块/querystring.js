// 引入 querystring 模块
const querystring = require('querystring');

// 1. querystring.parse() 方法能把一个 URL 查询字符串（str）解析成一个键值对的集合。
const parse = querystring.parse('user=hushaby&password=123456789&age=22');

console.log(parse); // { user: 'hushaby', password: '123456789', age: '22' }

// 2. querystring.escape(str) 方法对给定的 str 执行 URL 百分号编码
// 但该方法通常不被直接使用，是供 querystring.stringify() 使用的

// 3. querystring.stringify() 方法通过遍历对象的自有属性，从一个给定的 obj 产生一个 URL 查询字符串。

const stringify = querystring.stringify({
  user: 'hushaby',
  password: '123456789',
  age: 22,
  sex: 'female'
});
console.log(stringify); // user=hushaby&password=123456789&age=22&sex=female

// 其实该方法与 parse() 方法是一对。

// 4. querystring.unescape(str)
// 该方法对给定的 str 上的 URL 百分号编码的字符执行解码。
// 且 querystring.unescape() 方法是供 querystring.parse() 使用的，且通常不被直接使用


// 总结：
// 也就是说，我们通常就是使用 stringify() 和 parse() 两个方法
// 使用这两个方法我们可以将数据转换成我们想要格式进行调用


