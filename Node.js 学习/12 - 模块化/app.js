// 这里的 ./ 表示当前文件路径，如果不喜欢这样写，我们可以自己新建一个 node_modules 目录
// 这样，在 require 的时候，就是使用全局查找
const module1 = require('./module-1');

// 这里是使用 node_modules 目录中的内容
// 一般来说，node_modules 中的内容都要有 json 配置文件，这里先不管
const module2 = require('module-2');

console.log(module1.num);  // 1
console.log(module1.plus(1, 2));  // 3
console.log(module1.minus(1, 2));  // -1
console.log(module1.multiply(1, 2));  // 2
console.log(module1.divide(1, 2));  // 0.5

console.log(module1.a);  // 1

// 说明这两个其实是一个东西，但是这里暂时不讲解太深
// 先学会使用，再追求原理
console.log(exports === module.exports);  // true

console.log(module2.map([1, 2, 3], 2));  // [ 2, 4, 6 ]
