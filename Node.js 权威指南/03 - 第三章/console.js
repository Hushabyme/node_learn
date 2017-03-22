// 在控制台中使用 node + filename 执行

function add(a, b) {
  return a + b;
}

console.time(add(1, 2));
console.timeEnd(add(1, 2));  // 0.211ms


const obj = {
  a: 1,
  add(a, b) {
    return a + b;
  }
};

console.dir(obj);  // { a: 1, add: [Function: add] }
