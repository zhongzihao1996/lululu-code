Function.prototype.bind_ = function (ctx, ...args) {
  let fn = this;
  return function () {
    fn.apply(ctx, args.concat(...arguments));
  };
};

const obj = {
  name: '小豪',
  age: 25,
  say(...args) {
    console.log(`name:${this.name}  age:${this.age}`);
    console.log(args);
  },
};
const fn = obj.say.bind_({ name: '帅逼小豪', age: 18 }, 1, 2, 3);
fn(4);
fn(5);
