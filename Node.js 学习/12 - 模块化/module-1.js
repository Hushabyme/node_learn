exports.num = 1;

/*
exports.plus = (a, b) => a + b;
exports.minus = (a, b) => a + b;
exports.multiply = (a, b) => a + b;
exports.divide = (a, b) => a + b;
*/


/*
*
* 但是，这样每一次 exports(输出)就需要定义一次，这样多麻烦啊
*
* */

// 我们可以使用 module.exports 批量的输出

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {
  a: 1,
  b: 2,
  plus: plus,
  minus: minus,
  multiply: multiply,
  divide: divide,
};

// 我们可以看到，这样并没有什么不一样，但，更加的方便

// ES6 的 import 语法也是可以这样的，但是由于目前的 Node.js 版本是不支持 import/export，所以没办法演示