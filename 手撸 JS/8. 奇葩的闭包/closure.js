/**
 *
 * @param {*} n
 * @param {*} o
 */
function fun(n, o) {
  console.log(o);
  // console.log(n, o);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}

const a = fun(0); // a 返回一个对象 {fun:function(){...}}
a.fun(1); // 调用 fun(1,0);
a.fun(2); // fun(2,0);
a.fun(3); // fun(3,0);
console.log('------a------');
// 输出 undefined 0 0 0

const b = fun(0).fun(1).fun(2).fun(3);
console.log('------b------');
// 输出 underfined 0 1 2

const c = fun(0).fun(1);
c.fun(2);
c.fun(3);
console.log('------c------');
// 输出 underfined 0 1 1
