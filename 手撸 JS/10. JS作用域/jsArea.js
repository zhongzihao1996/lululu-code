let arr = [1, 2, 3, 4]; // 假设 arr 地址为 0x0000

// arr 传入的是一个数组指针 0x0000
function fn(arr) {
  // 函数私有作用域
  arr[0] = 0; // 通过 0x0000 修改全局的 arr
  arr = [0]; // 开辟了新内存 假设为 0x1111
  arr[0] = 100; // 0x1111 修改第一项
  return arr; // 返回 0x1111
}

const res = fn(arr);
console.log(arr); // [ 0, 2, 3, 4 ]
console.log(res); // [100]
