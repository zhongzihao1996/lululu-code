Function.prototype.call_ = function (ctx, ...args) {
  const context = ctx || window;
  context.fn = this; // 让传入的 ctx 执行函数
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

const obj = {
  name: '小豪',
  age: 25,
  say(...args) {
    console.log(`name:${this.name}  age:${this.age}`);
    console.log(args);
  },
};
obj.say.call_({ name: '帅逼小豪', age: 18 }, 1, 2, 3);
